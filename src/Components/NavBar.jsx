import { AppBar, Toolbar, styled } from '@mui/material'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to='./' exact>
          Home
        </Tabs>
        <Tabs to='all' exact>
          All Posts 
        </Tabs>
        <Tabs to='add' exact>
          Create Post 
        </Tabs>
      </Toolbar>
    </Header>
  )
}

const Header = styled(AppBar)`
  background: #111111;
`

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`
export default NavBar
