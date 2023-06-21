import Image from "next/image";

const Doctors = () => {
  return (
    <section className="w-full h-auto my-20">
        <div className="grid md:grid-cols-2 md:max-w-[1250px] m-auto">
            <Image 
                className='w-full h-screen md:order-2' 
                src="/assets/images/doctor.jpg"
                alt = '/' 
                width={500} height={500}
             />
            <div className="mt-20 space-y-28">
                <div className='text-[#3c4e3d] text-center space-y-10 max-w-[520px] sm:max-w-[620px] m-auto'>
                    <h3 className='text-base md:text-2xl italic'>01</h3>
                    <h1 className='text-4xl md:text-7xl font-medium'>Extraordinary doctors, modern science</h1>
                </div>
                <div className='text-[#3c4e3d] text-base md:text-xl max-w-[520px] sm:max-w-[620px] m-auto'>
                    <p>We exist to deliver healthcare as it should be. Our multidisciplinary clinical team and Academy members-consisting of more than 50 distinguished scientists, resaerchers, and doctors-collaborate to deliver medicine to you and your family. We deligently curate, vet and integrate scinetific breakthroughs into your care plan, and give you direct access to some of the countrys top doctors and specialists.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Doctors;