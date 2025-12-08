# I Wanna Bring Joy - Design System

Panduan style dan design system untuk platform layanan psikologi dan kesehatan mental "I Wanna Bring Joy". Design system ini menggunakan palet warna earth tone yang menenangkan dan font Roboto untuk menciptakan pengalaman yang aman, nyaman, dan terpercaya bagi pengguna yang mencari dukungan kesehatan mental.

> **Fokus Utama**: Platform ini dirancang untuk profesional psikologi, konselor, dan individu yang mencari layanan kesehatan mental dengan pendekatan yang warm, trustworthy, dan profesional.

## Daftar Isi
- [Warna](#warna)
- [Typography](#typography)
- [Utility Classes](#utility-classes)
- [Komponen](#komponen)
- [Prinsip Desain untuk Platform Kesehatan Mental](#prinsip-desain-untuk-platform-kesehatan-mental)
- [Komponen Khusus Platform Psikologi](#komponen-khusus-platform-psikologi)

---

## Warna

### Palet Warna Utama

```css
/* Warna Dasar */
--background: #faf7f5    /* Coklat terang/pastel */
--foreground: #452912    /* Coklat gelap (teks) */
--card: #faf7f5         /* Sama dengan background */
--primary: #452912      /* Coklat gelap */
--secondary: #f5f1ed    /* Coklat muda */
--muted: #f5f1ed        /* Coklat muda */
--muted-foreground: #78461c  /* Coklat sedang */
--accent: #f5f1ed       /* Coklat muda */
--border: #e8e1d9       /* Coklat sangat muda */
--ring: #78461c         /* Coklat sedang */
```

### Penggunaan Warna

- **Background**: Seluruh halaman menggunakan `#faf7f5`
- **Teks Utama**: Semua teks judul menggunakan `--foreground` (#452912)
- **Teks Kedua**: Deskripsi dan text sekunder menggunakan `--muted-foreground` (#78461c)
- **Button Primary**: Menggunakan `bg-primary text-primary-foreground`
- **Card**: Background card mengikuti `--card` (#faf7f5)
- **Borders**: Menggunakan `--border` (#e8e1d9)

### Contoh Implementasi

```tsx
<div className="bg-background text-foreground">
  <h1 className="text-foreground">Judul Utama</h1>
  <p className="text-muted-foreground">Deskripsi</p>
  <button className="bg-primary text-primary-foreground">Klik</button>
</div>
```

---

## Typography

### Font Family

- **Heading Font**: Roboto (400, 700 weight)
- **Body Font**: Geist Sans (default)
- **Code/Monospace**: Geist Mono

Font Roboto diimpor dan diaktifkan di `layout.tsx`:

```typescript
const fontHeading = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"]
});

// Di body class tambahkan:
fontHeading.variable
```

### Utility Classes untuk Heading

Tiga ukuran heading sudah tersedia:

#### `.head-text-lg` - Heading Besar
```css
@apply text-3xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight leading-[1.5];
```

**Gunakan untuk**: Judul hero, H1 utama

#### `.head-text-md` - Heading Medium
```css
@apply text-2xl md:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.5];
```

**Gunakan untuk**: H2 di section-section

#### `.head-text-sm` - Heading Kecil
```css
@apply text-lg md:text-xl lg:text-2xl font-bold font-heading tracking-tight leading-[1.5];
```

**Gunakan untuk**: H3, judul card

### Contoh Penggunaan

```tsx
<h1 className="head-text-lg text-balance text-foreground">
  Transformasikan Praktik Psikologi Anda
</h1>

<h2 className="head-text-md text-balance text-foreground">
  Solusi yang Fleksibel
</h2>

<h3 className="head-text-sm text-foreground">
  Fitur Unggulan
</h3>
```

---

## Utility Classes

### Background Override

Seluruh halaman dipaksa menggunakan background `#faf7f5`:

```css
body {
  background-color: #faf7f5 !important;
}
```

### Shadows

Gunakan shadows dengan warna primary:

- **Card shadow**: `shadow-lg shadow-primary/5 hover:shadow-primary/10`
- **Hero shadow**: `shadow-2xl shadow-primary/20`
- **Section shadow**: `shadow-xl`

### Borders

Selalu gunakan border dengan color token:

```tsx
<div className="border-border">Card dengan border</div>
<div className="ring-border">Element dengan ring</div>
```

---

## Komponen

### Card

```tsx
<Card className="border-border shadow-lg shadow-primary/5 hover:shadow-primary/10">
  <CardHeader>
    <div className="text-muted-foreground">
      {/* Icon di sini */}
    </div>
    <CardTitle className="font-heading text-xl text-foreground">Judul</CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-muted-foreground">Deskripsi</p>
  </CardContent>
</Card>
```

### Button

```tsx
{/* Button Primary */}
<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
  Primary
</Button>

{/* Button Secondary */}
<Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
  Secondary
</Button>
```

### Icon

```tsx
{/* Icon dengan warna muted */
<Icon className="h-6 w-6 text-muted-foreground" />

/* Icon di dalam badge */
<div className="flex items-center justify-center rounded-full bg-secondary text-primary">
  <Icon className="h-4 w-4" />
</div>
```

---

## Prinsip Desain untuk Platform Kesehatan Mental

### 1. **Trust & Credibility (Kepercayaan & Kredibilitas)**
Platform layanan psikologi harus menimbulkan rasa aman dan percaya:
- Gunakan warna earth tone yang menenangkan (coklat, krem)
- Hindari warna mencolok yang bisa trigger anxiety
- Font Roboto memberikan kesan profesional namun approachable
- Pastikan semua elemen terasa "human" dan warm, bukan kaku

### 2. **Emotional Safety (Keamanan Emosional)**
Pengguna sering dalam kondisi vulnerabel:
- Background soft dan tidak terlalu terang/kontras
- Shadow dan border yang halus, tidak aggressive
- CTA buttons yang inviting tapi tidak pushy
- Ruang (spacing) yang cukup untuk "bernafas"

### 3. **Accessibility & Clarity (Aksesibilitas & Kejelasan)**
Informasi harus mudah diakses semua orang:
- Kontras warna cukup (foreground #452912 vs background #faf7f5)
- Font Roboto yang highly readable
- Text size minimum 16px untuk mobile
- Clear visual hierarchy

### 4. **Professional Warmth (Kehangatan Professional)**
Keseimbangan antara klinis dan personal:
- Foto psikolog yang tersedia di hero section
- Warna yang menenangkan tapi tidak dingin
- Icon yang familiar dan tidak terlalu "medis"
- Copy yang empatik dan supportive

### 5. **Konsistensi Warna**
- Tidak ada warna "hardcoded" (kecuali dalam CSS variables)
- Selalu gunakan Tailwind color tokens
- Hindari warna biru, indigo, purple (kecuali untuk ikon khusus)
- Pastikan semua elemen menggunakan earth tone palette

### 6. **Typography Hierarchy**
- Heading: Font Roboto, menggunakan `head-text-*` classes
- Body text: Menggunakan `text-muted-foreground` atau `text-foreground`
- Ukuran font responsif: `text-sm` → `text-base` → `text-lg`
- Never use harsh/bold fonts yang terlalu kasar

### 7. **Spacing dan Layout**
- Section padding: `py-24 sm:py-32` untuk section besar
- Container: `mx-auto max-w-7xl px-6 lg:px-8`
- Gap: `gap-8` untuk card layout
- Extra padding untuk "breathing room" di section psikologi

### 8. **Gambar dan Media untuk Konteks Psikologi**
- Hero images: Gunakan foto psikolog asli (bukan stock photo)
- Card images: Rounded-2xl dengan shadow yang soft
- Icons: Gunakan `text-muted-foreground` untuk tone yang lebih halus
- Foto profil psikolog harus professional tapi approachable

### 9. **Hover States yang Gentle**
- Card: `hover:shadow-primary/10` (tidak terlalu mencolok)
- Button: Menggunakan `/90` opacity untuk hover (smooth transition)
- Link: `hover:text-primary` (indikasi halus)
- Avoid hover effects yang terlalu "energetic" atau "loud"

### 10. **Mobile First untuk Aksesibilitas**
- Semua ukuran responsif menggunakan `sm:*`, `md:*`, `lg:*`
- Test di berbagai breakpoints (banyak pengguna mobile)
- Touch-friendly: min 44x44px untuk clickable elements
- Pastikan form fields dan buttons mudah diakses

### 11. **Specific untuk Layanan Psikologi**
- **Assessment Cards**: Gunakan warna muted untuk kategori tes
- **Testimonial Section**: Highlight real stories dengan nama lengkap psikolog
- **Pricing**: Jelas dan transparan (tidak ada hidden cost)
- **CTA**: Mengajak namun tidak pushy ("Mulai Konsultasi" vs "Beli Sekarang")
- **Trust Badges**: HIPAA-compliant, encrypted, professional certification

---

## Contoh Lengkap Section

```tsx
<section id="features" className="py-24 sm:py-32 bg-gradient-to-b from-secondary/30 to-background">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-base font-semibold leading-7 text-muted-foreground">
        Subtitle Section
      </h2>
      <h3 className="head-text-md text-balance text-foreground mt-2">
        Judul Utama Section
      </h3>
      <p className="mt-6 text-lg leading-8 text-muted-foreground">
        Deskripsi section dengan warna muted
      </p>
    </div>

    {/* Content Grid */
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {[1, 2, 3].map((item) => (
        <Card key={item} className="border-border shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-shadow">
          <CardHeader>
            <div className="text-muted-foreground">
              <Icon className="h-8 w-8" />
            </div>
            <CardTitle className="font-heading text-xl text-foreground mt-6">
              Judul Card
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-3 px-0">
            <p className="text-base leading-7 text-muted-foreground">
              Isi card dengan deskripsi
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
```

---

## Assets

### Logo
- File: `/public/IWJ.png`
- Format: PNG
- Ukuran: 17072 bytes

### Foto Psikolog
- File: `/public/agni.JPG`
- Format: JPEG
- Ukuran: 724210 bytes
- Digunakan sebagai hero image

### Favicon
Favicon menggunakan logo IWJ (bukan favicon.ico default)

---

## Mencegah Regresions

### JANGAN Gunakan Warna Ini:
```tsx
❌ text-indigo-600
❌ bg-indigo-100
❌ shadow-indigo-950/30
❌ text-blue-600
❌ text-green-600
❌ text-warna-apapun-bright
```

### GANTI dengan:
```tsx
✅ text-muted-foreground (untuk icon/tex kedua)
✅ text-primary (untuk teks utama)
✅ bg-secondary (untuk background card)
✅ shadow-primary/5 (untuk shadow card)
```

### JANGAN Gunakan Font Weight Custom:
```tsx
❌ font-semibold (untuk heading besar)
```

### GANTI dengan:
```tsx
✅ font-bold font-heading
✅ head-text-lg / head-text-md / head-text-sm
```

---

## Troubleshooting

### Warna Tidak Berubah?
- Pastikan server dev sedang berjalan
- Clear cache browser
- Restart Next.js dev server

### Font Tidak Teraplikasikan?
- Periksa `layout.tsx` untuk import Roboto
- Cek apakah `fontHeading.variable` ada di body class
- Pastikan `font-heading` class digunakan di heading

### Background Tidak Sama?
- CSS override di `globals.css` seharusnya paksa background
- Cek apakah class `bg-background` digunakan di parent element

---

## Perubahan Lanjutan

Setiap komponen baru harus:
1. Mengikuti palet warna earth tone yang menenangkan
2. Menggunakan utility classes untuk heading (Roboto)
3. Konsisten dengan spacing yang memberikan "breathing room"
4. Mobile responsive (banyak pengguna mengakses dari mobile)
5. Menggunakan color tokens, bukan hardcoded values
6. Mengutamakan accessibility dan readability
7. Menimbulkan rasa aman dan trustworthy
8. Mempertimbangkan emotional state pengguna (sering dalam kondisi vulnerabel)

## Komponen Khusus Platform Psikologi

### Testimonial Card (Ulasan Pasien)
```tsx
<div className="relative bg-card p-10 shadow-xl shadow-primary/10 ring-1 ring-border rounded-2xl">
  <Quote className="absolute top-6 left-6 h-8 w-8 text-muted-foreground" />
  <div className="text-lg font-medium text-foreground leading-relaxed mb-6">
    "Ulasan pasien..."
  </div>
  <div className="border-t pt-4 border-border">
    <div className="font-semibold text-foreground">Nama Pasien</div>
    <div className="text-sm text-muted-foreground">Status (opsional)</div>
  </div>
</div>
```

### Assessment Card (Tes Psikologi)
```tsx
<Card className="border-border">
  <CardHeader className="flex flex-row items-center gap-4">
    <div className="text-positive">{/* Icon khusus tes */}</div>
    <div>
      <CardTitle className="font-heading text-lg text-foreground">
        Nama Tes
      </CardTitle>
      <CardDescription>Deskripsi singkat tes</CardDescription>
    </div>
  </CardHeader>
  <CardContent>
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <div className="bg-secondary px-2 py-1 rounded text-xs font-medium">
        Kategori
      </div>
      <span>{jumlah} pertanyaan</span>
    </div>
    <div className="pt-2 border-t flex items-center gap-2 text-sm text-primary">
      <CheckCircle className="h-4 w-4" />
      <span>Scoring otomatis</span>
    </div>
  </CardContent>
</Card>
```

### Psychologist Profile Card
```tsx
<Card className="border-border">
  <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
    <Image
      src="/agni.JPG"
      alt="Nama Psikolog"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
  </div>
  <CardHeader>
    <CardTitle className="font-heading text-xl text-foreground">
      Nama Lengkap, Gelar
    </CardTitle>
    <p className="text-muted-foreground">Spesialisasi</p>
  </CardHeader>
  <CardContent>
    <ul className="space-y-2 text-sm text-muted-foreground">
      <li>• Spesialisasi 1</li>
      <li>• Spesialisasi 2</li>
    </ul>
  </CardContent>
</Card>
```

### Trust Badge (Kepercayaan)
```tsx
<div className="flex items-center justify-center space-x-2">
  <Shield className="h-5 w-5 text-muted-foreground" />
  <span className="text-sm font-medium text-foreground">
    HIPAA-Compliant
  </span>
</div>
```

---

*Design system ini diupdate terakhir: 8 Desember 2025*
