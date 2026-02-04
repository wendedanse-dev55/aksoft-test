const CustomToolbar = (toolbar) => {
  const goToBack = () => {
    toolbar.onNavigate("PREV");
  };

  const goToNext = () => {
    toolbar.onNavigate("NEXT");
  };

  const goToToday = () => {
    toolbar.onNavigate("TODAY");
  };
  return (
    <div className="rbc-toolbar">
      <span className="rbc-btn-group">
        <button onClick={goToBack}>Назад</button>
        <button onClick={goToToday}>Сегодня</button>
        <button onClick={goToNext}>Вперед</button>
      </span>
      <span className="rbc-toolbar-label">{toolbar.label}</span>
    </div>
  );
};

export default CustomToolbar;
