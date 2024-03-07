import TopNav from '../components/TopNav';
import Landing1 from '../components/Landing1';
import Landing2 from '../components/Landing2';

export default function Home () {
  return (
    <main className="max-w-full md:flex flex-col items-center md:px-12 xl:px-0">
      <TopNav />
      <Landing1 />
      <Landing2 />
    </main>
  );
}
