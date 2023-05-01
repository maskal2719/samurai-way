import React from 'react';
import classes from "./ProfileInfo.module.css";
import {ProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/Preloader/Preloader";
import userPhotoUnknown from '../../../assets/images/user.jpeg'

export type ProfileInfoPropsType = {
    profile: ProfileType
}
const ProfileInfo: React.FC<ProfileInfoPropsType> = ({profile}) => {

    if (!profile) {
        return <Preloader/>
    } else {
        return <div className={classes.profile_info}>
            <img src={profile.photos.large ? profile.photos.large : userPhotoUnknown} alt="avatar"/>
            <div>
                <h3 className={classes.name}>{profile.fullName}</h3>
                <div className={classes.dop_info}>
                    <div>{profile.aboutMe}</div>
                    <p className={classes.status}>Status: Hello!</p>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    }

};

export default ProfileInfo;