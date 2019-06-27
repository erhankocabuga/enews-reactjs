import React, {Component} from 'react';
import Utils from '../general/utils';

class NewsListTemplate1 extends Component {  
    render() {
        const news = this.props.News; 
        
        return (
            <div className="row">
            
                { news.length > 0
                ? (  
                    news.map((item, ix) => {
                        return (
                            <div className="col-md-6" key={ix}>
                                <div className="post post-thumb">
                                    <a className="post-img" href={item.Url}><img src={item.Thumbnail} alt={item.Title}/></a>
                                    <div className="post-body">
                                        <div className="post-meta">
                                            <a
                                                className={`post-category ${Utils.getSectionClassName(item.SectionId)}`}
                                                href={'/' + item.SectionId}> {item.Section}</a>
                                            <span className="post-date">{ Utils.formatDate(item.CreatedDate) }</span>
                                        </div>
                                        <h3 className="post-title">
                                            <a href={item.Url}>{item.Title}</a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        )
                    }) 
                )
                : (null)
                        }
            </div>
        );
    }
}

export default NewsListTemplate1;