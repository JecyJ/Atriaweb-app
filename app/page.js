import Hero from "@components/atria/Hero";
import Academy from "@components/atria/academy";
import Bgvideo from "@components/atria/bgvideo";
import Health from "@components/atria/health";
import Institute from "@components/atria/institute";
import Learning from "@components/atria/learning";
import Medicalminds from "@components/atria/medicalminds";
import Mission from "@components/atria/mission";
import Subscribe from "@components/atria/subscribe";

const Atria = () => {
  return (
    <section>
      <Hero />
      <Bgvideo />
      <Learning />
      <Mission />
      <Medicalminds />
      <Institute />
      <Academy />
      <Health />
      <Subscribe />
    </section>
  )
}

export default Atria;