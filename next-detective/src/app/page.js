// import MainBG from "./components/MainBG/MainBG.jsx";
// import About from "../../components/About/About.jsx";
// import Blog from "../../components/Blog/Blog.jsx";
// import Director from "../../components/Director/Director.jsx";
// import FAQ from "../../components/FAQ/FAQ.jsx";
// import FirstVisit from "../../components/FirstVisit/FirstVisit.jsx";
// import License from "../../components/License/License.jsx";
// import Map from "../../components/Map/Map.jsx";
// import Review from "../../components/Review/Review.jsx";
// import Safety from "../../components/Safety/Safety.jsx";
// import Services from "../../components/Services/Services.jsx";
// import Youtube from "../../components/Youtube/Youtube.jsx";
import Link from "next/link";
import Header from "../app/components/Header/Header";

function Main() {
  return (
    <>
      <main>
        <Header />
        <Link href={"/blog"}>Blog</Link>
        <Link href={"/article"}>Article</Link>
        <Link href={"/geolocation"}>Geolocation</Link>
        <Link href={"/reviews"}>Reviews</Link>
        <Link href={"/contacts"}>Contacts</Link>
        <Link href={"/price"}>Price</Link>
        <Link href={"/main"}>Main</Link>
        {/* <MainBG />
        <About />
        <Services />
        <License />
        <Youtube />
        <FirstVisit />
        <Director />
        <Review />
        <Safety />
        <FAQ />
        <Blog />
        <Map /> */}
      </main>
    </>
  );
}

export default Main;
