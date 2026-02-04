export const formats = {
  timeGutterFormat: (date, culture, localizer) =>
    localizer.format(date, "HH:mm", culture), // Формат 24 часа без AM/PM
};

const colorsMap = {
  Реставрация: "#4caf50",
  Лечение: "#ff9800",
};
export const eventPropGetter = (event) => {
  return {
    style: {
      backgroundColor: colorsMap[event.type] || "#3174ad",
      borderRadius: "5px",
      opacity: 0.8,
      color: "white", // Цвет текста
      border: "none",
      display: "block",
    },
  };
};
