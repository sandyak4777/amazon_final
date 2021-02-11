import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {useStateValue} from '../StateProvider';
import {auth} from '../firebase';

function Header(){
    const [{basket, user}] = useStateValue();

    const signOut=()=>{
        auth.signOut();
    }
        return(
            <nav className="header">
                <Link to="/">
                    <img className="header-logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
                </Link>
                <div className="header-search">
                    <input type="text" placeholder="Designed By Sandy" className="header-searchinput"/>
                    <SearchIcon className="header-searchicon"/>
                </div>
                <div className="header-nav">
                    {user?
                        (<Link className="header-link">
                            <div className="header-option">
                                <span className="headeroption-lineone">Hello {user.email}</span>
                                <span className="headeroption-linetwo" onClick={signOut}>Signout</span>
                            </div>
                        </Link>):
                        (<Link to="/login" className="header-link">
                            <div className="header-option">
                                <span className="headeroption-lineone">Hello</span>
                                <span className="headeroption-linetwo">SignIn</span>
                            </div>
                        </Link>)
                    }
                    
                    <Link to="/" className="header-link">
                        <div className="header-option">
                            <span className="headeroption-lineone">Returns</span>
                            <span className="headeroption-linetwo">& Orders</span>
                        </div>
                    </Link>
                    
                    <Link to="/checkout" className="header-link">
                        <div className="header-optionbasket">
                            <ShoppingCartOutlinedIcon/>
                            <span className="orange headeroption-linetwo">{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </nav>
        )
    }
export default Header;