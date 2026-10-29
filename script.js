/* ==========================================
   HELPER & GENERATOR PLACEHOLDER SVG
========================================== */
const selectElement = (selector) => document.querySelector(selector);

const THEME_COLORS = ['#2F5BFF', '#E63232', '#F2C84B', '#22C55E', '#FF9AD5'];

const toSvgDataUri = (svgString) => 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgString);

// Generator placeholder gambar umum (Foto Profil, Galeri, Proyek)
const createImagePlaceholder = (index, title, height = 300) => toSvgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 ${height}">
    <rect width="400" height="${height}" fill="${THEME_COLORS[index % 5]}"/>
    <circle cx="${90 + index * 40}" cy="80" r="46" fill="#fff" opacity=".4"/>
    <path d="M0 ${height}L120 ${height * 0.55}L210 ${height * 0.85}L280 ${height * 0.65}L400 ${height}Z" fill="#111" opacity=".25"/>
    <text x="200" y="${height / 2 + 10}" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="28" fill="#111">${title}</text>
  </svg>
`);

// Generator placeholder gambar sertifikat
const createCertificatePlaceholder = (index, title, organization, year) => toSvgDataUri(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 560">
    <rect width="800" height="560" fill="#FFFDF5"/>
    <rect x="24" y="24" width="752" height="512" fill="none" stroke="#111" stroke-width="8"/>
    <rect x="44" y="44" width="712" height="472" fill="none" stroke="${THEME_COLORS[index % 5]}" stroke-width="6"/>
    <text x="400" y="130" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="46" fill="#111">SERTIFIKAT</text>
    <text x="400" y="185" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#555">diberikan kepada</text>
    <text x="400" y="250" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="40" fill="#2F5BFF">Sandi Pratama</text>
    <text x="400" y="310" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#555">atas penyelesaian program</text>
    <text x="400" y="360" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="30" fill="#111">${title}</text>
    <text x="400" y="480" text-anchor="middle" font-family="sans-serif" font-size="20" fill="#555">${organization} · ${year}</text>
    <circle cx="650" cy="440" r="42" fill="${THEME_COLORS[index % 5]}" stroke="#111" stroke-width="5"/>
    <text x="650" y="450" text-anchor="middle" font-size="30">★</text>
  </svg>
`);

/* ==========================================
   DATA KONFIGURASI & KONTEN PORTOFOLIO
========================================== */

// Data Navigasi Utama
const NAVIGATION_ITEMS = [
  { id: 'tentang', label: 'Tentang', icon: 'ri-user-smile-line' },
  { id: 'galeri', label: 'Galeri', icon: 'ri-camera-lens-line' },
  { id: 'pengalaman', label: 'Pengalaman', icon: 'ri-briefcase-4-line' },
  { id: 'pendidikan', label: 'Pendidikan', icon: 'ri-graduation-cap-line' },
  { id: 'pelatihan', label: 'Pelatihan', icon: 'ri-book-open-line' },
  { id: 'keahlian', label: 'Keahlian', icon: 'ri-tools-line' },
  { id: 'sertifikat', label: 'Sertifikat', icon: 'ri-medal-line' },
  { id: 'proyek', label: 'Proyek', icon: 'ri-macbook-line' },
  { id: 'kontak', label: 'Kontak', icon: 'ri-chat-smile-3-line' }
];

// Mapping Ikon untuk Chip Teknologi (Marquee & Proyek)
const TECH_CHIP_ICONS = {
  'PHP': 'ri-php-line',
  'Laravel': 'ri-code-s-slash-line',
  'REST API': 'ri-plug-line',
  'Livewire': 'ri-flashlight-line',
  'MySQL': 'ri-database-2-line',
  'PostgreSQL': 'ri-database-line',
  'Query tuning': 'ri-speed-up-line',
  'Backup &amp; recovery': 'ri-hard-drive-3-line',
  'ERD': 'ri-node-tree',
  'HTML': 'ri-html5-line',
  'CSS': 'ri-css3-line',
  'JavaScript': 'ri-javascript-line',
  'Tailwind': 'ri-tailwind-css-line',
  'Alpine.js': 'ri-mountain-line',
  'Git': 'ri-git-branch-line',
  'SQL': 'ri-table-line',
  'ETL': 'ri-flow-chart',
  'Keamanan DB': 'ri-shield-keyhole-line',
  'Indexing': 'ri-search-eye-line',
  'OWASP': 'ri-shield-check-line',
  'Validasi input': 'ri-checkbox-circle-line',
  'Three.js': 'ri-box-3-line'
};

const renderTechChip = (techName) => `
  <span class="chip">
    <i class="${TECH_CHIP_ICONS[techName] || 'ri-price-tag-3-line'}"></i>${techName}
  </span>
`;

// Data Foto Hero Section
const HERO_IMAGE_PATH = 'images/hero/hero-profile.jpg';

