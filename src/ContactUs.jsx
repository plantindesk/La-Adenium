export default function ContactUs(props) {
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
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl font-montserrat font-bold border-b-2 border-black border-dotted py-6 my-2">
          Contact Us
        </div>
        <div className="font-hind text-[#666666] text-base text-center px-4 my-6">
          Please call or email us to confirm your booking. We do welcome walk-ins for day picnic packages as well.
        </div>
      </div>
      <div className="flex flex-col justify-center px-4">
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
    </>
  );
}
