import {
  MenuItem,
  Menu,
} from '@material-ui/core';

interface IMenuProps {
  menuId: string;
  anchorEl: null | HTMLElement
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
}

const MainMenu = ({ menuId, anchorEl, setAnchorEl }: IMenuProps) => {
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
}

export default MainMenu;
