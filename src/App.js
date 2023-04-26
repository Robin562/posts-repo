import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { Route, Routes } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import useAxios from "./hooks/useAxios";
import { useNavigate } from "react-router-dom";

function App() {
  // const setPosts = useStoreActions((actions) => actions.setPosts);
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("postList")) || []
  );
  // const { data, fetchErr, isLoading } = useAxios("http://localhost:3500/posts");
  useEffect(() => {
    localStorage.setItem("postList", JSON.stringify(posts));
  }, [posts]);

  const navigate = useNavigate();
  const postCount = posts.length;
  return (
    <div className="App">
      <Header title="React JS Router" />
      <Nav posts={posts} />
      <Routes>
        <Route path="/" element={<Home posts={posts} />} />
        <Route
          path="/post"
          element={
            <NewPost navigate={navigate} posts={posts} setPosts={setPosts} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditPost navigate={navigate} posts={posts} setPosts={setPosts} />
          }
        />

        <Route
          path="/post/:id"
          element={
            <PostPage navigate={navigate} posts={posts} setPosts={setPosts} />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer postCount={postCount} />
    </div>
  );
}

export default App;
