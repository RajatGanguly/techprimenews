import Head from 'next/head'
import React , { useState } from 'react'
import styles from '../styles/Contact.module.css'


function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {name,phone,email,msg}
    fetch("http://localhost:3000/api/post-contact",{
      method: "POST",
      headers: {
        'Content-Type':'application/json', 
      },
      body: JSON.stringify(data)
    }).then((response)=>{
      response.json()
    }).then((data)=>{
      console.log(data)
    }).catch((err)=>{
      console.log(err)
    })
    console.log(name,phone,email,msg)
    setName(''); setPhone(''); setEmail(''); setMsg('');
  }
  return (
    <>
     <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossOrigin="anonymous"/> 
     </Head> 
     <div className={styles.container}>
     <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="Name" className={`form-label`}>Name</label>
        <input type="text" className="form-control" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e)=>{setEmail(e.target.value)}} />        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Phone No</label>
        <input type="text" className="form-control" id="email" aria-describedby="emailHelp" value={phone} onChange={(e)=>{setPhone(e.target.value)}} />        
      </div>
        <label htmlFor="exampleInputEmail1" className="form-label">Leave your message here</label>
      <div className="form-floating">
      <textarea className="form-control" placeholder="Leave your message here" id="floatingTextarea" value={msg} onChange={(e)=>{setMsg(e.target.value)}}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
     </div>
    </>
  )
}

export default Contact