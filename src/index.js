import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/netflix-logo.png';
import searchIcon from './images/search.png';
import bellIcon from './images/bell.PNG';
import giftIcon from './images/gift.PNG';
import profileIcon from './images/profile.png';
import caretIcon from './images/caret.png'
import './index.css';

class NavButton extends React.Component{
    render(){
        return (
            <a className="navigation-button" href="https://www.naver.com"><small>{this.props.value}</small></a>
        );
    }
}

class IconButton extends React.Component{
    render(){
        return(
            <input className="icons" type="image" src={this.props.src} value="클릭"></input>
        );
    }
}



class Navi extends React.Component{
    constructor(props){
        super(props);
        this.state={
            button_names:['홈','TV 프로그램','영화','NEW! 요즘 대세 콘텐츠','내가 찜한 콘텐츠','다시 보기 콘텐츠'],
            srcs:[searchIcon,bellIcon,giftIcon],
        }
    }

    makeButton(i){
        return(
            <NavButton value={this.state.button_names[i]}/>
        );
    }

    makeIcons(i){
        return(
            <IconButton src={this.state.srcs[i]}/>
        );
    }


    render(){
        return(
            <nav className="navigation">
                <div className="logo-and-word-buttons">
                    <div className="logo">
                        <a href="https://www.naver.com" className="logo-image-atag" ><img alt="logo" className="logo-image" src={logo}></img></a>
                    </div>
                    <div className="word-buttons">
                        {this.makeButton(0)}
                        {this.makeButton(1)}
                        {this.makeButton(2)}
                        {this.makeButton(3)}
                        {this.makeButton(4)}
                        {this.makeButton(5)}

                    </div>
                </div>
                <div className="icon-box">
                    {this.makeIcons(0)}
                    <input className="independent-icon" type="button" value="키즈"></input>
                    {this.makeIcons(2)}
                    {this.makeIcons(1)}
                    <div className="profile-box">
                        <input className="independent-icon" type="image" src={profileIcon} value="클릭"></input>
                        <input className="caret" type="image" src={caretIcon} value="클릭"></input>
                    </div>
                </div>
            </nav>
        );
    }
}


function DramaImage(){
    const [dimensions,setDimenstions] = React.useState({
        height: window.innerHeight,
        width: window.innerHeight
    })

    React.useEffect(()=>{

        function handleResize(){
            setDimenstions({
                height:window.innerWidth *0.5625,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    })




    return(
        console.log(dimensions.height + " , " + dimensions.width),
        <div style={{width:dimensions.width,height:dimensions.height}} className="drama-image"/>
    );
    
}

class Main extends React.Component{
    render(){
        return(
            <div className="total-screen">
                <Navi/>
                <DramaImage/>
            </div>
        );
    }
}



ReactDOM.render(
    <Main/>,
    document.getElementById('navDiv')
);
  