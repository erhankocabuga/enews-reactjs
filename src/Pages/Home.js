import React, {Component} from 'react';

import Utils from '../general/utils';
import NewsService from '../services/NewsService';

import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer'; 
import NewsList from '../components/NewsList';

import NewsListTemplate1 from '../components/NewsListTemplate1';
import NewsListTemplate2 from '../components/NewsListTemplate2';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: []
        };
    };

    getNews() {
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

                console.log("this.state.newsList", this.state.newsList);
            })
            .catch((error) => console.log("Hata:" + error));

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

                console.log("this.state.newsList", this.state.newsList);
            })
            .catch((error) => console.log("Hata:" + error));
    }

    componentDidMount() {
        this.getNews();
    }

    render() {
        const newsTop = (this.state.newsList || []).slice(0, 2);
        const list = (this.state.newsList || []).slice(2, 14);
        
        return (
            <div>
                <Header/>
                {/* <NewsListTemplate1 News={newsTop} />
                <NewsListTemplate2 News={list} /> */}

                <NewsList/> 
            </div>
        );
    }
}
