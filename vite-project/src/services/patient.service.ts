import { axiosInstance } from "@/api/api.ts";
import dayjs from "dayjs";
import { formatDate } from "@/helpers.ts";

export const patientService = {
  add: async (body) => {
    return await axiosInstance.post(`/patients/${body.assignedDoctor}`, body);
  },
  get: async (currentDate: Date, debounceSearch: string) => {
    return await axiosInstance
      .get(`/patients`, {
        params: {
          date: formatDate(currentDate, "YYYY-MM-DD"),
          search: debounceSearch,
        },
      })
      .then(({ data }) => {
        return data.patients.map((patient) => {
          return {
            ...patient,
            title: patient.comment,
            start: new Date(patient.timeStart),
            end: new Date(patient.timeEnd),
            resourceId: patient.doctorId,
          };
        });
      });
  },
};
