import Image from 'next/image';


const Hands = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/hands.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>02</h3>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl  font-medium'>A collaborative approach</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>The atria institute takes an approach to health thats centered on coordinated care to enhance lifelong wellbing and happiness. Instead of one doctor, you have a team of specialists-from neurology and cardiology to pediatrics, geriatrics, and urgent care-working together on your behalf.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hands;