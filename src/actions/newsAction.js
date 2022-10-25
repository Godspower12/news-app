import axios from 'axios';
import { NewApi } from '../components/newsApi';


export const loadNews = () => async (dispatch) => {
   // Fetching news
   const newsData = await axios.get(NewApi());

   dispatch({
       type: "FETCH_NEWS",
       payload: {
        news: newsData.data.results

       }  
         
       
   })
}
