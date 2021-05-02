import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Badge, IconButton } from '@material-ui/core';

import Dashboard from '../dashboard/Dashboard';
import Products from '../products/Products';
import Inventory from '../inventory/Inventory';
import Purchases from '../purchases/Purchases';
import Sales from '../sales/Sales';
import Suppliers from '../suppliers/Suppliers';
import Customers from '../customers/Customers';
import Reports from '../reports/Reports';
import Settings from '../settings/Settings';
import Admin from '../admin/Admin';

import {ReactComponent as DashboardIcon} from '../../icons/dashboard.svg';
import {ReactComponent as AnalyticsIcon} from '../../icons/analytics.svg';
import {ReactComponent as CustomersIcon} from '../../icons/customers.svg';
import {ReactComponent as InventoryIcon} from '../../icons/inventory.svg';
import {ReactComponent as ProductsIcon} from '../../icons/products.svg';
import {ReactComponent as PurchasesIcon} from '../../icons/purchases.svg';
import {ReactComponent as SalesIcon} from '../../icons/sales.svg';
import {ReactComponent as SettingsIcon} from '../../icons/settings.svg';
import {ReactComponent as SuppliersIcon} from '../../icons/suppliers.svg';

import {ReactComponent as ToggleArrow} from '../../icons/toggleArrow.svg';

import './Sidebar.css';

//window.ethereum.on('accountsChanged', function (accounts) {isAdmin()} 

async function isAdmin() {
    
    const accounts = await window.web3.eth.getAccounts()
    if(accounts[0] === '0xc50E782E195a864A7f1248a28DD3554cC53AB440'){
        return(true);
    }else {
        return(false)
    }
    
}

function Sidebar() {

    const [toggle, setToggle] = useState(true);

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
                                <NavLink className='router__links' to="/products"><ProductsIcon />Products</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/inventory"><InventoryIcon />Inventory</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/purchases"><PurchasesIcon />Purchases</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/sales"><SalesIcon />Sales</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/suppliers"><SuppliersIcon />Suppliers</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/customers"><CustomersIcon />Customers</NavLink>
                            </li>
                            <li>
                                <NavLink className='router__links' to="/analytics"><AnalyticsIcon />Analytics</NavLink>
                            </li>
                        </div>
                        <div>
                        
                            <li>
                                <NavLink className='router__links' to="/admin"><SettingsIcon />Admin</NavLink>
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
                        <Route path="/products">
                            <Products />
                        </Route>
                        <Route path="/inventory">
                            <Inventory />
                        </Route>
                        <Route path="/purchases">
                            <Purchases />
                        </Route>
                        <Route path="/sales">
                            <Sales />
                        </Route>
                        <Route path="/suppliers">
                            <Suppliers />
                        </Route>
                        <Route path="/customers">
                            <Customers />
                        </Route>
                        <Route path="/analytics">
                            <Reports />
                        </Route>
                        <Route path="/settings">
                            <Settings />
                        </Route>
                        <Route path="/admin">
                            <Admin/>
                        </Route>
                    </Switch>
                </div>
        </div>
    </Router>    
  )
}

export default Sidebar
