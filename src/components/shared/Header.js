import React from 'react'; 
import Utils from '../../general/utils';

const Header = () =>  {
    const navbarCategories = (Utils.getCategories() || []).slice(0, 4);

    return (  
		<header id="header"> 
        <div id="nav"> 
            <div id="nav-fixed">
                <div className="container"> 
                    <div className="nav-logo">
                        <a href="index.html" className="logo">ENEWS</a>
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
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="#">Join Us</a></li>
                        <li><a href="#">Advertisement</a></li>
                        <li><a href="contact.html">Contacts</a></li>
                    </ul>
                </div> 
                <div className="section-row">
                    <h3>Recent Posts</h3>
                    <div className="post post-widget">
                        <a className="post-img" href="blog-post.html"><img src="./img/widget-2.jpg" alt=""/></a>
                        <div className="post-body">
                            <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
                        </div>
                    </div>

                    <div className="post post-widget">
                        <a className="post-img" href="blog-post.html"><img src="./img/widget-3.jpg" alt=""/></a>
                        <div className="post-body">
                            <h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
                        </div>
                    </div>

                    <div className="post post-widget">
                        <a className="post-img" href="blog-post.html"><img src="./img/widget-4.jpg" alt=""/></a>
                        <div className="post-body">
                            <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
                        </div>
                    </div>
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
                <button className="nav-aside-close"><i className="fa fa-times"></i></button>
 
            </div>
  
        </div> 
    </header> 


    )
};

export default Header; 