// Data Galeri / Dokumentasi Section (Dikelompokkan per aktivitas, dapat berisi > 1 foto)
const GALERI_DATA = [
  {
    id: 'dokumentasi_it_bootcamp',
    title: 'IT Bootcamp : Software Development',
    images: [
      'images/galeri/dokumentasi_it_bootcamp/foto-1.jpg',
      'images/galeri/dokumentasi_it_bootcamp/foto-2.jpg',
      'images/galeri/dokumentasi_it_bootcamp/foto-3.jpg',
      'images/galeri/dokumentasi_it_bootcamp/foto-4.jpg'
    ]
  },
  {
    id: 'dokumentasi_hackathon_kampus',
    title: 'Hackathon Kampus',
    images: [
      'images/galeri/dokumentasi_hackathon_kampus/foto-1.jpg',
      'images/galeri/dokumentasi_hackathon_kampus/foto-2.jpg'
    ]
  },
  {
    id: 'dokumentasi_seminar_basis_data',
    title: 'Seminar Basis Data',
    images: [
      'images/galeri/dokumentasi_seminar_basis_data/foto-1.jpg',
      'images/galeri/dokumentasi_seminar_basis_data/foto-2.jpg'
    ]
  },
  {
    id: 'dokumentasi_tim_proyek',
    title: 'Tim Proyek',
    images: [
      'images/galeri/dokumentasi_tim_proyek/foto-1.jpg',
      'images/galeri/dokumentasi_tim_proyek/foto-2.jpg'
    ]
  },
  {
    id: 'dokumentasi_meetup_developer',
    title: 'Meetup Developer',
    images: [
      'images/galeri/dokumentasi_meetup_developer/foto-1.jpg',
      'images/galeri/dokumentasi_meetup_developer/foto-2.jpg'
    ]
  },
  {
    id: 'dokumentasi_ruang_kerja',
    title: 'Ruang Kerja',
    images: [
      'images/galeri/dokumentasi_ruang_kerja/foto-1.jpg',
      'images/galeri/dokumentasi_ruang_kerja/foto-2.jpg'
    ]
  }
];

// Data Pengalaman Section
const EXPERIENCE_DATA = [
  {
    role: 'CEO & Administrator Semanggi Aquatic Store',
    companyAndPeriod: 'Semanggi Aquatic Store | September 2025 - Sekarang',
    tasks: [
      'Mengelola toko online dan media sosial untuk penjualan aquascape',
      'Membuat sistem manajemen inventaris dan laporan penjualan berbasis web',
    ]
  },
  {
    role: 'Freelance Web Developer',
    companyAndPeriod: 'Mandiri | Jan 2025 – sekarang',
    tasks: [
      'Membangun dan memelihara situs web untuk klien lokal',
      'Mengoptimalkan performa dan keamanan situs web berbasis Laravel',
      'Membuat dokumentasi teknis untuk klien'
    ]
  },
  {
    role: 'Web Developer Intern',
    companyAndPeriod: 'Semanggi Aquatic Store | Juni 2026 – Agustus 2026',
    tasks: [
      'Membangun aplikasi e-commerce untuk penjualan aquascape berbasis web',
      'Mengoptimalkan query yang lambat dan menambah indeks'
    ]
  },
    {
    role: 'Ketua PKM (Pengabdian Kepada Masyarakat) Universitas Bina Sarana Informatika',
    companyAndPeriod: 'Universitas Bina Sarana Informatika | Juni 2025',
    tasks: [
      'Membangun aplikasi e-commerce untuk penjualan aquascape berbasis web',
      'Mengoptimalkan query yang lambat dan menambah indeks'
    ]
  }
];

// Data Pendidikan Section
const EDUCATION_DATA = [
  {
    degree: 'S1 - Sistem Informasi',
    institutionAndPeriod: 'Universitas Bina Sarana Informatika · 2022 – 2026',
    description: 'IPK 3,7. Fokus pada rekayasa perangkat lunak dan basis data.'
  },
  {
    degree: 'SMA - IPA',
    institutionAndPeriod: 'SMA Negeri 1 Cimalaka · 2019 – 2022',
    description: 'Juara 2 lomba web design tingkat kota.'
  }
];

// Data Keahlian Section
const SKILLS_DATA = [
  {
    category: 'Microsoft Office',
    items: ['Word', 'Excel', 'PowerPoint', 'Outlook']
  },
  {
    category: 'Database',
    items: ['MySQL', 'PostgreSQL', 'Query tuning', 'Backup &amp; recovery', 'ERD']
  },
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Alpine.js']
  }
];

// Data Pelatihan Section & Ikon Kategori Filter
const TRAINING_CATEGORY_ICONS = {
  'Semua': 'ri-apps-2-line',
  'Bootcamp': 'ri-rocket-2-line',
  'Pelatihan': 'ri-award-line',
  'Workshop': 'ri-tools-line',
  'Kursus Online': 'ri-computer-line'
};

