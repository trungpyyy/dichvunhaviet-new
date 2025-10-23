import React from 'react'

const services = [
  {
    label: 'Sửa chữa điện 1 pha, 3 pha',
    imgSrc: '/banner/electrician.png', // Updated placeholder path, replace with actual icon path if available
  },
  {
    label: 'Sửa chữa máy bơm nước',
    imgSrc: '/banner/water-pump.png',
  },
  {
    label: 'Vệ sinh bồn nước',
    imgSrc: '/banner/water-tank.png',
  },
  {
    label: 'Lắp đặt, Hàn ống PPR',
    imgSrc: '/banner/ppr-pipe.png',
  },
  {
    label: 'Lắp đặt quạt trần, quạt hút...',
    imgSrc: '/banner/fan.png',
  },
  {
    label: 'Lắp đặt điện trong nhà',
    imgSrc: '/banner/indoor-electric.png',
  },
  {
    label: 'Chống thấm sàn vệ sinh',
    imgSrc: '/banner/waterproof.png',
  },
  {
    label: 'Sửa chữa, thay thế vòi nước',
    imgSrc: '/banner/faucet.png',
  },
]

export default function PopularServices() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 py-6 md:py-10">
      <h2 className="text-xs sm:text-sm font-semibold mb-4 md:mb-6 border-b border-gray-300 pb-2 inline-block">
        CÁC DỊCH VỤ ĐƯỢC YÊU CẦU NHIỀU NHẤT
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 border-t border-l border-gray-300">
        {services.map(({ label, imgSrc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-r border-b border-gray-300 p-2 sm:p-3 md:p-4 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-orange-400 flex items-center justify-center mb-2 md:mb-3 overflow-hidden">
              <img src={imgSrc} alt={label} className="max-w-[60%] max-h-[60%] object-contain" />
            </div>
            <p className="text-[10px] sm:text-xs text-center font-semibold text-gray-800 leading-tight px-1">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}