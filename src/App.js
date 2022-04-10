
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home'
import Header from "./components/header";
import NewsDetails from './components/NewsDetails';



 function App() {

return (
<div>
  <Header/>
  <Routes>
      <Route exact path='/' element={<Home/>}/>
     <Route path='/:id' element={<NewsDetails/>}/>
     
   </Routes>

</div>
   )
};

 
export default App;


  



