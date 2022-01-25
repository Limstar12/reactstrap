import React,{Component} from 'react';
import { UncontrolledCarousel } from 'reactstrap';



const items = [
    {
      src : './banner/img11.jpg',
      altText: 'Slide 1'
    },
    {
      src : './banner/img12.jpg',
      altText: 'Slide 2'
    },
  ]

  class Carousel extends Component{
    constructor(prop){
        super(prop);
        this.state = {

        }
    }

    render(){
        return(
          
    <UncontrolledCarousel items={items} className=' w-75 rounded mx-auto d-block carousel-dark'></UncontrolledCarousel>
    
    
        )
    }
}

export default Carousel;







