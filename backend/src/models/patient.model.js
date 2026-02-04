import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    timeStart: {
      type: Date,
      required: true,
    },
    timeEnd: {
      type: Date,
      required: true,
    },
    patient: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["Пришел", "Отклонен"],
    },
    type: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
    },
    doctorId: {
      type: String,
    },
  },
  { timestamps: true },
);

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
