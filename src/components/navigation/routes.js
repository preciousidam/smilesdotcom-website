import React, {Suspense}  from 'react';
import { Route } from "react-router-dom";
import ErrorBoundary from '../errorboundary';
import {Loader} from '../loader';


export const CustomRoute = (route) => {
    return(
        <Route 
            path={route.path}
            render={
                props => (
                    <ErrorBoundary>
                        <Suspense fallback={<Loader />}>
                            <route.component {...props} />
                        </Suspense>
                    </ErrorBoundary>
                )
            }
        />
    )
}