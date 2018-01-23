import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'
import Index from './component/Index'
import About from './component/About'
import Contact from './component/Contact'
import Single from './component/Single'

import Headers from './component/Headers'
import Footers from './component/Footers'

require('jquery')

require('./component/css/style.css')
require('./component/css/bootstrap.min.css')

const PreventingTransitionsExample = () => (
  <Router>
    <div>
      <Headers />
      <Route path="/" exact component={Index}/>
      <Route path="/About.html" exact component={About}/>
      <Route path="/Contact.html" exact component={Contact}/>
      <Route path="/Single/:id" exact component={Single}/>

      <Footers />
    </div>
  </Router>
)

export default PreventingTransitionsExample