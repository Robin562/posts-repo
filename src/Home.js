import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = () => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="home">
      {searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          No available posts
        </p>
      )}
    </main>
  );
};

export default Home;