const TRAINING_DATA = [
  {
    type: 'Bootcamp',
    title: 'Full-Stack Web Developer Bootcamp',
    organizer: 'Akademi Digital Contoh',
    duration: 'Mar – Jun 2025 · 12 minggu',
    description: 'Membangun aplikasi web end-to-end sebagai proyek akhir bersama tim.',
    topics: ['Laravel', 'MySQL', 'Git']
  },
  {
    type: 'Bootcamp',
    title: 'Data Engineering Dasar',
    organizer: 'Pusat Pelatihan Contoh',
    duration: 'Agu – Sep 2025 · 6 minggu',
    description: 'Belajar membuat pipeline data sederhana dan merancang skema basis data.',
    topics: ['SQL', 'PostgreSQL', 'ETL']
  },
  {
    type: 'Pelatihan',
    title: 'Pelatihan Kompetensi Database Administrator',
    organizer: 'Balai Latihan Kerja Contoh',
    duration: 'Jan – Feb 2026 · 40 jam',
    description: 'Persiapan uji kompetensi: instalasi, backup, recovery, dan keamanan basis data.',
    topics: ['Backup &amp; recovery', 'Keamanan DB']
  },
  {
    type: 'Workshop',
    title: 'Workshop Optimasi Query Database',
    organizer: 'Komunitas DB Indonesia',
    duration: 'Nov 2025 · 2 hari',
    description: 'Praktik membaca rencana eksekusi dan menambah indeks yang tepat.',
    topics: ['Query tuning', 'Indexing']
  },
  {
    type: 'Kursus Online',
    title: 'Dasar Pemrograman Web',
    organizer: 'Platform Belajar Contoh',
    duration: '2024 · 30 jam',
    description: 'Fondasi HTML, CSS, dan JavaScript lewat proyek kecil.',
    topics: ['HTML', 'CSS', 'JavaScript']
  },
  {
    type: 'Workshop',
    title: 'Workshop Keamanan Aplikasi Web',
    organizer: 'Himpunan Mahasiswa Contoh',
    duration: 'Okt 2024 · 1 hari',
    description: 'Mengenal celah umum seperti SQL injection dan XSS beserta pencegahannya.',
    topics: ['OWASP', 'Validasi input']
  }
];

// Data Sertifikat Section (Dikelompokkan per sertifikat, dapat berisi > 1 halaman/foto)
const CERTIFICATE_DATA = [
  {
    id: 'sertifikat_bnsp_programmer',
    title: 'Certificate Of Competence - Programmer',
    organization: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: 'Feb 2025 - Feb 2028',
    images: [
      'images/sertifikat/sertifikat_bnsp_programmer/Sertifikat_Kompetensi_BNSP_Programmer_page-0001.jpg',
      'images/sertifikat/sertifikat_bnsp_programmer/Sertifikat_Kompetensi_BNSP_Programmer_page-0002.jpg'
    ]
  },
  {
    id: 'sertifikat_bnsp_junior_web_developer',
    title: 'Certificate Of Competence - Junior Web Developer',
    organization: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    year: 'Sept 2023 - Sept 2026',
    images: [
      'images/sertifikat/sertifikat_bnsp_junior_web_developer/Sertifikat_Kompetensi_BNSP_Junior_Web_Developer_page-0001.jpg',
      'images/sertifikat/sertifikat_bnsp_junior_web_developer/Sertifikat_Kompetensi_BNSP_Junior_Web_Developer_page-0002.jpg'
    ]
  },
  {
    id: 'sertifikat_toefl',
    title: 'Certificate of TOEFL',
    organization: 'Lembaga Bahasa Univ. Bina Sarana Informatika',
    year: 'August 2025',
    images: [
      'images/sertifikat/sertifikat_toefl/sertifikat_toefl.jpg',
    ]
  },
  {
    id: 'sertifikat_microsoft',
    title: 'Certificate of Appreciation - Microsoft Office Specialist',
    organization: 'Karirnex by PT Ebiz Karisma Internasional',
    year: 'Oktober 2026 - Oktober 2027',
    images: [
      'images/sertifikat/sertifikat_microsoft/Certificate_Appreciation_Bootcamp Microsoft_Office_Specialist-001.jpg',
      'images/sertifikat/sertifikat_microsoft/Certificate_Appreciation_Bootcamp Microsoft_Office_Specialist-002.jpg',
    ]
  },
  {
    id: 'setifikat_pelatihan_jwd_bpptik',
    title: 'Sertifikat Pelatihan Junior Web Developer',
    organization: 'BPPTIK Kementerian Kominfo',
    year: 'Juli 2023',
    images: [
      'images/sertifikat/sertifikat_pelatihan_jwd_bpptik/Sertifikat_Pelatihan_JWD_BPPTIK_page-0001.jpg',
      'images/sertifikat/sertifikat_pelatihan_jwd_bpptik/Sertifikat_Pelatihan_JWD_BPPTIK_page-0002.jpg',
    ]
  },
  {
    id: 'sertifikat_profisiensi_pengetahuan_database_systems',
    title: 'Certificate of Proficiency - Database Systems',
    organization: 'Ikatan Ahli Informatika Indonesia (IAII)',
    year: 'Juli 2023',
    images: [
      'images/sertifikat/sertifikat_profisiensi_pengetahuan_database_systems/Sertifikat_IAII_page-0001.jpg',
      'images/sertifikat/sertifikat_profisiensi_pengetahuan_database_systems/Sertifikat_IAII_page-0002.jpg',
    ]
  },
  {
    id: 'sertifikat_myskill_data_science',
    title: 'Certifificate of Completion - Data Science',
    organization: 'MySkill',
    year: 'Oktober 2026',
    images: [
      'images/sertifikat/sertifikat_myskill_data_science/sertifikat_myskill_data_science.jpg',
    ]
  },
];

