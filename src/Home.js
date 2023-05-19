import { Link, Outlet } from "react-router-dom";
import Button from "@mui/material/Button";
import ImagesList from "./ImagesList";

const Home = () => {
  return (
    <Link to="imagesList">
      <Button
        sx={{
          my: 2,
          color: "black",
          backgroundColor: "#eca1a6",
          display: "block",
          textDecoration: "none",
          marginLeft: "200px",
        }}
      >
        click to show the Images
      </Button>
    </Link>
  );
};

export default Home;
