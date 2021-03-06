import React from 'react'

function getPage(val) {
  switch (val) {
    default://case "about":
      return (
        <div >
        <b>Renas Mirkan Kilic:</b><br/><br/>
          Currently living in New Orleans,<br/>
          full stack developer,<br/>
          eager to learning new technologies about software development:
          &nbsp;&nbsp;I wrote an application that sends notification when BTC increases all the sudden to see windows, to see how its like to develop softwares on windows and C language<br/><br/>
          <b>Interested in:</b>
          <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
            <li>back end development</li>
            <li>UI development</li>
            <li>data visualization</li>
          </ol>
              <b>Known languages, frameworks:</b>
          <div style={{ display: "flex", justifyContent: "space-between",}}>
              <div>
                <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
                  <li>Dart</li>
                  <li>Flutter</li>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>React-native</li>
                  <li>Node.js</li>
                </ol>
              </div>
              <div>
                <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
                  <li>Python</li>
                  <li>Django</li>
                  <li>C</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Selenium-webdriver</li>
                </ol>
              </div>
            <div id="pic-area">
            </div>
          </div>
      </div>
      )
    case "bio":
      return (
        <div >
          <div align="center">
            <div style={{ display: "flex", flexWrap: "nowrap"}}>
            <div style={{ backgroundColor: "#47C8D6", width:"25%" }}>
            </div>
            <div style={{width: "100%", height: "100%"}}>
              <img src={require('./img/flowers.jpg')} width="50%" height="25%" alt="content pic"
                style={{
                  border: "3vw dashed #47C8D6",
                  borderSpacing: "5vh",
                }}
                />
              </div>
              <div style={{ backgroundColor: "#47C8D6", width: "25%"}}></div>
              </div>


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
            This friend of mine suggested me to read <em property="italic" href="http://url/to/a/definition_of_italic"> Turkish Guide for Python 3</em> by Fırat Özgül (Fırat Özgül'den Python için Türkçe Kılavuz) <a href="https://python-istihza.yazbel.com/" target="_blank" rel="noopener noreferrer">https://python-istihza.yazbel.com/</a>.
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
          <div>
            <h1>portfolio website</h1>
            <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
              <li>My portfolio website aka this website</li>
            </ol>
            <h3>
              <a href="https://github.com/mirkan1/raqportfolio" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7315" }}>Raqportfolio;</span> source code</a>.
            </h3>
            <br/>

            <h1>SomeTrexGame</h1>
            <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
              <li>Basic mobile game used react-native</li>
              <li>main character is at the middle of the screen</li>
              <li>shooting objects around him and get point</li>
              <li>based on arcade games</li>
            </ol>
            <h3>
              <a href="https://github.com/mirkan1/someTrexGame" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7315" }}>SomeTrexGame;</span> github repository</a>.
                <br/>
              <a href="https://snack.expo.io/@raq/sometrexgame-stable-prototype" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7315" }}>SNACK.EXPO.io;</span> Sometrexgame-stable</a>
            </h3>
            <br/>

            <h1>Elif'in okuzu</h1>
            <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
              <li>Elif is a common name in Turkey and is also first letter of Arabic alphabet and comes from Greece's first letter Alpha</li>
              <li>A dictionary based website about ethimology</li>
              <li>My university project</li>
              <li>Made with a group of people more than 10 including mentors and dev-ops</li>
              <li>based on arcade games</li>
            </ol>
            <h3>
            <a onClick={() => {window.open("https://github.com/lyk2018-python/elifin-okuzu", "", "width=600,height=600")}} href="javascript:void(0)" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7315" }}>Elif's ox;</span> source code</a>
            {/*<a href="https://github.com/lyk2018-python/elifin-okuzu" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7315" }}>Elif's ox;</span> source code</a>*/}
            </h3>
            <br/>

            <h1>Telegram chat bot</h1>
            <ol style={{listStyle: "square", paddingLeft: "5vh"}}>
              <li>A basic chat bot, gives people informations about Cryptocurrencies</li>
              <li>I had lots of fun creating it</li>
              <li>Special thanks to Hakan for let me work on this project, it was so much fun and I learn lots of things on this project about Python and programming</li>
            </ol>
            <h3>
              <a href="https://github.com/mirkan1/Telegram_spam" target="_blank" rel="noopener noreferrer"><span style={{ color: "#ff7315" }}>Telegram bot;</span> source code</a>
            </h3>
            
          </div>)
      case "mycertificates":
        return (
          	<div>
              <div className="flex-container-1 certf" style={{
                display: "flex", 
                flexWrap: "nowrap", 
                margin: "1vh 1vh 0 1vh",
                alignItems: "stretch",
                flexDirection: "row",
              }}>
                <div onClick={() => {window.location.href = "https://www.coursera.org/user/7b97bf00a1a450d935512b9d2debc67f"}} style={{ flexGrow: 1, cursor: "pointer"}} className="rect-border">
                  <img src={require('./img/coursera.png')} width="100%" height="100%" alt="sololearn"/>

                </div>
                <div id="solo"onClick={() => {window.location.href = "https://sololearn.com/Profile/4488642"}} style={{ flexGrow: 5, cursor: "pointer"}} className="rect-border">
                  <img src={require('./img/SoloLearn-2018.png')} width="100%" height="100%" alt="sololearn"/>
                </div>
              </div>
              <div onClick={() => {window.location.href = "https://www.freecodecamp.org/mirkan1"}} className="flex-container" style={{ 
                display: "flex", 
                cursor: "pointer",
                flexWrap: "nowrap",
                margin: "2vh",
                flexDirection: "column",
              }}>
                <div id="certf" className="rect-border" style={{
                  height: 1 + 1 === 2 ? "385px" : "5px",
                }}>
                    <img src={require('./img/freecodecamp.png')} width="100%" height="100%" alt="sololearn"/>
                </div>
              </div>
          
          	</div>
          )
      case "contact":
          return (
            <div style={{
            display: "flex",
            alignItems: "Left",
            flexDirection: "column",
            height: "100%",
            flex: "flex-shrink",
            marginLeft: "5%"
          }}>
            <p style={{ height: "10%", marginTop: "5%", fontSize: '8vh'}}><b>CONTACT INFORMATONS:</b></p><br/><br/>
              <ol style={{listStyle: "square", padding: "1vh", fontSize: '1.5vw', paddingBottom: '2vh', marginLeft: "5vh"}}>
                <li style={{fontSize: '3.5vh'}}><a href="tel:+1 504 603 8251"> +1 504 603 8251 </a></li>
                <li style={{fontSize: '3.5vh'}}><a href="mailto: mirkan.amazon@gmail.com"> mirkan.amazon@gmail.com</a></li>
                {/*<li><a href="https://www.facebook.com/kadriyedemirkankilic" target="_blank" rel="noopener noreferrer">my mom</a></li>*/}
              </ol>
          </div>
            )
      // default:
      //   return (
      //     <div style={{ padding: "30% 0 0 20%", fontSize: "3vw"}}>
      //       <h1 style={{}}>HELLOW WORLD</h1>
      //     </div>
      //  )
    }
}

export function Content(props) {
  var page = getPage(props.contentState)
  return (
    
    <div  id="content" className="rect-border" style={{ fontSize: "3.5vh", lineHeight: "1", wordSpacing: "0.5vh"}}>
      {page}
    </div>
  )
}

//export default { Content }