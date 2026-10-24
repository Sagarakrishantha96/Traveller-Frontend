// Merges the "mobile" styles with the "desktop" styles.
// Mobile is the base; on desktop, the desktop values override the mobile ones.

type StyleObject = { [key: string]: any };

const isObject = (value: unknown): value is StyleObject =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const deepMerge = (base: StyleObject, override: StyleObject): StyleObject => {
  const result: StyleObject = { ...base };
  Object.keys(override).forEach((key) => {
    if (isObject(base[key]) && isObject(override[key])) {
      result[key] = deepMerge(base[key], override[key]);
    } else {
      result[key] = override[key];
    }
  });
  return result;
};

export const getComponentStyle = (
  styleSheet: { mobile: StyleObject; desktop: StyleObject },
  isMobile: boolean
): StyleObject => {
  return isMobile ? styleSheet.mobile : deepMerge(styleSheet.mobile, styleSheet.desktop);
};