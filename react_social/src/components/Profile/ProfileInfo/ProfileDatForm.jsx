import Contacts, { ContactsForm } from "./Contacts"
import {Input,Textarea } from "../../../utils/FormsControl/FormsControl"
import { Field, Form } from "react-final-form"


const ProfileDatForm =({profile,saveUserInfo,initialValues})=>{
    
    return <>
      <Form onSubmit={saveUserInfo}  initialValues={initialValues}
      render={({ handleSubmit, submitError }) => (
        <form onSubmit={handleSubmit} className={""}>
              <button type="submit" onSubmit={handleSubmit} >Save</button>
              <div>Name:  
            <Field
              name="fullName"
              type="text"
              placeholder="Name"
              component={Input}
            />
          </div>
              <div>Looking for a job: 
            <Field
              name="lookingForAJob"
              type="checkbox"
              placeholder=""
              component={Input}

            />
          </div>
              <div>About me: 
              <Field
              name="aboutMe"
              type="text"
              placeholder=""
              component={Textarea}

            />
            </div>
              <div>My professional skills: 
            <Field
              name="lookingForAJobDescription"
              type="text"
              placeholder=""
              component={Textarea}

            /></div> 
              <div>Contacts: {Object.keys(profile.contacts).map(key=>{
               
                return <ContactsForm key={key} title={key} value={"contacts." + key}/>
                
              })}</div>
          
              {console.log(submitError)}
  
          <h3>{profile.fullName}</h3>
          <span>{profile.aboutMe}</span> 
        </form>
        
      )}
          
          > </Form>
    </>
  }

  export default ProfileDatForm