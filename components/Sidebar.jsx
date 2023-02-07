import Image from 'next/image';

import twitterLogo from '../public/twitter.svg';
import myPhoto from '../public/mine.png';

import SidebarMenuItem from './SidebarMenuItem';
import { HomeIcon } from '@heroicons/react/24/solid';
import { HashtagIcon } from '@heroicons/react/24/outline';
import { BellIcon } from '@heroicons/react/24/outline';
import { InboxIcon } from '@heroicons/react/24/outline';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import { UserIcon } from '@heroicons/react/24/outline';
import { EllipsisHorizontalCircleIcon } from '@heroicons/react/24/outline';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';

export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full">
      {/* Logo */}
      <div className="hoverEffect hover:bg-blue-100">
        <Image
          src={twitterLogo}
          width={24}
          height={24}
          alt="twitter logo"
        ></Image>
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={EllipsisHorizontalCircleIcon} />
      </div>

      {/* Button */}
      <button className=" bg-[#1d9bf0] text-white w-56 h-12 rounded-full font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Mini Profile */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image
          src={myPhoto}
          width={24}
          height={24}
          alt="my photo"
          className="h-10 w-10 rounded-full"
        ></Image>
        <div className="text-center leading-5 hidden xl:inline">
          <h4 className="font-bold">AbdulMalik Sharipov</h4>
          <p className="text-gray-500">@abdsha8</p>
        </div>
        <EllipsisHorizontalIcon className="h-7 xl:ml-8" />
      </div>
    </div>
  );
}
