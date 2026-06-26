# Proje Adı: MediGuide - Akıllı Beslenme Asistanı

**Öğrenci Bilgileri:**
- **Adı Soyadı:** Mert Çandır
- **Öğrenci Numarası:** 24010501007
- **Ders:** Programlamada Yeni Eğilimler 

---

## 1. Projenin Amacı ve Kısa Açıklaması

**Projenin Amacı:**
Kronik rahatsızlıkları (Diyabet, Hipertansiyon, Çölyak vb.) veya ani gelişen semptomları (Baş Ağrısı, Mide Bulantısı vb.) olan bireylerin, internetteki bilgi kirliliği arasında kaybolmadan neyi yiyip neyi yememeleri gerektiğini bulmalarını sağlamak; hatalı beslenmekten kaynaklanan sağlık risklerini en aza indirmektir.

**Kısa Açıklama:**
MediGuide, kullanıcının seçtiği veya yazdığı sağlık durumuna göre dinamik olarak güncellenen *Yenilebilir Gıdalar* listesi, *Kaçınılması Gereken Gıdalar* ve klinik etki skoru analizi ile kişiselleştirilmiş öğün planı sunan yapay zekâ (Google Gemini & Groq AI) destekli modern bir web uygulamasıdır.

---

## 2. Kullanılan Teknolojiler ve Kütüphaneler

Bu proje, maksimum hız ve esneklik için harici bir bağımlılık yükleyicisi kullanılmadan geliştirilmiştir:

- **HTML5 & Vanilla CSS3:** Semantik yapı, duyarlı (responsive) Flex/Grid tasarımları ve özel tasarım sistemi (glassmorphism, modern tipografi).
- **Vanilla JavaScript (ES6+):** Tek Sayfa Uygulaması (SPA) yönlendirmesi, local storage durum yönetimi ve dinamik veri işleme.
- **Yapay Zekâ Servisleri:**
  - **Google Gemini AI:** Kullanıcının serbest metinle girdiği hastalık veya semptomları doğal dil işleme ile analiz edip doğru kategoriye eşlemek için.
  - **Groq API (Llama 3.3 70B):** Kullanıcılara yemek tariflerini evdeki malzemelere göre uyarlama konusunda anlık yanıtlar veren akıllı sohbet asistanı için.

---

## 3. Proje Klasör Yapısı

```text
AntiGravity/
├── Web/
│   ├── index.html       # Ana uygulama arayüzü (tüm ekran modülleri)
│   ├── style.css        # Tasarım sistemi, animasyonlar ve stil kuralları
│   ├── app.js           # SPA yönlendiricisi, AI bağlantıları ve iş mantığı
│   └── data.js          # Hastalıklara özel detaylı besin veritabanı
├── README.md            # GitHub proje dokümantasyon dosyası
└── PROMPT_LOGBOOK.md    # Geliştirme aşamasında yapay zekâya verilen promptlar
```

---

## 4. Kurulum Adımları

Uygulama herhangi bir paket kurulumu (npm install vb.) veya derleme süreci gerektirmez.

1. Projeyi GitHub üzerinden bilgisayarınıza **ZIP olarak indirin** veya Git ile klonlayın:
   ```bash
   git clone [GITHUB_PROJE_LINKINIZ]
   ```
2. Arşiv dosyasını klasöre çıkartın.
3. Çıkan klasörün içerisindeki `Web` dizinine gidin.

---

## 5. Çalıştırma ve Kullanım Talimatları

### Çalıştırma:
- **Doğrudan Açma:** `Web` klasörü içindeki `index.html` dosyasına çift tıklayarak herhangi bir tarayıcıda (Chrome, Edge, Safari) hemen çalıştırabilirsiniz.
- **Geliştirici Sunucusu (Önerilen):** VS Code kullanıyorsanız `Live Server` eklentisi ile `index.html` dosyasını sağ tıklayıp "Open with Live Server" seçeneğiyle açabilirsiniz.

### Kullanım Talimatları:
1. **Ana Sayfa:** Karşınıza çıkan ekrandan "Kronik Hastalık" veya "Anlık Rahatsızlık" kartlarından birini seçin.
2. **AI Semptom Girişi:** Yaşadığınız durumu serbestçe yazın (Örn: *"Baş Ağrısı"* veya *"Şeker hastasılığı"*). Yapay zekâ durumunuzu saniyeler içinde algılayacaktır.
3. **Kategori Rehberi:** Sizin için hazırlanan özel panodan:
   - **Yenilebilir Gıdalar:** Güvenle tüketebileceğiniz besinleri görün.
   - **Kaçınılması Gerekenler:** Riskli gıdaları ve grafikli "Sağlık Etki Skoru"nu inceleyin.
   - **Öğün Tavsiyesi:** Hastalığınıza özel dengelenmiş örnek tarifi ve besin değerlerini alın.
4. **AI Asistanı:** Tarif sayfasındaki asistana yemeği modifiye etmek için sorular sorabilirsiniz.

---


## 6. GitHub Proje Bağlantısı

🔗 **GitHub Repo Bağlantısı:** [https://github.com/MertCandir/MediGuide](https://github.com/MertCandir/MediGuide)


---

## 7. Kaynakça ve Yararlanılan Bağlantılar

- **Google Gemini API Dokümantasyonu:** [https://ai.google.dev/](https://ai.google.dev/)
- **Groq Cloud API Dokümantasyonu:** [https://console.groq.com/docs/quickstart](https://console.groq.com/docs/quickstart)
- **Beslenme Referansları:** Harvard Health Publishing Nutrition Guidelines, T.C. Sağlık Bakanlığı Beslenme Rehberi.
- **Tasarım Referansları:** Glassmorphism UI Best Practices.