// Helper normalisasi daftar gambar pada item Galeri maupun Sertifikat
const getItemImages = (item) => {
  if (Array.isArray(item.images) && item.images.length > 0) {
    return item.images.map((img) => (typeof img === 'string' ? img : img.src));
  }
  return item.imageSrc ? [item.imageSrc] : [];
};

// Data Proyek Section
const PROJECT_DATA = [
  {
    title: 'Sistem Informasi Perpustakaan',
    description: 'Peminjaman, denda, dan laporan untuk perpustakaan kampus.',
    technologies: ['Laravel', 'MySQL', 'Tailwind']
  },
  {
    title: 'Portfolio + CMS',
    description: 'Situs portfolio dengan panel admin untuk mengelola konten.',
    technologies: ['Laravel', 'Livewire']
  },
  {
    title: 'Game Penjelajah Tata Surya',
    description: 'Game 3D di browser dengan kontrol sederhana.',
    technologies: ['Three.js', 'JavaScript']
  }
];

/* ==========================================
   RENDER ELEMEN KE DOM
========================================== */

// Render Menu Navigasi (Desktop & Panel Mobile)
const navigationHtml = NAVIGATION_ITEMS.map((navItem) => `
  <a href="#${navItem.id}" data-scroll-link>
    <i class="${navItem.icon}"></i>${navItem.label}
  </a>
`).join('');

selectElement('#navigationLinks').innerHTML = navigationHtml;
selectElement('#mobileMenuPanel').innerHTML = navigationHtml;

// Render Marquee (Running Text)
const marqueeItemsHtml = ['PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'Tailwind', 'Git', 'REST API']
  .map((techName) => `<span><i class="${TECH_CHIP_ICONS[techName] || 'ri-sparkling-2-fill'}"></i> ${techName}</span>`)
  .join('');

selectElement('#marqueeContainer').innerHTML = Array(2).fill(marqueeItemsHtml).join('');

// Render Foto Profil Hero Section
selectElement('#heroProfileImage').src = HERO_IMAGE_PATH;
selectElement('#heroProfileImage').onerror = function () {
  this.src = createImagePlaceholder(0, 'Foto Profil', 345);
};

// Render Galeri / Dokumentasi Section
selectElement('#galeriContainer').innerHTML = GALERI_DATA.map((galeriItem, index) => {
  const images = getItemImages(galeriItem);
  const coverSrc = images[0] || createImagePlaceholder(index, galeriItem.title);
  return `
    <button data-galeri-index="${index}" aria-label="Perbesar ${galeriItem.title} (${images.length} foto)" data-aos="zoom-in" data-aos-delay="${(index % 3) * 100}">
      <figure class="thumb-wrap">
        <img src="${coverSrc}" alt="${galeriItem.title}" onerror="this.src=createImagePlaceholder(${index},'${galeriItem.title}')">
      </figure>
      <span>
        <i class="ri-camera-3-line"></i>${galeriItem.title}
      </span>
    </button>
  `;
}).join('');

// Render Pengalaman Section
selectElement('#experienceContainer').innerHTML = EXPERIENCE_DATA.map((experience, index) => `
  <article class="nb item" data-aos="fade-up" data-aos-delay="${index * 100}">
    <h3>${experience.role}</h3>
    <p class="meta">
      <i class="ri-building-line"></i>${experience.companyAndPeriod}
    </p>
    <ul>
      ${experience.tasks.map((task) => `<li>${task}</li>`).join('')}
    </ul>
  </article>
`).join('');

// Render Pendidikan Section
selectElement('#educationContainer').innerHTML = EDUCATION_DATA.map((education, index) => `
  <article class="nb edu" data-aos="fade-up" data-aos-delay="${(index % 2) * 100}">
    <h3>${education.degree}</h3>
    <p class="meta">
      <i class="ri-building-2-line"></i>${education.institutionAndPeriod}
    </p>
    <p>${education.description}</p>
  </article>
`).join('');

// Render Keahlian Section (Tanpa Ikon pada Judul & Detail)
selectElement('#skillsContainer').innerHTML = SKILLS_DATA.map((skillGroup, index) => `
  <article class="nb skill" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
    <h3>${skillGroup.category}</h3>
    <div class="chips">
      ${skillGroup.items.map((skillName) => `<span class="chip">${skillName}</span>`).join('')}
    </div>
  </article>
`).join('');

// Render Sertifikat Section dengan Pagination (Maksimal 6 per halaman)
const CERTIFICATES_PER_PAGE = 6;
let currentCertificatePage = 1;

const renderCertificatePage = (page = 1, shouldScroll = false) => {
  const totalItems = CERTIFICATE_DATA.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / CERTIFICATES_PER_PAGE));
  currentCertificatePage = Math.min(totalPages, Math.max(1, page));

  const startIndex = (currentCertificatePage - 1) * CERTIFICATES_PER_PAGE;
  const paginatedCertificates = CERTIFICATE_DATA.slice(startIndex, startIndex + CERTIFICATES_PER_PAGE);

  selectElement('#certificateContainer').innerHTML = paginatedCertificates.map((certificate, localIndex) => {
    const globalIndex = startIndex + localIndex;
    const images = getItemImages(certificate);
    const coverSrc = images[0] || createCertificatePlaceholder(globalIndex, certificate.title, certificate.organization, certificate.year);
    return `
      <article class="nb cert" data-aos="zoom-in" data-aos-delay="${(localIndex % 3) * 100}">
        <figure class="thumb-wrap" data-certificate-index="${globalIndex}">
          <img src="${coverSrc}" alt="Sertifikat ${certificate.title}" onerror="this.src=createCertificatePlaceholder(${globalIndex},'${certificate.title}','${certificate.organization}','${certificate.year}')">
        </figure>
        <div>
          <h3>
            <i class="ri-verified-badge-fill"></i>${certificate.title}
          </h3>
          <small>
            <i class="ri-building-4-line"></i>${certificate.organization} </br> ${certificate.year}
          </small>
          <button class="btn sm blue" data-certificate-index="${globalIndex}">
            <i class="ri-eye-line"></i> Lihat sertifikat
          </button>
        </div>
      </article>
    `;
  }).join('');

  const paginationContainer = selectElement('#certificatePagination');
  if (totalPages <= 1) {
    paginationContainer.innerHTML = '';
  } else {
    const pageButtonsHtml = Array.from({ length: totalPages }, (_, i) => i + 1)
      .map((pageNum) => `
        <button type="button" class="btn sm page-btn${pageNum === currentCertificatePage ? ' active' : ''}" data-cert-page="${pageNum}" aria-label="Halaman ${pageNum}" ${pageNum === currentCertificatePage ? 'aria-current="page"' : ''}>
          ${pageNum}
        </button>
      `)
      .join('');

    paginationContainer.innerHTML = `
      <button type="button" class="btn sm page-btn" data-cert-page="${currentCertificatePage - 1}" ${currentCertificatePage === 1 ? 'disabled' : ''} aria-label="Halaman sebelumnya">
        <i class="ri-arrow-left-s-line"></i> Prev
      </button>
      ${pageButtonsHtml}
      <button type="button" class="btn sm page-btn" data-cert-page="${currentCertificatePage + 1}" ${currentCertificatePage === totalPages ? 'disabled' : ''} aria-label="Halaman berikutnya">
        Next <i class="ri-arrow-right-s-line"></i>
      </button>
    `;
  }

  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }

  if (shouldScroll) {
    const scrollBehavior = matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth';
    selectElement('#sertifikat').scrollIntoView({ behavior: scrollBehavior, block: 'start' });
  }
};

