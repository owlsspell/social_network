import styles from "./FormsControl.module.css";

const FormControl = ({ input, meta, FormType, ...props }) => {
  //   debugger;
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      {/* <div>{props.children}</div> */}
      <div>
        <FormType {...props} {...input} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  //   debugger;
  return (
    <FormControl {...props} FormType="input">
      {/* <textarea {...props} {...props.input} /> */}
    </FormControl>
  );
};
export const Input = (props) => {
  //   debugger;
  //   const hasError = meta.touched && meta.error;
  //   return (
  //     <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
  //       <div>
  //         <input {...input} {...props} />
  //       </div>
  //       {hasError && <span>{meta.error}</span>}
  //     </div>
  //   );
  return (
    <FormControl {...props} FormType="input">
      {/* <input {...props} {...props.input} /> */}
    </FormControl>
  );
};
