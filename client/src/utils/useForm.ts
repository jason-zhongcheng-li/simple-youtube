import { useState } from "react";

export const useForm = (initValues: any) => {
  const [values, setValues] = useState(initValues);

  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target);
      setValues({
        ...values,
        [e.target.name]: e.target.value
      });
    },
    setValues
  ];
};