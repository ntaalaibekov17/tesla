import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useProducts } from '../../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext";
import {ADMIN} from "../../helpers/consts";
import FavoriteIcon from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';


import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { red } from '@mui/material/colors';


export default function MediaCard({ item }) {
  const { deleteProduct, addProductToCart, checkProductInCart } = useProducts();
  const navigate = useNavigate();
    const {
        user: { email },
    } = useAuth();

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <Card sx={{  maxWidth: 520 }}>
      <CardMedia
        component="img"
        height="420"
        image={item.picture}

        alt="green iguana"
      />
      <CardContent>
        <Typography align = "center" gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/*{item.description}*/}
        </Typography>
      </CardContent>
        <CardActions>
            {email === ADMIN ? (
                <>
                    {" "}
                    <Button size="small" onClick={() => deleteProduct(item.id)}>
                        DELETE
                    </Button>
                    <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
                        EDIT
                    </Button>
                </>
            ) : (
                <IconButton onClick={() => addProductToCart(item)}>
                    <ShoppingCartIcon
                        color={checkProductInCart(item.id) ? "secondary" : ""}
                    />
                </IconButton>
            )}
            <IconButton onClick={() => addProductToCart(item)}>
                <FavoriteIcon
                    color={checkProductInCart(item.id) ? "error" : ""}
                />
            </IconButton>
            <span onClick={() => navigate(`/products/${item.id}`)}>Details</span>

        </CardActions>
    </Card>

  );
}
