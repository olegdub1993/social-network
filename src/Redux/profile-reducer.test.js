import profileRuducer, { addPostAC, deletePostAC } from "./profile-reducer";
import avatar2 from "./../assets/img/2.jpg";
let state = {
  posts: [
    { id: 1, text: "What's up?", avatar: avatar2, likesCount: 23 },
    { id: 2, text: "Hello, man", avatar: avatar2, likesCount: 63 },
    { id: 3, text: "Hi, my friend", avatar: avatar2, likesCount: 83 },
    { id: 4, text: "Hi, my  yang friend", avatar: avatar2, likesCount: 83 },
  ],
};
it("length of posts should be incremented", () => {
  // test data
  let action = addPostAC("itok");

  // action
  let newstate = profileRuducer(state, action);

  // expectation
  expect(newstate.posts.length).toBe(5);
});
it("text of new post should be correct", () => {
  // test data
  let action = addPostAC("itok");

  // action
  let newstate = profileRuducer(state, action);

  // expectation
  expect(newstate.posts[4].text).toBe("itok");
});
it("after deleting length of posts should be decremented ", () => {
  // test data
  let action = deletePostAC(2);

  // action
  let newstate = profileRuducer(state, action);

  // expectation
  expect(newstate.posts.length).toBe(3);
});
test("after deleting length of posts shouldn't be changed ", () => {
  // test data
  let action = deletePostAC(20);

  // action
  let newstate = profileRuducer(state, action);

  // expectation
  expect(newstate.posts.length).toBe(4);
});
