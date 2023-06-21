'use client';

import { useEffect, useRef } from 'react'


const Bgvideo = () => {
  const videoRef = useRef();

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.play();
    });

    return () => {
      video.removeEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    };
  }, []);


  return (
    <section className='relative w-full h-auto md:h-auto md:mb-20'>
      <div className='relative mt-20 md:mt-14'>
        <video ref={videoRef} className='relative w-full h-full object-cover' autoPlay loop muted>
          <source src='/assets/video/bg-video.mp4' type='video/mp4' />
        </video> 
        <div className='absolute w-full top-0 z-[2] max-w-[520px] sm:max-w-[620px] md:max-w-[1250px] m-auto hidden md:block'>
          <div className='grid grid-cols-4 gap-4 text-lg text-[#3c4e3d] font-semibold leading-none md:max-w-[580px] ml-auto '>
            <h3>The future of health</h3>
            <h3></h3>
            <h3>brought to you today.</h3>
          </div>
          <h3 className='text-[#3c4e3d] text-base md:text-right leading-tight md:max-w-[250px] ml-auto mt-12'>We are powering a movemnt for proactive, preventive healthcare informed by cutting-edge science and technology.</h3>
        </div>
      </div>
    </section>
  )
}

export default Bgvideo;
