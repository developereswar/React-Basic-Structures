import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// ui module
import { Headers } from '../ui_modules/Header';
import { SideBarComponent } from '../ui_modules/Sidebar';

// path list
import { pathList } from './Paths'

export const Layout =  () => {
  return(
    <>
      <Headers/>
      <SideBarComponent/>

      <Router>
      <Switch>
        {
          pathList.map(compList => {
            return ( <Route path={compList.path} component={compList.component} exact />)
          })
        }
      </Switch>
          
    </Router>
    </>
  )
}