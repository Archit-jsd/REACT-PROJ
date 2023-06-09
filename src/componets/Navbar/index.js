import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import  Avatar  from '@material-ui/core/Avatar'
import {  deepPurple } from '@mui/material/colors';
import LogoutIcon from '@mui/icons-material/Logout';
import HelpIcon from '@mui/icons-material/Help';
import Typography from '@mui/material/Typography';
 
export const PrimaryNav = styled.nav` 
  z-index: 14;
  height: 80px;
  display: flex;
  background: black;
  justify-content: space-between;
  padding:10px;
`
export const MenuLink = styled(Link)`
  color: white;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0 1.2rem;
  height: 100%;
  font-weight: bolder;
  font-size:50px;
  padding: 100px
  &.active {
    color: black;
    
  }
`
 
export const Hamburger = styled(FaBars)`
  display: none;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.9rem;
    top: 0;
    right: 0;
    position: absolute;
    cursor: pointer;
    transform: translate(-100%, 75%);
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -25px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
 
function Navbar() {
  // return <nav class="PrimaryNav">Home</nav>
  return (
    <>
 <PrimaryNav style={{backgroundColor: "#2c387e"}}>
 <Hamburger />
        <Menu>
        <MenuLink to="/mainpage" activeStyle style={{  marginRight:0}}>
            <div className=''>
                e-INSPECTOR
            </div>
          </MenuLink>
          
          <MenuLink to="" activeStyle style={{ marginLeft:1000,fontSize:"20px"}}>
            About
          </MenuLink>
          <MenuLink to="" activeStyle style={{  marginLeft:0,fontSize:"20px"}}>
           <HelpIcon style={{marginLeft:0}} />
          </MenuLink>
        </Menu>
        
      </PrimaryNav>
      </>
  )
  }
  
export default Navbar

