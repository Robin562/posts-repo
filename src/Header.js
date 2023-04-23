import { FaLaptop, FaTabletAlt, FaMobile } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";

const Header = ({ title }) => {
  const { width } = useWindowSize;
  return (
    <header className="header">
      <h1>{title}</h1>
      {width < 768 ? (
        <FaMobile style={{ fontSize: "2.5rem", margin: "auto 0" }} />
      ) : width < 992 ? (
        <FaTabletAlt style={{ fontSize: "2.5rem", margin: "auto 0" }} />
      ) : (
        <FaLaptop style={{ fontSize: "2.5rem", margin: "auto 0" }} />
      )}
    </header>
  );
};

export default Header;
