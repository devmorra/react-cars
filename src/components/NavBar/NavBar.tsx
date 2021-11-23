import React from 'react';
import {Link} from 'react-router-dom';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    root:{
        padding: '0',
        margin: '0'
    },
    navbar_container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logo:{
        margin: '0 0 0 0.45em'
    },
    logo_a: {
        color: 'rgb(28,24,22)'
    },
    logo_navigation: {
        listStyle: 'none',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    navigation: {
        display: 'flex'
    },
    nav_a:{
        display: 'block',
        padding: '1em',
        color: 'black'
    }
});

export const NavBar = () =>{
    const classes = useStyles();
    return(
        <div>
                    <nav>
                <div className={classes.navbar_container}>
                    <h1 className={ `${classes.logo} `}>
                        <Link to="#" className={ `${classes.logo_a} ${classes.logo_navigation}` }>Car Brand</Link>
                    </h1>
                    <ul className={ `${classes.navigation} ${classes.logo_navigation}` }>
                        <li>
                            <Link to="/" className={classes.nav_a}>Home</Link>
                        </li>
                        <li>
                            <Link to="/dashboard" className={classes.nav_a}>Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/signin" className={classes.nav_a}>Sign In</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}