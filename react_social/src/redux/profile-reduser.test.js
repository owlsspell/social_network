import profileReduser, {
  addPostActionCreater,
  deletePost,
} from "./profile-reduser";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 11 },
    { id: 2, message: "It's my first post", likesCount: 12 },
  ],
};

it("length of post should be incremented", () => {
  // 1.start test data
  let action = addPostActionCreater("new post");

  // 2.action
  let newState = profileReduser(state, action);
  // 3.expectation
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  // 1.start test data
  let action = addPostActionCreater("new post");

  // 2.action
  let newState = profileReduser(state, action);
  // 3.expectation
  expect(newState.posts[2].message).toBe("new post");
});

it("delete post", () => {
  // 1.start test data
  let action = deletePost(1);

  // 2.action
  let newState = profileReduser(state, action);
  // 3.expectation
  expect(newState.posts.length).toBe(1);
});

it("delete post", () => {
  // 1.start test data
  let action = deletePost(1000);

  // 2.action
  let newState = profileReduser(state, action);
  // 3.expectation
  expect(newState.posts.length).toBe(2);
});
