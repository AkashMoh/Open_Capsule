import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Badge, IconButton } from '@material-ui/core';

import Dashboard from '../dashboard/Dashboard';
import Inventory from '../inventory/Inventory';
import MarketPlace from '../marketplace/MarketPlace';
import Analytics from '../analytics/Analytics';
import Settings from '../settings/Settings';
import Admin from '../admin/Admin';

import {ReactComponent as DashboardIcon} from '../../icons/dashboard.svg';
import {ReactComponent as AnalyticsIcon} from '../../icons/analytics.svg';
import {ReactComponent as InventoryIcon} from '../../icons/inventory.svg';
import {ReactComponent as PurchasesIcon} from '../../icons/purchases.svg';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg';

import {ReactComponent as ToggleArrow} from '../../icons/toggleArrow.svg';

import './Sidebar.css';

function Sidebar() {

    const [toggle, setToggle] = useState(true);

    //window.ethereum.on('accountsChanged', function (accounts) {
    //    currentAddress = accounts[0];
    //    //console.log(accounts[0])
    //})

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
                                <NavLink className='router__links' to="/inventory"><InventoryIcon />Inventory</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/marketplace"><PurchasesIcon />MarketPlace</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/analytics"><AnalyticsIcon />Analytics</NavLink>
                            </li>
                        </div>
                        <div>

                            <li>
                                {true && <NavLink className='router__links' to="/admin"><SettingsIcon />Admin</NavLink> }
                            </li>
                            <li>
                                <NavLink className='router__links' to="/settings"><SettingsIcon />Settings</NavLink>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className={toggle?'right__container__collapsed':'right__container'}>
                    <div className='navbar'>

                        <ToggleArrow className={toggle?'toggleArrow__rotated':'toggleArrow'} onClick={() => setToggle(!toggle)}/>
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
                        { true && <Route path="/admin">
                            <Admin />
                        </Route>}
                    </Switch>
                </div>
        </div>
    </Router>    
  )
}

export default Sidebar
