import AboutHomepage from '@/components/AboutHomepage';
import ContactUsHomepage from '@/components/ContactUsHomepage';
import Footer from '@/components/Footer';
import HomepageNavbar from '@/components/HomepageNavbar';
import PortfolioHomepage from '@/components/PortfolioHomepage';
import TeamHomepage from '@/components/TeamHomepage';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main>
      <HomepageNavbar />
      <Title title="Portfolyo" />
      <PortfolioHomepage />
      <Title title="Hakkımızda" href="hakkimizda" />
      <AboutHomepage />
      <Title title="Ekibimiz" />
      <TeamHomepage />
      <Title title="Bize Ulaşın" href="iletisim" />
      <ContactUsHomepage />
      <Footer />
    </main>
  );
}
