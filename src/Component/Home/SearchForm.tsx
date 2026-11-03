import React, { useState } from "react";
import { PlaceModel } from "../../Models/PlaceModel";

export interface TripSearch {
  from: PlaceModel;
  to: PlaceModel;
  days: number;
  startDate: string;
}

interface SearchFormProps {
  styles: any;
  places: PlaceModel[];
  loading: boolean;
  onSearch: (search: TripSearch) => void;
}

const MAX_DAYS = 7;

const today = () => new Date().toISOString().slice(0, 10);

export const SearchForm: React.FC<SearchFormProps> = ({ styles, places, loading, onSearch }) => {
  const [fromId, setFromId] = useState<string>("");
  const [toId, setToId] = useState<string>("");
  const [days, setDays] = useState<number>(2);
  const [startDate, setStartDate] = useState<string>(today());
  const [error, setError] = useState<string | null>(null);

  // Start from Colombo by default once places have loaded
  const defaultFromId = places.find((p) => p.name === "Colombo")?.id.toString() ?? "";
  const selectedFromId = fromId || defaultFromId;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const from = places.find((p) => p.id.toString() === selectedFromId);
    const to = places.find((p) => p.id.toString() === toId);

    if (!from || !to) return setError("Choose where you start and where you are going");
    if (from.id === to.id) return setError("Start and destination must be different");

    setError(null);
    onSearch({ from, to, days, startDate });
  };

  return (
    <form style={styles.searchCard} onSubmit={handleSubmit} noValidate>
      <div style={styles.searchRow}>
        <div style={styles.field}>
          <label style={styles.label} htmlFor="from">From</label>
          <select id="from" style={styles.input} value={selectedFromId} onChange={(e) => setFromId(e.target.value)}>
            <option value="" disabled>Starting point</option>
            {places.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="to">To</label>
          <select id="to" style={styles.input} value={toId} onChange={(e) => setToId(e.target.value)}>
            <option value="" disabled>Where are you going?</option>
            {places.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="days">Days</label>
          <select id="days" style={styles.input} value={days} onChange={(e) => setDays(Number(e.target.value))}>
            {Array.from({ length: MAX_DAYS }, (_, i) => i + 1).map((d) => (
              <option key={d} value={d}>{d} {d === 1 ? "day" : "days"}</option>
            ))}
          </select>
        </div>

        <div style={styles.field}>
          <label style={styles.label} htmlFor="startDate">Start date</label>
          <input id="startDate" type="date" style={styles.input} value={startDate} min={today()}
            onChange={(e) => setStartDate(e.target.value)} />
        </div>

        <button type="submit" disabled={loading}
          style={{ ...styles.searchButton, ...(loading ? styles.searchButtonDisabled : {}) }}>
          {loading ? "Searching..." : "Explore"}
        </button>
      </div>
      {error && <p style={styles.searchError}>{error}</p>}
    </form>
  );
};
