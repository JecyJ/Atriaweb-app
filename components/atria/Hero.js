

const Hero = () => {
  return (
    <section className='relative w-full h-screen'>
      <div className=' max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] m-auto pt-48 md:pt-56 h-auto'>
        <h1 className='text-7xl lg:text-9xl text-[#3c4e3d] w-[300px] md:w-[1250px]'>Turning Science</h1>
        <h1 className='md:text-right md:mt-28 text-7xl lg:text-9xl text-[#3c4e3d] w-[300px] md:w-[1250px]'>into Medicine.</h1>
        <div className='md:hidden'>
          <div className='grid grid-cols-4 gap-4 text-2xl text-[#3c4e3d] font-semibold leading-none md:max-w-[580px] ml-auto mt-20'>
            <h3>The future of health</h3>
            <h3></h3>
            <h3>brought to you today.</h3>
          </div>
          <div className='max-w-[270px] mt-12'>
            <h3 className='text-[#3c4e3d] text-lg leading-tight'>We are powering a movemnt for proactive, preventive healthcare informed by cutting-edge science and technology.</h3>
          </div>
        </div>          
      </div>
    </section>
  )
}

export default Hero;