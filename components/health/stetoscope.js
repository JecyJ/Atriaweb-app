import Image from 'next/image';


const Stetoscope = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/stetoscope.png"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>02</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>Expanding medical Knowledge</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>The Atria Academy of Science & Medicine will provide a channel to capture and transfer knowledge, and enable us to invest in and promote life-saving interventions. We will share our learnings with the medical community, policymakers, and the public, who can replicate and build on our progress.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stetoscope;