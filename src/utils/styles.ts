export const getClasses = function (
  custom = "",
  defaultStyles = "",
  condition = true,
  whenTrue = "",
  whenFalse = ""
) {
  return [custom, defaultStyles, condition ? whenTrue : whenFalse].join(" ");
};
