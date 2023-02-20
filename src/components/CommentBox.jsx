import {
  Box,
  Typography,
  Divider,
  TextField,
  FormControl,
  Button,
} from "@mui/material";
import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetWrapper";
import React, { useState } from "react";

const CommentBox = () => {
  /*
  const login = async (values, onSubmitProps) => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const loggedIn = await loggedInResponse.json();
    console.log("loggedIn: ", loggedIn);
    onSubmitProps.resetForm();
    if (loggedIn) {
      dispatch(
        setLogin({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
      navigate("/home");
    }
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isRegister && !values.picture)
      values.picture = { path: undefined, name: "" };
    if (isLogin) await login(values, onSubmitProps);
    if (isRegister) await register(values, onSubmitProps);
  };

  
*/

  const [values, setValues] = useState({
    content: {
      comment: "",
      user: "",
    },
  });

  const postComment = async (e) => {
    e.preventDefault();
    const postCommentResponse = await fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    const commented = await postCommentResponse.json();
    console.log("success: ", commented);
    console.log("hi there");
    console.log(JSON.stringify(values));
  };

  const handleCommentInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      content: { comment: event.target.value, user: "testUser" },
    }));
    console.log(values);
  };

  return (
    <WidgetWrapper width="60%" margin="auto">
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <Box>
            <Typography
              variant="h4"
              fontWeight="500"
              sx={{
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Write your comment....
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        <form onSubmit={postComment}>
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
            <FormControl fullWidth>
              <TextField
                id="outlined-basic"
                label="This is a new comment..."
                variant="outlined"
                value={values.content.comment}
                onChange={handleCommentInputChange}
                multiline
                rows={4}
              />
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
            <Button variant="contained" type="submit">
              Post
            </Button>
          </Box>
        </form>
      </Box>
    </WidgetWrapper>
  );
};

export default CommentBox;
