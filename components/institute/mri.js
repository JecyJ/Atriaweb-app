import Image from 'next/image';


const Mri = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/mri.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>04</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>Cutting-Edge Technology</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>The Atria Institute houses an advanced imaging center on site, with state-of-the-art heart and brain imaging and cancer screening. As a member, you receive access to advanced technology, including genomics, plus real-time data and analysis.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mri;