import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'
import axios from 'axios'



class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
      }
    
      componentDidMount() {
        axios.get(`http://lumentest1.cm/system/about`)
          .then((res) => {
            const posts = res.data;
            this.setState({ posts });
          });
      }
  
    render() {
      const { isBlocking } = this.state
  
      return (
        <div className="widewrapper main">
        <div className="container about">
            <div dangerouslySetInnerHTML={{__html: this.state.posts.meta_value }}> 
            </div>
            <div className="about-button">
                <a className="btn btn-xlarge btn-clean-one" href="contact.html">Contact Me</a>
            </div>
            <hr />
        </div>

    </div>
      )
    }
  }
  
  export default About