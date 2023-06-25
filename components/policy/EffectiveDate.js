import {BsCircleFill} from 'react-icons/bs'


const EffectiveDate = () => {
  return (
    <section className="w-full h-auto">
        <div className="max-w-[450px] md:max-w-[1200px] m-auto">
            <ul className='border-t border-t-[#3c4e3d] space-y-7 border-t-3  my-20'>
                <li className='text-[#3c4e3d] py-8'><BsCircleFill size={28}  /></li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-4xl lg:text-5xl font-medium'>Effective Date: May 1, 2022</li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-4xl lg:text-5xl font-medium'>If you are experiencing a medical emergency, call 911 immediately.</li>
                <li className='relative md:z-[2] text-[#3c4e3d]/60 text-4xl lg:text-5xl font-medium'>Please read this Privacy Policy carefully before using our services, our website or our mobile applications.</li>
                <li className='relative md:z-[2] text-[#3c4e3d]/60 text-4xl lg:text-5xl font-medium'>Important note - Our Notice of Privacy Practices (https://atria.org/privacy-practices/) is a separate document that governs how medical information about you may be used and disclosed in connection with the health care services in accordance with the Health Insurance Portability and Accountability Act (“HIPAA”).</li>
            </ul>
        </div>
    </section>
  )
}

export default EffectiveDate;