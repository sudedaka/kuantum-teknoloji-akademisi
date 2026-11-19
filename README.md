# Kuantum Teknoloji Akademisi

Kuantum Teknoloji Akademisi'nin tek sayfalık tanıtım sitesi. React + Vite + Tailwind CSS ile geliştirilmiştir; koyu tema üzerine kurulu, animasyonlu bölümlerden oluşur.

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme sunucusu (varsayılan: http://localhost:5173)
npm run build    # üretim derlemesi (dist/)
npm run preview  # derlenmiş sürümü önizle
npm run lint     # oxlint ile kod kontrolü
```

## Proje yapısı

```
public/
  images/
    programlarimiz-gorseller/   # program kartı görselleri
    projeler-gorseller/         # projeler bölümü fotoğrafları
    kuantum.mp4                 # tanıtım videosu (tıklayınca oynar)
    kuantum-poster.jpg          # videonun kapak karesi
    ...                         # logo, hero arka planı, bölüm görselleri
src/
  components/                   # sayfa bölümleri (Hero, Programs, Steam, ...)
    ui/                         # ortak küçük bileşenler (Brand, Reveal, ...)
  data/site.js                  # tüm metinler, programlar, SSS, iletişim bilgileri
  index.css                     # tema değişkenleri ve ortak sınıflar
```

## İçerik güncelleme

- **Metinler, programlar, SSS, iletişim bilgileri:** `src/data/site.js`
- **Görseller:** `public/images/` altındaki ilgili klasör
- **Renkler, fontlar, ortak stiller:** `src/index.css` içindeki `@theme` bloğu
