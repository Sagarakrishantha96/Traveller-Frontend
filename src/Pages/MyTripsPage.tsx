import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../Services/AuthService";
import { deleteTrip, getMyTrips } from "../Services/TripService";
import { TripSummaryModel } from "../Models/SavedTripModel";
import { Header } from "../Component/Share/Header";
import { useIsMobile } from "../Component/Share/useIsMobile";
import { TripCard } from "../Component/MyTrips/TripCard";
import { getErrorMessage } from "../Component/Common";
import { myTrips } from "../Styles/Mytripsstyle";
import { getComponentStyle } from "../Styles/MergeStyles";

type Tab = "upcoming" | "past";

export const MyTripsPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();
  const styles = getComponentStyle(myTrips, useIsMobile());

  const [trips, setTrips] = useState<TripSummaryModel[] | null>(null);
  const [tab, setTab] = useState<Tab>("upcoming");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "My Trips - Travel Planner";
    getMyTrips()
      .then(setTrips)
      .catch((err) => setError(getErrorMessage(err, "Could not load your trips. Please refresh the page.")));
  }, []);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const handleDelete = (trip: TripSummaryModel) => {
    if (!window.confirm(`Delete "${trip.fromPlace} → ${trip.toPlace}" from My Trips?`)) return;
    deleteTrip(trip.id)
      .then(() => setTrips((current) => (current ?? []).filter((t) => t.id !== trip.id)))
      .catch((err) => setError(getErrorMessage(err, "Could not delete this trip. Please try again.")));
  };

  // Upcoming and ongoing trips soonest first; past trips most recent first
  const upcoming = (trips ?? []).filter((t) => t.status !== "Completed");
  const past = (trips ?? []).filter((t) => t.status === "Completed").reverse();
  const shown = tab === "upcoming" ? upcoming : past;
  const tabStyle = (active: boolean) => ({ ...styles.tab, ...(active ? styles.tabActive : {}) });

  return (
    <div style={styles.mainWrapper}>
      <Header user={user} />

      <section style={styles.banner}>
        <div>
          <h2 style={styles.bannerTitle}>My Trips 🧳</h2>
          <p style={styles.bannerText}>
            {trips === null ? "Loading your trips..." : `${trips.length} saved ${trips.length === 1 ? "trip" : "trips"}`}
          </p>
        </div>
        <button style={styles.newTripButton} onClick={() => navigate("/home")}>+ Plan a new trip</button>
      </section>

      <div style={styles.content}>
        {error && <div style={{ ...styles.message, ...styles.messageError }}>{error}</div>}

        {trips !== null && trips.length > 0 && (
          <div style={styles.tabs}>
            <button style={tabStyle(tab === "upcoming")} onClick={() => setTab("upcoming")}>Upcoming ({upcoming.length})</button>
            <button style={tabStyle(tab === "past")} onClick={() => setTab("past")}>Past ({past.length})</button>
          </div>
        )}

        {trips !== null && trips.length === 0 && (
          <div style={styles.empty}>
            <span style={styles.emptyIcon}>🗺️</span>
            <h3 style={styles.emptyTitle}>No trips yet</h3>
            <p style={styles.emptyText}>Plan a trip and press "Save to My Trips" to keep it here.</p>
            <button style={styles.primaryButton} onClick={() => navigate("/home")}>Plan my first trip</button>
          </div>
        )}

        {trips !== null && trips.length > 0 && shown.length === 0 && (
          <div style={styles.message}>
            {tab === "upcoming" ? "No upcoming trips. Time to plan the next one!" : "No past trips yet."}
          </div>
        )}

        <div style={styles.grid}>
          {shown.map((trip) => (
            <TripCard key={trip.id} styles={styles} trip={trip}
              onOpen={(t) => navigate(`/trips/${t.id}`)} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};
