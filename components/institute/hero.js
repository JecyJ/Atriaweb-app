import Image from "next/image";


const Hero = () => {
  return (
    <section className='grid content-center pt-72 sm:pt-20 lg:pt-72 w-full h-screen'>
      <div className='z-[-2]'>
        <Image src='/assets/images/cone.png' alt='/' fill cover="true" />
      </div>
      <div className='max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] w-full m-auto space-y-14 sm:space-y-8 text-white'>
        <h1 className='text-lg lg:text-3xl'>Personalized, Proactive, Preventive care</h1>
        <div className='text-6xl lg:text-9xl'>
            <h1>The future of</h1>
            <h1>medicine today.</h1>
        </div>
      </div>
    </section>
  )
}

export default Hero;