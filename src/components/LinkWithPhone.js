import React, { useEffect, useState } from 'react';
import bdFlag from '../assets/bangladesh.png'

const LinkWithPhone = ({setLinkWith}) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [countries, setCountries] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [countryCode, setCountryCode] = useState('');

  // Fetching country API
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


  //Setting selected country
  const handleSelectCountry = (countryName, flag, countryCode) => {
    setSelectedCountry(countryName)
    setCountryFlag(flag)
    setCountryCode(countryCode)
    setOpenDropdown(false)
  }


  return (
    <div className="pb-[60px] px-[60px] ">
      <div className='text-[#3f5c6e] text-[26px] font-light mb-3 text-center'>Enter phone number</div>
      <div className="text-[#8696a0] text-base mb-8 text-center">Select a country and enter your WhatsApp phone number.</div>

      <div>
        <div className={`relative border rounded-md h-[53px] w-[266px] mx-auto ${openDropdown ? 'border-default' : 'border-borderDefault'}`}>
          {/* Country dropdown button */}
          <div onClick={() => setOpenDropdown(openDropdown => !openDropdown)} className='w-full h-full flex items-center cursor-pointer'>
            <div className='px-6'>
              {
                selectedCountry ? 
                <div className='flex items-center gap-2'>
                 <div>
                  {countryFlag && <img src={countryFlag} className='w-5' alt="" />}
                </div>
                <div>{selectedCountry}</div>
                </div> 
                :
                <div className='flex gap-3 items-center'>
                  <div>
                    <img src={bdFlag} alt="" className='h-5 w-5 object-cover' />
                  </div>
                  <span>Bangladesh</span>
                </div>
              }
            </div>  
          </div>

          {/* Country dropdown box */}
          {
            openDropdown && <div className="country-dropdown-box rounded-sm w-full bg-white absolute top-[58px] z-40 h-[390px] overflow-hidden overflow-y-auto">
              {
                countries?.length ? 
                countries?.sort((a,b) => a?.name.localeCompare(b?.name)).map((country) => (
                  <div onClick={() => handleSelectCountry(country?.name, country?.flags?.svg, country?.callingCodes[0])} key={country.name} className='py-3 cursor-pointer hover:bg-[#f0f2f5] transition-all delay-75 duration-200 ease-out text-[#111b21]'>
                    <div className='px-6 flex justify-between'>
                      <div className='flex items-center'>
                      <div className="h-5 w-5 object-cover mx-[13px]"><img src={country?.flags?.svg} alt="" /></div>
                        <p className='text-[17px] leading-5'>{country.name} <br /> <span className='text-sm text-[#667781]'>{country?.nativeName}</span></p>
                      </div>
                      <div className='text-[#667781]'>+{country?.callingCodes[0]}</div>
                    </div>
                  </div>
                   
                ))
                :
                <p className='p-6 text-gray-400 font-medium'>Loading...</p>
              }
            </div>
          }
        </div>

        
        <div className='border border-borderDefault rounded-md h-[53px] w-[266px] px-6 mx-auto mt-3 flex items-center mb-8'>
          <span>{countryCode ? '+' + countryCode : '+880'}</span>
          <input type="text" className='focus:none outline-none px-2' />
        </div>


        <button className='bg-[#008069] text-white h-10 w-[90px] flex items-center justify-center text-sm uppercase rounded font-semibold mx-auto tracking-wide'>Next</button>
      </div>
      <div className='text-center'><button onClick={() => setLinkWith('link-with-qr-code')} className='text-[#008069] text-[17px] pt-[50px]'>Link with QR code</button></div>
    </div>
  );
};

export default LinkWithPhone;