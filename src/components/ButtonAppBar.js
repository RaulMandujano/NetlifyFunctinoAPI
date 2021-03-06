import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { NavLink, useHistory } from 'react-router-dom'

import { Link } from 'react-router-dom'
import SwipeableTemporaryDrawer from './SwipeableTemporaryDrawer'
// import { Width } from '@mui/system';
import { List, ListItem, Drawer, ListItemIcon } from '@mui/material'

import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { auth, logout } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function ButtonAppBar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [user] = useAuthState(auth)
  const history = useHistory()

  const toggleDrawer = () => {
    setIsOpen(!isOpen)
  }

  const handleNavChoice = () => {
    history.push('/heroes')
    toggleDrawer()
  }

  const signout = (e) => {
    e.preventDefault()
    logout()
    history.push('/')
    setIsOpen(false)
  }

  const drawerItemList = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem button onClick={handleNavChoice}>
          <ListItemIcon>
            <PermIdentityIcon />
          </ListItemIcon>
          <NavLink to="/Heroes">Heroes List</NavLink>
        </ListItem>
        {!user ? (
          <>
            <ListItem button>
              <ListItemIcon>
                <LockOpenIcon />
              </ListItemIcon>
              <NavLink to="/signin">Log In</NavLink>
            </ListItem>

            <ListItem button>
              <ListItemIcon>
                <AssignmentIndIcon />
              </ListItemIcon>
              <NavLink to="/signup">Sign Up</NavLink>
            </ListItem>
          </>
        ) : (
          <ListItem button>
            <ListItemIcon>
              <AssignmentIndIcon />
            </ListItemIcon>
            <button onClick={signout}>Signout</button>
          </ListItem>
        )}
      </List>
    </Box>
  ) 
 
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon>
                <SwipeableTemporaryDrawer />
              </MenuIcon>
            </IconButton>

            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              <IconButton
                size="large"
                aria-label="home button"
                color="inherit"
                onClick={() => handleNavChoice('welcome')}
              ></IconButton>
              <Link className="nav-link" to={'/heroes'}>Super Hero</Link>
            </Typography>
            <Button color="inherit">
              <Link className="nav-link" to={'/signin'}>
                Login
              </Link>
            </Button>
            <Button color="inherit">
              <Link className="nav-link" to={'/signup'}>
                Sign up
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        {drawerItemList()}
      </Drawer>
    </>
  )
}
