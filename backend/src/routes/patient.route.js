import express from "express";
import {
  appointmentPatient,
  getPatients,
} from "../controllers/patient.controller.js";

const router = express.Router();

router.post("/:doctorId", appointmentPatient);
router.get("/", getPatients);

export default router;
