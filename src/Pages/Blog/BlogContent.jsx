import React, {useEffect, useState} from 'react'
import 'assets/css/Blog.css'
import {useNavigate} from 'react-router-dom'

function BlogContent() {

    const navigate = useNavigate()
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch(`http://vusalimanoff-001-site1.htempurl.com/api/blogs/getblogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setBlogs(data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
    
      }, []);
      const handleClick = (e) => {
        console.log(e);
        const id = e.target.getAttribute("data-id");
        console.log(id);
        navigate(`/blogdetail?id=${id}`)
      }
    console.log(blogs);
      
    return (
        <div className='blog-content'>
            <div className="partial-blog">
                <div className="intro-data">
                        <div className="tips-blog">
                            <h3>Rental Blogs</h3>
                            {
                                blogs&&blogs.map((b)=>{
                                    return(
                                        <div onClick={handleClick} data-id={b.id} className="blog-sm-card">
                                <div data-id={b.id} className="blog-sm-img">
                                    <img data-id={b.id} src={`http://vusalimanoff-001-site1.htempurl.com/blogs/${b.image}`} alt=""/>
                                </div>
                                <div data-id={b.id} className="blog-sm-content">
                                    <p data-id={b.id}>{b.name}</p>
                                </div>
                            </div>
                                    ) 
                                })
                            }
                        </div>
                    
                     <div className="blog-social">
                    <div className="soc fb">
                    <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className="soc twit">
                    <i className="fa-brands fa-twitter"></i>
                    </div>
                    <div className="soc yt">
                    <i className="fa-brands fa-youtube"></i>
                    </div>
                    <div className="soc yt">
                    <i className="fa-brands fa-pinterest"></i>
                    </div>
                    <div className="soc insta">
                    <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
              
                </div>
              
              
                <div className="content-data">
                       {
                        blogs&&blogs.map((b)=>{
                            return(
                                <div data-id={b.id} className="blog-card" onClick={handleClick} >
                                <div data-id={b.id} className="blog-img-prev">
                                    <img data-id={b.id} src={`http://vusalimanoff-001-site1.htempurl.com/blogs/${b.image}`} alt=""/>
                                </div>
                                <div data-id={b.id} className="blog-one-data">
                                <h1 data-id={b.id}>{b.name}</h1>
                                <p data-id={b.id} className='blog-small-data'>{(b.description).slice(0,200)}......</p>
                                <p data-id={b.id} className='readmore'>READ MORE ➡</p>
                                </div>
                            </div>
                            )
                        })
                       }
                        
                </div>
            </div>
        </div>
    )
}

export default BlogContent
