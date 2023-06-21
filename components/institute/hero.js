import Image from "next/image";


const Hero = () => {
  return (
    <section className='grid content-center pt-72 w-full h-screen'>
      <div className='z-[-2]'>
        <Image src='/assets/images/cone.png' alt='/' fill cover />
      </div>
      <div className='max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] w-full m-auto space-y-14 text-white'>
        <h1 className='text-lg md:text-3xl'>Personalized, Proactive, Preventive care</h1>
        <div className='text-6xl lg:text-9xl'>
            <h1>The future of</h1>
            <h1>medicine today.</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero;
