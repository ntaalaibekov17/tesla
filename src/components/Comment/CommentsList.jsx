import React, {useEffect, useState} from 'react';
import {useProducts} from "../../contexts/ProductContext";
import CommentItem from "./CommentItem";

const CommentsList = ({productId}) => {
  const {getProductCommentsForProduct, productComments} = useProducts();

  useEffect(() => {
    getProductCommentsForProduct(productId)
  }, [productId])

  return (
    <div>
      {productComments && productComments.map((item) => (
          <CommentItem key={item.id} comment={item}/>
      ))}
    </div>
  );
};

export default CommentsList;