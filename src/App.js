import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Header from "./components/header";
import NewsDetails from './components/NewsDetails';
import styled from 'styled-components';


 function App() {
    
   
   
return (
<Main>
  <Header/>
  <Routes>
      <Route exact path='/' element={<Home/>}/>
     <Route path='/:id' element={<NewsDetails/>}/>
     
   </Routes>

</Main>
   )
};


const Main = styled.div`
   box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-top:-10px;
    width: 100vw;
    height: 100%;
    overflow: hidden;


    /* mobile screen */
        @media(max-width: 375px) and (max-width: 425px)  {
            width: 100%;
            height: 100%;
         
    }
`; 
 
export default App;


  



