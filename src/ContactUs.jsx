import'@flaticon/flaticon-uicons/css/solid/rounded.css'
export default function ContactUs() {
  const address = "Saguna Baug, Malegaon Village, Neral East, Raigad District, Maharashtra – 410101";
  const phoneNumbers = [
    "+919370702932",
    "+919209313174",
    "+917774808661",
  ];
  const customerServiceTime = [
    "8am to 7pm (Sun to Thurs)",
    "8am to 10pm (Fri and Sat)",
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-[#fafafa]">
        <div className="text-3xl font-montserrat font-bold border-b-2 border-black border-dotted py-6 my-2">
          Contact Us
        </div>
        <div className="font-hind text-[#666666] text-base text-center px-4 my-6">
          Please call or email us to confirm your booking. We do welcome walk-ins for day picnic packages as well.
        </div>
      </div>
      <div className="flex flex-col justify-center px-4 bg-[#fafafa]">
        <div>
          <div className="font-montserrat font-bold text-xl">
            Address
          </div>
          <div className="font-hind text-[#666666] py-5">
            {address}
          </div>
        </div>
        <div>
          <div className="font-montserrat font-bold text-xl">
            Phone
          </div>
          <div className="font-hind text-[#666666] py-5 flex flex-col gap-4">
            {phoneNumbers.map((number) => (
              <div key={number}>{number}</div>
            ))}
          </div>
        </div>
        <div>
          <div className="font-montserrat font-bold text-xl">
            Customer Service Time
          </div>
          <div className="font-hind text-[#666666] py-5 flex flex-col gap-4">
            {customerServiceTime.map((time) => (
              <div key={time}>{time}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#fafafa]">
        <div className="text-3xl font-montserrat font-bold border-b-2 border-black border-dotted py-6 my-2">
            Enquire Now
        </div>
      </div>
      <div className="px-4 py-6 bg-[#fafafa]">
                <div className="flex flex-col justify-center shadow-md bg-white p-6 gap-12">
                    <div className='flex justify-between items-center border-solid border-2 border-[#d6d8d9] rounded-md py-2 px-4'>
                        <div className='w-full'>
                            <input type="text" name="name" id="name" className='w-full focus:outline-none' placeholder='Name' />
                        </div>
                        <div className='text-2xl'>
                            <i className="h-6 fi fi-sr-user"></i>
                        </div>
                    </div>
                    <div className='flex justify-between items-center border-solid border-2 border-[#d6d8d9] rounded-md py-2 px-4'>
                        <div className='w-full'>
                            <input type="email" name="email" id="email" placeholder='Email' className='w-full focus:outline-none'/>
                        </div>
                        <div className='text-2xl'>
                            <i className="h-6 fi fi-sr-envelope"></i>
                        </div>
                    </div>
                    <div className='flex justify-between items-center border-solid border-2 border-[#d6d8d9] rounded-md py-2 px-4'>
                        <div className='w-full'>
                            <input type="phone" name="phoneno" id="phoneno" placeholder='Phone Number' className='w-full focus:outline-none'/>
                        </div>
                        <div className='text-2xl'>
                            <i className="h-6 fi fi-sr-circle-phone"></i>
                        </div>
                    </div>
                    <div>
                        <div className='mb-8 font-semibold font-hind text-lg'>
                            Inquiry Type
                        </div>
                        <div className='font-hind'>
                            <input type="radio" name="inquiry" id="daytrip"/><for id="daytrip">Day Trip</for>
                            <input type="radio" name="inquiry" id='nightstay'/><for id="nightstay">Night Stay</for>
                            <input type="radio" name="inquiry" id='general'/><for id="general">General</for>
                            <input type="radio" name="inquiry" id='wedding'/><for id="wedding">Wedding</for>
                        </div>
                    </div>
                </div>
        </div>
    </>
  );
}
