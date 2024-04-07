import React from 'react';

function AboutPage() {
  return (
    <div className='max-w-[800px] w-full mx-auto flex flex-col'>
<div className='text-center'>
      <h1 className='text-3xl my-5'><strong>Mission</strong></h1>

      <p className='text-2xl text-green-700'>
        <strong>Developing an open platform, making farming better for everyone.</strong>
      </p>
      <p className='my-5'>
      We aim to simplify complex decisions, while linking farmers to the latest agricultural technology, research and robotic solutions. Our collaborative ecosystem ensures that the future of farming is sustainable, efficient, and accessible to all.
      </p>
    </div>
    <div className='flex'>
      <div className='w-1/2 mr-8'>
      <img src = {process.env.PUBLIC_URL + "/images/farmer.png"} alt='showing a farmer'></img>
      </div>
      <div className='w-1/2 mr-8'>
        <strong className='my-3'>Our Focus</strong> <br></br>
        <strong className='text-green-700'> An ecosystem for all, with farmers at the heart </strong>
        <p>
        We are committed to nurturing an ecosystem that uplifts and empowers everyone dedicated to enriching agriculture, placing farmers at the core of our mission. Our platform aims to bridge the gap between private companies and public institutes, facilitating the provision of crucial data, models, and robotic solutions in a standardised manner, directly benefiting farmers.
        </p>


      </div>
    </div>
    <br></br>
    <div className='flex'>
      
      <div className='w-1/2 mr-8'>
        <strong className='my-3'>Founding Story</strong> <br></br>
        <strong className='text-green-700'> The first farm we are empowering is our own </strong>
        <p>
        Our journey began in the fields of our own farm, confronting firsthand the challenges that farmers face daily. 'The first farm we are empowering is our own' reflects our commitment to creating solutions rooted in actual agricultural experiences. This endeavour has evolved into a platform inspired by real farm challenges, aimed at empowering farmers with innovation and sustainability from the ground up.
        </p>


      </div>
      <div className='w-1/2 mr-8'>
      <img src = {process.env.PUBLIC_URL + "/images/sunrise.jpeg"} alt='showing a farmer'></img>
      </div>
    </div>
    <br></br>
    <br></br>

    <div className='flex m-5'>
      <div className='w-1/2 mr-4'>
      <img className='my-2' src = {process.env.PUBLIC_URL + "/images/art_headshot.jpeg"} alt='showing a farmer'></img>
      <strong> Artur Chabowski</strong>
      </div>
      <div className='w-1/2 mr-4'>
      <img className='my-2' src = {process.env.PUBLIC_URL + "/images/tob_headshot.jpeg"} alt='showing a farmer'></img>
      <strong> Tobias Nolte</strong>
      </div>

    </div>
    </div>


    
  );
}

export default AboutPage;
