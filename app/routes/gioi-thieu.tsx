export function meta() {
  return [
    { title: "Giới thiệu - Hưng Thịnh" },
    { name: "description", content: "Giới thiệu về Hưng Thịnh" },
  ];
}

export default function GioiThieu() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <h1>Giới thiệu</h1>
      <p>
        Công ty dịch vụ sửa chữa điện nước Hưng Thịnh kính chào quý khách! Chúng tôi tự hào là đơn vị
        cung cấp các dịch vụ lắp đặt, sửa chữa tại nhà ở TP.HCM, Bình Dương, Biên Hòa Đồng Nai uy tín,
        được nhiều khách hàng đánh giá cao.
      </p>

      <h2>Các lĩnh vực dịch vụ chúng tôi đang cung cấp</h2>
      <ul>
        <li>Sửa chữa điện nước tại nhà</li>
        <li>Thi công lắp đặt điện nước công trình nhà ở, văn phòng, quán cafe, nhà hàng, nhà xưởng, biệt thự, chung cư…</li>
        <li>Lắp đặt, sửa chữa máy bơm nước</li>
        <li>Mua bán, lắp đặt, bảo dưỡng, sửa chữa máy nước nóng năng lượng mặt trời</li>
        <li>Dịch vụ chống thấm dột</li>
      </ul>

      <h2>Dịch vụ sửa chữa tại nhà uy tín, giá rẻ</h2>
      <p>
        Sự tín nhiệm ngày càng lớn của khách hàng là động lực để đội ngũ nhân viên và anh em thợ của Hưng Thịnh
        phấn đấu mang đến dịch vụ ngày càng chất lượng. Chúng tôi luôn tâm niệm coi việc sửa chữa cho khách như
        sửa chữa cho nhà mình, luôn cố gắng lắp đặt – sửa chữa sao cho tiết kiệm chi phí nhất, làm việc cẩn thận,
        tỉ mỉ và trung thực: sửa đúng bệnh, báo đúng giá. Phương châm: Cái gì có thể sửa thì sửa, chỉ thay mới khi thật sự cần thiết.
      </p>

      <div className="not-prose mt-6">
        <div className="bg-base-200 border rounded-xl p-4 sm:p-6">
          <h3 className="text-lg font-semibold">Liên hệ đặt dịch vụ</h3>
          <p className="opacity-80 mt-1">Hỗ trợ 24/7, phục vụ tận nơi nhanh chóng.</p>
          <div className="mt-3 flex flex-col sm:flex-row gap-2">
            <a href="tel:0906765021" className="btn btn-primary">Hotline: 0906.765.021</a>
            <a href="tel:0911048049" className="btn btn-outline">Hotline: 0911.048.049</a>
          </div>
        </div>
      </div>

      <h2 className="mt-8">Thông tin công ty</h2>
      <ul>
        <li><strong>CTY TNHH DỊCH VỤ KỸ THUẬT HƯNG THỊNH</strong></li>
        <li><strong>Địa chỉ:</strong> 196 Tân Hương, P. Tân Quý, Q. Tân Phú, TP.HCM</li>
        <li><strong>CN Quận 12:</strong> 120/88 Tân Chánh Hiệp 36, Quận 12, TP.HCM</li>
        <li><strong>CN Biên Hòa:</strong> Trung Dũng, TP. Biên Hòa</li>
        <li><strong>CN Bình Dương:</strong> Thuận An, Bình Dương</li>
        <li><strong>Email:</strong> tanthinh1986@gmail.com</li>
      </ul>
    </section>
  );
}


