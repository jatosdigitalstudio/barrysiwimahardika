"use client"
import Link from "next/link";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

export default function Hero() {
  return (
    <section className="relative h-[85vh] overflow-hidden md:mx-8 bg-[#652126] flex items-center">
        <div className="container mx-auto">
            <Image
                src="https://images.unsplash.com/photo-1617526738882-1ea945ce3e56?q=80&w=2095&auto=format&fit=crop"
                alt="background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                priority
                fill
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-transparent z-10" />

            <Slide direction="left" cascade damping={0.2} className="relative z-20 text-left text-white md:ml-12 px-6 md:px-8">
                <div className="max-w-2xl">
                    <h1 className="text-xl leading-[1.4] font-style md:text-4xl font-medium">
                        Solusi Terpercaya untuk Perdagangan, Pengadaan, dan Logistik Nasional & Internasional
                    </h1>
                    <p className="mt-4">
                        Dengan pengalaman dan jaringan yang luas, <span className="font-bold">PT. Barry Siwi Mahardika</span> hadir sebagai mitra 
                        strategis dalam pengadaan barang, distribusi logistik, dan perdagangan komoditas unggulan Indonesia.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row mx-auto mt-6 justify-start gap-2 md:gap-4">
                    <Link href="/#tentang" scroll className="border border-white px-4 py-2 rounded-lg transform transition-transform duration-300 hover:translate-x-2">
                        Pelajari Selengkapnya
                    </Link>
                </div>
            </Slide>
        </div>
    </section>
  );
}
