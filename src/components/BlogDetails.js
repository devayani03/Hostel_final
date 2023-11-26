import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import './ComplaintDetails.css'
const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/events');
        })
    }

    return (
        <div className="blog-deets">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article className="cardo">
                    <div className="img">
            <img src='https://res.cloudinary.com/dyxnmjtrg/image/upload/v1692366990/2_wfgtq3.png' className="img11"></img>
          </div>
                    <span>{blog.venue}</span>
                    <p className="job">Committee:{blog.organiser}</p>
                    <p className="job">{blog.description}</p>
                    <p className="job">{blog.date}</p>
                    <p className="job">{blog.start_time} to {blog.end_time}</p>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;