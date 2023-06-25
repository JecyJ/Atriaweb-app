import React from 'react'

const Practice = () => {
  return (
    <section className='w-full h-auto my-20'>
        <div className='max-w-[420px] sm:max-w-[570px] md:max-w-[770px] lg:max-w-[1200px] m-auto'>
            <ul className='list-[numbers] text-[#3c4e3d] text-lg font-semibold space-y-16 sm:space-y-36'>
                <li className='w-full border-top border-t-2 border-[#3c4e3d]'>
                  <div className='sm:flex justify-between space-y-7 sm:space-y-0 pt-10 sm:pt-20'>
                    <h3 className='w-full md:max-w-[300px]'>Who We Are</h3>
                    <p className='md:max-w-[1100px]'>This Notice of Privacy Practices (“Notice”) describes the privacy practices of Atria Physician Practice New York, P.C., Atria Pharmacy New York, LLC dba Atria Pharmacy, and their physicians, pharmacists, other health care practitioners, and other personnel (“we” or “us”).</p>
                  </div>                  
                </li>
                <li className='w-full border-top border-t-2 border-[#3c4e3d]'>
                  <div className='sm:flex justify-between space-y-7 sm:space-y-0 pt-10 sm:pt-20'>
                    <h3 className='w-full md:max-w-[300px]'>Our Privacy Obligations</h3>
                    <p className='md:max-w-[1100px]'>We are required by law to maintain the privacy of your health information (“Protected Health Information” or “PHI”) and to provide you with this Notice of our legal duties and privacy practices with respect to your PHI.</p>
                  </div>                  
                </li>
                {/* <li className='w-full border-top border-t-2 border-[#3c4e3d]'>
                  <div className='sm:flex justify-between space-y-7 sm:space-y-0 pt-10 sm:pt-20'>
                    <h3 className='w-full md:max-w-[300px]'>Permissible Uses and Disclosures Without Your Written Authorisation</h3>
                    <p className='md:max-w-[1100px]'>We are required by law to maintain the privacy of your health information (“Protected Health Information” or “PHI”) and to provide you with this Notice of our legal duties and privacy practices with respect to your PHI.</p>
                  </div>                  
                </li> */}
            </ul>
        </div>
    </section>
  )
}

export default Practice;