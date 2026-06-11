# MediGuide - Akıllı Beslenme Asistanı (Smart Nutrition Assistant)

🩺 **MediGuide**, bireylerin kronik rahatsızlıklarına (Diyabet, Hipertansiyon, Çölyak vb.) veya anlık yaşadıkları semptomlara (Baş Ağrısı, Mide Bulantısı vb.) göre kişiselleştirilmiş beslenme önerileri, güvenli gıda listeleri ve özel öğün planları sunan yapay zekâ destekli modern bir sağlık prototipidir.

Bu proje, **PP214- Programlamada Yeni Eğilimler** & **BTE208- Bilgisayar Teknolojilerinde Güncel Trendler** dersi final projesi kapsamında geliştirilmiştir.

---

## 1. Proje Özeti

### Çözülen Problem
Kronik rahatsızlıkları olan veya geçici semptomlar yaşayan hastalar, internet ortamındaki bilgi kirliliği nedeniyle neyi yiyip neyi yememeleri gerektiği konusunda kafa karışıklığı yaşamaktadır. Hatalı gıda tercihleri semptomları şiddetlendirebilmekte veya klinik durumları olumsuz etkileyebilmektedir.

### Hedef Kullanıcı Kitlesi
- Düzenli beslenmesi ve kan değerlerini kontrol altında tutması gereken kronik hastalar (Diyabet, Çölyak, Tansiyon hastaları vb.).
- Günlük yaşamlarında ani gelişen rahatsızlıklara (baş ağrısı, mide yanması vb.) karşı ilaçsız, doğal gıda çözümleri arayan bireyler.

### Temel Değer Önerisi
Kullanıcının o anki klinik durumuna göre anında güncellenen **dinamik beslenme profili**, risk oranlarını gösteren **Sağlık Etki Skoru** ve tariflerde değişiklik yapmaya imkan tanıyan **Yapay Zekâ Destekli Beslenme Asistanı** ile güvenilir ve bilimsel bir rehber sunmasıdır.

---

## 2. Kullanılan AI Araçları

Projenin fikir aşamasından kodlama ve prototipleme sürecine kadar aşağıdaki yapay zekâ araçlarından bir üretim ortağı olarak yararlanılmıştır:

- **Arayüz Tasarımı & Akış**: Google Stitch (Mockup üretimi ve ekran taslağı bileşimi).
- **Stil & Tasarım Sistemi**: Gemini Image & DALL·E 3 (Görsel konsept üretimi ve renk paleti seçimi).
- **Kod Üretimi**: Antigravity IDE (Gemini 3.5 Flash) & Cursor (HTML/CSS/JS kod yapısının kurgulanması, SPA router tasarımı ve dinamik render motoru geliştirme).
- **Veri & İçerik Üretimi**: Claude 3.5 Sonnet & GPT-4o (Tıbbi açıdan doğru gıda listelerinin, öğün detaylarının ve AI asistan yanıt kurallarının hazırlanması).

---

## 3. Prompt Kütüphanesi

Proje geliştirilirken kullanılan en başarılı prompt örnekleri ve detayları ayrıntılı olarak [PROMPT_LOGBOOK.md](file:///c:/Users/MyPc/OneDrive/Masaüstü/AntiGravity/PROMPT_LOGBOOK.md) dosyasında belgelenmiştir. İşte öne çıkan bazı örnekler:

- **UI Tasarım Promptu**: `"UI mockup design for a health assistant app called MediGuide. Clean layout with huge border-radii (24px), soft ambient blue shadows, heavy whitespace. Modern Corporate style."`
- **JS Router Promptu**: `"HTML'de section elemanlarını sayfa yenilenmeden gösterip gizleyecek hafif bir SPA router kodla. Navigasyon için history stack yönetimi yap ve logo tıklandığında tüm verileri sıfırla."`
- **AI Asistan Mantığı Promptu**: `"Seçili sağlık durumuna (Diyabet, Çölyak vb.) göre kullanıcının besin değişiklikleri hakkındaki sorularına tıbbi olarak tutarlı ve kişiselleştirilmiş Türkçe yanıtlar üreten bir kural eşleme fonksiyonu yaz."`

---

## 4. Kurulum ve Çalıştırma

Proje, herhangi bir harici kütüphane veya paket yüklemesi (npm install vb.) gerektirmeden doğrudan tarayıcı üzerinde çalışacak şekilde optimize edilmiştir. Bu sayede kurulum veya bağımlılık hataları olmadan kolayca değerlendirilebilir.

### Yerel Ortamda Çalıştırma Adımları

#### Yöntem 1: Doğrudan Açma (Offline)
1. Proje dosyalarını bilgisayarınıza indirin veya klonlayın.
2. [Web](file:///c:/Users/MyPc/OneDrive/Masaüstü/AntiGravity/Web) klasörüne gidin.
3. [index.html](file:///c:/Users/MyPc/OneDrive/Masaüstü/AntiGravity/Web/index.html) dosyasına çift tıklayarak herhangi bir modern web tarayıcısında (Chrome, Edge, Safari vb.) çalıştırın.

#### Yöntem 2: Yerel Geliştirme Sunucusu (Önerilen)
Eğer VS Code kullanıyorsanız, daha iyi bir performans ve statik dosya yönetimi için `Live Server` eklentisini kullanabilirsiniz:
1. Proje klasörünü VS Code veya Antigravity ile açın.
2. Sağ alt köşedeki **Go Live** butonuna tıklayarak yerel sunucuyu (`http://127.0.0.1:5500/Web/index.html`) başlatın.

---

## 5. Gelecek Vizyonu

Gelecekte **MediGuide** uygulamasına eklenebilecek yapay zekâ destekli özellikler ve ölçeklenme stratejileri:

1. **Gelişmiş AI Entegrasyonu (Tamamlandı)**: Başlangıçta simüle edilen AI asistan yapısı, projenin final aşamasında **Groq API (Llama 3.3 70B)** entegre edilerek gerçek zamanlı, serbest metinli ve Türkçe konuşan bir beslenme asistanına dönüştürülmüştür.
2. **Sesli Asistan Desteği (Gelecek Vizyonu)**: Hastaların klavye kullanmadan sesli komutlarla hastalıklarını belirtip tarif sorabilecekleri bir Ses-Metin (Speech-to-Text) özelliği eklenebilir.
2. **Kamera ile İçerik / Barkod Okuma**: Kullanıcılar market alışverişi yaparken gıda ambalajının fotoğrafını çekerek veya barkodunu taratarak, ürünün seçtikleri hastalık için riskli olup olmadığını (OCR ve Vision AI ile) anında görebilirler.
3. **Giyilebilir Cihaz Entegrasyonu**: Akıllı saatlerden gelen anlık kan şekeri, nabız ve tansiyon verileri otomatik olarak çekilerek, o anki duruma göre dinamik besin ve su hatırlatmaları yapılabilir.
4. **Kişisel Sağlık Raporu PDF Çıktısı**: Kullanıcının 30 günlük beslenme takibi ve vücut reaksiyonları analiz edilerek, doktor randevusu öncesi hekime sunulabilecek detaylı bir "Metabolik Durum Analiz Raporu" oluşturulabilir.
