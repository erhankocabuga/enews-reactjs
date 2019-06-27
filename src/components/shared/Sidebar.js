import React, { Component, Fragment } from 'react';
import Utils from '../../general/utils';

class Sidebar extends Component {
    render() {

        let categories = Utils.getCategories();

        return (
            <Fragment>
                { /*<!-- ad -->*/ }
                <div className="aside-widget text-center">
                    <a href="#" style={{ display: 'inline-block', margin: 'auto' }}>
                        <img className="img-responsive" src={ require('../../assets/img/ad-1.jpg') } alt="" />
                    </a>
                </div>
                { /*<!-- /ad -->*/ }
                
                { /*<!-- catagories -->*/ }
                <div className="aside-widget">
                    <div className="section-title">
                    <h2>Categories</h2>
                    </div>
                    <div className="category-widget">
                    <ul>
                        {
                            categories.map((item, ix) => {
                                return (
                                    <li key={ix}>
                                        <a href={ item.Url } className={ Utils.getSectionClassName(item.id) }>{item.Name} <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span></a>
                                    </li> 
                                );
                            })
                        } 
                    </ul>
                    </div>
                </div>
                { /*<!-- /catagories -->*/ }
                
                { /*<!-- tags -->*/ }
                <div className="aside-widget">
                    <div className="tags-widget">
                        <ul>
                            <li><a href="#">Chrome</a></li>
                            <li><a href="#">CSS</a></li>
                            <li><a href="#">Tutorial</a></li>
                            <li><a href="#">Backend</a></li>
                            <li><a href="#">JQuery</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">JavaScript</a></li>
                            <li><a href="#">Website</a></li>
                        </ul>
                    </div>
                </div>
                { /*<!-- /tags -->*/ }

                    { /*<!-- ad -->*/ }
                <div className="aside-widget text-center">
                    <a href="#" style={{ display: 'inline-block', margin: 'auto' }}>
                        <img className="img-responsive" src={ require('../../assets/img/ad-1.jpg') } alt="" />
                    </a>
                </div>
                { /*<!-- /ad -->*/ }
            </Fragment>
        );
    }
}

export default Sidebar;