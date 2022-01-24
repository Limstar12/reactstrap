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
        // console.logo('naviState :' +this.state.naviState);
        return(
            <Navbar>
                <NavbarBrand tag='h1'>
                    <a href='/'>
                        <img src={logo} style={{height : 80}}/>
                    </a>
                </NavbarBrand>
                {/* <NavbarToggler data-state={this.state.naviState} onClick={(e)=> this.toggle(e)} id = 'navToggler'></NavbarToggler> */}
                <button data-state={this.state.naviState} onClick={(e)=> this.toggle(e)} id = 'navToggler' className= 'navbar-toggler d-block d-md-none' ></button>
                <Nav data-open={this.state.naviState} className='d-none d-md-flex' id = 'gnb' >
                    <NavItem>
                        <NavLink href='#about'>
                            나의 소개
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='#portfolio'>
                            작품들
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='scroll-page' href='#gallery'>
                            면접제안
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>

        )
    }
}

export default Navi;