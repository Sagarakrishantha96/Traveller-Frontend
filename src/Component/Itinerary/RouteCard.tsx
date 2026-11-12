import React from "react";
import { RouteOptionModel } from "../../Models/TripPlanModel";
import { formatDuration, formatPrice } from "../Common";

interface RouteCardProps {
  styles: any;
  title: string;
  route: RouteOptionModel | null;
  car: { distanceKm: number; durationMinutes: number };
}

const modeIcon = (mode: string) => (mode === "Train" ? "🚆" : "🚌");

// "Getting there" / "Getting home": each bus or train leg, plus the car alternative
export const RouteCard: React.FC<RouteCardProps> = ({ styles, title, route, car }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>

      {route ? (
        <>
          {route.legs.map((leg, index) => (
            <div key={index} style={styles.leg}>
              <span style={styles.legIcon}>{modeIcon(leg.mode)}</span>
              <div>
                <p style={styles.legTitle}>
                  {leg.mode} {leg.routeNumber}
                  {leg.isAc && <span style={styles.tag}>AC</span>}
                </p>
                <p style={styles.legMeta}>{leg.fromPlace} {leg.departureTime} → {leg.toPlace} {leg.arrivalTime}</p>
                <p style={styles.legMeta}>
                  {formatDuration(leg.durationMinutes)} · {leg.operator}
                  {leg.fare !== null ? ` · ~${formatPrice(leg.fare)}` : ""}
                </p>
              </div>
            </div>
          ))}
          <div style={styles.routeSummary}>
            <span>{formatDuration(route.durationMinutes)}{route.changes > 0 ? ` · ${route.changes} change` : " · direct"}</span>
            {route.fare !== null && <span>~{formatPrice(route.fare)}</span>}
          </div>
        </>
      ) : (
        <div style={styles.leg}>
          <span style={styles.legIcon}>🚗</span>
          <div>
            <p style={styles.legTitle}>By car or taxi</p>
            <p style={styles.legMeta}>No bus or train found for this trip</p>
          </div>
        </div>
      )}

      <p style={styles.carNote}>🚗 By car: about {formatDuration(car.durationMinutes)} ({car.distanceKm} km)</p>
    </div>
  );
};
