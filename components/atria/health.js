import Image from 'next/image';
import Link from 'next/link';

const Health = () => {
  return (
    <Link href='/atriahealth'>
        <section className="w-full h-auto my-20">
            <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
                <Image 
                    className='w-full h-screen md:order-2' 
                    src="/assets/images/sofa.jpg"
                    alt = '/' 
                    width={500} height={500}
                />
                <div className="mt-20 space-y-28">
                    <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                        <h3 className='text-base md:text-2xl italic'>Commiting to the greater good.</h3>
                        <h1 className='text-4xl md:text-7xl font-medium'>The Atria Health Collaborative</h1>
                    </div>
                    <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                        <p>The Atria Health Collaborative is a nonprofit organization that engages the expertise, passion, and resources of the entire Atria team to improve health care at scale. We bring together a community of doctors, reaserchers, and public health experts to invest in and promote proven intervention and promising new approaches to preventable and reneuable diseases.</p>
                    </div>
                </div>
            </div>
        </section>
    </Link>   
  )
}

export default Health;