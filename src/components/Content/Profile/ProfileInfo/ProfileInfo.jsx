import s from "./ProfileInfo.module.css";
import defaultBg from '../../../../assets/images/sydneyBg.jpg';
import userPhoto from "../../../../assets/images/cat.png";

import ProfileStatusContainer from "./ProfileStatus/ProfileStatusContainer";

const ProfileInfo = (props) => {
    let createContactLinks = () => {
        let unsortedLinks = Object.values(props.profile.contacts);
        let sortedLinks = [];

        unsortedLinks.forEach(element => {
            if (element) sortedLinks.push(element);
        });

        return sortedLinks.map((link, index) => {
            if (index === sortedLinks.length - 1) return <a href={link} key={link} className={s.contactLink} rel="noreferrer"> {link}.</a>
            return <a href={link} key={link} className={s.contactLink} target="_blank" rel="noreferrer"> {link}, </a>
        })
    }

    return (
        <div>
            <div className={s.bg_img} style={{ backgroundImage: `url(${props.profile.photos.large || defaultBg})` }}></div>
            <div className={s.header}>
                <div>
                    <img src={props.profile.photos.large || userPhoto} alt="" className={s.user_img} />
                </div>
                <div className={s.user}>
                    <div className={s.user_name}>{props.profile.fullName}</div>

                    <ProfileStatusContainer userId={props.profile.userId}/>

                    <div className={s.user_info}>
                        <div>About me: <span>{props.profile.aboutMe}</span></div>
                        <div>Ищу работу: <span>{props.profile.lookingForAJob ? "да" : "нет"}</span></div>
                        <div>Описание: <span>{props.profile.lookingForAJobDescription}</span></div>

                        <div>Контакты:
                            {createContactLinks()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;