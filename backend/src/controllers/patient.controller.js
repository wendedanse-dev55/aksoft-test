import expressAsyncHandler from "express-async-handler";
import Doctor from "../models/doctor.model.js";
import Patient from "../models/patient.model.js";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
dayjs.extend(utc);
export const appointmentPatient = expressAsyncHandler(async (req, res) => {
  const { doctorId } = req.params;
  const patientData = req.body;
  try {
    const patient = await Patient.create(patientData);

    const doctor = await Doctor.findById(doctorId);
    if (!doctor) {
      return res.status(404).json({ message: "Доктор не найден" });
    }
    await Patient.findByIdAndUpdate(patient._id, { doctorId: doctor._id });
    await Doctor.findByIdAndUpdate(doctorId, {
      $push: { appointments: patient._id },
    });
    return res.status(201).json({ success: true });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});

export const getPatients = expressAsyncHandler(async (req, res) => {
  try {
    const { date, search } = req.query;
    let filter = {};
    if (date) {
      const start = dayjs(date).startOf("day").toDate();
      const end = dayjs(date).endOf("day").toDate();

      filter.timeStart = {
        $gte: start,
        $lte: end,
      };
    }
    if (search) {
      filter.patient = {
        $regex: search,
        $options: "i",
      };
    }
    const patients = await Patient.find(filter).sort({ createdAt: -1 });
    return res.status(200).json({ patients });
  } catch (e) {
    return res.status(400).json({ error: e.message });
  }
});
