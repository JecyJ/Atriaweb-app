import Subscribe from "@components/atria/subscribe";
import Art from "@components/institute/art";
import Contact from "@components/institute/contact";
import Doctors from "@components/institute/doctors";
import Doll from "@components/institute/doll";
import Hands from "@components/institute/hands";
import Hero from "@components/institute/hero";
import Livingroom from "@components/institute/livingroom";
import Luggage from "@components/institute/luggage";
import Manhattan from "@components/institute/manhattan";
import Medicine from "@components/institute/medicine";
import Mri from "@components/institute/mri";
import Nurses from "@components/institute/nurses";
import Science from "@components/institute/science";
import Scientists from "@components/institute/scientists";


const Atriainstitute = () => {
  return (
    <section>
      <Hero />
      <Scientists />
      <Livingroom />
      <Science />
      <Medicine />
      <Doctors />
      <Hands />
      <Nurses />
      <Mri />
      <Doll />
      <Luggage />
      <Art />
      <Manhattan />
      <Contact />
      <Subscribe />
    </section>
  )
}

export default Atriainstitute;