import React , { useEffect , useState } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css';
import * as fs from "fs"
 
const Slug = (props) => {
    const [blog, setBlog] = useState(props.blog)
    // setBlog(props.blog)
    // const router = useRouter();
    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
    //       return a.json()
    //   }).then((parsed)=>{
    //       setBlog(parsed)
    //   })
    // }, [router.isReady])
    
    return <div className={styles.container}>
        <main className={styles.main}>
            <h1>Title of the page {blog && blog.title}</h1>
            <hr />
            <div>
                {blog && blog.content}
            </div>
        </main>
    </div>;
};

export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug: "how-to-learn-js"} },
        { params: { slug: "how-to-learn-react"} },
        { params: { slug: "how-to-learn-next"} }
      ],
      fallback: true // false or 'blocking'
    };
  }

export async function getStaticProps(context){
    const {slug} = context.params;
    // const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
    // const blog = await data.json();
    let blog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")
    return {
        props:{blog: JSON.parse(blog)}
    }
}
// export async function getServerSideProps(context){
//     const {slug} = context.query;
//     const data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//     const blog = await data.json();
//     return {
//         props:{blog}
//     }
// }
 
export default Slug;
