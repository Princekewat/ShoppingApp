import React from 'react'
import Slider from 'react-slick';

const TestimonalsData = [
    {
        id:1,
        name: "Moutain Climber",
        text:" lorem ipsum dolor sit amet consctetur adipisicing elit. Equue reiciends inventor iste relative ex alias quis quis magin at opti0 ",
         img: "https://media.istockphoto.com/id/669828280/photo/daylight-view-of-mount-everest.webp?a=1&b=1&s=612x612&w=0&k=20&c=NhEZW_hi8rPAEoAzuIiE0IeNLggtLmfYlL23eM3rH-E=",
    },
     {
        id:2,
        name: "Moutain",
        text:" lorem ipsum dolor sit amet consctetur adipisicing elit. Equue reiciends inventor iste relative ex alias quis quis magin at opti0 ",
         img: "https://media.istockphoto.com/id/1341288649/photo/75mpix-panorama-of-beautiful-mount-ama-dablam-in-himalayas-nepal.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZQ4s-_ltnxOs8_hU_ZnPxTnaCNv-gKOImKZok15wekk=",
    },
     {
        id:3,
        name: "Victor",
        text:" lorem ipsum dolor sit amet consctetur adipisicing elit. Equue reiciends inventor iste relative ex alias quis quis magin at opti0 ",
         img: "https://images.unsplash.com/photo-1528721071427-cab7de8e8050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vdXRhaW58ZW58MHx8MHx8fDA%3D",
    }
]

function Testimonals (){
    var settings = {
        dots:true,
        arrows: false,
        infinite: true,
        speed:500,
        sliderToScroll:1,
        autoplay: true,
        autoplaySpeed:2000,
        cssEase:"linear",
        pauseOnHover: true,
        pauseFocus: true,
    
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 10024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlider:2
                }
            }
        ]
    }
  return (
    <div className="py-10">
        <div className="container">
            <div className="text-center  mb-10 max-w-[600px] mx-auto">
                <p data-aos="fade-up"  className='text-sm text-primary'>Top selling Products for kids</p>
               <h1 data-aos="fade-up" className='text-3xl font-bold'>Testimonial</h1>
               <p data-aos="fade-up" className='text-xl text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, animi?</p>
            </div>
            <div data-aos="Zoom in">
            <Slider {...settings}>
                {TestimonalsData.map((data) => (
                    <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl">

                        <div>
                            <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                            </div>
                            <div className='flex flex-col items-center gap-4'>
                            <p className='text-xs text-gray-500 '>{data.text}</p>
                            <h1 className='text-sm font-bold text-black/80 dark:text-light'>{data.name}</h1>


                        </div>
                    </div>
                ))}

            </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonals;