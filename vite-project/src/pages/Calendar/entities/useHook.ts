import { useImmer } from "use-immer";
import type { ModalKeys } from "@pages/Calendar/entities/types.ts";
import {
  useAddPatientMutation,
  useGetDoctorsQuery,
  useGetPatientsQuery,
} from "@pages/Calendar/entities/query.ts";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@pages/Calendar/entities/constants.ts";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export const useCalendarSection = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [searchPatient, setSearchPatient] = useState("");
  const [debounceSearch] = useDebounce(searchPatient, 1000);

  const [modals, setModals] = useImmer({
    isAddDoctor: false,
    isAddPatient: false,
  });

  const queryClient = useQueryClient();

  const onSuccessAdd = () => {
    setModals({
      isAddDoctor: false,
      isAddPatient: false,
    });
    queryClient.invalidateQueries(QUERY_KEY);
  };

  const addPatientMutate = useAddPatientMutation(onSuccessAdd);

  useGetDoctorsQuery();
  useGetPatientsQuery(currentDate, debounceSearch);
  const handleToggleModals = (modalName: ModalKeys) => {
    setModals((draft) => {
      draft[modalName] = !draft[modalName];
    });
  };

  return {
    modals,
    handleToggleModals,
    addPatientMutate: (body) => addPatientMutate.mutate(body),
    setCurrentDate,
    currentDate,
    debounceSearch,
    setSearchPatient,
    searchPatient,
  };
};
