import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Menu extends React.Component {
  state = { 
    liSize: window.innerHeight / 5, // 5 tane li war diye
    list: null,
    //index: null
  }

  clickedList = (e) => {
    let list = this.state.list
    let padding = 0
    let listId = e.target.id
    this.setState({ list: listId })
    let id = document.getElementById(listId)
    let desiredPadding = window.innerWidth - 50

    let menu = document.getElementsByClassName("menu-list")[0]
    id.style.fontSize = "larger" // XXX
    let paddingInterval = setInterval(
      () => {
        if (list == null) {
          menu.style.paddingLeft = "0px"
          padding = padding + desiredPadding / 25
          menu.style.paddingRight = `${padding}px`
          if (padding >= desiredPadding) {
            menu.setAttribute("style", "font-size: 100px; background-color: black; color: azure")
            menu.setAttribute("align", "center")
            //menu.style.paddingRight = "0px"
            //menu.style.float = "left"
            clearInterval(paddingInterval)
            this.setState({ list: listId })
          }
        } else {
          menu.style.paddingRight = "0px"
          padding = padding + desiredPadding / 25
          menu.style.paddingLeft = `${padding}px`
          if (padding >= desiredPadding) {
            menu.setAttribute("style", `font-size: 100px`)
            menu.setAttribute("align", "right")
            //menu.style.paddingLeft = "0px"
            //menu.style.float = "right"
            clearInterval(paddingInterval)
            this.setState({ list: null })
          }
        }
      }, 100)
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
          <li id={list} onClick={this.clickedList}>{list}></li>
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
      <div className="menu-list" style={{"font-size": "100px", "float": "right"}}>
        {this.newList()}
      </div>
    )
  }
}

class MainContent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello WOrld!</h1>
      </div>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <html>
        <body>
          <Menu />
          <MainContent />
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