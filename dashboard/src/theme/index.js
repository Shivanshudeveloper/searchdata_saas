import { createMuiTheme, colors } from "@material-ui/core";
import shadows from "./shadows";
import typography from "./typography";

const theme = createMuiTheme({
  palette: {
    background: {
      default: "#F4F6F8",
      paper: colors.common.white,
    },
    primary: {
      contrastText: "#ffffff",
      // main: "#005c45",
      main: "#0d644e",
    },
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
    },
  },
  shadows,
  typography,
});

export default theme;
