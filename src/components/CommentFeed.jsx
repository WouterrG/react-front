import { Box, Typography, Divider } from "@mui/material";
import FlexBetween from "./FlexBetween";
import WidgetWrapper from "./WidgetWrapper";
import React, { useEffect, useState } from "react";
import "./CommentFeed.css";

const CommentFeed = () => {
  const [comments, setComments] = useState(null);

  const getComments = async () => {
    const response = await fetch("http://localhost:3001/comments", {
      method: "GET",
    });
    let data = await response.json();
    data = data.reverse();
    setComments(data);
  };

  useEffect(() => {
    getComments();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!comments) {
    return null;
  }

  return (
    <WidgetWrapper width="60%" margin="auto">
      {/* FIRST ROW */}
      <FlexBetween gap="0.5rem" pb="1.1rem">
        <FlexBetween gap="1rem">
          <Box>
            <Typography variant="h4" fontWeight="500">
              Posted comments.
            </Typography>
          </Box>
        </FlexBetween>
      </FlexBetween>

      <Divider />

      {/* SECOND ROW */}
      <Box p="1rem 0">
        {comments.map((comment, index) => {
          return (
            <div key={index} className="comment">
              <p>{comment.user}</p>
              <p>{comment.comment}</p>
            </div>
          );
        })}
      </Box>
    </WidgetWrapper>
  );
};

export default CommentFeed;
