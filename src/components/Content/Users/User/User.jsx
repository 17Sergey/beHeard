import styles from "./User.module.css";

import userPhoto from "../../../../assets/images/cat.png";
import { NavLink } from "react-router-dom";

let User = (props) => {
    let follow = () => props.follow(props.user.id);
    let unfollow = () => props.unfollow(props.user.id);

    let userPhotoSrc = props.user.photos.small || userPhoto;

    let isFollowUnfollowButtonDisabled = props.followingInProgressUsers.some(id => id === props.user.id);

    return (
        <div className={styles.user}>
            <div className={styles.left}>
                <NavLink to={`/profile/${props.user.id}`}>
                    <div className={styles.avatar}>
                        <img src={userPhotoSrc} alt="user-avatar" />
                    </div>
                </NavLink>
                <div className={styles.follow}>
                    {props.user.followed ?
                        <button disabled={isFollowUnfollowButtonDisabled} onClick={unfollow} className={styles.unfollowBtn}>Unfollow</button>
                        :
                        <button disabled={isFollowUnfollowButtonDisabled} onClick={follow} className={styles.followBtn}>Follow</button>}
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.infoInner}>
                    <div className={styles.name}>{props.user.name}</div>
                    <div className={styles.status}>{props.user.status || "My status"}</div>
                </div>
                <div className={styles.location}>City, country</div>
            </div>
        </div>
    );
}

export default User;