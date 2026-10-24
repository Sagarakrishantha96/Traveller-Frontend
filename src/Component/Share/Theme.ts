// Shared colors and fonts for the whole app.
// (Plain objects with "as const" instead of enums, so they work with any TS config.)

export const Color = {
  Primary: "#0E7C86",
  PrimaryDark: "#0A5C63",
  Accent: "#F4A261",
  White: "#FFFFFF",
  DeepBlack: "#1D1D1F",
  SharpAsh: "#6B7280",
  MiddleAsh: "#D1D5DB",
  LightAsh: "#E5E7EB",
  Background: "#F7F9FA",
  Red: "#DC2626",
  LightRed: "#FEF2F2",
  Green: "#15803D",
  LightGreen: "#F0FDF4",
} as const;

export const Font = {
  Default: "'Poppins', 'Segoe UI', sans-serif",
} as const;