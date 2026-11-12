import React from "react";
import { PlaceModel } from "../../Models/PlaceModel";
import { PlaceImage } from "../Share/PlaceImage";

interface DestinationCardProps {
  styles: any;
  place: PlaceModel;
  active: boolean;
  onSelect: (place: PlaceModel) => void;
}

// Photo card for a popular destination; clicking it picks it as "To"
export const DestinationCard: React.FC<DestinationCardProps> = ({ styles, place, active, onSelect }) => {
  return (
    <button type="button" onClick={() => onSelect(place)}
      style={{ ...styles.destinationCard, ...(active ? styles.destinationCardActive : {}) }}>
      <PlaceImage src={place.imageUrl} alt={place.name} kind="Heritage" style={styles.destinationImage} />
      <div style={styles.destinationOverlay}>
        <span style={styles.destinationName}>{place.name}</span>
        <span style={styles.destinationMeta}>
          {place.attractionCount} {place.attractionCount === 1 ? "attraction" : "attractions"}
          {place.district ? ` · ${place.district}` : ""}
        </span>
      </div>
    </button>
  );
};
