import {Component} from 'react'

import TabItem from '../TabItem'
import ProjectItem from '../ProjectItem'

import './index.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
  {tabId: 'REACT', displayText: 'React'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s3-img.png',
    title: 'Music Page',
    url: 'https://dbmusicpage.ccbp.tech/',
    description:
      'The music page enables the users to browse through the images of all-time favorite music albums.',
  },

  {
    projectId: 1,
    category: 'STATIC',
    imageURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/nemo-c1-img.png',
    title: 'Movie Page',
    url: 'https://dbmoviepage.ccbp.tech/',
    description:
      'A Movie Page enables the user to browse through the images of popular movies.',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-s1-img.png',
    title: 'Advanced Technologies',
    url: 'https://dbadvancetech.ccbp.tech/',
    description:
      'A website that gives you a basic understanding of Advanced Technologies.',
  },

  {
    projectId: 25,
    category: 'STATIC',
    imageURL:
      'https://assets.ccbp.in/frontend/static-website/yoga-girl-with-headphones-img.png',
    title: 'Yoga Page',
    url: 'https://dbyogapage.ccbp.tech/',

    description:
      'A Yoga Page enables the user to browse through the varies  popular yogas.',
  },

  {
    projectId: 26,
    category: 'STATIC',
    imageURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/codingbg.png',
    title: 'Coding Cover Page',
    url: 'https://dbcodingcover.ccbp.tech/',

    description: 'Coding cover page developed using basic bootstrap concepts.',
  },

  {
    projectId: 27,
    category: 'STATIC',
    imageURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/foodbg.png',
    title: 'Food Order Page',
    url: 'https://dbfoodorderpage.ccbp.tech/',

    description:
      'Food Order Page enables the user to browse through  various meals.',
  },

  {
    projectId: 24,
    category: 'STATIC',
    imageURL: 'https://assets.ccbp.in/frontend/static-website/stores-img.png',
    title: 'Favorite Stores Page',
    url: 'https://dbfavstore.ccbp.tech/',

    description:
      'A Favorite Stores Page enables the user to browse through the images of popular stores.',
  },
  {
    projectId: 3,
    category: 'RESPONSIVE',
    imageURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-products-laptops-bg.png',
    title: 'E-Commerce Website',
    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
    url: 'https://flybuyecw.ccbp.tech/',
  },

  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r4-img.png',
    title: 'VR Website',

    description:
      'VR Website enables users to explore AR and VR Products and Industry happenings.',
    url: 'https://vrvirtual.ccbp.tech/',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    url: 'https://dbfoodmunchweb.ccbp.tech/',
  },
  {
    projectId: 6,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r3-img.png',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
    url: 'https://jport.ccbp.tech/',
  },

  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/random-joke-v2.gif',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
    url: 'https://dbrandomjoke.ccbp.tech/',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/sizing-an-image-v1.gif',
    title: 'Sizing An Image',
    description:
      'This is a dynamic web application capable of adjusting the size of an element using DOM manipulations.',
    url: 'https://dbsizingimage.ccbp.tech/',
  },

  {
    projectId: 11,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/wikipedia-search-application-v1.gif',
    title: 'Wikipedia Search Application ',
    description:
      'This is an API -based website capable of searching concepts as wikipedia.',
    url: 'https://dbwiki.ccbp.tech/',
  },

  {
    projectId: 12,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/chatbot-v1.gif',
    title: 'Chatbot',
    description: 'Chatbot is a dynamic page like normal bot-chatpage.',
    url: 'https://dbchatbot.ccbp.tech/',
  },

  {
    projectId: 13,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/todo-application-part-6-v1.gif',
    title: 'Todo-app',
    description:
      'Todo app is a basic app which has the basic functionalities of creating a task and adding and deleting the same.',
    url: 'https://dbtodo.ccbp.tech/',
  },

  {
    projectId: 14,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/traffic-light-v1.gif',
    title: 'Traffic Light',
    description:
      'Traffic light app is an dynamic app which shows traffic signal colors respective to the clicked buttons of stop,ready,go.',
    url: 'https://dbtrafficlight.ccbp.tech/',
  },

  {
    projectId: 15,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/seasons-switcher-v1.gif',
    title: 'Seasons Switcher',
    description:
      'Seasons Switcher  is a dynamic app which switches the season background regards to the selected season.',
    url: 'https://dbseasonswitch.ccbp.tech/',
  },

  {
    projectId: 16,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/toggle-like-and-unlike-v1.gif',
    title: 'Toggle Like and Unlike',
    description:
      'Toggle Like and Unlike is a dynamic app in which the dog will be changed regards the button clicked.',
    url: 'https://dbtoggledoggy.ccbp.tech/',
  },

  {
    projectId: 17,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/addition-game-v1.gif',
    title: 'Addition Game',
    description:
      'Addition Game is a dynamic app  which will shows the result based on the answer that the user enters.',
    url: 'https://dbadditiongame.ccbp.tech/',
  },

  {
    projectId: 18,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/tip-calculator-v1.gif',
    title: 'Tip Calculator',
    description:
      'Tip Calculator is a dynamic app  which will calculate the tip and total amount based on the given bill and tip percentage.',
    url: 'https://dbtipcalci.ccbp.tech/',
  },

  {
    projectId: 19,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/button-maker-v1.gif',
    title: 'Button Maker',
    description:
      'Button Maker is a dynamic app  which generated custom button based on the user entered values',
    url: 'https://dbcustombtn.ccbp.tech/',
  },

  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/content/dynamic-webapps/speed-typing-test-output.gif',
    title: 'Speed Typing Test',
    url: 'https://dbtypingtest.ccbp.tech/',
    description:
      'Speed Typing Test Application is capable of calculating the time to type the randomly generated quote.',
  },
  {
    projectId: 20,
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/content/dynamic-webapps/time-converter-output.gif',
    title: 'Time Converter',
    description:
      'Time Converter is a dynamic app  which converts the given hours and minutes into seconds.',
    url: 'https://dbtimecon.ccbp.tech/',
  },

  {
    projectId: 21,
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/content/dynamic-webapps/countries-search-page-output-v2.gif',
    title: 'Countries Search Page',
    description:
      'Countries Search Page is a dynamic app  which gives the results of searched country .',
    url: 'https://dbcountrysearch.ccbp.tech/',
  },

  {
    projectId: 22,
    category: 'DYNAMIC',
    imageURL:
      'https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/dynamic-webapps/select-your-pet-v1.gif',
    title: 'Select your Pet',
    description:
      'Select your Pet is a dynamic app  which gives the image of selected pet .',
    url: 'https://dbselectpet.ccbp.tech/',
  },

  {
    projectId: 23,
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/content/dynamic-webapps/random-activity-output.gif',
    title: 'Random Activity',
    description:
      'Random Activity is a dynamic app which suggests a random activity.',
    url: 'https://dbrandactivity.ccbp.tech/',
  },

  {
    projectId: 28,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/click-counter-output.gif',
    title: 'Click Counter',
    description:
      'Click Counter is a single page react app with the functionality that When Click Me! button is clicked the count of the number of clicks should be incremented by 1. ',
    url: 'https://dbclickcounter.ccbp.tech/',
  },

  {
    projectId: 29,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/speedometer-ouput.gif',
    title: 'Speedometer',
    description:
      'Speedometer is a single page react app with the functionality of increasing and decreasing speed respective to the accelerate and apply brake buttons. ',
    url: 'https://dbspeedo.ccbp.tech/',
  },

  {
    projectId: 30,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/fruits-counter-output.gif',
    title: 'Fruits Counter',
    description:
      'Fruits Counter is a single page react app with the functionality of increasing and decreasing fruits count respective to the Eat Mango and Eat Banana buttons. ',
    url: 'https://dbfruitscounter.ccbp.tech/',
  },

  {
    projectId: 31,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/welcome-app-output-v2.gif',
    title: 'Welcome App',
    description:
      'Welcome App is a single page react app with the welcome greet! and with changed subscription status on the subscribe button. ',
    url: 'https://dbwelcomeapp.ccbp.tech/',
  },

  {
    projectId: 32,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/show-hide-output.gif',
    title: 'Show/Hide App',
    description:
      'Show/Hide App is a single page react app with the functionality of showing and hiding the first and last name with respective show/hide buttons. ',
    url: 'https://dbshowhidename.ccbp.tech/',
  },

  {
    projectId: 33,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/light-dark-mode-output.gif',
    title: 'Light Dark Mode',
    description:
      'Light Dark Mode is a single page react app with the functionality of changing the light and dark mode. ',
    url: 'https://dblightdarkmode.ccbp.tech/',
  },

  {
    projectId: 34,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/login-app-output.gif',
    title: 'Login App',
    description:
      'Login App is a single page react app with the functionality of changing the login status with respect to the login and logout buttons. ',
    url: 'https://dbloginapppage.ccbp.tech/',
  },

  {
    projectId: 35,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/random-number-generator-output-v2.gif',
    title: 'Random Number Generator',
    description:
      'Random Number Generator is a single page react app with the functionality of generating and showing random number. ',
    url: 'https://dbrandomnumber.ccbp.tech/',
  },

  {
    projectId: 36,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/letters-calculator-output-v2.gif',
    title: 'Letters Calculator',
    description:
      'Letters Calculator is a single page react app with the functionality of showing the count of letters that user enters. ',
    url: 'https://dbletterscalci.ccbp.tech/',
  },

  {
    projectId: 37,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/feedback-app-output-v2.gif',
    title: 'Feedback App',
    description:
      'Feedback App is a single page react app with the functionality of showing the feedback. ',
    url: 'https://dbfeedbackapp.ccbp.tech/',
  },

  {
    projectId: 38,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif',
    title: 'Comments App',
    description:
      'Comments App is a single page react app with the functionality of adding and showing and deleting the comment by user. ',
    url: 'https://dbcommentsapp.ccbp.tech/',
  },

  {
    projectId: 39,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/appointments-app-output.gif',
    title: 'Appointments App',
    description:
      'Appointments App is a single page react app with the functionality of adding and showing and bookmarking the comment by user. ',
    url: 'https://dbappointment.ccbp.tech/',
  },

  {
    projectId: 40,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/money-manager-output.gif',
    title: 'Money Manager',
    description:
      'Money Manager is a single page react app with the functionality of adding users income and expenses. ',
    url: 'https://dbmoneymanager.ccbp.tech/',
  },

  {
    projectId: 41,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/cryptocurrency-tracker-output.gif',
    title: 'Cryptocurrency Tracker',
    description:
      'Cryptocurrency Tracker is a single page react app with the functionality of displaying the updated cryptocurrency data after fetching. ',
    url: 'https://dbcrypto.ccbp.tech/',
  },

  {
    projectId: 42,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/events-output.gif',
    title: 'Events',
    description:
      'Events is a single page react app with the functionality of displaying the registration details while clicking on the particular event by user. ',
    url: 'https://dbevents.ccbp.tech/',
  },

  {
    projectId: 43,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/cowin-dashbaord-output.gif',
    title: 'CoWIN Dashboard',
    description:
      'CoWIN Dashboard is a single page react app with the functionality of displaying the Covid vaccination details after fetching. ',
    url: 'https://dbcowin.ccbp.tech/',
  },

  {
    projectId: 45,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/nxt-trendz-products-filter-group-output-v0.gif',
    title: 'Nxt Trendz',
    description:
      'Nxt Trendz App is  e-commerce react app. PrimeUser credentials are praneetha and praneetha@2021.,Nonprime user credentials are raja and raja@2021',
    url: 'https://dbnxttrendz.ccbp.tech/login/',
  },

  {
    projectId: 46,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/gallery-output.gif',
    title: 'Gallery App',
    description:
      'Gallery App is a single page react app with the functionality of displaying an image while selecting to the thumbnail image .',
    url: 'https://dbgalleryapp.ccbp.tech/',
  },

  {
    projectId: 47,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/app-store-output.gif',
    title: 'App Store',
    description:
      'App Store is a single page react app with the functionality of searching and displaying particular app .',
    url: 'https://dbappstr.ccbp.tech/',
  },

  {
    projectId: 48,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/content/react-js/faqs-output-v3.gif',
    title: 'Faqs App',
    description:
      'Faqs App is a single page react app with the functionality of displaying and hiding FAQ.',
    url: 'https://dbfaqapp.ccbp.tech/',
  },

  {
    projectId: 44,
    category: 'REACT',
    imageURL:
      'https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png',
    title: 'Planets App',
    description:
      'Planets App is a single page react app developed using React-Slick. ',
    url: 'https://dbplanets.ccbp.tech/',
  },

  {
    projectId: 49,
    category: 'REACT',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/prime-video-img.png',
    title: 'Prime Video',
    description:
      'Prime Video is a single page react app with the functionality of displaying videos  using react-slick.',
    url: 'https://dbvedioslick.ccbp.tech/',
  },
]

class App extends Component {
  state = {activeTabId: tabsList[0].tabId, isActive: false}

  updateActiveTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )

    return filteredProjects
  }

  render() {
    const filteredProjects = this.getFilteredProjects()
    const {isActive, activeTabId} = this.state
    return (
      <div className="app-container">
        <img
          alt="my projects"
          src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/software-developer-img.png"
          className="my-projects-bg-container-top-section"
        />
        <h1 className="title">My Projects</h1>
        <p className="description">
          Within my portfolio, I present a collection of projects spanning
          Static, Responsive, Dynamic, and React Websites. Crafted with HTML,
          CSS, Bootstrap, JavaScript, and React, each project boasts a
          thoughtfully designed UI featuring intuitive tabs for effortless
          navigation. Every project is accompanied by a succinct description and
          a direct link to its dedicated UI page. By simply clicking "Click
          here", users smoothly transition to the project's interface. The
          combination of rich project descriptions and captivating visuals
          provides a thorough understanding of their functionalities, ensuring
          users have a seamless experience for evaluating and appreciating each
          project
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              updateActiveTabId={this.updateActiveTabId}
              tabDetails={tabDetails}
              isActive={tabDetails.tabId === activeTabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
