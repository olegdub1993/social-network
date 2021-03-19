import styles from "./FormsControls.module.css";
import React from "react";
export const FormControl = ({ input, meta, typeField, ...props }) => {
  const someError = meta.touched && meta.error;
  return (
    <div
      className={styles.formsControls + " " + (someError ? styles.error : " ")}
    >
      <div>{React.createElement(typeField, { ...input, ...props })}</div>
      {someError && <span>{meta.error}</span>}
    </div>
  );
};
// export const Textarea = (props) => {
//   const { input, meta, ...restProps } = props;
//   return (
//     <FormControl {...props}>
//       <textarea {...input} {...restProps} />
//     </FormControl>
//   );
// };
// export const Input = (props) => {
//   const { input, meta, ...restProps } = props;
//   return (
//     <FormControl {...props}>
//       <input {...input} {...restProps} />
//     </FormControl>
//   );
// };
