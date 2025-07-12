import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <>
      
      <Navbar />

      {/* Anasayfa */}
      <section id="home" className="home-section">
  <div className="home-content">
    <div className="home-text">
      <h1>Merhaba, Benim Portfolyom</h1>
      <p>Yapay Zeka ve Backend Developer</p>
      <p className="name">Abdulkadir Partal</p>
    </div>

    <div className="home-image">
      <img src="/tasarım.png" alt="Tasarım" />
    </div>
  </div>
</section>

{/* Hakkımda */}
      <section id="about" className="section-about">
        <h2 className="section-title fade-in">Hakkımda</h2>

        <p className="about-paragraph">
          İstanbul Üniversitesi Cerrahpaşa Elektronik Teknolojisi ve Marmara Üniversitesi Elektrik-Elektronik Mühendisliği mezunuyum. Yapay zeka, görüntü işleme, veri analizi ve backend geliştirme konularına yoğunlaşarak birçok proje gerçekleştirdim. Python ve JavaScript dillerinde projeler geliştirdim.
        </p>

        <p className="about-paragraph">
          Yapmış olduğum stajlarda ve üniversite proje gruplarında yazılım alanında sorumluluklar aldım. Bunun dışında, API entegrasyonu, MongoDB, Node.js ve RESTful servislerle verimli backend çözümleri geliştirdim. TÜBİTAK 2209-A destekli bitirme projemde, mikro ifadelerle yalan tespiti üzerine çalıştım.
        </p>

        <p className="about-paragraph">
          Teknik yetkinliklerim arasında Python, OpenCV, scikit-learn, Flask, Django, JavaScript, React, Node.js, MongoDB, Git, HTML/CSS ve REST API bulunmaktadır. Hedefim, kullanıcı odaklı yapay zeka çözümleri geliştiren bir yazılım mühendisi olarak kariyerimi sürdürmektir.
        </p>
      </section>

      {/* Deneyim */}
      <section id="experience" className="experience-section">
      <h2 className="section-title fade-in">Deneyimlerim</h2>

      <div className="experience-list">

        <div className="experience-card">
          <h3 className="experience-title">İstanbul Üniversitesi Cerrahpaşa</h3>
          <p className="experience-position">Yazılım(Python) Staj</p>
          <p className="experience-date">Haziran 2020 – Ağustos 2020</p>
      
          <p className="experience-tech">
            <strong>Kullanılan Teknolojiler:</strong> Python
          </p>
        </div>

        <div className="experience-card">
          <h3 className="experience-title">Intertech</h3>
          <p className="experience-position">Yapay Zeka Stajyeri</p>
          <p className="experience-date">Temmuz 2023 – Eylül 2023</p>
          
          <p className="experience-tech">
            <strong>Kullanılan Teknolojiler:</strong> Python, Django, Yolov5, OpenCV, Tensorflow, 
          </p>
        </div>

        <div className="experience-card">
          <h3 className="experience-title">Elmak Kontrol Sistemleri</h3>
          <p className="experience-position">Stajyer / Part-time Proje Mühendisi</p>
          <p className="experience-date">Eylül 2023 – Haziran 2024</p>
          
          <p className="experience-tech">
            <strong>Kullanılan Teknolojiler:</strong> SCADA, PLC Temelleri, Teknik Çizim
          </p>
        </div>

        <div className="experience-card">
          <h3 className="experience-title">Decentra Media</h3>
          <p className="experience-position">Blockchain Analyst Intern</p>
          <p className="experience-date">Haziran 2024 – Ağustos 2024</p>
        
          <p className="experience-tech">
            <strong>Kullanılan Teknolojiler:</strong> WordPress
          </p>
        </div>

      </div>
    </section>

