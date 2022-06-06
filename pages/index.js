import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Prime News</title>
        <meta name="description" content="Technology news" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style jsx>
        {
          `
          h2{
            font-size: 38px;
          }
          h3{
            font-size: 28px;
          }`
        }
      </style>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Tech Prime News
        </h1>
        <div className={styles.imagewrap}>
          <Image className={styles.myImg} src="/homebg.jpg" width={800} height={400} alt="" />
          {/* <img className={styles.myImg} src="/homebg.jpg" width={800} height={400} alt="" /> */}
        </div>
        <p className={styles.description}>Tech Prime News</p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
          <div className="blogItem">
            <h3>How to learn JavaScript in 2022?</h3>
            <p>JavaScript is the language used to design logic for the web</p>
          </div>
        </div>
      </main>

      
    </div>
  )
}
