import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

// project imports
import config from "config";
import Logo from "ui-component/Logo";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => (
  <ButtonBase disableRipple component={Link} to={config.defaultPath}>
    <Logo size={180} />
  </ButtonBase>
);

export default LogoSection;
