import { DatePicker, Form, Input, Modal, Select } from "antd";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY_DOCTORS } from "@pages/Calendar/entities/constants.ts";
import { useMemo } from "react";
type FormValues = {
  assignedDoctor: string;
  timeStart: string;
  timeEnd: string;
  patient: string;
  phone: string;
  comment: string;
};
interface IProps {
  isOpen: boolean;
  close: () => void;
  addPatientMutate: (body: FormValues) => void;
}

const { TextArea } = Input;
const AddPatientModal = (props: IProps) => {
  const { isOpen, close, addPatientMutate } = props;
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const doctors = queryClient.getQueryData([QUERY_KEY_DOCTORS]);
  const selectList = useMemo(() => {
    return (doctors || []).map((doc) => ({
      value: doc._id,
      label: doc.doctor,
    }));
  }, [doctors]);
  const onFinish = (values) => {
    addPatientMutate(values);
  };
  return (
    <Modal
      title="Добавить пациента"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isOpen}
      onOk={() => form.submit()}
      onCancel={() => close()}
      okButtonProps={{
        htmlType: "submit",
        form: "myForm",
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
        id="myForm"
      >
        <Form.Item
          label="Выбрать врача"
          style={{ marginBottom: 8 }}
          name="assignedDoctor"
          rules={[{ required: true, message: "Please fill!" }]}
        >
          <Select options={selectList} />
        </Form.Item>
        <Form.Item
          label="Что требуется?"
          style={{ marginBottom: 8 }}
          name="type"
          rules={[{ required: true, message: "Please fill!" }]}
        >
          <Select
            options={[
              {
                value: "Лечение",
                label: "Лечение",
              },
              {
                value: "Реставрация",
                label: "Реставрация",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          label="Начало"
          style={{ marginBottom: 8 }}
          name="timeStart"
          rules={[{ required: true, message: "Please fill start date!" }]}
        >
          <DatePicker showTime style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Конец"
          style={{ marginBottom: 8 }}
          name="timeEnd"
          rules={[{ required: true, message: "Please fill end date!" }]}
        >
          <DatePicker showTime style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Пациент"
          style={{ marginBottom: 8 }}
          name="patient"
          rules={[{ required: true, message: "Please fill patient field" }]}
        >
          <Input placeholder="patient" />
        </Form.Item>
        <Form.Item
          label="Телефон"
          style={{ marginBottom: 8 }}
          name="phone"
          rules={[{ required: true, message: "Please fill phone field" }]}
        >
          <Input placeholder="phone" />
        </Form.Item>
        <Form.Item
          label="Комментарий"
          style={{ marginBottom: 8 }}
          name="comment"
          rules={[{ required: true, message: "Please fill comment field" }]}
        >
          <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddPatientModal;
