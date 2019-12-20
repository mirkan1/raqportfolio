import React from 'react'

function getPage(val) {
  switch (val) {
    case "who":
      return (
        <div style={{ padding: "5vh"}}>
          lives in New Orleans,<br/>
          full stack developer,<br/>
          eager to learning new things about any field of software development <br/>
          interested in:
          <ol style={{listStyle: "square", padding: "1vh"}}>
            <li>back end development</li>
            <li>UI development</li>
            <li>data visualization</li>
          </ol>
          <div style={{ display: "flex", justifyContent: "space-between",}}>
            <div>
              known languages, frameworks:
              <ol style={{listStyle: "square", padding: "1vh"}}>
                <li>Javascript</li>
                <li>react</li>
                <li>node.js</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>react-native</li>
                <li>Python</li>
                <li>django</li>
                <li>flask</li>
              </ol>
            </div>
            <div id="pic-area">
            </div>
          </div>
      </div>
      )
    case "aboutme":
      return (
        <div style={{ padding: "5vh"}}>
          <div align="center">
            <img src={require('./img/flowers.jpg')} alt="content pic"/>
          </div>
          <br/>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;
            I graduated with a Bachelor's degree in Tourism from Adnan Menderes University in 2018.
            Since I got my first computer when I was 12 years old, I began peeking at website source codes, but I started to learning code professionally three zyears ago.
            I have a friend who works in a company as a full-stack developer; I asked him if there is a way I can learn how to code because I always like doing stuff with my computers.
            I knew the basics of coding like if/else statements, what is RAM, motherboard, how they work, and so on from my elementry school. He told me that I can learn it from home.
            I did not believe him at first because I always thought that if you wanna learn something about tech you have to attend a university but he showed me some examples of people who are self-taught and working at big companies like Google and Facebook.
          </p>
          <br/>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
            This friend of mine suggested me to read <em property="italic" href="http://url/to/a/definition_of_italic"> Turkish Guide for Python 3</em> by Fırat Özgül (Fırat Özgül'den Python için Türkçe Kılavuz) <a href="https://belgeler.yazbel.com/python-istihza/" target="_blank" rel="noopener noreferrer">https://belgeler.yazbel.com/python-istihza/</a>.
            I saw that Fırat Özgül graduated from the Hospitality department as well, and that gave me the motivation to learn software development once again. He also wrote the book, which has a Creative Commons License, for people like me to learn the coding language Python.
            I started looking for work, but all the companies to which I applied requested a diploma for either Computer Engineering or Software Engineering. However, I found an employer that noticed my eagerness and hired me. I learned how to code Node.js, basics of AI, and understood the logic of computers over all <a href="https://user.vision" target="_blank" rel="noopener noreferrer"> https://user.vision </a>
            I am still learning, and I have come to understand that you can't only learn how to code and start working: You must be like a sponge and always remain open to learning new things.
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;
          I went to a bootcamp for full-stack developent (Django, Node.js)
          I have a project about react-native; it is a basic game in which you shoot an object to hit another object. So I learned react, react-native, and redux, and I can say I learned lots of things in the process not only for react-native but also about JavaScripts 
          I am developing a mobile game with react-native as well. It is just a prototype for now, but if you would like to check, <a href="https://github.com/mirkan1/someTrexGame" target="_blank" rel="noopener noreferrer">github repository</a>. <a href="https://snack.expo.io/@raq/sometrexgame-stable-prototype" target="_blank" rel="noopener noreferrer">sometrexgame-stable-prototype</a>. I believe that when I finish this game it will be a hella fun game.
          </p>
        </div> )
      case "myprojects":
        return (
          <div style={{ padding: "5vh"}}>
            <h1>my projects!</h1>
          <p>Cok merak ediyorsaniz bakin amk burada iste: https://github.com/mirkan1?tab=repositories</p>
          </div>)
      case "mycertificates":
        return (
          <div style={{ padding: "5vh"}}>
            <a href="https://sololearn.com/Profile/4488642">Solo learn</a><br/>
            <a href="https://www.coursera.org/?authMode=login">Corserea</a><br/>
            <a href="https://learn.freecodecamp.org">Freecodecamp</a>
          </div>
          )
      case "contact":
          return (
            <div style={{ padding: "5vh"}}>
              <h1>mirkanbaba1@gmail.com</h1>
              <h1>+1 504 603 8251</h1>
            </div>
            )
      default:
        return (
          <div style={{ padding: "30% 0 0 20%", fontSize: "3vw"}}>
            <h1 style={{}}>HELLOW WORLD</h1>
          </div>
        )
    }
}

export function Content(props) {
  var page = getPage(props.contentState)
  return (
    
    <div  id="content" className="rect-border" style={props.style}>
      {page}
    </div>
  )
}

//export default { Content }