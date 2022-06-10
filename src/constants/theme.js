export const theme = Object.freeze({
  colors: {
    primaryColor: "#0c389f",
    reverseColor: "#fff",
    accentColor: "#ffd61a",
    disabledColor: "#727272",
    outlineColor: "#ffd61a",
    backgroundColor: "#deeeff",
    backgroundColorForm: "#9ddafc",
    borderDisabledColor: "#c1c1c1",
    backgroundDisabledColor: "#d0d0d0",
  },
  spacing: (value) => `${4 * value}px`,
  timing: "250ms",
  timingFunction: `cubic-bezier(0.4, 0, 0.2, 1)`,
  boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.15)`,
});
