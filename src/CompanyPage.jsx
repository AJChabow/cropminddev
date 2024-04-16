import React, { useState, useRef, useEffect } from 'react';
import './CompanyPage.css';
import EmailSignup from './EmailSignup';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AnimatedBorderCTA from './AnimatedBorderCTA';



const GrayBar = () => {
  return (
    <div className="w-3/5 mx-auto my-48 bg-gray-300 h-2 rounded-full"></div>
  );
};
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
    }, { threshold: 0.1 });

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className={`PageCard my-8 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0'} flex items-center justify-center mx-auto my-8`} style={{ maxWidth: '1200px' }}>
      <div className='text-container flex-1 my-12 mr-10' style={{ flexBasis: '40%', maxWidth: '480px' }}>
        <h1 className='font-bold text-green-800 text-3xl md:text-4xl mb-8'>{title}</h1>
        <p className='text-xl md:text-2xl'>{description}</p>
      </div>
      <div className='image-container flex-1' style={{ flexBasis: '60%' }}>
        <img
          src={icon}
          alt='UI of the recommendation system'
          loading="lazy"
          className="transition-opacity duration-400 ease-in w-full"
        />
      </div>
    </div>
  );
};



function CompanyPage() {
  const bgImageUrl = `${process.env.PUBLIC_URL}/images/orchard.svg`;
  const [backgroundStyle, setBackgroundStyle] = useState({
    backgroundSize: 'cover', // Default to cover
    backgroundPosition: 'center center'
  });

  useEffect(() => {
    function updateBackgroundSize() {
      const { innerWidth: width, innerHeight: height } = window;

      // Assuming you want the SVG to fill the screen at 1080p resolution without scaling
      if (width === 1920 && height === 1080) {
        setBackgroundStyle({
          backgroundSize: 'contain', // Ensures the entire image is visible
          backgroundPosition: 'center center'
        });
      } else {
        setBackgroundStyle({
          backgroundSize: 'cover', // Covers the entire container, may crop edges
          backgroundPosition: 'center center'
        });
      }
    }

    window.addEventListener('resize', updateBackgroundSize);
    updateBackgroundSize(); // Call on mount to set initial size

    return () => {
      window.removeEventListener('resize', updateBackgroundSize);
    };
  }, []);

  return (
    <>
      <div className="h-screen flex items-center justify-center"
           style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <div style={{
          backgroundImage: `url(${bgImageUrl})`,
          backgroundSize: backgroundStyle.backgroundSize,
          backgroundPosition: backgroundStyle.backgroundPosition,
          backgroundRepeat: 'no-repeat',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.5,
          filter: 'blur(5px)',
          zIndex: -1,
        }}></div>

        <div className="outer-headings text-center m-20" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className='text-6xl font-semibold font-poppins'>
            Ideal farming decisions, made easy
          </h1>
          <br></br>
          <h2 className='max-w-[50rem] text-2xl font-poppins'>
            A wealth of data sources, the latest in agricultural research and technology relevant to your farming decisions
          </h2>
          <br></br>
          <h3 className='max-w-[50rem] text-2xl font-poppins font-bold'>
            all integrated in one platform
          </h3>
        </div>
      </div>

  

<PageCard icon = {process.env.PUBLIC_URL + "/images/databrowser.svg"}
          title = 'Automated Data-Driven Recommendations at Your Fingertips'
          description = 'Unlock precision agriculture with personalized, data-driven recommendations. Guided by comprehensive analysis, make informed decisions to boost yield and conserve valuable resources, and avoid repetitive time-consuming tasks.'
/>
<GrayBar />
<PageCard icon = {process.env.PUBLIC_URL + "/images/databrowsing.png"}
          title = 'Clear Insights Through Data Exploration'
          description = "Navigate your farm's data with ease, uncovering actionable insights for better understanding and decision-making. Our platform simplifies complex information, ensuring transparency is just a click away."
/>
<GrayBar />

<PageCard icon = {process.env.PUBLIC_URL + "/images/apps.svg"}
          title = 'Discover Expert Solutions at Your Service'
          description = 'Dive into our Solutions Marketplace, showcasing services, data, and the latest in crop research all provided by experts in their fields. Here, where innovation meets expertise, gain access to agricultural tools designed by industry leaders for unparalleled growth and efficiency.'
/>
<GrayBar />

<div className="flex justify-center">
  <div className='mx-auto p-10 drop-shadow-xl max-w-md'>
    <AnimatedBorderCTA>
      <div className="flex flex-col items-center p-8">
        <h2 className="text-center text-3xl font-semibold my-8">Join Our Waitlist</h2>
        <EmailSignup/>
      </div>
      
    </AnimatedBorderCTA>
  </div>
</div>

      </>
 
 );
}

export default CompanyPage;
