'use client'
import { useState } from "react";
import { PRODUCT } from "@/lib/data";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const tabs = [
  { id: 'trading', label: 'Perdagangan Umum' },
  { id: 'kelapa', label: 'Produk Kelapa & Refinery' },
  { id: 'uav', label: 'Layanan UAV / Drone' },
  { id: 'pupuk', label: 'Pupuk Organik' },
  { id: 'sewa', label: 'Sewa Storage Tank' },
];

export default function Product() {
    const [activeTab, setActiveTab] = useState('trading')

    const content = PRODUCT[activeTab]
    
    return (
        <section className="flex justify-center items-center my-12 py-20 px-6 bg-gray-50" id="layanan">
            <div className="max-w-7xl mx-auto md:p-6">
                <Fade cascade delay={200} damping={0.2}>
                    <div className="max-w-3xl mb-8">
                        <h6 className="text-orange text-sm tracking-widest md:text-md mb-2 uppercase">
                            Produk & Layanan      
                        </h6>
                        <h1 className="text-3xl leading-[1.4] font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-4">
                            Solusi Terpadu untuk Perdagangan, Industri, dan Logistik Modern
                        </h1>
                        <p className="leading-[1.6] text-sm mb-4">
                            Kami menyediakan beragam produk komoditas unggulan, layanan teknologi UAV, hingga penyimpanan 
                            logistik skala besar. Semua layanan kami dirancang untuk mendukung efisiensi bisnis, kualitas produk, 
                            dan keberlanjutan industri Anda.
                        </p>
                    </div>
                </Fade>
               
                <div className="flex flex-col md:flex-wrap gap-3 mb-6 border-b pb-2">
                    <Fade cascade damping={0.2} delay={400} direction="right">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-t-md font-semibold transform transition-transform duration-300 hover:cursor-pointer ${
                                activeTab === tab.id ? 'bg-orange text-white' : 'bg-gray-100 text-gray-600 hover:bg-orange hover:text-white'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </Fade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <Fade cascade delay={800}>
                        <div className="transform transition duration-300">
                            <h2 className="text-2xl font-bold mb-2">{content.title}</h2>
                            <p className="mb-4 text-gray-700">{content.description}</p>
                            <ul className="list-disc list-inside text-gray-800 space-y-1">
                                {content.items.map((item, index) => (
                                <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </Fade>

                    <Fade cascade delay={800}>
                        <div className="">
                            <Image
                                src={content.image}
                                alt={content.title}
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

