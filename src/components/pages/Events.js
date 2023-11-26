import React from 'react';
import '../../App.css';
import BlogList from '../BlogList';
import useFetch from '../useFetch';


export default function Events(){
    const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
    return(
        <>
        <div className='events'>
            {/* <h1 style={color='black'}>All Events</h1> */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs = {blogs} title='All Events'/>}
            
        </div>
        </>
    );
}