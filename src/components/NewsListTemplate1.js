import React, { Component } from 'react';

class NewsListTemplate1 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const news = this.props.News;
        let loopCounter = 1;

        return news.length > 0 ? (

            <div className="row">	 
                <div className="col-md-6">
                {
                    news.map((item) => {
                        <div className="post post-thumb">
                            <a className="post-img" href="{item.Url}" href="#"><img src="{item.Thumbnail}" alt="{item.Title}" /></a>
                            <div className="post-body">
                            <div className="post-meta">
                                <a className="post-category {{ getSectionClass(item.SectionId) }}" href="'/' + item.SectionId" href="#"> { loopCounter } { item.Section }</a>
                                <span className="post-date">{ item.CreatedDate }</span>
                            </div>
                            <h3 className="post-title"><a href="{ item.Url }">{ item.Title }</a></h3>
                            </div>
                        </div>
                    })
                } 
                </div> 
            </div> 
        ) : (null);
    }
}

export default NewsListTemplate1;