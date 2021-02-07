import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './images/netflix-logo.png';
import searchIcon from './images/search.png';
import bellIcon from './images/bell.PNG';
import giftIcon from './images/gift.PNG';
import profileIcon from './images/profile.png';
import caretIcon from './images/caret.png'
import rightPointer from './images/right-p.png';
import exclamaiotn_point from './images/exclamation.png';
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
        height: window.innerWidth *0.48,
        width: window.innerWidth-50
    })

    React.useEffect(()=>{

        function handleResize(){
            setDimenstions({
                height:window.innerWidth *0.48,
                width: window.innerWidth-50
            })
        }
        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    })




    return(
        <div style={{width:dimensions.width,height:dimensions.height}} className="drama-image"/>
    );
    
}


function Description(){
    const [state] = React.useState({
        description:"암살 목표는 중학교 교사의 탈을 쓴 괴물. 암살자는 교사의\n반 학생 전체. 하지만 학생들은 선생님과 점점 가까워진다.\n마음을 주고받은 상대를 암살하는 일은 가능할까.",
    });

    const des_array = state.description.split('\n').map((line)=>{
        return <div>{line}</div>
    });


    return(
        <div className="contents-box">
            <div className="right-side">
                <img className="drama-title" src="https://occ-0-395-988.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVn-tQq5sE2XRPhqFqoWiDssdKSp0UUzTC6pDauMHd1sXAf3bL-G3P82-0phmofkqneGGtnxTOJZ5qPBiaWVwuF8gKSo8ifv8WTv.webp?r=150" alt="image"></img>
                <div className="description-sentence">{des_array}</div>
                <div className="button-box">
                    <button className="play-button" type="button" ><img className="right-pointer" alt="image" src={rightPointer}/><h3 className="play-word">재생</h3></button>
                    <button className="detail-button" type="button" ><img className="exclamation-point" alt="image" src={exclamaiotn_point}/><h3 className="detail-word">상세 정보</h3></button>
                </div>
            </div>
            <div className="left-side">
                <div></div>
            </div>
        </div>
        
    );
}

function MovieSlider(props){

    const [state,setState]=React.useState(
        {
            width:window.innerWidth,
            height:window.innerHeight,
            src: "https://occ-0-395-988.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR2YTuQpIDhSXGf-oG9Hkm_xi18oLJ1CENwr0x_kQFpBm8VMkdRTHdNR2lmaMFg3YfbXU29H_zNUefJ28ew9h0FLMHo.webp?r=d2b",
            currentIdx:0,
            marginTop:120,
        }
    )
    
    React.useEffect(()=>{
        console.log("prop key = "+props.Ckey);
        decideKey(props.Ckey);
        function handleResize(){
            setState({
                height:window.innerHeight,
                width: window.innerWidth,
                src:state.src,
            })
        }
        window.addEventListener('resize',handleResize);
        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    })

    
    const makeListOfVideos = [...Array(props.indexCount)].map(()=>{
            return(
                <li><img style={{width:state.width/6 - 27 +"px",height:(state.width/6-30)*0.57 +"px"}} src={state.src}/></li>
            )
        });
       
    

    const decideKey = (key)=>{
        console.log("key = "+ key);
        setState({
            height:window.innerHeight,
            width: window.innerWidth,
            src:state.src,
            currentIdx:props.currentIdx[key],
            marginTop:102,
        })
        if(key != 0){
            setState({
                height:window.innerHeight,
                width: window.innerWidth,
                src:state.src,
                currentIdx:props.currentIdx[key],
                marginTop:22,
            })
        }
    }

    return(
        <div className="slider" style={{width:state.width,marginTop:state.marginTop + "px"}}>
            
            <span className="slider-title">{props.title}</span>
            <div className="slide-wrapper" id="slide-wrapper" style={{width:state.width,height:(state.width/6-30)*0.6+30 +"px"}}>
                <ul className="slides" style={{left:"-"+((state.currentIdx)*(state.width-137)) + "px"}} >
                    {makeListOfVideos}
                </ul>
            </div>
        </div>
    );//style={{left:`-${state.width - 27}px`}}
}

function MoviesliderButton(props){

    const [state,setState] = React.useState({
        width:window.innerWidth,
        height:window.innerHeight,
        clientHeight:(window.innerWidth/6-30)*0.6+15,
    });

    

    React.useEffect(()=>{
        function handleResize(){

            setState({
                height:window.innerHeight,
                width: window.innerWidth,
                clientHeight:(window.innerWidth/6-30)*0.6+15,
            })
           
        }
        window.addEventListener('resize',handleResize);
        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    })

    return(
        <div>
            <button onClick={props.LonClick} style={{transform: `translateY(-${state.clientHeight}px)`,height:`${state.clientHeight-19}px`}} className="move-left"></button>
            <button  onClick={props.RonClick} style={{left:state.width-78+"px",transform: `translateY(-${state.clientHeight}px)`,height:`${state.clientHeight-19}px`}} className="move-right"></button>
        </div>
    );
}




class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            width:window.innerWidth,
            height:window.innerHeight,
            currentIdx: Array(12).fill(0),
            buttonCount: 12,
            titles:["신준호 님이 시청 중인 콘텐츠","Netflix 인기 콘텐츠"],
        }
        this.RClickMovieSlider = this.RClickMovieSlider.bind(this);
        this.LClickMovieSlider = this.LClickMovieSlider.bind(this);
    }

    RClickMovieSlider(idx){
        const currentIdx = this.state.currentIdx.slice();
        if(currentIdx[idx] < this.state.buttonCount/6-1){
            currentIdx[idx] += 1; 
        }else{
            currentIdx[idx] = 0;
        }
        this.setState({
            currentIdx: currentIdx,
        })

    }

    LClickMovieSlider(idx){
        const currentIdx = this.state.currentIdx.slice();
        if(currentIdx[idx] > 0){
            currentIdx[idx] -= 1; 
        }else{
            currentIdx[idx] = this.state.buttonCount/6-1;
        }
        this.setState({
            currentIdx: currentIdx,
        })

    }

    render(){
        return(
            <div className="total-screen">
                <header>
                    <Navi/>
                </header>
                <DramaImage/>
                <div className="contents">
                    <Description/>   
                    <div className="age-box">
                        <div className="empty"></div>
                        <div className="age-limit"><div className="label"><div className="age">15+</div></div></div>
                    </div> 
                </div>
                <MovieSlider title={this.state.titles[0]} Ckey={0} currentIdx={this.state.currentIdx} indexCount={this.state.buttonCount}/>
                <MoviesliderButton LonClick={()=>this.LClickMovieSlider(0)} RonClick={()=>this.RClickMovieSlider(0)}/>
                <MovieSlider title={this.state.titles[1]} Ckey={1} currentIdx={this.state.currentIdx} indexCount={this.state.buttonCount}/>
                <MoviesliderButton LonClick={()=>this.LClickMovieSlider(1)} RonClick={()=>this.RClickMovieSlider(1)}/>
                <footer>

                </footer>

                
            </div>
        );
    }
}
//<button className="move-right"></button>


ReactDOM.render(
    <Main/>,
    document.getElementById('navDiv')
);
  