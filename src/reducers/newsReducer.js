

import uuid from "react-uuid";
const initState = {
    news: [],
    
    
}


const NewsReducer = (state = initState, action) => {
 switch(action.type) {
     case "FETCH_NEWS" :
         return {
             ...state,
             news: action.payload.news.map(s => ({...s, id: uuid()}))
         };

         default :
         return {...state}
 }
};
export default NewsReducer;


// 