{/* Yetenekler */}
      <section id="skills" className="section-skills">
        <h2 className="section-title fade-in">Yetenekler</h2>

        <ul className="skills-list">
          <li className="skill-item">Python</li>
          <li className="skill-item">C++</li>
          <li className="skill-item">JavaScript</li>
          <li className="skill-item">Django</li>
          <li className="skill-item">React</li>
          <li className="skill-item">Node.js</li>
          <li className="skill-item">MongoDB</li>
          <li className="skill-item">PostgreSQL</li>
          <li className="skill-item">REST API</li>
          <li className="skill-item">Yolo</li>
          <li className="skill-item">OpenCV</li>
          <li className="skill-item">scikit-learn</li>
          <li className="skill-item">Pandas</li>
          <li className="skill-item">Git & GitHub</li>
          <li className="skill-item">HTML / CSS</li>
          <li className="skill-item">Linux / Terminal</li>
          <li className="skill-item">Postman</li>
          <li className="skill-item">API Entegrasyonu</li>
          <li className="skill-item">Veri Görselleştirme</li>
          <li className="skill-item">Görüntü İşleme</li>
          <li className="skill-item">Yapay Zeka Destekli Uygulamalar</li>
        </ul>
      </section>
      
      {/* Projeler */}
      <section id="projects" className="section-projects">
  <h2 className="section-title fade-in">En Önemli Projelerim</h2>
  <p>Yapay zeka, backend, web geliştirme ve donanım alanlarında geliştirdiğim projelerden bazıları:</p>

    <div className="project-list">

  <div className="project-item hover-card">
    <div className="project-content">
    <strong className="project-title">Analysis of Body Language and Lying Detection Using AI and Image Processing</strong><br />
    Yapay zeka ve görüntü işleme ile mikro ifadeleri analiz ederek stres kaynaklı yalan tespiti yapan TÜBİTAK destekli bitirme projesi. <br />
    <em>Kullanılan Teknolojiler:</em> Python, OpenCV, Mediapipe, scikit-learn
    </div>
    <img src="/pr1.png" alt="Body Language AI" className="project-image" />
  </div>
  

  <div className="project-item hover-card">
    <div className="project-content">
    <strong className="project-title">AI Tabanlı Banka Kimlik Kartı Onaylama Uygulması</strong><br />
    Gerçek zamanlı yüz tanıma ile kimlik doğrulama işlemlerini gerçekleştiren uygulama. Staj süresince geliştirildi. <br />
    <em>Kullanılan Teknolojiler:</em> Python, OpenCV, Flask, Yolov5
    </div>
    <img src="/pr2.png" alt="Body Language AI" className="project-image" />
  </div>

  </div>

  <h2 className="section-title section-title-secondary fade-in">Diğer Projelerim</h2>

  <p>Daha önce geliştirdiğim farklı alanlardaki projeler:</p>

  <div className="project-list">
    <div className="project-item">
      <strong className="project-title-1">
        Lazy Sloth Pomodoro Uygulaması & Web Tasarımı
      </strong><br />
      Verimlilik ve zaman yönetimini destekleyen Pomodoro sistemi, günlük/haftalık çalışma süresi takibi ve site engelleme özellikleri barındırır. <br />
      <em>Kullanılan Teknolojiler:</em> Django, JavaScript, HTML/CSS, localStorage
    </div>

    <div className="project-item">
      <strong className="project-title-1">
        Film Kataloğu Sitesi
      </strong><br />
      TMDB API üzerinden popüler filmleri listeler, arama yapmaya olanak sağlar. <br />
      <em>Kullanılan Teknolojiler:</em> React, TMDB API, JavaScript
    </div>

    <div className="project-item">
      <strong className="project-title-1">
        Hava Durumu Uygulaması
      </strong><br />
      Konuma göre anlık hava durumu bilgisi sunar. <br />
      <em>Kullanılan Teknolojiler:</em> JavaScript, HTML/CSS, RapidAPI
    </div>

    <div className="project-item">
      <strong className="project-title-1">
        Robot Kol
      </strong><br />
      Python ile bilgisayar üzerinden kontrol edilebilen robotik kol projesi. <br />
      <em>Kullanılan Teknolojiler:</em> Python, Arduino, PySerial
    </div>

    <div className="project-item">
      <strong className="project-title-1">
        Akıllı Sera
      </strong><br />
      Sıcaklık, nem ve ışık sensörleriyle verileri okuyup, otomatik yönetim sağlayan sera sistemi. <br />
      <em>Kullanılan Teknolojiler:</em> Arduino, Python, C++
    </div>
  </div>
</section>

      
      {/* İletişim */}
  <section id="contact">
  <h2 className="section-title fade-in">İletişim</h2>
  
    <div className="contact-content">
    <div className="contact-info">
      <ul className="contact-list">
        <li>
          <i className="fas fa-envelope"></i>
          <a href="mailto:a.kadirpartal44@gmail.com">a.kadirpartal44@gmail.com</a>
        </li>
        <li>
          <i className="fab fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/abdulkadir-partal-869297208/" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </li>
        <li>
          <i className="fab fa-github"></i>
          <a href="https://github.com/Abdulkadir-Partal" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
      </ul>
    </div>

    <div className="contact-image">
      <img src="/profile.jpeg" alt="Benim Fotoğrafım" />
    </div>
  </div>
</section>
    </>
  );
}

export default App;
