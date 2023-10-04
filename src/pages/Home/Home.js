import Hero from "./Hero/Hero";
import Specials from "./Specials/Specials";
import Testimonials from "./Testimonials/Testimonials";
import About from "./About/About";

function Home() {
    return(
        <>
            <Hero/>
            <main>
                <Specials/>
                <Testimonials/>
                <About/>
            </main>
        </>
    );
}

export default Home;
