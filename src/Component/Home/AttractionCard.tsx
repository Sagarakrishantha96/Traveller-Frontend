import React from "react";
import { AttractionModel } from "../../Models/AttractionModel";
import { formatPrice } from "../Common";

interface AttractionCardProps {
  styles: any;
  attraction: AttractionModel;
}

export const AttractionCard: React.FC<AttractionCardProps> = ({ styles, attraction }) => {
  const openHours = attraction.openTime && attraction.closeTime
    ? `${attraction.openTime} – ${attraction.closeTime}`
    : "Open all day";

  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={styles.cardTitle}>{attraction.name}</h3>
        <span style={styles.badge}>{attraction.category}</span>
      </div>
      <p style={styles.cardMeta}>
        📍 {attraction.placeName} · {attraction.distanceKm} km away · ⏱ {attraction.visitHours} h · 🕒 {openHours}
      </p>
      {attraction.description && <p style={styles.cardText}>{attraction.description}</p>}
      <div style={styles.cardFooter}>
        <span style={styles.price}>
          {attraction.ticketPrice === null ? "Price not listed"
            : attraction.ticketPrice === 0 ? "Free" : formatPrice(attraction.ticketPrice)}
        </span>
        {attraction.rating !== null && <span style={styles.rating}>★ {attraction.rating}</span>}
      </div>
    </div>
  );
};
