import styles from "./PageNumber.module.css";

let PageNumber = (props) => {
    let changePage = () => {
        if (props.pageNumber !== "...") props.changePage(props.pageNumber);
    }
    return (
        <span onClick={changePage}
              className={props.currentPageNumber === props.pageNumber ? styles.selectedPage : styles.page}>
            {props.pageNumber}
        </span>
    );
}

export default PageNumber;
