import DefaultNavbar from '@/components/DefaultNavbar';
import Footer from '@/components/Footer';
import PortfolioGallery from '@/components/PortfolioGallery';
import Title from '@/components/Title';

const page = () => {
  return (
    <>
      <DefaultNavbar />
      <div className="margin-top">
        <Title title="Tüm Portfolyo" />
        <PortfolioGallery />
      </div>
      <Footer />
    </>
  );
};
export default page;
