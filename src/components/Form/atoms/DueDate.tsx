import DatePicker from "react-datepicker";
import { useState } from "react";
import styles from "@/components/Form/styles/form.module.css";
import { classNames } from "@/utils/styles";

export function DueDate() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      dateFormat="MMMM d, yyyy h:mm aa"
      selected={startDate}
      showTimeSelect
      timeCaption="time"
      timeFormat="HH:mm"
      timeIntervals={15}
      onChange={(date) => {
        if (date !== null) {
          setStartDate(date);
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
