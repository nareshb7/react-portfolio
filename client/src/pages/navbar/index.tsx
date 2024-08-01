import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import logo from 'assets/nrLogo.png';
import FlexBetween from 'styles/FlexBetween';
import StyledImage from 'styles/StyledImage';
import { ThemeType } from 'theme';
import { NavList } from './NavList';
import { NAME } from 'common';

const Navbar = () => {
  const isNonMobileScreens = useMediaQuery('(min-width: 1000px)');
  const theme = useTheme() as ThemeType;
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;
  return (
    <FlexBetween
      className="nav-bar"
      sx={{ padding: '1rem 6%', backgroundColor: alt }}
    >
      <FlexBetween gap="1.75rem">
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: 'clamp(1rem, 2rem, 2.25rem)',
            color: 'primary',
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          {NAME}
        </Typography>
        {/* <Box
          sx={{
            width: '30px',
            height: '30px',
            '&:hover': {
              color: primaryLight,
              cursor: 'pointer',
            },
          }}
        >
          <StyledImage src={logo} />
        </Box> */}
      </FlexBetween>
      {isNonMobileScreens ? (
        <FlexBetween gap="1rem">
          <NavList dark={dark} />
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <MenuIcon />
        </IconButton>
      )}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          sx={{
            position: 'fixed',
            right: '0',
            bottom: '0',
            height: '100%',
            zIndex: '10',
            maxWidth: '500px',
            minWidth: '300px',
            backgroundColor: background,
          }}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="1rem"
          >
            <NavList dark={dark} />
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
