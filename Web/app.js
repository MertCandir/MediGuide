// MediGuide - Akıllı Beslenme Asistanı Uygulama Logic Katmanı
// Gerçek Yapay Zekâ Entegrasyonu: Google Gemini API (Otomatik Model Seçimi)

document.addEventListener('DOMContentLoaded', () => {

  // --- GROQ API YAPILANDIRMASI (Ücretsiz - Llama 3.3) ---
  const GROQ_API_KEY = 'YOUR_API_KEY_HERE'; // GITHUB'A YÜKLERKEN BURAYI BOŞ BIRAKIN
  const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';
  const GROQ_MODEL = 'llama-3.3-70b-versatile';

  // --- UYGULAMA STATE'İ (DURUM YÖNETİMİ) ---
  const state = {
    currentView: 'home',
    mode: null,
    selectedCondition: null,
    history: ['home']
  };

  // --- HTML ELEMENTLERİ ---
  const header = document.querySelector('header');
  const backButton = document.getElementById('back-button');
  const logoLink = document.getElementById('logo-link');

  const views = {
    home: document.getElementById('view-home'),
    chronic: document.getElementById('view-chronic'),
    acute: document.getElementById('view-acute'),
    category: document.getElementById('view-category'),
    edible: document.getElementById('view-edible'),
    avoid: document.getElementById('view-avoid'),
    meal: document.getElementById('view-meal')
  };

  const cardChronic = document.getElementById('card-chronic');
  const cardAcute = document.getElementById('card-acute');
  const inputChronic = document.getElementById('input-chronic');
  const btnSubmitChronic = document.getElementById('btn-submit-chronic');
  const inputAcute = document.getElementById('input-acute');
  const btnSubmitAcute = document.getElementById('btn-submit-acute');

  const categoryTitle = document.getElementById('category-title');
  const selectedConditionName = document.getElementById('selected-condition-name');
  const btnChangeCondition = document.getElementById('btn-change-condition');
  const btnGotoEdible = document.getElementById('btn-goto-edible');
  const btnGotoAvoid = document.getElementById('btn-goto-avoid');
  const btnGotoMeal = document.getElementById('btn-goto-meal');

  const edibleList = document.getElementById('edible-list');
  const edibleFilters = document.getElementById('edible-filters');
  const btnEdibleBack = document.getElementById('btn-edible-back');
  const avoidList = document.getElementById('avoid-list');
  const healthImpactDesc = document.getElementById('health-impact-desc');
  const healthImpactScoreText = document.getElementById('health-impact-score-text');
  const healthImpactProgressFill = document.getElementById('health-impact-progress-fill');

  const mealName = document.getElementById('meal-name');
  const mealDesc = document.getElementById('meal-desc');
  const mealCal = document.getElementById('meal-cal');
  const mealProtein = document.getElementById('meal-protein');
  const mealCarbs = document.getElementById('meal-carbs');
  const mealSugar = document.getElementById('meal-sugar');
  const mealPrepTime = document.getElementById('meal-prep-time');
  const mealServings = document.getElementById('meal-servings');
  const mealIngredientsList = document.getElementById('meal-ingredients-list');
  const mealBenefitsContainer = document.getElementById('meal-benefits-container');


  const aiChatMealInput = document.getElementById('ai-chat-meal-input');
  const btnSendChatMeal = document.getElementById('btn-send-chat-meal');
  const aiChatMealResponse = document.getElementById('ai-chat-meal-response');


  // --- GROQ API FONKSİYONU (GERÇEK YAPAY ZEKÂ) ---
  // =====================================================

  async function callGeminiAPI(prompt) {
    const requestBody = {
      model: GROQ_MODEL,
      messages: [
        {
          role: 'system',
          content: 'Sen MediGuide adlı akıllı beslenme asistanı uygulamasının yapay zekâ motorusun. Her zaman tamamen anlaşılır, günlük, halk dilinde Türkçe yanıt ver. Kesinlikle yabancı kelime kullanma.'
        },
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1024
    };

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${GROQ_API_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Groq API Hatası:', response.status, errorData);
      throw new Error(`API Hatası: ${response.status} - ${errorData?.error?.message || 'Bilinmeyen hata'}`);
    }

    const data = await response.json();

    if (data.choices && data.choices[0] && data.choices[0].message) {
      console.log('✅ Groq AI (Llama 3.3) yanıt verdi');
      return data.choices[0].message.content;
    }

    throw new Error('Groq API yanıt formatı beklendiği gibi değil.');
  }

  // =====================================================
  // --- AI HASTALIK SINIFLANDIRMA (GEMİNİ İLE) ---
  // =====================================================

  async function classifyConditionWithAI(userInput, mode) {
    const chronicCategories = `
    - "diyabet" : Şeker hastalığı, insülin direnci, tip 1/tip 2 diyabet, kan şekeri yüksekliği, glukoz intoleransı
    - "hipertansiyon" : Yüksek tansiyon, kan basıncı yüksekliği, hipertansiyon
    - "kolesterol" : Yüksek kolesterol, hiperlipidemi, kolesterol yüksekliği
    - "kalp" : Kalp hastalığı, kardiyovasküler rahatsızlık, kolesterol yüksekliği, damar tıkanıklığı, trigliserid yüksekliği
    - "bobrek" : Böbrek hastalığı, böbrek yetmezliği, KBY, böbrek taşı, diyaliz
    - "gut" : Gut hastalığı, ürik asit yüksekliği, eklem ağrısı
    - "colyak" : Çölyak hastalığı, gluten hassasiyeti, gluten intoleransı, buğday alerjisi
    - "laktoz" : Laktoz intoleransı, süt alerjisi, laktoz hassasiyeti
    - "reflu" : Reflü, mide yanması, GÖRH, gastrit, mide fıtığı
    - "anemi" : Anemi, kansızlık, demir eksikliği, B12 eksikliği`;

    const acuteCategories = `
    - "ishal" : İshal, diyare, cırcır, bağırsak bozulması
    - "kabizlik" : Kabızlık, peklik, bağırsak tembelliği, tuvalete çıkamama
    - "bogaz_agrisi" : Boğaz ağrısı, boğaz şişliği, yutkunma zorluğu, bademcik
    - "soguk_alginligi" : Soğuk algınlığı, grip, nezle, üşütme, burun akıntısı, öksürük, ateş
    - "hazimsizlik" : Hazımsızlık, dispepsi, mide oturması
    - "siskinlik" : Şişkinlik, ödem, karın şişliği
    - "gaz_problemi" : Gaz problemi, gaz sıkışması, bağırsak gazı
    - "hipoglisemi" : Hipoglisemi, düşük kan şekeri, şeker düşmesi, soğuk terleme, titreme
    - "dehidrasyon_yorgunlugu" : Susuzluk, dehidrasyon, susuzluğa bağlı yorgunluk, sıvı kaybı
    - "kas_kramplari" : Kas krampları, bacak krampı, kas spazmı, charley horse
    - "agiz_yaralari" : Ağız yaraları, aft, ağız içi yara
    - "istahsizlik" : İştahsızlık, yemek yiyememe, iştah kapanması
    - "hafif_bagirsak" : Hafif bağırsak rahatsızlığı, bağırsak krampları
    - "adet_agrisi" : Adet ağrısı, regl sancısı, dismenore, adet krampları
    - "uyku_hali" : Uyku hali, sürekli uyuma isteği
    - "agiz_kurulugu" : Ağız kuruluğu, kserostomi, tükürük azlığı
    - "bas_donmesi" : Baş dönmesi, vertigo, sersemlik hissi, denge kaybı
    - "bas_agrisi" : Baş ağrısı, migren, şakak ağrısı, zonklama, gerilim tipi baş ağrısı
    - "mide_bulantisi" : Mide bulantısı, kusma hissi, bulanma, hazımsızlık
    - "halsizlik" : Halsizlik, yorgunluk, enerji düşüklüğü, bitkinlik, uyuşukluk, güçsüzlük
    - "mide_yanmasi" : Mide yanması, reflü, gastrit, mide asidi, ekşime`;

    const categories = mode === 'chronic' ? chronicCategories : acuteCategories;
    const typeLabel = mode === 'chronic' ? 'kronik hastalık' : 'anlık rahatsızlık';

    const prompt = `Sen MediGuide adlı bir akıllı beslenme asistanı uygulamasının yapay zekâ motorusun.

Kullanıcı şu ${typeLabel} girişini yaptı: "${userInput}"

Aşağıdaki kategorilerden BİRİNE eşle. Kullanıcının yazdığı ifade tam olarak eşleşmese bile, en yakın ve en mantıklı kategoriyi seç:
${categories}

KURALLAR:
1. Yanıtını SADECE aşağıdaki JSON formatında ver, başka hiçbir şey yazma.
2. Eğer kullanıcının girişi hiçbir kategoriye yakın değilse, "match" değerini null yap.
3. "confidence" değeri 0-100 arası olmalı.

JSON FORMAT:
{"match": "kategori_adi", "confidence": 85, "detected_name": "Tespit edilen hastalık/rahatsızlık adı Türkçe"}

ÖNEMLİ: Yanıtında sadece JSON olsun. Açıklama, markdown veya başka metin ekleme.`;

    const rawResponse = await callGeminiAPI(prompt);

    // JSON'u temizle ve parse et
    let cleanJson = rawResponse.trim();
    // Markdown code block varsa temizle
    cleanJson = cleanJson.replace(/```json\s*/gi, '').replace(/```\s*/gi, '').trim();

    try {
      return JSON.parse(cleanJson);
    } catch (e) {
      console.error('JSON parse hatası:', cleanJson, e);
      // Son çare: regex ile match değerini bul
      const matchResult = cleanJson.match(/"match"\s*:\s*"([^"]+)"/);
      const nameResult = cleanJson.match(/"detected_name"\s*:\s*"([^"]+)"/);
      if (matchResult) {
        return {
          match: matchResult[1] === 'null' ? null : matchResult[1],
          confidence: 70,
          detected_name: nameResult ? nameResult[1] : userInput
        };
      }
      return { match: null, confidence: 0, detected_name: userInput };
    }
  }

  // =====================================================
  // --- NAVİGASYON FONKSİYONLARI ---
  // =====================================================

  function navigateTo(viewName, isBack = false) {
    if (!views[viewName]) return;

    Object.keys(views).forEach(key => {
      views[key].classList.remove('active');
    });
    views[viewName].classList.add('active');

    state.currentView = viewName;

    if (!isBack) {
      if (state.history[state.history.length - 1] !== viewName) {
        state.history.push(viewName);
      }
    }

    // Girişlerin temizlenmesi
    if (viewName === 'chronic' || viewName === 'acute') {
      const isC = viewName === 'chronic';
      (isC ? inputChronic : inputAcute).value = '';
      const err = document.getElementById(`ai-error-${viewName}`);
      const lod = document.getElementById(`ai-loader-${viewName}`);
      if (err) err.style.display = 'none';
      if (lod) lod.style.display = 'none';
      const btn = isC ? btnSubmitChronic : btnSubmitAcute;
      btn.disabled = false;
      btn.style.opacity = '1';
    }

    updateHeaderUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function navigateBack() {
    if (state.history.length > 1) {
      state.history.pop();
      const prevView = state.history[state.history.length - 1];
      navigateTo(prevView, true);
    }
  }

  function updateHeaderUI() {
    if (state.currentView === 'home') {
      backButton.style.visibility = 'hidden';
    } else {
      backButton.style.visibility = 'visible';
    }
  }

  function getSelectedData() {
    if (!state.mode || !state.selectedCondition) return null;
    return MEDIGUIDE_DATA[state.mode][state.selectedCondition];
  }

  // =====================================================
  // --- ANA SAYFA KART TIKLAMA ---
  // =====================================================

  cardChronic.addEventListener('click', () => {
    state.mode = 'chronic';
    navigateTo('chronic');
  });

  cardAcute.addEventListener('click', () => {
    state.mode = 'acute';
    navigateTo('acute');
  });

  // =====================================================
  // --- HASTALIK/SEMPTOM GİRİŞİ ORTAK İŞLEYİCİSİ (GEMİNİ AI) ---
  // =====================================================

  async function handleDiseaseSubmit(mode) {
    const isChronic = mode === 'chronic';
    const inputEl = isChronic ? inputChronic : inputAcute;
    const btnEl = isChronic ? btnSubmitChronic : btnSubmitAcute;
    const errorEl = document.getElementById(`ai-error-${mode}`);
    const loaderEl = document.getElementById(`ai-loader-${mode}`);
    const loaderTextEl = document.getElementById(`ai-loader-text-${mode}`);

    const query = inputEl.value.trim();

    if (errorEl) errorEl.style.display = 'none';

    if (!query) {
      if (errorEl) {
        errorEl.textContent = `Lütfen ${isChronic ? 'kronik rahatsızlığınızı' : 'yaşadığınız anlık rahatsızlığı'} yazın.`;
        errorEl.style.display = 'block';
      }
      return;
    }

    btnEl.disabled = true;
    btnEl.style.opacity = '0.5';

    if (loaderEl) {
      loaderEl.style.display = 'flex';
      if (loaderTextEl) loaderTextEl.textContent = `🤖 Gemini AI ${isChronic ? 'girdinizi' : 'semptomlarınızı'} analiz ediyor...`;
    }

    try {
      setTimeout(() => {
        if (loaderEl && loaderEl.style.display !== 'none' && loaderTextEl) {
          loaderTextEl.textContent = isChronic 
            ? '🔬 Klinik parametreler ve metabolik profil taranıyor...'
            : '🔬 Semptom şiddeti ve akut beslenme kriterleri analiz ediliyor...';
        }
      }, 1500);

      const result = await classifyConditionWithAI(query, mode);

      if (result.match && MEDIGUIDE_DATA[mode][result.match]) {
        state.selectedCondition = result.match;
        saveStateToLocalStorage();
        renderCategoryDashboard();

        if (loaderEl && loaderTextEl) {
          loaderTextEl.innerHTML = `✅ Gemini AI Analizi Tamamlandı: <strong>${result.detected_name}</strong> tespit edildi (Güven: %${result.confidence}). Yönlendiriliyorsunuz...`;
          loaderEl.style.display = 'flex';
        }

        setTimeout(() => {
          if (loaderEl) loaderEl.style.display = 'none';
          btnEl.disabled = false;
          btnEl.style.opacity = '1';
          navigateTo('category');
        }, 2000);
      } else {
        if (loaderEl) loaderEl.style.display = 'none';
        btnEl.disabled = false;
        btnEl.style.opacity = '1';

        if (errorEl) {
          const supportedList = isChronic 
            ? 'Diyabet, Hipertansiyon, Yüksek Kolesterol, Kalp Hastalığı, Böbrek Hastalığı, Gut, Çölyak, Laktoz İntoleransı, Reflü, Anemi'
            : 'İshal, Kabızlık, Boğaz Ağrısı, Soğuk Algınlığı, Hazımsızlık, Şişkinlik, Gaz Problemi, Hipoglisemi, Dehidrasyon, Kas Krampları, Ağız Yaraları, İştahsızlık, Hafif Bağırsak, Adet Ağrısı, Uyku Hali, Ağız Kuruluğu, Baş Ağrısı, Baş Dönmesi, Mide Bulantısı, Halsizlik, Mide Yanması';
          
          errorEl.innerHTML = `🤖 Yapay Zekâ "<strong>${query}</strong>" ifadesinden desteklenen bir ${isChronic ? 'hastalık' : 'semptom'} profili çıkaramadı.<br>Şu anda desteklenenler:<br><small>${supportedList}.</small><br>Lütfen bu durumlardan birini veya yakın bir ifade yazın.`;
          errorEl.style.display = 'block';
        }
      }
    } catch (error) {
      console.error('Gemini API çağrısı başarısız:', error);
      if (loaderEl) loaderEl.style.display = 'none';
      btnEl.disabled = false;
      btnEl.style.opacity = '1';

      if (errorEl) {
        errorEl.innerHTML = `⚠️ Yapay zekâ bağlantısında bir sorun oluştu: <strong>${error.message}</strong><br>Lütfen internet bağlantınızı kontrol edip tekrar deneyin.`;
        errorEl.style.display = 'block';
      }
    }
  }

  btnSubmitChronic.addEventListener('click', () => handleDiseaseSubmit('chronic'));
  inputChronic.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleDiseaseSubmit('chronic'); });

  btnSubmitAcute.addEventListener('click', () => handleDiseaseSubmit('acute'));
  inputAcute.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleDiseaseSubmit('acute'); });

  // =====================================================
  // =====================================================
  // --- KATEGORİ RENDER & SAYFA DOLDURMA ---
  // =====================================================

  function renderCategoryDashboard() {
    const data = getSelectedData();
    if (!data) return;

    selectedConditionName.textContent = data.name;
    categoryTitle.textContent = `${data.tag} Rehberi`;
  }

  btnChangeCondition.addEventListener('click', () => {
    if (state.mode === 'chronic') {
      navigateTo('chronic');
    } else {
      navigateTo('acute');
    }
  });

  btnGotoEdible.addEventListener('click', () => {
    renderEdibleView();
    navigateTo('edible');
  });

  btnGotoAvoid.addEventListener('click', () => {
    renderAvoidView();
    navigateTo('avoid');
  });

  btnGotoMeal.addEventListener('click', () => {
    renderMealView();
    navigateTo('meal');
  });

  // --- 1. YENİLEBİLİR GIDALAR RENDER ---

  function renderEdibleView() {
    const data = getSelectedData();
    if (!data) return;

    const chips = edibleFilters.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      chip.className = 'filter-chip';
      if (chip.getAttribute('data-filter') === 'all') {
        chip.classList.add('active');
      }

      const newChip = chip.cloneNode(true);
      chip.parentNode.replaceChild(newChip, chip);

      newChip.addEventListener('click', () => {
        edibleFilters.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
        newChip.classList.add('active');
        const filterVal = newChip.getAttribute('data-filter');
        filterEdibleList(filterVal);
      });
    });

    filterEdibleList('all');
  }

  function getFoodEmoji(name) {
    const n = name.toLowerCase();
    const mappings = [
      { k: ['yaban mersini', 'berry'], e: '🫐' },
      { k: ['avokado'], e: '🥑' },
      { k: ['somon', 'balık'], e: '🐟' },
      { k: ['ıspanak', 'yeşil', 'lahana', 'nane'], e: '🥬' },
      { k: ['ceviz', 'fındık', 'badem'], e: '🌰' },
      { k: ['şeker', 'tatlı'], e: '🍬' },
      { k: ['tahıl', 'un', 'buğday', 'arpa', 'çavdar'], e: '🌾' },
      { k: ['ekmek'], e: '🍞' },
      { k: ['kıyma', 'sosis', 'sucuk', 'salam', 'işlenmiş et', 'kırmızı et', 'protein'], e: '🥩' },
      { k: ['yağ', 'margarin', 'tereyağ'], e: '🧈' },
      { k: ['kinoa', 'greçka', 'karabuğday', 'yulaf', 'püre', 'çorba'], e: '🥣' },
      { k: ['patates'], e: '🥔' },
      { k: ['domates'], e: '🍅' },
      { k: ['havuç'], e: '🥕' },
      { k: ['brokoli'], e: '🥦' },
      { k: ['elma', 'nar'], e: '🍎' },
      { k: ['muz'], e: '🍌' },
      { k: ['çilek'], e: '🍓' },
      { k: ['limon'], e: '🍋' },
      { k: ['portakal', 'narenciye'], e: '🍊' },
      { k: ['üzüm'], e: '🍇' },
      { k: ['karpuz'], e: '🍉' },
      { k: ['peynir', 'süt ürünü'], e: '🧀' },
      { k: ['süt', 'yoğurt', 'kefir', 'probiyotik'], e: '🥛' },
      { k: ['yumurta'], e: '🥚' },
      { k: ['tavuk', 'beyaz et'], e: '🍗' },
      { k: ['fasulye', 'nohut', 'mercimek', 'baklagil'], e: '🫘' },
      { k: ['fıstık'], e: '🥜' },
      { k: ['sarımsak'], e: '🧄' },
      { k: ['soğan'], e: '🧅' },
      { k: ['mantar'], e: '🍄' },
      { k: ['zeytin'], e: '🫒' },
      { k: ['biber', 'baharatlı', 'acı'], e: '🌶️' },
      { k: ['sos', 'ketçap'], e: '🥫' },
      { k: ['tuz'], e: '🧂' },
      { k: ['çikolata'], e: '🍫' },
      { k: ['kahve', 'kafein'], e: '☕' },
      { k: ['çay', 'bitki çayı'], e: '🍵' },
      { k: ['su', 'sıvı', 'maden suyu'], e: '💧' },
      { k: ['meyve'], e: '🍏' },
      { k: ['sebze'], e: '🥗' },
      { k: ['sakadat', 'ciğer'], e: '🍖' },
      { k: ['hamur', 'makarna', 'karbonhidrat'], e: '🍝' },
      { k: ['kızartma', 'fast food'], e: '🍟' },
      { k: ['alkol', 'içki'], e: '🍷' },
      { k: ['gazlı', 'kola', 'asitli'], e: '🥤' },
      { k: ['baharat'], e: '🌿' },
      { k: ['burger'], e: '🍔' }
    ];

    for (let { k, e } of mappings) {
      if (k.some(keyword => n.includes(keyword))) return e;
    }
    return '🍽️';
  }

  function createFoodItemHTML(food, badgeClass, overlayClass = '', overlayIcon = '') {
    const overlayHTML = overlayClass ? `<div class="icon-badge-overlay ${overlayClass}">${overlayIcon}</div>` : '';
    const imgClass = overlayClass ? 'avoid-img-container' : 'food-img-circle';
    const inlineStyle = overlayClass 
      ? `margin-right: 0; overflow: hidden; padding: 0; background-color: var(--color-surface-hover); display: flex; align-items: center; justify-content: center; font-size: 2.5rem;`
      : `overflow: hidden; padding: 0; background-color: var(--color-surface-hover); display: flex; align-items: center; justify-content: center; font-size: 2.5rem;`;

    return `
      <div class="${imgClass}" style="${overlayClass ? '' : inlineStyle}">
        ${overlayClass ? `<div class="food-img-circle" style="${inlineStyle}">${getFoodEmoji(food.name)}</div>${overlayHTML}` : getFoodEmoji(food.name)}
      </div>
      <div class="food-info">
        <div class="food-header">
          <span class="food-name">${food.name}</span>
          <span class="badge ${badgeClass}">${food.category}</span>
        </div>
        <p class="food-desc">${food.description}</p>
      </div>
    `;
  }

  function filterEdibleList(filterType) {
    const data = getSelectedData();
    if (!data) return;

    edibleList.innerHTML = '';

    const filteredFoods = data.edible.filter(food => {
      if (filterType === 'all') return true;

      const cat = food.category.toLowerCase();
      if (filterType === 'Sebzeler' && (cat.includes('sebze') || cat.includes('yeşil'))) return true;
      if (filterType === 'Meyveler' && cat.includes('meyve')) return true;
      if (filterType === 'Proteinler' && (cat.includes('protein') || cat.includes('tavuk') || cat.includes('balık'))) return true;
      if (filterType === 'Yağlar' && (cat.includes('yağ') || cat.includes('depo') || cat.includes('ceviz') || cat.includes('badem'))) return true;

      return false;
    });

    if (filteredFoods.length === 0) {
      edibleList.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--color-outline);">Bu kategoride uygun besin bulunamadı.</div>`;
      return;
    }

    filteredFoods.forEach(food => {
      const foodItem = document.createElement('div');
      foodItem.className = 'food-item';
      foodItem.innerHTML = createFoodItemHTML(food, getBadgeClass(food.category));
      edibleList.appendChild(foodItem);
    });
  }

  function getBadgeClass(category) {
    const cat = category.toLowerCase();
    if (cat.includes('süper')) return 'badge-green';
    if (cat.includes('yağ')) return 'badge-blue';
    if (cat.includes('yeşil') || cat.includes('sebze')) return 'badge-purple';
    if (cat.includes('depo') || cat.includes('tahıl')) return 'badge-orange';
    return 'badge-gray';
  }

  btnEdibleBack.addEventListener('click', () => {
    navigateBack();
  });

  // --- 2. YENİLMEMESİ GEREKENLER RENDER ---

  function renderAvoidView() {
    const data = getSelectedData();
    if (!data) return;

    avoidList.innerHTML = '';
    data.avoid.forEach(item => {
      const badgeClass = getAvoidBadgeClass(item.category);
      const overlayClass = getOverlayClass(item.type);
      const overlayIcon = getOverlayIcon(item.type);

      const avoidItem = document.createElement('div');
      avoidItem.className = 'avoid-item';
      avoidItem.innerHTML = createFoodItemHTML(item, badgeClass, overlayClass, overlayIcon);
      avoidList.appendChild(avoidItem);
    });

    healthImpactDesc.textContent = data.healthImpact.description;
    healthImpactScoreText.textContent = `KRİTİK (%${data.healthImpact.score})`;

    setTimeout(() => {
      healthImpactProgressFill.style.width = `${data.healthImpact.score}%`;

      if (data.healthImpact.score < 70) {
        healthImpactProgressFill.style.backgroundColor = '#eab308';
        healthImpactScoreText.style.color = '#eab308';
      } else if (data.healthImpact.score < 85) {
        healthImpactProgressFill.style.backgroundColor = '#f97316';
        healthImpactScoreText.style.color = '#f97316';
      } else {
        healthImpactProgressFill.style.backgroundColor = 'var(--color-error)';
        healthImpactScoreText.style.color = 'var(--color-error)';
      }
    }, 100);


  }

  function getAvoidBadgeClass(risk) {
    const r = risk.toLowerCase();
    if (r.includes('tamamen') || r.includes('kaçının')) return 'badge-dark-red';
    if (r.includes('yüksek')) return 'badge-red';
    return 'badge-yellow';
  }

  function getOverlayClass(type) {
    if (type === 'cross' || type === 'stop') return 'red-cross';
    return 'orange-warning';
  }

  function getOverlayIcon(type) {
    if (type === 'cross') {
      return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
    }
    if (type === 'stop') {
      return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line></svg>`;
    }
    return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>`;
  }

  // --- 3. ÖĞÜN TAVSİYESİ RENDER ---

  function renderMealView() {
    const data = getSelectedData();
    if (!data || !data.meal) return;

    const meal = data.meal;

    mealName.textContent = meal.name;
    mealDesc.textContent = meal.description;

    mealCal.textContent = meal.calories;
    mealProtein.textContent = meal.protein;
    mealCarbs.textContent = meal.carbs;
    mealSugar.textContent = meal.sugar;

    mealPrepTime.textContent = meal.prepTime;
    mealServings.textContent = meal.servings;

    mealIngredientsList.innerHTML = '';
    meal.ingredients.forEach(ing => {
      const parts = ing.split('(');
      const namePart = parts[0].trim();
      const qtyPart = parts[1] ? parts[1].replace(')', '') : '';

      const li = document.createElement('li');
      li.innerHTML = `${namePart} <span class="qty">${qtyPart}</span>`;
      mealIngredientsList.appendChild(li);
    });

    mealBenefitsContainer.innerHTML = '';
    meal.labels.forEach(lbl => {
      const isGreen = lbl.type === 'green';
      const card = document.createElement('div');
      card.className = `meal-benefit-card ${isGreen ? 'benefit-green' : 'benefit-blue'}`;
      card.innerHTML = `
        <div class="benefit-icon">
          ${isGreen ?
          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>` :
          `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`
        }
        </div>
        <div class="benefit-content">
          <h4>${lbl.title}</h4>
          <p>${lbl.text}</p>
        </div>
      `;
      mealBenefitsContainer.appendChild(card);
    });

    aiChatMealResponse.style.display = 'none';
    aiChatMealInput.value = '';
  }

  // =====================================================
  // --- GERÇEK GEMİNİ AI SOHBET ASİSTANI ---
  // =====================================================

  async function handleAIChat(inputElement, responseElement, context) {
    const question = inputElement.value.trim();
    if (!question) return;

    const data = getSelectedData();
    if (!data) return;

    // Yükleniyor animasyonu
    responseElement.innerHTML = `
      <div style="display:flex; align-items:center; gap:8px; color: var(--color-primary); padding: 12px;">
        <span class="pulse-dot"></span> 🤖 Gemini AI düşünüyor ve analiz ediyor...
      </div>
    `;
    responseElement.style.display = 'block';

    // Bağlam bilgisi oluştur
    let contextInfo = '';
    if (context === 'avoid') {
      const avoidNames = data.avoid.map(a => a.name).join(', ');
      contextInfo = `Kullanıcının durumu: ${data.name}.
Kaçınması gereken gıdalar: ${avoidNames}.
Sağlık etkisi: ${data.healthImpact.description}`;
    } else if (context === 'meal') {
      const meal = data.meal;
      contextInfo = `Kullanıcının durumu: ${data.name}.
Önerilen öğün: ${meal.name} - ${meal.description}.
Malzemeler: ${meal.ingredients.join(', ')}.
Kalori: ${meal.calories}, Protein: ${meal.protein}, Karbonhidrat: ${meal.carbs}`;
    }

    const prompt = `Sen MediGuide adlı bir akıllı beslenme asistanısın. Türkçe yanıt ver.

BAĞLAM:
${contextInfo}

KULLANICININ SORUSU: "${question}"

KURALLAR:
1. Yanıtını 2-4 cümle ile sınırla, kısa ve net ol.
2. Tamamen "Halk Dilinde", çok sade ve gündelik bir Türkçe kullan. Asla İngilizce, Almanca veya başka dilde (örn: slightly, wichtig) kelime kullanma!
3. Karmaşık tıbbi terimlerden (örn: glisemik indeks, makrobesin vb.) kaçın. Eğer kullanman kesinlikle mecburi ise, ne anlama geldiğini halkın anlayacağı kadar basit bir şekilde parantez içinde açıkla.
4. Sıcak, güven verici ve yardımcı bir ton kullan.
5. Her zaman sonuna "Doktorunuza danışmanızı öneririz." uyarısını ekle.
6. HTML formatında yanıt ver (<strong>, <br> kullanabilirsin).
7. Yanıtının başına "<strong>🤖 AI Tavsiyesi:</strong> " ekle.`;

    try {
      const response = await callGeminiAPI(prompt);

      // Markdown bold'ları HTML'e dönüştür
      let htmlResponse = response
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');

      // Eğer AI tavsiyesi prefix'i yoksa ekle
      if (!htmlResponse.includes('AI Tavsiyesi')) {
        htmlResponse = `<strong>🤖 AI Tavsiyesi:</strong> ${htmlResponse}`;
      }

      responseElement.innerHTML = `<div style="padding: 12px; line-height: 1.6;">${htmlResponse}</div>`;
    } catch (error) {
      console.error('Chat API hatası:', error);
      responseElement.innerHTML = `<div style="padding: 12px; color: var(--color-error);">⚠️ Yapay zekâ bağlantısında sorun oluştu: ${error.message}. Lütfen tekrar deneyin.</div>`;
    }
  }

  // AI Chat Event Listener'ları


  btnSendChatMeal.addEventListener('click', () => handleAIChat(aiChatMealInput, aiChatMealResponse, 'meal'));
  aiChatMealInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleAIChat(aiChatMealInput, aiChatMealResponse, 'meal');
  });

  // =====================================================
  // --- LOGO & GERİ BUTONU ---
  // =====================================================

  logoLink.addEventListener('click', (e) => {
    e.preventDefault();
    state.mode = null;
    state.selectedCondition = null;
    state.history = ['home'];
    saveStateToLocalStorage();
    navigateTo('home');
  });

  backButton.addEventListener('click', () => {
    navigateBack();
  });

  // =====================================================
  // --- LOCALSTORAGE ENTEGRASYONU ---
  // =====================================================

  function saveStateToLocalStorage() {
    localStorage.setItem('mediguide_state', JSON.stringify({
      mode: state.mode,
      selectedCondition: state.selectedCondition
    }));
  }

  function loadStateFromLocalStorage() {
    const saved = localStorage.getItem('mediguide_state');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.mode && parsed.selectedCondition) {
          state.mode = parsed.mode;
          state.selectedCondition = parsed.selectedCondition;
          renderCategoryDashboard();
        }
      } catch (e) {
        console.error('State load error:', e);
      }
    }
  }

  // Uygulama açılışında kayıtlı durumu yükle
  loadStateFromLocalStorage();

});
