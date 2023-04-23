import { useStoreState } from "easy-peasy";

const Footer = () => {
  const postCount = useStoreState((state) => state.postsLength);
  return (
    <footer className="footer">
      <p>
        {postCount} {postCount === 1 ? "post" : "posts"}
      </p>
    </footer>
  );
};

export default Footer;
