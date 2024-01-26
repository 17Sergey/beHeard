import profileReducer, { addLike, deletePost } from "./profileReducer";

it("Count of likes should be incremented", () => {
    // 1. Initial data
    let state = {
        postsData: [
            { id: 0, message: "Hi! Yeah, thanks, I'm fine! Was working pretty much.How are you?", likesCount: 2, },
            { id: 1, message: "Are you okay? Not online for a long time...", likesCount: 3, },
            { id: 2, message: "Heeeeey! What's going on?", likesCount: 5, },
            { id: 3, message: "Idea! What if all my dreams come true?", likesCount: 3, },
        ],
    };
    // 2. Action
    let newState = profileReducer(state, addLike(1));

    // 3. Expectation
    expect(newState.postsData[1].likesCount).toBe(4);
})

it("Messages count should be decremented after deleting", () => {
    // 1. Initial data
    let state = {
        postsData: [
            { id: 0, message: "Hi! Yeah, thanks, I'm fine! Was working pretty much.How are you?", likesCount: 2, },
            { id: 1, message: "Are you okay? Not online for a long time...", likesCount: 3, },
            { id: 2, message: "Heeeeey! What's going on?", likesCount: 5, },
            { id: 3, message: "Idea! What if all my dreams come true?", likesCount: 3, },
        ],
    };
    // 2. Action
    let newState = profileReducer(state, deletePost(1));

    // 3. Expectation
    expect(newState.postsData.length).toBe(3);
})

it("Messages count should not be decremented if id is incorrect", () => {
    // 1. Initial data
    let state = {
        postsData: [
            { id: 0, message: "Hi! Yeah, thanks, I'm fine! Was working pretty much.How are you?", likesCount: 2, },
            { id: 1, message: "Are you okay? Not online for a long time...", likesCount: 3, },
            { id: 2, message: "Heeeeey! What's going on?", likesCount: 5, },
            { id: 3, message: "Idea! What if all my dreams come true?", likesCount: 3, },
        ],
    };
    // 2. Action
    let newState = profileReducer(state, deletePost(1000));

    // 3. Expectation
    expect(newState.postsData.length).toBe(4);
})