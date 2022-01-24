
import React, {Component} from "react";

class Listthumb extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgallsrc : "./"+this.props.imgsrcfolder+"/"+this.props.colimg,
            
        }
    }
    render(){
        return(
            <li className={this.props.col}>
                <a href='/'>
                    <img src={this.state.imgallsrc} className='img-fluid'/>
                     </a>
            </li>
        )

}
}

export default Listthumb;