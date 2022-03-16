import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Paper,
    Radio,
    RadioGroup,
} from '@mui/material';

import React from 'react';
import {useProducts} from "../../contexts/ProductContext"
import "./SideBar.css"
const SideBar = () => {
    const { fetchByParams } = useProducts();
    return (

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1}}>
            <Paper variant="contained">
                <FormControl sx = {{mb:10}}>
                    <FormLabel>Filter by:</FormLabel>
                    <RadioGroup  row
                                 aria-labelledby="demo-row-radio-buttons-group-label"
                                 name="row-radio-buttons-group" onChange={(e) => fetchByParams('type', e.target.value)}>
                        <FormControlLabel
                            value="at home"
                            control={<Radio/>}
                            label="At home"
                        />
                        <FormControlLabel
                            value="on the road"
                            control={<Radio />}
                            label="On the road"
                        />
                        <FormControlLabel value="all" control={<Radio />} label="all" />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </Grid>
    );
};

export default SideBar;
