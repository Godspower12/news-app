
import  {useEffect} from 'react';
import { loadNews } from '../actions/newsAction';
import {useDispatch, useSelector} from 'react-redux';
// Components 
import News from './News';
import "./loaderStyles.css"
//styles
import styled from 'styled-components';
import Footer from './Footer';

const Home = () => {
  const {news} = useSelector(state => state.news);
  console.log(news)

  const dispatch = useDispatch();
  useEffect(()=> {
      dispatch(loadNews())
   }, []);
 

    return(
          <div>   
        <NewsList>
       <h1>Trending News</h1> 
           <NewStyle>
              { news.length == 0 ?
              <div className="loading-container">
                <div className="loading">Loading&#8230;

              </div>

            </div> : news.map(newz => (
                <News title = {newz.title} description = {newz.description} id = {newz.id} key = {newz.id} 
                image = {newz.image_url} />) )}
            </NewStyle> 
            </NewsList> 
        <div className="footer">
          <Footer/>
        </div>
                </div> 
    )
};

const NewsList = styled.div`
padding: 0rem 5rem;
margin-bottom: 30px;
h2 {
  padding : 5rem 0rem;
}
h1 {
  text-align : center;
}
`

const NewStyle = styled.div`
 /* min-height: 80vh; */

display: grid;
grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
align-items: center;
margin-left: 10%;
h1 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh
}
`;
export default Home;



