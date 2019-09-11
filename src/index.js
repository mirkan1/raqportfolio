import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Menu extends React.Component {
  componentDidMount() {
    let x = document.getElementsByTagName('li')[0].innerHTML
    console.log(x)
    // bunu al iste sayfalari buna gore cek
    // basit bir brosur sitesi olacak 
    // sonra ise alinacan mirkan kasma yap bi seyler
  }
  render() {
    return (
      <div className="menu-list">
        <ul>
          <li id="aboutme" onClick={this.props.clickedList}  style={{"margin": "0 0 0 0",}}>About me</li>
          <li id="myprojects" onClick={this.props.clickedList} >My projects</li>
          <li id="tag3" onClick={this.props.clickedList} >My past</li>
          <li id="tag4" onClick={this.props.clickedList} >Tag4</li>
          <li id="tag5" onClick={this.props.clickedList} >Tag5</li>
        </ul>
      </div>
    )
  }
}
class Main extends React.Component {
  clickedList(e) {
    let margin = 100
    let id = document.getElementById(e.target.id)
    let paddingInterval = setInterval(
      () => {
        console.log(margin)
        id.setAttribute("style", `padding-top: ${margin}px`)
        //id.setAttribute("style", `margin-right: ${margin}px`)
        margin = margin + 100
        if (margin >= 500) {
          clearInterval(paddingInterval)
        }
      }, 100)
    //console.log(ReactDOM.findDOMNode(this).innerHTML)
  }
  render() {
    return (
      <html>
        <body>
          <Menu clickedList={this.clickedList}/>
        </body>
      </html>
    );
  }
}

  // ========================================
  
  ReactDOM.render(
    <Main />,
    document.getElementById('root')
  );
  
// TO CREATE: npx create-react-app my-app
// TO RUN: npm start 