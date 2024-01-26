import { create } from "react-test-renderer"
import { Paginator } from "./Paginator"

describe("Paginator component tests", () => {
    test("The amount of rendered Page spans should be right", () => {

        // 1. Initial set
        const pageSize = 5;
        const totalItemsCount = 27655;
        const pagesCount = Math.ceil(totalItemsCount / pageSize);

        const currentPageNumber = pagesCount - 2;

        const paginator = create(<Paginator currentPageNumber={currentPageNumber} totalItemsCount={totalItemsCount} pageSize={pageSize} changePage={() => {}} />).root;

        // 2. Action
        const pageItems = paginator.findAllByType("span");

        // 3. Expectation
        if (currentPageNumber === 1) expect(pageItems.length).toBe(5);
        if (currentPageNumber === 2) expect(pageItems.length).toBe(6);

        if (currentPageNumber === pagesCount - 2) expect(pageItems.length).toBe(6);
        if (currentPageNumber === pagesCount - 1) expect(pageItems.length).toBe(5);
        if (currentPageNumber === pagesCount) expect(pageItems.length).toBe(4);

        if (currentPageNumber > 2 && currentPageNumber < pagesCount - 2) expect(pageItems.length).toBe(8);
    })
    test("When click '...' span changePage callback should not be called", () => {

        // 1. Initial set
        const mockCallback = jest.fn();
        const paginator = create(<Paginator currentPageNumber={3} totalItemsCount={200} pageSize={5} changePage={mockCallback} />).root;

        // 2. Action
        const pageItems = paginator.findAllByType("span");
        const dotsSpan = pageItems.find(item => item.children[0] === "...");
        dotsSpan.props.onClick();

        // 3. Expectation
        expect(mockCallback.mock.calls.length).toBe(0);
    })
})