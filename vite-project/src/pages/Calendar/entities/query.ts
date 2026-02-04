import { useMutation, useQuery } from "@tanstack/react-query";
import { doctorService } from "@/services/doctor.service.ts";
import {
  QUERY_KEY,
  QUERY_KEY_DOCTORS,
} from "@pages/Calendar/entities/constants.ts";
import { patientService } from "@/services/patient.service.ts";

export const useAddPatientMutation = (onSuccessAdd: () => void) => {
  return useMutation({
    mutationFn: (body) => {
      return patientService.add(body);
    },
    onSuccess: () => {
      onSuccessAdd();
    },
  });
};

export const useGetPatientsQuery = (
  currentDate: Date,
  debounceSearch: string,
) => {
  return useQuery({
    queryKey: [QUERY_KEY, currentDate, debounceSearch],
    queryFn: () => {
      return patientService.get(currentDate, debounceSearch);
    },
  });
};

export const useGetDoctorsQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEY_DOCTORS],
    queryFn: () => doctorService.get(),
  });
};
