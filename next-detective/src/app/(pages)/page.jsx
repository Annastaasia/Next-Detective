import MainBG from "../components/MainBG/MainBG.jsx";
import About from "../components/About/About.jsx";
import Blog from "../components/Blog/Blog.jsx";
import Director from "../components/Director/Director.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import FirstVisit from "../components/FirstVisit/FirstVisit.jsx";
import License from "../components/License/License.jsx";
import Map from "../components/Map/Map.jsx";
import Reviews from "../components/Review/Review.jsx";
import Safety from "../components/Safety/Safety.jsx";
import Services from "../components/Services/Services.jsx";
import Youtube from "../components/Youtube/Youtube.jsx";

export default function Main() {
  return (
    <>
      <main>
        <MainBG />
        <About />
        <Services />
        <License />
        <Youtube />
        <FirstVisit />
        <Director />
        <Reviews />
        <Safety />
        <FAQ />
        <Blog />
        <Map />
      </main>
    </>
  );
}
