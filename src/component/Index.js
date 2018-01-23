import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Prompt
} from 'react-router-dom'
import axios from 'axios'



class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://lumentest1.cm/posts`)
      .then((res) => {
        const posts = res.data;
        this.setState({ posts });
        
      });
  }
  
    render() {
      
  
      return (
        <div className="widewrapper main">
        <div className="container">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <div className="row">
                        
                        {
                          this.state.posts.map(function(item){
                            return(
                              <div className="col-md-6 col-sm-6">
                                <article className=" blog-teaser">
                                    <header>
                                        <img src="img/1.jpg" alt="" />
                                        <h3><Link to={/single/ + item.id }>{ item.post_title }</Link></h3>
                                        <span className="meta">19 August 2015, John Doe</span>
                                        <hr />
                                    </header>
                                    <div className="body">
                                    { item.post_description }
                                    </div>
                                    <div className="clearfix">
                                        <a href={/single/ + item.id } className="btn btn-clean-one">Read more</a>
                                    </div>
                                </article>
                            </div>
                            )
                          })
                        }

                        

                        

                        
                    </div>
                    
                    

                    

                    <div className="paging">
                        <a href="#" className="older">Older Post</a>
                    </div>
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
  
  export default Index