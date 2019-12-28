import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Menu } from './menu'
import { Content }  from './content'
import './index.scss'

var lastCall = new Date()

class Main extends React.Component {
  state = { contentState: null}

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
  }
  //================================
  
  toggleFunc = e => {
    // XXX aynisina ikinciye basinca olmasin
    // alan kalsin, sadece yazilar kaybolsun geri gelsin
    var id = e.target.id
    var content = document.getElementById("content");
    if (id === "aboutme") {
        content.style.height = "150vh"
    } else {
        content.style.height = "84vh"
    }
    this.setState({ contentState: id })

    document.getElementById("content").style.transition = "all 0s ease"
    document.getElementById("content").style.opacity = 0

    setTimeout(function(){ 
        document.getElementById("content").style.opacity = 1
        document.getElementById("content").style.transition = "all 1s ease"
    }, 500);
            
  }  

  renderFire = () => {
    
    if (document.getElementsByClassName('fire').length > 0) {
      ReactDOM.unmountComponentAtNode(document.getElementsByClassName('fire')[0]) 
  }
    var arr = [];
    for (let i = 0; i< 30 + Math.floor(Math.random() * 20) ; i++) {
        arr.push(i);
    }
    var renderedOutput = arr.map((item) => 
        <div className="particle" style={{ marginLeft: Math.random() * 5 + "vw"}} key={item.toString()}></div>)
    var max = 7
    var min = 3
    renderedOutput = (
        <div 
            className="fire" 
            style={{ position: "absolute", zIndex: 1, 
            marginTop: window.innerHeight / 10 * (Math.random() * ((max - min) + 1)) + min + "px", 
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
                <title>My Page</title>
            </Helmet>
            <div id="baba"></div>
                <div id="navBar" className="rect-border" style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#f4f4f4"}}>
                    <h1 style={{ marginLeft: "15%", fontSize: '2.4vw' }}>This <a href="https://www.xnxx.com">webside</a> is a creaton of coffee and some free time</h1>
                </div>
            <div id="container" className="container" style={styles.container}>
                <Content contentState={this.state.contentState} style={{ backgroundColor: "white"}} info={"aminakodumun front-endi"}/>
                <Menu toggleFunc={this.toggleFunc} onClick={
                    this.renderFire
                }/>
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
