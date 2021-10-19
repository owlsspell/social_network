import React, { useState } from "react";
import Preloader from "../../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../assets/user.png";
import ProfileStatus from "./ProfileStatus";
import ProfileDatForm from "./ProfileDatForm";
import Contacts from "./Contacts";
import { FORM_ERROR } from "final-form";

const ProfileInfo = ({profile,saveProfile, ...props}) => {

  const [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />;
  }
  const onMainFotoSelected =(e) => {
    if(e.target.files.length){
      props.savePhoto(e.target.files[0])
    }
  }

  const saveUserInfo = (formData)=>{
    // console.log(formData);
    debugger
    saveProfile(formData).then((res)=>{setEditMode(false)}).catch(e=>{debugger; return { [FORM_ERROR]: e.message };})
    
}

  return (
    <div>
      <div className={s.bgImg}>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div className={s.descriptionBlock}>
        <img
          className={s.avatar}
          src={
            profile.photos.large != null
              ? profile.photos.large
              : userPhoto
          }
        />
        {props.isOwner && <input type="file" onChange={onMainFotoSelected} />}
        {editMode? <ProfileDatForm initialValues={profile} profile={profile} saveUserInfo={saveUserInfo} />: <ProfileData profile={profile} isOwner={props.isOwner} goToEditMode={()=>setEditMode(true)} />}
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>
    </div>
  );
};

const ProfileData =({profile ,isOwner,goToEditMode})=>{
  return <>
    <div>
      {isOwner&& <button onClick={goToEditMode}>Edit</button>}
            <div>Looking for a job: {profile.lookingForAJob? "yes":"no"}</div>
            <div>About me: {profile.aboutMe}</div>
            {profile.lookingForAJob?
            <div>My professional skills: {profile.lookingForAJobDescription}</div> : ""}
            <div>Contacts: {Object.keys(profile.contacts).map(key=>{
              return <Contacts key={key} title={key} value={profile.contacts[key]}/>
            })}</div>
          </div>


        <h3>{profile.fullName}</h3>
        <span>{profile.aboutMe}</span>
  </>
}



export default ProfileInfo;
