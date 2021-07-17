import { React, useState, useEffect, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Badge, IconButton, ThemeProvider } from '@material-ui/core';

import Dashboard from '../dashboard/Dashboard';
import Inventory from '../inventory/Inventory';
import MarketPlace from '../marketplace/MarketPlace';
import Analytics from '../analytics/Analytics';
import Settings from '../settings/Settings';
import Admin from '../admin/Admin';

//import {ReactComponent as ToggleArrow} from '../../icons/toggleArrow.svg';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import StoreIcon from '@material-ui/icons/Store';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './Sidebar.css';

import { walletFinder } from '../../web3/walletFinder'

export const AddressContext = createContext()

function Sidebar() {

    const [toggle, setToggle] = useState(true)

    const [address, setAddress] = useState()

    const [addressChanged, setAddressChanged] = useState(true)

    useEffect(() => {
        async function getAddress() {
            const walletAddress = await walletFinder()
            setAddress(walletAddress)
            //console.log(walletAddress)
        }
        getAddress()
    }, [addressChanged])
    
    //the below block runs when metamask plugin changes from one ac to another (specific to metamask!!!!???)
    window.ethereum.on('accountsChanged', function (accounts) {
        //currentAddress = accounts[0];
        setAddressChanged(!addressChanged)
    })

    return (
        <Router>
            <div className='main__container'>
                <div className= {toggle?'sidebar__container':'sidebar__container__collapsed'}>
                    <ul className='list__items'>
                        <div className='sidebar__top'>
                            
                            <h4>Open Capsule</h4>

                            <li>
                                {/*NavLink has an active class automatically added to it, whereas Link does'nt */}
                                <NavLink exact className='router__links' to="/"><DashboardIcon />Dashboard</NavLink> 
                            </li>
                            <li>
                                <NavLink className='router__links' to="/inventory"><ShoppingBasketIcon />Inventory</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/marketplace"><StoreIcon />MarketPlace</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/analytics"><TimelineIcon />Analytics</NavLink>
                            </li>
                        </div>
                        <div>

                            <li>
                                {/* Should only be visible if address is owner */}
                                { address === '0xc50E782E195a864A7f1248a28DD3554cC53AB440' && <NavLink className='router__links' to="/admin"><SupervisorAccountIcon />Admin</NavLink> }
                            </li>
                            <li>
                                <NavLink className='router__links' to="/settings"><SettingsIcon />Settings</NavLink>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className={toggle?'right__container__collapsed':'right__container'}>
                    <div className='navbar'>

                        {/*<MenuIcon className={toggle?'toggleArrow__rotated':'toggleArrow'} onClick={() => setToggle(!toggle)}/>*/}
                        {toggle ? 
                            <IconButton >
                                <CloseIcon  
                                className={toggle?'toggleArrow__rotated':'toggleArrow'}
                                onClick={ () => setToggle(!toggle) }/>
                            </IconButton> : 
                            <IconButton >
                                    <MenuIcon  
                                    className={toggle?'toggleArrow__rotated':'toggleArrow'}
                                    onClick={ () => setToggle(!toggle)}/> 
                            </IconButton> }

                        <div className='navbar__icons'>
                            <IconButton >
                                <Badge color="secondary" variant="dot" >
                                    <NotificationsRoundedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge color="secondary" variant="dot" >
                                    <ShoppingCartRoundedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PersonRoundedIcon />
                            </IconButton>
                        </div>
                    </div>
                    <Switch>
                        <AddressContext.Provider value = {address}>
                            <Route exact path="/">
                                <Dashboard />
                            </Route>
                            <Route path="/inventory">
                                <Inventory />
                            </Route>
                            <Route path="/marketplace">
                                <MarketPlace />
                            </Route>
                            <Route path="/analytics">
                                <Analytics />
                            </Route>
                            <Route path="/settings">
                                <Settings />
                            </Route>
                            {/* Should only be visible if address is owner */}
                            { address === '0xc50E782E195a864A7f1248a28DD3554cC53AB440' && <Route path="/admin">
                                <Admin />
                            </Route>}
                        </AddressContext.Provider>
                    </Switch>
                </div>
        </div>
    </Router>    
  )
}

export default Sidebar
