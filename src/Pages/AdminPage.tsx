import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../Services/AuthService";
import { deleteAdminItem, getAdminItems, getAdminOptions, getAdminSummary } from "../Services/AdminService";
import { AdminOptionsModel, AdminSummaryModel, AdminTab } from "../Models/AdminModel";
import { PlaceModel } from "../Models/PlaceModel";
import { Header } from "../Component/Share/Header";
import { useIsMobile } from "../Component/Share/useIsMobile";
import { AdminTable } from "../Component/Admin/AdminTable";
import { AdminForm } from "../Component/Admin/AdminForm";
import { tabs } from "../Component/Admin/adminConfig";
import { getErrorMessage } from "../Component/Common";
import { admin } from "../Styles/Adminstyle";
import { getComponentStyle } from "../Styles/MergeStyles";

const TOAST_MS = 3000;

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();
  const isAdmin = user?.role === "Admin";
  const styles = getComponentStyle(admin, useIsMobile());

  const [tab, setTab] = useState<AdminTab>("places");
  const [summary, setSummary] = useState<AdminSummaryModel | null>(null);
  const [options, setOptions] = useState<AdminOptionsModel | null>(null);
  const [places, setPlaces] = useState<PlaceModel[]>([]);
  const [rows, setRows] = useState<any[] | null>(null);
  const [search, setSearch] = useState<string>("");
  const [placeFilter, setPlaceFilter] = useState<string>("");
  const [editing, setEditing] = useState<any | null | undefined>(undefined);   // undefined = form closed, null = adding
  const [error, setError] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const config = tabs.find((t) => t.tab === tab)!;

  const loadSummaryAndPlaces = () => {
    getAdminSummary().then(setSummary).catch(() => setSummary(null));
    getAdminItems<PlaceModel>("places").then(setPlaces).catch(() => setPlaces([]));
  };

  const loadRows = () => {
    setRows(null);
    getAdminItems<any>(tab)
      .then(setRows)
      .catch((err) => setError(getErrorMessage(err, `Could not load ${config.label.toLowerCase()}.`)));
  };

  useEffect(() => {
    if (!isAdmin) return;
    document.title = "Admin - Travel Planner";
    getAdminOptions().then(setOptions).catch((err) => setError(getErrorMessage(err, "Could not load the admin page.")));
    loadSummaryAndPlaces();
  }, [isAdmin]);

  useEffect(() => {
    if (!isAdmin) return;
    setSearch("");
    setPlaceFilter("");
    setError(null);
    loadRows();
  }, [tab, isAdmin]);

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), TOAST_MS);
    return () => clearTimeout(timer);
  }, [toast]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return (
      <div style={styles.mainWrapper}>
        <Header user={user} />
        <div style={styles.message}>
          🔒 This page is for admins only.
          <p style={styles.hint}>If you were just made an admin, log out and log in again.</p>
          <p><button style={styles.addButton} onClick={() => navigate("/home")}>← Back to home</button></p>
        </div>
      </div>
    );
  }

  const handleSaved = (message: string) => {
    setEditing(undefined);
    setToast(`✓ ${message}`);
    loadRows();
    loadSummaryAndPlaces();
  };

  const handleDelete = (row: any) => {
    if (!window.confirm(`Delete ${config.singular} "${row.name}"?\n\n${config.deleteWarning}`)) return;
    setError(null);
    deleteAdminItem(tab, row.id)
      .then(() => handleSaved(`Deleted ${config.singular} "${row.name}"`))
      .catch((err) => setError(getErrorMessage(err, `Could not delete this ${config.singular}.`)));
  };

  const term = search.trim().toLowerCase();
  const visibleRows = (rows ?? []).filter((r) =>
    (!term || config.searchText(r).toLowerCase().includes(term)) &&
    (!placeFilter || String(r.placeId) === placeFilter)
  );

  const stats: [string, number | undefined][] = [
    ["Places", summary?.places], ["Attractions", summary?.attractions], ["Stays", summary?.stays],
    ["Routes", summary?.routes], ["Users", summary?.users], ["Saved trips", summary?.trips]
  ];
  const tabStyle = (active: boolean) => ({ ...styles.tab, ...(active ? styles.tabActive : {}) });

  return (
    <div style={styles.mainWrapper}>
      <Header user={user} />

      <section style={styles.banner}>
        <h2 style={styles.bannerTitle}>Admin dashboard 🛠️</h2>
        <p style={styles.bannerText}>Add and update the places, attractions, stays and routes the trip planner uses.</p>
        <div style={styles.statGrid}>
          {stats.map(([label, value]) => (
            <div key={label} style={styles.stat}>
              <span style={styles.statValue}>{value ?? "–"}</span>
              <span style={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={styles.content}>
        <div style={styles.tabs}>
          {tabs.map((t) => (
            <button key={t.tab} style={tabStyle(t.tab === tab)} onClick={() => setTab(t.tab)}>{t.icon} {t.label}</button>
          ))}
        </div>

        <div style={styles.toolbar}>
          <input style={styles.searchInput} placeholder={`Search ${config.label.toLowerCase()}...`}
            value={search} onChange={(e) => setSearch(e.target.value)} />
          {config.hasPlaceFilter && (
            <select style={styles.filterSelect} value={placeFilter} onChange={(e) => setPlaceFilter(e.target.value)}>
              <option value="">All places</option>
              {places.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
            </select>
          )}
          <button style={styles.addButton} disabled={!options} onClick={() => setEditing(null)}>+ Add {config.singular}</button>
        </div>

        {error && <div style={{ ...styles.formError, marginTop: 0, marginBottom: "1vw" }}>{error}</div>}

        {rows === null
          ? <div style={{ ...styles.tableWrapper, ...styles.empty }}>Loading {config.label.toLowerCase()}...</div>
          : (
            <>
              <p style={styles.count}>Showing {visibleRows.length} of {rows.length}</p>
              <AdminTable styles={styles} columns={config.columns} rows={visibleRows}
                emptyText={rows.length === 0 ? `No ${config.label.toLowerCase()} yet.` : "Nothing matches your search."}
                onEdit={setEditing} onDelete={handleDelete} />
            </>
          )}
      </div>

      {editing !== undefined && options && (
        <AdminForm styles={styles} config={config} item={editing} places={places} options={options}
          onClose={() => setEditing(undefined)} onSaved={handleSaved} />
      )}

      {toast && <div style={styles.toast}>{toast}</div>}
    </div>
  );
};
