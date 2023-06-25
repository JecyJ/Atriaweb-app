import {BsCircleFill} from 'react-icons/bs'


const Arbitration = () => {
  return (
    <section className="w-full h-auto">
        <div className="max-w-[450px] md:max-w-[1200px] m-auto">
            <ul className='border-t border-t-[#3c4e3d] space-y-7 border-t-3  my-20'>
                <li className='text-[#3c4e3d] py-8'><BsCircleFill size={28}  /></li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-4xl lg:text-5xl font-medium'>
                    <strong className='text-[#3c4e3d]/60'>Effective Date: May 1, 2022 - </strong>
                    Arbitration Notice: you agree that disputes between you and us or the health care providers arising from or relating to these terms and conditions or the platform will be resolved by binding arbitration and you waive your rights to a jury trial and to participate in a class action lawsuit or class-wide arbitration, as further set forth below.
                </li>
            </ul>
        </div>
    </section>
  )
}

export default Arbitration;