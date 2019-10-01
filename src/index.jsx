import React from 'react'
import ReactDOM from 'react-dom'
import { Helmet } from 'react-helmet'
import { Menu } from './menu'
import { Content }  from './content'

class Main extends React.PureComponent {
  state = { contentState:null }
  toggleFunc = e => {
    var id = e.target.id
    var h6 = document.querySelectorAll("h6")
    for (let i=0; i<h6.length; i++) {
      if (id !== h6[i].id) {
        h6[i].classList.toggle('is-hided')
      }
      else {
        h6[i].classList.toggle('is-main')        
      }
    }
    this.setState({ contentState: id })
  }

  render() {
    return (
      <html>
        <Helmet>
          <title>My Page</title>
            </Helmet>
        <body>
          <Menu toggleFunc={this.toggleFunc} />
          <Content contentState={this.state.contentState}/>
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

// Mouse'dan elma, armut bir seyler dussun
// ya da tikladigi menu butonu yere dussun

// rfc [dene bunu component yaratiyor bak]
// rce class based component
