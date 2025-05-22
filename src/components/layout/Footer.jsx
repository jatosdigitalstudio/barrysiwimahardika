import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
      <footer className="bg-[#212121] py-12 px-6 md:px-16">
        <div className="container max-w-7xl mx-auto px-2 md:px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="flex flex-col space-y-4  mb-2 max-w-md">
                    <Link href="/">
                        <Image src="/BMS.png" width={100} height={100} alt='PT Barry Siwi Mahardika' />
                    </Link>
                    <p className="text-md text-gray-200 w-[80%]">
                        Solusi Terpercaya untuk Perdagangan, Pengadaan, dan Logistik Nasional & Internasional
                    </p>
                    <div className="flex flex-row mt-6 gap-2">
                        <Link className="bg-orange p-2 rounded-full" href="www.facebook.com">
                            {/* <RiFacebookCircleFill size={32} className= text-gray-400 transform transition duration-300 hover:text-gray-100" /> */}
                        </Link>
                        <Link className="bg-orange p-2 rounded-full" href="https://www.instagram.com/">
                            {/* <RiInstagramFill size={32} className= text-gray-400 transform transition duration-300 hover:text-gray-100" /> */}
                        </Link>
                        <Link className="bg-orange p-2 rounded-full" href="https://www.linkedin.com/">
                            {/* <RiLinkedinBoxFill size={32} className= text-gray-400 transform transition duration-300 hover:text-gray-100" /> */}
                        </Link>
                    </div>
                </div>
                
                <div className="col-span-2 ">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-2">
                        <div>
                            <h3 className="font-bold text-white text-xl mb-4">Perusahaan</h3>
                            <ul className="space-y-2 text-md ">
                                <li><Link href="/#about" className="text-gray-400 transform transition duration-300 hover:text-gray-100">Tentang Kami</Link></li>
                                <li><Link href="/#practice" className="text-gray-400 transform transition duration-300 hover:text-gray-100">Client</Link></li>
                                <li><Link href="/#attorney" className="text-gray-400 transform transition duration-300 hover:text-gray-100">Team</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-white text-xl mb-4">Product & Layanan</h3>
                            <ul className="space-y-2 text-md ">
                                <li><Link href="/" className="text-gray-400 transform transition duration-300 hover:text-gray-100">Trading</Link></li>
                                <li><Link href="/" className="text-gray-400 transform transition duration-300 hover:text-gray-100">Kelapa</Link></li>
                                <li><Link href="/" className="text-gray-400 transform transition duration-300 hover:text-gray-100">UAV Drone</Link></li>
                                <li><Link href="/" className="text-gray-400 transform transition duration-300 hover:text-gray-100">Pupuk</Link></li>
                                <li><Link href="/" className="text-gray-400 transform transition duration-300 hover:text-gray-100">Storage</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-bold text-white text-xl mb-4">Contact Us</h3>
                            <ul className="space-y-2 text-md ">
                                <li><Link href="/" className="text-gray-400 transform transition duration-300 hover:text-gray-100">+62 822 9996 8965 (Mirna Nurhayati)</Link></li>
                                <li><Link href="/" className="text-gray-400 transform transition duration-300 hover:text-gray-100">+62 813 3551 7555 (Ibnu Khotamil) </Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
  
            <div className="border-t border-white mt-4 md:mt-2 pt-8 text-gray-200 text-center text-sm md:text-md">
                <p>© 2025 PT Barry Siwi Mahardika. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
  }