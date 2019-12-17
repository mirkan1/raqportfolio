﻿import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Menu } from './menu'
import { Content }  from './content'
import './index.css'

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
          }

        }
        //this.getMouseCoords(e);
      }
    };
  }());

  componentDidMount() {
      this.followCursor.init();
      document.body.onmousemove = this.followCursor.run; // Mouse move
  }
  
  toggleFunc = e => {
    // XXX aynisina ikinciye basinca olmasin
    // alan kalsin, sadece yazilar kaybolsun geri gelsin
    var id = e.target.id
    if (id === "aboutme") {
      var content = document.getElementById("content");
      content.style.height = "150vh"
    } else {
      var content = document.getElementById("content");
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
          <div id="navBar" className="rect-border" style={styles.navBar, { backgroundColor: "#f4f4f4"}}></div>
          <div id="container" class="container" style={styles.container}>
            <Content contentState={this.state.contentState} style={{ backgroundColor: "white"}} info={"aminakodumun front-endi"}/>
            <Menu toggleFunc={this.toggleFunc}/>
          </div>
        </body>
      </html>
    );
  }
  }
  
const styles = {
  container: {
  },
  rightSide: {
  },
  
  navBar: {
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
