import Subscribe from "@components/atria/subscribe";
import Advanced from "@components/health/advanced";
import Balls from "@components/health/balls";
import Bigboulder from "@components/health/bigboulder";
import Cofounder from "@components/health/cofounder";
import Hero from "@components/health/hero";
import Knowledge from "@components/health/knowledge";
import Learnmore from "@components/health/learnmore";
import Painting from "@components/health/painting";
import Stetoscope from "@components/health/stetoscope";
import Contact from "@components/institute/contact";


const Atriahealth = () => {
  return (
    <section>
      <Hero />
      <Cofounder />
      <Bigboulder />
      <Advanced />
      <Knowledge />
      <Balls />
      <Stetoscope />
      <Painting />
      <Learnmore />
      <Contact />
      <Subscribe />
    </section>
  )
}

export default Atriahealth;