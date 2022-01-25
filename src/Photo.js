import React, {Component} from 'react';

class Photo extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <section id = "pt" className='container'>
                <div className = 'd-mb-flex text-center '> 
                    <h3 id = '' className ='mt-3 mb-3'>{this.props.prptitle}</h3>
                    <ul className ='flex-grow-1 d-flex '>
                        <li className='col-4 border'>
                            <img src='./photo/photo1.jpg' className='img-fluid' style={{width : 300, height : 300}}/>
                        </li>
                        <li className='col-4 border'>
                            <img src='./photo/photo2.jpg' className='img-fluid' style={{width : 300, height : 300}}/>
                        </li>
                        <li className='col-4 border'>
                            <img src='./photo/photo3.jpg' className='img-fluid'style={{width : 300, height : 300}}/>
                        </li>


                    </ul>
                </div>

            </section>
        )
    }
}

export default Photo;