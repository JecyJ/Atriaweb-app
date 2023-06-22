import Image from "next/image";



const Leaders = () => {
  return (
    <section className="w-full h-auto">
        <div className='pb-16 h-auto'>
            <div className='relative top-12 max-w-[600px] md:max-w-[1450px] m-auto'>
                <Image className=' absolute top-48 left-48 md:top-52 md:left-52 lg:top-80 lg:left-96 w-36 lg:w-80 h-20 lg:h-48' src='/assets/images/inscription.png' alt='/' width={200} height={200} />
                <Image className=' absolute z-[-2] top-10 right-0 md:left-28 w-32 lg:w-48 h-32 lg:h-48' src='/assets/images/block.png' alt='/' width={200} height={200} />
                <Image className=' absolute top-40 right-0 z-[-2] hidden md:block md:right-28 w-2/6 md:w-2/12 h-48 md:h-2/4' src='/assets/images/man.png' alt='/' width={200} height={200} />
                <div className="relative text-[#3c4e3d] text-6xl sm:text-7xl lg:text-9xl pt-20 w-full">
                    <h1 className="max-w-[450px] md:hidden ml-auto">Powered by</h1>
                    <h1 className="hidden md:block md:max-w-[1350px] mr-auto">Powered by</h1>
                    <h1 className="md:max-w-[1300px] md:ml-auto">the world's</h1>
                    <h1 className="max-w-[450px] md:max-w-[1350px] ml-auto">most distinguished</h1>
                    <h1>medical leaders.</h1>
                </div>
            </div>


            <div className='md:grid md:grid-cols-2 relative top-12 max-w-[600px] md:max-w-[1250px] m-auto mt-10 md:mt-0'>
                <div className='text-[#3c4e3d] h-96 pt-24'>
                    <Image className=' absolute top-0 left-0 md:left-28 w-2/6 md:w-2/12 h-64 md:h-96' src='/assets/images/woman.png' alt='/' width={200} height={200} />
                    <Image className=' absolute top-40 right-0 z-[2] md:hidden md:right-28 w-2/6 md:w-2/12 h-48 md:h-2/4' src='/assets/images/man.png' alt='/' width={200} height={200} />
                </div>
                <div className="relative text-[#3c4e3d] md:max-w-[650px] m-auto">
                    <p>The Academy brings together experts in more than 30 disciplines from four countries and three continents. In aggregate, they have authored more than 8,600 scientific papers, and studies by Academy members have a combined 878,400 citations. The Academy members have expertise in genetics, sports medicine, cancer, sleep, integrative medicine, geriatrics, metabolic health, resilience, cardiology, neurology, orthopedics, and more.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Leaders;