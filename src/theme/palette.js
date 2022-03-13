import { colors } from '@mui/material';

const white = "#FFFFFF";
const black = "#000000";
const red = "#D53238";
const orange = "#FFA500";

const obj = {
  black,
  white,
  red,
  orange,
  primary: {
    contrastText: white,
    light: "#E4A61F",
    main: "#E4A61F",
    dark: "#32334C"
  },
  secondary: {
    contrastText: white,
    light: "#8F8F8F",
    main: "#8F8F8F",
    dark: "#8F8F8F",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: "#3d3d3d",
    secondary: "#616161",
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
};

export default obj;
