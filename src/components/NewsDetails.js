import styled from 'styled-components'
import Cnn from "../images/cnn.jpg";
import {useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
const NewsDetails = () => {
   const {news} = useSelector(state => state.news)
    const newsId = useParams();
    const newDetails = news.filter(x=>x.id == newsId.id)
    const newsData = newDetails[0];
    console.log(newsData)
  return(
          
            <DetailsStyle> 
         <h2>{newsData.title}</h2>
        <img src= {newsData.image_url || Cnn} alt = 'newsDetails'/>
        <p>{newsData.description}</p>
        <Link to = '/'><button>Go back..</button></Link>
         
        </DetailsStyle>
          
        
    );
};


const DetailsStyle = styled.div`
    display: flex;
    // margin-left: 5%;
    flex-direction: column;
    justify-content: center;
    max-width: 90%;
    text-align: center;
button {
  background: black;
  color: white;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 5px;
}
button:hover {
  background: red;
  color: white;
}
    img {
      max-width: 60%;
      height: 30rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20%;
    }
    @media (max-width: 425px) {
      img {
       ;
        height: 10rem;
       
      }
    }

`;


export default NewsDetails;