import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'



class Contact extends React.Component {
    state = {
      isBlocking: false
    }
  
    render() {
      const { isBlocking } = this.state
  
      return (
        <div className="widewrapper main">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3 clean-superblock" id="contact">
                    <h2>Contact</h2>
                    
                    <form action="#" method="get" acceptCharset="utf-8" className="contact-form">
                        <input type="text" name="name" id="contact-name" placeholder="Name" className="form-control input-lg" />
                        <input type="email" name="email" id="contact-email" placeholder="Email" className="form-control input-lg" />
                        <textarea rows="10" name="message" id="contact-body" placeholder="Your Message" className="form-control input-lg"></textarea>
                        <div className="buttons clearfix">
                            <button type="submit" className="btn btn-xlarge btn-clean-one">Submit</button>
                        </div>                    
                    </form>
                </div>
            </div>        
        </div>
    </div>
      )
    }
  }
  
  export default Contact