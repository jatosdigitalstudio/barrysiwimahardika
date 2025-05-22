'use client'
import Image from "next/image";
import { CLIENTG, CLIENTP, CLIENTS } from "@/lib/data";
import { Fade, Slide } from "react-awesome-reveal";

export default function Client() {
  return (
    <section id="klien" className="py-8 px-8 lg:my-30">
      <div className="container max-w-7xl mx-auto text-center place-content-center grid">
        <Fade cascade damping={0.4} delay={200} triggerOnce>
            <div className="max-w-4xl mx-auto mb-8">
                <h6 className="text-orange text-sm tracking-widest md:text-md mb-2 uppercase">
                    Klien kami      
                </h6>
                <h1 className="text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-2">
                    Dipercaya oleh <br />Pemerintah & Sektor Swasta
                </h1>
                <p className="leading-[1.6] text-md mb-4">
                    Reputasi kami dibangun dari kepercayaan yang diberikan oleh berbagai institusi pemerintah 
                    dan perusahaan swasta nasional. Kami bangga menjadi bagian dari rantai pasok yang mendukung 
                    pertumbuhan industri Indonesia.
                </p>
            </div>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Fade cascade damping={0.2} delay={400} triggerOnce>
                <div className="flex flex-col px-4 py-6 bg-white border border-gray-500 rounded-lg">
                    <h6 className="font-style text-xl font-bold mb-4">Government</h6>
                    <div className="grid grid-cols-4 gap-2">
                        {
                            CLIENTG.map((data,idx) => (
                                <Image
                                    key={idx}
                                    src={data.image}
                                    alt="logo"
                                    width={250}
                                    height={250}
                                    // className="filter grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                                />
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col px-4 py-6 bg-white border border-gray-500 rounded-lg">
                    <h6 className="font-style text-xl font-bold mb-4">Private Sector</h6>
                    <div className="grid grid-cols-4 gap-2">
                        {
                            CLIENTS.map((data,idx) => (
                                <Image
                                    key={idx}
                                    src={data.image}
                                    alt="logo"
                                    width={250}
                                    height={250}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className="flex flex-col px-4 py-6 bg-white border border-gray-500 rounded-lg">
                    <h6 className="font-style text-xl font-bold mb-4">Official Partner</h6>
                    <div className="grid grid-cols-2 gap-2">
                        {
                            CLIENTP.map((data,idx) => (
                                <Image
                                    key={idx}
                                    src={data.image}
                                    alt="logo"
                                    width={250}
                                    height={250}
                                />
                            ))
                        }
                    </div>
                </div>
            </Fade>
        </div>
       
      </div>
    </section>
  );
}