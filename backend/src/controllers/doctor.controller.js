import expressAsyncHandler from "express-async-handler";
import Doctor from "../models/doctor.model.js";

export const createDoctor = expressAsyncHandler(async (req, res) => {
  try {
    const body = req.body;
    const doctor = Doctor.create({
      ...body,
    });
    return res.status(201).json({ doctor });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

export const getDoctors = expressAsyncHandler(async (req, res) => {
  try {
    const doctors = await Doctor.find().sort({ createdAt: -1 });
    return res.status(200).json({ doctors });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});
