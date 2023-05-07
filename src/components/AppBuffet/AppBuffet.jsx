import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import style from "./AppBuffet.module.css";

const AppBuffet = () => {
    const location = useLocation();

    return (
        <header className={style.header}>
            <div className={style.container}>
                <nav>
                    <NavLink
                        to={location.pathname === "/tweets" ? "/" : "tweets"}
                        className={style.link}
                    >
                        {location.pathname === "/tweets" ? "Back" : "Tweets"}
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};

export default AppBuffet;