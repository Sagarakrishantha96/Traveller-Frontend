import React from "react";
import { StayModel } from "../../Models/StayModel";
import { formatPrice } from "../Common";

interface StayCardProps {
  styles: any;
  stay: StayModel;
}

export const StayCard: React.FC<StayCardProps> = ({ styles, stay }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>{stay.name}</h3>
        <span style={styles.badge}>{stay.type}</span>
      </div>
      <p style={styles.cardMeta}>📍 {stay.placeName} · {stay.distanceKm} km away</p>
      <div style={styles.cardFooter}>
        <span style={styles.price}>{formatPrice(stay.pricePerNight)} / night</span>
        {stay.rating !== null && <span style={styles.rating}>★ {stay.rating}</span>}
      </div>
      {stay.bookingUrl && (
        <a style={{ ...styles.link, ...styles.cardText }} href={stay.bookingUrl} target="_blank" rel="noreferrer">
          View &amp; book →
        </a>
      )}
    </div>
  );
};
