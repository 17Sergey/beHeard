import s from "./Post.module.css";

const Post = (props) => {

    const addLike = () => {
        props.addLike(props.postId);
    }
    return (
        <div className={s.post}>
            <div className="img">
                <img src="https://artemonsalon.ru/wp-content/uploads/2020/11/95_oooo.plus_.png" alt="profile img" />
            </div>
            <div className={s.content}>
                <div className="message">{props.message}</div>
                <div className={s.like} onClick={addLike}>
                    <img src="https://www.pngkey.com/png/full/286-2862058_thumbs-down-buttons-royalty-free-cliparts-vectors-green.png" alt="like" />
                    {props.likesCount}
                </div>
            </div>
        </div>
    );
}

export default Post;