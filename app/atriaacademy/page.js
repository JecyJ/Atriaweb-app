import Hero from "@components/academy/hero";
import Leaders from "@components/academy/leaders";
import Learnmore from "@components/academy/learnmore";
import Scienceofficer from "@components/academy/scienceofficer";
import Scientific from "@components/academy/scientific";
import Stones from "@components/academy/stones";
import Contact from "@components/institute/contact";
import Subscribe from "@components/institute/subscribe";


const Atriaacademy = () => {
  return (
    <section>
      <Hero />
      <Scienceofficer />
      <Stones />
      <Scientific />
      <Leaders />
      <Learnmore />
      <Contact />
      <Subscribe />
    </section>
  )
}

export default Atriaacademy;