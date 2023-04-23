import { useStoreActions, useStoreState } from "easy-peasy";
import { Link, useParams } from "react-router-dom";

const PostPage = ({ navigate }) => {
  const { id } = useParams();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  const handleDelete = async (id) => {
    deletePost(id);
    navigate("/");
  };

  return (
    <article className="posts">
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.datetime}</p>
          <p>{post.body}</p>
          <Link to={`/edit/${id}`}>
            <button className="edit-btn">Edit Button</button>
          </Link>
          <button className="delete-btn" onClick={() => handleDelete(post.id)}>
            Delete Post
          </button>
        </>
      ) : (
        <>
          <h2>No posts Found</h2>
          <Link to="/">
            <p style={{ textDecoration: "underline" }}>Visit our home page</p>
          </Link>
        </>
      )}
    </article>
  );
};

export default PostPage;
