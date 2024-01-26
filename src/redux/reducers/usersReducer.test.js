import usersReducer, { setCurrentPageNumber, setUsers } from "./usersReducer";


it("Current page number should be correct", () => {
    // 1. Initial data
    const state = {
        currentPageNumber: 1
    };

    // 2. Action
    const newState = usersReducer(state, setCurrentPageNumber(4));

    // 3. Expectation
    expect(newState.currentPageNumber).toBeGreaterThan(state.currentPageNumber)
})

it("New users amount should be correct", () => {
    // 1. Initial data
    const state = {
        users: [
            {id: 0, name: "S"},
            {id: 1, name: "e"},
            {id: 2, name: "r"},
            {id: 3, name: "g"},
        ]
    }

    const fetchedUsers = [
        {id: 4, name: "P"},
        {id: 5, name: "A"},
    ];

    // 2. Action
    const newState = usersReducer(state, setUsers(fetchedUsers))

    // 3. Expectation
    expect(newState.users).toBe(fetchedUsers);
})