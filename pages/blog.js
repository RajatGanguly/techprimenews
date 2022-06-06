import React, {useEffect , useState} from 'react';
import styles from '../styles/Blog.module.css'
import Link from 'next/link';
import Head from 'next/head';
// import * as fs from "fs"
import InfiniteScroll from 'react-infinite-scroll-component';
 
const Blog = ({allBlogs}) => {
  // console.log(allBlogs.result[0])
    const [blogs, setBlogs] = useState(allBlogs.result)
    const [count, setCount] = useState(2)
    // setBlogs(props.allBlogs)
    // const fetchData = async () => {
    //     let d = await fetch(`http://localhost:3000/api/blog/?count=${count+2}`)
    //     setCount(count+2)
    //     let data = await d.json();
    //     setBlogs(data)
    //   };
    
    return <div className={styles.container}>
        <main className="lg:mx-24">
        <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      {blogs && blogs.map((blog)=>{
        return (
          <div className="py-8 flex flex-wrap md:flex-nowrap" key={blogs.id}>
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <img src={`/images/${blog.img}`} alt="" />
          <span className="mt-1 text-gray-500 text-sm">{blog.time}</span>
        </div>
        <div className="md:flex-grow lg:mx-6">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{blog.title}</h2>
          <p className="leading-relaxed">{blog.content.slice(0,480)} ...</p>
          <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
        )
      })}
    </div>
  </div>
</section>
        </main>
    </div>
};



export async function getServerSideProps(context) {
    const data = await fetch("http://localhost:3000/api/allblogs");
    const allBlogs = await data.json();
    return {
      props: {allBlogs}, // will be passed to the page component as props
    }
  } 
 
export default Blog;
