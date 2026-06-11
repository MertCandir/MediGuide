# MediGuide - Prompt Günlüğü (Prompt Logbook)

Bu belge, PP214- Programlamada Yeni Eğilimler & BTE208- Bilgisayar Teknolojilerinde Güncel Trendler dersi final projesi geliştirme sürecinde yapay zekâ (LLM ve görsel üretim araçları) ile yapılan etkileşimleri, kullanılan promptları ve optimizasyon aşamalarını belgeler.

---

## 1. UI ve Görsel Tasarım Promptları (Google Stitch & DALL-E)

Uygulamanın görsel kimliğini ve arayüz yapısını tasarlamak için kullanılan promptlar:

### Prompt 1: Renk Paleti ve Stil Rehberi (LLM)
> **Amacı:** Sağlık ve beslenme odaklı, güven veren ama soğuk olmayan modern minimalist bir kurumsal arayüz için renk paleti ve tipografi kombinasyonu oluşturmak.
>
> **Kullanılan Prompt:**
> ```text
> Tıp ve sağlıkla ilgili, ancak hastane soğukluğunu hissettirmeyen, kullanıcılarda güven ve huzur hissi uyandıran modern minimalist bir mobil uygulama için renk paleti önerir misin?
> Ana rengimiz derin ve güven veren bir mavi (Medical Blue), ikincil rengimiz sakinleştirici ve zindelik hissi veren bir yeşil (Calming Green) olmalı.
> Arka planlar için gözü yormayan açık grimsi mavi tonlar kullanmak istiyorum.
> Başlıklar için modern ve şık bir geometrik font, gövde metinleri için ise yüksek okunabilirliğe sahip bir font seç.
> ```
> **Sonuç/Çıktı:** `DESIGN.md` dosyasındaki renk kodları (`#00478d` ve `#006b5b`), başlıklar için **Manrope**, gövde için **Inter** font eşleşmesi bu adımdan türetilmiştir.

### Prompt 2: Stitch Görsel Mockup Üretimi
> **Amacı:** Google Stitch üzerinde ekranları kurgularken, gıda resimlerinin yer alacağı görsel düzenleri optimize etmek.
>
> **Kullanılan Prompt:**
> ```text
> UI mockup design for a health assistant app called MediGuide. Clean layout with huge border-radii (24px), soft ambient blue shadows, heavy whitespace.
> Displays a list of recommended foods like blueberries, avocado, wild salmon, each inside a soft circular crop with a minimalist badge indicating food categories. Modern Corporate style.
> ```

---

## 2. Kod Üretim Promptları (Antigravity & Cursor)

Prototip kodlarını üretmek, sayfa geçişlerini programlamak ve CSS yapısını kurmak için kullanılan promptlar:

### Prompt 1: CSS Değişkenleri ve Reset Ayarları
> **Amacı:** `DESIGN.md` içerisindeki tüm kuralları CSS Custom Properties (değişkenler) olarak tanımlayıp, tüm projede tutarlı bir yapı kurmak.
>
> **Kullanılan Prompt:**
> ```text
> Sana göndereceğim DESIGN.md stil yönergesine uygun olarak bir style.css dosyası yazar mısın?
> Tüm renkleri, köşe yuvarlatma değerlerini, boşluk (spacing) kurallarını CSS değişkenleri (--color-primary vb.) olarak tanımla.
> Sayfalar ve kartlar için DESIGN.md'de belirtilen yumuşak, mavi tonlu yaygın gölgeleri (Blur: 30px, Opacity: 4%, renk: #005EB8) box-shadow olarak ekle.
> Mobil öncelikli (mobile-first) esnek grid yapısını oluştur ve masaüstünde 1280px genişlik sınırını aşmamasını sağla.
> ```

### Prompt 2: Single Page Application (SPA) Router ve Navigasyon Mantığı
> **Amacı:** Sayfa yenilenmeden tamamen istemci tarafında çalışan akıcı bir ekran geçiş mekanizması tasarlamak.
>
> **Kullanılan Prompt:**
> ```text
> HTML'de birden fazla section elemanını <section id="view-home" class="view"> şeklinde tanımladım.
> Sadece bir görünümün görünür olmasını (class="view active") sağlayan, diğerlerini gizleyen hafif bir JS router yaz.
> Geri tuşu navigasyonu için bir geçmiş yığını (history stack) tut.
> Kullanıcı 'Geri' butonuna bastığında bir önceki ekrana pürüzsüzce geri dönsün.
> Üst kısımdaki 'Geri' butonu sadece ana sayfada gizlensin, diğer alt sayfalarda otomatik olarak görünür olsun.
> ```

---

## 3. Veri Üretim Promptları (LLM)

Uygulamanın içeriğini dolduran tıbbi ve beslenme verilerini yapılandırılmış JSON/JS nesnesi formatında oluşturmak için kullanılan promptlar:

