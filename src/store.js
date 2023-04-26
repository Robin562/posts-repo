import { thunk, createStore, computed, action } from "easy-peasy";
import axios from "./api/posts";

export default createStore({
  posts: [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),
  search: "",
  setSearch: action((state, payload) => {
    state.search = payload;
  }),
  searchResults: [],
  setSearchResults: action((state, payload) => {
    state.searchResults = payload;
  }),
  editTitle: "",
  setEditTitle: action((state, payload) => {
    state.editTitle = payload;
  }),
  editBody: "",
  setEditBody: action((state, payload) => {
    state.editBody = payload;
  }),
  postHeading: "",
  setPostHeading: action((state, payload) => {
    state.postHeading = payload;
  }),
  postBody: "",
  setPostBody: action((state, payload) => {
    state.postBody = payload;
  }),
  postsLength: computed((state) => state.posts.length),
  addPost: thunk(async (actions, newPost, helpers) => {
    const { posts } = helpers.getState();
    try {
      const response = await axios.post("", newPost);
      actions.setPosts([...posts, response.data]);
      actions.setPostHeading("");
      actions.setPostBody("");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }),
  deletePost: thunk(async (actions, id, helpers) => {
    const { posts } = helpers.getState();
    try {
      await axios.delete(`/${id}`);
      actions.setPosts(posts.filter((post) => post.id !== id));
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }),
  editPost: thunk(async (actions, updatedPost, helpers) => {
    const { posts } = helpers.getState();
    const { id } = updatedPost;
    try {
      const response = await axios.put(`/${id}`, updatedPost);
      actions.setPosts(
        posts.map((post) => (post.id === id ? response.data : post))
      );
    } catch (err) {
      console.log(`Error : ${err.message}`);
    }
  }),
});
