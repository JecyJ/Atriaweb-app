import Image from "next/image";


const Bigboulder = () => {
  return (
    <section className='relative bg-contain h-auto w-full my-20'>
        <Image className="absolute" src='/assets/images/big-boulder.jpg' alt='/' width={1700} height={1500} />
        <div className="relative top-7 md:top-20 max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] m-auto shadow-2xl">
            <Image src='/assets/images/big-boulder.jpg' alt='/' width={1700} height={1500} />
        </div>        
    </section>
  )
}

export default Bigboulder;