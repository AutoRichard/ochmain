import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './core/home';
import About from './core/about';
import Services from './core/services';
import Studio from './core/studio';
import MyStudio from './core/my-studio'
import News from './core/news';
import Network from './core/network';
import Mypage from './core/my-page';
//import SignIn from './auth/Signin';
import PrivateRoute from './auth/PrivateRoute';
import AuthRoute from './auth/AuthRoute';
import Footer from './menu/footer';
import Copyright from './menu/copyright';
import LoginModal from './modal/loginModal';
import ApplicationForm from './modal/application';
import Thanks from './modal/thanks';
import ThanksNewsletter from './modal/newletter'
import JoinSession from './modal/join';
import Detail from './modal/detail';

import Account from './modal/account';
import Cancel from './modal/cancel';
import Meeting from './core/meeting';
import Contact from './core/contact';
import ResetPassword from './core/resetpassword'
import Password from './core/password'
import Plan from './modal/plan';

class MainRouter extends Component {
  render() {
    return (
      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <PrivateRoute path="/studio" component={Studio} />
          <PrivateRoute path="/my-studio" component={MyStudio} />
          <Route path="/news" component={News} />
          <PrivateRoute path="/meeting" component={Meeting} />
          <PrivateRoute path="/network" component={Network} />
          <PrivateRoute path="/my-page/:userId" component={Mypage} />
          <Route path="/contact" component={Contact} />
          <AuthRoute path="/resetpassword" component={ResetPassword} />
          <AuthRoute path="/reset/:token" component={Password} />
        </Switch>


        <Plan />

        <Footer />

        <Copyright />
        <LoginModal />
        <ApplicationForm />
        <Thanks />
        <ThanksNewsletter />
        <JoinSession />
        <Detail />

        <Account />
        <Cancel />

      </div>
    );
  }
}

export default MainRouter
