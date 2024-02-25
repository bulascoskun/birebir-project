import DefaultNavbar from '@/components/DefaultNavbar';
import Footer from '@/components/Footer';
import PortfolioGallery from '@/components/PortfolioGallery';
import Title from '@/components/Title';

const page = () => {
  return (
    <>
      <DefaultNavbar />
      <Title title="Tüm Portfolyo" />
      <PortfolioGallery />
      <Footer />
    </>
  );
};
export default page;
