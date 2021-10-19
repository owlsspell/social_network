import { Field } from "react-final-form"
import { Input } from "../../../utils/FormsControl/FormsControl"

const Contacts =({title,value})=> {
    return <div key={title}>{title}: {value}</div>
  }

export const ContactsForm =({title,value}) => {
  return  <div>{title} : 
  <Field
  key={title}
  name={"contacts."+title}
  type="text"
  placeholder={title}
  component={Input}
/></div>

}

  export default Contacts