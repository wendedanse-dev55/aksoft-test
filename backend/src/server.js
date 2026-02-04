import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";
import doctorRoute from "./routes/doctor.route.js";
import patientRoute from "./routes/patient.route.js";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  }),
);
app.use(express.json());

app.use("/api/doctors", doctorRoute);
app.use("/api/patients", patientRoute);

app.get("/", (req, res) => res.send("hello from server"));

const startServer = async () => {
  try {
    await connectDB();
    //listen for local development
    if (ENV.NODE_ENV !== "production") {
      app.listen(ENV.PORT, () => console.log(`Server is running ${ENV.PORT}`));
    }
  } catch (e) {
    console.error("failed to start server:", e.message);
    process.exit(1);
  }
};

startServer();

export default app;
