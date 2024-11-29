import Image from 'next/image';
import Link from 'next/link';

const Pemebelajaran: React.FC = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-center w-[340px] bg-gray-100 pt-[83px]">
        <Image className="" src="/logo.png" alt="Logo" width={175.33} height={64} />
        <ul className="space-y-[40px] w-[175px] mt-[92px]">
          <li className="flex items-start space-x-[24px]">
            <Image src="/ic_round-book.svg" alt="Book Icon" width={24} height={24} />
            <Link className="text-gray-700 font-medium" href="/dashboard">Pembelajaran</Link>
          </li>
          <li className="flex items-start space-x-[24px]">
            <Image src="/entypo_chat.svg" alt="Chat Icon" width={24} height={24} />
            <Link className="text-gray-700 font-medium" href="/forum">Forum Petani</Link>
          </li>
          <li className="flex items-start space-x-[24px]">
            <Image src="/ph_math-operations-fill.svg" alt="Calculator Icon" width={24} height={24} />
            <Link className="text-gray-700 font-medium" href="/kalkulator">Kalkulator</Link>
          </li>
        </ul>
      </div>

      <div className="flex-grow">
        <main className="ml-[71px] mt-[80px] w-[1333px]">
          <div className="flex justify-between items-center mb-[40px]">
            <div className="flex items-center space-x-[28px] bg-gray-200 p-[32px] rounded-[25px]">
              <button>
                <Image src="/search.svg" alt="Search Icon" width={36} height={36} />
              </button>
              <input
                type="text"
                placeholder="Cari Modul Belajar"
                className="w-[698px] bg-transparent outline-none font-raleway font-semibold font-dark text-black text-[24px]"
              />
            </div>
            <div className="flex items-center space-x-[16px]">
              <Link href="/dashboard" className="text-gray-700 font-medium">Dashboard</Link>
              <button id="all" className="p-[10px]">
                <Image src="/all-dash.svg" alt="Settings Icon" width={24} height={24} />
              </button>
              <Image src="/pp.png" alt="Profile" className="rounded-full" width={40} height={40} />
            </div>
          </div>

          <div className="space-y-[40px]">
            {[1, 2].map((_, index) => (
              <section className="space-y-[20px]" key={index}>
                <div className="flex justify-between items-center">
                  <h1 className="text-[32px] font-semibold text-gray-800">Internet of Things untuk Pertanian dan Perkebunan</h1>
                  <button className="w-[190px] h-[48px] bg-[#00A876] text-white font-bold text-[18px] rounded-[10px]">
                    <Link href="#">Selengkapnya &gt;</Link>
                  </button>
                </div>
                <div className="flex space-x-[20px]">
                  {[1, 2, 3].map((__, cardIndex) => (
                    <div
                      className="w-[426px] h-[543px] bg-white rounded-[25px] shadow-md"
                      key={cardIndex}
                    >
                      <div className="relative mb-[20px]">
                        <Image src="/card-img.png" alt="Card Image" width={426} height={287} />
                        <Image
                          className="absolute top-[110px] left-[173px] w-[80px]"
                          src="/video-play.svg"
                          alt="Play Button"
                          width={24}
                          height={24}
                        />
                        <p className="absolute top-[140px] left-[240px] bg-white bg-opacity-60 p-[6px] rounded-[5px] text-gray-800 font-medium text-[14px]">
                          <Image src="/clock.png" alt="Clock Icon" width={16} height={16} className="inline-block mr-[4px]" />
                          08 hr 12 mins
                        </p>
                      </div>
                      <div className="px-[20px] ">
                        <div className="flex justify-between items-center mb-[12px]">
                          <Link href="/videolist" className="text-[24px] font-semibold font-raleway text-gray-800 truncate">
                            Otomatisasi penyiraman tanaman
                          </Link>
                          <Image src="/arrow-up-right.svg" alt="Arrow Icon" width={24} height={24} />
                        </div>
                        <p className="text-[18px] text-gray-800 mb-[12px]">
                          Use Figma to get a job in UI Design, User Interface, User Experience design.
                        </p>
                        <div className="flex items-center space-x-[10px] mb-[12px]">
                          <h4 className="text-[14px] text-[#00A876] font-medium">5.0</h4>
                            <div className="flex space-x-[5px]">
                              <Image src="/star.svg" alt="Rating Icon" width={18} height={18} />
                              <Image src="/star.svg" alt="Rating Icon" width={18} height={18} />
                              <Image src="/star.svg" alt="Rating Icon" width={18} height={18} />
                              <Image src="/star.svg" alt="Rating Icon" width={18} height={18} />
                            </div>
                          <h5 className="text-[14px] text-gray-500">(16,325)</h5>
                        </div>
                        <div className="flex items-center">
                          <Image src="/pfp.png" alt="Mentor Farrel" width={40} height={40} />
                          <div className="ml-[14px]">
                            <h4 className="text-[18px] font-semibold text-gray-800">Farrel</h4>
                            <h5 className="text-[18px] text-gray-500">2001 Enrolled</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </main>
        <footer className="p-[40px] bg-gray-100">
          <div className="grid grid-cols-2 gap-[40px]">
            <div>
              <h1 className="text-[32px] font-bold text-gray-800">Taniku</h1>
              <p className="text-gray-600 text-[16px]">
                Taniku is a platform for those of you who want to increase your business opportunities...
              </p>
              <div className="flex space-x-[10px] mt-[20px]">
                {[1, 2, 3].map((_, iconIndex) => (
                  <Image
                    key={iconIndex}
                    src={`/Group%201${3 - iconIndex}.png`}
                    alt="Social Icon"
                    width={24}
                    height={24}
                  />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3">
              {[1, 2, 3].map((_, linkIndex) => (
                <ul key={linkIndex} className="space-y-[10px]">
                  <li className="text-gray-800 font-bold">Fitur</li>
                  {[1, 2, 3].map((__, itemIndex) => (
                    <li key={itemIndex}>
                      <Link href="#" className="text-gray-600">Podcast</Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="text-center mt-[20px] text-gray-500">Copyright © 2023. Taniku All right reserved</div>
        </footer>
      </div>
    </div>
  );
};

export default Pemebelajaran;