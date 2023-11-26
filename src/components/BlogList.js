import {Link} from 'react-router-dom';
import './Complaints.css'
const BlogList = ({blogs, title}) => {
        
    return (  
        <div className="complaint-list">
            <h2>{title}</h2>
            <div className="card-list">
            {blogs.map((blog)=>(
                <div className="card" key = {blog.id}>
                    <Link to = {`/blogs/${blog.id}`} className="card-link">
                    <h2>{blog.venue}</h2>
                    <p>Organiser: {blog.organiser}</p>
                    <p> {blog.start_time} to {blog.end_time}</p>
                    <p>{blog.date}</p>
                    </Link>
                </div>
            ))}
            </div>
        </div>
    );
}
 
export default BlogList;