selectElement('#certificatePagination').onclick = (event) => {
  const pageButton = event.target.closest('[data-cert-page]');
  if (!pageButton || pageButton.disabled) return;
  const targetPage = Number(pageButton.dataset.certPage);
  if (targetPage && targetPage !== currentCertificatePage) {
    renderCertificatePage(targetPage, true);
  }
};

renderCertificatePage(1);

// Render Proyek Section
selectElement('#projectContainer').innerHTML = PROJECT_DATA.map((project, index) => `
  <article class="nb proj" data-aos="fade-up" data-aos-delay="${(index % 3) * 100}">
    <img src="${createImagePlaceholder(index + 2, project.title, 225)}" alt="Tangkapan layar ${project.title}">
    <div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="chips" style="margin:0">
        ${project.technologies.map(renderTechChip).join('')}
      </div>
      <div class="row">
        <a class="btn sm blue" href="#">
          <i class="ri-external-link-line"></i> Demo
        </a>
        <a class="btn sm" href="#">
          <i class="ri-code-s-slash-line"></i> Kode
        </a>
      </div>
    </div>
  </article>
`).join('');

// Render Pelatihan Section & Filter Kategori
const renderTrainingItems = (selectedCategory) => {
  selectElement('#trainingContainer').innerHTML = TRAINING_DATA
    .filter((training) => selectedCategory === 'Semua' || training.type === selectedCategory)
    .map((training, index) => `
      <article class="nb tr" data-aos="fade-up" data-aos-delay="${(index % 2) * 100}">
        <span class="tp">
          <i class="${TRAINING_CATEGORY_ICONS[training.type] || 'ri-bookmark-line'}"></i>${training.type}
        </span>
        <h3>${training.title}</h3>
        <small>
          <i class="ri-calendar-event-line"></i>${training.organizer} · ${training.duration}
        </small>
        <p>${training.description}</p>
        <div class="chips" style="margin:4px 0 0">
          ${training.topics.map((topic) => `<span class="chip">${topic}</span>`).join('')}
        </div>
      </article>
    `)
    .join('');

  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
};

