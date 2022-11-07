import DatePicker from "react-datepicker";
import { useState } from "react";

export function DueDate() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      showTimeSelect
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
}
