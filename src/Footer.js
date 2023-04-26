import { useStoreState } from "easy-peasy";

const Footer = ({ postCount }) => {
  return (
    <footer className="footer">
      <p>
        {postCount} {postCount === 1 ? "post" : "posts"}
      </p>
    </footer>
  );
};

export default Footer;
