import React, { useEffect, useState } from 'react';

const LinkWithPhone = ({setLinkWith}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
      const getCountries = async () => {
        try{
          const response = await fetch(`https://restcountries.com/v2/all`);
          const data = await response.json()
          setCountries(data.slice(0, 150))
        }catch(error){
          console.log(error)
        }
      }

    getCountries()
    console.log(countries)
  }, []);
  return (
    <div className="pb-[60px] px-[60px] ">
      <div className='text-[#41525d] text-[26px] font-light mb-3 text-center'>Enter phone number</div>
      <div className="text-[#8696a0] text-base mb-8 text-center">Select a country and enter your WhatsApp phone number.</div>

      <div>
        <div className='relative border border-borderDefault rounded-md h-[53px] w-[266px] mx-auto cursor-pointer'>
          <div onClick={() => setOpenDropdown(openDropdown => !openDropdown)} className='w-full h-full flex items-center'>
            <div className='px-6'>Bangladesh {countries?.length}</div>  
          </div>
          {
            openDropdown && <div className="country-dropdown-box p-4 w-full bg-white absolute top-[58px] z-40 h-[390px] overflow-hidden overflow-y-auto">
              {
                countries?.length && 
                countries?.sort((a,b) => a?.name.localeCompare(b?.name)).map((country) => (
                  <div key={country.name} >
                    <div className='px-6 flex items-center'>
                    <img src={country?.flags?.svg} alt="" className='h-4' />
                      <p className='text-[17px] leading-5'>{country.name} <br /> <span className='text-sm'>{country?.nativeName}</span></p>
                      <div className='text-red-400 font-bold'>{country?.callingCodes[0]}</div>
                      
                    </div>
                  </div>
                   
                ))
              }
            </div>
          }
        </div>
        {/* <select name="" id="" className='border border-borderDefault rounded-md h-[53px] w-[266px] px-6' placeholder='Bangladesh'>
          <option value="" selected>Bangladesh</option>
        </select> */}
        <div className='border border-borderDefault rounded-md h-[53px] w-[266px] px-6 mx-auto mt-3 flex items-center mb-8'>
          +880
        </div>
        <button className='bg-[#008069] text-white h-10 w-[90px] flex items-center justify-center text-sm uppercase rounded font-semibold mx-auto tracking-wide'>Next</button>
      </div>
      <div className='text-center'><button onClick={() => setLinkWith('link-with-qr-code')} className='text-[#008069] text-[17px] pt-[50px]'>Link with QR code</button></div>
    </div>
  );
};

export default LinkWithPhone;