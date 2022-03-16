import "./ProductList.css"

import NavbarShop from "../Navbar/NavbarShop";
import Typography from "@mui/material/Typography";
import { Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContext";
import MediaCard from "../Product/ProductCard";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ProductCard from "../Product/ProductCard";
import "./ProductList.css"
import SideBar from "../SideBar/SideBar"

const ProductList = ({products}) => {
      const { getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);
    return (

        <>
            <NavbarShop/>
            <div className="shop-bg">
                <Typography paddingTop="10em" textAlign="center" color="white" variant="h5">
                    Wall connector
                </Typography>
                <Typography textAlign="center" color="white" variant="h4">
                    The fastest way to charge at home
                </Typography>
            </div>
                   <React.Fragment>
                     <CssBaseline/>
                     <Container maxWidth="xl">
                         <Typography fontWeight="800" my="5rem" variant="h4">
                             Charging
                         </Typography>

                         <Grid>
                             <SideBar/>
                         </Grid>
                         <TextField color="primary"
                            label="Search your charger"
                            variant="filled"
                            sx={{ backgroundColor:"#f8f8fa", marginBottom:"3vw", width: "27vw" }}
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <Grid container spacing={7}>
                          {products ? (
                              products.map((item) => (

                                  <Grid item>
                                    <MediaCard item={item} key={item.id} />
                                  </Grid>
                              ))
                          ) : (
                              <>
                                <h2>..Loading</h2>
                              </>
                          )}

                        </Grid>
                    </Container>
                  </React.Fragment>
        </>
    );
};

export default ProductList;