import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import Footer from './components/Footer'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Projects from './components/Projects'

import './App.css'

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/projects" component={Projects} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  </div>
)

export default App
