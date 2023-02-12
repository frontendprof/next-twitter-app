import {
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  ShareIcon,
  TrashIcon,
  // HeartIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Post({ post }) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* image */}
      <Image
        src={post.userImg}
        alt={post.userImgAlt}
        width="24"
        height="24"
        className="mr-4 rounded-full w-11 h-11"
      ></Image>

      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex space-x-1 items-center whitespace-nowrap">
            <h3 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {post.name}
            </h3>
            <span className="text-sm sm:text-[15px]">{post.username} - </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {post.timestamp}
            </span>
          </div>
          <EllipsisHorizontalIcon className="hoverEffect w-10 h-10 hover:bg-sky-100 hover:text-sky-500 p-2 " />
        </div>

        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {post.text}
        </p>
        <Image
          src={post.img}
          width="450"
          height="500"
          alt={post.imgAlt}
          className="rounded-2xl mr-2"
        ></Image>

        <div className="flex justify-between p-2 text-gray-500">
          <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
          <TrashIcon className="h-9 w-9 p-2 hoverEffect hover:text-red-600 hover:bg-red-100 " />
          <HeartIcon className="h-9 w-9 p-2 hoverEffect hover:text-red-600 hover:bg-red-100 " />
          <ShareIcon className="h-9 w-9 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
          <ChartBarIcon className="h-9 w-9 p-2 hoverEffect hover:text-sky-500 hover:bg-sky-100" />
        </div>
      </div>
    </div>
  );
}
