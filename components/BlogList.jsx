import { blog_data } from '@/assets/assets'
import React from 'react'
import BlogItem from './BlogItem'

const BlogList = () => {
  return (
    <div>
      <div className="justify-center gap-6 flex my-10 ">
        <button className='text-white  bg-black py-1 px-4 rounded-sm'>All</button>
        <button className='text-white  bg-black py-1 px-4 rounded-sm'>Technology</button>
        <button className='text-white  bg-black py-1 px-4 rounded-sm'>Startup</button>
        <button className='text-white  bg-black py-1 px-4 rounded-sm'>Lifestyle</button>
      </div>
      <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24 '>
        {blog_data.map((item,index)=>{
            return <BlogItem key={index} image={item.image} title={item.title} category={item.category} description={item.description} />
        })}
      </div>
    </div>
  )
}

export default BlogList
