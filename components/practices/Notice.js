import {BsCircleFill} from 'react-icons/bs'


const Notice = () => {
  return (
    <section className="w-full h-auto">
        <div className="max-w-[450px] md:max-w-[1200px] m-auto">
            <ul className='border-t border-t-[#3c4e3d] border-t-3  my-20'>
                <li className='text-[#3c4e3d] py-8'><BsCircleFill size={28}  /></li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-5xl lg:text-6xl font-semibold'>This notice describes how medical information about you may be used and disclosed and how you can get access to this information. </li>
            </ul>
        </div>
    </section>
  )
}

export default Notice;