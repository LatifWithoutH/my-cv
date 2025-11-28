// Data pengalaman (sama seperti sebelumnya, tetapi penting untuk konteks)
const experienceData = [
  {
    id: 1,
    title: "Backend Developer (Freelance)",
    company: "Freelance Project",
    type: "project",
    date: "Oct 2024 - Present",
    isCurrent: true,
    description: "Membangun API backend UMKM menggunakan DRF dan PostgreSQL.",
    tags: ["Django", "DRF", "PostgreSQL"],
    icon: "💼", // Ikon tas kerja
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "PT Digital Solusi Nusantara",
    type: "internship",
    date: "Jul 2024 - Sep 2024",
    isCurrent: false,
    description: "Mengembangkan antarmuka dashboard internal menggunakan React.",
    tags: ["ReactJS", "Tailwind CSS"],
    icon: "💻", // Ikon laptop/komputer
  },
  {
    id: 3,
    title: "Head of Web Development Division",
    company: "UKM Informatika UMS",
    type: "organization",
    date: "Jan 2023 - Dec 2023",
    isCurrent: false,
    description: "Mengkoordinasi tim pengembang web untuk kegiatan UKM.",
    tags: [],
    icon: "👥", // Ikon organisasi/tim
  },
];

// Komponen utama Experience
const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      {experienceData.map((item, index) => (
        <div key={item.id} className="experience-item-container">
          
          {/* Kolom Kiri: Ikon dan Posisi Garis Waktu */}
          <div className="exp-icon-col">
            <div className="exp-icon">{item.icon}</div>
          </div>

          {/* Konten Pengalaman (Card di Kanan) */}
          <div className="experience-details">
            <div className="exp-title">
              {item.title}
              <span className={`exp-type-label type-${item.type}`}>
                {item.type}
              </span>
            </div>
            <div className="exp-company">{item.company}</div>
            
            <div className="exp-year">
              {/* Tambahkan ikon kalender kecil 📅 di sini jika perlu */}
              <span className="exp-date-range">
                {item.date}
              </span>
              {item.isCurrent && (
                <span className="exp-current-label">Current</span>
              )}
            </div>
            
            <div className="exp-desc">{item.description}</div>
            
            {item.tags.length > 0 && (
              <div className="tag-container">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;