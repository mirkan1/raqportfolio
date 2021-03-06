﻿import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Menu } from './menu'
import { Content }  from './content'
import './index.scss'

var lastCall = new Date()

class Main extends React.Component {
  state = {contentState: null}

  followCursor = (function() {
    return {
      init: function() {
        //document.body.appendChild(s);
      },
      
      run: function(e) {
        e = e || window.event;
        var bar = document.getElementById("navBar")
        if (e.clientY < bar.offsetHeight + 16 && e.clientY > 30) {
          if (e.clientX < window.innerWidth - 30 && e.clientX > 30) {
            var rd = document.createElement('div')
           
            rd.style.position = 'absolute'
            rd.style.height = '0.8vh'
            rd.style.width = '0.08vh'
            rd.style.left = (e.clientX - 5) + 'px';
            rd.style.top = (e.clientY - 5) + 'px';
            rd.style.backgroundColor = "#28628f"
            
            if (new Date() - lastCall > 100) {
              document.body.appendChild(rd);
              var rdAnim = setInterval(function(){
                rd.style.top = (parseInt(rd.style.top) + 10) + "px"
                if (parseInt(rd.style.top) >= window.innerHeight - 10) {
                  
                  if (document.getElementsByClassName("fire").length > 0 && document.getElementsByClassName("particle").length > 0) {
                    var fire = document.getElementsByClassName("fire")[0]
                    if (parseInt(rd.style.left.split("px")[0]) > parseInt(fire.style.marginLeft.split("px")[0]) && parseInt(rd.style.left.split("px")[0]) < fire.offsetWidth + parseInt(fire.style.marginLeft.split("px")[0])) {
                      fire.removeChild(fire.childNodes[document.getElementsByClassName("particle").length - 1])
                    }
                  }
                  rd.remove()
                  clearInterval(rdAnim)
                }
              }, Math.floor(Math.random() * 125) + 10
              )

              lastCall = new Date()
              console.log(this)
              if ( document.getElementsByClassName('fire')[0] !== undefined) {
                if (document.getElementsByClassName('fire')[0].children.length <= 1) {
                  ///// burasi ////
                  var navBar = document.getElementById('navBar').children[0]
                  navBar.innerHTML = 'Now you can access the <a href="https://github.com/mirkan1/raqportfolio/tree/master/src">source code</a> of this website'
                  navBar.style.marginLeft = "15%"
              }
            }
            }
          } 
        }
      }
    }
  }())

  //================================
  componentDidMount() {
    this.followCursor.init();
    document.body.onmousemove = this.followCursor.run; // Mouse move
    var f = document.getElementById("blinkyBlink");
    setInterval(function() {
      f.style.backgroundColor = (f.style.backgroundColor.toString() === 'rgb(226, 40, 34)' ? '' : 'rgb(226, 40, 34)');
   }, 500)
}
  
  //================================
  
  toggleFunc = e => {
    // XXX aynisina ikinciye basinca olmasin
    // alan kalsin, sadece yazilar kaybolsun geri gelsin
    var id = e.target.id
    // var content = document.getElementById("content");
    // if (id === "bio") {
    //     content.style.height = "320vh"
    //   } else if (id === "myprojects") {
    //     content.style.height = "225vh"      
    // } else {
    //     content.style.height = "84vh"
    // }
    this.setState({ contentState: id })

    document.getElementById("content").style.transition = "all 0s ease"
    document.getElementById("content").style.opacity = 0

    setTimeout(function(){ 
        document.getElementById("content").style.opacity = 1
        document.getElementById("content").style.transition = "all 1s ease"
    }, 500);      
  }   

  renderFire = () => {
    for(let i=0; i<100; i++)
    { //clears blinking interval
      window.clearInterval(i);
      var f = document.getElementById("blinkyBlink")
      f.style.backgroundColor = (f.style.backgroundColor.toString() === 'rgb(226, 40, 34)' ? '' : '');
    }
    
    if (document.getElementsByClassName('fire').length > 0) {
      ReactDOM.unmountComponentAtNode(document.getElementsByClassName('fire')[0])
    }
    var arr = [];
    for (let i = 0; i< 30 + Math.floor(Math.random() * 20) ; i++) {
        arr.push(i);
    }
    var renderedOutput = arr.map((item) => 
        <div className="particle" style={{ marginLeft: Math.random() * 5 + "vw"}} key={item.toString()}></div>)

    renderedOutput = (
        <div 
            className="fire" 
            style={{ position: "absolute", zIndex: 1, 
            bottom: 0,//marginTop: window.innerHeight / 10 * 7.2 + "px", 
            marginLeft: Math.floor(Math.random() * window.innerWidth / 10 * 6) + "px"}}> 
            {renderedOutput} 
        </div>
      )
    ReactDOM.render(renderedOutput, document.getElementById('baba'))
  }
  
  render() {
    return (
        <div>
            <Helmet>
                <title>Mirkan Kilic - Freelancer from Turkey</title>
            </Helmet>
            <div id="baba"></div>
                <div id="navBar" className="rect-border" style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#f4f4f4"}}>
                    <h1 style={{ marginLeft: "35%", fontSize: '2.4vw' }}>Welcome to my website{/*The one who extinguish the fire, you will be rewarded*/}</h1>
                </div>
            <div id="container" className="container" style={styles.container}>
                <Content contentState={this.state.contentState} info={"amk"}/>
                <Menu toggleFunc={this.toggleFunc} onClick={this.renderFire}/>
            </div>
        </div>
    )
  }
  }
  
const styles = {
  myFont: {
    fontSize: '3vw',
    textDecoration: 'underline',
  },
  container: {
  },
  rightSide: {
  },
  
  navBar: {
    backgroundColor: "#f4f4f4"
  }
}
 
// ========================================

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

// TO CREATE: npx create-react-app my-app
// TO RUN: npm start 

// Mouse'dan elma, armut bir seyler dussun
// ya da tikladigi menu butonu yere dussun

// rfc [dene bunu component yaratiyor bak]
// rce class based component
