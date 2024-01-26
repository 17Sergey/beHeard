import preloader from "../../../assets/images/preloader.svg";
import styles from "./Preloader.module.css"

let Preloader = (props) => {
    return (
        <div className={styles.wrapper}>
            <img src={preloader} alt="preloader" />
        </div>
    );
}

export default Preloader;