import React, {useEffect, useState}  from 'react'
import 'assets/css/BlogDetails.css'
import {useNavigate,useSearchParams} from 'react-router-dom'


function BlogDetails() {
    const [blog, setBlog] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
      fetch(
        `http://vusalimanoff-001-site1.htempurl.com/api/blogs/blogs/${searchParams.get(
          "id"
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
        
          setBlog(data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }, []);
  

      
    return (
       blog && <div className='blogdet'>
            <div className="det-one">
                <img src={`http://vusalimanoff-001-site1.htempurl.com/blogs/${blog.image}`} alt=""/>
                <h1>{blog.name}</h1>
            </div>
            <div className="det-content">
                <p className='det-p-about'>{blog.description}</p>
                <div className="det-img">
                    <img src={`http://vusalimanoff-001-site1.htempurl.com/blogs/${blog.image}`} alt=""/>
                </div>
            </div>
            <div className="back-blog" onClick={()=> navigate("/blog")}>
                ⬅ Go Back
            </div>
        </div>
       
       
            
        
    )
}

export default BlogDetails
