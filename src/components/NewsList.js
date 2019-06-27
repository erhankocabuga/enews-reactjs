import React, {Component} from 'react';
import Utils from '../general/utils';
import Sidebar from '../components/shared/Sidebar';

class NewsList extends Component {  
    render() {
        const list = this.props.News; 

        return list.length > 0
            ? (
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row"> 
                                    { 
                                        list.map((item, ix) => {
                                                return (
                                                    <div className="col-md-12" key={ix}>
                                                        <div className="post post-row">
                                                            <a className="post-img" href={item.Url}><img src={item.Thumbnail} alt={item.Title}/></a>
                                                            <div className="post-body">
                                                                <div className="post-meta">
                                                                    <a
                                                                        className={ `post-category ${Utils.getSectionClassName(item.SectionId)}` }
                                                                        href={'/' + item.SectionId}>{item.Section}</a>
                                                                    <span className="post-date">{ Utils.formatDate(item.CreatedDate) }</span>
                                                                </div>
                                                                <h3 className="post-title">
                                                                    <a href={item.Url}>{item.Title}</a>
                                                                </h3>
                                                                <p>{item.Spot}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })
                                    } 
                                    <div className="col-md-12">
                                        <div className="section-row">
                                            <button className="primary-button center-block">Load More</button>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-md-4">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            )
            : null;
    }
}

export default NewsList;