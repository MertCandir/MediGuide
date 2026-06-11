const MEDIGUIDE_DATA = {
  "chronic": {
    "diyabet": {
      "name": "Diyabet (Şeker Hastalığı)",
      "description": "Diyabet (Şeker Hastalığı) için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Diyabet",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Yaban Mersini",
          "category": "SAĞLIKLI",
          "description": "Yaban Mersini tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Tam Yulaf",
          "category": "SAĞLIKLI",
          "description": "Tam Yulaf tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Brokoli",
          "category": "SAĞLIKLI",
          "description": "Brokoli tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Somon",
          "category": "SAĞLIKLI",
          "description": "Somon tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Rafine Tahıllar",
          "category": "RİSKLİ",
          "description": "Rafine Tahıllar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Etler",
          "category": "RİSKLİ",
          "description": "İşlenmiş Etler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Şekerli İçecekler",
          "category": "RİSKLİ",
          "description": "Şekerli İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Trans Yağlar",
          "category": "RİSKLİ",
          "description": "Trans Yağlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Sağlıklı Kinoa Salatası",
        "description": "Tam bitkisel protein ve canlı taze sebzelerle dolu, Akdeniz esintili ferahlatıcı bir kase. Düşük glisemik indeks değeri ile diyabet yönetimine mükemmel destek.",
        "calories": "342 kcal",
        "protein": "12g",
        "carbs": "45g",
        "sugar": "4g",
        "prepTime": "15 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Pişmiş Kinoa (1 bardak)",
          "Çeri Domates (1/2 bardak)",
          "Küp doğranmış salatalık (1 küçük)",
          "Taze Maydanoz (1/4 bardak)",
          "Sızma Zeytinyağı (1 yk)",
          "Limon Suyu (1/2 limon)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Kalp Dostu",
            "text": "Zeytinyağından gelen omega-3 yağ asitleri ve kinoadan gelen lif bakımından zengindir."
          },
          {
            "type": "blue",
            "title": "Sürdürülebilir Enerji",
            "text": "Kompleks karbonhidratlar gün boyu sabit bir enerji salınımı sağlar."
          }
        ]
      }
    },
    "hipertansiyon": {
      "name": "Hipertansiyon (Yüksek Tansiyon)",
      "description": "Hipertansiyon (Yüksek Tansiyon) için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Hipertansiyon",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Sarımsak",
          "category": "SAĞLIKLI",
          "description": "Sarımsak tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Muz",
          "category": "SAĞLIKLI",
          "description": "Muz tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Ispanak",
          "category": "SAĞLIKLI",
          "description": "Ispanak tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Pancar",
          "category": "SAĞLIKLI",
          "description": "Pancar tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Şarküteri Ürünleri",
          "category": "RİSKLİ",
          "description": "Şarküteri Ürünleri semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Konserve Çorbalar",
          "category": "RİSKLİ",
          "description": "Konserve Çorbalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Aşırı Tuzlu Atıştırmalıklar",
          "category": "RİSKLİ",
          "description": "Aşırı Tuzlu Atıştırmalıklar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Fast Food",
          "category": "RİSKLİ",
          "description": "Fast Food semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Fırınlanmış Somon ve Kuşkonmaz",
        "description": "Düşük sodyumlu, omega-3 zengini bu enfes balık menüsü, damarları rahatlatarak kan basıncını düşürmeye yardımcı olur.",
        "calories": "410 kcal",
        "protein": "32g",
        "carbs": "12g",
        "sugar": "2g",
        "prepTime": "25 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Taze Somon Fileto (150g)",
          "Kuşkonmaz (8-10 sap)",
          "Limon Dilimleri (2 adet)",
          "Ezilmiş Sarımsak (1 diş)",
          "Karabiber (1 çay kaşığı)",
          "Zeytinyağı (1 yk)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Tansiyon Dengeleyici",
            "text": "Sodyum oranı çok düşük, potasyum ve sağlıklı yağ oranı çok yüksektir."
          }
        ]
      }
    },
    "kolesterol": {
      "name": "Yüksek Kolesterol",
      "description": "Yüksek Kolesterol için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Kolesterol",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Ceviz",
          "category": "SAĞLIKLI",
          "description": "Ceviz tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yulaf Ezmesi",
          "category": "SAĞLIKLI",
          "description": "Yulaf Ezmesi tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zeytinyağı",
          "category": "SAĞLIKLI",
          "description": "Zeytinyağı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Avokado",
          "category": "SAĞLIKLI",
          "description": "Avokado tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Kızartmalar",
          "category": "RİSKLİ",
          "description": "Kızartmalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Margarin",
          "category": "RİSKLİ",
          "description": "Margarin semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Tam Yağlı Süt Ürünleri",
          "category": "RİSKLİ",
          "description": "Tam Yağlı Süt Ürünleri semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Etler",
          "category": "RİSKLİ",
          "description": "İşlenmiş Etler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Cevizli Yulaf Lapası",
        "description": "Kötü kolesterolü düşüren beta-glukan lifiyle dolu, ceviz ve tarçınla lezzetlendirilmiş kalp dostu bir kahvaltı.",
        "calories": "315 kcal",
        "protein": "10g",
        "carbs": "48g",
        "sugar": "6g",
        "prepTime": "10 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Yulaf Ezmesi (1/2 bardak)",
          "Badem Sütü (1 bardak)",
          "Kırılmış Ceviz (2 yk)",
          "Tarçın (1 çay kaşığı)",
          "Taze Yaban Mersini (1/4 bardak)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Kolesterol Savaşçısı",
            "text": "Yulaf kepeği sindirim sırasında kolesterolü bağlayıp vücuttan atar."
          }
        ]
      }
    },
    "kalp_hastaligi": {
      "name": "Kalp Hastalığı",
      "description": "Kalp Hastalığı için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Kalp",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Somon Balığı",
          "category": "SAĞLIKLI",
          "description": "Somon Balığı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Badem",
          "category": "SAĞLIKLI",
          "description": "Badem tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Koyu Yapraklı Yeşillikler",
          "category": "SAĞLIKLI",
          "description": "Koyu Yapraklı Yeşillikler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Kuşkonmaz",
          "category": "SAĞLIKLI",
          "description": "Kuşkonmaz tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Tuzlu Gıdalar",
          "category": "RİSKLİ",
          "description": "Aşırı Tuzlu Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Şekerli Tatlılar",
          "category": "RİSKLİ",
          "description": "Şekerli Tatlılar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Margarin",
          "category": "RİSKLİ",
          "description": "Margarin semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Hazır Soslar",
          "category": "RİSKLİ",
          "description": "Hazır Soslar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Zeytinyağlı Enginar Kalbi",
        "description": "Karaciğeri temizleyen ve damarları koruyan, E vitamini zengini geleneksel Akdeniz mucizesi.",
        "calories": "280 kcal",
        "protein": "6g",
        "carbs": "22g",
        "sugar": "3g",
        "prepTime": "35 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Taze Enginar (2 adet)",
          "Zeytinyağı (2 yk)",
          "Limon Suyu (1 yk)",
          "İnce Kıyılmış Dereotu (2 yk)",
          "Taze Bezelye (2 yk)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Damar Koruyucu",
            "text": "Antioksidanlar ve tekli doymamış yağlar damar çeperlerini güçlendirir."
          }
        ]
      }
    },
    "bobrek": {
      "name": "Böbrek Hastalığı",
      "description": "Böbrek Hastalığı için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Böbrek",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Kırmızı Biber",
          "category": "SAĞLIKLI",
          "description": "Kırmızı Biber tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Lahana",
          "category": "SAĞLIKLI",
          "description": "Lahana tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Karnabahar",
          "category": "SAĞLIKLI",
          "description": "Karnabahar tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Elma",
          "category": "SAĞLIKLI",
          "description": "Elma tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Yüksek Fosforlu Gıdalar",
          "category": "RİSKLİ",
          "description": "Yüksek Fosforlu Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Etler",
          "category": "RİSKLİ",
          "description": "İşlenmiş Etler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Hazır Çorbalar",
          "category": "RİSKLİ",
          "description": "Hazır Çorbalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Tuzlu Atıştırmalıklar",
          "category": "RİSKLİ",
          "description": "Tuzlu Atıştırmalıklar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Elmalı ve Lahanalı Tavuk Sote",
        "description": "Böbrekleri yormayan, düşük fosfor ve düşük potasyum içeren, hafif ama çok lezzetli bir ana yemek.",
        "calories": "320 kcal",
        "protein": "25g",
        "carbs": "15g",
        "sugar": "8g",
        "prepTime": "20 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Tavuk Göğsü (120g)",
          "İnce Kıyılmış Beyaz Lahana (1 bardak)",
          "Küp Doğranmış Elma (1/2 adet)",
          "Zeytinyağı (1 yk)",
          "Karabiber (Yarım çay kaşığı)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Böbrek Dostu",
            "text": "Protein dengesi ayarlanmış, fosfor ve potasyum oranı özel olarak düşük tutulmuştur."
          }
        ]
      }
    },
    "gut": {
      "name": "Gut Hastalığı",
      "description": "Gut Hastalığı için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Gut",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Kiraz",
          "category": "SAĞLIKLI",
          "description": "Kiraz tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "C Vitamini İçeren Meyveler",
          "category": "SAĞLIKLI",
          "description": "C Vitamini İçeren Meyveler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Az Yağlı Süt",
          "category": "SAĞLIKLI",
          "description": "Az Yağlı Süt tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Su",
          "category": "SAĞLIKLI",
          "description": "Su tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Sakatat (Ciğer vb.)",
          "category": "RİSKLİ",
          "description": "Sakatat (Ciğer vb.) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kabuklu Deniz Ürünleri",
          "category": "RİSKLİ",
          "description": "Kabuklu Deniz Ürünleri semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Yüksek Fruktozlu Şuruplar",
          "category": "RİSKLİ",
          "description": "Yüksek Fruktozlu Şuruplar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Kirazlı ve Çilekli Smoothie Kasesi",
        "description": "Ürik asit seviyelerini düşürdüğü klinik olarak kanıtlanmış kiraz özleriyle dolu, ferahlatıcı ve doyurucu bir öğün.",
        "calories": "260 kcal",
        "protein": "8g",
        "carbs": "45g",
        "sugar": "18g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Dondurulmuş Kiraz (1/2 bardak)",
          "Taze Çilek (1/2 bardak)",
          "Az Yağlı Süt veya Kefir (1 bardak)",
          "Keten Tohumu (1 yk)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Ürik Asit Düşürücü",
            "text": "Kirazdaki antosiyaninler eklem iltihaplarını ve ürik asit birikimini önler."
          }
        ]
      }
    },
    "colyak": {
      "name": "Çölyak Hastalığı",
      "description": "Çölyak Hastalığı için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Çölyak",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Karabuğday",
          "category": "SAĞLIKLI",
          "description": "Karabuğday tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Kinoa",
          "category": "SAĞLIKLI",
          "description": "Kinoa tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Taze Meyveler",
          "category": "SAĞLIKLI",
          "description": "Taze Meyveler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Sebzeler",
          "category": "SAĞLIKLI",
          "description": "Sebzeler tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Buğday",
          "category": "RİSKLİ",
          "description": "Buğday semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Arpa",
          "category": "RİSKLİ",
          "description": "Arpa semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Çavdar",
          "category": "RİSKLİ",
          "description": "Çavdar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Paketli Gıdalar (Gluten İçerebilen)",
          "category": "RİSKLİ",
          "description": "İşlenmiş Paketli Gıdalar (Gluten İçerebilen) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Karabuğdaylı Sebze Tavası",
        "description": "Tamamen glutensiz, çapraz bulaşma riski olmayan, lif ve B vitamini deposu renkli bir tabak.",
        "calories": "340 kcal",
        "protein": "11g",
        "carbs": "52g",
        "sugar": "5g",
        "prepTime": "25 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Haşlanmış Karabuğday (1 bardak)",
          "Kırmızı Kapya Biber (1/2 adet)",
          "Kabak (1 küçük)",
          "Zeytinyağı (1.5 yk)",
          "Kekik (1 çay kaşığı)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "%100 Glutensiz",
            "text": "Güvenle tüketebileceğiniz, bağırsak villuslarını koruyan besleyici formül."
          }
        ]
      }
    },
    "laktoz": {
      "name": "Laktoz İntoleransı",
      "description": "Laktoz İntoleransı için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Laktoz İntoleransı",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Badem Sütü",
          "category": "SAĞLIKLI",
          "description": "Badem Sütü tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Laktozsuz Yoğurt",
          "category": "SAĞLIKLI",
          "description": "Laktozsuz Yoğurt tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Kefir",
          "category": "SAĞLIKLI",
          "description": "Kefir tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Soya Ürünleri",
          "category": "SAĞLIKLI",
          "description": "Soya Ürünleri tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "İnek Sütü",
          "category": "RİSKLİ",
          "description": "İnek Sütü semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Dondurma",
          "category": "RİSKLİ",
          "description": "Dondurma semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Yumuşak Peynirler",
          "category": "RİSKLİ",
          "description": "Yumuşak Peynirler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kremalı Soslar",
          "category": "RİSKLİ",
          "description": "Kremalı Soslar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Hindistan Cevizi Sütlü Körili Tavuk",
        "description": "İnek sütü veya krema yerine sindirimi çok kolay hindistan cevizi sütüyle hazırlanan Asya esintili bir lezzet.",
        "calories": "420 kcal",
        "protein": "28g",
        "carbs": "18g",
        "sugar": "3g",
        "prepTime": "30 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Tavuk Göğsü (150g)",
          "Hindistan Cevizi Sütü (1/2 bardak)",
          "Köri Tozu (1 tatlı kaşığı)",
          "Taze Zencefil (1 çay kaşığı)",
          "Basmati Pirinç (1/2 bardak)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Laktozsuz",
            "text": "Mide krampları veya şişkinlik yapmaz, tamamen bitkisel süt bazlıdır."
          }
        ]
      }
    },
    "reflu": {
      "name": "Reflü",
      "description": "Reflü için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Reflü",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Yulaf Ezmesi",
          "category": "SAĞLIKLI",
          "description": "Yulaf Ezmesi tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zencefil",
          "category": "SAĞLIKLI",
          "description": "Zencefil tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Kavun",
          "category": "SAĞLIKLI",
          "description": "Kavun tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Kereviz",
          "category": "SAĞLIKLI",
          "description": "Kereviz tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Domates Salçası",
          "category": "RİSKLİ",
          "description": "Domates Salçası semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Acı Baharatlar",
          "category": "RİSKLİ",
          "description": "Acı Baharatlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Çikolata",
          "category": "RİSKLİ",
          "description": "Çikolata semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Nane",
          "category": "RİSKLİ",
          "description": "Nane semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Fırınlanmış Patates ve Havuç Püresi",
        "description": "Mide asidini tetiklemeyen, yumuşak dokulu ve baharatsız, boğazınızı ve midenizi yatıştıran bir tabak.",
        "calories": "210 kcal",
        "protein": "4g",
        "carbs": "45g",
        "sugar": "6g",
        "prepTime": "25 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Patates (1 orta boy)",
          "Havuç (2 orta boy)",
          "Zeytinyağı (1 tatlı kaşığı)",
          "Tuz (Bir tutam)",
          "Taze Nane (Süslemek için - yenmemeli)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Asit Dengeleyici",
            "text": "Mide kapakçığını gevşeten tetikleyicilerden (salça, acı, soğan) tamamen arındırılmıştır."
          }
        ]
      }
    },
    "anemi": {
      "name": "Anemi (Kansızlık)",
      "description": "Anemi (Kansızlık) için genel beslenme ve yaşam tarzı yönergeleri.",
      "tag": "Anemi",
      "healthImpact": {
        "description": "Beslenmenize dikkat etmemek kronik komplikasyonlara yol açabilir.",
        "score": 85,
        "level": "KRİTİK"
      },
      "edible": [
        {
          "name": "Kırmızı Et",
          "category": "SAĞLIKLI",
          "description": "Kırmızı Et tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Ispanak",
          "category": "SAĞLIKLI",
          "description": "Ispanak tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Mercimek",
          "category": "SAĞLIKLI",
          "description": "Mercimek tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Pekmez",
          "category": "SAĞLIKLI",
          "description": "Pekmez tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Çay (Yemeklerle Birlikte)",
          "category": "RİSKLİ",
          "description": "Çay (Yemeklerle Birlikte) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kahve",
          "category": "RİSKLİ",
          "description": "Kahve semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kalsiyum Takviyeleri (Demir Emilimini Engeller)",
          "category": "RİSKLİ",
          "description": "Kalsiyum Takviyeleri (Demir Emilimini Engeller) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Tahıllar",
          "category": "RİSKLİ",
          "description": "İşlenmiş Tahıllar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Ispanak Yatağında Mercimek Köftesi",
        "description": "Demir emilimini C vitamini ile zirveye çıkaran, kansızlık savaşçısı geleneksel ve güçlü bir bitkisel öğün.",
        "calories": "380 kcal",
        "protein": "16g",
        "carbs": "55g",
        "sugar": "4g",
        "prepTime": "30 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Kırmızı Mercimek (1/2 bardak)",
          "İnce Bulgur (1/4 bardak)",
          "Taze Ispanak Yaprakları (1 bardak)",
          "Limon Suyu (Bolca)",
          "Zeytinyağı (1 yk)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Demir Deposu",
            "text": "Mercimekteki bitkisel demir, limon suyundaki C vitamini ile birleşerek maksimum emilim sağlar."
          }
        ]
      }
    }
  },
  "acute": {
    "ishal": {
      "name": "İshal",
      "description": "İshal semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "İshal",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Muz",
          "category": "SAĞLIKLI",
          "description": "Muz tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Pirinç Lapası",
          "category": "SAĞLIKLI",
          "description": "Pirinç Lapası tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Elma Püresi",
          "category": "SAĞLIKLI",
          "description": "Elma Püresi tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Tost Ekmeği",
          "category": "SAĞLIKLI",
          "description": "Tost Ekmeği tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Yağlı Yiyecekler",
          "category": "RİSKLİ",
          "description": "Aşırı Yağlı Yiyecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Süt Ürünleri",
          "category": "RİSKLİ",
          "description": "Süt Ürünleri semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Acı Baharatlar",
          "category": "RİSKLİ",
          "description": "Acı Baharatlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Şekerli İçecekler",
          "category": "RİSKLİ",
          "description": "Şekerli İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Hafif Pirinç Lapası ve Muz",
        "description": "BRAT diyetinin temeli olan bu öğün, bağırsakları yormadan dışkıyı katılaştırmaya yardımcı olur.",
        "calories": "210 kcal",
        "protein": "4g",
        "carbs": "48g",
        "sugar": "14g",
        "prepTime": "15 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Beyaz Pirinç (1/2 bardak)",
          "Su veya Yağsız Et Suyu (1.5 bardak)",
          "Olgun Muz (1 adet)",
          "Bir tutam tuz"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Bağlayıcı Etki",
            "text": "Bağırsak hareketlerini yavaşlatır ve kaybedilen potasyumu yerine koyar."
          }
        ]
      }
    },
    "kabizlik": {
      "name": "Kabızlık",
      "description": "Kabızlık semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Kabızlık",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Kuru Erik",
          "category": "SAĞLIKLI",
          "description": "Kuru Erik tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yulaf Kepeği",
          "category": "SAĞLIKLI",
          "description": "Yulaf Kepeği tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Keten Tohumu",
          "category": "SAĞLIKLI",
          "description": "Keten Tohumu tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Bol Su",
          "category": "SAĞLIKLI",
          "description": "Bol Su tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Beyaz Ekmek",
          "category": "RİSKLİ",
          "description": "Beyaz Ekmek semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Fast Food",
          "category": "RİSKLİ",
          "description": "Fast Food semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Aşırı Peynir",
          "category": "RİSKLİ",
          "description": "Aşırı Peynir semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Etler",
          "category": "RİSKLİ",
          "description": "İşlenmiş Etler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Kuru Erikli Yulaf Kasesi",
        "description": "Lif deposu yulaf ve doğal müshil etkisi olan kuru erikle bağırsakları anında harekete geçiren kahvaltı.",
        "calories": "290 kcal",
        "protein": "8g",
        "carbs": "56g",
        "sugar": "18g",
        "prepTime": "10 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Yulaf Kepeği (1/2 bardak)",
          "Ilık Su veya Süt (1 bardak)",
          "Kuru Erik (4 adet - doğranmış)",
          "Keten Tohumu (1 yk)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Bağırsak Çalıştırıcı",
            "text": "Yüksek çözünmeyen lif oranıyla sindirim sistemini hızla temizler."
          }
        ]
      }
    },
    "bogaz_agrisi": {
      "name": "Boğaz Ağrısı",
      "description": "Boğaz Ağrısı semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Boğaz Ağrısı",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Ilık Ballı Su",
          "category": "SAĞLIKLI",
          "description": "Ilık Ballı Su tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zencefil Çayı",
          "category": "SAĞLIKLI",
          "description": "Zencefil Çayı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Haşlanmış Sebzeler",
          "category": "SAĞLIKLI",
          "description": "Haşlanmış Sebzeler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Püreler",
          "category": "SAĞLIKLI",
          "description": "Püreler tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Asitli İçecekler",
          "category": "RİSKLİ",
          "description": "Asitli İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Acı Baharatlar",
          "category": "RİSKLİ",
          "description": "Acı Baharatlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kuru Atıştırmalıklar (Cips vb.)",
          "category": "RİSKLİ",
          "description": "Kuru Atıştırmalıklar (Cips vb.) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Çok Soğuk Gıdalar",
          "category": "RİSKLİ",
          "description": "Çok Soğuk Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Zencefilli Ilık Tavuk Suyu Çorbası",
        "description": "Boğazı tahriş etmeden yutkunmayı kolaylaştıran, anti-inflamatuar zencefille güçlendirilmiş şifa kasesi.",
        "calories": "180 kcal",
        "protein": "14g",
        "carbs": "12g",
        "sugar": "2g",
        "prepTime": "20 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Ev Yapımı Tavuk Suyu (2 bardak)",
          "Taze Zencefil (1 çay kaşığı - rendelenmiş)",
          "Tel Şehriye (2 yk)",
          "Limon Suyu (Birkaç damla)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Yatıştırıcı",
            "text": "İltihaplı boğaz dokusunu nemlendirir ve doğal ağrı kesici etkisi yapar."
          }
        ]
      }
    },
    "soguk_alginligi": {
      "name": "Soğuk Algınlığı",
      "description": "Soğuk Algınlığı semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Soğuk Algınlığı",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Tavuk Suyu Çorbası",
          "category": "SAĞLIKLI",
          "description": "Tavuk Suyu Çorbası tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Narenciyeler",
          "category": "SAĞLIKLI",
          "description": "Narenciyeler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Sarımsak",
          "category": "SAĞLIKLI",
          "description": "Sarımsak tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zencefil",
          "category": "SAĞLIKLI",
          "description": "Zencefil tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Şekerli Tatlılar",
          "category": "RİSKLİ",
          "description": "Aşırı Şekerli Tatlılar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Süt Ürünleri (Mukus Artırabilir)",
          "category": "RİSKLİ",
          "description": "Süt Ürünleri (Mukus Artırabilir) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kafein",
          "category": "RİSKLİ",
          "description": "Kafein semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Bol Sarımsaklı Kelle Paça Görünümlü Sebze Suyu",
        "description": "Bağışıklık sistemini ayağa kaldıran, C vitamini ve doğal antibiyotik (sarımsak) dolu sıcak bir iksir.",
        "calories": "150 kcal",
        "protein": "5g",
        "carbs": "25g",
        "sugar": "8g",
        "prepTime": "25 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Kemik Suyu veya Sebze Suyu (2 bardak)",
          "Sarımsak (2-3 diş - ezilmiş)",
          "Havuç (1 adet)",
          "Karabiber (Yarım çay kaşığı)",
          "Maydanoz (Süslemek için)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Bağışıklık Güçlendirici",
            "text": "Terlemeyi teşvik eder, tıkanıklıkları açar ve virüslerle savaşır."
          }
        ]
      }
    },
    "hazimsizlik": {
      "name": "Hazımsızlık",
      "description": "Hazımsızlık semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Hazımsızlık",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Rezene Çayı",
          "category": "SAĞLIKLI",
          "description": "Rezene Çayı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zencefil",
          "category": "SAĞLIKLI",
          "description": "Zencefil tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yoğurt",
          "category": "SAĞLIKLI",
          "description": "Yoğurt tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Haşlanmış Pirinç",
          "category": "SAĞLIKLI",
          "description": "Haşlanmış Pirinç tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Kızartmalar",
          "category": "RİSKLİ",
          "description": "Kızartmalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Ağır Yağlı Yemekler",
          "category": "RİSKLİ",
          "description": "Ağır Yağlı Yemekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Acı Baharatlar",
          "category": "RİSKLİ",
          "description": "Acı Baharatlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Gazlı İçecekler",
          "category": "RİSKLİ",
          "description": "Gazlı İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Rezene Tohumlu Hafif Yoğurtlu Çorba",
        "description": "Midedeki gazı alan ve sindirimi rahatlatan, asidik olmayan çok yumuşak bir başlangıç.",
        "calories": "160 kcal",
        "protein": "8g",
        "carbs": "15g",
        "sugar": "5g",
        "prepTime": "15 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Probiyotik Yoğurt (1/2 bardak)",
          "Sıcak Su (1 bardak)",
          "Pirinç (1 yk)",
          "Rezene Tohumu (Yarım çay kaşığı)",
          "Kuru Nane (Bir tutam)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Mide Dostu",
            "text": "Mide spazmlarını çözer ve şişkinlik hissini hızla azaltır."
          }
        ]
      }
    },
    "siskinlik": {
      "name": "Şişkinlik",
      "description": "Şişkinlik semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Şişkinlik",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Nane Çayı",
          "category": "SAĞLIKLI",
          "description": "Nane Çayı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Salatalık",
          "category": "SAĞLIKLI",
          "description": "Salatalık tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Muz",
          "category": "SAĞLIKLI",
          "description": "Muz tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Papaya",
          "category": "SAĞLIKLI",
          "description": "Papaya tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Fasulye/Nohut (Hazırlıksız)",
          "category": "RİSKLİ",
          "description": "Fasulye/Nohut (Hazırlıksız) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Gazlı İçecekler",
          "category": "RİSKLİ",
          "description": "Gazlı İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Yapay Tatlandırıcılar",
          "category": "RİSKLİ",
          "description": "Yapay Tatlandırıcılar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Sakız",
          "category": "RİSKLİ",
          "description": "Sakız semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Papaya ve Salatalık Salatası",
        "description": "Sindirim enzimleri (papain) açısından çok zengin, ödem attıran ve gaz birikimini çözen hafif bir ara öğün.",
        "calories": "120 kcal",
        "protein": "2g",
        "carbs": "28g",
        "sugar": "15g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Taze Papaya (1 bardak - küp doğranmış)",
          "Salatalık (1 adet - soyulmuş)",
          "Taze Nane Yaprakları (4-5 adet)",
          "Limon Suyu (1 tatlı kaşığı)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Ödem Attırıcı",
            "text": "Mide ve bağırsaklardaki fazla gazı ve tutulan suyu dışarı atar."
          }
        ]
      }
    },
    "gaz_problemi": {
      "name": "Gaz Problemi",
      "description": "Gaz Problemi semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Gaz",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Kimyon Çayı",
          "category": "SAĞLIKLI",
          "description": "Kimyon Çayı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Rezene",
          "category": "SAĞLIKLI",
          "description": "Rezene tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Probiyotik Yoğurt",
          "category": "SAĞLIKLI",
          "description": "Probiyotik Yoğurt tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zencefil",
          "category": "SAĞLIKLI",
          "description": "Zencefil tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Soğan/Sarımsak (Çiğ)",
          "category": "RİSKLİ",
          "description": "Soğan/Sarımsak (Çiğ) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Lahana",
          "category": "RİSKLİ",
          "description": "Lahana semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Gazlı İçecekler",
          "category": "RİSKLİ",
          "description": "Gazlı İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Baklagiller",
          "category": "RİSKLİ",
          "description": "Baklagiller semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Kimyonlu Fırın Patates Püresi",
        "description": "Kimyonun muazzam gaz söktürücü özelliğiyle birleşen, bağırsaklarda fermantasyon yapmayan bir öğün.",
        "calories": "180 kcal",
        "protein": "3g",
        "carbs": "40g",
        "sugar": "2g",
        "prepTime": "20 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Patates (1 orta boy - haşlanmış)",
          "Kimyon (1 çay kaşığı)",
          "Zeytinyağı (1 tatlı kaşığı)",
          "Tuz (Bir tutam)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Gaz Söktürücü",
            "text": "Sindirim kanalındaki gaz baloncuklarını dağıtarak krampları önler."
          }
        ]
      }
    },
    "hipoglisemi": {
      "name": "Hipoglisemi (Ani Şeker Düşmesi)",
      "description": "Hipoglisemi (Ani Şeker Düşmesi) semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Hipoglisemi",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Meyve Suyu (1 Çay Bardağı)",
          "category": "SAĞLIKLI",
          "description": "Meyve Suyu (1 Çay Bardağı) tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Kuru Üzüm",
          "category": "SAĞLIKLI",
          "description": "Kuru Üzüm tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Tam Tahıllı Kraker",
          "category": "SAĞLIKLI",
          "description": "Tam Tahıllı Kraker tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Elma",
          "category": "SAĞLIKLI",
          "description": "Elma tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Yağlı Tatlılar (Emilimi Yavaşlatır)",
          "category": "RİSKLİ",
          "description": "Aşırı Yağlı Tatlılar (Emilimi Yavaşlatır) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Sadece Saf Şeker (Sonrasında Ani Düşüş Yapar)",
          "category": "RİSKLİ",
          "description": "Sadece Saf Şeker (Sonrasında Ani Düşüş Yapar) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kafein",
          "category": "RİSKLİ",
          "description": "Kafein semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Fıstık Ezmeli Elma Dilimleri",
        "description": "Kan şekerini hızla yükselten elma fruktozu ile bu şekeri saatlerce dengede tutan fıstık ezmesi proteininin harika uyumu.",
        "calories": "250 kcal",
        "protein": "7g",
        "carbs": "28g",
        "sugar": "16g",
        "prepTime": "2 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Taze Elma (1 adet)",
          "Şekersiz Fıstık veya Badem Ezmesi (2 yk)",
          "Tarçın (İsteğe bağlı serpmelik)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Şeker Dengeleyici",
            "text": "Hızlı bir toparlanma sağlar ve sonrasında ani şeker düşüşü yaşatmaz."
          }
        ]
      }
    },
    "dehidrasyon": {
      "name": "Dehidrasyon",
      "description": "Dehidrasyon semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Dehidrasyon",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Hindistan Cevizi Suyu",
          "category": "SAĞLIKLI",
          "description": "Hindistan Cevizi Suyu tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Karpuz",
          "category": "SAĞLIKLI",
          "description": "Karpuz tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Salatalık",
          "category": "SAĞLIKLI",
          "description": "Salatalık tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Elektrolitli İçecekler",
          "category": "SAĞLIKLI",
          "description": "Elektrolitli İçecekler tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Kafeinli İçecekler",
          "category": "RİSKLİ",
          "description": "Kafeinli İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Çok Tuzlu Gıdalar",
          "category": "RİSKLİ",
          "description": "Çok Tuzlu Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Şeker",
          "category": "RİSKLİ",
          "description": "İşlenmiş Şeker semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Ev Yapımı Elektrolitli Karpuz İçeceği",
        "description": "Hücre içi su dengesini sağlayan potasyum ve sodyum içeren, anında kana karışan hayat kurtarıcı bir içecek.",
        "calories": "90 kcal",
        "protein": "1g",
        "carbs": "22g",
        "sugar": "18g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Karpuz Dilimleri (2 bardak)",
          "Hindistan Cevizi Suyu veya Normal Su (1 bardak)",
          "Deniz Tuzu (Yarım çay kaşığı)",
          "Taze Limon (1 yk)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Hızlı Nemlendirme",
            "text": "Sıradan sudan çok daha hızlı bir şekilde hücreleri suya doyurur."
          }
        ]
      }
    },
    "kas_kramplari": {
      "name": "Kas Krampları",
      "description": "Kas Krampları semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Kramp",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Muz (Potasyum)",
          "category": "SAĞLIKLI",
          "description": "Muz (Potasyum) tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Avokado",
          "category": "SAĞLIKLI",
          "description": "Avokado tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Tatlı Patates",
          "category": "SAĞLIKLI",
          "description": "Tatlı Patates tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yoğurt",
          "category": "SAĞLIKLI",
          "description": "Yoğurt tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Kafein",
          "category": "RİSKLİ",
          "description": "Aşırı Kafein semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Tuzlu Atıştırmalıklar",
          "category": "RİSKLİ",
          "description": "Tuzlu Atıştırmalıklar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Şekerli İçecekler",
          "category": "RİSKLİ",
          "description": "Şekerli İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Magnezyum ve Potasyum Bombası Smoothie",
        "description": "Kas kasılmalarını ve kramplarını anında çözen, sinir sistemini yatıştıran yoğun bir mineral kaynağı.",
        "calories": "280 kcal",
        "protein": "8g",
        "carbs": "35g",
        "sugar": "12g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Muz (1 adet)",
          "Avokado (1/4 adet)",
          "Çiğ Ispanak (1 avuç)",
          "Badem Sütü (1 bardak)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Kas Gevşetici",
            "text": "İçerdiği yoğun elektrolitlerle kas liflerindeki elektriksel aktiviteyi düzenler."
          }
        ]
      }
    },
    "agiz_yaralari": {
      "name": "Ağız Yaraları",
      "description": "Ağız Yaraları semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Ağız Yarası",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Soğuk Püreler",
          "category": "SAĞLIKLI",
          "description": "Soğuk Püreler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Pürüzsüz Çorbalar",
          "category": "SAĞLIKLI",
          "description": "Pürüzsüz Çorbalar tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yoğurt",
          "category": "SAĞLIKLI",
          "description": "Yoğurt tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yulaf",
          "category": "SAĞLIKLI",
          "description": "Yulaf tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Asitli Meyveler (Limon/Portakal)",
          "category": "RİSKLİ",
          "description": "Asitli Meyveler (Limon/Portakal) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Acı Baharatlar",
          "category": "RİSKLİ",
          "description": "Acı Baharatlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Sert/Sivri Gıdalar (Cips)",
          "category": "RİSKLİ",
          "description": "Sert/Sivri Gıdalar (Cips) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Sıcak İçecekler",
          "category": "RİSKLİ",
          "description": "Sıcak İçecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Serinletici Yulaf ve Yoğurt Püresi",
        "description": "Ağız mukozasını asla çizmeyen, asit içermeyen ve yaraların iyileşmesini hızlandıran soğuk bir mama.",
        "calories": "220 kcal",
        "protein": "12g",
        "carbs": "30g",
        "sugar": "8g",
        "prepTime": "10 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Yulaf Ezmesi (1/3 bardak - iyice pişmiş)",
          "Soğuk Sade Yoğurt (1/2 bardak)",
          "Bal (1 çay kaşığı - antibakteriyel)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Yara İyileştirici",
            "text": "Hem besleyici hem de tahriş olan bölgeleri koruyucu bir tabaka ile kaplar."
          }
        ]
      }
    },
    "istahsizlik": {
      "name": "İştahsızlık",
      "description": "İştahsızlık semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "İştahsızlık",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Ceviz/Badem",
          "category": "SAĞLIKLI",
          "description": "Ceviz/Badem tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Besleyici Smoothie'ler",
          "category": "SAĞLIKLI",
          "description": "Besleyici Smoothie'ler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Avokado",
          "category": "SAĞLIKLI",
          "description": "Avokado tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zeytinyağlı Mezeler",
          "category": "SAĞLIKLI",
          "description": "Zeytinyağlı Mezeler tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Su (Yemek Öncesi)",
          "category": "RİSKLİ",
          "description": "Aşırı Su (Yemek Öncesi) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Çok Büyük Porsiyonlar",
          "category": "RİSKLİ",
          "description": "Çok Büyük Porsiyonlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Aşırı Şekerli Gıdalar",
          "category": "RİSKLİ",
          "description": "Aşırı Şekerli Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Ağır Yağlı Yemekler",
          "category": "RİSKLİ",
          "description": "Ağır Yağlı Yemekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Enerji Dolu Avokadolu Tost",
        "description": "Mideyi doldurup şişirmeden maksimum kalori ve besin öğesi sağlayan, çok lezzetli ve küçük hacimli bir lokma.",
        "calories": "310 kcal",
        "protein": "10g",
        "carbs": "25g",
        "sugar": "2g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Tam Tahıllı Ekmek (1 ince dilim)",
          "Olgun Avokado (1/2 adet)",
          "Haşlanmış Yumurta (1 adet)",
          "Zeytinyağı (1 çay kaşığı)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Yoğun Besin",
            "text": "Az miktarda yiyerek bile vücudun günlük yağ ve protein ihtiyacını karşılar."
          }
        ]
      }
    },
    "hafif_bagirsak": {
      "name": "Hafif Bağırsak Hassasiyeti",
      "description": "Hafif Bağırsak Hassasiyeti semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Bağırsak",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Kemik Suyu Çorbası",
          "category": "SAĞLIKLI",
          "description": "Kemik Suyu Çorbası tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Haşlanmış Patates",
          "category": "SAĞLIKLI",
          "description": "Haşlanmış Patates tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Beyaz Pirinç",
          "category": "SAĞLIKLI",
          "description": "Beyaz Pirinç tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Muz",
          "category": "SAĞLIKLI",
          "description": "Muz tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Baharatlı Yemekler",
          "category": "RİSKLİ",
          "description": "Baharatlı Yemekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Çiğ Sebzeler",
          "category": "RİSKLİ",
          "description": "Çiğ Sebzeler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kafein",
          "category": "RİSKLİ",
          "description": "Kafein semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Yağlı Yiyecekler",
          "category": "RİSKLİ",
          "description": "Yağlı Yiyecekler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Sade Tavuk Suyu ve Şehriye",
        "description": "Yıpranmış bağırsak duvarlarını onaran kolajen zengini, hiçbir baharat içermeyen en güvenli öğün.",
        "calories": "140 kcal",
        "protein": "10g",
        "carbs": "20g",
        "sugar": "1g",
        "prepTime": "15 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Kemik/Tavuk Suyu (2 bardak)",
          "Tel Şehriye (2 yk)",
          "Çok Az Tuz",
          "Haşlanmış Didiklenmiş Tavuk (Yarım fincan)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Bağırsak Onarıcı",
            "text": "Sindirime hiç enerji harcatmadan doğrudan bağırsakları besler."
          }
        ]
      }
    },
    "adet_agrisi": {
      "name": "Adet Ağrısı",
      "description": "Adet Ağrısı semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Adet",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Papatya Çayı",
          "category": "SAĞLIKLI",
          "description": "Papatya Çayı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Somon",
          "category": "SAĞLIKLI",
          "description": "Somon tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Bitter Çikolata",
          "category": "SAĞLIKLI",
          "description": "Bitter Çikolata tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zencefil",
          "category": "SAĞLIKLI",
          "description": "Zencefil tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Tuzlu Gıdalar",
          "category": "RİSKLİ",
          "description": "Aşırı Tuzlu Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kafein",
          "category": "RİSKLİ",
          "description": "Kafein semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Etler",
          "category": "RİSKLİ",
          "description": "İşlenmiş Etler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Süt Ürünleri (Bazı durumlarda)",
          "category": "RİSKLİ",
          "description": "Süt Ürünleri (Bazı durumlarda) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Zencefilli Bitter Çikolatalı Puding",
        "description": "Magnezyum eksikliğini giderip rahim kasılmalarını durduran, mutluluk hormonlarını tetikleyen ağrı kesici bir tatlı.",
        "calories": "260 kcal",
        "protein": "6g",
        "carbs": "30g",
        "sugar": "12g",
        "prepTime": "10 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Bitter Çikolata (%70+ Kakaolu - 2 kare)",
          "Badem Sütü (1 bardak)",
          "Chia Tohumu (2 yk)",
          "Zencefil Tozu (Yarım çay kaşığı)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Ağrı Kesici",
            "text": "Prostaglandin üretimini baskılayarak krampları ve ağrıları doğal yolla hafifletir."
          }
        ]
      }
    },
    "uyku_hali": {
      "name": "Uyku Hali / Yorgunluk",
      "description": "Uyku Hali / Yorgunluk semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Yorgunluk",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Yeşil Çay",
          "category": "SAĞLIKLI",
          "description": "Yeşil Çay tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Chia Tohumu",
          "category": "SAĞLIKLI",
          "description": "Chia Tohumu tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yaban Mersini",
          "category": "SAĞLIKLI",
          "description": "Yaban Mersini tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yumurta",
          "category": "SAĞLIKLI",
          "description": "Yumurta tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Ağır Karbonhidratlı Öğünler",
          "category": "RİSKLİ",
          "description": "Ağır Karbonhidratlı Öğünler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Şekerli Atıştırmalıklar",
          "category": "RİSKLİ",
          "description": "Şekerli Atıştırmalıklar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Aşırı Kafein (Sonrası çöküş)",
          "category": "RİSKLİ",
          "description": "Aşırı Kafein (Sonrası çöküş) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Canlandırıcı Matcha ve Cevizli Yoğurt",
        "description": "Kahve gibi ani çarpıntı ve sonrasında çöküş yapmadan, saatlerce süren stabil ve temiz bir zihinsel enerji sağlar.",
        "calories": "240 kcal",
        "protein": "14g",
        "carbs": "18g",
        "sugar": "10g",
        "prepTime": "3 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Sade Yoğurt (1 bardak)",
          "Matcha Yeşil Çay Tozu (Yarım çay kaşığı)",
          "Ceviz (2 tam ceviz)",
          "Taze Orman Meyveleri (1/4 bardak)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Uzun Süreli Enerji",
            "text": "L-theanine içeriği sayesinde odaklanmayı artırır ve uykulu hali dağıtır."
          }
        ]
      }
    },
    "agiz_kurulugu": {
      "name": "Ağız Kuruluğu",
      "description": "Ağız Kuruluğu semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Ağız Kuruluğu",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Sulu Meyveler (Kavun/Karpuz)",
          "category": "SAĞLIKLI",
          "description": "Sulu Meyveler (Kavun/Karpuz) tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Et Suyu Çorbalar",
          "category": "SAĞLIKLI",
          "description": "Et Suyu Çorbalar tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Limonlu Su",
          "category": "SAĞLIKLI",
          "description": "Limonlu Su tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Şekersiz Sakız",
          "category": "SAĞLIKLI",
          "description": "Şekersiz Sakız tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Kuru Krakerler",
          "category": "RİSKLİ",
          "description": "Kuru Krakerler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Tuzlu Çerezler",
          "category": "RİSKLİ",
          "description": "Tuzlu Çerezler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kafein",
          "category": "RİSKLİ",
          "description": "Kafein semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Sulu Kavun ve Salatalık Kayığı",
        "description": "Tükürük bezlerini nazikçe uyaran, su içeriği muazzam yüksek ve ferahlatıcı bir nemlendirme öğünü.",
        "calories": "110 kcal",
        "protein": "2g",
        "carbs": "26g",
        "sugar": "18g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Soğuk Kavun Dilimleri (2 bardak)",
          "Salatalık (1 adet - halka doğranmış)",
          "Taze Nane Yaprakları",
          "Çok Az Limon Suyu"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Tükürük Tetikleyici",
            "text": "Ağız içini saatlerce nemli tutar ve kuruluk hissini tamamen siler."
          }
        ]
      }
    },
    "bas_agrisi": {
      "name": "Baş Ağrısı",
      "description": "Baş Ağrısı semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Baş Ağrısı",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Su",
          "category": "SAĞLIKLI",
          "description": "Su tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Badem",
          "category": "SAĞLIKLI",
          "description": "Badem tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Nane Çayı",
          "category": "SAĞLIKLI",
          "description": "Nane Çayı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Magnezyum Zengin Gıdalar",
          "category": "SAĞLIKLI",
          "description": "Magnezyum Zengin Gıdalar tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Eski Peynirler",
          "category": "RİSKLİ",
          "description": "Eski Peynirler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Etler",
          "category": "RİSKLİ",
          "description": "İşlenmiş Etler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kafein (Değişken)",
          "category": "RİSKLİ",
          "description": "Kafein (Değişken) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Magnezyumlu Badem Sütü ve Muz",
        "description": "Kan damarlarındaki spazmları rahatlatan magnezyum ağırlıklı, susuzluğa bağlı baş ağrılarını da kesen içecek.",
        "calories": "190 kcal",
        "protein": "4g",
        "carbs": "32g",
        "sugar": "15g",
        "prepTime": "3 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Badem Sütü (1 bardak)",
          "Muz (1 adet)",
          "Badem Ezmesi (1 tatlı kaşığı)",
          "Su (Yarım bardak ekstra nem için)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Damar Gevşetici",
            "text": "Migren veya gerilim tipi baş ağrılarının temel sebebi olan daralmış damarları açar."
          }
        ]
      }
    },
    "bas_donmesi": {
      "name": "Baş Dönmesi",
      "description": "Baş Dönmesi semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Baş Dönmesi",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Tam Tahıllı Kraker",
          "category": "SAĞLIKLI",
          "description": "Tam Tahıllı Kraker tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Zencefil",
          "category": "SAĞLIKLI",
          "description": "Zencefil tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Bol Su",
          "category": "SAĞLIKLI",
          "description": "Bol Su tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Taze Meyveler",
          "category": "SAĞLIKLI",
          "description": "Taze Meyveler tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Aşırı Tuzlu Gıdalar",
          "category": "RİSKLİ",
          "description": "Aşırı Tuzlu Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Kafein",
          "category": "RİSKLİ",
          "description": "Kafein semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Alkol",
          "category": "RİSKLİ",
          "description": "Alkol semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Ağır Yağlı Öğünler",
          "category": "RİSKLİ",
          "description": "Ağır Yağlı Öğünler semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Zencefilli Tuzlu Kraker ve Papatya Çayı",
        "description": "İç kulak ve mide dengesini hızla kuran, bulantı ve dönme hissini anında bloke eden güvenli bir acil durum öğünü.",
        "calories": "150 kcal",
        "protein": "3g",
        "carbs": "25g",
        "sugar": "2g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Tam Tahıllı Tuzlu Kraker (4-5 adet)",
          "Ilık Papatya Çayı (1 Kupa)",
          "Taze Zencefil Dilimi (Çayın içine)"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Denge Sağlayıcı",
            "text": "Kan şekerini stabilize eder ve beyne giden vestibüler sinirleri yatıştırır."
          }
        ]
      }
    },
    "mide_bulantisi": {
      "name": "Mide Bulantısı",
      "description": "Mide Bulantısı semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Mide Bulantısı",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Zencefil Çayı",
          "category": "SAĞLIKLI",
          "description": "Zencefil Çayı tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Tuzlu Kraker",
          "category": "SAĞLIKLI",
          "description": "Tuzlu Kraker tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Haşlanmış Patates",
          "category": "SAĞLIKLI",
          "description": "Haşlanmış Patates tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Nane Çayı",
          "category": "SAĞLIKLI",
          "description": "Nane Çayı tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Kızartmalar",
          "category": "RİSKLİ",
          "description": "Kızartmalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Yoğun Baharatlı Gıdalar",
          "category": "RİSKLİ",
          "description": "Yoğun Baharatlı Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Süt Ürünleri",
          "category": "RİSKLİ",
          "description": "Süt Ürünleri semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Aşırı Şekerli Tatlılar",
          "category": "RİSKLİ",
          "description": "Aşırı Şekerli Tatlılar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Sade Haşlanmış Patates ve Limonlu Su",
        "description": "Kokusuz, yağsız ve baharatsız olması sayesinde bulantı merkezini asla tetiklemeyen mide tutucu öğün.",
        "calories": "130 kcal",
        "protein": "3g",
        "carbs": "30g",
        "sugar": "1g",
        "prepTime": "20 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Patates (1 orta boy - iyice haşlanmış)",
          "Az Tuz",
          "Limonlu Ilık Su (Yarım bardak - yudum yudum)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Bulantı Kesici",
            "text": "Mide asidini emer ve bulantı refleksini hızla bastırır."
          }
        ]
      }
    },
    "halsizlik": {
      "name": "Halsizlik",
      "description": "Halsizlik semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Halsizlik",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Yumurta",
          "category": "SAĞLIKLI",
          "description": "Yumurta tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Kinoa",
          "category": "SAĞLIKLI",
          "description": "Kinoa tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Yulaf Ezmesi",
          "category": "SAĞLIKLI",
          "description": "Yulaf Ezmesi tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Taze Meyveler",
          "category": "SAĞLIKLI",
          "description": "Taze Meyveler tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Ağır Yağlı Gıdalar",
          "category": "RİSKLİ",
          "description": "Ağır Yağlı Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Aşırı Şekerli Atıştırmalıklar",
          "category": "RİSKLİ",
          "description": "Aşırı Şekerli Atıştırmalıklar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "İşlenmiş Paketli Gıdalar",
          "category": "RİSKLİ",
          "description": "İşlenmiş Paketli Gıdalar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Enerji İçecekleri (Geçici etki)",
          "category": "RİSKLİ",
          "description": "Enerji İçecekleri (Geçici etki) semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Süper Kinoa ve Yumurta Salatası",
        "description": "Hücrelerin ATP (enerji) üretimini zirveye çıkaran tam protein ve B vitamini kompleksi.",
        "calories": "320 kcal",
        "protein": "18g",
        "carbs": "35g",
        "sugar": "3g",
        "prepTime": "15 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Haşlanmış Kinoa (1/2 bardak)",
          "Haşlanmış Yumurta (1 adet)",
          "Taze Ispanak (1 avuç)",
          "Zeytinyağı (1 yk)",
          "Limon Suyu"
        ],
        "labels": [
          {
            "type": "green",
            "title": "Yeniden Şarj",
            "text": "Yorgunluk hissini siler atar, vücudu saatlerce enerjik ve zinde tutar."
          }
        ]
      }
    },
    "mide_yanmasi": {
      "name": "Mide Yanması",
      "description": "Mide Yanması semptomlarını hafifletmek için önerilen beslenme rehberi.",
      "tag": "Mide Yanması",
      "healthImpact": {
        "description": "Yanlış besinler semptomların şiddetini ve süresini uzatabilir.",
        "score": 75,
        "level": "YÜKSEK"
      },
      "edible": [
        {
          "name": "Yulaf Ezmesi",
          "category": "SAĞLIKLI",
          "description": "Yulaf Ezmesi tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Muz",
          "category": "SAĞLIKLI",
          "description": "Muz tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Haşlanmış Sebzeler",
          "category": "SAĞLIKLI",
          "description": "Haşlanmış Sebzeler tüketimi bu durum için güvenli ve besleyicidir."
        },
        {
          "name": "Papatya Çayı",
          "category": "SAĞLIKLI",
          "description": "Papatya Çayı tüketimi bu durum için güvenli ve besleyicidir."
        }
      ],
      "avoid": [
        {
          "name": "Domates Salçası",
          "category": "RİSKLİ",
          "description": "Domates Salçası semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Nane",
          "category": "RİSKLİ",
          "description": "Nane semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Çikolata",
          "category": "RİSKLİ",
          "description": "Çikolata semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        },
        {
          "name": "Acı Baharatlar",
          "category": "RİSKLİ",
          "description": "Acı Baharatlar semptomları tetikleyebilir veya durumu kötüleştirebilir.",
          "type": "stop"
        }
      ],
      "meal": {
        "name": "Yatıştırıcı Sütlü Yulaf",
        "description": "Yemek borusundaki asit yanıklarını sıvazlayan ve mide kapakçığını koruyan alkali ağırlıklı bir rahatlama.",
        "calories": "200 kcal",
        "protein": "7g",
        "carbs": "32g",
        "sugar": "5g",
        "prepTime": "5 dk",
        "servings": "1 porsiyon",
        "ingredients": [
          "Yulaf Ezmesi (1/2 bardak)",
          "Badem veya Yulaf Sütü (1 bardak - alkali etkili)",
          "Muz (Yarım adet - ezilmiş)"
        ],
        "labels": [
          {
            "type": "blue",
            "title": "Asit Süngeri",
            "text": "Mide suyunu emer ve asidin yemek borusuna kaçmasını fiziksel olarak engeller."
          }
        ]
      }
    }
  }
};
