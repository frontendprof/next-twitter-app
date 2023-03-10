import Head from 'next/head';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

export default function Home({ newsRes, randomUsers }) {
  return (
    <div>
      <Head>
        <title>Twitter clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}
        <Widgets newsRes={newsRes.articles} randomUsers={randomUsers.results} />

        {/* Modal */}
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const newsRes = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
  ).then((res) => res.json());

  const randomUsers = await fetch(
    'https://randomuser.me/api/?results=50&inc=name,login,picture'
  ).then((res) => res.json());

  return {
    props: {
      newsRes,
      randomUsers,
    },
  };
}
