import Friend from "./Friend/Friend";
import s from "./Friends.module.css";

const Friends = (props) => {
    let friends = props.friends.map(friend => <Friend name={friend.name} avatar={friend.avatar} key={friend.id} />)
    return (
        <div className={s.friends}>
            <h1>Friends:</h1>
            <div className={s.items}>
                {friends}
            </div>
        </div>
    );
}

export default Friends;