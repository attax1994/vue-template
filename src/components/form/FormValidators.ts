export interface FormValidatorFunction {
  (value: string): string | void;
}

export const MaxLength: (length: number, errorText?: string) => FormValidatorFunction =
  (length: number, errorText: string = '内容长度过长') => (value: string) => {
    if (value.length > length) {
      return errorText;
    }
  };

export const MinLength: (length: number, errorText?: string) => FormValidatorFunction =
  (length: number, errorText: string = '内容长度不足') => (value: string) => {
    if (value.length < length) {
      return errorText;
    }
  };

export const Required: (errorText?: string) => FormValidatorFunction =
  (errorText: string = '该项必须填写') => (value: string) => {
    if (!value.length) {
      return errorText;
    }
  };