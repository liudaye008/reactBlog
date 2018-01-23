import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'

class Header extends React.Component {
    state = {
      isBlocking: false
    }
  
    render() {
      const { isBlocking } = this.state
  
      return (
<header>
        <div className="widewrapper masthead">
            <div className="container">
                <a href="/" id="logo">
                    <img src="/img/logo.png" alt="clean Blog" />
                </a>

                <div id="mobile-nav-toggle" className="pull-right">
                    <a href="/" data-toggle="collapse" data-target=".clean-nav .navbar-collapse">
                        <i className="fa fa-bars"></i>
                    </a>
                </div>

                <nav className="pull-right clean-nav">
                    <div className="collapse navbar-collapse">
                        <ul className="nav nav-pills navbar-nav">
                          
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/About.html">About</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>                        
                        </ul>
                    </div>
                </nav>        

            </div>
        </div>

        <div className="widewrapper subheader">
            <div className="container">
                <div className="clean-breadcrumb">
                    <a href="#">Blog</a>
                </div>

                <div className="clean-searchbox">
                    <form action="#" method="get" acceptCharset="utf-8">
                        <input className="searchfield" id="searchbox" type="text" placeholder="Search" />
                        <button className="searchbutton" type="submit">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </header>
        )
    }
}
  
export default Header