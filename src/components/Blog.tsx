import React from 'react';
import Image from 'next/image';

interface BlogPreviewProps {
  post: {
    id: number;
    title: string;
    image: string;
    summary: string;
    author: string;
    date: string;
  };
  onClick: () => void;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ post, onClick }) => (
  <div className="bg-opacity-50 bg-emerald-50 p-6 rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
    <div className="relative w-full h-48 mb-4 rounded">
      <Image
        src={post.image}
        alt={post.title}
        width={400} // Adjust width 
        height={250} // Adjust height 
        layout="responsive" // Use responsive layout for aspect ratio preservation
        objectFit="cover" // Maintain aspect ratio and cover container
        className="rounded"
      />
    </div>
    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
    <p className="text-gray-700 mb-4">{post.summary}</p>
    <p className="text-sm text-gray-500">Author: {post.author}</p>
    <p className="text-sm text-gray-500">Date: {post.date}</p>
  </div>
);

export default BlogPreview;
