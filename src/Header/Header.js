import React from 'react';
import { useStyles, aciveLinkStyles } from './Styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar color="transparent" elevation={0} className={classes.appBar} position="fixed">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <div className={classes.titleContainer}>
                        <p className="brandName">THE WALL STREET JOURNAL.</p>
                    </div>
                    <div className="subSignIn" >
                        Subscribe | SignIn
                    </div>
                </Toolbar>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <div className={classes.titleContainer}>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/home"
                            className={classes.navLink}
                        >
                            Home
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/us"
                            className={classes.navLink}
                        >
                            U.S
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/politics"
                            className={classes.navLink}
                        >
                            Politics
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/sports"
                            className={classes.navLink}
                        >
                            Sports
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/entertainment"
                            className={classes.navLink}
                        >
                            Entertainment
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/business"
                            className={classes.navLink}
                        >
                            Business
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/markets"
                            className={classes.navLink}
                        >
                            Markets
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/realestates"
                            className={classes.navLink}
                        >
                            Real Estates
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/health"
                            className={classes.navLink}
                        >
                            Health
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/science"
                            className={classes.navLink}
                        >
                            Science
                        </NavLink>
                        <NavLink activeStyle={aciveLinkStyles}
                            to="/tech"
                            className={classes.navLink}
                        >
                            Technlogy
                        </NavLink>
                    </div>
                    <div style={{ cursor: 'pointer', marginLeft: 0, display: 'flex', alignItems: 'center', fontSize: 14, color: 'grey' }}>
                        Search
                        <SearchIcon style={{ paddingLeft: 10 }} fontSize="medium" color="action" />
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}