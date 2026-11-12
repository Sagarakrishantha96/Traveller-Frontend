import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { getLoggedInUser } from "../Services/AuthService";
import { postTripPlan } from "../Services/TripService";
import { TripPlanModel } from "../Models/TripPlanModel";
import { Header } from "../Component/Share/Header";
import { useIsMobile } from "../Component/Share/useIsMobile";
import { RouteCard } from "../Component/Itinerary/RouteCard";
import { DayTimeline } from "../Component/Itinerary/DayTimeline";
import { getErrorMessage, formatDate, formatPrice } from "../Component/Common";
import { itinerary } from "../Styles/Itinerarystyle";
import { getComponentStyle } from "../Styles/MergeStyles";

// /itinerary?from=1&to=6&days=2&start=2026-11-10
export const ItineraryPage: React.FC = () => {
  const navigate = useNavigate();
  const user = getLoggedInUser();
  const styles = getComponentStyle(itinerary, useIsMobile());
  const [params] = useSearchParams();

  const [plan, setPlan] = useState<TripPlanModel | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fromPlaceId = Number(params.get("from"));
  const toPlaceId = Number(params.get("to"));
  const days = Number(params.get("days") ?? 2);
  const startDate = params.get("start") ?? new Date().toISOString().slice(0, 10);

  useEffect(() => {
    if (!fromPlaceId || !toPlaceId) {
      setError("Missing trip details. Please search again from the home page.");
      return;
    }
    setPlan(null);
    setError(null);
    postTripPlan({ fromPlaceId, toPlaceId, days, startDate })
      .then((result) => {
        setPlan(result);
        document.title = `${result.to.name} trip - Travel Planner`;
      })
      .catch((err) => setError(getErrorMessage(err, "Could not plan this trip. Please try again.")));
  }, [fromPlaceId, toPlaceId, days, startDate]);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (error || !plan) {
    return (
      <div style={styles.mainWrapper}>
        <Header user={user} />
        <div style={{ ...styles.message, ...(error ? styles.messageError : {}) }}>
          {error ?? "✨ Planning your trip..."}
          {error && (
            <p><button style={styles.primaryButton} onClick={() => navigate("/home")}>← Back to search</button></p>
          )}
        </div>
      </div>
    );
  }

  const attractionCount = plan.days.reduce((n, d) => n + d.items.filter((i) => i.type === "Attraction").length, 0);
  const nights = plan.days.filter((d) => d.stay).length;
  const lastDate = plan.days[plan.days.length - 1].date;

  const coverStyle = {
    ...styles.cover,
    ...(plan.coverImageUrl
      ? { backgroundImage: `linear-gradient(180deg, rgba(10,92,99,0.55) 0%, rgba(10,40,45,0.8) 100%), url("${plan.coverImageUrl}")` }
      : {})
  };

  return (
    <div style={styles.mainWrapper}>
      <Header user={user} />

      <section style={coverStyle}>
        <button style={styles.backLink} onClick={() => navigate("/home")}>← Change search</button>
        <h2 style={styles.coverTitle}>{plan.from.name} → {plan.to.name}</h2>
        <p style={styles.coverSubTitle}>
          {plan.numberOfDays} {plan.numberOfDays === 1 ? "day" : "days"} · {formatDate(plan.startDate)}
          {plan.numberOfDays > 1 ? ` – ${formatDate(lastDate)}` : ""}
        </p>
        <div style={styles.statRow}>
          <div style={styles.stat}>
            <span style={styles.statValue}>{attractionCount}</span>
            <span style={styles.statLabel}>places to visit</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statValue}>{nights}</span>
            <span style={styles.statLabel}>{nights === 1 ? "night" : "nights"}</span>
          </div>
          <div style={styles.stat}>
            <span style={styles.statValue}>{formatPrice(plan.estimatedCost.total)}</span>
            <span style={styles.statLabel}>estimated per person</span>
          </div>
        </div>
      </section>

      <div style={styles.content}>
        <div style={styles.mainColumn}>
          {plan.days.map((day) => <DayTimeline key={day.dayNumber} styles={styles} day={day} />)}
        </div>

        <aside style={styles.sideColumn}>
          <RouteCard styles={styles} title="🧭 Getting there" route={plan.outbound} car={plan.car} />
          <RouteCard styles={styles} title="🏠 Getting home" route={plan.return} car={plan.car} />

          <div style={styles.card}>
            <h3 style={styles.cardTitle}>💰 Estimated cost</h3>
            <div style={styles.costRow}><span>Bus / train</span><span>{formatPrice(plan.estimatedCost.transport)}</span></div>
            <div style={styles.costRow}><span>Entry tickets</span><span>{formatPrice(plan.estimatedCost.tickets)}</span></div>
            <div style={styles.costRow}><span>Stays ({nights} {nights === 1 ? "night" : "nights"})</span><span>{formatPrice(plan.estimatedCost.stays)}</span></div>
            <div style={styles.costTotal}><span>Total</span><span>{formatPrice(plan.estimatedCost.total)}</span></div>
            <p style={styles.costNote}>Rough guide per person in LKR. Local tuk-tuks, food and safari jeeps are not included.</p>
          </div>

          <button style={styles.primaryButton} onClick={() => window.print()}>🖨️ Print or save as PDF</button>
        </aside>
      </div>

      <p style={styles.credit}>Photos: Wikimedia Commons contributors (CC BY-SA) · Bus and train times are estimates — check before you travel.</p>
    </div>
  );
};
