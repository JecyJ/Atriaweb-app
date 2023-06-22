import {RiDoubleQuotesL, RiDoubleQuotesR} from 'react-icons/ri'
import {BsDashLg} from 'react-icons/bs'

const Scienceofficer = () => {
  return (
    <section className='w-full h-auto my-20'>
        <div>
            <ul className='top-12 border-t border-t-[#3c4e3d] border-t-3 max-w-[520px] md:max-w-[1250px] m-auto my-20 text-[#3c4e3d]'>
                <li className='flex relative text-[#3c4e3d] py-10'><RiDoubleQuotesL size={28}  /><RiDoubleQuotesR size={28}  /></li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-5xl lg:text-7xl font-semibold'>We're asking what is biologically possible, how we can imporve healthspan, and how we can equitably make this available for as many people as possible.</li>
            </ul>
            <div className='max-w-[520px] md:max-w-[1250px] m-auto text-[#3c4e3d]'>
                <div className='md:max-w-[650px] ml-auto'>
                    <h3 className='flex items-center md:text-right'><BsDashLg /> David W. Dodick, MD, FACP, FRCP, FAAN, FANA, FAHS</h3>
                    <h3 className='pl-4'>Chief Science Officer & Chair, Atria Academy of Science & Medicine</h3>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default Scienceofficer;