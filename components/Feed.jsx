import { SparklesIcon } from '@heroicons/react/24/outline';
import Input from './Input';
import Post from './Post';

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'Abdumalik Sharipov',
      username: '@frontendprof',
      userImg:
        'https://cyberweb8.github.io/rsschool-cv/assets/img/resume_photo_1.png',
      userImgAlt: 'my photo',
      img: 'https://res.cloudinary.com/frontendprof/image/upload/v1668453007/pexels-pixabay-2150_qpo4ud.jpg',
      imgAlt: 'galaxy with spacial elements',
      text: 'What a stunning view to behold',
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      name: 'Abdumalik Sharipov',
      username: '@frontendprof',
      userImg:
        'https://cyberweb8.github.io/rsschool-cv/assets/img/resume_photo_1.png',
      userImgAlt: 'my photo',
      img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
      imgAlt: 'quiet forest with danger underneath',
      text: 'A place worth to be in solitude',
      timestamp: '3 days ago',
    },
    {
      id: '3',
      name: 'Abdumalik Sharipov',
      username: '@frontendprof',
      userImg:
        'https://cyberweb8.github.io/rsschool-cv/assets/img/resume_photo_1.png',
      userImgAlt: 'my photo',
      img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
      imgAlt: 'quiet forest with danger underneath',
      text: 'Rainy day, still working on the project',
      timestamp: '7 days ago',
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky z-50 top-0 bg-white border-b border-gray-200 justify-between items-center">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect w-9 h-9">
          <SparklesIcon className="h-7 " />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
