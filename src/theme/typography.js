import shadows from "@material-ui/core/styles/shadows";

export default {
  h1: {
    fontWeight: 800,
    fontSize: 70,
    fontFamily: "'Orbitron', sans-serif",
    "@media(max-width:767px)": {
      fontSize: 38,
    },
  },
  h2: {
    fontWeight: 900,
    fontSize: 50,
    fontFamily: "'Orbitron', sans-serif",
    "@media(max-width:767px)": {
      fontSize: 30,
    },
  },
  h3: {
    fontWeight: 500,
    fontSize: 35,
    fontFamily: "'Orbitron', sans-serif",
    "@media(max-width:605px)": {
      fontSize: "27px !important",
    },
  },
  h4: {
    fontWeight: 500,
    fontSize: 30,
    color: "#5c5858",
    fontFamily: "'Orbitron', sans-serif",
    "@media(max-width:605px)": {
      fontSize: "24px !important",
    },
  },
  h5: {
    fontWeight: 700,
    fontSize: 24,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:605px)": {
      fontSize: "18px !important",
    },
  },
  h6: {
    fontWeight: 500,
    fontSize: 20,
    fontFamily: "'Inter', sans-serif",
    "@media(max-width:605px)": {
      fontSize: "16px !important",
    },
  },

  body1: {
    color: "#5c5858",
    fontSize: "12px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "300",
    lineHeight: "25px",
    "@media(max-width:605px)": {
      fontSize: "10px !important",
    },
  },
  body2: {
    color: "#5c5858",
    fontSize: "15px",
    fontFamily: "'Inter', sans-serif",
    fontWeight: "300",
    lineHeight: "24px",
    letterSpacing: "0.72px",
    "@media(max-width:605px)": {
      fontSize: "12px !important",
      lineHeight: "18px !important",
    },
  },

  overline: {
    fontWeight: 500,
  },
  button: {
    textTransform: "capitalize",
    borderRadius: 27,
    fontFamily: "'Orbitron', sans-serif",
  },
};
