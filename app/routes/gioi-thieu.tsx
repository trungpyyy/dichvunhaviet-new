export function meta() {
  return [
    { title: "Giới thiệu - Hưng Thịnh" },
    { name: "description", content: "Giới thiệu về Hưng Thịnh" },
  ];
}

export default function GioiThieu() {
  return (
    <section className="prose dark:prose-invert max-w-none">
      <div style={styles.container}>
        <p style={styles.text}>
          Chúng tôi là đội ngũ thợ sửa chữa điện nước chuyên nghiệp, uy tín với
          nhiều năm kinh nghiệm. Luôn sẵn sàng phục vụ bạn 24/7, có mặt nhanh
          chóng trong vòng 30 phút khi bạn cần.
        </p>
        <p style={styles.text}>Dịch vụ của chúng tôi cam kết:</p>
        <ul style={styles.list}>
          <li>✅ Thợ tay nghề cao, làm việc tận tâm, sạch sẽ</li>
          <li>✅ Giá cả hợp lý, minh bạch, không phát sinh</li>
          <li>✅ Bảo hành chu đáo, đảm bảo chất lượng lâu dài</li>
          <li>✅ Phục vụ nhanh chóng, gọi là có mặt ngay</li>
        </ul>
        <p style={styles.text}>
          Hãy để chúng tôi giúp bạn giải quyết mọi sự cố điện nước một cách
          nhanh gọn và hiệu quả nhất!
        </p>
        <button
          style={styles.button}
          onClick={() =>
            alert("Cảm ơn bạn đã quan tâm! Liên hệ ngay để được hỗ trợ.")
          }
        >
          Liên hệ ngay 📞
        </button>
      </div>
    </section>
  );
}



const styles = {
  container: {
    maxWidth: 700,
    margin: '40px auto',
    padding: 20,
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#007acc',
  },
  text: {
    fontSize: 18,
    lineHeight: 1.6,
    marginBottom: 16,
  },
  list: {
    fontSize: 18,
    marginBottom: 16,
    paddingLeft: 20,
  },
  button: {
    display: 'block',
    margin: '0 auto',
    backgroundColor: '#007acc',
    color: '#fff',
    border: 'none',
    padding: '12px 24px',
    fontSize: 18,
    borderRadius: 6,
    cursor: 'pointer',
  },
};