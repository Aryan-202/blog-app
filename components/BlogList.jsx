import { blog_data } from '@/assets/assets'
import React, { useState } from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {

    const [menu, setMenu] = useState("All")

  return (
    <div>
      <div className="justify-center gap-6 flex my-10 ">
        <button onClick={() => setMenu("All")} className={menu==="All"?'text-white  bg-black py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={() => setMenu("Technology")} className={menu==="Technology"?'text-white  bg-black py-1 px-4 rounded-sm':""}>Technology</button>
        <button onClick={() => setMenu("Startup")} className={menu==="Startup"?'text-white  bg-black py-1 px-4 rounded-sm':""}>Startup</button>
        <button onClick={() => setMenu("Lifestyle")} className={menu==="Lifestyle"?'text-white  bg-black py-1 px-4 rounded-sm':""}>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
        {blog_data.filter((item) => menu === "All"? true : item.category === menu).map((item,index)=>{
            return <BlogItem key={index} id={item.id} image={item.image} title={item.title} category={item.category} description={item.description} />
        })}
      </div>
    </div>
  )
}

export default BlogList
