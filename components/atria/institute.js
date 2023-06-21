import Image from 'next/image';
import Link from 'next/link';


const Institute = () => {
  return (
    <Link href='/atriainstitute'>
      <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
          <Image 
            className='w-full h-screen md:order-2' 
            src="/assets/images/living-room.jpg"
            alt = '/' 
            width={500} height={500}
           />
          <div className="mt-20 space-y-28">
            <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
              <h3 className='text-base md:text-2xl italic'>Delivering personalized, proactive, preventive care.</h3>
              <h1 className='text-4xl md:text-7xl font-medium'>The Atria Institute</h1>
            </div>
            <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
              <p>The Atria Institute provides coordinated health care and comprehensive predictive testing to enable a highly personalized approach to well-being. Our multidisciplinary team of in-house physicians combines compassionate care with leading-edge technology, offering advanced screening for cancer, heart, metabolic, and brain disease at our on-site, state-of-the-art testing and imaging center. We empower our members to take a proactive approach to health and well-being and we provide the suport they need to get there.</p>
            </div>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Institute;