import { ValidationErrorResponse } from "@/types";
import { OptionsObject, SnackbarKey } from "notistack";

export const showValidationErrors = (
  errors: Record<string, string>,
  enqueueSnackbar: (message: string, options?: OptionsObject<'error'>) => void
) => {
  Object.entries(errors).forEach(([field, message], index) => {
    setTimeout(() => {
      enqueueSnackbar(message, {
        variant: 'error',
        autoHideDuration: 4000,
        key: `${field}-${message}`,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'left'
        }
      });
    }, index * 300);
  });
};

export const showErrorMessage = (
  message: string,
  enqueueSnackbar: (message: string, options?: OptionsObject) => SnackbarKey
): void => {
  enqueueSnackbar(message, {
    variant: 'error',
    key: `error-${Date.now()}`
  });
};

export const isValidationError = (error: any): error is ValidationErrorResponse => {
  return error?.errors && typeof error.errors === 'object';
};
