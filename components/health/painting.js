import Image from 'next/image';


const Painting = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/painting.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>03</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>Measuring our momentum</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>Our impact will be measured through transparent reporting. We target our efforts in areas where we hope to solve meaningful gaps in services, where we are uniquely positioned to make a difference, and where we can observe and track our impact.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Painting;