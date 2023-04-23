import { useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { format } from "date-fns";

const EditPost = ({ navigate }) => {
  const { id } = useParams();
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);
  const editPost = useStoreActions((actions) => actions.editPost);
  const editTitle = useStoreState((state) => state.editTitle);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const editBody = useStoreState((state) => state.editBody);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, []);

  const handleEdit = async (id) => {
    if (!editTitle || !editBody) return;
    const updatedPost = {
      id,
      title: editTitle,
      datetime: format(new Date(), "MMMM dd, yyyy pp"),
      body: editBody,
    };
    editPost(updatedPost);
    navigate(`/post/${id}`);
  };

  return (
    <main>
      <h2 className="newPostHeading">Edit Post</h2>
      <form className="submitPost" onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Type post Heading"
          className="submitInputHeading"
          value={editTitle}
          required
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <textarea
          placeholder="Type post Body"
          className="submitInputBody"
          value={editBody}
          required
          onChange={(e) => setEditBody(e.target.value)}
        />
        <button type="submit" onClick={() => handleEdit(post.id)}>
          Edit Post
        </button>
      </form>
    </main>
  );
};

export default EditPost;
