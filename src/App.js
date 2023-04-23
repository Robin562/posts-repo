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
import { useEffect } from "react";
import useAxios from "./hooks/useAxios";
import { useNavigate } from "react-router-dom";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, fetchErr, isLoading } = useAxios("http://localhost:3500/posts");
  useEffect(() => {
    setPosts(data);
  }, [data]);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Header title="React JS Router" />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<Home fetchErr={fetchErr} isLoading={isLoading} />}
        />
        <Route path="/post" element={<NewPost navigate={navigate} />} />
        <Route path="/edit/:id" element={<EditPost navigate={navigate} />} />

        <Route path="/post/:id" element={<PostPage navigate={navigate} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
