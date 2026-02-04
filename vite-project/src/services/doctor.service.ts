import { axiosInstance } from "../api/api.ts";
import type { IDoctor } from "@pages/Calendar/entities/types.ts";

export const doctorService = {
  get: async () => {
    return await axiosInstance
      .get<{ doctors: IDoctor[] }>("/doctors")
      .then(({ data }) =>
        data.doctors.map((doc) => ({
          ...doc,
          resourceTitle: `${doc.doctor} ${doc.specialty}`,
          resourceId: doc._id,
        })),
      );
  },
  add: async (body) => {
    return await axiosInstance.post("/doctors", body);
  },
};
