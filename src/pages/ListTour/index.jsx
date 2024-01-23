import React from 'react';
import './listTour.scss'
import { Navbar, Footer } from '@/layout';

export default function index() {
  return (
      <>
        <Navbar />

        <section className="w-full bg-boat bg-cover bg-bottom bg-no-repeat h-[50vh] flex justify-center bg-color2 bg-blend-multiply bg-opacity-50">
          <div className="w-full container flex justify-center items-center flex-col">
            <p className="text-white font-secondary text-3xl 2xl:text-6xl">
              List Tour
            </p>
            
          </div>
        </section>
        
      </>
  );
}
