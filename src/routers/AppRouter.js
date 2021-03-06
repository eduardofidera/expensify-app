import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';
import Navbar from '../components/Navbar'


// @TODO add login component
const AppRouter = () => (
    <BrowserRouter>
    <div className="main">
            <Navbar />
            <Header />
            <main>
                <div className="container">
                    <Switch>
                        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                        <Route path="/create" component={AddExpensePage}/>
                        <Route path="/edit/:id" component={EditExpensePage}/>
                        <Route path="/help" component={HelpPage}/>
                        <Route component={ErrorPage} />
                    </Switch>
                </div>
            </main>
    </div>
    </BrowserRouter>
);

export default AppRouter;