import React from "react";
import styles from "./ProfileInfo.module.css";
import wallpapers from "./../../../assets/img/wallpapers.jpg";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "./../../../assets/img/user.png";
import Status from "./Status/StatusWithHocks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={styles.profile__info}>
      <div className={styles.profile__wallpapers}>
        <img src={wallpapers} alt="wallpapers" />
      </div>
      <div className={styles.profile__data}>
        <div className={styles.profile__avatar}>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto
            }
            alt="userPhoto"
          />
        </div>
        <div className={styles.profile__name}>{props.profile.fullName}</div>
      </div>
      <Status status={props.statusText} updateStatus={props.updateStatus} />
    </div>
  );
};
export default ProfileInfo;
