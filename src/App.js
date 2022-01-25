import Carousel from './Carousel';
import Navi from './Navi';
import Gallery from './Gallery';
import Photo from './Photo';
import './Carousel.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App"> 
    <Navi></Navi>
       <Carousel></Carousel>
       <Gallery propid = 'review' prptitle='' propfolder='review'></Gallery>
       <Photo propid = 'gallery'prptitle='B.E.S.T 포토 리뷰' propfolder='photo'></Photo>
    </div>
  );
}

export default App;
