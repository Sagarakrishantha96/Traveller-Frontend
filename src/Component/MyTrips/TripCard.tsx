import React from "react";
import { TripSummaryModel } from "../../Models/SavedTripModel";
import { PlaceImage } from "../Share/PlaceImage";
import { formatDate, formatPrice } from "../Common";

interface TripCardProps {
  styles: any;
  trip: TripSummaryModel;
  onOpen: (trip: TripSummaryModel) => void;
  onDelete: (trip: TripSummaryModel) => void;
}

const statusStyle = (styles: any, status: string) =>
  status === "Ongoing" ? styles.statusOngoing : status === "Completed" ? styles.statusCompleted : styles.statusUpcoming;

// A saved trip in the My Trips grid
export const TripCard: React.FC<TripCardProps> = ({ styles, trip, onOpen, onDelete }) => {
  const dates = trip.numberOfDays > 1
    ? `${formatDate(trip.startDate)} – ${formatDate(trip.endDate)}`
    : formatDate(trip.startDate);

  return (
    <div style={styles.card} onClick={() => onOpen(trip)}>
      <div style={styles.cardImageWrapper}>
        <PlaceImage src={trip.coverImageUrl} alt={trip.toPlace} kind="Heritage" style={styles.cardImage} />
        <div style={styles.cardImageOverlay}>
          <h3 style={styles.cardTitle}>{trip.fromPlace} → {trip.toPlace}</h3>
          <p style={styles.cardDates}>{dates}</p>
        </div>
        <span style={{ ...styles.statusBadge, ...statusStyle(styles, trip.status) }}>{trip.status}</span>
      </div>
      <div style={styles.cardBody}>
        <div>
          <p style={styles.cardMeta}>
            🗓️ {trip.numberOfDays} {trip.numberOfDays === 1 ? "day" : "days"} · 📍 {trip.attractionCount} places
          </p>
          {trip.estimatedCost !== null && <p style={styles.cardCost}>~{formatPrice(trip.estimatedCost)}</p>}
        </div>
        <button style={styles.deleteButton} title="Delete trip" aria-label="Delete trip"
          onClick={(e) => { e.stopPropagation(); onDelete(trip); }}>
          🗑️
        </button>
      </div>
    </div>
  );
};
