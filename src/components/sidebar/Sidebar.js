import React, { useState, useEffect, createContext, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { Badge, IconButton } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
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
import { fetchAllProducts } from '../../services/productService';
import { fetchProducts } from '../../services/productService';
import { fetchDashboard } from '../../services/dashboardService'

import Dashboard from '../dashboard/Dashboard';
const Inventory = lazy(() => import('../inventory/Inventory'))
const MarketPlace = lazy(() => import('../marketplace/MarketPlace'))
const Analytics = lazy(() => import('../analytics/Analytics'))
const Settings = lazy(() => import('../settings/Settings'))
const Admin = lazy(() => import('../admin/Admin'))

export const AddressContext = createContext()
export const InventoryContext = createContext()
export const MarketContext = createContext()


function Sidebar() {

    const [toggle, setToggle] = useState(true)

    const [address, setAddress] = useState()

    const [addressChanged, setAddressChanged] = useState(true)

    const [inventory, setInventory] = useState([])

    const [marketData, setMarketData] = useState([])

    //const [dashBoardData, setDashBoardData] = useState({})

    //get address
    useEffect(() => {
        let mounted = true
        async function getAddress() {
            const walletAddress = await walletFinder()
            if(mounted)
                setAddress(walletAddress)
            //console.log(walletAddress)
        }
        getAddress()
        return () => {mounted = false}
    }, [addressChanged])

    //get inventory
    useEffect(() => {
        let mounted = true
        async function getInventory() {
            fetchProducts(address).then(result => {
                if(mounted)
                    setInventory(result)
                }
            ) 
        }
        getInventory()
        return () => {mounted = false}
    }, [address])
    
    //get market data
    useEffect(() => {
        let mounted = true
        async function getMarketData() {
            fetchAllProducts(address).then(result => {
                if(mounted)
                    setMarketData(result)
                }
            ) 
        }
        getMarketData()
        return () => {mounted = false}
    }, [address])

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
                            
                            <h4>{ toggle ? '💊  Open Capsule' : '💊' }</h4> 

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
                            <IconButton onClick={ () => setToggle(!toggle) }>
                                <CloseIcon  
                                className={toggle?'toggleArrow__rotated':'toggleArrow'}
                                />
                            </IconButton> : 
                            <IconButton onClick={ () => setToggle(!toggle)}>
                                    <MenuIcon  
                                    className={toggle?'toggleArrow__rotated':'toggleArrow'}
                                    /> 
                            </IconButton> }

                        <div className='navbar__icons'>
                            <IconButton >
                                <Badge color="secondary" variant="dot" >
                                    <NotificationsRoundedIcon />
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PersonRoundedIcon />
                            </IconButton>
                        </div>
                    </div>
                    <Suspense fallback = {<CircularProgress className='loading'/>}>
                        <Switch>
                            <AddressContext.Provider value = {address}>
                                {/*<DashboardContext.Provider value = {dashBoardData}>*/}
                                    <Route exact path="/">
                                        <Dashboard />
                                    </Route>
                                {/*</DashboardContext.Provider>*/}
                                <InventoryContext.Provider value = {inventory}>
                                    <Route path="/inventory">
                                        <Inventory />
                                    </Route>
                                </InventoryContext.Provider>
                                <MarketContext.Provider value = {marketData}>
                                    <Route path="/marketplace">
                                        <MarketPlace />
                                    </Route>
                                </MarketContext.Provider>
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
                    </Suspense>
                </div>
        </div>
    </Router>    
  )
}

export default Sidebar
