import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import {menuList } from '../_global/Paths';
import { bindActionCreators } from "redux";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from "react-redux";

const SideBarComponent = (props) => {
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');
    useEffect(()=>{
        if(props.userDetails){
             localStorage.setItem('username', props.userDetails.output.username);
             localStorage.setItem('role', props.userDetails.output.role);
            }
    },[])

  
    return (
        <div className="sidebar">
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="http://via.placeholder.com/160x160" className="rounded-circle" alt="User Image" />
                </div>
                <div className="pull-left info">
                    <Link to="/"><i className="fa fa-circle text-success"></i> <h4 className="userName"> {username} </h4></Link>
                </div>
            </div>
            <ul className="list-sidebar bg-default">
           
                {
                    
                    menuList.map((e, i) => {
                            console.log(e.role === role, role)
                                if(role === 'admin' && e.role === 'worker') { return ( <li key={i}>
                                    <Link to={{ pathname: e.path }}>  <span> <FontAwesomeIcon icon={e.icon} />  </span>
                                  {e.name} </Link>
                                </li>)}else if(role === e.role) {
                                    return(<li key={i}>
                                        <Link to={{ pathname: e.path }}>  <span> <FontAwesomeIcon icon={e.icon} />  </span>  {e.name} </Link>
                                    </li>)
                                } 
                            })
                }

            </ul>
        </div>
    )
}



const mapStateToProps = state => {
    return {
        ...state.appReducer
    };
};


const mapDispatchToState = dispatch => {
    return bindActionCreators({
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToState)(SideBarComponent);