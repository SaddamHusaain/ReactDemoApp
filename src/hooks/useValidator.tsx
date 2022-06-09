import { useState } from "react";
import SimpleReactValidator from "simple-react-validator";

const useValidator = (customMessage = {}, customValidator: any = {}) => {
  const customValidations = {
    // For Custom error message in Maximum Administrators
    maxAdministrators: {
      message: "NumberOfAdministratorsNotMoreThan_Users",
      // eslint-disable-next-line consistent-return
      rule: (value: any, params: any) => {
        if (parseFloat(value) > parseFloat(params[0])) {
          return value === params[0];
        }
      },
      require: true,
    },
    validUrl: {
      message: "please check url format",
      // eslint-disable-next-line consistent-return
      rule: (val: any) => {
        /* eslint-disable no-useless-escape */
        const urlReg =
          /(https?:\/\/(.+?\.)?davigold\.tech(\/[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*)?)/;
        if (!urlReg.test(val)) {
          return false;
        }
      },
      // required: true,
    },
    ...customValidator,
  };

  const [show, setShow] = useState(false);
  const validator = new SimpleReactValidator({
    messages: customMessage,
    validators: customValidations,
  });

  if (show) {
    validator.showMessages();
  }
  return [validator, setShow] as const;
};

export default useValidator;
