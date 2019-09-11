import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Menu extends React.Component {
  state = { 
    liSize: window.innerHeight / 10, // 5 tane li war diye
    list: null
  }

  clickedList = (e) => {
    let margin = 0
    let listId = e.target.id
    let id = document.getElementById(listId)
    let desiredPadding = window.innerWidth - id.clientWidth
    let paddingInterval = setInterval(
      () => {
        if (margin >= desiredPadding) {
          console.log(e.target)
          document.getElementsByClassName("menu-list")[0].style.float = "left"
          clearInterval(paddingInterval)
          this.setState({ list: listId })
        }
        margin = margin + desiredPadding / 20 //- id.clientHeight
        id.setAttribute("style", `padding-right: ${margin}px`)
        //id.setAttribute("style", `margin-right: ${margin}px`)
        console.log(desiredPadding)
      }, 100)
      //console.log(ReactDOM.findDOMNode(this).innerHTML)
  }

  newList() {
    let list = this.state.list
    if (list == null) {
      return (
        <ul>
          <li id="aboutme" onClick={this.clickedList}>About me</li>
          <li id="myprojects" onClick={this.clickedList}>My projects</li>
          <li id="tag3" onClick={this.clickedList}>My past</li>
          <li id="tag4" onClick={this.clickedList}>Tag4</li>
          <li id="tag5" onClick={this.clickedList}>Tag5</li>
        </ul>
      )
    } else {
      return (
        <ul>
          <li id={list} onClick={this.clickedList}>{list}</li>
        </ul>
      )
    }
  }

  // onChangeText(value) {
  //   this.setState({ value })
  // }
  componentDidMount() {
    //this.setState({ 
    //  liSize: window.innerHeight / 5,
    //  menuList: document.getElementsByClassName("menu-list")[0]
    //})
    //document.getElementsByClassName("menu-list")[0].setAttribute("style", `font-size: ${this.state.liSize}`)
    // bunu al iste sayfalari buna gore cek
    // basit bir brosur sitesi olacak 
    // sonra ise alinacan mirkan kasma yap bi seyler
  }
  componentWillMount() {
    //this.setState({ liSize: window.innerHeight / 5})
    //console.log(this.state.menuList)//.setAttribute("style", `font-size: ${this.state.liSize}`)
  }
  render() {
    return (
      <div className="menu-list" style={{"font-size": this.state.liSize, "float": "right"}}>
        {this.newList()}
      </div>
    )
  }
}

class Main extends React.Component {
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