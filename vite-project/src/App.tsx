import { Routes, Route } from "react-router-dom";
import CalendarPage from "@pages/Calendar/page.tsx";
import AppWrapper from "@/widgets/AppWrapper";
import Home from "@pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<AppWrapper />}>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<CalendarPage />} />
      </Route>
    </Routes>
  );
}

export default App;