selectElement('#trainingFilterContainer').innerHTML = ['Semua', ...new Set(TRAINING_DATA.map((training) => training.type))]
  .map((categoryName, index) => `
    <button class="btn sm${index ? '' : ' on'}" data-filter-category="${categoryName}">
      <i class="${TRAINING_CATEGORY_ICONS[categoryName] || 'ri-bookmark-line'}"></i>${categoryName}
    </button>
  `)
  .join('');

selectElement('#trainingFilterContainer').onclick = (event) => {
  const filterButton = event.target.closest('[data-filter-category]');
  if (!filterButton) return;

  document.querySelectorAll('#trainingFilterContainer .btn').forEach((button) => {
    button.classList.toggle('on', button === filterButton);
  });

  renderTrainingItems(filterButton.dataset.filterCategory);
};

renderTrainingItems('Semua');

// Inisialisasi AOS (Animate On Scroll) dengan animasi berulang saat di-scroll / slide
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: false,
    mirror: true,
    offset: 60
  });
}

/* ==========================================
   INTERAKSI NAVIGASI & SCROLL SPY
========================================== */
document.addEventListener('click', (event) => {
  const scrollLink = event.target.closest('[data-scroll-link]');
  if (!scrollLink) return;

  event.preventDefault();
  const targetSectionId = scrollLink.getAttribute('href').slice(1);
  const targetElement = targetSectionId === 'top' ? document.body : document.getElementById(targetSectionId);
  const scrollBehavior = matchMedia('(prefers-reduced-motion:reduce)').matches ? 'auto' : 'smooth';

  targetElement.scrollIntoView({ behavior: scrollBehavior });
  selectElement('#mobileMenuPanel').classList.remove('open');
  selectElement('#mobileMenuButton').setAttribute('aria-expanded', 'false');
});

selectElement('#mobileMenuButton').onclick = () => {
  const isMenuOpen = selectElement('#mobileMenuPanel').classList.toggle('open');
  selectElement('#mobileMenuButton').setAttribute('aria-expanded', isMenuOpen);
};

const sectionElements = [...document.querySelectorAll('section')];

addEventListener('scroll', () => {
  let activeSectionId = '';

  sectionElements.forEach((section) => {
    if (section.getBoundingClientRect().top < 150) {
      activeSectionId = section.id;
    }
  });

  document.querySelectorAll('#navigationLinks a').forEach((navLink) => {
    navLink.classList.toggle('on', navLink.getAttribute('href') === '#' + activeSectionId);
  });
}, { passive: true });

/* ==========================================
   MODAL PRATINJAU FOTO & SERTIFIKAT (MULTI-GAMBAR PER KELOMPOK + ZOOM SERTIFIKAT)
========================================== */
let modalItemsList = [];
let currentModalIndex = 0;
let isModalZoomEnabled = false;

// State Zoom & Pan khusus Sertifikat
const MIN_ZOOM = 1;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.5;
let currentZoomScale = 1;
let panTranslateX = 0;
let panTranslateY = 0;
let isPanningImage = false;
let hasDraggedDuringPointer = false;
let panStartPointerX = 0;
let panStartPointerY = 0;
let panOriginX = 0;
let panOriginY = 0;

const modalViewport = selectElement('#modalImageViewport');
const modalPreviewImg = selectElement('#modalPreviewImage');
const modalZoomControls = selectElement('#modalZoomControls');
const zoomLevelDisplay = selectElement('#zoomLevelDisplay');
const zoomInBtn = selectElement('#zoomInButton');
const zoomOutBtn = selectElement('#zoomOutButton');
const zoomResetBtn = selectElement('#zoomResetButton');

function clampPanOffsets(nextX, nextY, scale) {
  if (scale <= 1) return { x: 0, y: 0 };
  const viewportRect = modalViewport.getBoundingClientRect();
  const baseWidth = modalPreviewImg.offsetWidth || viewportRect.width;
  const baseHeight = modalPreviewImg.offsetHeight || viewportRect.height;

  const maxOffsetX = Math.max(0, (baseWidth * scale - viewportRect.width) / 2);
  const maxOffsetY = Math.max(0, (baseHeight * scale - viewportRect.height) / 2);

  return {
    x: Math.min(maxOffsetX, Math.max(-maxOffsetX, nextX)),
    y: Math.min(maxOffsetY, Math.max(-maxOffsetY, nextY))
  };
}

function applyZoomTransform() {
  const clamped = clampPanOffsets(panTranslateX, panTranslateY, currentZoomScale);
  panTranslateX = clamped.x;
  panTranslateY = clamped.y;

  modalPreviewImg.style.transform = `translate3d(${panTranslateX}px, ${panTranslateY}px, 0) scale(${currentZoomScale})`;
  modalViewport.classList.toggle('is-zoomed', isModalZoomEnabled && currentZoomScale > 1);

  if (zoomLevelDisplay) {
    zoomLevelDisplay.textContent = `${Math.round(currentZoomScale * 100)}%`;
  }
  if (zoomOutBtn) zoomOutBtn.disabled = currentZoomScale <= MIN_ZOOM;
  if (zoomInBtn) zoomInBtn.disabled = currentZoomScale >= MAX_ZOOM;
  if (zoomResetBtn) zoomResetBtn.disabled = currentZoomScale === 1 && panTranslateX === 0 && panTranslateY === 0;
}

