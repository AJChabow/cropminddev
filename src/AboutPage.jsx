import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className='font-poppins'>
      <div className='max-w-[1200px] w-full mx-auto flex flex-col'>
        <div className='text-center'>
          <h1 className='text-3xl text-green-700'>
            <strong>Developing an open platform, making farming better for everyone.</strong>
          </h1>
          <p className='my-5 font-semibold'>
            We aim to simplify complex decisions, while linking farmers to the latest agricultural technology, research and robotic solutions. Our collaborative ecosystem ensures that the future of farming is sustainable, efficient, and accessible to all.
          </p>
        </div>
        <div className='flex md:flex-row responsive-column'>
        <img className='rounded-r-lg my-3 ' src={process.env.PUBLIC_URL + "/images/farmer.png"} alt='showing a farmer' style={{ width: '100%', maxWidth: '800px' }}></img>
          <div className='text-block my-3 ml-16'>

            <strong className='text-green-700 text-xl font-semibold'>An ecosystem for all, with farmers at the heart</strong>
            <p className='text-lg'>
              We are committed to nurturing an ecosystem that uplifts and empowers everyone dedicated to enriching agriculture, placing farmers at the core of our mission. Our platform aims to bridge the gap between private companies and public institutes, facilitating the provision of crucial data, models, and robotic solutions in a standardized manner, directly benefiting farmers.
            </p>
          </div>
          
        </div>
        <div className='flex md:flex-row responsive-column'>
        <div className='text-block my-3 mr-16'>
            <strong className='text-green-700 text-2xl font-semibold'>The first farm is our own</strong>
            <p className='text-lg'>
              Our journey began in the fields of our own farm, confronting firsthand the challenges that farmers face daily. 'The first farm we are empowering is our own' reflects our commitment to creating solutions rooted in actual agricultural experiences. This endeavour has evolved into a platform inspired by real farm challenges, aimed at empowering farmers with innovation and sustainability from the ground up.
            </p>
          </div>
          <img className='rounded-l-lg my-3' src={process.env.PUBLIC_URL + "/images/sunrise.jpeg"} alt='showing a farmer' style={{ width: '100%', maxWidth: '800px' }}></img>
        </div>

        <div className='flex justify-center flex-nowrap md:flex-row responsive-column '>
          <div className='text-block my-3 mx-12'>
            <strong> Artur Chabowski</strong>
            <img className='rounded-lg my-2' src={process.env.PUBLIC_URL + "/images/art_headshot.jpeg"} alt='showing Artur Chabowski' style={{ width: '100%', maxWidth: '300px' }}></img>
          </div>
          <div className='text-block my-3 mx-12'>
            <strong> Tobias Nolte</strong>
            <img className='rounded-lg my-2' src={process.env.PUBLIC_URL + "/images/tob_headshot.jpeg"} alt='showing Tobias Nolte' style={{ width: '100%', maxWidth: '300px' }}></img>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default AboutPage;
