import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root:{
        border:"2px solid #FFFFFF",
        width:"100%"

    }
}));
export default function DashboardSliderCard(props) {
    const {data} = props;
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <figure>
                <imag src={data?.image} alt="Quibe Box" />
            </figure>
            <Typography variant="h6">Wallet</Typography>
        </Box>
    );
}
