import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { alpha } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ListItemButton from "@mui/material/ListItemButton";

import { usePathname } from "../../routes/hooks";
import { RouterLink } from "../../routes/components";

import { useResponsive } from "../../hooks/use-responsive";

import { account } from "../../_mock/account";

import Logo from "../../components/logo";
import Scrollbar from "../../components/scrollbar";

import { NAV } from "./config-layout";
import navConfig from "./config-navigation";
import { routeConfig } from "../../pages/routeConfig";
import "../layout.css";
import {
  Collapse,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  backdropClasses,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { Navigate, useNavigate } from "react-router-dom";
import ConfirmationDialog from "../../components/dialog/ConfirmationDialog";
// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const pathname = usePathname();
  const navigate = useNavigate();

  const [logoutPopup, setLogoutPopup] = useState(false);
  const upLg = useResponsive("up", "lg");
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }} mt={4}>
      {routeConfig.map(
        (item) => item.show && <NavItem key={item.title} item={item} />
      )}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,

        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
        background: "white",
        color: "#13556D",
      }}
    >
      <div className="nav-logo">
        <img src="./images/logo.png" alt="no logo" />
      </div>

      {renderMenu}

      <Box style={{ height: 145 }}></Box>
      <Box sx={{ px: 2 }}>
        <ListItemButton
          sx={{ color: "#13556D" }}
          onClick={() => setLogoutPopup(true)}
        >
          <Iconify icon="basil:logout-outline" />
          <Typography sx={{ ml: 4 }}>Logout</Typography>
        </ListItemButton>
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
        overflow: "auto",
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            width: NAV.WIDTH,
            overflow: "auto",
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
      {logoutPopup && (
        <ConfirmationDialog
          open={logoutPopup}
          setDeleteDialog={setLogoutPopup}
          title={"Are you sure you want to logout?"}
          yes={() => navigate("/login")}
        />
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  console.log(item, "item");
  const [openCollapse, setOpenCollapse] = useState(false);
  const pathname = usePathname();
  const active = `/${item.link}` === pathname;
  return (
    <>
      <ListItemButton
        onClick={
          item?.children?.length > 0
            ? () => setOpenCollapse(() => !openCollapse)
            : null
        }
        component={RouterLink}
        href={item.link}
        sx={{
          minHeight: 44,
          borderRadius: 0.75,
          typography: "body2",
          // margin: 5,
          marginTop: 5,
          color: "#13556D",
          textTransform: "capitalize",
          fontWeight: "fontWeightMedium",
          ...(active && {
            color: "#FFFFFF",
            fontWeight: "fontWeightSemiBold",
            bgcolor: "#13556D",
            height: 10,
            fontSize: 13,
          }),
        }}
      >
        <Box component="span" className="m-2">
          {item.icon}
        </Box>
        <div className="nav-bar">
          <Box className="unactive" sx={{ ml: 2 }}>
            {item.title}

            {item?.children?.length > 0 ? (
              openCollapse ? (
                <Iconify
                  sx={{ ml: 8, width: 20 }}
                  icon="ic:outline-expand-less"
                />
              ) : (
                <Iconify
                  sx={{ ml: 8, width: 20 }}
                  icon="ic:outline-expand-more"
                />
              )
            ) : null}
          </Box>
        </div>
      </ListItemButton>
      <Collapse in={openCollapse} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item?.children?.length > 0 &&
            item?.children?.map((x, i) => {
              return (
                <ListItemButton key={i} href={x.link} sx={{ pl: 4 }}>
                  <ListItemIcon>{x.icon}</ListItemIcon>
                  <ListItemText primary={x.title} />
                </ListItemButton>
              );
            })}
        </List>
      </Collapse>
    </>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
