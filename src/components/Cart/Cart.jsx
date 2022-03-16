import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useProducts } from '../../contexts/ProductContext';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Navbar from "../Navbar/Navbar";

export default function Cart() {
    const [count, setCount] = React.useState([]);

    const { cart, getCart, changeProductCount, deleteCartProducts } =
        useProducts();

    React.useEffect(() => {
        getCart();
    }, []);

    return (
        <>
          <Navbar/>
            {cart.products.map((row) => (
              <Box>
                <Container className="flex-fav" maxWidth="sm">
                  <Card sx={{ mt:25, maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={row.item.picture}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {row.item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {row.item.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {row.item.price}$
                      </Typography>
                    </CardContent>
                    <Button onClick={() => deleteCartProducts(row.item.id)}>
                      Delete
                    </Button>
                  </Card>
                </Container>
              </Box>
                // <StyledTableRow key={row.item.name}>
                //   <StyledTableCell component="th" scope="row">
                //     <img
                //       src={row.item.picture}
                //       alt=""
                //       style={{ width: '280px', height: '280px' }}
                //     />
                //   </StyledTableCell>
                //   <StyledTableCell align="right">{row.item.name}</StyledTableCell>
                //   <StyledTableCell align="right">{row.item.type}</StyledTableCell>
                //   <StyledTableCell align="right">{row.item.price}</StyledTableCell>
                //   <StyledTableCell align="right">
                //     <Button onClick={() => deleteCartProducts(row.item.id)}>
                //       Delete
                //     </Button>
                //   </StyledTableCell>
                // </StyledTableRow>
          ))}
        </>
    )
}