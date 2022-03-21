const useField = (fieldType) => {
  return {
    value: fieldType.fieldValue,
    "aria-invalid": !fieldType.valid,
    "aria-describedby": fieldType + "-error-msg",
    valid: fieldType.valid
  }
}
export default useField;
