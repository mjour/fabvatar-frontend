import { createTheme } from "@material-ui/core";

export const theme = createTheme({
  overrides: {
    MuiMenu: {
      list: {
        background:
          "linear-gradient(96deg, #8b069e,#d06fd9) padding-box, linear-gradient(rgba(149, 219, 58, 0.7),rgba(233, 70, 255, 1)) border-box",
        boxShadow: "0px 0px 11px #c75cd3 !important",
        color: "white !important",
      },
    },
    MuiSelect: {
      icon: {
        color: "white",
      },
    },
    MuiOutlinedInput: {
      input: {
        color: "#fff",
        padding: "0px 14px",
        height: "48px",
      },
      root: {
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "8px !important",
        
      },
      notchedOutline: {
        // borderColor: "rgba(255, 255, 255, 0.1)",
        border: "none",
      },
    },
  },
});
