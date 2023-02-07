import { SparklesIcon } from '@heroicons/react/24/outline';

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky z-50 top-0 bg-white border-b border-gray-200 justify-between items-center">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect w-9 h-9">
          <SparklesIcon className="h-7 " />
        </div>
      </div>
    </div>
  );
}
