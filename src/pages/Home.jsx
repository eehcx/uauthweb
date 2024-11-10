
import { useEffect, useState } from "react"
import NavbarComponent from "../components/layouts/Navbar"
import '../components/styles/base.styles.css'
import About from "./landing/About"
import HomeContent from "./landing/HomeContent"
import Footer from "./landing/HomeFooter"
import Resources from "./landing/Resourses"
import Docs from "./landing/Docs"
import Pricing from "./landing/Pricing"

function HomePage() {
    const [page, setPage] = useState(0);

    function changeContent(number) {

        setPage(number);
    }

    const renderContent = () => {
        switch (page) {
          case 0: return <HomeContent />;
          case 1: return <About />;
          case 2: return <Resources/>
          case 3: return <Docs/>
          case 4: return <Pricing/>
          default: return <HomeContent />;
        }
    };

    useEffect((renderContent) => {
        // Hace scroll hacia el inicio de la página al cambiar el contenido
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [renderContent]);

    return (
        <div className="HomePage">
            <NavbarComponent changePage={changeContent} />
            {renderContent()}
            <Footer />
        </div>
    );
}

export default HomePage;
