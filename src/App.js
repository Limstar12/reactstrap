import Carousel from './Carousel';
import Navi from './Navi';
import Gallery from './Gallery';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App"> 
    <Navi></Navi>
       <Carousel></Carousel>
       <Gallery propid = 'review' prptitle='사용후기' propfolder='review'></Gallery>
       <Gallery propid = 'gallery'prptitle='갤러리' propfolder='gallery'></Gallery>
    </div>
  );
}

export default App;
