import React, { Component } from 'react';

import Utils from '../general/utils';

import SocialShare from '../components/shared/SocialShare';
import Sidebar from '../components/shared/Sidebar';

import NewsService from '../services/NewsService';


class Detail extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            newsDetail: null
        }; 
    }

    componentDidMount() {
        this.getNewsDetail();
    }

    onSubmit() {
        this.commenIsSuccessfullySend = true; 
    }
    
    getNewsDetail() {
        const {params} = this.props.match;

        let section1 = params.section1,
            section2 = params.section2,
            year = params.year,
            month = params.month,
            day = params.day,
            titleUrl = params.titleUrl; 

        let contentUrl = "";
        if (!section2) 
            contentUrl = `${section1}/${year}/${month}/${day}/${titleUrl}`;
        else 
            contentUrl = `${section1}/${section2}/${year}/${month}/${day}/${titleUrl}`;

        NewsService
            .getNewsDetail(contentUrl)
            .then((response) => response.json())
            .then((data) => { 
                this.setState({
                    newsDetail: Utils.mapApiResponseToNewsSingle(data)
                });

                console.log("newsdetail data geldi", data);
            });
    }

    render() {
        const { newsDetail } = this.state;
        const { params } = this.props.match; 
        console.log("params2", params);


        if(!newsDetail) return null;
        
        return (     
            <div className="section"> 
                <div className="container"> 
                    <div className="row"> 
                        <div className="col-md-8">
                            <div className="section-row sticky-container">
                                <div className="main-post">
                                <h3>{ newsDetail.Title }</h3>
                                <figure className="figure-img">
                                    <img className="img-responsive" style={{ "width":"100%"}} src={newsDetail.Thumbnail} alt={newsDetail.Title} />
                                </figure>
                                    <div dangerouslySetInnerHTML={{ __html: newsDetail.Content }}></div>
                                </div> 
                                <SocialShare contentTitle={newsDetail.Title} contentUrl={newsDetail.Url} /> 
                            </div>
                        </div>  
                
                        <div className="col-md-4">
                            <Sidebar/>
                        </div> 
                    </div> 
                </div> 
            </div>
        );
    }
}

export default Detail;