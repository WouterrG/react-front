import { Box } from "@mui/material";
import Navbar from "../navbar";
import CommentBox from "../../components/CommentBox";

const HomePage = () => {
  return (
    <Box>
      <Navbar />
      <CommentBox />
    </Box>
  );
};

export default HomePage;
