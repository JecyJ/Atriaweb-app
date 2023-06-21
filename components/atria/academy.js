import Link from 'next/link';
import Image from 'next/image';


const Academy = () => {
  return (
    <Link href='/atriaacademy'>
        <section className="w-full h-auto my-20">
            <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
                <Image 
                    className='w-full h-screen md:order-2' 
                    src="/assets/images/couch.jpg"
                    alt = '/' 
                    width={500} height={500}
                />
                <div className="mt-20 space-y-28">
                    <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                        <h3 className='text-base md:text-2xl italic'>Translating science into medicine.</h3>
                        <h1 className='text-4xl md:text-7xl font-medium'>The Academy of Science & Medicine</h1>
                    </div>
                    <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                        <p>The Atria Academy of science & Medicine is made up of more than 50 leading scientist, researchers, and doctors from institutions around the world. The Academy exists to translate science into medicine, accelerating the speed by which breakthrough can reach patients, doctors and the public. The Academy helps clinicians refine diagnostic and treatment protocols as well as disease-prevention strategies, and works with the Atria Collaborative to deliver critical, life-changing information and care.</p>
                    </div>
                </div>
            </div>
        </section>
    </Link>   
  )
}

export default Academy;