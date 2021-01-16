import React from 'react';
import { Link } from "react-router-dom";
import { pathList } from '../_global/Paths';

export const SideBarComponent = () => {
    return (
        <div className="sidebar">
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
                </div>
                <div className="pull-left info">
                    <p>bootstrap develop</p>
                    <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
                </div>
            </div>
            <ul className="list-sidebar bg-defoult">
                {
                    pathList.map((e, i) => {
                      return( <li key={i}>
                             <Link to={{pathname: e.path}}> {e.name} </Link>
                      </li>);
                    })
                }      
              
            </ul>
        </div>
    )
}