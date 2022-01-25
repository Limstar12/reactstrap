import logo from './logo.svg';
import React,{Component} from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import './Navi.css';


class Navi extends Component{
    constructor(prop){
        super(prop);
        this.state = {
            naviState : false, 
        }
    }


    toggle = (e) =>{
    
        this.setState({
            naviState : !this.state.naviState
        })
    }


    render(){
        return(
            <Navbar className='d-flex  w-75'>
                <NavbarBrand tag='h1'>
                    <a href='/'>
                        <img src={logo} style={{height : 80}}/>
                    </a>
                </NavbarBrand>
                <button data-state={this.state.naviState} onClick={(e)=> this.toggle(e)} id = 'navToggler' className= 'navbar-toggler d-block d-md-none' ></button>
                <Nav data-open={this.state.naviState} className='d-none d-md-flex justify-content-between fw-bold w-75' id = 'gnb' >
                    <NavItem className=''>
                        <NavLink className='text-dark ' href='#about'>
                            제품 소개
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark ' href='#portfolio'>
                            정수기
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark ' href='#gallery'>
                            필터
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark scroll=pag' href='#review'>
                            이벤트
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='text-dark  ' href='#gallery'>
                            고객센터
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        )
    }
}

export default Navi;