

const Subscribe = () => {
  return (
    <section className=' max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] m-auto mt-20 mb-5'>
      <form className='text-[#3c4e3d] w-full space-y-4'>
        <label htmlFor='newsletter'>
          <h2 className='text-lg md:text-3xl'>Subscribe to the Atria Newsletter</h2>
        </label>
        <div className='flex '>
          <input
            className='text-2xl md:text-7xl py-4 pl-3 w-full rounded-full border-none bg-[#e7e4df]'
            type='Email'
            placeholder='Enter your email here'
            name='email'
          />
          <button className='ml-3 p-2 md:p-3 w-2/4 border rounded-full border-[#3c4e3d] text-[#3c4e3d] text-lg md:text-4xl'>Subscribe</button>
        </div>            
      </form>  
    </section>
  )
}

export default Subscribe;
