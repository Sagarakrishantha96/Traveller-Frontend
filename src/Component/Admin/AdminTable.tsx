import React from "react";
import { ColumnConfig } from "./adminConfig";
import { PlaceImage } from "../Share/PlaceImage";

interface AdminTableProps {
  styles: any;
  columns: ColumnConfig[];
  rows: any[];
  emptyText: string;
  onEdit: (row: any) => void;
  onDelete: (row: any) => void;
}

// List of places / attractions / stays / routes with Edit and Delete on each row
export const AdminTable: React.FC<AdminTableProps> = ({ styles, columns, rows, emptyText, onEdit, onDelete }) => {
  if (rows.length === 0) {
    return <div style={{ ...styles.tableWrapper, ...styles.empty }}>{emptyText}</div>;
  }

  return (
    <div style={styles.tableWrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            {columns.map((c) => <th key={c.label} style={styles.th}>{c.label}</th>)}
            <th style={styles.th} />
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              {columns.map((c) => (
                <td key={c.label} style={styles.td}>
                  {c.image
                    ? <PlaceImage src={c.image(row)} alt={row.name} kind={row.category ?? row.type ?? "Heritage"} style={styles.thumb} />
                    : c.value(row)}
                </td>
              ))}
              <td style={styles.td}>
                <div style={styles.rowActions}>
                  <button style={styles.editButton} onClick={() => onEdit(row)}>Edit</button>
                  <button style={styles.deleteButton} onClick={() => onDelete(row)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
