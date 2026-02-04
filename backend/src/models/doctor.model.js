import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    doctor: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
      },
    ],
  },
  { timestamps: true },
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
