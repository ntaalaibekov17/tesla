import React, {useState} from 'react';
import {Button, TextareaAutosize} from "@mui/material";
import {useProducts} from "../../contexts/ProductContext";

const CommentInput = ({productId, userEmail}) => {
  const {addProductComment} = useProducts();
  const [commentText, setCommentText] = useState("")
  const handleSubmit = (e) => {
    if (!commentText || commentText.trim().length === 0) return
    let comment = {
      productId: productId,
      user: userEmail,
      text: commentText
    }
    addProductComment(comment)
    setCommentText("")
  }

  return (
    <>
      <div>
        <TextareaAutosize
          minRows={5}
          cols={50}
          value={commentText}
          onKeyPress={(e, v) => {
            if (e.key === 'Enter') {
              handleSubmit(e)
            }
          }}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </div>
      <div>
        <Button
          variant="contained"
          name="submit"
          title="Submit"
          onClick={handleSubmit}
        >
          ADD YOUR COMMENT
        </Button>
      </div>
    </>
  );
};

export default CommentInput;