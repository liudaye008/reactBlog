import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'
import axios from 'axios'



class Single extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          posts: []
        };
      }
    
      componentDidMount() {
        axios.get(`http://lumentest1.cm/posts/`+this.props.match.params.id)
          .then((res) => {
            const posts = res.data;
            this.setState({ posts });
          });
      }
  
    render() {
      const { isBlocking } = this.state
  
      return (
        <div className="widewrapper main">
        <div className="container">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <article className="blog-post">
                        <header>
                           
                            <div className="lead-image">
                                <img src="/img/single-post.jpg" alt="" className="img-responsive" />
                                
                            </div>
                        </header>
                        <div className="body">
                            <h1>{ this.state.posts.post_title }</h1>
                            <div className="meta">
                                <i className="fa fa-user"></i> John Doe <i className="fa fa-calendar"></i>{ this.state.posts.created_at }<i className="fa fa-comments"></i>
                            </div>
                            <div>
                            { this.state.posts.post_content }
                            </div>
                        </div>
                    </article>

                    <aside className="social-icons clearfix">
                        <h3>Share on </h3> 
                        <a href="#"><i className="fa fa-facebook"></i></a> <a href="#"><i className="fa fa-twitter"></i></a> <a href="#"><i className="fa fa-google"></i></a>
                    </aside>

                    <aside className="comments" id="comments">
                        <hr />

                        <h2><i className="fa fa-comments"></i> 6 Comments</h2>

                        <article className="comment">
                            <header className="clearfix">
                                <img src="/img/avatar.png" alt="A Smart Guy" className="avatar" />
                                <div className="meta">
                                    <h3><a href="#">John Doe</a></h3>
                                    <span className="date">
                                        24 August 2015
                                    </span>
                                    <span className="separator">
                                        -
                                    </span>
                                    
                                    <a href="#create-comment" className="reply-link">Reply</a>                
                                </div>
                            </header>
                             <div className="body">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                            </div>
                        </article>

                        <article className="comment reply">
                            <header className="clearfix">
                                <img src="/img/avatar.png" alt="A Smart Guy" className="avatar" />
                                <div className="meta">
                                    <h3><a href="#">John Doe</a></h3>
                                    <span className="date">
                                        24 August 2015
                                    </span>
                                    <span className="separator">
                                        -
                                    </span>
                                    
                                    <a href="#create-comment" className="reply-link">Reply</a>                
                                </div>
                            </header>
                             <div className="body">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                            </div>
                        </article>

                        <article className="comment ">
                            <header className="clearfix">
                                <img src="/img/avatar.png" alt="A Smart Guy" className="avatar" />
                                <div className="meta">
                                    <h3><a href="#">John Doe</a></h3>
                                    <span className="date">
                                        24 August 2015
                                    </span>
                                    <span className="separator">
                                        -
                                    </span>
                                    
                                    <a href="#create-comment" className="reply-link">Reply</a>                
                                </div>
                            </header>
                             <div className="body">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                            </div>
                        </article>

                        <article className="comment">
                            <header className="clearfix">
                                <img src="/img/avatar.png" alt="A Smart Guy" className="avatar" />
                                <div className="meta">
                                    <h3><a href="#">John Doe</a></h3>
                                    <span className="date">
                                        24 August 2015
                                    </span>
                                    <span className="separator">
                                        -
                                    </span>
                                    
                                    <a href="#create-comment" className="reply-link">Reply</a>                
                                </div>
                            </header>
                             <div className="body">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sit perspiciatis debitis, vel ducimus praesentium expedita, assumenda ipsum cum corrupti dolorum modi. Rem ipsam similique sapiente obcaecati tenetur beatae voluptatibus.
                            </div>
                        </article>        
                    </aside>

                    <aside className="create-comment" id="create-comment">
                        <hr />    

                        <h2><i className="fa fa-pencil"></i> Add Comment</h2>

                        <form action="#" method="get" acceptCharset="utf-8">
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" name="name" id="comment-name" placeholder="Your Name" className="form-control input-lg" />    
                                </div>
                                <div className="col-md-6">
                                    <input type="email" name="email" id="comment-email" placeholder="Email" className="form-control input-lg" />    
                                </div>
                            </div>

                            <input type="url" name="name" id="comment-url" placeholder="Website" className="form-control input-lg" />

                            <textarea rows="10" name="message" id="comment-body" placeholder="Your Message" className="form-control input-lg"></textarea>

                            <div className="buttons clearfix">
                                <button type="submit" className="btn btn-xlarge btn-clean-one">Submit</button>
                            </div>
                        </form>
                    </aside>
                </div>
                <aside className="col-md-4 blog-aside">
                    
                    <div className="aside-widget">
                        <header>
                            <h3>Featured Post</h3>
                        </header>
                        <div className="body">
                            <ul className="clean-list">
                                <li><a href="">Clean - Responsive HTML5 Template</a></li>
                                <li><a href="">Responsive Pricing Table</a></li>
                                <li><a href="">Yellow HTML5 Template</a></li>
                                <li><a href="">Blackor Responsive Theme</a></li>
                                <li><a href="">Portfolio Bootstrap Template</a></li>
                                <li><a href="">Clean Slider Template</a></li>
                            </ul>
                        </div>
                    </div>
                
                    <div className="aside-widget">
                        <header>
                            <h3>Related Post</h3>
                        </header>
                        <div className="body">
                            <ul className="clean-list">
                                <li><a href="">Blackor Responsive Theme</a></li>
                                <li><a href="">Portfolio Bootstrap Template</a></li>
                                <li><a href="">Clean Slider Template</a></li>
                                <li><a href="">Clean - Responsive HTML5 Template</a></li>
                                <li><a href="">Responsive Pricing Table</a></li>
                                <li><a href="">Yellow HTML5 Template</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="aside-widget">
                        <header>
                            <h3>Tags</h3>
                        </header>
                        <div className="body clearfix">
                            <ul className="tags">
                                <li><a href="#">HTML5</a></li>
                                <li><a href="#">CSS3</a></li>
                                <li><a href="#">COMPONENTS</a></li>
                                <li><a href="#">TEMPLATE</a></li>
                                <li><a href="#">PLUGIN</a></li>
                                <li><a href="#">BOOTSTRAP</a></li>
                                <li><a href="#">TUTORIAL</a></li>
                                <li><a href="#">UI/UX</a></li>                            
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    </div>
      )
    }
  }
  
  export default Single