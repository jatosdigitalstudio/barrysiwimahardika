import Image from "next/image"
import { Fade, Slide } from "react-awesome-reveal";

export default function About() {
    return (
        <section className="flex justify-center items-center my-32 px-6 " id="tentang">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-12 md:gap-4 justify-center items-center md:px-6">
                    <div className="flex flex-col md:w-[52rem] space-y-8 md:px-8">
                        <Slide direction="left" cascade damping={0.6} duration={500} triggerOnce>
                            <Image 
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                width={400} 
                                height={400} 
                                alt="Barry Siwi Mahardika" 
                            />
                            <Image 
                                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                width={400} 
                                height={400} 
                                alt="Barry Siwi Mahardika" 
                            />
                        </Slide>
                    </div>

                    <Fade cascade delay={800} damping={0.2} triggerOnce>
                        <div className="flex flex-col justify-center text-black md:px-8">
                            <h6 className="text-orange text-sm tracking-widest md:text-md mb-2 uppercase">
                                tentang kami        
                            </h6>
                            <h1 className="md:w-[70%] leading-[1.4] text-3xl font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-6">
                                Mitra Bisnis Anda dalam Perdagangan dan Logistik
                            </h1>
                            <p className="leading-[1.6] text-sm mb-4">
                                PT. Barry Siwi Mahardika adalah perusahaan yang bergerak di bidang perdagangan, supplier umum, 
                                dan logistik yang terpercaya. Kami hadir untuk menjawab kebutuhan pasar dengan pelayanan profesional, 
                                terukur, dan terintegrasi.      
                            </p>
                            <p className="leading-[1.6] text-sm">
                                Dengan dukungan sumber daya manusia yang berpengalaman dan sistem manajemen yang solid, 
                                kami berkomitmen memberikan solusi terbaik bagi setiap klien.
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 w-full mt-10">
                                <div className="bg-orange w-full text-white p-6 pb-8 rounded-lg">
                                    <h1 className="text-style font-bold text-3xl mb-2">Visi</h1>
                                    <p>
                                        Menjadi perusahaan perdagangan, supplier, dan logistik yang unggul, 
                                        terpercaya, dan terbesar dalam memberikan pelayanan.
                                    </p>
                                </div>
                                <div className="bg-orange w-full text-white p-6 pb-8 rounded-lg">
                                    <h1 className="text-style font-bold text-3xl mb-2">Misi</h1>
                                    <ul className="list-disc ml-4">
                                        <li>Menjalin kerja sama solid dengan klien dan partner bisnis</li>
                                        <li>Menyediakan produk dan layanan berkualitas tinggi dengan harga bersaing</li>
                                        <li>Meningkatkan standar pelayanan melalui inovasi dan efisiensi berkelanjutan</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </section>
    )
}