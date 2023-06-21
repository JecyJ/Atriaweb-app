import styles from '@styles/learning.module.css'

const Learning = () => {
  return (
    <section className='space-y-52'>
      <div className='text-[#3c4e3d] font-bold text-3xl md:text-6xl lg:text-9xl overflow-hidden'>
        <div className={`flex space-x-10 ${styles.marquee}`}>
          <span className='whitespace-nowrap'>
            Learning what is biologically possible.{' '}
          </span>
          <span className='whitespace-nowrap'>
            Learning what is biologically possible.{' '}
          </span>
        </div>
      </div>
      <div className='max-w-[450px] md:max-w-[900px] mx-auto'>
        <p className='text-[#3c4e3d] text-xl md:text-3xl text-center'>
          Our multidisciplinary team of scientists, physicians, public health
          experts, and communicators are committed to advancing health care
          today - and sharing what we learn for the benefit of all.
        </p>
      </div>
    </section>
  );
};

export default Learning;





// const Learning = () => {
//   return (
//     <section className='space-y-52'>
//       <div className='text-[#3c4e3d] flex space-x-5 font-bold text-3xl md:text-6xl lg:text-9xl overflow-hidden'>
//         <div className='flex animate-marquee'>
//           <span className='whitespace-nowrap'>
//             Learning what is biologically possible.{' '}
//           </span>
//         </div>
//       </div>
//       <div className='max-w-[450px] md:max-w-[900px] mx-auto'>
//         <p className='text-[#3c4e3d] text-xl md:text-3xl text-center'>
//           Our multidisciplinary team of scientists, physicians, public health
//           experts, and communicators are committed to advancing health care
//           today - and sharing what we learn for the benefit of all.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Learning;











// const Learning = () => {
//   return (
//     <section className='space-y-52'>
//       <div className='text-[#3c4e3d] flex space-x-5 font-bold text-3xl md:text-6xl lg:text-9xl'>
//         <span>Learning what is biologically possible.</span>
//         <span>Learning what is biologically possible.</span>
//       </div>
//       <div className='max-w-[450px] md:max-w-[900px] mx-auto'>
//         <p className='text-[#3c4e3d] text-xl md:text-3xl text-center'>Our multidiciplinary team of scientists, physicians, public health experts, and communicators are commited to advancing health care today- and sharing what we learn for the benefit of all.</p>
//       </div>
//     </section>
//   )
// }

// export default Learning;
