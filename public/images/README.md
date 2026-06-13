# 📸 Folder Images

Tempatkan semua gambar Anda di folder ini.

## 📁 Struktur Folder yang Disarankan

```
images/
├── profile.jpg                 # Foto profil untuk About & Socials
├── experiences/
│   ├── company-1.jpg          # Logo/foto perusahaan
│   ├── company-2.jpg
│   └── skills/
│       ├── skill-1.jpg        # Foto untuk setiap skill
│       ├── skill-2.jpg
│       └── ...
├── projects/
│   ├── project-1/
│   │   ├── screenshot-1.jpg   # Multiple screenshots per project
│   │   ├── screenshot-2.jpg
│   │   └── screenshot-3.jpg
│   ├── project-2/
│   │   └── screenshot-1.jpg
│   └── ...
└── organizations/
    ├── org-1.jpg
    ├── event-1.jpg
    └── ...
```

## 🎨 Ukuran Gambar yang Disarankan

- **Profile Photo**: 400x400px (square)
- **Experience Cards**: 600x400px (landscape)
- **Project Screenshots**: 1200x800px (landscape) atau 800x1200px (portrait)
- **Skill Images**: 400x200px (landscape)
- **Organization/Event**: 600x400px (landscape)

## ✅ Format File

- **JPG/JPEG**: Untuk foto
- **PNG**: Untuk logo atau gambar dengan transparency
- **WebP**: Untuk size yang lebih kecil (optional)

## 🔧 Tools untuk Optimize Images

1. **Online Tools:**
   - [TinyPNG](https://tinypng.com) - Compress PNG & JPG
   - [Squoosh](https://squoosh.app) - Google's image optimizer
   - [Compressor.io](https://compressor.io) - Compress images

2. **Desktop Apps:**
   - [ImageOptim](https://imageoptim.com) (Mac)
   - [RIOT](https://riot-optimizer.com) (Windows)

## 📌 Naming Convention

Gunakan nama file yang deskriptif:

✅ **GOOD:**
- `profile-raihan.jpg`
- `company-google.jpg`
- `project-ecommerce-home.jpg`
- `skill-react-development.jpg`

❌ **BAD:**
- `IMG_001.jpg`
- `photo.jpg`
- `Screenshot 2024-01-01.png`
- `image1.jpg`

## 🚀 Cara Update Path di Code

Setelah menaruh gambar di folder ini, update path di `src/data.js`:

```javascript
// Contoh:
image: "/images/profile.jpg"
image: "/images/experiences/company-google.jpg"
image: "/images/projects/project-1/screenshot-1.jpg"
```

**Note:** Path harus dimulai dengan `/` dan tidak include folder `public/`

---

**Placeholder images saat ini menggunakan placeholder.com. Ganti dengan gambar asli Anda untuk hasil terbaik!**
