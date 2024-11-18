import { FC } from "react";
import { Link } from "react-router-dom"
import { Button } from "../Button";
import logo from '../../assets/images/logo.png';


export const NavBar : FC = () => {
    return (
        <div className="navbar">
            <img
                className="navbar-logo"
                src={logo}
                alt="Company Logo"
            />
            <Link
                className="navbar-link"
                to={'home'}>
                Home
            </Link>
            <Link
                className="navbar-link"
                to={'about-us'}>
                About Us
            </Link>
            <Link
                className="navbar-link"
                to={'contact-us'}>
                Contact Us
            </Link>
            <Button
                className="button-login"
                text="Log in"
                onClick={() => { }}
            />
        </div>
    )
}