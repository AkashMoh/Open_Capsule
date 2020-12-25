import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from './dashboard/Dashboard';
import Products from './products/Products';
import Inventory from './inventory/Inventory';
import Purchases from './purchases/Purchases';
import Sales from './sales/Sales';
import Suppliers from './suppliers/Suppliers';
import Customers from './customers/Customers';
import Reports from './reports/Reports';
import Settings from './settings/Settings';

import dashboardIcon from '../../icons/dashboard.svg';
import analyticsIcon from '../../icons/analytics.svg';
import customersIcon from '../../icons/customers.svg';
import inventoryIcon from '../../icons/inventory.svg';
import productsIcon from '../../icons/products.svg';
import purchasesIcon from '../../icons/purchases.svg';
import salesIcon from '../../icons/sales.svg';
import settingsIcon from '../../icons/settings.svg';
import suppliersIcon from '../../icons/suppliers.svg';

import './Sidebar.css';

function Sidebar() {
    return (
        <Router>
            <div className='main__container'>
            <div className='sidebar__container'>
                <ul className='list__items'>
                <div className='sidebar__top'>
                <li>
                    <Link className='router__links' to="/"><img src={dashboardIcon} alt="dashboard"/>Dashboard</Link>
                </li>
                <li>
                    <Link className='router__links' to="/products"><img src={productsIcon} alt="products"/>Products</Link>
                </li>
                <li>
                    <Link className='router__links' to="/inventory"><img src={inventoryIcon} alt="inventory"/>Inventory</Link>
                </li>
                <li>
                    <Link className='router__links' to="/purchases"><img src={purchasesIcon} alt="purchases"/>Purchases</Link>
                </li>
                <li>
                    <Link className='router__links' to="/sales"><img src={salesIcon} alt="sales"/>Sales</Link>
                </li>
                <li>
                    <Link className='router__links' to="/suppliers"><img src={suppliersIcon} alt="suppliers"/>Suppliers</Link>
                </li>
                <li>
                    <Link className='router__links' to="/customers"><img src={customersIcon} alt="customers"/>Customers</Link>
                </li>
                <li>
                    <Link className='router__links' to="/analytics"><img src={analyticsIcon} alt="analytics"/>Analytics</Link>
                </li>
                </div>
                <div>
                <li>
                    <Link className='router__links' to="/settings"><img src={settingsIcon} alt="settings"/>Settings</Link>
                </li>
                </div>
                </ul>
            </div>

            

            <div className='right__container'>

            <h3>Hello there</h3>
            
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
            </Switch>

            
            </div>
        </div>
    </Router>    
  )
}

export default Sidebar
