import React, { useState, useRef, useEffect } from 'react';
import './CompanyPage.css';
import EmailSignup from './EmailSignup';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AnimatedBorderCTA from './AnimatedBorderCTA';



const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="fill rounded-lg overflow-hidden shadow-lg p-8 m-6 border-2 border-green-500">
      <div className="flex items-center">
        <img className="w-10 h-10 mr-4" src={icon} alt="Service icon" />
        <div className="flex flex-col justify-between">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

const GrayBar = () => {
  return (
    <div className="w-3/5 mx-auto my-8 bg-gray-300 h-2 rounded-full"></div>
  );
};

// Adjust PageCard component for mobile
const PageCard = ({ icon, title, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 }); // Adjust threshold value as needed

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if(cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} flex flex-col md:flex-row items-center justify-center mx-4 md:mx-16 my-8 h-auto md:h-[80vh]`}>
      <div className='md:w-1/3 mb-4 md:mb-0'>
        <h1 className='font-bold text-green-800 text-3xl md:text-4xl'>{title}</h1>
        <p className='text-xl md:text-2xl'>{description}</p>
      </div>
      <div className='w-full md:w-1/2'>
        <img
          src={icon}
          alt='UI of the recommendation system'
          loading="lazy"
          className="transition-opacity duration-400 ease-in"
        />
      </div>
    </div>
  );
};


const bgImageUrl = `${process.env.PUBLIC_URL}/images/orchard.svg`;
function CompanyPage() {
  return (
    <>


    <div 
      style={{ backgroundImage: `url(${bgImageUrl})` }} 
      className="bg-cover h-screen flex items-center justify-center ">
        <p className = "outer-headings text-center m-20">
            <h1 className='text-4xl font-bold max-w-xl font-poppins'>
            Empower Your Farm and Connect with Innovation, all in one open platform
            </h1>
            <br>
            </br>
            <h2 className='max-w-[50rem] text-2xl font-poppins'>
            Access a wealth of relevant data sources, automate and simplify farming decisions, and seamlessly integrate the latest in agricultural research & robotics
            </h2>
          </p>

    </div>
  

<PageCard icon = {process.env.PUBLIC_URL + "/images/crecommender.png"}
          title = 'Automated Data-Driven Recommendations at Your Fingertips'
          description = 'Unlock precision agriculture with personalized, data-driven recommendations. Guided by comprehensive analysis, make informed decisions to boost yield and conserve valuable resources, and avoid repetitive time-consuming tasks.'
/>
<GrayBar />
<PageCard icon = {process.env.PUBLIC_URL + "/images/databrowsing.png"}
          title = 'Clear Insights Through Data Exploration'
          description = "Navigate your farm's data with ease, uncovering actionable insights for better understanding and decision-making. Our platform simplifies complex information, ensuring transparency is just a click away."
/>
<GrayBar />

<PageCard icon = {process.env.PUBLIC_URL + "/images/for_cherished_broski.png"}
          title = 'Discover Expert Solutions at Your Service'
          description = 'Dive into our Solutions Marketplace, showcasing services, data, and the latest in crop research all provided by experts in their fields. Here, where innovation meets expertise, gain access to agricultural tools designed by industry leaders for unparalleled growth and efficiency.'
/>
<GrayBar />

<div className="flex justify-center">
  <div className='mx-auto p-10 drop-shadow-xl max-w-md'>
    <AnimatedBorderCTA>
      <div className="flex flex-col items-center p-8">
        <h2 className="text-center text-3xl font-semibold my-8">Join Our Waitlist</h2>
        <EmailSignup />
      </div>
    </AnimatedBorderCTA>
  </div>
</div>


        
      
<h1 className='font-semibold text-2xl text-center underline font-poppins '>
    Tools to bridge the gap between research and application.
    </h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <ServiceCard
        icon= {process.env.PUBLIC_URL + "/images/dronegraphic.png"}
        title="Manage services for your farm."
        description=""
      />
      <ServiceCard
        icon= {process.env.PUBLIC_URL + "/images/databrowser.png"}
        title="Integrate weather forecasts, soil data, satellite data, seamlessly."
        description=""
      />
      <ServiceCard
        icon= {process.env.PUBLIC_URL + "/images/beaker.png"}
        title="Access your local institute's best irrigation practices for your crop, and have recommendations built for you."
        description=""
      />
      <ServiceCard
        icon= {process.env.PUBLIC_URL + "/images/appstore.png"}
        title="Integrate weather forecasts, soil data, satellite data, seamlessly."
        description=""
      />
      </div>
      
      </>
 
 );
}

export default CompanyPage;
