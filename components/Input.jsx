import Image from 'next/image';
import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline';

import myPhoto from '../public/mine.png';

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <Image
        src={myPhoto}
        width={24}
        height={24}
        alt="my photo"
        className="h-10 w-10 rounded-full cursor-pointer hover:brightness-95"
      ></Image>

      <div className="w-full divide-y divide-gray-200">
        <div>
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[100px] text-gray-700 "
            rows="2"
            placeholder="What's heppening"
          ></textarea>
        </div>
        <div className="flex justify-between items-center pt-2.5">
          <div className="flex">
            <PhotoIcon className="h-9 hoverEffect p-2 text-[#1d9bf0] hover:bg-sky-100" />
            <FaceSmileIcon className="h-9 hoverEffect p-2 " />
          </div>
          <button className="px-4 py-1.5 text-white bg-[#1d9bf0] rounded-full font-bold hover:brightness-95 shadow-md disabled:opacity-50 cursor-pointer">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}
