import React from "react";
import { StayModel } from "../../Models/StayModel";
import { PlaceImage } from "../Share/PlaceImage";
import { formatPrice } from "../Common";

interface StayCardProps {
  styles: any;
  stay: StayModel;
}

export const StayCard: React.FC<StayCardProps> = ({ styles, stay }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardImageWrapper}>
        <PlaceImage src={stay.imageUrl} alt={stay.name} kind={stay.type} style={styles.cardImage} />
        <span style={styles.cardImageBadge}>{stay.type}</span>
        {stay.rating !== null && <span style={styles.cardImageRating}>★ {stay.rating}</span>}
      </div>
      <div style={styles.cardBody}>
        <h3 style={styles.cardTitle}>{stay.name}</h3>
        <p style={styles.cardMeta}>📍 {stay.placeName} · {stay.distanceKm} km away</p>
        <div style={styles.cardFooter}>
          <span style={styles.price}>{formatPrice(stay.pricePerNight)} <small>/ night</small></span>
          {stay.bookingUrl && (
            <a style={styles.link} href={stay.bookingUrl} target="_blank" rel="noreferrer">Book →</a>
          )}
        </div>
      </div>
    </div>
  );
};
