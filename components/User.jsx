import Image from 'next/image';

export default function User({ user }) {
  return (
    <div className="flex items-center px-4 hover:bg-gray-50 cursor-pointer space-y-3">
      <Image
        src={user.picture.thumbnail}
        width="40"
        height="40"
        className="rounded-full"
        alt={user.login.username}
      ></Image>
      <div className=" leading-5 truncate ml-4">
        <h4 className=" font-bold hover:underline truncate">
          {user.login.username}
        </h4>
        <span className="text-sm text-gray-500 truncate">
          {user.name.first + ' ' + user.name.last}
        </span>
      </div>
      <button className="bg-black text-white rounded-full py-1 px-2 text-sm font-bold ml-auto">
        Follow
      </button>
    </div>
  );
}
