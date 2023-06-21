import {BsCircleFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section className='h-auto w-full'>
        <div className='max-w-[520px] md:max-w-[1250px] m-auto'>
            <ul className='border-t border-t-[#3c4e3d] border-t-3  my-20'>
                <li className='text-[#3c4e3d] py-8'><BsCircleFill size={28}  /></li>
                <li className='relative md:z-[2] text-[#3c4e3d] text-5xl md:text-7xl font-semibold'>Want to learn more? Contact us via the form below and we will be in touch.</li>
            </ul>
        </div>
        <div className='max-w-[520px] md:max-w-[1250px] m-auto mt-20'>
            <form>
                <div className='grid md:grid-cols-2 py-5 border-b-4 border-dotted border-b-[#3c4e3d]'>
                    <label htmlFor='fullname'>
                        <p className='w-full h-full md:pt-3 md:text-center text-semibold text-[#3c4e3d] md:text-3xl'>Full Name</p>
                    </label>
                    <input
                        className='h-14 pl-2 md:text-3xl rounded-xl text-lg bg-[#e7e4df] text-[#3c4e3d]'
                        type='Text'
                        placeholder='Please enter your first name'
                        name='fullname'
                     />
                </div>
                <div className='grid md:grid-cols-2 py-5 border-b-4 border-dotted border-b-[#3c4e3d]'>
                    <label htmlFor='fullname'>
                        <p className='w-full h-full md:pt-3 md:text-center text-semibold text-[#3c4e3d] md:text-3xl'>Subject</p>
                    </label>
                    <select className='text-[#3c4e3d] text-xl bg-[#e7e4df] py-5' name="subject" id="subject">
                        <option value="Atria Institute">Atria Institute</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Atria Membership">Atria Membership</option>
                        <option value="Press Inquiry">Press Inquiry</option>
                        <option value="Atria Academy of Science & Medicine">Atria Academy of Science & Medicine</option>
                        <option value="Atria Health Collaborative">Atria Health Collaborative</option>
                    </select>
                </div>
                <div className='grid md:grid-cols-2 py-5 border-b-4 border-dotted border-b-[#3c4e3d]'>
                    <label htmlFor='email'>
                        <p className='w-full h-full md:pt-3 md:text-center text-semibold text-[#3c4e3d] md:text-3xl'>Email</p>
                    </label>
                    <input
                        className='h-14 pl-2 md:text-3xl rounded-xl text-lg bg-[#e7e4df] text-[#3c4e3d]'
                        type='Email'
                        placeholder='Please enter your email address'
                        name='email'
                     />
                </div>
                <div className='grid md:grid-cols-2 py-5 border-b-4 border-dotted border-b-[#3c4e3d]'>
                    <label htmlFor='message'>
                        <p className='w-full h-full md:pt-3 md:text-center text-semibold text-[#3c4e3d] md:text-3xl'>Message</p>
                    </label>
                    <input
                        className='h-14 pl-2 md:text-3xl rounded-xl text-lg bg-[#e7e4df] text-[#3c4e3d] border-bottom'
                        type='Textarea'
                        placeholder='Please enter a message'
                        name='message'
                     />
                </div>
                <button className='text-white bg-[#3c4e3d] border-[#3c4e3d] w-full md:w-2/6 py-6 rounded-full my-4'>Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact;