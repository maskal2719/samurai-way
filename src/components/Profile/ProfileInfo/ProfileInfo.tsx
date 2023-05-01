import React from 'react';
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import userPhotoUnknown from '../../../assets/images/user.jpeg'
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}
const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile, status,updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    } else {
        return <div className={classes.profile_info}>
            <img src={profile.photos.large ? profile.photos.large : userPhotoUnknown} alt="avatar"/>
            <div>
                <h3 className={classes.name}>{profile.fullName}</h3>
                <div className={classes.dop_info}>
                    <div>{profile.aboutMe}</div>
                    <ProfileStatus status={status} updateStatus={updateStatus}/>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    }

};

export default ProfileInfo;