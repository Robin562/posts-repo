import { useStoreActions, useStoreState } from "easy-peasy";
import format from "date-fns/format";

const NewPost = ({ navigate }) => {
  const postBody = useStoreState((state) => state.postBody);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);
  const postHeading = useStoreState((state) => state.postHeading);
  const setPostHeading = useStoreActions((actions) => actions.setPostHeading);
  const addPost = useStoreActions((actions) => actions.addPost);
  const posts = useStoreState((state) => state.posts);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!postHeading || !postBody) return;
    const newPost = {
      id: posts.length ? posts[posts.length - 1].id + 1 : 1,
      title: postHeading,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: postBody,
    };
    addPost(newPost);
    navigate("/");
  };

  return (
    <main>
      <h2 className="newPostHeading">New Post</h2>
      <form className="submitPost" onSubmit={(e) => handleAdd(e)}>
        <input
          placeholder="Type post Heading"
          className="submitInputHeading"
          value={postHeading}
          required
          onChange={(e) => setPostHeading(e.target.value)}
        />
        <textarea
          placeholder="Type post Body"
          className="submitInputBody"
          value={postBody}
          required
          onChange={(e) => setPostBody(e.target.value)}
        />
        <button type="submit">Submit Post</button>
      </form>
    </main>
  );
};

export default NewPost;
