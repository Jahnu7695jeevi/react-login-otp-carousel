import React, { useState, useEffect } from 'react';

const slides = [
  {
    src: 'https://res.cloudinary.com/dnjnnhnps/image/upload/v1751003868/frame_1_1_1_mjp4qp.png',
    caption: 'Celebrate and Encourage every <strong>Achievement</strong> and <strong>Milestone</strong>'
  },
  {
    src: 'https://res.cloudinary.com/dnjnnhnps/image/upload/v1751003786/Frame_2_1_1_1_m4udp5.png',
    caption: 'Make <strong>your work easier</strong> and enhance your <strong>employee relationship</strong>'
  },
  {
    src: 'https://res.cloudinary.com/dnjnnhnps/image/upload/v1751003678/Frame_3_1_1_1_pb8qqs.png',
    caption: 'Celebrate them on their special <strong>days &amp; occasions</strong>'
  }
];

export default function App() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx(i => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="card">
      {/* LEFT : LOGIN */}
      <section className="login">
        <h1>Login Page</h1>
        <form onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Email ID" required />
          <button type="submit">Send OTP</button>
        </form>

        <p className="privacy-note">This site is protected by privacy policy</p>
        <div className="footer-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">CA Privacy Notice</a>
        </div>
      </section>

      {/* RIGHT : CAROUSEL */}
      <section className="carousel">
        <div className="img-wrap">
          <img src={slides[idx].src} alt="Slide" />
          <div className="overlay">
            <div className="dots">
              {slides.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === idx ? 'active' : ''}`}
                  onClick={() => setIdx(i)}
                />
              ))}
            </div>
            <p
              className="caption"
              dangerouslySetInnerHTML={{ __html: slides[idx].caption }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
