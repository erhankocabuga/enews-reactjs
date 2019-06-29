import React, {Component, Fragment} from 'react';

import Utils from '../general/utils';
import NewsService from '../services/NewsService'; 

import NewsList from '../components/NewsList'; 

export default class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: [],
            pageNo: 1
        };

        this.params = this.props.match.params; 
        this.loadMore = this.loadMore.bind(this);
    };

    getNews(pageNo) {   
        NewsService
            .getCategoryNewsSpecific(pageNo, this.params.category)
            .then((response) => response.json())
            .then((data) => {

                let news = Utils.mapApiResponseToNewsForList(data);
                this.setState({
                    newsList: [
                        ...this.state.newsList,
                        ...news
                    ]
                }); 
            })
            .catch((error) => console.log("Hata:" + error)); 
    }

    loadMore(pageNo) { 
        this.getNews(pageNo);
    }

    componentDidMount() {
        this.getNews(1);
    }

    render() {
        const list = this.state.newsList; 
 
        return (
            <Fragment>
                <NewsList News={list} Type="Wide" LoadMoreAction={this.loadMore} /> 
            </Fragment>
        );
    }
}
