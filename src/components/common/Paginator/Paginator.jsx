import PageNumber from './PageNumber/PageNumber';
import styles from './Paginator.module.css';

export const Paginator = ({ currentPageNumber, totalItemsCount, pageSize, changePage }) => {

    let createPagesList = () => {
        let pagesCount = Math.ceil(totalItemsCount / pageSize);
        let displayPages = [];

        const PREVIOUS_PAGES_TO_SHOW = 2;
        const NEXT_PAGES_TO_SHOW = 2;

        // Display algorithm

        // Set a "1 ..." feature based on a pages we want to display before current
        if (currentPageNumber > PREVIOUS_PAGES_TO_SHOW + 1) displayPages.push(1, "...");
        // Push the previous pages, current page, and next pages
        for (let i = currentPageNumber - PREVIOUS_PAGES_TO_SHOW; i <= currentPageNumber + NEXT_PAGES_TO_SHOW && i !== pagesCount + 1; i++) {
            if (i <= 0) continue;
            displayPages.push(i);
        }
        // Set a "... lastPageNumber" feature based on a pages we want to display after current
        if (currentPageNumber < pagesCount - NEXT_PAGES_TO_SHOW) displayPages.push("...", pagesCount);
        // Mapping the result
        return displayPages.map((pageNumber, index) => {
            return <PageNumber
                pageNumber={pageNumber}
                currentPageNumber={currentPageNumber}
                changePage={changePage}
                key={String(pageNumber + index)}
            />
        });
    }

    return (
        <div className={styles.pages}>
            {createPagesList()}
        </div>
    );
}