### Prompt 1: Tıbbi Gıda Listesi ve Sağlık Etkileri Oluşturma
> **Amacı:** Diyabet, Hipertansiyon ve Çölyak gibi yaygın durumlar için bilimsel olarak doğrulanmış yenilebilir ve yenilmemesi gereken gıda listelerini hazırlamak.
>
> **Kullanılan Prompt:**
> ```text
> Aşağıdaki tıbbi durumlara özel beslenme rehberliği verisi üret:
> 1. Diyabet (Şeker Hastalığı)
> 2. Hipertansiyon (Yüksek Tansiyon)
> 3. Çölyak (Gluten Hassasiyeti)
> 4. Kalp ve Damar Sağlığı
>
> Her durum için şu verileri içeren bir JavaScript nesnesi (data.js) hazırla:
> - Yenilebilecek 3-5 besin (Adı, kategorisi, neden yenmeli açıklaması, inline SVG ikon tasarımı)
> - Kaçınılması gereken 3-4 gıda (Adı, risk seviyesi, neden kaçınılmalı açıklaması, çarpı veya ünlem ikonu)
> - Sağlık etki açıklaması ve 100 üzerinden bir risk skoru
> - O duruma en uygun 1 adet sağlıklı öğün/tarif önerisi (Adı, kalorisi, protein/karb/şeker değerleri, malzemeleri, hazırlanış süresi ve sağlık etiketleri)
>
> Tüm açıklamalar Türkçe, bilimsel olarak doğru ve motive edici bir dille yazılmalıdır.
> ```

---

## 4. İçerik ve AI Simülasyon Promptları

Uygulama içinde yer alan dinamik AI Beslenme Danışmanı özelliğinin yanıtlarını tasarlamak için kullanılan promptlar:

### Prompt 1: AI Öğün Danışmanı Yanıt Algoritması
> **Amacı:** Kullanıcıların tarifler veya kısıtlı besinler hakkında sorabileceği olası sorulara anlık ve duruma özel yanıtlar üreten kurallı bir simülasyon mantığı yazmak.
>
> **Kullanılan Prompt:**
> ```text
> JavaScript'te bir mock AI asistan yanıt fonksiyonu yazacağız.
> Kullanıcı bir besin veya tarif hakkında soru sorduğunda, seçili olan duruma göre akıllı yanıtlar vermeli.
> Örneğin:
> - Durum 'diyabet' ise ve soru içinde 'yerine', 'kinoa' veya 'karabuğday' geçiyorsa: Kinoa yerine karabuğdayın glisemik indeksini kıyaslayan tıbbi bir yanıt ver.
> - Durum 'hipertansiyon' ise ve soru içinde 'tuz', 'sodyum' veya 'lezzet' geçiyorsa: Yemekleri tuzsuz lezzetlendirmek için kekik, limon, sarımsak öneren bir yanıt dön.
> - Durum 'çölyak' ise ve 'bulaş' veya 'çapraz bulaşma' soruluyorsa: Bağırsak hasarını önlemek için mutfaktaki çapraz bulaşma önlemlerini anlat.
> Her durum için bu şekilde anahtar kelime eşleştirmeleri yap ve son derece profesyonel, tıbbi açıdan tutarlı ve samimi Türkçe yanıtlar oluştur.
> ```

### Prompt 2: Gerçek AI Entegrasyonu (Groq API - Llama 3.3 70B)
> **Amacı:** Projenin son aşamasında statik "mock" algoritmasını tamamen kaldırıp, ücretsiz ve hızlı olan gerçek bir LLM (Groq Llama 3.3) entegrasyonu kurmak.
>
> **Kullanılan Prompt:**
> ```text
> Uygulamaya gerçekten çalışan bir yapay zeka entegre edeceğiz. Görseldeki arama çubuğu yapay zekaya bağlı olacak.
> Kullanıcının yazdığı hastalığa göre yapay zeka bunu uygulamanın amacına yönelik kullanıcak. "Devam et" butonunun altındaki hazır etiketleri kaldır.
> Tamamen ücretsiz ve kredi kartı gerektirmeyen Groq API (Llama 3.3 70B) kullanarak app.js içindeki mock AI sistemini gerçek bir fetch() çağrısına dönüştür.
> Sistem promptu olarak "Sen MediGuide adlı akıllı beslenme asistanı uygulamasının yapay zeka motorusun..." kullan.
> ```
> **Sonuç/Çıktı:** Uygulama tamamen dinamik hale getirildi. Artık "Başım ağrıyor" veya "Tansiyon" gibi serbest metin girişlerini analiz edip ilgili veri sınıflandırmasına (classification) ve chat arayüzüne yanıt veren bir yapıya kavuştu.
