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
    <section className="max-w-[1280px] mx-auto px-4 py-10">
      <h2 className="text-sm font-semibold mb-6 border-b border-gray-300 pb-2 inline-block">
        CÁC DỊCH VỤ ĐƯỢC YÊU CẦU NHIỀU NHẤT
      </h2>
      <div className="grid grid-cols-4 gap-6 border-t border-l border-gray-300">
        {services.map(({ label, imgSrc }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center border-r border-b border-gray-300 p-4"
          >
            <div className="w-20 h-20 rounded-full border border-orange-400 flex items-center justify-center mb-3 overflow-hidden">
              <img src={imgSrc} alt={label} className="max-w-[60%] max-h-[60%]" />
            </div>
            <p className="text-xs text-center font-semibold">{label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
