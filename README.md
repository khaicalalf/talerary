# 📚 Talerary - Grimm's Fairy Tales Interactive Reader

Talerary adalah aplikasi web interaktif untuk membaca koleksi dongeng Grimm's Fairy Tales dengan pengalaman visual yang memukau. Dibangun dengan React, TypeScript, dan berbagai komponen animasi dari reactbits.

## ✨ Fitur Utama

### 🎨 Komponen Animasi Reactbits

- **TextType**: Efek typing animation dengan multiple text rotation, variable speed, dan cursor customization
- **ScrollReveal**: Animasi reveal text saat scroll dengan blur effect dan rotation
- **LightRays**: Efek cahaya WebGL yang mengikuti mouse dengan customizable rays
- **SplashScreen**: Loading screen dengan animasi yang smooth
- **AnimatedList**: List dengan animasi dan gradient effects
- **ScrollStack**: Stacking animation untuk elemen yang di-scroll
- **StaggeredMenu**: Menu dengan staggered animation
- **VariableProximity**: Proximity-based animations

### 📖 Fitur Pembaca Dongeng

- Parsing otomatis dari file Excel (`.xls`) menggunakan `xlsx`
- Sticky title untuk setiap dongeng saat scroll
- Scroll reveal animation untuk text dongeng
- Background items dengan positioning dinamis
- Smooth scroll navigation
- Responsive design untuk mobile dan desktop

### 🎭 Efek Visual

- WebGL light rays dengan mouse tracking
- GSAP-powered scroll animations
- Smooth scroll dengan Lenis
- Glassmorphism effects
- Custom cursor animations
- Blur dan rotation effects

## 🛠️ Tech Stack

### Core

- **React 19.2.0**
- **TypeScript 5.9.3**
- **Vite 7.2.4**

### Styling

- **TailwindCSS 4.1.18** - Utility-first CSS Framework
- **ReactBits** - Extended animations untuk Tailwind

### Animation & Effects from ReactBits

- **GSAP 3.14.2** - Professional-grade animation library
- **Lenis 1.3.17** - Smooth scroll library
- **Motion 12.23.26** - Animation library
- **OGL 1.0.11** - WebGL library untuk light rays effect

### Utilities

- **xlsx 0.18.5** - Excel file parsing
- **mathjs 14.9.1** - Mathematical operations
- **lucide-react** - Icon library
- **clsx & tailwind-merge** - Conditional className utilities

## 📁 Struktur Project

```
talerary/
├── public/
│   └── tales/
│       └── grimms_fairytales.xls    # Dataset dongeng
├── src/
│   ├── api/
│   │   └── talesApi.ts              # API untuk fetch & parse tales
│   ├── components/
│   │   ├── AnimatedList.tsx         # Animated list component
│   │   ├── GradualBlur.tsx          # Blur animation
│   │   ├── LightRays.tsx            # WebGL light rays
│   │   ├── ScrollReveal.tsx         # Scroll-based reveal
│   │   ├── ScrollStack.tsx          # Stacking scroll effect
│   │   ├── StaggeredMenu.tsx        # Menu dengan stagger
│   │   ├── TextType.tsx             # Typing animation
│   │   ├── VariableProximity.tsx    # Proximity effects
│   │   └── ui/                      # UI components (button, etc)
│   ├── pages/
│   │   ├── heroSection.tsx          # Landing hero section
│   │   ├── TalesExample.tsx         # Main tales display
│   │   └── items/
│   │       ├── bgItems.tsx          # Background decorations
│   │       ├── infoItems.tsx        # Info components
│   │       ├── scrollToTop.tsx      # Scroll to top button
│   │       ├── sidebar.tsx          # Navigation sidebar
│   │       └── SplashScreen.tsx     # Loading screen
│   ├── App.tsx                      # Main app component
│   ├── index.css                    # Global styles
│   └── main.tsx                     # Entry point
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 atau lebih baru)
- npm atau yarn

### Installation

1. Clone repository

```bash
git clone <repository-url>
cd talerary
```

2. Install dependencies

```bash
npm install
```

3. Jalankan development server

```bash
npm run dev
```

4. Buka browser di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

File production akan ada di folder `dist/`.

### Preview Production Build

```bash
npm run preview
```

## 📖 Cara Menggunakan API Tales

### Fetch Semua Tales

```typescript
import { fetchTalesFromExcel } from "./api/talesApi";

const tales = await fetchTalesFromExcel();
// Returns: Tale[] dengan struktur { id, Title, Text }
```

### Get Tale by ID

```typescript
import { getTaleById } from "./api/talesApi";

