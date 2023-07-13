import React from 'react';
import { makeStyles, Box, Typography, } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: "32px",
        position: "relative",
        zIndex: "1",
        "&::before": {
            content: "' '",
            position: "absolute",
            top: "-1px",
            right: " -1px",
            bottom: "-1px",
            left: "-1px",
            zIndex: "-1",
            borderRadius: "33px",
            backgroundColor: "transparent",
            background: "linear-gradient(182deg, #eab73b 18%, #6e6333 60%, #00000029 95%)",
        },
        "& .mainBox": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "32px 24px",
            backgroundColor: "#040404",
            borderRadius: "35px",
            "& .profilePicture": {

            },
            "& .detailsBox": {
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                "& h4": {
                    padding: "10px 0px"
                },
                "& h6": {
                    padding: "10px 0px"
                }
            }
        }
    }
}));


function TeamCard(props) {
    const classes = useStyles();
    const { data } = props;
    return (
        <>
            <Box className={classes.root}>
                <Box className="mainBox">
                    <Box className='profilePicture'>
                        <figure>
                            <img src={data?.image} alt="Profile Image" />
                        </figure>
                    </Box>
                    <Box className='detailsBox'>
                        <Typography variant='h4'>{data?.name}</Typography>
                        <Typography variant='h6'>{data?.post}</Typography>
                        <Typography variant='h6'>{data?.description}</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default TeamCard