import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export const BreadcrumbModule = (props) => {
    const lastItem = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
    return (
        <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/dashboard">Home</Link> 
            </Breadcrumb.Item>
            { 'home' !== lastItem && <Breadcrumb.Item >
                  <Link className="text-capitalize" to={lastItem}>{lastItem}</Link> 
            </Breadcrumb.Item> }
        </Breadcrumb>
    )
}
