import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ fetchErr, isLoading }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="home">
      {fetchErr && !isLoading && (
        <p style={{ color: "firebrick" }}>{fetchErr}</p>
      )}
      {isLoading && <p>Loading posts...</p>}
      {!isLoading &&
        !fetchErr &&
        (searchResults.length ? (
          <Feed posts={searchResults} />
        ) : (
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            No available posts
          </p>
        ))}
    </main>
  );
};

export default Home;