const tale = await getTaleById(5);
// Returns: Tale | undefined
```

### Search Tales by Title

```typescript
import { searchTalesByTitle } from "./api/talesApi";

const results = await searchTalesByTitle("snow");
// Returns: Tale[] yang titlenya mengandung 'snow'
```

## 🎨 Komponen Custom

### TextType Component

Komponen untuk membuat efek typing animation dengan berbagai konfigurasi.

```typescript
<TextType
  text={["Text 1", "Text 2", "Text 3"]}
  typingSpeed={75}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
  cursorClassName="text-red-500"
  loop={true}
/>
```

**Props:**

- `text`: string atau array of strings
- `typingSpeed`: kecepatan typing (ms)
- `pauseDuration`: durasi pause antar text (ms)
- `deletingSpeed`: kecepatan delete (ms)
- `showCursor`: tampilkan cursor
- `cursorCharacter`: karakter cursor
- `loop`: loop animation
- `textColors`: array warna untuk setiap text
- `variableSpeed`: random speed range
- `reverseMode`: reverse text direction
- `startOnVisible`: mulai saat terlihat di viewport

### ScrollReveal Component

Komponen untuk reveal text dengan animasi saat scroll.

```typescript
<ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={0}
  blurStrength={20}
>
  Your long text content here...
</ScrollReveal>
```

**Props:**

- `enableBlur`: aktifkan blur effect
- `baseOpacity`: opacity awal (0-1)
- `baseRotation`: rotasi awal (degrees)
- `blurStrength`: kekuatan blur (px)
- `containerClassName`: custom class untuk container
- `textClassName`: custom class untuk text

### LightRays Component

Komponen WebGL untuk efek light rays yang interaktif.

```typescript
<LightRays
  raysOrigin="top-center"
  raysColor="#ff6b6bff"
  raysSpeed={1.5}
  lightSpread={0.8}
  rayLength={1.2}
  followMouse={true}
  mouseInfluence={0.1}
  noiseAmount={0.1}
  distortion={0.05}
/>
```

**Props:**

- `raysOrigin`: posisi asal rays (top-center, top-left, dll)
- `raysColor`: warna rays (hex)
- `raysSpeed`: kecepatan animasi
- `lightSpread`: spread cahaya (0-1)
- `rayLength`: panjang rays
- `followMouse`: ikuti mouse movement
- `mouseInfluence`: pengaruh mouse (0-1)
- `pulsating`: efek pulsating
- `noiseAmount`: jumlah noise
- `distortion`: distorsi rays

## 🎯 Fitur Khusus

### Excel File Parsing

Project ini menggunakan `xlsx` library untuk parsing file Excel yang berisi dongeng. File di-parse dengan encoding UTF-8 untuk support special characters.

### Sticky Titles

Setiap judul dongeng menggunakan `position: sticky` dengan backdrop blur untuk efek modern saat scroll.

### Lazy Loading

Komponen besar seperti `LightRays`, `Sidebar`, dan `ScrollToTop` di-lazy load untuk performa yang lebih baik.

### Intersection Observer

`LightRays` component menggunakan Intersection Observer untuk hanya render saat visible, menghemat resource.

## 🎨 Customization

### Mengubah Warna Tema

Edit file `src/index.css` dan ubah variabel warna:

```css
/* Contoh: ubah accent color */
.text-[#ff6b6bff] {
  color: #your-color;
}
```

### Menambah Tales Baru

1. Siapkan file Excel dengan kolom: `id`, `Title`, `Text`
2. Letakkan di folder `public/tales/`
3. Update import di `TalesExample.tsx`:

```typescript
const data = await fetchTalesFromExcel("your-file.xls");
```

## 📊 Dataset

Project ini menggunakan dataset **Grimm's Fairy Tales** dari [Kaggle](https://www.kaggle.com/datasets/tschomacker/grimms-fairy-tales), courtesy of Project Gutenberg.

## 🐛 Known Issues

- Special characters encoding: Sudah di-handle dengan `codepage: 65001` (UTF-8)
- WebGL compatibility: Fallback ke `<div>` jika WebGL tidak support

## 📝 Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Jalankan ESLint

## 🤝 Contributing

Contributions are welcome! Silakan buat issue atau pull request.

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- **Dataset**: [Grimm's Fairy Tales from Kaggle](https://www.kaggle.com/datasets/tschomacker/grimms-fairy-tales)
- **Project Gutenberg**: Untuk dataset dongeng
- **ReactBits**: Animation library

---

**Made with ❤️ using React + TypeScript + Vite**
