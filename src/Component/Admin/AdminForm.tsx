import React, { useState } from "react";
import { PlaceModel } from "../../Models/PlaceModel";
import { AdminOptionsModel } from "../../Models/AdminModel";
import { saveAdminItem } from "../../Services/AdminService";
import { FieldConfig, FormValues, TabConfig, toFormValues, toRequest } from "./adminConfig";
import { RouteStopsEditor, StopValue } from "./RouteStopsEditor";
import { getErrorMessage } from "../Common";

interface AdminFormProps {
  styles: any;
  config: TabConfig;
  item: any | null;                   // null = adding a new one
  places: PlaceModel[];
  options: AdminOptionsModel;
  onClose: () => void;
  onSaved: (message: string) => void;
}

const emptyStops: StopValue[] = [{ placeId: "", minutesFromStart: "0" }, { placeId: "", minutesFromStart: "" }];

// Popup form to add or edit one item; the fields come from adminConfig.ts
export const AdminForm: React.FC<AdminFormProps> = ({ styles, config, item, places, options, onClose, onSaved }) => {
  const isRoute = config.tab === "routes";
  const [values, setValues] = useState<FormValues>(toFormValues(config.fields, item));
  const [stops, setStops] = useState<StopValue[]>(
    item?.stops?.map((s: any) => ({ placeId: String(s.placeId), minutesFromStart: String(s.minutesFromStart) })) ?? emptyStops
  );
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState<boolean>(false);

  const setValue = (name: string, value: string | boolean) => {
    const next = { ...values, [name]: value };

    // Picking a place fills in its location if none was entered yet
    if (name === "placeId" && values.latitude === "" && values.longitude === "") {
      const place = places.find((p) => String(p.id) === value);
      if (place) {
        next.latitude = String(place.latitude);
        next.longitude = String(place.longitude);
      }
    }
    setValues(next);
  };

  const validate = (): string | null => {
    const missing = config.fields.find((f) => f.required && f.type !== "checkbox" && String(values[f.name]).trim() === "");
    if (missing) return `${missing.label} is required`;
    if (isRoute && stops.some((s, i) => s.placeId === "" || (i > 0 && s.minutesFromStart === "")))
      return "Every stop needs a place and minutes from the start";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const problem = validate();
    if (problem) return setError(problem);

    const request = toRequest(config.fields, values);
    if (isRoute) {
      request.stops = stops.map((s, i) => ({ placeId: Number(s.placeId), minutesFromStart: i === 0 ? 0 : Number(s.minutesFromStart) }));
    }

    setSaving(true);
    setError(null);
    saveAdminItem(config.tab, item?.id ?? null, request)
      .then(() => onSaved(`${item ? "Updated" : "Added"} ${config.singular} "${values.name}"`))
      .catch((err) => {
        setError(getErrorMessage(err, `Could not save this ${config.singular}. Please check the details.`));
        setSaving(false);
      });
  };

  const renderInput = (f: FieldConfig) => {
    const value = values[f.name];
    switch (f.type) {
      case "textarea":
        return <textarea id={f.name} style={styles.textarea} value={String(value)} onChange={(e) => setValue(f.name, e.target.value)} />;
      case "checkbox":
        return (
          <label style={styles.checkboxRow}>
            <input id={f.name} type="checkbox" checked={Boolean(value)} onChange={(e) => setValue(f.name, e.target.checked)} />
            Yes
          </label>
        );
      case "select":
        return (
          <select id={f.name} style={styles.input} value={String(value)} onChange={(e) => setValue(f.name, e.target.value)}>
            <option value="">Choose...</option>
            {options[f.options!].map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        );
      case "place":
        return (
          <select id={f.name} style={styles.input} value={String(value)} onChange={(e) => setValue(f.name, e.target.value)}>
            <option value="">Choose a place...</option>
            {places.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        );
      default:
        return (
          <input id={f.name} style={styles.input} type={f.type} step={f.step} placeholder={f.placeholder}
            value={String(value)} onChange={(e) => setValue(f.name, e.target.value)} />
        );
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <form style={styles.modal} onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} noValidate>
        <h3 style={styles.modalTitle}>{item ? `Edit ${config.singular}` : `Add ${config.singular}`}</h3>

        <div style={styles.formGrid}>
          {config.fields.map((f) => (
            <div key={f.name} style={{ ...styles.field, ...(f.wide ? styles.fieldWide : {}) }}>
              <label style={styles.label} htmlFor={f.name}>
                {f.label} {f.required && <span style={styles.required}>*</span>}
              </label>
              {renderInput(f)}
            </div>
          ))}
        </div>

        {isRoute && <RouteStopsEditor styles={styles} places={places} stops={stops} onChange={setStops} />}

        {error && <div style={styles.formError}>{error}</div>}

        <div style={styles.modalActions}>
          <button type="button" style={styles.cancelButton} onClick={onClose}>Cancel</button>
          <button type="submit" disabled={saving} style={{ ...styles.saveButton, ...(saving ? styles.buttonDisabled : {}) }}>
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};
