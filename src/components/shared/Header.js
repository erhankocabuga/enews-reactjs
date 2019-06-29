import React from 'react'; 
import Utils from '../../general/utils';

import { Link } from 'react-router-dom'; 

const Header = () =>  {
    const navbarCategories = (Utils.getCategories() || []).slice(0, 6);

    return (  
		<header id="header"> 
        <div id="nav"> 
            <div id="nav-fixed">
                <div className="container"> 
                    <div className="nav-logo"> 
                        <Link to="/" className="logo"><img src={require('../../enews-react.png')} style={{"height": "50px", "width": "auto"}} /></Link>
                    </div> 
 
                    <ul className="nav-menu nav navbar-nav"> 
                        {
                            navbarCategories.map((item, ix) => {
                                return (
                                    <li key={ix} className={ Utils.getSectionClassName(item.id) }>
                                        <a href={ item.Url }>{ item.Name }</a>
                                    </li> 
                                );
                            })
                        }
                    </ul>  
                    <div className="nav-btns">
                        <button className="aside-btn"><i className="fa fa-bars"></i></button>
                        <button className="search-btn"><i className="fa fa-search"></i></button>
                        <div className="search-form">
                            <input className="search-input" type="text" name="search" placeholder="Enter Your Search ..."/>
                            <button className="search-close"><i className="fa fa-times"></i></button>
                        </div>
                    </div> 
                </div>
            </div> 
            <div id="nav-aside"> 
                <div className="section-row"> 
                    <ul className="nav-aside-menu"> 
                        <li><Link to="/">Home</Link></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Join Us</a></li>
                        <li><a href="#">Advertisement</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>  
                <div className="section-row">
                    <h3>Follow us</h3>
                    <ul className="nav-aside-social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                    </ul>
                </div> 
                <div className="section-row">
                    <div className="nav-logo"> 
                        <Link to="/" className="logo"><img src={require('../../enews-react.png')} /></Link>
                        <p style={{paddingTop: 20}}>
                            Powered by <a href="https://reactjs.org/" target="_blank">ReactJS</a> <br />
                            Developer: <a href="https://erhankocabuga.com" target="_blank">Erhan KOCABUGA</a><br />
                            News Source: <a href="https://open-platform.theguardian.com" target="_blank">The Guardian Api</a>
                         </p>
                    </div>
                </div>
            </div>
        </div> 
    </header> 
    )
};

export default Header; 