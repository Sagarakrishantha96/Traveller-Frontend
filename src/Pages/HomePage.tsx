import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getLoggedInUser, logout } from "../Services/AuthService";
import { getNearbyAttractions, getNearbyStays, getPlaces } from "../Services/PlaceService";
import { PlaceModel } from "../Models/PlaceModel";
import { AttractionModel } from "../Models/AttractionModel";
import { StayModel, StayTypes } from "../Models/StayModel";
import { SearchForm, TripSearch } from "../Component/Home/SearchForm";
import { AttractionCard } from "../Component/Home/AttractionCard";
import { StayCard } from "../Component/Home/StayCard";
import { getErrorMessage, formatPrice } from "../Component/Common";
import { home } from "../Styles/Homestyle";
import { getComponentStyle } from "../Styles/MergeStyles";

const MOBILE_QUERY = "(max-width: 786px)";
const ATTRACTION_RADIUS_KM = 40;
const STAY_RADIUS_KM = 20;
const MAX_PRICE_OPTIONS = [10000, 25000, 50000, 100000];

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();
  const [isMobile, setIsMobile] = useState<boolean>(window.matchMedia(MOBILE_QUERY).matches);

  const [places, setPlaces] = useState<PlaceModel[]>([]);
  const [search, setSearch] = useState<TripSearch | null>(null);
  const [attractions, setAttractions] = useState<AttractionModel[]>([]);
  const [stays, setStays] = useState<StayModel[]>([]);
  const [stayType, setStayType] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Watch the screen size, so the styles switch between mobile and desktop
  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    const handleResize = () => setIsMobile(media.matches);
    media.addEventListener("change", handleResize);
    return () => media.removeEventListener("change", handleResize);
  }, []);

  const styles = getComponentStyle(home, isMobile);

  // Load the towns for the From / To lists
  useEffect(() => {
    document.title = "Home - Travel Planner";
    getPlaces()
      .then(setPlaces)
      .catch((err) => setError(getErrorMessage(err, "Could not load places. Please refresh the page.")));
  }, []);

  // Load what is near the destination whenever the search or the stay filters change
  useEffect(() => {
    if (!search) return;
    const { latitude, longitude } = search.to;

    setLoading(true);
    setError(null);
    Promise.all([
      getNearbyAttractions(latitude, longitude, ATTRACTION_RADIUS_KM),
      getNearbyStays(latitude, longitude, STAY_RADIUS_KM, stayType || undefined, maxPrice)
    ])
      .then(([nearbyAttractions, nearbyStays]) => {
        setAttractions(nearbyAttractions);
        setStays(nearbyStays);
      })
      .catch((err) => setError(getErrorMessage(err, "Could not load results. Please try again.")))
      .finally(() => setLoading(false));
  }, [search, stayType, maxPrice]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const chipStyle = (active: boolean) => ({ ...styles.chip, ...(active ? styles.chipActive : {}) });

  return (
    <div style={styles.mainWrapper}>
      <header style={styles.header}>
        <h1 style={styles.brand}>Travel Planner ✈️</h1>
        <div style={styles.userBox}>
          <span style={styles.userName}>Hi, {user.fullName}</span>
          <button style={styles.logoutButton} onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <section style={styles.hero}>
        <h2 style={styles.heroTitle}>Where do you want to go?</h2>
        <p style={styles.heroText}>
          Tell us where you start, where you are going and for how long. We'll show you the best things to do and places to stay.
        </p>
      </section>

      <SearchForm styles={styles} places={places} loading={loading} onSearch={setSearch} />

      {error && <div style={styles.alert}>{error}</div>}

      {search && (
        <>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Things to do near {search.to.name}</h2>
            <p style={styles.sectionSubTitle}>
              {attractions.length} attractions within {ATTRACTION_RADIUS_KM} km · nearest first
            </p>
            {attractions.length === 0 && !loading
              ? <p style={styles.emptyText}>No attractions found near {search.to.name} yet.</p>
              : (
                <div style={styles.grid}>
                  {attractions.map((a) => <AttractionCard key={a.id} styles={styles} attraction={a} />)}
                </div>
              )}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Places to stay near {search.to.name}</h2>
            <p style={styles.sectionSubTitle}>Hotels, villas and homestays within {STAY_RADIUS_KM} km</p>

            <div style={styles.filterRow}>
              <button style={chipStyle(stayType === "")} onClick={() => setStayType("")}>All</button>
              {StayTypes.map((t) => (
                <button key={t} style={chipStyle(stayType === t)} onClick={() => setStayType(t)}>{t}</button>
              ))}
              <select style={styles.priceSelect} value={maxPrice ?? ""}
                onChange={(e) => setMaxPrice(e.target.value ? Number(e.target.value) : undefined)}>
                <option value="">Any price</option>
                {MAX_PRICE_OPTIONS.map((p) => <option key={p} value={p}>Up to {formatPrice(p)}</option>)}
              </select>
            </div>

            {stays.length === 0 && !loading
              ? <p style={styles.emptyText}>No places to stay match these filters.</p>
              : (
                <div style={styles.grid}>
                  {stays.map((s) => <StayCard key={s.id} styles={styles} stay={s} />)}
                </div>
              )}
          </section>

          <div style={styles.note}>
            🗓️ Your {search.days}-day plan from {search.from.name} to {search.to.name} (starting {search.startDate}) — the
            day-by-day itinerary with bus/train options is coming next.
          </div>
        </>
      )}
    </div>
  );
};
