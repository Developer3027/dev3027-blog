import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  const { featuredImage, slug, title, author, createdAt, excerpt } = post;
  console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={featuredImage.url}
          alt={post.title}
          className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg'
        />
      </div>
      <h1 className='transition duration-300 text-left mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${slug}`}>{title}</Link>
      </h1>
      <div className='bloc lg:flex text-center items-center justify-between mb-8 w-full border-y-2 border-slate-300'>
        <div className='flex items-center justify-start mb-4 py-2 lg:mb-0 full lg:w-auto mr-8'>
          <img
            src={author.photo.url}
            alt={author.name}
            height='45px'
            width='45px'
            className='align-middle'
          />
          <p className='inline align-center text-gray-700 ml-2 text-lg'>
            {author.name}
          </p>
        </div>
        <div className='font-medium text-gray-700'>
          <span className='align-middle'>
            Published: {moment(createdAt).format('MMM DD, YYYY')}
          </span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
        {excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${slug}`}>
          <span className='transition duration-500 hover:translate-y-1 inline-block bg-green-600 text-lg font-medium rounded text-white px-8 py-3 cursor-pointer'>
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
