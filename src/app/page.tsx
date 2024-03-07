import TopNav from '@/components/TopNav';
import Landing1 from '@/components/Landing1';
import Landing2 from '@/components/Landing2';
import AboutUs from '@/components/AboutUs';
import Subsidiaries from '@/components/Subsidiaries';
import VisionsAndMissions from '@/components/VisionsAndMissions';
import ContactUs from '@/components/ContactUs';

export default function Home () {
  return (
    <main className="max-w-full md:flex flex-col items-center">
      <TopNav />
      <Landing1 />
      <Landing2 />
      <AboutUs />
      <Subsidiaries />
      <VisionsAndMissions />
      <ContactUs />
    </main>
  );
}
