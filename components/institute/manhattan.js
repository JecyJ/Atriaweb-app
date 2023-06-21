import {BsCircleFill} from 'react-icons/bs'

const Manhattan = () => {
  return (
    <section className='w-full h-auto'>
        <div className='max-w-[520px] md:max-w-[1250px] m-auto'>
            <ul className='border-t border-t-[#3c4e3d] border-t-3  my-20'>
                <li className='text-[#3c4e3d] py-8'><BsCircleFill size={28}  /></li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-5xl md:text-7xl font-semibold'>Occupying 20,000 sq. ft. in the heart of Manhattan, the institute houses our testing and imaging center, private member suites, a pediatric center, a movement lab, a lecture garden, an integrated technology showcase, and more.</li>
            </ul>
            <button className='text-white bg-[#3c4e3d] border-[#3c4e3d] w-full md:w-2/6 py-6 rounded-full'>Join Atria</button>            
        </div>
    </section>
  )
}

export default Manhattan;