import Navbar from "../../components/Common/Navbar";
import HeroSection from "../../components/Dashboard/HeroSection";
import RecentStories from "../../components/Dashboard/RecentStory";


const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#060B1A] text-white">

      <main className="mx-auto max-w-7xl px-8 pt-20 pb-10">
        <Navbar/>
  
        <HeroSection />

        <RecentStories />

      </main>

    </div>
  );
};

export default Dashboard;