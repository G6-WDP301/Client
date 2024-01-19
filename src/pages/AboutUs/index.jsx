import React from 'react'
import './aboutUs.scss'
import { Navbar, Footer  } from "@/layout";
import img from '../../images/about.jpeg'

export default function index() {
  return (
        <>
        <Navbar /> 
        <section className="w-full flex justify-center bg-color5  h-auto">
                <div className="w-full flex justify-between flex-wrap px-0 2xl:px-36 h-auto py-16  mb-6 mt-[5rem]">
                        <div className="w-full lg:w-[50%]  bg-color px-5 ">
                                <p className="text-color4 uppercase">The best travel agency</p>
                                <p className="text-color3 text-5xl font-bold uppercase font-secondary my-4" >Discover the <span className="text-color1"> world</span> with our guide</p>
                                <p className="text-color6">You can choose any country with good tourism. Agency elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit ac arcu posuere blane.</p>
                                <p className="text-color6 my-4">Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the miss varius natoque penatibus et magnis dis parturient monte.</p>
                                <div className="flex items-center"> <i className="bi bi-check text-white bg-color4  rounded-[50%] px-2 py-1 me-3"></i> <p className="text-color6">20 Years of Experience</p></div>
                                <div className="flex items-center my-4"> <i className="bi bi-check text-white bg-color4  rounded-[50%] px-2 py-1 me-3"></i> <p className="text-color6">150+ Tour Destinations</p></div>
                                <div className="flex items-center"><i className="bi bi-telephone-forward text-color1 text-2xl me-3"></i><div><p className="text-color6 ">For information</p><p className="text-color6 text-2xl">09188085590</p></div></div>
                        </div>
                        <div className=" w-full lg:w-[50%]   flex flex-col justify-center items-center bg-color5 h-auto pb-8 lg:pb-0 mt-10 lg:mt-0 ">
                                <figure className="w-[70%] h-[500px] relative">
                                        <div className="w-[100%] h-[100%] bg-color4 absolute left-8 top-8"></div>
                                        <img src={img} alt="" className="w-[100%] h-[100%] absolute z-10 object-cover hover:scale-[.95] transition-all duration-500"/>
                                </figure>
                        </div>
                </div>
        </section>
        
        </>
  )
}
