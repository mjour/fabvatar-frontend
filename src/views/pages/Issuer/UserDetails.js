import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import {
  getDataHandlerAPI,
  getParticularObjectDataHanndler,
} from "src/apiConfig/service";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    width: "100%",
    height: "auto",
    height: "calc(100vh - 127px)",

    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    background: "#fff",

    "& h4": {
      marginBottom: "12px",
    },
  },
  phoneTextField: {
    // minHeight: "55px",
    color: "#fff",
    width: "100%",
    // border: "2px solid #0000",
    // borderRadius: "30px !important",
    // boxShadow: "0px 0px 11px #c75cd3",
    fontSize: "14px",

    "& .inpuLable": {
      borderRight: "1px solid #fff",
      height: "25px",
      display: "flex",
      alignItems: "center",
      color: "#fff",
      paddingRight: "10px",
      marginRight: "5px",
      fontWeight: 700,
    },
  },
  QrBox: {
    width: "100",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  childBox: {
    border: "1px solid #00000030",
    background: "rgba(0, 0, 0, 0.1)",
    height: "250px",
    borderRadius: "12px",
    width: "250px",
    marginTop: "20px",
    display: "flex",
    "& h4": {
      marginTop: "12px",
    },
  },
}));
export default function UserDetails() {
  const classes = useStyles();
  const [selectedUser, setSelectedUser] = useState("0");
  const [userList, setUserList] = useState([]);
  const [qrCode, setQrCode] = useState("");
  const [isProcessingQR, setISProcessingQR] = useState(false);
  const getUserListAPIHandler = async (token) => {
    try {
      const response = await getDataHandlerAPI("allUserList", token);
      if (response) {
        setUserList(response);
      } else {
        const user_list = [
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
          {name:"mark", _id:"63d8659f291124afd8df5df7"},
        ]
        setUserList(user_list);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserQRCodehandler = async (userId="63d8659f291124afd8df5df7") => {
    console.log("userId = ", userId)
    try {
      setISProcessingQR(true);
      const response = await getParticularObjectDataHanndler(
        "getQRCode",
        userId
      );
      if (response) {
        setQrCode(response);
        setISProcessingQR(false);
      } else {
        setISProcessingQR(false);
      }
    } catch (error) {
      console.log(error);
      setISProcessingQR(false);
    }
  };
  useEffect(() => {
    if (selectedUser !== "0") {
      getUserQRCodehandler(selectedUser._id);
    }
  }, [selectedUser]);

  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      getUserListAPIHandler(window.localStorage.getItem("accessToken"));
    }
  }, [window.localStorage.getItem("accessToken")]);

  return (
    <Box className={classes.mainSection}>
      <Container>
        <Container maxWidth="lg">
          <Typography variant="h4">User's List</Typography>

          
          <Grid container spacing={1}>
            <Grid item lg={3} xs={12} sm={3} md={3}>
              <Select
                className={classes.phoneTextField}
                variant="outlined"
                name="selectcountry"
                fullWidth
                onChange={(e) => setSelectedUser(e.target.value)}
                value={selectedUser}
              >
                <MenuItem value={"0"} disabled={true}>
                  Select User
                </MenuItem>

                {userList &&
                  userList.map((data, i) => {
                    return <MenuItem value={data}>{data.name}</MenuItem>;
                  })}
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={1}>
            <Grid item lg={12} sm={12} xs={12} md={12}>
              <Box className={classes.QrBox}>
                <Box className={classes.childBox}>
                  {isProcessingQR ? (
                    <Box
                      width="100%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <ButtonCircularProgress />
                    </Box>
                  ) : (
                    <img
                      src={qrCode ? qrCode : "/images/QR/bluredQR.jpeg"}
                      alt=""
                      width="100%"
                    />
                  )}
                </Box>
                <Typography variant="h4">
                  {selectedUser?.name
                    ? selectedUser?.name
                    : "Please select an user."}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}
