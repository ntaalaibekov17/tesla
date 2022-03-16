import React from 'react';

const CommentItem = ({comment}) => {
  return (
    <>
      <div>
        <p>user: {comment.user}</p>
        <p>text: {comment.text}</p>
        <br/>
      </div>
    </>
  );
};

export default CommentItem;