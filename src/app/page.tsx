// pages/index.js
'use client';
import Image from "next/image";
import { Inter } from 'next/font/google'
import { Raleway } from 'next/font/google'
import { Button } from '@/components/button/Button'
// import { Input } from "postcss";
const inter = Inter({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

const toggleDropdown = (index: number) => {
  const dropdownContent = document.getElementById(
    `dropdown-content-${index}`
  ) as HTMLElement;

  if (dropdownContent.classList.contains("hidden")) {
    dropdownContent.classList.remove("hidden", "-translate-y-2");
    dropdownContent.classList.add("block", "translate-y-0");
  } else {
    dropdownContent.classList.add("hidden", "-translate-y-2");
    dropdownContent.classList.remove("block", "translate-y-0");
  }
};

export default function Home() {
  return (
    <div>
        <div className="bg-white flex justify-between items-center py-[64px] px-[224px]">
          <Image src="/logo.png" alt="" width={180} height={30} className="logo" />
          <div className={inter.className}>
            <nav className="flex gap-10">
              <li className="list-none font-inter">
                <a className="text-lg text-gray-700">Beranda</a>
              </li>
              <li className="list-none font-inter">
                <a className="text-lg text-gray-700">Tentang Kami</a>
              </li>
              <li className="list-none font-inter">
                <a className="text-lg text-gray-700">Layanan</a>
              </li>
              <li className="list-none font-inter">
                <a className="text-lg text-gray-700">FAQ</a>
              </li>
              <li className="list-none font-inter">
                <a className="text-lg text-gray-700">Testimoni</a>
              </li>
              <li className="list-none font-inter">
                <a className="text-lg text-gray-700">Kontak</a>
              </li>
            </nav>
          </div>
          <div className="flex items-center gap-12">
            <button className="px-8 py-4 text-lg font-semibold font-raleway text-gray-700 hover:cursor-pointer">
              <a>Masuk</a>
            </button>
            <button className="px-8 w-36 h-14 text-lg font-bold font-raleway text-[#00A876] border-2 border-[#00A876] rounded-md hover:cursor-pointer">
              <a>Daftar</a>
            </button>
          </div>
        </div>
        <main className="px-[224px]">
          <div id="sec1" className=" div flex">
            <div className="content">
              <div className={raleway.className}>
                <h1 className="mt-[76px] w-[681px] text-[64px] font-raleway text-[#414141] font-bold leading-[75px]">
                  Belajar <span className="text-[#00A876]">Pertanian</span> Berkelanjutan dengan para Professional
                </h1>
              </div>
              <div className={inter.className}>
                <p className="mt-[48px] w-[504px] text-[18px] font-inter font-medium leading-[28px] text-[#414141]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="content-button-container mt-[36px] flex gap-4">
              <Button
                label="Coba Gratis"
                onClick={() => {}}
                primary
                size="medium"
              />
                <button className="pelajari w-[171px] h-[57px] text-[20px] font-inter font-medium text-[#414141]">
                  Pelajari
                </button>
              </div>
              <div className="counter-container mt-[60px] flex gap-[48px]">
                <div className="counter flex flex-col items-center">
                  <div className={raleway.className}>
                    <h1 className="text-[42px] font-raleway font-bold text-[#FFD700]">20+</h1>
                  </div>
                  <p className="text-[18px] font-inter font-medium text-[#414141]">Provinsi</p>
                </div>
                <div className="counter flex flex-col items-center">
                  <div className={raleway.className}>
                    <h1 className="text-[42px] font-raleway font-bold text-[#FFD700]">100k+</h1>
                  </div>
                  <p className="text-[18px] font-inter font-medium text-[#414141]">Provinsi</p>
                </div>
                <div className="counter flex flex-col items-center">
                  <div className={raleway.className}>
                    <h1 className="text-[42px] font-raleway font-bold text-[#FFD700]">2200+</h1>
                  </div>
                  <p className="text-[18px] font-inter font-medium text-[#414141]">Provinsi</p>
                </div>
              </div>
            </div>
            <div className="content-image relative flex w-full">
              <Image className="absolute mt-[14px] ml-[46px]" src="/image-removebg%201.png" width={729} height={646} alt="" />
              <Image className="bg-Image rounded-[30px] mt-[98px] ml-[235px]" src="/Rectangle%2069.png" width={510} height={562} alt="" />
              <div className="pop pop-one absolute flex flex-col items-center rounded-[20px] p-[32px] bg-white shadow-[drop-shadow(-1px_1px_4px_rgba(0,0,0,0.1)) drop-shadow(-6px_5px_8px_rgba(0,0,0,0.09)),drop-shadow(-13px_11px_10px_rgba(0,0,0,0.05)),drop-shadow(-1px_1px_4px_rgba(0,0,0,0.1))] ml-[64px] mt-[490px]">
                <h1 className="font-raleway text-[20px] font-bold text-[#414141]">Konsumsi Sumber Daya</h1>
                <div className="pop-data mt-[14px] flex items-center">
                  <Image src="/menurun.svg" width={50} height={50} alt="" />
                  <h2 className="ml-[12px] font-inter text-[32px] font-bold text-[#414141]">128%</h2>
                </div>
              </div>
              <div className="pop pop-two absolute flex flex-col items-center rounded-[20px] p-[32px] bg-white shadow-[drop-shadow(-1px_1px_4px_rgba(0,0,0,0.1)) drop-shadow(-6px_5px_8px_rgba(0,0,0,0.09)),drop-shadow(-13px_11px_10px_rgba(0,0,0,0.05)),drop-shadow(-1px_1px_4px_rgba(0,0,0,0.1))] ml-[680px] mt-[128px]">
                <h1 className="font-raleway text-[20px] font-bold text-[#414141]">Hasil Panen</h1>
                <div className="pop-data mt-[14px] flex items-center">
                  <Image src="/meningkat.svg" width={50} height={50} alt="" />
                  <h2 className="ml-[12px] font-inter text-[32px] font-bold text-[#414141]">52%</h2>
                </div>
              </div>
            </div>
          </div>
          <div id="sec2" className="mt-[132px] flex flex-col items-center">
              <h1 className="text-[24px] font-raleway font-bold text-[#414141]">
                  Lebih dari <span className="text-[#00A876]">100 kelompok tani</span> telah bekerja sama dengan kami
              </h1>
              <div className="mt-[42px] flex items-center gap-[78px]">
                  <Image src="/image%20154.png" width={120} height={120} alt="" />
                  <Image src="/image%20107.png" width={120} height={120} alt="" />
                  <Image src="/image%20103.png" width={120} height={120} alt="" />
                  <Image src="/image%20106.png" width={120} height={120} alt="" />
                  <Image src="/image%20105.png" width={120} height={120} alt="" />
                  <Image src="/image%20112.png" width={120} height={120} alt="" />
                  <Image src="/image%20155.png" width={120} height={120} alt="" />
              </div>
          </div>
          <div id="sec3" className="mt-[216px] flex justify-between">
            <div className="content flex flex-col mr-8">
              <h2 className="text-[28px] font-raleway font-semibold text-[#414141]">
                Tentang kami
              </h2>
              <h1 className="mt-4 text-[64px] font-raleway font-bold text-[#414141]">
                Taniku ?
              </h1>
              <p className="mt-7 w-[434px] text-justify text-[18px] font-inter font-medium leading-[28px] text-[#414141]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua incididunt ut labore et dolore magna aliqua
              </p>
              <button className="mt-10 w-[217px] h-[57px] rounded-[10px] bg-[#00A876] text-[20px] font-raleway font-bold text-white transition-all duration-500 hover:text-[#00A876] hover:bg-white hover:border hover:border-[#00A876]">
                Detail Layanan
              </button>
            </div>
            <Image src="/taniku.png" width={523} height={475} alt="" />
            <div className="list-keuntungan mt-8 ml-12 flex flex-col">
              <div className="list mt-6 flex items-center w-[415px] h-[104px] rounded-[20px] bg-[#E6F6F1] transition-transform duration-600 transform hover:translate-x-16 hover:bg-[#00A876]">
                <div className="image-list ml-5 w-[71px] h-[71px] flex justify-center items-center rounded-[10px] bg-white shadow-md">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.524 1.80117C11.067 0.437695 12.9166 0.437694 13.4596 1.80117L15.9814 8.13283L22.5269 8.68084C23.9364 8.79884 24.508 10.6358 23.4341 11.5965L18.4471 16.0577L19.9707 22.728C20.2988 24.1645 18.8024 25.2998 17.5957 24.53L11.9918 20.9555L6.38795 24.53C5.1812 25.2998 3.68487 24.1645 4.01297 22.728L5.53658 16.0577L0.549588 11.5965C-0.524323 10.6358 0.0472161 8.79885 1.45675 8.68084L8.00226 8.13283L10.524 1.80117Z" fill="#00A876"/>
                </svg>
                </div>
                <h1 className="ml-8 text-[20px] font-raleway font-bold text-[#414141] hover:text-white">
                  Tingkatkan Hasil Panen
                </h1>
              </div>
              <div className="list mt-6 flex items-center w-[415px] h-[104px] rounded-[20px] bg-[#E6F6F1] transition-transform duration-600 transform hover:translate-x-16 hover:bg-[#00A876]">
                <div className="image-list ml-5 w-[71px] h-[71px] flex justify-center items-center rounded-[10px] bg-white shadow-md">
                  <Image src="/sourcetree.svg" width={28} height={28} alt="" />
                </div>
                <h1 className="ml-8 text-[20px] font-raleway font-bold text-[#414141] hover:text-white">
                  Minimalisir Sumber Daya
                </h1>
              </div>
              <div className="list mt-6 flex items-center w-[415px] h-[104px] rounded-[20px] bg-[#E6F6F1] transition-transform duration-600 transform hover:translate-x-16 hover:bg-[#00A876]">
                <div className="image-list ml-5 w-[71px] h-[71px] flex justify-center items-center rounded-[10px] bg-white shadow-md">
                  <Image src="/coins.svg" width={28} height={28} alt="" />
                </div>
                <h1 className="ml-8 text-[20px] font-raleway font-bold text-[#414141] hover:text-white">
                  Raih keuntungan extra
                </h1>
              </div>
            </div>
          </div>

          <div id="sec4" className="mt-[235px] flex justify-between">
            <Image src="/Rectangle%2082.png" alt="" width={603} height={800} />
            <div className="ml-[96px]">
              <div className="mt-[12px]">
                <h1 className="text-[41px] font-raleway font-bold text-[#414141]">
                  Apa saja <span className="text-[#00A876]">layanan</span> dari kami ?
                </h1>
                <p className="mt-[30px] w-[770px] text-[18px] font-inter font-normal text-[#414141]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus nisi ac rhoncus lobortis. Integer iaculis pulvinar ante ut porttitor.
                </p>
              </div>
              <div className="mt-[64px] flex flex-col gap-[20px]">
                <div className="flex items-center">
                  <h1 className="w-[100px] h-[100px] rounded-full bg-[#E6F6F1] text-[#00A876] text-[48px] font-raleway font-bold flex items-center justify-center">
                    1
                  </h1>
                  <h2 className="ml-[30px] text-[32px] font-raleway font-bold text-[#414141]">Pembelajaran</h2>
                </div>
                <div className="flex items-center">
                  <h1 className="w-[100px] h-[100px] rounded-full bg-[#E6F6F1] text-[#00A876] text-[48px] font-raleway font-bold flex items-center justify-center">
                    2
                  </h1>
                  <h2 className="ml-[30px] text-[32px] font-raleway font-bold text-[#414141]">Penyewaan Alat</h2>
                </div>
                <div className="flex items-center">
                  <h1 className="w-[100px] h-[100px] rounded-full bg-[#E6F6F1] text-[#00A876] text-[48px] font-raleway font-bold flex items-center justify-center">
                    3
                  </h1>
                  <h2 className="ml-[30px] text-[32px] font-raleway font-bold text-[#414141]">Kalkulator</h2>
                </div>
                <div className="flex items-center">
                  <h1 className="w-[100px] h-[100px] rounded-full bg-[#E6F6F1] text-[#00A876] text-[48px] font-raleway font-bold flex items-center justify-center">
                    4
                  </h1>
                  <h2 className="ml-[30px] text-[32px] font-raleway font-bold text-[#414141]">Alat Diagnostik</h2>
                </div>
                <div className="flex items-center">
                  <h1 className="w-[100px] h-[100px] rounded-full bg-[#E6F6F1] text-[#00A876] text-[48px] font-raleway font-bold flex items-center justify-center">
                    5
                  </h1>
                  <h2 className="ml-[30px] text-[32px] font-raleway font-bold text-[#414141]">Forum Antar Petani</h2>
                </div>
              </div>
            </div>
          </div>
          <div id="sec5" className="mt-[207px] flex">
            <div className="content-text w-[402px]">
              <h2 className="text-[28px] font-raleway font-semibold text-[#414141]">FAQ</h2>
              <h1 className="mt-4 text-[48px] font-raleway font-bold text-[#414141]">
                Frequently Ask <span className="text-[#00A876]">Question</span>
              </h1>
              <p className="mt-8 text-[18px] font-inter font-medium leading-[28px] text-[#414141]">
                Pertanyaan yang seringkali ditanyakan oleh pengguna kami
              </p>
            </div>
            <div className="dropdown-container ml-[249px]">
              <div className="search-box mb-[71px] w-[822px] h-[96px] bg-[#F2FBF8] rounded-[24px] flex items-center">
                <button className="ml-[28px] bg-none border-none">
                  <Image src="/magnifying-glass.svg" width={36} height={36} alt="" />
                </button>
                <input
                  type="text"
                  placeholder="Cari Sesuatu..."
                  className="ml-[28px] w-[690px] h-[72px] bg-transparent border-none text-[28px] font-raleway font-semibold text-[#414141] focus:outline-none"
                />
              </div>
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="dropdown w-[828px] mb-[58px] border-gray-200"
                >
                  <button onClick={() => toggleDropdown(index)} className="w-full dropdown-title flex justify-between items-center">
                    <h1 className="text-[30px] font-raleway font-bold text-[#414141]">
                      {index === 0
                        ? "Apa itu Taniku?"
                        : index === 1
                        ? "Bagaimana cara menyewa alat di Taniku?"
                        : "Apa itu Taniku?"}
                    </h1>
                    <div
                      className="bg-none border-none"
                    >
                      <Image
                        src="/chevron-down.svg"
                        width={40}
                        height={40}
                        alt="Toggle Dropdown"
                      />
                    </div>
                  </button>
                  <p
                    id={`dropdown-content-${index}`}
                    className="hidden mt-4 text-[18px] font-inter leading-[28px] text-[#414141] transition-all duration-500 transform"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    luctus nisi ac rhoncus lobortis. Integer iaculis pulvinar ante ut
                    porttitor.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div id="sec6" className="mt-10">
            <div className="flex justify-between">
              <div>
                <h1 className="text-4xl font-raleway font-bold text-gray-700">
                  Kata <span className="text-green-600">mereka</span> tentang kami
                </h1>
                <p className="mt-6 w-[434px] text-lg font-inter font-medium leading-7 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                </p>
              </div>
              <div className="mt-14 flex gap-4">
                <button id="prev" className="bg-none border-none">
                  <Image src="/prev.svg" width={72} height={72} alt="" />
                </button>
                <button id="next" className="bg-none border-none">
                  <Image src="/next-slide.svg" width={72} height={72} alt="" />
                </button>
              </div>
            </div>
          
            <div id="slider" className="mt-16 w-[1471px] flex gap-5 overflow-x-scroll scroll-smooth">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="w-[477px] h-[439px] relative flex flex-shrink-0 flex-col items-start p-12 bg-[#F2FBF8] rounded-[50px] overflow-hidden">
                  <Image src="/star.svg"  width={24} height={24} alt="Star" />
                  <p className="w-[334px] text-lg font-inter font-medium leading-7 text-gray-700">
                    I am very satisfied with the Taniku service, my sales have increased by 80%.
                  </p>
                  <Image className="w-32 mt-6 mb-7" src="/image%20107.png"  width={100} height={100} alt="Logo" />
                  <h1 className="text-[22px] font-raleway font-bold text-gray-700">Bagas Dwi C</h1>
                  <h2 className="w-[240px] text-[18px] font-inter font-medium leading-7 text-gray-400">
                    Sales Kenongo Mukti Farmers Group
                  </h2>
                  <Image className="absolute bottom-0 right-[32px]" src="/john.png" width={235} height={230} alt="Pic" />
                </div>
              ))}
            </div>
          </div>

        </main>
    </div>
  );
}
