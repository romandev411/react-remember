import React from 'react';
import './FormTab.css'
import { NavLink, useParams } from 'react-router-dom';


export default function FormTab(props) {

    const name = useParams();
    const active = name['*'] === '' ? 'form-tab__btn active' : 'form-tab__btn';

    return (
        <div className="form-tab">
            <div className="form-tab__item">
                <div className="form-tab__tabs">
                    <NavLink className="form-tab__btn" to="signin">Sign in</NavLink>
                    <NavLink className={active} to="login">Log in</NavLink>
                </div>

                <div className="form-tab__desc">
                    {props.children}
                </div>
            </div>
        </div>
    )
}