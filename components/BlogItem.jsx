import { assets, blog_data } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const BlogItem = ({image,title,category,description}) => {
  return (
    <div className='max-w-[300px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]'>
      <Image src={image} width={400} height={400} alt='Blog Image' className='border-b border-black'/>
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
      <div className="p-5">
        <h5 className='mb-2 font-medium text-lg tracking-tight text-gray-900'>{title}</h5>
        <p className='text-sm mb-3 tracking-tight text-gray-700'>{description}</p>
        <div className='inline-flex items-center py-2 font-semibold text-center'>
          Read more
          <Image src={assets.arrow} alt='Blog Image' width={12} className='ml-2' />
        </div>
      </div>
    </div>
  )
}

export default BlogItem
