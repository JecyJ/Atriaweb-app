import Image from 'next/image';


const Luggage = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/luggage.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>06</h3>
                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-medium'>24/7 medical care</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>The Atria Institute offers 24/7 care in the tristate area for urgent or routine needs. Whether someone is sick or it's time for a vaccine, lab draws, or infusions, we will come to your home, office, or see you at the Institute. You have a direct line to your Care Team, on-call 24/7 telemedicine, nationwide Rx delivery, and support no matter where you are in the world.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Luggage;