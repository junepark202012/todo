import { getClasses } from "@/utils/styles";
import styles from "@/components/Form/styles/form.module.css";

export function DueDate() {
  return (
    <input
      type="datetime-local"
      className={getClasses(
        "w-full",
        styles.inputDefault,
        false,
        styles.inputIsError,
        styles.inputIsNotError
      )}
      required
    />
  );
}
