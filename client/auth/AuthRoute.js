import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './auth-helper'

const AuthRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        auth.isAuthenticated() ? (
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }} />
        ) : (
            <Component {...props}/>
    )
    )} />
)

export default AuthRoute