import styled from 'styled-components'
import Cnn from "../images/cnn.jpg";
import { useParams } from 'react-router';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
const NewsDetails = () => {
    const {news} = useSelector((state) => state.news);
    console.log(news);
    const newsId = useParams();
    const newDetails = news.filter(x=>x.id == newsId.id)
    const newsData = newDetails[0];
    
  return(
          
            <DetailsStyle> 
         <h2>{newsData.title}</h2>
        <img src= {newsData.urlToImage ? newsData.urlToImage : Cnn} alt = 'newsDetails'/>
        <p>{newsData.description}</p>
        <Link to = 'newsApp/'><button>Go back</button></Link> 
        </DetailsStyle>
          
        
    );
};


const DetailsStyle = styled.div`
    display: flex;
    margin-left: 5%;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    text-align: center;
button {
  background: black;
  color: white;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 5px;
}
button:hover {
  background: yellow;
  color: black;
}
    img {
      max-width: 60%;
      height: 30rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-left: 20%;
    }

    @media(max-width: 600px) {

        };

        @media(max-width: 844px) {
        min-width: 100%;
        height: 70%;
        display: flex;
        justify-content: center;
       
       
        img {
            width: 50%;
            height: 70%;

        }
        
        }

        /* mobile screen */
        @media(max-width: 390px) {
            /* background: red; */
            /* margin-left: -40%; */
            width: 50%;
           h3 {
              font-size: 10px;
              margin-right: 15%;
           } 
           
        }

        @media(max-width: 414px) {
        margin-left: ;
    
        }
`;


export default NewsDetails;