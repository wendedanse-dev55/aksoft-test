export type ModalKeys = "isAddDoctor" | "isAddPatient";

export interface IDoctor {
  doctor: string;
  specialty: string;
  icon: string;
  resourceId: string;
  resourceTitle: string;
}
