import React, { Component } from 'react'

export class navBar extends Component {
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
      
    render() {
        return (
            <div  id="navBar" className="rect-border" style={styles.navBar}>
            
            </div>
        )
    }
}

const styles = {
    navBar: {
    }
  }
