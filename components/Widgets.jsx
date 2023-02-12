import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import News from './News';
import User from './User';

export default function Widgets({ newsRes, randomUsers }) {
  const [articleNum, setArticleNum] = useState(2);
  const [moreUsers, setMoreUsers] = useState(5);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50 ">
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <MagnifyingGlassIcon className="h-7 z-50 text-gray-500" />
          <input
            type="text"
            placeholder="Search Twitter"
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
          />
        </div>
      </div>

      <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-lg px-4">What&apos;s happening ...</h4>

        {newsRes.slice(0, articleNum).map((i) => (
          <News key={i.description} article={i} />
        ))}
        <button
          className="text-blue-300 hover:text-blue-400 pl-4 pb-3"
          onClick={() => setArticleNum(articleNum + 3)}
        >
          Show more
        </button>
      </div>
      <div className="text-gray-700 sticky top-16 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
        <h4 className="font-bold text-lg px-4">Who to follow </h4>
        {randomUsers.slice(0, moreUsers).map((i) => (
          <User key={i.login.uuid} user={i} />
        ))}
        <button
          className="text-blue-300 hover:text-blue-400 pl-4 pb-3"
          onClick={() => setMoreUsers(moreUsers + 3)}
        >
          Show more
        </button>
      </div>
    </div>
  );
}
