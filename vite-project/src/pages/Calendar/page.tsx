import Calendar from "@/widgets/Calendar";
import { JSX } from "react";
import { Button, Col, Input, Row } from "antd";
import { useCalendarSection } from "@pages/Calendar/entities/useHook.ts";
import AddPatientModal from "@pages/Calendar/ui/AddPatientModal.tsx";

const CalendarPage = (): JSX.Element => {
  const {
    modals,
    handleToggleModals,
    addPatientMutate,
    currentDate,
    setCurrentDate,
    debounceSearch,
    searchPatient,
    setSearchPatient,
  } = useCalendarSection();
  return (
    <>
      <Row gutter={[24, 24]} justify="end">
        <Col>
          <Input
            placeholder="Поиск пациентов"
            onChange={(e) => setSearchPatient(e.target.value)}
          />
        </Col>
        <Row gutter={24}>
          <Col span={12}>
            <Button
              type="primary"
              onClick={() => handleToggleModals("isAddPatient")}
            >
              Добавить пациента
            </Button>
          </Col>
        </Row>
        <Col span={24}>
          <Calendar
            debounceSearch={debounceSearch}
            currentDate={currentDate}
            setCurrentDate={setCurrentDate}
          />
        </Col>
      </Row>
      <AddPatientModal
        addPatientMutate={addPatientMutate}
        isOpen={modals.isAddPatient}
        close={() => handleToggleModals("isAddPatient")}
      />
    </>
  );
};

export default CalendarPage;
