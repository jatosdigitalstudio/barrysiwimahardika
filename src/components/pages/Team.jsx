import Image from 'next/image';
import { Fade, Slide } from "react-awesome-reveal";

const team = [
  { name: 'Michele Wiethoff', position: 'Komisaris', image: '/images/team/Komisaris.png' },
  { name: 'Barry Wiethoff', position: 'Direktur Utama', image: '/images/team/CEO.png' },
  { name: 'Ibnu Khotamil', position: 'Direktur Operasional', image: '/images/team/COO.png' },
  { name: 'Mirna Nurhayati', position: 'Direktur Keuangan', image: '/images/team/CFO.png' },
  { name: 'Zhamir Ambya', position: 'Direktur Pemasaran', image: '/images/team/CMO.png' },
  { name: 'Teguh Wiyadi', position: 'Direktur Legal ', image: '/images/team/Bisdev.png' },
];

export default function Team() {
  return (
    <section className="bg-gray-50 py-16 px-6" id='team'>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <Fade cascade damping={0.2} delay={200} triggerOnce>
            <div className="md:w-[32rem] text-left mb-8">
              <h6 className="text-orange text-sm tracking-widest md:text-md mb-2 uppercase">
                  Susunan Pimpinan    
              </h6>
              <h1 className="text-3xl leading-[1.4] font-style md:text-4xl lg:text-4xl text-maroon font-medium mb-4">
                  Tim Profesional di Balik Kesuksesan Perusahaan
              </h1>
              <p className="leading-[1.6] text-sm mb-4">
                Dipimpin oleh individu berpengalaman di bidang perdagangan, logistik, dan pengembangan bisnis, 
                kami berkomitmen memberikan layanan terbaik dan inovasi berkelanjutan bagi klien.
              </p>
            </div>
          </Fade>

          <div className="w-full md:max-w-2xl grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <Fade cascade damping={0.2} delay={400} triggerOnce>
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="w-full h-52 relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <div className="py-2 px-3 md:px-4 md:py-4">
                    <h3 className="text-md md:text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-500 text-sm">{member.position}</p>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
        
      </div>
    </section>
  );
}
