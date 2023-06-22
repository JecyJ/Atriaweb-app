import {BsCircleFill} from 'react-icons/bs'


const Notice = () => {
  return (
    <section className="w-full h-auto">
        <div className="max-w-[450px] md:max-w-[1200px] m-auto">
            <ul className='border-t border-t-[#3c4e3d] border-t-3  my-20'>
                <li className='text-[#3c4e3d] py-8'><BsCircleFill size={28}  /></li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-4xl lg:text-6xl font-semibold'>The Atria Health Collaborative engages the expertise, passion, and resources of the entire Atria team to improve healthcare at scale.</li>
            </ul>
        </div>
    </section>
  )
}

export default Notice;