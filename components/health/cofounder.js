import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'
import {BsDashLg} from 'react-icons/bs'
import Image from 'next/image';

const Cofounder = () => {
  return (
    <section className='w-full h-auto'>
        <div>
            <ul className=' relative top-40 md:top-0 md:mt-20 z-[2] border-t border-t-[#3c4e3d] border-t-3 max-w-[520px] md:max-w-[1250px] m-auto text-[#3c4e3d]'>
                <li className='flex relative text-[#3c4e3d] py-10'>
                    <RiDoubleQuotesL size={28}  />
                    <RiDoubleQuotesR size={28}  />
                    <Image className=' absolute z-[-2] top-0 right-0 w-32 md:w-48 h-32 md:h-48' src='/assets/images/flat-rock.jpg' alt='/' width={200} height={200} />
                </li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-5xl sm:text-6xl lg:text-7xl font-semibold'>When we all join resources and work together, what can we achieve? We can change the course of global health and have an impact where it's needed most.</li>
            </ul>
            <div className='md:grid md:grid-cols-2 relative max-w-[520px] md:max-w-[1250px] m-auto md:mt-0'>
                <Image className='relative top-0 left-0 md:left-28 w-3/6 md:w-3/5 h-80 md:h-4/5 mb-9 md:mb-0' src='/assets/images/poised.jpg' alt='/' width={200} height={200} />
                <div className='md:max-w-[850px] m-auto'>
                    <h3 className='flex items-center md:text-right'><BsDashLg /> David Saltzman</h3>
                    <h3 className='pl-4'>Co-Founder, Atria & Co-Chair, Atria Health Collaborative</h3>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default Cofounder;