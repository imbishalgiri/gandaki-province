import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FaBars } from "react-icons/fa";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Logo from "./../../../public/assets/images/logo.svg";
import { Menu, MenuItem } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Contact",
  "Gallery",
  "Maths",
  "Whatevers",
  "Testimonial",
  "Districts",
];

const districts = ["district-1", "district-2", "district-3", "district-4"];

export default function ResponsiveAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const handleMenuClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: string
  ) => {
    if (item === "Districts") {
      setAnchorEl(event.currentTarget);
    }
    navigate(`/${item.toLowerCase()}`);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getClassName = (item: string) => {
    if (location.pathname === "/" && item.toLowerCase() === "home")
      return "nav_item-active";
    if (location.pathname === `/${item.toLowerCase()}`) {
      return "nav_item-active";
    }
  };

  const drawer = (
    <Box
      className="navbar_drawer"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <Logo />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              className={getClassName(item)}
              onClick={(e: any) => handleMenuClick(e, item)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box className="navbar" sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar className="center" component="nav" style={{ top: "unset" }}>
          <Toolbar sx={{ alignSelf: { sm: "center", xs: "flex-start" } }}>
            <IconButton
              className="iconButton"
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <FaBars />
            </IconButton>
            <Box
              className="center"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {navItems.map((item) => (
                <Button
                  onClick={(e: any) => handleMenuClick(e, item)}
                  className={`nav_item ${getClassName(item)}`}
                  key={item}
                  sx={{ color: "#fff" }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {districts.map((item) => (
          <MenuItem key={item} onClick={handleClose}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
