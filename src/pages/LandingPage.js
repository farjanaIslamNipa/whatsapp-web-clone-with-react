import React, { useState } from 'react';
import LinkWithQrCode from '../components/LinkWithQrCode';
import tutorialImage from '../assets/tutorial.png'
import LinkWithPhone from '../components/LinkWithPhone';

const SignIn = () => {
  const [linkWith, setLinkWith] = useState('link-with-qr-code')
  return (
    <div className='relative'>
      <div className="bg-default h-[222px] absolute top-0 w-full z-10"></div>
      <div className='px-9 pb-[92px]'>
        <div className="max-w-[1000px] mx-auto z-30 relative min-h-[39px] pt-[27px] mb-[66px]">
          <div className="flex items-center gap-[14px]">
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>
            </span>
            <span className='uppercase text-white font-semibold text-sm'>whatsapp web</span>
          </div>
        </div>
        <div style={{boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 15px'}} className="bg-white max-w-[1000px] mx-auto pt-16 relative z-30 rounded-[3px]">
          {
            linkWith === 'link-with-qr-code' ? <LinkWithQrCode setLinkWith={setLinkWith} /> : <LinkWithPhone setLinkWith={setLinkWith} />
          }


          {/* Bottom section */}
          <div className="bg-[#F9F9FA] py-10 px-[60px]">
            <div className='text-center text-[#41525d] text-[28px] font-light mb-4'>Tutorial</div>
            <div className="text-center">
              <a href="https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=en" target='_blank' rel='noreferrer' className='text-sm text-[#008069] hover:underline'>Need help to get started?</a>
            </div>
            <div className='mt-10 relative'>
              <img src={tutorialImage} alt="" className='mx-auto' />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-gray-800 bg-opacity-40 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="34" viewBox="0 0 28 34"><path fill="#FFF" d="M1 4.983v24.034a2.982 2.982 0 0 0 4.564 2.53L24.792 19.53a2.981 2.981 0 0 0 0-5.058L5.563 2.454A2.983 2.983 0 0 0 1 4.983z"></path></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;