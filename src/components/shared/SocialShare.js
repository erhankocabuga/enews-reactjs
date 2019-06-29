import React, { Component } from 'react';

class SocialShare extends Component {
    constructor(props) {
        super(props);

        this.pageUrl = location.protocol + '//' + location.host + this.props.contentUrl; 
        this.contentTitle = "Erhan News - " + this.props.contentTitle;
    }
    

    socialShare(type) {
        let shareUrl = "";
        console.log("sharetype", type);
        switch(type) {
          case 'facebook':
            shareUrl = 'https://www.facebook.com/sharer.php?u={url}';
            break;
          case 'twitter':
            shareUrl = 'https://twitter.com/intent/tweet?url={url}&text={title}';
            break;
          case 'googleplus':
            shareUrl = 'https://plus.google.com/share?url={url}&text={title}';
            break;
          case 'pinterest':
            shareUrl = 'http://pinterest.com/pin/create/link/?url={url}';
            break;
          case 'linkedin':
            shareUrl = 'https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}';
            break;
          default:
            break;
        }
    
        if(shareUrl) {
          shareUrl = shareUrl
                .replace(/{title}/g, this.contentTitle)
                .replace(/{url}/g, this.pageUrl);
          console.log("shareUrl", shareUrl);
          window.open(shareUrl,'Share','width=600,height=400,toolbar=0,menubar=0,location=0,status=0,scrollbars=0,resizable=1,left=0,top=0');
        }
    }

    render() {
        return (
            <div className="post-shares sticky-shares">
                <a href="#" className="share-facebook" onClick={() => this.socialShare('facebook') }><i className="fa fa-facebook"></i></a>
                <a href="#" className="share-twitter" onClick={() => this.socialShare('twitter') }><i className="fa fa-twitter"></i></a>
                <a href="#" className="share-google-plus" onClick={() => this.socialShare('googleplus') }><i className="fa fa-google-plus"></i></a>
                <a href="#" className="share-pinterest" onClick={() => this.socialShare('pinterest') }><i className="fa fa-pinterest"></i></a>
                <a href="#" className="share-linkedin" onClick={() => this.socialShare('linkedin') }><i className="fa fa-linkedin"></i></a>
                <a href="#" onClick={() => this.socialShare('mail') }><i className="fa fa-envelope"></i></a>
            </div> 
        );
    }
}

export default SocialShare;