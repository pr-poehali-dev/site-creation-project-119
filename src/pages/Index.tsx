import HomeHero from '@/components/home/HomeHero';
import HomeContent from '@/components/home/HomeContent';
import HomeFooter from '@/components/home/HomeFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAF9F2] text-ink font-body overflow-x-hidden">
      <HomeHero />
      <HomeContent />
      <HomeFooter />
    </div>
  );
};

export default Index;
