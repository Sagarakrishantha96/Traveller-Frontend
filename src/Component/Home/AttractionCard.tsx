import React from "react";
import { AttractionModel } from "../../Models/AttractionModel";
import { PlaceImage } from "../Share/PlaceImage";
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
      <div style={styles.cardImageWrapper}>
        <PlaceImage src={attraction.imageUrl} alt={attraction.name} kind={attraction.category} style={styles.cardImage} />
        <span style={styles.cardImageBadge}>{attraction.category}</span>
        {attraction.rating !== null && <span style={styles.cardImageRating}>★ {attraction.rating}</span>}
      </div>
      <div style={styles.cardBody}>
        <h3 style={styles.cardTitle}>{attraction.name}</h3>
        <p style={styles.cardMeta}>📍 {attraction.placeName} · {attraction.distanceKm} km away</p>
        {attraction.description && <p style={styles.cardText}>{attraction.description}</p>}
        <div style={styles.cardFooter}>
          <span style={styles.price}>
            {attraction.ticketPrice === null ? "Price not listed"
              : attraction.ticketPrice === 0 ? "Free entry" : formatPrice(attraction.ticketPrice)}
          </span>
          <span style={styles.cardMeta}>⏱ {attraction.visitHours} h · 🕒 {openHours}</span>
        </div>
      </div>
    </div>
  );
};
