import React from "react";
import { TripDayModel, TripItemModel } from "../../Models/TripPlanModel";
import { PlaceImage } from "../Share/PlaceImage";
import { formatDate, formatDuration, formatPrice } from "../Common";

interface DayTimelineProps {
  styles: any;
  day: TripDayModel;
}

const TimelineItem: React.FC<{ styles: any; item: TripItemModel }> = ({ styles, item }) => {
  const a = item.attraction;
  const isTravel = item.type !== "Attraction";

  return (
    <div style={{ ...styles.itemCard, ...(isTravel ? styles.travelCard : {}) }}>
      <span style={styles.dot} />
      {a && <PlaceImage src={a.imageUrl} alt={a.name} kind={a.category} style={styles.itemImage} />}
      <div style={styles.itemBody}>
        <span style={styles.itemTime}>{item.startTime} – {item.endTime}</span>
        <h4 style={styles.itemTitle}>
          {isTravel ? (item.route?.legs[0].mode === "Train" ? "🚆 " : item.route ? "🚌 " : "🚗 ") : ""}{item.title}
        </h4>
        {a ? (
          <p style={styles.itemMeta}>
            {a.category} · ★ {a.rating ?? "–"} · {a.visitHours} h ·{" "}
            {a.ticketPrice === null ? "price not listed" : a.ticketPrice === 0 ? "free entry" : formatPrice(a.ticketPrice)}
          </p>
        ) : (
          item.note && <p style={styles.itemMeta}>{item.note}</p>
        )}
        {a?.description && <p style={styles.itemMeta}>{a.description}</p>}
        {a && item.note && <span style={styles.itemNote}>⏰ {item.note}</span>}
      </div>
    </div>
  );
};

// One day of the plan: a timeline of travel and visits, then tonight's stay
export const DayTimeline: React.FC<DayTimelineProps> = ({ styles, day }) => {
  return (
    <section style={styles.dayBlock}>
      <div style={styles.dayHeader}>
        <div style={styles.dayBadge}>
          <span style={styles.dayBadgeLabel}>DAY</span>
          <span style={styles.dayBadgeNumber}>{day.dayNumber}</span>
        </div>
        <div>
          <h3 style={styles.dayTitle}>{day.title}</h3>
          <p style={styles.dayDate}>{formatDate(day.date)}</p>
        </div>
      </div>

      <div style={styles.timeline}>
        {day.items.map((item, index) => (
          <React.Fragment key={index}>
            {item.type === "Attraction" && item.travelMinutes > 0 && (
              <span style={styles.connector}>🛺 {formatDuration(item.travelMinutes)} by tuk-tuk or car</span>
            )}
            <TimelineItem styles={styles} item={item} />
          </React.Fragment>
        ))}
        {!day.items.some((i) => i.type === "Attraction") && (
          <span style={styles.connector}>No sightseeing planned today — enjoy some free time.</span>
        )}
      </div>

      {day.stay && (
        <div style={styles.stayCard}>
          <PlaceImage src={day.stay.imageUrl} alt={day.stay.name} kind={day.stay.type} style={styles.stayImage} />
          <div style={{ flex: 1 }}>
            <span style={styles.stayLabel}>🌙 Tonight's stay</span>
            <h4 style={styles.stayName}>{day.stay.name}</h4>
            <p style={styles.itemMeta}>
              {day.stay.type} · ★ {day.stay.rating ?? "–"} · {day.stay.placeName} · {formatPrice(day.stay.pricePerNight)} / night
            </p>
            {day.otherStays.length > 0 && (
              <div style={styles.otherStays}>
                {day.otherStays.map((s) => (
                  <div key={s.id} style={styles.otherStayRow}>
                    <span>{s.name} · {s.type} · ★ {s.rating ?? "–"}</span>
                    <span>{formatPrice(s.pricePerNight)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
