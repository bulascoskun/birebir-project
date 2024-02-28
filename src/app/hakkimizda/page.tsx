import AboutHomepage from '@/components/AboutHomepage';
import DefaultNavbar from '@/components/DefaultNavbar';
import Footer from '@/components/Footer';
import TeamHomepage from '@/components/TeamHomepage';
import Title from '@/components/Title';

const page = () => {
  return (
    <>
      <DefaultNavbar />
      <div className="margin-top">
        <Title title="Hakkımızda" href="hakkimizda" />
        <AboutHomepage />
        <Title title="Ekibimiz" />
        <TeamHomepage />
      </div>
      <Footer />
    </>
  );
};
export default page;
