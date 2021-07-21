import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import ErrorBoundary from '../errorboundary';
import { Header } from "../header";


export const AppNavigation = ({children}) => {
  return (
    <ErrorBoundary>
        <Router>
            <Header />
            <Switch>
                {children}
            </Switch>
        </Router>
    </ErrorBoundary>
  );
}

export default AppNavigation;
