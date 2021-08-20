import { Field, Form } from "react-final-form";
import { Textarea } from "../../utils/FormsControl/FormsControl";
import {
  composeValidators,
  maxLengthCreater,
  required,
} from "../../utils/validators/validators";
import s from "./Dialogs.module.css";

const AddMessageForm = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Field
            component={Textarea}
            name="newMessageText"
            className={s.textarea}
            cols="100"
            rows="5"
            placeholder="Write..."
            validate={composeValidators(required, maxLengthCreater(50))}
          />
          <button>Отправить сообщение</button>
        </form>
      )}
    </Form>
  );
};

export default AddMessageForm;
