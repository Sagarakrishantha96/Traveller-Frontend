import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getLoggedInUser } from "../Services/AuthService";
import { deleteTrip, getSavedTrip, postSaveTrip, postTripPlan } from "../Services/TripService";
import { TripPlanModel, TripPlanRequestModel } from "../Models/TripPlanModel";
import { Header } from "../Component/Share/Header";
import { useIsMobile } from "../Component/Share/useIsMobile";
import { RouteCard } from "../Component/Itinerary/RouteCard";
import { DayTimeline } from "../Component/Itinerary/DayTimeline";
import { getErrorMessage, formatDate, formatPrice } from "../Component/Common";
import { itinerary } from "../Styles/Itinerarystyle";
import { getComponentStyle } from "../Styles/MergeStyles";

// New plan:   /itinerary?from=1&to=6&days=2&start=2026-11-10
// Saved trip: /trips/5
export const ItineraryPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();
  const styles = getComponentStyle(itinerary, useIsMobile());
  const [params] = useSearchParams();
  const { id } = useParams();

  const savedTripId = id ? Number(id) : null;
  const [plan, setPlan] = useState<TripPlanModel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<number | null>(savedTripId);
  const [busy, setBusy] = useState<boolean>(false);
  const [actionError, setActionError] = useState<string | null>(null);

  const request: TripPlanRequestModel = {
    fromPlaceId: Number(params.get("from")),
    toPlaceId: Number(params.get("to")),
    days: Number(params.get("days") ?? 2),
    startDate: params.get("start") ?? new Date().toISOString().slice(0, 10)
  };

  useEffect(() => {
    setPlan(null);
    setError(null);
    setSavedId(savedTripId);

    if (!savedTripId && (!request.fromPlaceId || !request.toPlaceId)) {
      setError("Missing trip details. Please search again from the home page.");
      return;
    }

    const load = savedTripId ? getSavedTrip(savedTripId) : postTripPlan(request);
    load
      .then((result) => {
        setPlan(result);
        document.title = `${result.to.name} trip - Travel Planner`;
      })
      .catch((err) => setError(getErrorMessage(err, "Could not load this trip. Please try again.")));
    // The request values come from the URL, so the URL is what we watch
  }, [savedTripId, params.toString()]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSave = () => {
    setBusy(true);
    setActionError(null);
    postSaveTrip(request)
      .then((saved) => setSavedId(saved.id))
      .catch((err) => setActionError(getErrorMessage(err, "Could not save this trip. Please try again.")))
      .finally(() => setBusy(false));
  };

  const handleDelete = () => {
    if (!savedId || !window.confirm("Delete this trip from My Trips?")) return;
    setBusy(true);
    setActionError(null);
    deleteTrip(savedId)
      .then(() => navigate("/trips"))
      .catch((err) => {
        setActionError(getErrorMessage(err, "Could not delete this trip. Please try again."));
        setBusy(false);
      });
  };

  if (error || !plan) {
    return (
      <div style={styles.mainWrapper}>
        <Header user={user} />
        <div style={{ ...styles.message, ...(error ? styles.messageError : {}) }}>
          {error ?? (savedTripId ? "Opening your trip..." : "✨ Planning your trip...")}
          {error && (
            <p>
              <button style={styles.primaryButton} onClick={() => navigate(savedTripId ? "/trips" : "/home")}>
                {savedTripId ? "← Back to My Trips" : "← Back to search"}
              </button>
            </p>
          )}
        </div>
      </div>
    );
  }

  const attractionCount = plan.days.reduce((n, d) => n + d.items.filter((i) => i.type === "Attraction").length, 0);
  const nights = plan.days.filter((d) => d.stay).length;
  const lastDate = plan.days[plan.days.length - 1].date;

  const coverStyle = {
    ...styles.cover,
    ...(plan.coverImageUrl
      ? { backgroundImage: `linear-gradient(180deg, rgba(10,92,99,0.55) 0%, rgba(10,40,45,0.8) 100%), url("${plan.coverImageUrl}")` }
      : {})
  };

  return (
    <div style={styles.mainWrapper}>
      <Header user={user} />

      <section style={coverStyle}>
        {savedTripId
          ? <button style={styles.backLink} onClick={() => navigate("/trips")}>← My Trips</button>
          : <button style={styles.backLink} onClick={() => navigate("/home")}>← Change search</button>}
        <h2 style={styles.coverTitle}>{plan.from.name} → {plan.to.name}</h2>
        <p style={styles.coverSubTitle}>
          {plan.numberOfDays} {plan.numberOfDays === 1 ? "day" : "days"} · {formatDate(plan.startDate)}
          {plan.numberOfDays > 1 ? ` – ${formatDate(lastDate)}` : ""}
        </p>
        <div style={styles.statRow}>
          <div style={styles.stat}>
            <span style={styles.statValue}>{attractionCount}</span>
            <span style={styles.statLabel}>places to visit</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statValue}>{nights}</span>
            <span style={styles.statLabel}>{nights === 1 ? "night" : "nights"}</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statValue}>{formatPrice(plan.estimatedCost.total)}</span>
            <span style={styles.statLabel}>estimated per person</span>
          </div>
        </div>
      </section>

      <div style={styles.content}>
        <div style={styles.mainColumn}>
          {plan.days.map((day) => <DayTimeline key={day.dayNumber} styles={styles} day={day} />)}
        </div>

        <aside style={styles.sideColumn}>
          <div style={styles.card}>
            {savedId ? (
              <>
                <p style={styles.savedNote}>✓ Saved in My Trips</p>
                {savedTripId
                  ? <button style={styles.dangerButton} disabled={busy} onClick={handleDelete}>🗑️ Delete trip</button>
                  : <button style={styles.secondaryButton} onClick={() => navigate(`/trips/${savedId}`)}>View in My Trips →</button>}
              </>
            ) : (
              <button style={{ ...styles.primaryButton, ...(busy ? styles.buttonDisabled : {}) }} disabled={busy} onClick={handleSave}>
                {busy ? "Saving..." : "💾 Save to My Trips"}
              </button>
            )}
            {actionError && <p style={styles.actionError}>{actionError}</p>}
          </div>

          <RouteCard styles={styles} title="🧭 Getting there" route={plan.outbound} car={plan.car} />
          <RouteCard styles={styles} title="🏠 Getting home" route={plan.return} car={plan.car} />

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>💰 Estimated cost</h3>
            <div style={styles.costRow}><span>Bus / train</span><span>{formatPrice(plan.estimatedCost.transport)}</span></div>
            <div style={styles.costRow}><span>Entry tickets</span><span>{formatPrice(plan.estimatedCost.tickets)}</span></div>
            <div style={styles.costRow}><span>Stays ({nights} {nights === 1 ? "night" : "nights"})</span><span>{formatPrice(plan.estimatedCost.stays)}</span></div>
            <div style={styles.costTotal}><span>Total</span><span>{formatPrice(plan.estimatedCost.total)}</span></div>
            <p style={styles.costNote}>Rough guide per person in LKR. Local tuk-tuks, food and safari jeeps are not included.</p>
          </div>

          <button style={styles.secondaryButton} onClick={() => window.print()}>🖨️ Print or save as PDF</button>
        </aside>
      </div>

      <p style={styles.credit}>Photos: Wikimedia Commons contributors (CC BY-SA) · Bus and train times are estimates — check before you travel.</p>
    </div>
  );
};
