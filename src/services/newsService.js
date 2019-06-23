import { AppSettings } from '../general/utils';

const helpers = {
    getCategoryNewsEndpoint = (pageNo) => {
        const ApiUrl = AppSettings.ApiUrl;
        const pathName = "search";
        const params = "api-key=" + AppSettings.ApiKey +
                       "&show-blocks=body" +
                       "&show-fields=thumbnail" +
                       "&section=world|science|technology|football|business|games|environment|culture" +
                       "&page=" + pageNo.toString(); 
    
        return `${apiUrl}/${pathName}?${params.toString()}`;
      },
    
      getNewsDetailEndpoint = (contentUrl) => {
        const apiUrl = AppSettings.ApiUrl; 
        const params = "api-key=" + AppSettings.ApiKey +
                       "&show-blocks=all" +
                       "&show-fields=thumbnail"; 
    
        return `${apiUrl}/${contentUrl}?${params.toString()}`;
      },
    
      getCategoryNews = (pageNo) => {
        const url = this.getCategoryNewsEndpoint(pageNo);
        if(AppSettings.IsDevelopment) {
          console.log("İstek:", url);
        }
        return fetch(url);
      },
    
      getNewsDetail = (contentUrl) => {
        const url = this.getNewsDetailEndpoint(contentUrl);
        if(AppSettings.IsDevelopment) {
          console.log("İstek:", url);
        }
        return fetch(url);
      }
} 

export default helpers;