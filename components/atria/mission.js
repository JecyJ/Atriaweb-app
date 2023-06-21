import {BsCircleFill} from 'react-icons/bs'
import Image from 'next/image';


const Mission = () => {
  return (
    <section className='w-full h-auto mb-20'>
      <div className='relative z-[-2] pb-10'>
        <Image className=' absolute z-[2] right-11 md:right-28 w-2/6 md:w-2/12 h-64 md:h-2/4' src='/assets/images/stones.png' alt='/' width={200} height={150} />
        <ul className='relative top-12 border-t border-t-[#3c4e3d] border-t-3 max-w-[520px] md:max-w-[1250px] m-auto my-20'>
            <li className='text-[#3c4e3d] h-52 pt-24'><BsCircleFill size={28}  /></li>
            <li className='relative md:z-[2] text-[#3c4e3d] text-3xl md:text-5xl font-semibold'>Atria is on a mission to create a new paradigm in medicine. Our approach to health is guided by world-class experts who translate cutting-edge, evidence-based scientific research into medicine in real time.</li>
        </ul>
        <Image className='absolute z-[-2] top-96 md:top-2/4 left-11 md:left-28 w-48' src='/assets/images/rocks.png' alt='/' width={200} height={200} />
      </div>
      <div className='flex flex-cols max-w-[520px] md:max-w-[1250px] w-full m-auto'>
        <p className='w-full'></p>
        <div className='max-w-[400px] md:max-w-[1200px]'>
            <p className='text-[#3c4e3d] text-xl md:text-3xl font-medium leading-tight'>Across all facets of Atria- at the Institute, the Academy of Science & Medicine, and our nonprofit Health Collaborative-we are committed to a proactive, collaborative approach to medicine that allows us to do good locally and globally. We exist to help people trive, help them when they need it, and intervene early with best-in-class technology and predictive testing.</p>
            <Image className='w-2/4 md:w-2/5 h-38 md:h-2/3 mx-auto' src='/assets/images/house.png' alt='/' width={200} height={200} />
        </div>
      </div>
    </section>
  )
}

export default Mission;