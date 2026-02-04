import { Popover, Tag } from "antd";
import { formatDate } from "../../helpers.ts";

const EventWithPopover = ({ event }) => (
  <Popover
    title={event.title}
    content={
      <div>
        <p>{event.patient}</p>
        <p>{event.phone}</p>
        <p>{event.type}</p>
        <p>{event.comment}</p>
        <Tag color="blue">{formatDate(event.start, "HH:mm")}</Tag>
      </div>
    }
    trigger="hover"
  >
    <div style={{ height: "100%" }}>{event.patient}</div>
  </Popover>
);

export default EventWithPopover;
