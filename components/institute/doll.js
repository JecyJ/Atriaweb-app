import Image from 'next/image';


const Doll = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/doll.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>05</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>Care for the whole family</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>At Atria, we provide 360° care for every family member. Your membership covers children up to the age of 22 at no additional cost and considers adult children as well. By caring for your whole family, our team has a more complete picture of your family's health and can provide the highest quality of care possible.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Doll;