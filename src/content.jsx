import React from 'react'
import {useSpring, animated} from 'react-spring'

function myContent(contentState) {
  switch (contentState) {
    case "aboutme":
      return (
        <div>
          <h3>WHO</h3>
          <br/>
          <p>
             Hello. My name is Mirkan<br/> I am 25 years old<br/> I am from Izmir, east coast of Turkey. I live in New Orleans with an authorized working permit<br/>
             I studied in the Foreign Language department in Cahit Zarifoglu High School, graduated on 2012, afterward I graduated from hospitality faculty in Adnan Menderes University in 2018. I started learning to code exactly 1 year ago. Started with Python. It was last year at my University and I was in emptiness knowing that I don't want to work in hospitality industry, I know it was a late decision. One day I recalled that I have a friend who also works in a company as Python developer; I asked him if there is a way I can learn how to code because I always liked using computers. I was playing some games about how to code, and I knew the basics of coding like if else statements and so on. He told me “yes” I can learn it on my home if I spend some amount of hours per day, I did not believe him at first but he showed me some examples of people those are self-learnt and working on big companies like Google, and Facebook.
             The friend of mine suggested me to read "Turkish guide for Python 3 by Fırat Özgül"(Fırat Özgül'den Python için Türkçe Kılavuz) [ https://belgeler.yazbel.com/python-istihza/ ]. I learned that Fırat Özgül graduated from the hospitality department as well, that gave me the enthusiasm to learn to code once again. He also wrote the book for people like me to learn coding Python and it has Creative Commons License, I learned the term "Creative Commons License" from this book and found that most of the software developers think that all programs should be open source; I fell in love with free software philosophy and doing my projects with this philosophy, some people think "further" about it; I think it is a bit seeing things through rose-colored glasses, they say for example: Even if Debian is open source, because it let closed source software to be able to run in it's OS it is not open source.
             I believed that I have enough knowledge to start a job about my desire to work as a developer I started looking for work but all the companies I applied requested diploma for either computer engineering or software engineering, but found an employer that noticed my eager and hired me; we are coding Node.js. The company website is https://user.vision
             I still learning, I understood that you can't only learn how to code and start working you must always learn new things. I currently am developing a website, I started this website with a group of people but they no longer push pull-request the repository even if I always create new and easy issues for them to help and learn new thing about Python ( https://github.com/lyk2018-python/elifin-okuzu/issues ). The website's name is elifinokuzu.org ( http://142.93.167.4:400/ ) it is about etymology, by the way, I love etymology; the name of the website "Elifin öküzü" is intentionally given, "Elifin öküzü means "Elif's ox". Elif is a female name in Turkish, it also is the first letter of the Arabian alphabet. Elif came Arabian language from the first letter of Greek letter which is "Alpha". Alpha was created to depict oxen in antique Greece. To make the long story short the word came from Greece then Arabian peninsula then Anatolia. That is why I love etymology it hides crazy knowledge.
          I like making useful scripts that ease my life on my free times
          I went to a course about Django and Node.js 2 years ago, and still using react-native on my projects as front-end and Python on backend(Because JS is annoying)
          I was volunteer in my University(4/5 years), planning events, feeding animals with other members, I am pretty much a social person.
          I want to try teaching; If I accomplish it I will be sure that I know coding and If I like what I am doing I will keep going on it as my priority
             I have a project about react-native; it is about a football(soccer) match score guessing application. You can comment on football matches if you are logged in and can get point, end of every month we aim to give rewards to people. My friend that made me start to learn code was looking for an android programmer to make this project and I said "Hey! I know JavaScript. I can learn react-native and make it for you". So I learned react-native with redux and I can say I learned lots of things in the process not only for react-native but also about JavaScripts ( https://github.com/mirkan1/tahminio-mobile ). And I am developing a mobile game with react-native as well, it is just a prototype for now but if you would like to check ( https://snack.expo.io/@raq/sometrexgame-stable-prototype ) I believe that when I finished this game it will be so big but I need some math for it so I started to learning trigonometry and other required geometry fields.
             I know I am a not perfect for the job. However, I need experiences to unearth what is in me potentially. And I don't want to do something different because I love programming and I feel good and happy when I create something
          My github account: https://github.com/mirkan1
          My SoloLearn account(I made some applications for fun here when I first started to learn): https://www.sololearn.com/Profile/4488642
          </p>
        </div> )
      case "myprojects":
        return (
          <div>
            <h1>my projects!</h1>
          <p>Cok merak ediyorsaniz bakin amk burada iste: https://github.com/mirkan1?tab=repositories</p>

          </div>)
      case "mycertificates":
        return (
          <div>
            <a href="https://sololearn.com/Profile/4488642">Solo learn</a><br/>
            <a href="https://www.coursera.org/?authMode=login">Corserea</a><br/>
            <a href="https://learn.freecodecamp.org">Freecodecamp</a>
          </div>)
    }
}

export function Content(val) {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  })
  return (
    <animated.div style={props}>
      {myContent(val.contentState)}
    </animated.div>
  )
}

//export default { Content }