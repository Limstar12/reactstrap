import React,{Component} from 'react';
import { Dropdown, DropdownToggle, DropdownItem } from 'reactstrap';


const item = [
    {
        src: './banner/img1111.jpg',
        altText: 'Slide 1',
    }
  ];


class Subbanner extends Component{
    constructor(prop){
        super(prop);
        this.state = {

        }
    }

    render(){
        return(
          <Dropdown>
              <DropdownToggle>
                  <DropdownItem src = '' href=''>

                  </DropdownItem>
              </DropdownToggle>
          </Dropdown>
    
    
        )
    }
}

export default Subbanner;







