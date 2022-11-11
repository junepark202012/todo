import DatePicker from "react-datepicker";
import styles from "@/components/Form/styles/form.module.css";
import { classNames } from "@/utils/styles";
import { Controller } from "react-hook-form";
import { ReactHookForm } from "@/components/Form/Form";

type DueDateProps = {
  reactHookForm: ReactHookForm;
};

export function DueDate({ reactHookForm }: DueDateProps) {
  return (
    <Controller
      control={reactHookForm.control}
      name="dueDate"
      defaultValue={new Date()}
      render={({ field: { onChange, value } }) => {
        console.log(value);
        return (
          <DatePicker
            dateFormat="yyyy-MM-dd h:mm aa"
            onChange={onChange}
            selected={value}
            showTimeSelect
            timeCaption="time"
            timeFormat="HH:mm"
            timeIntervals={15}
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
      }}
    />
  );
}
