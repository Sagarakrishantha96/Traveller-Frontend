import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../Services/AuthService";
import { getNearbyAttractions, getNearbyStays, getPlaces } from "../Services/PlaceService";
import { PlaceModel } from "../Models/PlaceModel";
import { AttractionModel } from "../Models/AttractionModel";
import { StayModel, StayTypes } from "../Models/StayModel";
import { Header } from "../Component/Share/Header";
import { useIsMobile } from "../Component/Share/useIsMobile";
import { SearchForm, TripSearch } from "../Component/Home/SearchForm";
import { DestinationCard } from "../Component/Home/DestinationCard";
import { AttractionCard } from "../Component/Home/AttractionCard";
import { StayCard } from "../Component/Home/StayCard";
import { getErrorMessage, formatPrice } from "../Component/Common";
import { home } from "../Styles/Homestyle";
import { getComponentStyle } from "../Styles/MergeStyles";

const ATTRACTION_RADIUS_KM = 40;
const STAY_RADIUS_KM = 20;
const MAX_PRICE_OPTIONS = [10000, 25000, 50000, 100000];
const PREVIEW_COUNT = 6;
const POPULAR_COUNT = 8;
const HERO_PLACE = "Sigiriya";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();
  const styles = getComponentStyle(home, useIsMobile());

  const [places, setPlaces] = useState<PlaceModel[]>([]);
  const [toId, setToId] = useState<string>("");
  const [attractions, setAttractions] = useState<AttractionModel[]>([]);
  const [stays, setStays] = useState<StayModel[]>([]);
  const [showAllAttractions, setShowAllAttractions] = useState<boolean>(false);
  const [stayType, setStayType] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [error, setError] = useState<string | null>(null);

  const destination = places.find((p) => p.id.toString() === toId);

  // Load the towns for the search form and destination cards
  useEffect(() => {
    document.title = "Home - Travel Planner";
    getPlaces()
      .then(setPlaces)
      .catch((err) => setError(getErrorMessage(err, "Could not load places. Please refresh the page.")));
  }, []);

  // Preview what is near the destination as soon as one is picked
  useEffect(() => {
    if (!destination) return;
    setError(null);
    Promise.all([
      getNearbyAttractions(destination.latitude, destination.longitude, ATTRACTION_RADIUS_KM),
      getNearbyStays(destination.latitude, destination.longitude, STAY_RADIUS_KM, stayType || undefined, maxPrice)
    ])
      .then(([nearbyAttractions, nearbyStays]) => {
        setAttractions(nearbyAttractions);
        setStays(nearbyStays);
      })
      .catch((err) => setError(getErrorMessage(err, "Could not load results. Please try again.")));
  }, [destination, stayType, maxPrice]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleSearch = (search: TripSearch) => {
    const query = new URLSearchParams({
      from: search.from.id.toString(),
      to: search.to.id.toString(),
      days: search.days.toString(),
      start: search.startDate
    });
    navigate(`/itinerary?${query}`);
  };

  const selectDestination = (place: PlaceModel) => {
    setToId(place.id.toString());
    setShowAllAttractions(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const popular = places
    .filter((p) => p.imageUrl && p.attractionCount >= 2 && p.name !== "Colombo")
    .sort((a, b) => b.attractionCount - a.attractionCount)
    .slice(0, POPULAR_COUNT);

  const heroImage = places.find((p) => p.name === HERO_PLACE)?.imageUrl;
  const heroStyle = {
    ...styles.hero,
    ...(heroImage ? { backgroundImage: `linear-gradient(180deg, rgba(10,92,99,0.55) 0%, rgba(10,40,45,0.75) 100%), url("${heroImage}")` } : {})
  };

  const visibleAttractions = showAllAttractions ? attractions : attractions.slice(0, PREVIEW_COUNT);
  const chipStyle = (active: boolean) => ({ ...styles.chip, ...(active ? styles.chipActive : {}) });

  return (
    <div style={styles.mainWrapper}>
      <Header user={user} />

      <section style={heroStyle}>
        <span style={styles.heroEyebrow}>🇱🇰 Sri Lanka trip planner</span>
        <h2 style={styles.heroTitle}>Hi {user.fullName.split(" ")[0]}, where to next?</h2>
        <p style={styles.heroText}>
          Pick a destination and how many days you have. We'll plan each day for you — the bus or train there,
          the best sights, where to stay and the way home.
        </p>
      </section>

      <SearchForm styles={styles} places={places} toId={toId} onToChange={setToId} onSearch={handleSearch} />

      {error && <div style={styles.alert}>{error}</div>}

      {!destination && popular.length > 0 && (
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>Popular destinations</h2>
          <p style={styles.sectionSubTitle}>The Cultural Triangle — ancient cities, rock fortresses and elephant safaris</p>
          <div style={styles.destinationGrid}>
            {popular.map((p) => (
              <DestinationCard key={p.id} styles={styles} place={p} active={false} onSelect={selectDestination} />
            ))}
          </div>
        </section>
      )}

      {destination && (
        <>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Things to do near {destination.name}</h2>
            <p style={styles.sectionSubTitle}>
              {attractions.length} attractions within {ATTRACTION_RADIUS_KM} km · nearest first
            </p>
            {attractions.length === 0
              ? <p style={styles.emptyText}>No attractions found near {destination.name} yet.</p>
              : (
                <div style={styles.grid}>
                  {visibleAttractions.map((a) => <AttractionCard key={a.id} styles={styles} attraction={a} />)}
                </div>
              )}
            {attractions.length > PREVIEW_COUNT && (
              <div style={styles.showMoreRow}>
                <button style={styles.chip} onClick={() => setShowAllAttractions(!showAllAttractions)}>
                  {showAllAttractions ? "Show less" : `Show all ${attractions.length} attractions`}
                </button>
              </div>
            )}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Places to stay near {destination.name}</h2>
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

            {stays.length === 0
              ? <p style={styles.emptyText}>No places to stay match these filters.</p>
              : (
                <div style={styles.grid}>
                  {stays.map((s) => <StayCard key={s.id} styles={styles} stay={s} />)}
                </div>
              )}
          </section>

          <div style={styles.planBanner}>
            <div>
              <h3 style={styles.planBannerTitle}>Ready to go to {destination.name}?</h3>
              <p style={styles.planBannerText}>Choose your days and start date, and we'll build your day-by-day plan.</p>
            </div>
            <button style={styles.planBannerButton} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              Plan my trip ↑
            </button>
          </div>
        </>
      )}

      <p style={styles.credit}>Photos: Wikimedia Commons contributors (CC BY-SA)</p>
    </div>
  );
};
