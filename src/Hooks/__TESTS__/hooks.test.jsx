import { useForm, getFieldProps, usePasswordRegex } from '../formHooks';

describe("test form hooks", () => {

  test("testing getFieldProps", () => {
    const field = {
      fieldValue: "",
      valid: false,
      focus: false
    };
    const fieldAriaText = "test";
    const result = getFieldProps(field, fieldAriaText);
    expect(result).toEqual({
      validate: true,
      value: "",
      valid: false,
      focus: false,
      "aria-invalid": true,
      "aria-describedby": "test-error-msg",
      ariaId: "test-error-msg",
      "data-testid": "test"
    });
  })

  test("testing usePasswordRegex Hooks", () => {
    const password = "";
    const result = usePasswordRegex(password);
    expect(result).toEqual({
      length: false,
      uppercase: false,
      lowercase: false,
      digits: false,
      specialChar: false,
      noSpace: true,
      result: false
    });
  });
});
