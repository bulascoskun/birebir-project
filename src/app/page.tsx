import AboutHomepage from '@/components/AboutHomepage';
import ContactUsHomepage from '@/components/ContactUsHomepage';
import Footer from '@/components/Footer';
import HomepageNavbar from '@/components/HomepageNavbar';
import PortfolioHomepage from '@/components/PortfolioHomepage';
import TeamHomepage from '@/components/TeamHomepage';
import Title from '@/components/Title';

export default function Home() {
  return (
    <main className="homepage-main">
      <HomepageNavbar />
      <Title title="Portfolyo" />
      <PortfolioHomepage />

      <Title title="Bize Ulaşın" href="iletisim" />
      <ContactUsHomepage />
      <Footer />
    </main>
  );
}

// .expanded-link {
//   width: calc(100% + 100px); /* veya istediğiniz piksel değeri */
// }
