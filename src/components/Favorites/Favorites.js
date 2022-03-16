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
import Navbar from "../Navbar/Navbar";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Favorites() {
    const [count, setCount] = React.useState([]);

    const { cart, getCart, changeProductCount, deleteCartProducts } =
        useProducts();

    React.useEffect(() => {
        getCart();
    }, []);

    const cartCleaner = () => {
        localStorage.removeItem('cart');
        getCart();
    };

    const handleCountChange = (count, id) => {
        if (count <= 0 || count >= 1000) {
            count = 1;
            changeProductCount(count, id);
        } else {
            changeProductCount(count, id);
        }
    };
    return (
        <>
            <Navbar/>
            <CssBaseline />
            <Container sx = {{mt:20}} maxWidth="lg">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Picture</StyledTableCell>
                                <StyledTableCell align="right">Name</StyledTableCell>
                                <StyledTableCell align="right">Type</StyledTableCell>
                                <StyledTableCell align="right">Description</StyledTableCell>
                                <StyledTableCell align="right">Price</StyledTableCell>
                                <StyledTableCell align="right">Count</StyledTableCell>
                                <StyledTableCell align="right">Price</StyledTableCell>
                                <StyledTableCell align="right">-</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.products.map((row) => (
                                <StyledTableRow key={row.item.name}>
                                    <StyledTableCell component="th" scope="row">
                                        <img
                                            src={row.item.picture}
                                            alt=""
                                            style={{ width: '70px', height: '70px' }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.item.name}</StyledTableCell>
                                    <StyledTableCell align="right">{row.item.type}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        {row.item.description}
                                    </StyledTableCell>
                                    <StyledTableCell align="right">{row.item.price}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <input
                                            type="number"
                                            min={1}
                                            max={1000}
                                            value={row.count}
                                            onChange={(e) =>
                                                handleCountChange(e.target.value, row.item.id)
                                            }
                                        />
                                    </StyledTableCell>{' '}
                                    <StyledTableCell align="right">{row.subPrice}</StyledTableCell>
                                    <StyledTableCell align="right">
                                        <Button onClick={() => deleteCartProducts(row.item.id)}>
                                            Delete
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Link to="/payment"><Button sx = {{backgroundColor:"black", marginLeft:"8px",color:"white"}}>Buy Now</Button> </Link>
                    {/*<Button onClick={cartCleaner}>BUY NOW FOR {cart.totalPrice}$</Button>*/}
                </TableContainer>

            </Container>
        </>
    )
}