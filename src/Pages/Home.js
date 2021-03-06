import React, {Component, Fragment} from 'react';

import Utils from '../general/utils';
import NewsService from '../services/NewsService'; 

import NewsList from '../components/NewsList'; 
import NewsListTemplate1 from '../components/NewsListTemplate1';
import NewsListTemplate2 from '../components/NewsListTemplate2';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: []
        };

        this.loadMore = this.loadMore.bind(this);
    };

    loadMore(pageNo) { 
        this.getNews(pageNo);
    }

    getNews(pageNo) {
        NewsService
            .getCategoryNews(pageNo)
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

    getHomeNews() {
        // İlk sayfa haberlerini çeker
        NewsService
            .getCategoryNews(1)
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
            .then(() => {

                // İkinci sayfa haberlerini de çekerek listeye ekler
                NewsService
                    .getCategoryNews(2)
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
            })
            .catch((error) => console.log("Hata:" + error)); 
    }

    componentDidMount() {
        this.getHomeNews(); 
    }

    render() {
        const list1 = (this.state.newsList || []).slice(0, 2);
        const list2 = (this.state.newsList || []).slice(2, 14); 
        const list3 = (this.state.newsList || []).slice(14); 
 
        return (
            <Fragment>
                <div className="section">
                    <div className="container">
                        <NewsListTemplate1 News={list1} />
                        <NewsListTemplate2 News={list2} />
                    </div>
                </div> 

                <NewsList News={list3} LoadMoreAction={this.loadMore} CurrentPage={2} /> 
            </Fragment>
        );
    }
}
