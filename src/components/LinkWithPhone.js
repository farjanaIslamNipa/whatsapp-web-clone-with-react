import React from 'react';

const LinkWithPhone = ({setLinkWith}) => {
  return (
    <div className="pb-[60px] px-[60px] text-center">
      <div className='text-[#41525d] text-[26px] font-light mb-4'>Enter phone number</div>
      <div className="text-[#8696a0] text-base mb-8">Select a country and enter your WhatsApp phone number.</div>

      <div>
        <select name="" id="" className='border border-borderDefault rounded-md h-[53px] w-[266px] px-6' placeholder='Bangladesh'>
          <option value="" selected>Bangladesh</option>
        </select>
        <div className='border border-borderDefault rounded-md h-[53px] w-[266px] px-6 mx-auto mt-3 flex items-center mb-8'>
          +880
        </div>
        <button className='bg-[#008069] text-white h-10 w-[90px] flex items-center justify-center text-sm uppercase rounded font-semibold mx-auto tracking-wide'>Next</button>
      </div>
      <button onClick={() => setLinkWith('link-with-qr-code')} className='text-[#008069] text-[17px] pt-[50px]'>Link with QR code</button>
    </div>
  );
};

export default LinkWithPhone;