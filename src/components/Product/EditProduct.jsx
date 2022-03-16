import React, { useEffect, useState } from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContext';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0,
    picture: '',
    type: '',
  });

  const handleInput = (e, product, setProduct) => {
    let obj = {
      ...product,
      [e.target.name]: e.target.value,
    };
    setProduct(obj);
  };

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  return (
    <Box>
      <center variant="h6" gutterBottom>
        EDIT PRODUCT
      </center>

      <Grid item xs={12} md={6} sx={{ margin: '10vh auto' }}>
        <form>
          <TextField
            value={product.name}
            fullWidth
            id="outlined-basic"
            label="NAME"
            variant="outlined"
            name="name"
            onChange={(e) => handleInput(e, product, setProduct)}
          />
          <TextField
            value={product.description}
            fullWidth
            id="outlined-basic"
            label="DESCRIPTION"
            variant="outlined"
            name="description"
            onChange={(e) => handleInput(e, product, setProduct)}
          />{' '}
          <TextField
            value={product.price}
            fullWidth
            id="outlined-basic"
            label="PRICE"
            variant="outlined"
            name="price"
            onChange={(e) => handleInput(e, product, setProduct)}
          />{' '}
          <TextField
            value={product.picture}
            fullWidth
            id="outlined-basic"
            label="PICTURE"
            variant="outlined"
            name="picture"
            onChange={(e) => handleInput(e, product, setProduct)}
          />
          <TextField
            value={product.type}
            fullWidth
            id="outlined-basic"
            label="TYPE"
            variant="outlined"
            name="type"
            onChange={(e) => handleInput(e, product, setProduct)}
          />
          <Button
            variant="outlined"
            size="large"
            fullWidth
            onClick={() => {
              saveEditedProduct(product);
              navigate('/products');
            }}
          >
            EDIT PRODUCT
          </Button>
        </form>
      </Grid>
    </Box>
  );
};

export default EditProduct;
