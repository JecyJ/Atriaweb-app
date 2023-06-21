import Link from 'next/link';
import {AiOutlineCopyrightCircle} from 'react-icons/ai'


const Footer = () => {
  return (
    <section className='w-full h-auto mt-10'>
      <div className='max-w-[520px] sm:max-w-[620px] md:max-w-[1200px] m-auto text-[#3c4e3d]'>
        <div className='flex pt-10 justify-between items-center pr-5 md:pr-20'>
          <Link href='/'>
            <h1 className='text-3xl md:text-5xl'>atria</h1>
          </Link>
          <h3 className='max-w-[150px] text-xl'>Translating science into medicine</h3>
          <ul className='max-w-[150px]'>
            <Link href='/atriainstitute'>
              <li>Atria Institute</li>
            </Link>
            <Link href='/atriaacademy'>
              <li>Atria Academy of Science & Medicine</li>
            </Link>
            <Link href='/atriahealth'>
              <li>Atria Health Collaborative</li>
            </Link>
          </ul>
        </div>
        <div className='flex justify-between items-center pr-5 md:pr-20 mt-10'>
          <Link href='/'>
            <h1 className='text-4xl'></h1>
          </Link>
          <Link href='/'>
            <h3 className='max-w-[90px] text-lg'>Join The Movement</h3>
          </Link>          
          <ul className='max-w-[150px]'>
            <Link href='/'>
              <li>Career Opportunitites</li>
            </Link>
            <Link href='/'>
              <li>Request Info</li>
            </Link>
            <Link href='/'>
              <li>Terms And Conditions</li>
            </Link>
            <Link href='/'>
              <li>Privacy Policy</li>
            </Link>
            <Link href='/'>
              <li>Privacy Practices</li>
            </Link>
          </ul>
        </div>
        <div className='flex justify-between mt-28 md:mt-44'>
          <h2 className='text-2xl md:text-4xl w-full'>36 East 57th <br className='sm:hidden' /> Street New York, <br className='sm:hidden' /> NY 10022</h2>
          <div className='max-w-[300px] md:max-w-[400px] mt-auto'>
            <h2 className='flex items-center text-2xl md:text-3xl px-3'><AiOutlineCopyrightCircle size={20} /> 2023</h2>
          </div>                
        </div>
      </div>
    </section>
  )
}

export default Footer;


{/* <section className='w-full max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] m-auto text-[#3c4e3d]'>
      <div className='flex pt-10 justify-between items-center pr-5 md:pr-20'>
        <Link href='/'>
          <h1 className='text-3xl md:text-5xl'>atria</h1>
        </Link>
        <h3 className='max-w-[150px] text-xl'>Translating science into medicine</h3>
        <ul className='max-w-[150px]'>
          <Link href='/atriainstitute'>
            <li>Atria Institute</li>
          </Link>
          <Link href='/atriaacademy'>
            <li>Atria Academy of Science & Medicine</li>
          </Link>
          <Link href='/atriahealth'>
            <li>Atria Health Collaborative</li>
          </Link>
        </ul>
      </div>
      <div className='flex justify-between items-center pr-5 md:pr-20 mt-10'>
        <Link href='/'>
          <h1 className='text-4xl'></h1>
        </Link>
        <Link href='/'>
          <h3 className='max-w-[90px] text-lg'>Join The Movement</h3>
        </Link>          
        <ul className='max-w-[150px]'>
          <Link href='/'>
            <li>Career Opportunitites</li>
          </Link>
          <Link href='/'>
            <li>Request Info</li>
          </Link>
          <Link href='/'>
            <li>Terms And Conditions</li>
          </Link>
          <Link href='/'>
            <li>Privacy Policy</li>
          </Link>
          <Link href='/'>
            <li>Privacy Practices</li>
          </Link>
        </ul>
      </div>
      <div className='flex justify-between mt-28 md:mt-44'>
        <h2 className='text-2xl md:text-4xl max-w-[200px] md:max-w-[450px]'>36 East 57th Street New York, NY 10022</h2>
        <div className='max-w-[300px] md:max-w-[400px] mt-auto'>
          <h2 className='flex items-center text-2xl md:text-3xl px-3'><AiOutlineCopyrightCircle size={20} /> 2023</h2>
        </div>                
      </div>       
    </section> */}
