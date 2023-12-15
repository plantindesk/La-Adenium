
export default function AboutUs() {
    return (
      <>
      <div id='banner' className="flex flex-col justify-center items-center gap-4 p-20 text-white ">
        <div className="font-montserrat font-bold text-4xl text-center">
          LA ADENIUM welcomes you
        </div>
        <div className="font-josefin italic text-center text-lg">
          Going back to our roots. Moving forward
        </div>
      </div>
    
      <div className="flex flex-wrap mb-8">
        {/* First div (takes full width on mobile, half width on wider screens) */}
        <div className="w-full md:w-1/4">
          {/* Content for the first div */}
          <div className="text-center">
          <span className="text-base my-2 pt-6 inline-block box-border font-montserrat" >SINCE</span>

            <span className="block text-5xl font-bold mt-2">1985</span>
          </div>
        </div>
    
        {/* Second div (takes full width on mobile, half width on wider screens) */}
        <div className="w-full pt-10  px-2 md:w-3/4  font-hind">
          {/* Content for the second div */}
          Saguna Baug is an eco-friendly agricultural farm located at the foothills of Matheran. The farm is surrounded by perennial Ulhas River. Guests and students get to experience farm life, and learn about our innovative farming methods that have provided rural employment and opportunities for the youth of our villages. We also provide fun activities and stay facilities.
        </div>
      </div>
<div className="flex flex-wrap my-8">
  <div className="w-full md:w-1/2">
          
          <div className="text-center">

          <span className="block text-5xl font-bold mt-2">55</span>
          <span className="text-xs  pt-1 inline-block box-border font-montserrat" >ACRES OF NATURAL SERENITY</span>

            
          </div>
          
        </div>
        <div className="w-full mt-3 md:w-1/2">
          
          <div className="text-center">

          <span className="block text-5xl font-bold mt-2">20</span>
          <span className="text-xs  pt-1 inline-block box-border font-montserrat" >REVITALISING ACTIVITIES</span>

            
          </div>
          
        </div>      
</div>

<div className="container  mt-8 px-2 flex flex-wrap items-center">
      {/* Image */}
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0">
        <img
          src="https://sagunabaug.com/wp-content/uploads/2016/09/PARTNERS.jpg"
          alt="Description of the image"
          className="lg:w-full px-2 h-auto md:max-h-full rounded-lg shadow-lg"
        />
      </div>

      {/* Text */}
      <div className="w-full flex flex-col md:w-1/2 lg:w-2/3 xl:w-3/4 px-4 gap-8">
        <div><h2 className="font-montserrat text-3xl  font-bold "> The Founders</h2></div>
        <div className="flex flex-col justify-center gap-8">
            <p>Saguna Baug started in the late 1960’s as a dream of Gandhian freedom fighter, who was popularly known as Shri Harikaka Bhadsavle. His dream was to set up a strong farming base that would effectively support his family and set an example for all in agricultural self-sustenance.</p>
            <p>Today hundreds flock to find happiness in this beautiful agricultural project which is ever-evolving, yet still takes us back to our roots.</p>
            <p>Come and stay at our farm, enjoy our agricultural tours, the serenity of the river, the culture and traditional art forms of our villages and the fun activities we provide.</p>
            <p>Located just 1.5 hours from Mumbai, Saguna Baug spreads over 16 hectares of land in Malegaon-Neral of the Raigad district in Maharashtra.</p>
        </div>
      </div>
    </div>
    </>
    
    );
    
}

