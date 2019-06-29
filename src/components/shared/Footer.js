import React, { Component, Fragment } from 'react';
import Utils from '../../general/utils';

import { Link } from 'react-router-dom';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsletterEmail: '',
            newsletterValidationClass: '',
            isSubmitting: false,
            subscriptionIsComplete: false
        };
        this.newsletterInputOnChange = this.newsletterInputOnChange.bind(this);  
    }

    newsletterInputOnChange(e) { 
        let inputValue = e.target.value; 
        let errorClass = '';

        let validationResult = Utils.validateEmail(inputValue);
        if(!validationResult) {
            errorClass = 'error';
        }
        else {
            errorClass = 'success';
        }

        this.setState({ newsletterEmail: inputValue, newsletterValidationClass: errorClass }); 
    };

    subscribeToNewsletter(e) { 
        e.preventDefault();
        if(this.state.newsletterValidationClass === 'success') {
            this.setState({  isSubmitting : true });

            setTimeout(() => {
                this.setState({  isSubmitting : false, subscriptionIsComplete: true });
            }, 1500);
        }
    }

    render() {
        let year = new Date().getFullYear();
        let categories =(Utils.getCategories() || []).slice(0, 4);

        return ( 
            <footer id="footer"> 
            <div className="container"> 
                <div className="row">
                    <div className="col-md-5">
                        <div className="footer-widget">
                            <div className="footer-logo"> 
                                <Link to="/" className="logo"><img src={require('../../enews-react.png')} /></Link>
                                <p style={{paddingTop: 20}}>
                                    Powered by <a href="https://reactjs.org/" target="_blank">ReactJS</a> <br />
                                    Developer: <a href="https://erhankocabuga.com" target="_blank">Erhan KOCABUGA</a> <br/>
                                    News Source: <a href="https://open-platform.theguardian.com" target="_blank">The Guardian Api</a>
                                </p>
                            </div>
                            <ul className="footer-nav">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Advertisement</a></li>
                            </ul>
                            <div className="footer-copyright">
                                <span>&copy;  
                                    Copyright &copy;<script>{year}</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                </span>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-widget">
                                    <h3 className="footer-title">About Us</h3>
                                    <ul className="footer-links">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Join Us</a></li>
                                        <li><a href="#">Contacts</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-widget">
                                    <h3 className="footer-title">Categories</h3> 
                                    <ul className="footer-links">
                                    {
                                        categories.map((item, ix) => {
                                            return (
                                                <li key={ix}>
                                                    <a href={ item.Url }>{item.Name}</a>
                                                </li> 
                                            );
                                        })
                                    } 
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-3">
                        <div className="footer-widget">
                            <h3 className="footer-title">Join our Newsletter</h3>
                            <div className="footer-newsletter">
                                <form>
                                    {
                                        !this.state.subscriptionIsComplete ?
                                        (
                                            <Fragment>
                                                <input className={ 'input ' + this.state.newsletterValidationClass } type="email"   onChange={  this.newsletterInputOnChange } name="newsletter" placeholder="Enter your email" />
                                                <button className="newsletter-btn" onClick={ (e)=> this.subscribeToNewsletter(e) }>
                                                    <i className={this.state.isSubmitting ? 'fa fa-spinner fa-pulse' : 'fa fa-paper-plane'}></i>
                                                </button>
                                            </Fragment>
                                        )
                                        : 
                                        (
                                            <div>
                                            Thank you for subscribing to the newsletter!
                                            </div>
                                        )
                                    }  
                                </form>
                            </div>
                            <ul className="footer-social">
                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
                            </ul>
                        </div>
                    </div>
    
                </div> 
            </div> 
        </footer>  
        );
    }
}

export default Footer;