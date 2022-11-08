import DatePicker from "react-datepicker";
import { useState } from "react";
import styles from "@/components/Form/styles/form.module.css";
import { classNames } from "@/utils/styles";

export function DueDate() {
  const [dueDate, setDueDate] = useState(new Date());

  return (
    <DatePicker
      dateFormat="yyyy-MM-dd h:mm aa"
      selected={dueDate}
      showTimeSelect
      timeCaption="time"
      timeFormat="HH:mm"
      timeIntervals={15}
      onChange={(date) => {
        if (date !== null) {
          setDueDate(date);
        }
      }}
      className={classNames(
        "w-full sm:w-auto",
        styles.inputDefault,
        styles.inputIsNotError
      )}
      popperModifiers={[
        {
          name: "arrow",
          options: {
            padding: ({ popper }) => popper.width / 2,
          },
        },
      ]}
    />
  );
}
