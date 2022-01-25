import React,{Component} from 'react';
// import {Card, CardImg, CardBody, CardTitle} from 'reactstrap'
// 리액트스트랩으로 할 필요가 없는 애들은 굳이 안써도 됨
import Listthumb from './Listthumb';

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state = {
            imgfolder : this.props.propfolder,
           // propid : this.props.prpid,
           // prptitle : this.props.prptitle,
        // }
     //가공될 것을 계산해서 세팅해 놓는다.
    }
    }


    render(){
        return(
            <section id = {this.props.propid} className='container-lg'>
                <div className = 'd-mb-flex text-md-center'> 
                {/* 로우와 컨테이너는 같이 있으면 안됨 둘 다 마진, 패딩을 가지고 있어서...  */}
                    <h3 id = 'sub' className ='mt-3 mb-3'>{this.props.prptitle}</h3>
                    <ul className ='flex-grow-1 row m-0 '>
                        <Listthumb className = 'm-1' col='col-md-12' colimg="eventbanner1.jpg" imgsrcfolder={this.state.imgfolder}></Listthumb>
                        {/* <li className='col-6'>
                            <img src='./review/1.jpg' className='img-fluid'/>
                        </li> */}
                        <Listthumb className = 'm-1' col='col-md-12' colimg="eventbanner2.jpg" imgsrcfolder={this.state.imgfolder}></Listthumb>
                        {/* <Listthumb col='col-md-3' colimg="3.jpg" imgsrcfolder={this.state.imgfolder}></Listthumb> */}


                    </ul>
                </div>

            </section>

        )
    };
}

export default Gallery;