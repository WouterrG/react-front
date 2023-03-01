import { Box } from "@mui/material";
import Navbar from "../navbar";
import CommentBox from "../../components/CommentBox";
import CommentFeed from "../../components/CommentFeed";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <CommentBox />
      <CommentFeed />
    </Box>
  );
};

export default HomePage;
