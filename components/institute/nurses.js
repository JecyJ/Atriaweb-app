import Image from 'next/image';


const Nurses = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/nurses.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>03</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>A world-class team built for you</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>Your personal Chief Medical Officer spearheads the coordination of your care with a dedicated team of Atria doctors. Because we have leading neurologists, cardiologists, internists, pediatricians, and health coaches all under one roof, your Care Team will be tailored to your needs, and will continuously collaborate on your behalf.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Nurses;