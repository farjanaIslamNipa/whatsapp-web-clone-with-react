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
      </div>
      <button onClick={() => setLinkWith('link-with-qr-code')} className='text-[#008069] text-[17px] pt-[50px]'>Link with QR code</button>
    </div>
  );
};

export default LinkWithPhone;