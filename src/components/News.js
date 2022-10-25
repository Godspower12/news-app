import {useState} from 'react';
import Cnn from "../images/cnn.jpg";
import styled from 'styled-components';
import uuid from "react-uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faUnLiked } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faLiked } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const News = ({title, image, id}) => {
  

    const [isLiked, updateLike] = useState(true);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 100));


  return (
    
            <NewsStyle>
          <NavLink to= {`/${id}`}>
               <div className="text-contents">
               <h3>{title}</h3>
               </div>
               </NavLink> 
               <LikeStyle>
                <img src={image || Cnn} alt="img" />
                
               <ul>
               <li>

                <FontAwesomeIcon color='red'
                icon={isLiked ? faUnLiked : faLiked}
                onClick={() => 
                    {
                        if(isLiked) {
                            setLikes(likes + 1);
                            updateLike(!isLiked);
                        }else {
                            setLikes(likes - 1);
                            updateLike(!isLiked)
                        }
                    }
                    }
                    
                    />
                    </li>
                    <li>{likes}</li>
                </ul>
                
                </LikeStyle>
                   
                

            </NewsStyle>
               

        )
    }
    

    const NewsStyle = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
    max-width: 70%;
    padding: 5%;
    border-radius: 10%;
    transition: 0.6s ease;
           :hover {
            transform: scale(1.1);
           box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
}
            }
    
         h3 {
            width: 150%;
            cursor: pointer;
         }   

        
            
         }
         a{ 
             color: black;
             text-decoration: none;
         }   
        
        p{
            margin-left: 30px;
        }

        img {
            max-width: 30%
        }
    

        /* mobile screen */

        @media(max-width: 425px) {
            width: 100%;
            margin-left: -40px;

           h3 {
              font-size: 10px;
           } 
           img {
            max-width: 50%;
            margin-left: 60px;
        
    }
        @media(max-width: 375px) {
            // width: 20%;
            margin-left: -50px;

           h3 {
              font-size: 10px;
           } 
           img {
            max-width: 50%;
            margin-left: 60px;
        
    }
    `;




const LikeStyle = styled.div`
display: flex;
justify-content: center; 
align-items: center;
ul{
    margin-top: 90%;
    margin-left: -20%;
    display: flex;   
    list-style: none;
    text-align: center;
}
li{
    
    margin-left: 5px;
    
}
       

`;

export default News;



































