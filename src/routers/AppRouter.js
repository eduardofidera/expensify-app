import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';
import Header from '../components/Header';
import Navbar from '../components/Navbar'

const AppRouter = () => (
    <BrowserRouter>
        <div class="col-12">
            <div class="row">
                <div class="col-12">
                    <div class="row">
                        <Header />
                    </div>
                </div>
                <div class="col-12 col-md-1">
                    <div class="row">
                        <Navbar />
                    </div>
                </div>
                <div class="col-12 col-md-11">
                    <div class="row">
                        <Switch>
                            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                            <Route path="/create" component={AddExpensePage}/>
                            <Route path="/edit/:id" component={EditExpensePage}/>
                            <Route path="/help" component={HelpPage}/>
                            <Route component={ErrorPage} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default AppRouter;