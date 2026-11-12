import React from "react";
import { PlaceModel } from "../../Models/PlaceModel";

export interface StopValue {
  placeId: string;
  minutesFromStart: string;
}

interface RouteStopsEditorProps {
  styles: any;
  places: PlaceModel[];
  stops: StopValue[];
  onChange: (stops: StopValue[]) => void;
}

// Edits a route's stops in travel order; the first stop is always at 0 minutes
export const RouteStopsEditor: React.FC<RouteStopsEditorProps> = ({ styles, places, stops, onChange }) => {
  const update = (index: number, change: Partial<StopValue>) =>
    onChange(stops.map((s, i) => (i === index ? { ...s, ...change } : s)));

  const remove = (index: number) => onChange(stops.filter((_, i) => i !== index));

  const add = () => onChange([...stops, { placeId: "", minutesFromStart: "" }]);

  return (
    <div style={styles.stopsBox}>
      <h4 style={styles.stopsTitle}>Stops</h4>
      <p style={styles.hint}>In travel order. Minutes are from the first stop (the first stop is 0).</p>

      {stops.map((stop, index) => (
        <div key={index} style={styles.stopRow}>
          <span style={styles.stopNumber}>{index + 1}</span>
          <select style={styles.input} value={stop.placeId} aria-label={`Stop ${index + 1} place`}
            onChange={(e) => update(index, { placeId: e.target.value })}>
            <option value="">Choose a place</option>
            {places.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <input style={styles.input} type="number" min="0" step="1" placeholder="min"
            aria-label={`Stop ${index + 1} minutes from start`}
            value={index === 0 ? "0" : stop.minutesFromStart} disabled={index === 0}
            onChange={(e) => update(index, { minutesFromStart: e.target.value })} />
          <button type="button" style={styles.iconButton} title="Remove stop" aria-label={`Remove stop ${index + 1}`}
            disabled={stops.length <= 2} onClick={() => remove(index)}>✕</button>
        </div>
      ))}

      <button type="button" style={styles.linkButton} onClick={add}>+ Add stop</button>
    </div>
  );
};
