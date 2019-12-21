import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Menu } from './menu'
import { Content }  from './content'
import './index.css'

var lastCall = new Date()

class Main extends React.Component {
  state = { contentState: null }

  
  followCursor = (function() {
    //XXX Make it follow you only when the curser in #navBar
    var s = document.createElement('div');
    s.style.position = 'absolute';
    s.style.margin = '0';
    s.style.padding = '5px';
    s.style.border = '2px solid red';
    s.style.borderRadius = '50%';
    s.style.backgroundColor = "red"
    
    
    return {
      init: function() {
        document.body.appendChild(s);
      },
      
      run: function(e) {
        e = e || window.event;
        var bar = document.getElementById("navBar")
        if (e.clientY < bar.offsetHeight + 16 && e.clientY > 30) {
          if (e.clientX < window.innerWidth - 30 && e.clientX > 30) {
            s.style.left  = (e.clientX - 5) + 'px';
            s.style.top = (e.clientY - 5) + 'px';
            //this.makeItRainBitch(e.clientX, e.clientY)
            var rd = document.createElement('div')
           
            rd.style.position = 'absolute'
            rd.style.height = '0.8vh'
            rd.style.width = '0.08vh'
            //rd.styleborderLeft = '1px solid #BFF4F7'
            rd.style.left = (e.clientX - 5) + 'px';
            rd.style.top = (e.clientY - 5) + 'px';
            rd.style.backgroundColor = "#28628f"
            
            if (new Date() - lastCall > 100) {
              document.body.appendChild(rd);
              var rdAnim = setInterval(function(){ 
                rd.style.top = (parseInt(rd.style.top) + 10) + "px"
                if (parseInt(rd.style.top) > window.innerHeight - 20) {
                  clearInterval(rdAnim)
                  rd.remove()
                }
              }, Math.floor(Math.random() * 125) + 30
              )

              lastCall = new Date()
            }
          } 
        }
      }
    }
  }());
        makeItRainBitch(x, y) {
          
        }

  componentDidMount() {
      this.followCursor.init();
      document.body.onmousemove = this.followCursor.run; // Mouse move
  }
  
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
  
  render() {
    return (
      <html>
        <Helmet>
          <title>My Page</title>
        </Helmet>
        <body>
          {/* kendi ozel dosyasi olsun navBar */}
          <div id="navBar" className="rect-border" style={{ display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#f4f4f4"}}>
            <h1 style={{ marginLeft: "15%", fontSize: '2.4vw'}}>This <a href="https://www.xnxx.com">webside</a> is a creaton of coffee and some free time</h1>
          </div>
          <div id="container" class="container" style={styles.container}>
            <Content contentState={this.state.contentState} style={{ backgroundColor: "white"}} info={"aminakodumun front-endi"}/>
            <Menu toggleFunc={this.toggleFunc}/>
          </div>
          <div id="bottomArea" style={{
            borderTop: '0.3vh solid #232020',
            marginTop: "1vh",
            height: "21vh",
            fontSize: '3vw',
            textDecoration: 'underline',
          }}>
          <div style={{
            display: "flex",
            alignItems: "Left",
            flexDirection: "column",
            height: "100%",
            flex: "flex-shrink",
            marginLeft: "5%"
          }}>
            <p style={{ height: "10%", marginTop: "5%", fontSize: '2vw'}}>In case of emergency contact:</p>
              <ol style={{listStyle: "square", padding: "1vh", fontSize: '1.5vw', paddingBottom: '2vh'}}>
                <li><a href="tel:+1 504 603 8251"> +1 504 603 8251 </a></li><br/>
                <li><a href="mailto: mirkan.amazon@gmail.com"> mirkan.amazon@gmail.com</a></li><br/>
                <li><a href="https://www.facebook.com/kadriyedemirkankilic" target="_blank" rel="noopener noreferrer">my mom</a></li>
              </ol>
          </div>
          </div>
        </body>
      </html>
    );
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