function resetModalZoom() {
  currentZoomScale = 1;
  panTranslateX = 0;
  panTranslateY = 0;
  isPanningImage = false;
  modalViewport.classList.remove('is-dragging', 'is-zoomed');
  applyZoomTransform();
}

function setModalZoom(targetScale, focalClientX = null, focalClientY = null) {
  if (!isModalZoomEnabled) return;
  const clampedScale = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, Number(targetScale.toFixed(2))));
  if (clampedScale === currentZoomScale) return;

  if (clampedScale === 1) {
    resetModalZoom();
    return;
  }

  // Jika ada titik fokus (klik / kursor mouse), arahkan zoom ke titik tersebut
  if (focalClientX !== null && focalClientY !== null) {
    const rect = modalViewport.getBoundingClientRect();
    const offsetX = focalClientX - (rect.left + rect.width / 2);
    const offsetY = focalClientY - (rect.top + rect.height / 2);
    const scaleRatio = clampedScale / currentZoomScale;

    panTranslateX = offsetX - (offsetX - panTranslateX) * scaleRatio;
    panTranslateY = offsetY - (offsetY - panTranslateY) * scaleRatio;
  }

  currentZoomScale = clampedScale;
  applyZoomTransform();
}

// Bangun daftar slide dari satu kelompok Dokumentasi / Galeri
const buildGaleriModalSlides = (groupIndex) => {
  const galeriItem = GALERI_DATA[groupIndex];
  const images = getItemImages(galeriItem);
  return images.map((src, imgIdx) => ({
    title: images.length > 1 ? `${galeriItem.title} (Foto ${imgIdx + 1})` : galeriItem.title,
    imageSrc: src,
    fallbackSrc: createImagePlaceholder(groupIndex + imgIdx, `${galeriItem.title} #${imgIdx + 1}`)
  }));
};

// Bangun daftar slide dari satu kelompok Sertifikat
const buildCertificateModalSlides = (groupIndex) => {
  const certItem = CERTIFICATE_DATA[groupIndex];
  const images = getItemImages(certItem);
  return images.map((src, imgIdx) => ({
    title: images.length > 1 ? `${certItem.title}` : certItem.title,
    organization: `${certItem.organization} · ${certItem.year}`,
    imageSrc: src,
    fallbackSrc: createCertificatePlaceholder(groupIndex + imgIdx, `${certItem.title} #${imgIdx + 1}`, certItem.organization, certItem.year)
  }));
};

function renderModalThumbnails() {
  const thumbsContainer = selectElement('#modalThumbnails');
  if (modalItemsList.length <= 1) {
    thumbsContainer.style.display = 'none';
    thumbsContainer.innerHTML = '';
    return;
  }

  thumbsContainer.style.display = 'flex';
  thumbsContainer.innerHTML = modalItemsList.map((item, idx) => `
    <button type="button" class="modal-thumb${idx === currentModalIndex ? ' active' : ''}" data-thumb-index="${idx}" aria-label="Lihat gambar ${idx + 1}">
      <img src="${item.imageSrc}" alt="${item.title}" onerror="this.src='${item.fallbackSrc || ''}'">
    </button>
  `).join('');
}

function updateModalContent() {
  resetModalZoom();

  const currentItem = modalItemsList[currentModalIndex];
  modalPreviewImg.onerror = function () {
    if (currentItem.fallbackSrc && this.src !== currentItem.fallbackSrc) {
      this.src = currentItem.fallbackSrc;
    }
  };
  modalPreviewImg.src = currentItem.imageSrc;
  modalPreviewImg.alt = currentItem.title;

  modalViewport.classList.toggle('zoomable', isModalZoomEnabled);
  modalZoomControls.classList.toggle('active', isModalZoomEnabled);

  const counterEl = selectElement('#modalSlideCounter');
  if (modalItemsList.length > 1) {
    counterEl.style.display = 'inline-flex';
    counterEl.innerHTML = `<i class="ri-stack-line"></i> ${currentModalIndex + 1} / ${modalItemsList.length}`;
  } else {
    counterEl.style.display = 'none';
  }

  selectElement('#modalPreviewCaption').textContent =
    currentItem.title + (currentItem.organization ? ' – ' + currentItem.organization : '');
  selectElement('#modalPrevButton').style.display =
    selectElement('#modalNextButton').style.display =
      modalItemsList.length > 1 ? '' : 'none';

  renderModalThumbnails();
}

function openPreviewModal(itemsList, startIndex = 0, options = {}) {
  modalItemsList = itemsList;
  currentModalIndex = startIndex;
  isModalZoomEnabled = Boolean(options.enableZoom);
  updateModalContent();
  selectElement('#previewModal').classList.add('open');
  selectElement('#modalCloseButton').focus();
}

function closePreviewModal() {
  resetModalZoom();
  selectElement('#previewModal').classList.remove('open');
}

const navigateModalSlide = (direction) => {
  currentModalIndex = (currentModalIndex + direction + modalItemsList.length) % modalItemsList.length;
  updateModalContent();
};

