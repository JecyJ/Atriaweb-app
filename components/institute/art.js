import Image from 'next/image';


const Art = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/art.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>07</h3>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-medium'>Atria for companies</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>Atria caters to employers that want to promote long-term health and wellness for their teams. More than just an executive physical, the Institute provides year-round premium healthcare and benefits for your organization with the level of dedication and convenience that your employees deserve.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Art;