selectElement('#heroPhotoButton').onclick = () => {
  openPreviewModal([{ title: 'Foto profil', imageSrc: selectElement('#heroProfileImage').src }], 0, { enableZoom: false });
};

selectElement('#galeriContainer').onclick = (event) => {
  const galeriButton = event.target.closest('[data-galeri-index]');
  if (galeriButton) {
    const groupIndex = Number(galeriButton.dataset.galeriIndex);
    openPreviewModal(buildGaleriModalSlides(groupIndex), 0, { enableZoom: false });
  }
};

selectElement('#certificateContainer').onclick = (event) => {
  const certificateTrigger = event.target.closest('[data-certificate-index]');
  if (certificateTrigger) {
    const groupIndex = Number(certificateTrigger.dataset.certificateIndex);
    openPreviewModal(buildCertificateModalSlides(groupIndex), 0, { enableZoom: true });
  }
};

// Interaksi Tombol Zoom Sertifikat
zoomInBtn.onclick = () => setModalZoom(currentZoomScale + ZOOM_STEP);
zoomOutBtn.onclick = () => setModalZoom(currentZoomScale - ZOOM_STEP);
zoomResetBtn.onclick = () => resetModalZoom();

// Interaksi Scroll Roda Mouse untuk Zoom Sertifikat
modalViewport.addEventListener('wheel', (event) => {
  if (!isModalZoomEnabled) return;
  event.preventDefault();
  const delta = event.deltaY < 0 ? 0.25 : -0.25;
  setModalZoom(currentZoomScale + delta, event.clientX, event.clientY);
}, { passive: false });

// Interaksi Drag / Geser (Pan) & Klik untuk Toggle Zoom Sertifikat
modalViewport.addEventListener('pointerdown', (event) => {
  if (!isModalZoomEnabled || event.button !== 0) return;
  hasDraggedDuringPointer = false;

  if (currentZoomScale <= 1) return;

  isPanningImage = true;
  panStartPointerX = event.clientX;
  panStartPointerY = event.clientY;
  panOriginX = panTranslateX;
  panOriginY = panTranslateY;
  modalViewport.classList.add('is-dragging');
  modalViewport.setPointerCapture(event.pointerId);
});

modalViewport.addEventListener('pointermove', (event) => {
  if (!isPanningImage) return;
  const deltaX = event.clientX - panStartPointerX;
  const deltaY = event.clientY - panStartPointerY;

  if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
    hasDraggedDuringPointer = true;
  }

  panTranslateX = panOriginX + deltaX;
  panTranslateY = panOriginY + deltaY;
  applyZoomTransform();
});

const stopImagePanning = (event) => {
  if (!isPanningImage) return;
  isPanningImage = false;
  modalViewport.classList.remove('is-dragging');
  if (event && event.pointerId !== undefined && modalViewport.hasPointerCapture(event.pointerId)) {
    modalViewport.releasePointerCapture(event.pointerId);
  }
};

modalViewport.addEventListener('pointerup', stopImagePanning);
modalViewport.addEventListener('pointercancel', stopImagePanning);

modalViewport.addEventListener('click', (event) => {
  if (!isModalZoomEnabled || hasDraggedDuringPointer) {
    hasDraggedDuringPointer = false;
    return;
  }
  if (currentZoomScale > 1) {
    resetModalZoom();
  } else {
    setModalZoom(2, event.clientX, event.clientY);
  }
});

selectElement('#modalThumbnails').onclick = (event) => {
  const thumbButton = event.target.closest('[data-thumb-index]');
  if (thumbButton) {
    currentModalIndex = Number(thumbButton.dataset.thumbIndex);
    updateModalContent();
  }
};

selectElement('#modalCloseButton').onclick = closePreviewModal;
selectElement('#modalPrevButton').onclick = () => navigateModalSlide(-1);
selectElement('#modalNextButton').onclick = () => navigateModalSlide(1);

selectElement('#previewModal').onclick = (event) => {
  if (event.target.id === 'previewModal') {
    closePreviewModal();
  }
};

addEventListener('keydown', (event) => {
  if (!selectElement('#previewModal').classList.contains('open')) return;
  if (event.key === 'Escape') closePreviewModal();
  if (event.key === 'ArrowLeft' && modalItemsList.length > 1) navigateModalSlide(-1);
  if (event.key === 'ArrowRight' && modalItemsList.length > 1) navigateModalSlide(1);
  if (isModalZoomEnabled) {
    if (event.key === '+' || event.key === '=') setModalZoom(currentZoomScale + ZOOM_STEP);
    if (event.key === '-' || event.key === '_') setModalZoom(currentZoomScale - ZOOM_STEP);
    if (event.key === '0') resetModalZoom();
  }
});

/* ==========================================
   FORMULIR KONTAK
========================================== */
selectElement('#contactForm').onsubmit = (event) => {
  event.preventDefault();
  selectElement('#contactFormStatus').textContent = 'Pesan terkirim (prototipe, belum tersambung ke server).';
  event.target.reset();
};
