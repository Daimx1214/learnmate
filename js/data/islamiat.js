// Class 8 Islamic Studies content pack (base language: Hindi).
// Registered in chapter.js. Standard Class 8 Islamiat textbook content only.
// Each chapter has exactly 3 concepts; each concept has a short Hindi card
// (points + one example) and exactly 3 MCQ questions (easy, medium, hard).
// Each question has 4 options (a-d); exactly one has correct: true and no
// other fields. Every wrong option has a misconception tag and Hindi feedback.

export const ISLAMIAT_PACK_TITLE = 'कक्षा 8 इस्लामी अध्ययन';

export const ISLAMIAT_CHAPTERS = [
  {
    id: 'isl-quran-hadis',
    title: 'क़ुरआन व हदीस',
    concepts: [
      {
        id: 'isl-quran-parichay',
        title: 'क़ुरआन: परिचय और वह्य',
        keywords: ['क़ुरआन', 'वह्य', 'हिरा', 'जिबरील', 'quran', 'revelation', 'hira'],
        card: {
          points: [
            'क़ुरआन अल्लाह की आख़िरी किताब है, जो हज़रत मुहम्मद ﷺ पर नाज़िल हुई।',
            'वह्य अल्लाह का वो पैग़ाम है जो फ़रिश्ते हज़रत जिबरील के ज़रिए नबी तक पहुँचा।',
            'पहली वह्य मक्का के पास ग़ार-ए-हिरा में रमज़ान के महीने में आई। पहली आयतें सूरह अल-अलक़ की थीं, जिनका पहला लफ़्ज़ "इक़रा" (पढ़ो) था।',
            'क़ुरआन लगभग 23 सालों में थोड़ा-थोड़ा करके नाज़िल हुआ और इसमें 114 सूरतें हैं।',
          ],
          example: 'जब हम क़ुरआन पढ़ते हैं तो हमें पता चलता है कि अल्लाह ने हमें ज़िंदगी गुज़ारने का सही रास्ता बताया है, जैसे बड़े हमें सही बात सिखाते हैं।',
        },
        questions: [
          {
            id: 'isl-quran-parichay-q1',
            difficulty: 'easy',
            text: 'क़ुरआन किस पर नाज़िल हुआ?',
            options: [
              { id: 'a', text: 'हज़रत मूसा पर', correct: false, misconception: 'quran-wrong-prophet', feedback: 'हज़रत मूसा पर तौरात नाज़िल हुई थी। क़ुरआन हज़रत मुहम्मद ﷺ पर नाज़िल हुआ।' },
              { id: 'b', text: 'हज़रत मुहम्मद ﷺ पर', correct: true },
              { id: 'c', text: 'हज़रत ईसा पर', correct: false, misconception: 'quran-wrong-prophet', feedback: 'हज़रत ईसा पर इंजील नाज़िल हुई थी। क़ुरआन आख़िरी नबी हज़रत मुहम्मद ﷺ पर नाज़िल हुआ।' },
              { id: 'd', text: 'हज़रत इब्राहीम पर', correct: false, misconception: 'quran-wrong-prophet', feedback: 'हज़रत इब्राहीम पर सहीफ़े आए थे। क़ुरआन हज़रत मुहम्मद ﷺ पर नाज़िल हुआ।' },
            ],
          },
          {
            id: 'isl-quran-parichay-q2',
            difficulty: 'medium',
            text: 'पहली वह्य कहाँ और कब आई?',
            options: [
              { id: 'a', text: 'मदीना में, हिजरत के बाद', correct: false, misconception: 'wahy-place-time', feedback: 'पहली वह्य हिजरत से पहले मक्का के दौर में आई थी। उस वक़्त आप ﷺ ग़ार-ए-हिरा में इबादत करते थे।' },
              { id: 'b', text: 'ग़ार-ए-सौर में, हिजरत के सफ़र में', correct: false, misconception: 'wahy-place-time', feedback: 'ग़ार-ए-सौर में आप ﷺ हिजरत के सफ़र में रुके थे। पहली वह्य ग़ार-ए-हिरा में आई थी।' },
              { id: 'c', text: 'रमज़ान के महीने में ग़ार-ए-हिरा में', correct: true },
              { id: 'd', text: 'काबा के अंदर, पहली नमाज़ के वक़्त', correct: false, misconception: 'wahy-place-time', feedback: 'पहली वह्य काबा में नहीं, मक्का के पास पहाड़ की ग़ार-ए-हिरा में रमज़ान में आई थी।' },
            ],
          },
          {
            id: 'isl-quran-parichay-q3',
            difficulty: 'hard',
            text: 'क़ुरआन के नाज़िल होने के बारे में सही बात कौन-सी है?',
            options: [
              { id: 'a', text: 'क़ुरआन एक ही दिन में पूरा नाज़िल हो गया था', correct: false, misconception: 'wahy-all-at-once', feedback: 'क़ुरआन एक दिन में नहीं, लगभग 23 सालों में हालात के मुताबिक़ थोड़ा-थोड़ा नाज़िल हुआ।' },
              { id: 'b', text: 'क़ुरआन लगभग 23 सालों में थोड़ा-थोड़ा नाज़िल हुआ और सहाबा ने उसे लिखकर और याद करके महफ़ूज़ रखा', correct: true },
              { id: 'c', text: 'क़ुरआन सिर्फ़ सपनों में आया था', correct: false, misconception: 'wahy-only-dream', feedback: 'वह्य का सबसे बड़ा ज़रिया हज़रत जिबरील का आना था। क़ुरआन इसी तरह नाज़िल हुआ और सहाबा ने उसे लिखा भी।' },
              { id: 'd', text: 'क़ुरआन नबी ﷺ के बाद उनके साथियों की खुद लिखी हुई किताब है', correct: false, misconception: 'quran-human-made', feedback: 'क़ुरआन इंसानों की लिखी किताब नहीं, अल्लाह का कलाम है। सहाबा ने उसे लिखा ज़रूर, मगर वो अल्लाह की तरफ़ से नाज़िल हुआ था।' },
            ],
          },
        ],
      },
      {
        id: 'isl-hadis-sunnat',
        title: 'हदीस और सुन्नत',
        keywords: ['हदीस', 'सुन्नत', 'सहाबा', 'hadith', 'sunnah', 'bukhari'],
        card: {
          points: [
            'हदीस नबी-ए-करीम ﷺ के फ़रमान (बात), काम और किसी काम पर ख़ामोशी से रज़ामंदी को कहते हैं।',
            'सुन्नत नबी ﷺ के अमली तरीक़े को कहते हैं, यानी आपने ज़िंदगी कैसे गुज़ारी।',
            'हदीस क़ुरआन की तालीमात को अमल करके दिखाती है, जैसे नमाज़ का तरीक़ा हमें हदीस से मिलता है।',
            'सहीह बुख़ारी और सहीह मुस्लिम हदीस की मशहूर और भरोसेमंद किताबें हैं।',
          ],
          example: 'क़ुरआन में नमाज़ पढ़ने का हुक्म है, और नमाज़ कैसे पढ़नी है, ये तरीक़ा हमें नबी ﷺ की सुन्नत और हदीस से मिलता है।',
        },
        questions: [
          {
            id: 'isl-hadis-sunnat-q1',
            difficulty: 'easy',
            text: 'हदीस किसे कहते हैं?',
            options: [
              { id: 'a', text: 'नबी ﷺ की बात, काम और रज़ामंदी की ख़बर को', correct: true },
              { id: 'b', text: 'सिर्फ़ क़ुरआन की आयतों को', correct: false, misconception: 'hadis-quran-same', feedback: 'क़ुरआन की आयतें अल्लाह का कलाम हैं। हदीस नबी ﷺ की बातों और कामों की ख़बर है।' },
              { id: 'c', text: 'सहाबा के ख़तों को', correct: false, misconception: 'hadis-wrong-source', feedback: 'हदीस सहाबा के ख़त नहीं हैं। सहाबा ने नबी ﷺ की बातें और काम हम तक पहुँचाए, वही हदीस हैं।' },
              { id: 'd', text: 'पुराने बादशाहों की कहानियों को', correct: false, misconception: 'hadis-wrong-source', feedback: 'हदीस कहानियाँ नहीं हैं। ये नबी ﷺ के फ़रमान और अमल की सच्ची ख़बरें हैं।' },
            ],
          },
          {
            id: 'isl-hadis-sunnat-q2',
            difficulty: 'medium',
            text: 'सुन्नत का क्या मतलब है?',
            options: [
              { id: 'a', text: 'सिर्फ़ ख़ास मौक़ों के रस्म-ओ-रिवाज', correct: false, misconception: 'sunnat-custom-only', feedback: 'सुन्नत रस्में नहीं हैं। सुन्नत नबी ﷺ का पूरा अमली तरीक़ा है, जिसे हमें अपनी ज़िंदगी में अपनाना है।' },
              { id: 'b', text: 'नबी ﷺ का अमली तरीक़ा और उनकी ज़िंदगी का नमूना', correct: true },
              { id: 'c', text: 'वो काम जो करना या न करना बराबर हो', correct: false, misconception: 'sunnat-not-needed', feedback: 'सुन्नत पर अमल करना सवाब और कामयाबी का रास्ता है। इसे हल्का समझना ठीक नहीं।' },
              { id: 'd', text: 'सिर्फ़ खाने-पीने के आदाब', correct: false, misconception: 'sunnat-custom-only', feedback: 'खाने-पीने के आदाब सुन्नत का एक हिस्सा हैं, मगर सुन्नत में इबादत, अख़लाक़ और मामलात सब शामिल हैं।' },
            ],
          },
          {
            id: 'isl-hadis-sunnat-q3',
            difficulty: 'hard',
            text: 'हदीस की ज़रूरत क्यों है?',
            options: [
              { id: 'a', text: 'हदीस की ज़रूरत नहीं, तरीक़ा खुद सोच लेना चाहिए', correct: false, misconception: 'sunnat-not-needed', feedback: 'नमाज़, रोज़े और ज़कात की तफ़सील हमें हदीस से ही मिलती है। नबी ﷺ की तालीम के बग़ैर अमल मुकम्मल नहीं होता।' },
              { id: 'b', text: 'हदीस सिर्फ़ इतिहास जानने के लिए है', correct: false, misconception: 'hadis-history-only', feedback: 'हदीस सिर्फ़ इतिहास नहीं है। ये हमें बताती है कि क़ुरआन के हुक्मों पर अमल कैसे करना है।' },
              { id: 'c', text: 'हदीस क़ुरआन के हुक्मों को अमल करके दिखाती है, जैसे नमाज़ का तरीक़ा', correct: true },
              { id: 'd', text: 'हदीस क़ुरआन से अलग और ऊँची तालीम है', correct: false, misconception: 'hadis-above-quran', feedback: 'हदीस क़ुरआन से अलग तालीम नहीं है। हदीस क़ुरआन की ही तशरीह (व्याख्या) और अमली शक्ल है।' },
            ],
          },
        ],
      },
      {
        id: 'isl-tilavat-adab',
        title: 'तिलावत के आदाब',
        keywords: ['तिलावत', 'आदाब', 'वुज़ू', 'tilawat', 'adab', 'recitation'],
        card: {
          points: [
            'तिलावत से पहले वुज़ू करना और पाक-साफ़ होना चाहिए।',
            'तिलावत की शुरुआत "अऊज़ु बिल्लाह" और "बिस्मिल्लाह" से करनी चाहिए।',
            'क़ुरआन को ठहर-ठहर कर, ध्यान से और समझने की कोशिश के साथ पढ़ना चाहिए।',
            'जब कहीं तिलावत हो रही हो तो ख़ामोशी से सुनना चाहिए और क़ुरआन को साफ़ और ऊँची जगह पर रखना चाहिए।',
          ],
          example: 'जैसे हम किसी बड़े की बात ध्यान से और अदब से सुनते हैं, वैसे ही क़ुरआन की तिलावत भी अदब और ध्यान से करनी और सुननी चाहिए।',
        },
        questions: [
          {
            id: 'isl-tilavat-adab-q1',
            difficulty: 'easy',
            text: 'तिलावत शुरू करने से पहले क्या करना चाहिए?',
            options: [
              { id: 'a', text: 'सबसे बातें करके माहौल बनाना चाहिए', correct: false, misconception: 'tilavat-no-adab', feedback: 'तिलावत से पहले बातें नहीं, वुज़ू करके अदब से बैठना चाहिए और अऊज़ु बिल्लाह व बिस्मिल्लाह पढ़नी चाहिए।' },
              { id: 'b', text: 'वुज़ू करके अऊज़ु बिल्लाह और बिस्मिल्लाह पढ़नी चाहिए', correct: true },
              { id: 'c', text: 'कुछ भी ज़रूरी नहीं, जैसे चाहे पढ़ लें', correct: false, misconception: 'tilavat-no-adab', feedback: 'क़ुरआन अल्लाह का कलाम है। इसकी तिलावत के आदाब हैं: वुज़ू, अदब और ध्यान।' },
              { id: 'd', text: 'पहले खाना खाना चाहिए', correct: false, misconception: 'tilavat-no-adab', feedback: 'खाना ज़रूरी शर्त नहीं है। तिलावत के लिए पाक होना और वुज़ू करना ज़रूरी है।' },
            ],
          },
          {
            id: 'isl-tilavat-adab-q2',
            difficulty: 'medium',
            text: 'क़ुरआन कैसे पढ़ना चाहिए?',
            options: [
              { id: 'a', text: 'बहुत तेज़ी से, ताकि जल्दी ख़त्म हो जाए', correct: false, misconception: 'tilavat-fast', feedback: 'जल्दी ख़त्म करना मक़सद नहीं है। क़ुरआन को ठहर-ठहर कर और समझकर पढ़ना चाहिए।' },
              { id: 'b', text: 'सिर्फ़ ख़ास दिनों में ही पढ़ना चाहिए', correct: false, misconception: 'tilavat-special-days', feedback: 'क़ुरआन हर दिन पढ़ने के लिए है। रोज़ थोड़ा-थोड़ा पढ़ना सबसे अच्छा है।' },
              { id: 'c', text: 'ठहर-ठहर कर, ध्यान और समझने की कोशिश के साथ', correct: true },
              { id: 'd', text: 'बिना वुज़ू के छूकर पढ़ना सबसे अच्छा है', correct: false, misconception: 'tilavat-no-wudu', feedback: 'क़ुरआन को छूने और तिलावत के लिए वुज़ू करना चाहिए। पाकी तिलावत का पहला अदब है।' },
            ],
          },
          {
            id: 'isl-tilavat-adab-q3',
            difficulty: 'hard',
            text: 'जब कहीं क़ुरआन की तिलावत हो रही हो तो सुनने वालों को क्या करना चाहिए?',
            options: [
              { id: 'a', text: 'ख़ामोशी और ध्यान से सुनना चाहिए', correct: true },
              { id: 'b', text: 'अपनी बातें जारी रखनी चाहिए', correct: false, misconception: 'tilavat-talking', feedback: 'तिलावत के वक़्त बातें करना अदब के ख़िलाफ़ है। क़ुरआन ख़ामोशी से सुनने का हुक्म देता है।' },
              { id: 'c', text: 'वहाँ से उठकर चले जाना चाहिए', correct: false, misconception: 'tilavat-talking', feedback: 'तिलावत सुनना सवाब का काम है। बेवजह उठकर जाना ठीक नहीं, ध्यान से सुनना चाहिए।' },
              { id: 'd', text: 'सिर्फ़ बड़ों को सुनना चाहिए, बच्चों को नहीं', correct: false, misconception: 'tilavat-elders-only', feedback: 'तिलावत हर मुसलमान के लिए है। बच्चों को भी बचपन से क़ुरआन सुनने और पढ़ने की आदत डालनी चाहिए।' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'isl-imaniyat',
    title: 'ईमानियात',
    concepts: [
      {
        id: 'isl-tauheed',
        title: 'तौहीद',
        keywords: ['तौहीद', 'अल्लाह', 'एक', 'शिर्क', 'tauheed', 'allah', 'oneness'],
        card: {
          points: [
            'तौहीद का मतलब है: अल्लाह को एक मानना और उसकी इबादत में किसी को शरीक न करना।',
            'अल्लाह ही पैदा करने वाला, रिज़्क़ देने वाला और सारे जहान का मालिक है।',
            'अल्लाह की कोई मिसाल नहीं, न वो किसी से पैदा हुआ और न उससे कोई पैदा हुआ। यही बात सूरह इख़लास में है।',
            'तौहीद के ख़िलाफ़ शिर्क है, यानी अल्लाह के साथ किसी और को शरीक करना, जो सबसे बड़ा गुनाह है।',
          ],
          example: 'जैसे एक स्कूल का एक ही हेडमास्टर होता है, वैसे ही पूरे जहान का एक ही मालिक और हाकिम अल्लाह है।',
        },
        questions: [
          {
            id: 'isl-tauheed-q1',
            difficulty: 'easy',
            text: 'तौहीद का मतलब क्या है?',
            options: [
              { id: 'a', text: 'सिर्फ़ अल्लाह का नाम लेना', correct: false, misconception: 'tauheed-words-only', feedback: 'सिर्फ़ नाम लेना काफ़ी नहीं। तौहीद दिल से अल्लाह को एक मानना और सिर्फ़ उसी की इबादत करना है।' },
              { id: 'b', text: 'अल्लाह को एक मानना और इबादत में किसी को उसका शरीक न करना', correct: true },
              { id: 'c', text: 'सारे मज़हबों को एक जैसा मानना', correct: false, misconception: 'tauheed-all-religions', feedback: 'तौहीद का मतलब मज़हबों को मिलाना नहीं है। तौहीद अल्लाह की वहदानियत (एक होने) पर ईमान है।' },
              { id: 'd', text: 'फ़रिश्तों की इबादत करना', correct: false, misconception: 'worship-angels', feedback: 'फ़रिश्ते अल्लाह के बंदे हैं, इबादत के लायक़ नहीं। इबादत सिर्फ़ अल्लाह की होती है।' },
            ],
          },
          {
            id: 'isl-tauheed-q2',
            difficulty: 'medium',
            text: 'सूरह इख़लास में अल्लाह के बारे में क्या बताया गया है?',
            options: [
              { id: 'a', text: 'अल्लाह के बहुत से मददगार हैं', correct: false, misconception: 'allah-has-partners', feedback: 'सूरह इख़लास कहती है: अल्लाह एक है, उसे किसी की ज़रूरत नहीं और उसका कोई शरीक नहीं।' },
              { id: 'b', text: 'अल्लाह इंसान जैसी शक्ल रखता है', correct: false, misconception: 'allah-like-human', feedback: 'अल्लाह की कोई मिसाल और शक्ल इंसानों जैसी नहीं है। सूरह इख़लास में है कि उसकी कोई बराबरी नहीं।' },
              { id: 'c', text: 'अल्लाह एक है, बेनियाज़ है, न उससे कोई पैदा हुआ न वो किसी से पैदा हुआ', correct: true },
              { id: 'd', text: 'अल्लाह सिर्फ़ आसमानों का मालिक है, ज़मीन का नहीं', correct: false, misconception: 'allah-limited', feedback: 'अल्लाह सारे जहान का मालिक है, आसमानों और ज़मीन समेत हर चीज़ का।' },
            ],
          },
          {
            id: 'isl-tauheed-q3',
            difficulty: 'hard',
            text: 'शिर्क क्या है?',
            options: [
              { id: 'a', text: 'शिर्क छोटी ग़लती है जो आसानी से ठीक हो जाती है', correct: false, misconception: 'shirk-small-sin', feedback: 'शिर्क सबसे बड़ा गुनाह है, क्योंकि इसमें अल्लाह के हक़ में किसी और को शरीक किया जाता है।' },
              { id: 'b', text: 'शिर्क सिर्फ़ बुतों को सजदा करना है', correct: false, misconception: 'shirk-only-idols', feedback: 'बुत-परस्ती शिर्क की एक शक्ल है। अल्लाह के सिवा किसी को इबादत या मदद के लिए पुकारना भी शिर्क में आता है।' },
              { id: 'c', text: 'अल्लाह के साथ किसी को इबादत या ख़ुदाई में शरीक करना शिर्क है, और ये तौहीद के ख़िलाफ़ सबसे बड़ा गुनाह है', correct: true },
              { id: 'd', text: 'हर गुनाह करना ही शिर्क है', correct: false, misconception: 'every-sin-shirk', feedback: 'हर गुनाह शिर्क नहीं होता। शिर्क ख़ास तौर पर अल्लाह के साथ किसी को शरीक करना है।' },
            ],
          },
        ],
      },
      {
        id: 'isl-risalat',
        title: 'रिसालत',
        keywords: ['रिसालत', 'नबी', 'रसूल', 'ख़ातमुन्नबिय्यीन', 'risalat', 'prophet', 'messenger'],
        card: {
          points: [
            'रिसालत का मतलब है: अल्लाह ने इंसानों की रहनुमाई के लिए नबी और रसूल भेजे।',
            'पहले नबी हज़रत आदम हैं और आख़िरी नबी हज़रत मुहम्मद ﷺ हैं। आपके बाद कोई नबी नहीं आएगा, इसलिए आप ख़ातमुन्नबिय्यीन कहलाते हैं।',
            'सारे नबी एक ही पैग़ाम लाए: अल्लाह एक है, सिर्फ़ उसी की इबादत करो।',
            'नबी इंसान होते थे, जिन्हें अल्लाह ने चुना और वह्य के ज़रिए तालीम दी।',
          ],
          example: 'जैसे टीचर क्लास को सही रास्ता बताता है, वैसे ही अल्लाह ने नबियों को भेजा ताकि इंसान सही और ग़लत में फ़र्क़ सीख सकें।',
        },
        questions: [
          {
            id: 'isl-risalat-q1',
            difficulty: 'easy',
            text: 'आख़िरी नबी कौन हैं?',
            options: [
              { id: 'a', text: 'हज़रत मुहम्मद ﷺ', correct: true },
              { id: 'b', text: 'हज़रत ईसा', correct: false, misconception: 'last-prophet-wrong', feedback: 'हज़रत ईसा भी अल्लाह के रसूल हैं, मगर आख़िरी नबी हज़रत मुहम्मद ﷺ हैं।' },
              { id: 'c', text: 'हज़रत मूसा', correct: false, misconception: 'last-prophet-wrong', feedback: 'हज़रत मूसा बड़े रसूलों में से हैं। आख़िरी नबी हज़रत मुहम्मद ﷺ हैं, आपके बाद कोई नबी नहीं।' },
              { id: 'd', text: 'अभी कोई नबी आना बाक़ी है', correct: false, misconception: 'prophet-yet-to-come', feedback: 'नबियों का सिलसिला हज़रत मुहम्मद ﷺ पर ख़त्म हो गया। आप ख़ातमुन्नबिय्यीन हैं।' },
            ],
          },
          {
            id: 'isl-risalat-q2',
            difficulty: 'medium',
            text: 'सारे नबियों का बुनियादी पैग़ाम क्या था?',
            options: [
              { id: 'a', text: 'अपने-अपने क़बीले की बड़ाई', correct: false, misconception: 'prophet-message-wrong', feedback: 'नबियों का पैग़ाम क़बीले की बड़ाई नहीं था। सबने एक ही बात कही: अल्लाह एक है, उसी की इबादत करो।' },
              { id: 'b', text: 'अल्लाह एक है, सिर्फ़ उसी की इबादत करो और नेक काम करो', correct: true },
              { id: 'c', text: 'दौलत जमा करना', correct: false, misconception: 'prophet-message-wrong', feedback: 'दौलत जमा करना नबियों का पैग़ाम नहीं था। उनका पैग़ाम तौहीद और नेक ज़िंदगी था।' },
              { id: 'd', text: 'सिर्फ़ अपने दौर के रस्म-ओ-रिवाज सिखाना', correct: false, misconception: 'prophet-message-wrong', feedback: 'नबी रस्में नहीं लाए थे। वो अल्लाह का पैग़ाम लाए, जो हर दौर के इंसानों की रहनुमाई है।' },
            ],
          },
          {
            id: 'isl-risalat-q3',
            difficulty: 'hard',
            text: 'नबियों के बारे में सही बात कौन-सी है?',
            options: [
              { id: 'a', text: 'नबी फ़रिश्ते होते थे जो इंसानों में रहते थे', correct: false, misconception: 'prophet-not-human', feedback: 'नबी इंसान होते थे, फ़रिश्ते नहीं। अल्लाह ने इंसानों की रहनुमाई के लिए उन्हीं में से नबी चुने।' },
              { id: 'b', text: 'नबी बनना मेहनत से हासिल किया जा सकता है', correct: false, misconception: 'prophethood-earned', feedback: 'नबुव्वत मेहनत से नहीं मिलती। ये अल्लाह की तरफ़ से चुना जाना है, जिसे अल्लाह चाहता है वही नबी बनता है।' },
              { id: 'c', text: 'नबी अल्लाह के चुने हुए इंसान थे, जो वह्य के ज़रिए लोगों की रहनुमाई करते थे', correct: true },
              { id: 'd', text: 'हर नेक इंसान नबी हो सकता है', correct: false, misconception: 'prophethood-earned', feedback: 'नेक होना अच्छी बात है, मगर नबी वही होता है जिसे अल्लाह चुने। ये दर्जा हर नेक इंसान को नहीं मिलता।' },
            ],
          },
        ],
      },
      {
        id: 'isl-akhirah',
        title: 'फ़रिश्ते, किताबें और आख़िरत पर ईमान',
        keywords: ['फ़रिश्ते', 'किताबें', 'आख़िरत', 'क़यामत', 'angels', 'books', 'akhirah'],
        card: {
          points: [
            'फ़रिश्ते अल्लाह की मख़लूक़ हैं, जो नूर से पैदा किए गए हैं। वो हमेशा अल्लाह की इताअत करते हैं, कभी नाफ़रमानी नहीं करते।',
            'हज़रत जिबरील वह्य लाते थे और हज़रत मीकाईल बारिश और रिज़्क़ के काम पर हैं।',
            'अल्लाह ने रहनुमाई के लिए किताबें भी भेजीं: तौरात हज़रत मूसा पर, ज़बूर हज़रत दाऊद पर, इंजील हज़रत ईसा पर और क़ुरआन हज़रत मुहम्मद ﷺ पर नाज़िल हुई।',
            'आख़िरत पर ईमान का मतलब है: मौत के बाद की ज़िंदगी, क़यामत का दिन और अच्छे-बुरे आमाल का हिसाब होगा। ये ईमान हमें नेक कामों की तरफ़ ले जाता है।',
          ],
          example: 'जैसे इम्तिहान की तैयारी करने वाला छात्र मेहनत करता है, वैसे ही आख़िरत पर यक़ीन रखने वाला इंसान दुनिया में नेक काम करता है।',
        },
        questions: [
          {
            id: 'isl-akhirah-q1',
            difficulty: 'easy',
            text: 'फ़रिश्ते किस चीज़ से पैदा किए गए हैं?',
            options: [
              { id: 'a', text: 'मिट्टी से', correct: false, misconception: 'angels-creation-wrong', feedback: 'मिट्टी से इंसान पैदा किया गया। फ़रिश्ते नूर (रोशनी) से पैदा किए गए हैं।' },
              { id: 'b', text: 'आग से', correct: false, misconception: 'angels-creation-wrong', feedback: 'आग से जिन्न पैदा किए गए। फ़रिश्ते नूर से पैदा हुए हैं।' },
              { id: 'c', text: 'नूर (रोशनी) से', correct: true },
              { id: 'd', text: 'पानी से', correct: false, misconception: 'angels-creation-wrong', feedback: 'फ़रिश्ते पानी से नहीं बने। हदीस के मुताबिक़ फ़रिश्ते नूर से पैदा किए गए हैं।' },
            ],
          },
          {
            id: 'isl-akhirah-q2',
            difficulty: 'medium',
            text: 'वह्य लाने वाले फ़रिश्ते कौन हैं?',
            options: [
              { id: 'a', text: 'हज़रत मीकाईल', correct: false, misconception: 'angel-wrong-duty', feedback: 'हज़रत मीकाईल बारिश और रिज़्क़ के काम पर हैं। वह्य हज़रत जिबरील लाते थे।' },
              { id: 'b', text: 'हज़रत जिबरील', correct: true },
              { id: 'c', text: 'हज़रत इसराफ़ील', correct: false, misconception: 'angel-wrong-duty', feedback: 'हज़रत इसराफ़ील क़यामत के दिन सूर फूँकेंगे। वह्य लाने का काम हज़रत जिबरील का था।' },
              { id: 'd', text: 'मलकुल मौत', correct: false, misconception: 'angel-wrong-duty', feedback: 'मलकुल मौत रूह निकालने पर मामूर हैं। वह्य हज़रत जिबरील लाते थे।' },
            ],
          },
          {
            id: 'isl-akhirah-q3',
            difficulty: 'hard',
            text: 'आख़िरत पर ईमान का हमारी रोज़ की ज़िंदगी पर क्या असर होना चाहिए?',
            options: [
              { id: 'a', text: 'कोई असर नहीं, आख़िरत का मामला मौत के बाद का है', correct: false, misconception: 'akhirah-no-effect', feedback: 'आख़िरत पर ईमान ज़िंदगी बदल देता है। जिसे हिसाब का यक़ीन हो, वो ग़लत काम से बचता है।' },
              { id: 'b', text: 'दुनिया के सारे काम छोड़ देने चाहिए', correct: false, misconception: 'akhirah-leave-world', feedback: 'आख़िरत की तैयारी दुनिया छोड़ना नहीं है। दुनिया में रहकर नेक काम करना ही असली तैयारी है।' },
              { id: 'c', text: 'इंसान गुनाहों से बचता है और नेक कामों में आगे बढ़ता है, क्योंकि उसे हिसाब का यक़ीन है', correct: true },
              { id: 'd', text: 'सिर्फ़ बुढ़ापे में आख़िरत की फ़िक्र करनी चाहिए', correct: false, misconception: 'akhirah-old-age', feedback: 'मौत का वक़्त किसी को नहीं पता। इसलिए हर उम्र में आख़िरत की तैयारी और नेक अमल ज़रूरी है।' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'isl-ibadat',
    title: 'इबादात',
    concepts: [
      {
        id: 'isl-salah',
        title: 'नमाज़ (सलाह)',
        keywords: ['नमाज़', 'सलाह', 'वुज़ू', 'पाँच वक़्त', 'salah', 'namaz', 'prayer'],
        card: {
          points: [
            'नमाज़ इस्लाम का दूसरा सुतून (रक्न) है। हर बालिग़ मुसलमान पर दिन में पाँच वक़्त की नमाज़ फ़र्ज़ है: फ़ज्र, ज़ुहर, अस्र, मग़रिब और इशा।',
            'नमाज़ से पहले वुज़ू करना ज़रूरी है और पाक जगह व पाक कपड़े होने चाहिए।',
            'नमाज़ में क़याम (खड़े होना), रुकू (झुकना), सजदा (माथा टेकना) और आख़िर में सलाम फेरना शामिल है।',
            'नमाज़ अल्लाह से राबता है और इंसान को बुराई और बेशर्मी के कामों से रोकती है।',
          ],
          example: 'जैसे हम दिन में कई बार खाना खाकर जिस्म को ताक़त देते हैं, वैसे ही पाँच वक़्त की नमाज़ हमारी रूह को ताक़त देती है।',
        },
        questions: [
          {
            id: 'isl-salah-q1',
            difficulty: 'easy',
            text: 'दिन में कितने वक़्त की नमाज़ फ़र्ज़ है?',
            options: [
              { id: 'a', text: 'तीन वक़्त', correct: false, misconception: 'salah-count-wrong', feedback: 'फ़र्ज़ नमाज़ें पाँच वक़्त की हैं: फ़ज्र, ज़ुहर, अस्र, मग़रिब और इशा।' },
              { id: 'b', text: 'सिर्फ़ जुमे के दिन एक वक़्त', correct: false, misconception: 'salah-only-friday', feedback: 'जुमे की नमाज़ ख़ास है, मगर नमाज़ हर दिन पाँच वक़्त फ़र्ज़ है, सिर्फ़ जुमे को नहीं।' },
              { id: 'c', text: 'पाँच वक़्त', correct: true },
              { id: 'd', text: 'जब दिल चाहे तब', correct: false, misconception: 'salah-anytime-only', feedback: 'हर नमाज़ का वक़्त मुक़र्रर है। पाँचों नमाज़ें अपने वक़्त पर पढ़ना फ़र्ज़ है।' },
            ],
          },
          {
            id: 'isl-salah-q2',
            difficulty: 'medium',
            text: 'नमाज़ से पहले क्या करना ज़रूरी है?',
            options: [
              { id: 'a', text: 'वुज़ू करना और पाक होना', correct: true },
              { id: 'b', text: 'खाना खाना', correct: false, misconception: 'salah-prep-wrong', feedback: 'खाना नमाज़ की शर्त नहीं है। नमाज़ से पहले वुज़ू और पाकी ज़रूरी है।' },
              { id: 'c', text: 'नए कपड़े पहनना', correct: false, misconception: 'salah-prep-wrong', feedback: 'नए कपड़े ज़रूरी नहीं, पाक कपड़े ज़रूरी हैं। और नमाज़ से पहले वुज़ू करना फ़र्ज़ है।' },
              { id: 'd', text: 'कुछ भी ज़रूरी नहीं', correct: false, misconception: 'wudu-not-needed', feedback: 'बिना वुज़ू के नमाज़ नहीं होती। वुज़ू नमाज़ की कुंजी है।' },
            ],
          },
          {
            id: 'isl-salah-q3',
            difficulty: 'hard',
            text: 'नमाज़ की अहमियत के बारे में सही बात कौन-सी है?',
            options: [
              { id: 'a', text: 'नमाज़ सिर्फ़ बड़ों के लिए है', correct: false, misconception: 'salah-elders-only', feedback: 'नमाज़ हर बालिग़ मुसलमान पर फ़र्ज़ है। बच्चों को सात साल की उम्र से नमाज़ की आदत डालने की तालीम है।' },
              { id: 'b', text: 'मस्जिद में ही नमाज़ होती है, घर में नहीं', correct: false, misconception: 'salah-only-masjid', feedback: 'मस्जिद में जमाअत से पढ़ना अफ़ज़ल है, मगर पाक जगह पर घर में भी नमाज़ हो जाती है।' },
              { id: 'c', text: 'नमाज़ दीन का सुतून है और क़यामत के दिन सबसे पहले नमाज़ का हिसाब होगा', correct: true },
              { id: 'd', text: 'रोज़ा रखने वाले को नमाज़ की ज़रूरत नहीं', correct: false, misconception: 'ibadat-replaces-other', feedback: 'रोज़ा और नमाज़ दोनों अलग-अलग फ़र्ज़ हैं। एक इबादत दूसरी की जगह नहीं लेती।' },
            ],
          },
        ],
      },
      {
        id: 'isl-zakat',
        title: 'ज़कात',
        keywords: ['ज़कात', 'निसाब', 'ग़रीब', 'माल', 'zakat', 'nisab', 'charity'],
        card: {
          points: [
            'ज़कात इस्लाम का तीसरा सुतून है। साहिब-ए-निसाब मुसलमान पर साल में एक बार अपने माल का मुक़र्रर हिस्सा ग़रीबों को देना फ़र्ज़ है।',
            'ज़कात की रक़म आम तौर पर बचत और तिजारती माल का ढाई फ़ीसद (2.5%) होती है।',
            'निसाब का मतलब है वो कम से कम माल जिस पर ज़कात फ़र्ज़ होती है: साढ़े सात तोले सोना या साढ़े बावन तोले चाँदी के बराबर माल।',
            'ज़कात से माल पाक होता है, ग़रीबों की मदद होती है और समाज में मोहब्बत बढ़ती है।',
          ],
          example: 'जैसे पेड़ की छँटाई करने से पेड़ और अच्छा बढ़ता है, वैसे ही ज़कात देने से माल घटता नहीं, उसमें बरकत आती है और ग़रीब का पेट भरता है।',
        },
        questions: [
          {
            id: 'isl-zakat-q1',
            difficulty: 'easy',
            text: 'ज़कात किसे दी जाती है?',
            options: [
              { id: 'a', text: 'सिर्फ़ अमीर रिश्तेदारों को', correct: false, misconception: 'zakat-recipient-wrong', feedback: 'ज़कात ग़रीबों और ज़रूरतमंदों का हक़ है। अमीर को ज़कात नहीं दी जा सकती।' },
              { id: 'b', text: 'ग़रीबों, मिस्कीनों और ज़रूरतमंदों को', correct: true },
              { id: 'c', text: 'सिर्फ़ अपने दोस्तों को', correct: false, misconception: 'zakat-recipient-wrong', feedback: 'दोस्तों को तोहफ़ा दिया जा सकता है, मगर ज़कात सिर्फ़ उसके हक़दारों को मिलती है, यानी ग़रीब और ज़रूरतमंद।' },
              { id: 'd', text: 'किसी को भी, कोई शर्त नहीं', correct: false, misconception: 'zakat-anyone', feedback: 'ज़कात के हक़दार क़ुरआन में बताए गए हैं: ग़रीब, मिस्कीन और दूसरे ज़रूरतमंद।' },
            ],
          },
          {
            id: 'isl-zakat-q2',
            difficulty: 'medium',
            text: 'निसाब का क्या मतलब है?',
            options: [
              { id: 'a', text: 'ज़कात की वो रक़म जो हर मुसलमान बराबर देता है', correct: false, misconception: 'nisab-wrong', feedback: 'ज़कात सब पर बराबर नहीं होती। निसाब वो कम से कम माल है, जिससे ज़्यादा माल हो तो ज़कात फ़र्ज़ होती है।' },
              { id: 'b', text: 'रमज़ान में दिया जाने वाला खाना', correct: false, misconception: 'nisab-wrong', feedback: 'रमज़ान में खाना खिलाना नेकी है, मगर निसाब उस माल की हद को कहते हैं जिस पर ज़कात फ़र्ज़ होती है।' },
              { id: 'c', text: 'वो कम से कम माल जिस पर ज़कात फ़र्ज़ होती है', correct: true },
              { id: 'd', text: 'मस्जिद का ख़ास फ़ंड', correct: false, misconception: 'nisab-wrong', feedback: 'निसाब मस्जिद का फ़ंड नहीं है। ये माल की वो मुक़र्रर हद है जिसके मालिक पर ज़कात फ़र्ज़ होती है।' },
            ],
          },
          {
            id: 'isl-zakat-q3',
            difficulty: 'hard',
            text: 'ज़कात की दर और हिसाब के बारे में सही बात कौन-सी है?',
            options: [
              { id: 'a', text: 'ज़कात हर चीज़ पर लगती है, घर और गाड़ी समेत', correct: false, misconception: 'zakat-on-everything', feedback: 'रहने के घर और इस्तेमाल की चीज़ों पर ज़कात नहीं है। ज़कात बचत, नक़दी और तिजारती माल पर होती है।' },
              { id: 'b', text: 'बचत और तिजारती माल पर साल पूरा होने पर ढाई फ़ीसद (2.5%) ज़कात है, अगर माल निसाब के बराबर या ज़्यादा हो', correct: true },
              { id: 'c', text: 'ज़कात सिर्फ़ रमज़ान में ही दी जा सकती है', correct: false, misconception: 'zakat-ramadan-only', feedback: 'रमज़ान में ज़कात देना अफ़ज़ल है, मगर साल पूरा होने पर किसी भी महीने में दी जा सकती है।' },
              { id: 'd', text: 'ज़कात दिल चाहे जितनी भी दे दो, कोई हिसाब नहीं', correct: false, misconception: 'zakat-any-amount', feedback: 'ख़ैरात दिल खोलकर दी जाती है, मगर ज़कात का हिसाब मुक़र्रर है: निसाब पर ढाई फ़ीसद।' },
            ],
          },
        ],
      },
      {
        id: 'isl-sawm-hajj',
        title: 'रोज़ा (सौम) और हज',
        keywords: ['रोज़ा', 'रमज़ान', 'हज', 'मक्का', 'sawm', 'roza', 'hajj', 'fasting'],
        card: {
          points: [
            'रोज़ा इस्लाम का चौथा सुतून है। रमज़ान के महीने में सुब्ह सादिक़ (सहरी का वक़्त ख़त्म होने) से सूरज डूबने (इफ़्तार) तक खाना-पीना छोड़ना रोज़ा है।',
            'रोज़ा सिर्फ़ भूखा रहना नहीं है: झूठ, ग़ीबत और लड़ाई-झगड़े से भी बचना रोज़े का हिस्सा है।',
            'रोज़े से सब्र, परहेज़गारी और ग़रीबों की भूख का एहसास पैदा होता है। बीमार और मुसाफ़िर को रोज़ा बाद में रखने की रुख़्सत है।',
            'हज इस्लाम का पाँचवाँ सुतून है। जो मुसलमान ताक़त (सेहत और ख़र्च) रखता हो, उस पर ज़िंदगी में एक बार हज फ़र्ज़ है। ये ज़िलहिज्जा के महीने में मक्का में अदा होता है और 9 ज़िलहिज्जा को अरफ़ात का वुक़ूफ़ होता है।',
          ],
          example: 'रोज़ा रखकर हमें समझ आता है कि ग़रीब इंसान भूखा रहकर कैसा महसूस करता है, इसलिए रोज़ेदार इफ़्तार में दूसरों को भी खिलाता है।',
        },
        questions: [
          {
            id: 'isl-sawm-hajj-q1',
            difficulty: 'easy',
            text: 'रोज़ा किस महीने में रखा जाता है?',
            options: [
              { id: 'a', text: 'मुहर्रम में', correct: false, misconception: 'roza-month-wrong', feedback: 'मुहर्रम में ख़ास रोज़े रखे जा सकते हैं, मगर फ़र्ज़ रोज़े रमज़ान के महीने के हैं।' },
              { id: 'b', text: 'रमज़ान में', correct: true },
              { id: 'c', text: 'शाबान में', correct: false, misconception: 'roza-month-wrong', feedback: 'शाबान रमज़ान से पहले का महीना है। फ़र्ज़ रोज़े रमज़ान में होते हैं।' },
              { id: 'd', text: 'ज़िलहिज्जा में', correct: false, misconception: 'roza-month-wrong', feedback: 'ज़िलहिज्जा हज का महीना है। रोज़ों का महीना रमज़ान है।' },
            ],
          },
          {
            id: 'isl-sawm-hajj-q2',
            difficulty: 'medium',
            text: 'रोज़े की हालत में क्या करना चाहिए?',
            options: [
              { id: 'a', text: 'सिर्फ़ खाना-पीना छोड़ना काफ़ी है, बात-चीत कैसी भी हो', correct: false, misconception: 'sawm-only-food', feedback: 'रोज़ा सिर्फ़ खाने-पीने का नहीं है। झूठ, ग़ीबत और झगड़े से बचना भी रोज़े का हिस्सा है।' },
              { id: 'b', text: 'खाने-पीने के साथ झूठ, ग़ीबत और बुरे कामों से भी बचना चाहिए', correct: true },
              { id: 'c', text: 'पूरा दिन सोकर गुज़ारना चाहिए', correct: false, misconception: 'sawm-sleep-only', feedback: 'रोज़ा सोने का नाम नहीं है। रोज़ेदार को अपने आम काम और इबादत दोनों करने चाहिए।' },
              { id: 'd', text: 'सिर्फ़ पानी पीना मना है, खाना खा सकते हैं', correct: false, misconception: 'sawm-only-food', feedback: 'रोज़े में खाना और पीना दोनों छूटते हैं, सहरी के बाद से इफ़्तार तक।' },
            ],
          },
          {
            id: 'isl-sawm-hajj-q3',
            difficulty: 'hard',
            text: 'हज के बारे में सही बात कौन-सी है?',
            options: [
              { id: 'a', text: 'हज हर साल हर मुसलमान पर फ़र्ज़ है', correct: false, misconception: 'hajj-every-year', feedback: 'हज ज़िंदगी में एक बार फ़र्ज़ है, और वो भी उस पर जो जाने की ताक़त रखता हो।' },
              { id: 'b', text: 'हज साल के किसी भी महीने में हो सकता है', correct: false, misconception: 'hajj-anytime', feedback: 'हज के दिन मुक़र्रर हैं: ज़िलहिज्जा के महीने में, ख़ास तौर पर 9 ज़िलहिज्जा को अरफ़ात।' },
              { id: 'c', text: 'हज ज़िंदगी में एक बार उस मुसलमान पर फ़र्ज़ है जो सेहत और ख़र्च की ताक़त रखता हो, और ये ज़िलहिज्जा में अदा होता है', correct: true },
              { id: 'd', text: 'हज सिर्फ़ बूढ़ों के लिए है', correct: false, misconception: 'hajj-elders-only', feedback: 'हज उम्र से नहीं, ताक़त से है। जो जवान भी ख़र्च और सेहत की ताक़त रखे, उस पर भी फ़र्ज़ हो जाता है।' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'isl-seerat',
    title: 'सीरत-ए-नबवी',
    concepts: [
      {
        id: 'isl-makki-zindagi',
        title: 'मक्की ज़िंदगी',
        keywords: ['मक्का', 'सीरत', 'अमीन', 'सादिक़', 'हिरा', 'makkah', 'seerah', 'amin'],
        card: {
          points: [
            'हज़रत मुहम्मद ﷺ की पैदाइश मक्का में हुई। आप के वालिद हज़रत अब्दुल्लाह का इंतक़ाल आपकी पैदाइश से पहले हो गया था।',
            'बचपन में आपकी परवरिश दादा हज़रत अब्दुल मुत्तलिब और फिर चाचा अबू तालिब ने की।',
            'जवानी में आप अपनी सच्चाई और अमानतदारी की वजह से "सादिक़" और "अमीन" के नाम से मशहूर थे। 25 साल की उम्र में आपने हज़रत ख़दीजा से शादी की।',
            '40 साल की उम्र में ग़ार-ए-हिरा में पहली वह्य आई और नबुव्वत का आग़ाज़ हुआ। मक्का वालों ने दावत पर सख़्त तकलीफ़ें दीं, मगर आप सब्र से डटे रहे।',
          ],
          example: 'मक्का के लोग अपने क़ीमती सामान आप ﷺ के पास अमानत रखते थे, क्योंकि सब जानते थे कि आप कभी अमानत में ख़यानत नहीं करते।',
        },
        questions: [
          {
            id: 'isl-makki-zindagi-q1',
            difficulty: 'easy',
            text: 'नबी ﷺ को मक्का के लोग किन नामों से पुकारते थे?',
            options: [
              { id: 'a', text: 'सिर्फ़ उनके क़बीले के नाम से', correct: false, misconception: 'titles-wrong', feedback: 'लोग आपको सच्चाई और अमानतदारी की वजह से सादिक़ और अमीन कहते थे।' },
              { id: 'b', text: 'सादिक़ (सच्चा) और अमीन (अमानतदार)', correct: true },
              { id: 'c', text: 'बादशाह और हाकिम', correct: false, misconception: 'titles-wrong', feedback: 'आप बादशाह नहीं थे। लोग आपकी सच्चाई की वजह से आपको सादिक़ और अमीन कहते थे।' },
              { id: 'd', text: 'कोई ख़ास नाम नहीं था', correct: false, misconception: 'titles-wrong', feedback: 'आपके अख़लाक़ की वजह से मक्का में सब आपको सादिक़ और अमीन के नाम से जानते थे।' },
            ],
          },
          {
            id: 'isl-makki-zindagi-q2',
            difficulty: 'medium',
            text: 'आप ﷺ की परवरिश किन्होंने की?',
            options: [
              { id: 'a', text: 'सिर्फ़ माँ ने अकेले', correct: false, misconception: 'upbringing-wrong', feedback: 'वालिदा के इंतक़ाल के बाद दादा अब्दुल मुत्तलिब और फिर चाचा अबू तालिब ने आपकी परवरिश की।' },
              { id: 'b', text: 'पहले दादा अब्दुल मुत्तलिब ने, फिर चाचा अबू तालिब ने', correct: true },
              { id: 'c', text: 'मक्का के सरदारों ने मिलकर', correct: false, misconception: 'upbringing-wrong', feedback: 'सरदारों ने परवरिश नहीं की। ये ज़िम्मेदारी आपके दादा और फिर चाचा ने निभाई।' },
              { id: 'd', text: 'किसी रिश्तेदार ने नहीं', correct: false, misconception: 'upbringing-wrong', feedback: 'आपकी परवरिश ख़ानदान में ही हुई: पहले दादा के पास, फिर चाचा अबू तालिब के पास।' },
            ],
          },
          {
            id: 'isl-makki-zindagi-q3',
            difficulty: 'hard',
            text: 'मक्का के दौर की मुश्किलों से हमें क्या सबक़ मिलता है?',
            options: [
              { id: 'a', text: 'मुश्किल आते ही हक़ की बात छोड़ देनी चाहिए', correct: false, misconception: 'sabr-means-quit', feedback: 'आप ﷺ ने सख़्त तकलीफ़ों में भी हक़ नहीं छोड़ा। सबक़ ये है कि मुश्किल में सब्र और इस्तिक़ामत रखो।' },
              { id: 'b', text: 'बदला लेना सबसे ज़रूरी है', correct: false, misconception: 'revenge-first', feedback: 'आप ﷺ ने मक्का में बदले की बजाय सब्र और दुआ का रास्ता अपनाया।' },
              { id: 'c', text: 'सब्र और इस्तिक़ामत: मुश्किलों में भी सच और नेकी पर डटे रहना', correct: true },
              { id: 'd', text: 'तकलीफ़ देने वालों से हमेशा के लिए नफ़रत करना', correct: false, misconception: 'hatred-lesson', feedback: 'आप ﷺ ने तकलीफ़ देने वालों के लिए भी हिदायत की दुआ की। सबक़ नफ़रत नहीं, सब्र और रहम है।' },
            ],
          },
        ],
      },
      {
        id: 'isl-hijrat-madani',
        title: 'हिजरत और मदनी ज़िंदगी',
        keywords: ['हिजरत', 'मदीना', 'अंसार', 'मुहाजिर', 'मस्जिद', 'hijrah', 'madinah', 'ansar'],
        card: {
          points: [
            'हिजरत का मतलब है अल्लाह की राह में घर-बार छोड़कर दूसरी जगह जाना। नबी ﷺ अल्लाह के हुक्म से मक्का से मदीना तशरीफ़ ले गए।',
            'हिजरत से इस्लामी (हिजरी) साल की शुरुआत होती है।',
            'मदीना पहुँचकर आपने मस्जिद-ए-नबवी बनाई और मुहाजिरों (मक्का से आने वाले) और अंसार (मदीना के मददगारों) के बीच भाईचारा क़ायम किया।',
            'मदीना में आपने मीसाक़-ए-मदीना के नाम से एक मुआहदा किया, जिसमें मुसलमानों और दूसरे मज़हबों के लोगों के हक़ूक़ तय हुए।',
          ],
          example: 'अंसार ने अपने मुहाजिर भाइयों के साथ घर और खाना बाँटा। ये भाईचारा आज भी हमें दूसरों की मदद करना सिखाता है।',
        },
        questions: [
          {
            id: 'isl-hijrat-madani-q1',
            difficulty: 'easy',
            text: 'हिजरत में नबी ﷺ कहाँ से कहाँ तशरीफ़ ले गए?',
            options: [
              { id: 'a', text: 'मदीना से मक्का', correct: false, misconception: 'hijrah-direction', feedback: 'हिजरत मक्का से मदीना की तरफ़ हुई थी, उलटी तरफ़ नहीं।' },
              { id: 'b', text: 'मक्का से मदीना', correct: true },
              { id: 'c', text: 'मक्का से ताइफ़', correct: false, misconception: 'hijrah-direction', feedback: 'ताइफ़ आप दावत के लिए गए थे। हिजरत मक्का से मदीना हुई, जहाँ से हिजरी साल शुरू होता है।' },
              { id: 'd', text: 'मक्का से शाम (सीरिया)', correct: false, misconception: 'hijrah-direction', feedback: 'शाम आप बचपन में तिजारत के सफ़र में गए थे। हिजरत मदीना की तरफ़ हुई।' },
            ],
          },
          {
            id: 'isl-hijrat-madani-q2',
            difficulty: 'medium',
            text: 'अंसार किन्हें कहते हैं?',
            options: [
              { id: 'a', text: 'मक्का से आने वालों को', correct: false, misconception: 'ansar-muhajir-swap', feedback: 'मक्का से आने वाले मुहाजिर कहलाते हैं। अंसार मदीना के वो मुसलमान हैं जिन्होंने उनकी मदद की।' },
              { id: 'b', text: 'मदीना के उन मुसलमानों को जिन्होंने मुहाजिरों की मदद की', correct: true },
              { id: 'c', text: 'हज करने वालों को', correct: false, misconception: 'ansar-muhajir-swap', feedback: 'हज करने वाले हाजी कहलाते हैं। अंसार मदीना के मददगार मुसलमान थे।' },
              { id: 'd', text: 'नबी ﷺ के ख़ानदान को', correct: false, misconception: 'ansar-muhajir-swap', feedback: 'अंसार ख़ानदान नहीं, मदीना के वो लोग हैं जिन्होंने मुहाजिरों को घर और मदद दी।' },
            ],
          },
          {
            id: 'isl-hijrat-madani-q3',
            difficulty: 'hard',
            text: 'हिजरत के बारे में सही बात कौन-सी है?',
            options: [
              { id: 'a', text: 'हिजरत डरकर भागना था', correct: false, misconception: 'hijrah-escape-only', feedback: 'हिजरत डरकर भागना नहीं थी। ये अल्लाह के हुक्म और पूरी मंसूबाबंदी के साथ हुई, ताकि दीन की दावत का नया मरकज़ बने।' },
              { id: 'b', text: 'हिजरत अल्लाह के हुक्म से हुई और इससे हिजरी साल की शुरुआत होती है', correct: true },
              { id: 'c', text: 'हिजरत के बाद मक्का से कोई राबता न रहा', correct: false, misconception: 'hijrah-cut-ties', feedback: 'हिजरत के बाद भी मक्का वालों से मामलात रहे और बाद में मक्का फ़तह हुआ। हिजरत राबता तोड़ना नहीं थी।' },
              { id: 'd', text: 'हिजरत सिर्फ़ कुछ दिनों का सफ़र था जिसका कोई असर न पड़ा', correct: false, misconception: 'hijrah-no-effect', feedback: 'हिजरत इस्लामी तारीख़ का सबसे बड़ा मोड़ है। मदीना में पहला इस्लामी मुआशरा क़ायम हुआ।' },
            ],
          },
        ],
      },
      {
        id: 'isl-seerat-sabaq',
        title: 'सीरत से सबक़',
        keywords: ['सीरत', 'सब्र', 'सच्चाई', 'रहम', 'सबक़', 'seerah', 'lessons', 'mercy'],
        card: {
          points: [
            'सीरत पढ़ने का मक़सद सिर्फ़ वाक़ियात याद करना नहीं, बल्कि उनसे सबक़ लेकर अपनी ज़िंदगी में उतारना है।',
            'सब्र: आप ﷺ ने मक्का की सख़्त तकलीफ़ों और ताइफ़ के बुरे सुलूक पर भी सब्र किया और बददुआ नहीं दी।',
            'सच्चाई और अमानत: आप हमेशा सच बोलते थे और अमानतें वापस करते थे, यहाँ तक कि हिजरत की रात भी लोगों की अमानतें लौटाने का बंदोबस्त करके गए।',
            'रहम और माफ़ी: फ़तहे मक्का के वक़्त आपने उन लोगों को भी आम माफ़ी दे दी जिन्होंने आपको बहुत तकलीफ़ें दी थीं।',
          ],
          example: 'इम्तिहान में फ़ेल होने पर घबराने की बजाय सब्र से दोबारा मेहनत करना सीरत से लिया गया सबक़ है।',
        },
        questions: [
          {
            id: 'isl-seerat-sabaq-q1',
            difficulty: 'easy',
            text: 'फ़तहे मक्का के वक़्त नबी ﷺ ने दुश्मनों के साथ क्या सुलूक किया?',
            options: [
              { id: 'a', text: 'सबसे बदला लिया', correct: false, misconception: 'revenge-first', feedback: 'आप ﷺ ने बदला नहीं लिया। फ़तहे मक्का पर आपने आम माफ़ी का एलान किया।' },
              { id: 'b', text: 'आम माफ़ी दे दी, हालाँकि उन्होंने बहुत तकलीफ़ें दी थीं', correct: true },
              { id: 'c', text: 'सबको शहर से निकाल दिया', correct: false, misconception: 'revenge-first', feedback: 'आप ﷺ ने किसी को नहीं निकाला। आपने रहम दिखाते हुए सबको माफ़ कर दिया।' },
              { id: 'd', text: 'कुछ नहीं कहा', correct: false, misconception: 'fatah-silent', feedback: 'आप ﷺ ने वाज़ेह एलान किया था कि आज कोई बदला नहीं, सब माफ़ हैं। यही रहम का सबक़ है।' },
            ],
          },
          {
            id: 'isl-seerat-sabaq-q2',
            difficulty: 'medium',
            text: 'हिजरत की रात अमानतों के बारे में आप ﷺ ने क्या किया?',
            options: [
              { id: 'a', text: 'अमानतें साथ लेकर चले गए', correct: false, misconception: 'amanat-kept', feedback: 'आप ﷺ अमानतें साथ नहीं ले गए। आपने हज़रत अली को मक्का में ठहराया ताकि सबकी अमानतें वापस हो जाएँ।' },
              { id: 'b', text: 'हज़रत अली को ठहराया ताकि लोगों की अमानतें उन्हें वापस मिल जाएँ', correct: true },
              { id: 'c', text: 'अमानतें मदीना भिजवा दीं', correct: false, misconception: 'amanat-kept', feedback: 'अमानतें उनके मालिकों को मक्का में ही वापस की गईं। यही अमानतदारी का सबसे बड़ा सबूत है।' },
              { id: 'd', text: 'अमानतों का कोई बंदोबस्त नहीं हुआ', correct: false, misconception: 'amanat-kept', feedback: 'बंदोबस्त हुआ था। मुश्किल हालात में भी आप ﷺ ने अमानतों की वापसी को ज़रूरी समझा।' },
            ],
          },
          {
            id: 'isl-seerat-sabaq-q3',
            difficulty: 'hard',
            text: 'सीरत पढ़ने का असली फ़ायदा क्या है?',
            options: [
              { id: 'a', text: 'सिर्फ़ तारीख़ें और वाक़ियात याद करना', correct: false, misconception: 'seerat-dates-only', feedback: 'तारीख़ें याद करना ही काफ़ी नहीं। असली फ़ायदा ये है कि हम उन वाक़ियात से सबक़ लेकर अपनी ज़िंदगी बदलें।' },
              { id: 'b', text: 'दूसरों को सुनाकर इज़्ज़त कमाना', correct: false, misconception: 'seerat-show-off', feedback: 'सीरत इल्म दिखाने के लिए नहीं है। इसका मक़सद अमल है: सब्र, सच्चाई और रहम अपनाना।' },
              { id: 'c', text: 'सब्र, सच्चाई, अमानत और रहम जैसे सबक़ अपनी ज़िंदगी में अपनाना', correct: true },
              { id: 'd', text: 'सिर्फ़ इम्तिहान में नंबर लेना', correct: false, misconception: 'seerat-dates-only', feedback: 'इम्तिहान एक मक़सद हो सकता है, मगर सीरत का असली मक़सद ज़िंदगी में अमल करना है।' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'isl-akhlaq',
    title: 'अख़लाक़ व मामलात',
    concepts: [
      {
        id: 'isl-sach-amanat',
        title: 'सच और अमानत',
        keywords: ['सच', 'अमानत', 'झूठ', 'वादा', 'truth', 'amanat', 'honesty'],
        card: {
          points: [
            'सच बोलना हर हाल में ज़रूरी है, चाहे बात अपने ख़िलाफ़ ही क्यों न जाए।',
            'झूठ बोलना बुरा अमल है और हदीस में झूठ को मुनाफ़िक़ की निशानियों में से एक बताया गया है।',
            'अमानत का मतलब है: किसी की सौंपी हुई चीज़, पैसा या राज़ की हिफ़ाज़त करना और उसे वापस करना।',
            'वादा पूरा करना और काम को ईमानदारी से करना भी अमानत है। तालिब इल्म की अमानत उसकी पढ़ाई है।',
          ],
          example: 'दुकानदार अगर ग़लती से ज़्यादा पैसे दे दे तो उन्हें वापस करना अमानतदारी है, चाहे कोई देख न रहा हो।',
        },
        questions: [
          {
            id: 'isl-sach-amanat-q1',
            difficulty: 'easy',
            text: 'अमानत का क्या मतलब है?',
            options: [
              { id: 'a', text: 'सौंपी हुई चीज़ या राज़ की हिफ़ाज़त करना और वापस करना', correct: true },
              { id: 'b', text: 'किसी की चीज़ अपने पास रख लेना', correct: false, misconception: 'amanat-meaning-wrong', feedback: 'चीज़ रख लेना ख़यानत है। अमानत का मतलब है हिफ़ाज़त करके मालिक को वापस करना।' },
              { id: 'c', text: 'सिर्फ़ पैसे जमा करना', correct: false, misconception: 'amanat-only-money', feedback: 'अमानत सिर्फ़ पैसे की नहीं होती। राज़, वादा और सौंपा हुआ काम भी अमानत है।' },
              { id: 'd', text: 'उधार लेना', correct: false, misconception: 'amanat-meaning-wrong', feedback: 'उधार अलग चीज़ है। अमानत वो है जो कोई आप पर भरोसा करके आपके पास रखे।' },
            ],
          },
          {
            id: 'isl-sach-amanat-q2',
            difficulty: 'medium',
            text: 'झूठ के बारे में हदीस की तालीम क्या है?',
            options: [
              { id: 'a', text: 'छोटा झूठ जायज़ है', correct: false, misconception: 'small-lie-ok', feedback: 'झूठ छोटा हो या बड़ा, बुरा है। मज़ाक़ में भी झूठ बोलने से बचना चाहिए।' },
              { id: 'b', text: 'झूठ मुनाफ़िक़ की निशानियों में से है और सच निजात (भलाई) की तरफ़ ले जाता है', correct: true },
              { id: 'c', text: 'झूठ सिर्फ़ बड़ों के सामने बुरा है', correct: false, misconception: 'lie-only-elders', feedback: 'झूठ हर जगह बुरा है, चाहे कोई देखे या न देखे। अल्लाह सब देखता है।' },
              { id: 'd', text: 'अपना फ़ायदा हो तो झूठ चलता है', correct: false, misconception: 'lie-for-benefit', feedback: 'फ़ायदे के लिए झूठ बोलना भी हराम है। सच का फ़ायदा हमेशा देर पाएदार होता है।' },
            ],
          },
          {
            id: 'isl-sach-amanat-q3',
            difficulty: 'hard',
            text: 'इनमें से कौन-सी बात अमानत में शामिल है?',
            options: [
              { id: 'a', text: 'सिर्फ़ बैंक में रखा पैसा', correct: false, misconception: 'amanat-only-money', feedback: 'अमानत का दायरा बड़ा है: वादा, राज़ और सौंपा हुआ काम भी अमानत है, सिर्फ़ पैसा नहीं।' },
              { id: 'b', text: 'दोस्त का राज़ दूसरों को बताना', correct: false, misconception: 'amanat-secret-leak', feedback: 'राज़ बताना अमानत में ख़यानत है। अमानत का मतलब ही राज़ की हिफ़ाज़त है।' },
              { id: 'c', text: 'वादा पूरा करना, राज़ छुपाना और सौंपा काम ईमानदारी से करना', correct: true },
              { id: 'd', text: 'अमानत सिर्फ़ बड़ों पर लागू होती है', correct: false, misconception: 'amanat-elders-only', feedback: 'अमानत हर उम्र के इंसान पर लागू होती है। बच्चे की अमानत उसकी पढ़ाई और घर वालों का भरोसा है।' },
            ],
          },
        ],
      },
      {
        id: 'isl-walidain-padosi',
        title: 'माता-पिता और पड़ोसियों के हुक़ूक़',
        keywords: ['माता-पिता', 'वालिदैन', 'पड़ोसी', 'हुक़ूक़', 'parents', 'neighbours', 'rights'],
        card: {
          points: [
            'अल्लाह के बाद सबसे ज़्यादा हक़ माता-पिता का है। क़ुरआन में हुक्म है कि उन्हें "उफ़" तक न कहा जाए और हमेशा नरमी से बात की जाए।',
            'माँ का दर्जा ख़ास तौर पर ऊँचा है: एक सहाबी के पूछने पर नबी ﷺ ने तीन बार माँ का नाम लिया, फिर बाप का।',
            'पड़ोसी के हक़ूक़ की ताकीद इतनी ज़्यादा आई कि नबी ﷺ ने फ़रमाया: जिबरील मुझे पड़ोसी के बारे में इतनी वसीयत करते रहे कि मुझे लगा पड़ोसी वारिस बना दिया जाएगा।',
            'पड़ोसी का हक़ सिर्फ़ मुसलमान पड़ोसी तक नहीं है: हर पड़ोसी को तकलीफ़ से बचाना और उसकी ख़ुशी-ग़म में शरीक होना चाहिए।',
          ],
          example: 'घर में अच्छी चीज़ पके तो पड़ोसी के घर भी एक कटोरी भेजना, और बीमार पड़ोसी की ख़बर लेना, पड़ोसी के हक़ की मिसाल है।',
        },
        questions: [
          {
            id: 'isl-walidain-padosi-q1',
            difficulty: 'easy',
            text: 'माता-पिता के साथ बर्ताव के बारे में क़ुरआन का हुक्म क्या है?',
            options: [
              { id: 'a', text: 'सिर्फ़ त्योहारों पर ख़्याल रखना', correct: false, misconception: 'parents-festivals-only', feedback: 'माता-पिता का हक़ हर रोज़ का है। क़ुरआन उन्हें उफ़ तक कहने से मना करता है।' },
              { id: 'b', text: 'उन्हें "उफ़" तक न कहें और हमेशा नरमी व इज़्ज़त से बात करें', correct: true },
              { id: 'c', text: 'सिर्फ़ माँ की ख़िदमत करें, बाप की नहीं', correct: false, misconception: 'parents-mother-only', feedback: 'माँ का दर्जा बहुत ऊँचा है, मगर बाप का हक़ भी है। दोनों की ख़िदमत और इज़्ज़त ज़रूरी है।' },
              { id: 'd', text: 'जब बड़े हो जाएँ तभी ख़िदमत करें', correct: false, misconception: 'parents-when-grown', feedback: 'माता-पिता की ख़िदमत हर उम्र में है, ख़ास तौर पर उनके बुढ़ापे में इसका और ज़्यादा हक़ है।' },
            ],
          },
          {
            id: 'isl-walidain-padosi-q2',
            difficulty: 'medium',
            text: 'पड़ोसी के बारे में नबी ﷺ ने क्या फ़रमाया?',
            options: [
              { id: 'a', text: 'पड़ोसी से कोई ताल्लुक़ न रखें', correct: false, misconception: 'neighbour-no-relation', feedback: 'इस्लाम पड़ोसी से अच्छा ताल्लुक़ सिखाता है। नबी ﷺ ने पड़ोसी के हक़ की बहुत ताकीद की।' },
              { id: 'b', text: 'सिर्फ़ मुसलमान पड़ोसी का हक़ है', correct: false, misconception: 'neighbour-only-muslim', feedback: 'पड़ोसी का हक़ हर पड़ोसी का है, चाहे वो किसी भी मज़हब का हो। उसे तकलीफ़ देना मना है।' },
              { id: 'c', text: 'जिबरील ने पड़ोसी के हक़ की इतनी ताकीद की कि लगा पड़ोसी वारिस बना दिया जाएगा', correct: true },
              { id: 'd', text: 'पड़ोसी सिर्फ़ रिश्तेदार हो तो हक़ है', correct: false, misconception: 'neighbour-only-relative', feedback: 'पड़ोसी का हक़ रिश्तेदारी से नहीं, पड़ोस से है। हर क़रीबी पड़ोसी का हक़ है।' },
            ],
          },
          {
            id: 'isl-walidain-padosi-q3',
            difficulty: 'hard',
            text: 'किसी ग़ैर-मुस्लिम पड़ोसी के बीमार होने पर सही बर्ताव क्या है?',
            options: [
              { id: 'a', text: 'उससे कोई लेना-देना नहीं रखना चाहिए', correct: false, misconception: 'neighbour-only-muslim', feedback: 'मज़हब अलग होने से पड़ोसी का हक़ ख़त्म नहीं होता। बीमार की ख़बर लेना अख़लाक़ का हिस्सा है।' },
              { id: 'b', text: 'उसकी ख़बर लेनी चाहिए और ज़रूरत पर मदद करनी चाहिए', correct: true },
              { id: 'c', text: 'सिर्फ़ अपने मज़हब वालों की मदद करें', correct: false, misconception: 'help-only-own-faith', feedback: 'मदद और अच्छा बर्ताव हर इंसान के लिए है। नबी ﷺ सबके साथ रहम का बर्ताव करते थे।' },
              { id: 'd', text: 'उसे तकलीफ़ देना जायज़ है', correct: false, misconception: 'neighbour-harm-ok', feedback: 'किसी को भी तकलीफ़ देना जायज़ नहीं। हदीस है कि वो मोमिन नहीं जिसका पड़ोसी उसकी तकलीफ़ से महफ़ूज़ न हो।' },
            ],
          },
        ],
      },
      {
        id: 'isl-tijarat-safai',
        title: 'व्यापार में ईमानदारी और सफ़ाई',
        keywords: ['व्यापार', 'ईमानदारी', 'नाप-तोल', 'सफ़ाई', 'trade', 'cleanliness', 'honesty'],
        card: {
          points: [
            'सच्चा और अमानतदार व्यापारी क़यामत के दिन नबियों, सिद्दीक़ों और शहीदों के साथ होगा — ये हदीस की बशारत है।',
            'नाप-तोल में कमी करना गुनाह है। क़ुरआन ने नाप-तोल में कमी करने वालों के लिए सख़्त वईद (चेतावनी) दी है।',
            'चीज़ का ऐब (ख़राबी) छुपाकर बेचना धोखा है। ख़रीदार को सच बताना ईमानदारी है, और झूठी क़सम खाकर माल बेचना भी मना है।',
            'सफ़ाई ईमान का हिस्सा है: हदीस में है कि पाकी (सफ़ाई) आधा ईमान है। जिस्म, कपड़े, घर और गली-मोहल्ले को साफ़ रखना हर मुसलमान की ज़िम्मेदारी है।',
          ],
          example: 'सब्ज़ी वाला अगर ख़राब सब्ज़ी ऊपर अच्छी सब्ज़ी के नीचे छुपाए तो ये धोखा है। ईमानदार दुकानदार ख़राब चीज़ अलग करके बताकर बेचता है।',
        },
        questions: [
          {
            id: 'isl-tijarat-safai-q1',
            difficulty: 'easy',
            text: 'हदीस के मुताबिक़ सच्चा और अमानतदार व्यापारी किसके साथ होगा?',
            options: [
              { id: 'a', text: 'अमीरों के साथ', correct: false, misconception: 'trader-reward-wrong', feedback: 'हदीस में सच्चे अमानतदार व्यापारी के लिए नबियों, सिद्दीक़ों और शहीदों की सोहबत की बशारत है।' },
              { id: 'b', text: 'नबियों, सिद्दीक़ों और शहीदों के साथ', correct: true },
              { id: 'c', text: 'सिर्फ़ अपने दोस्तों के साथ', correct: false, misconception: 'trader-reward-wrong', feedback: 'ये बशारत दोस्तों की नहीं है। ईमानदार व्यापारी का दर्जा बहुत ऊँचा बताया गया है।' },
              { id: 'd', text: 'किसी ख़ास दर्जे का वादा नहीं है', correct: false, misconception: 'trader-reward-wrong', feedback: 'वादा मौजूद है: सच्चा अमानतदार व्यापारी नबियों और शहीदों के साथ होगा। इसलिए व्यापार में ईमानदारी बहुत बड़ी नेकी है।' },
            ],
          },
          {
            id: 'isl-tijarat-safai-q2',
            difficulty: 'medium',
            text: 'नाप-तोल के बारे में क़ुरआन की तालीम क्या है?',
            options: [
              { id: 'a', text: 'थोड़ी कमी चलती है, सब करते हैं', correct: false, misconception: 'measure-short-ok', feedback: 'नाप-तोल में कमी हर हाल में गुनाह है। क़ुरआन ने इसकी सख़्त मज़म्मत की है।' },
              { id: 'b', text: 'सिर्फ़ बड़े व्यापारियों पर लागू है', correct: false, misconception: 'measure-big-only', feedback: 'हुक्म हर बेचने वाले पर है, छोटा हो या बड़ा। तराज़ू में कमी करना धोखा है।' },
              { id: 'c', text: 'नाप-तोल पूरी और ठीक रखनी चाहिए, कमी करना सख़्त गुनाह है', correct: true },
              { id: 'd', text: 'नाप-तोल का हिसाब ख़रीदार खुद रखे', correct: false, misconception: 'measure-buyer-duty', feedback: 'ठीक नापना बेचने वाले की ज़िम्मेदारी है। ख़रीदार पर बोझ डालना ईमानदारी नहीं।' },
            ],
          },
          {
            id: 'isl-tijarat-safai-q3',
            difficulty: 'hard',
            text: '"सफ़ाई आधा ईमान है" — इस हदीस का मतलब क्या है?',
            options: [
              { id: 'a', text: 'सफ़ाई का ईमान से कोई ताल्लुक़ नहीं, ये सिर्फ़ आदत है', correct: false, misconception: 'cleanliness-not-faith', feedback: 'हदीस सफ़ाई को ईमान का हिस्सा बताती है। पाकी सिर्फ़ आदत नहीं, दीन की तालीम है।' },
              { id: 'b', text: 'पाकी और सफ़ाई दीन का अहम हिस्सा है: जिस्म, कपड़े और माहौल साफ़ रखना ईमान की निशानी है', correct: true },
              { id: 'c', text: 'सिर्फ़ नमाज़ के वक़्त साफ़ होना काफ़ी है', correct: false, misconception: 'clean-only-prayer', feedback: 'नमाज़ के लिए पाकी ज़रूरी है, मगर सफ़ाई हर वक़्त की आदत होनी चाहिए: घर, गली और मोहल्ला भी।' },
              { id: 'd', text: 'सफ़ाई सिर्फ़ अमीरों के लिए मुमकिन है', correct: false, misconception: 'clean-rich-only', feedback: 'सफ़ाई दौलत से नहीं, आदत से होती है। पानी और थोड़ी मेहनत से हर कोई अपना माहौल साफ़ रख सकता है।' },
            ],
          },
        ],
      },
    ],
  },
];

export const ISLAMIAT_MISCONCEPTIONS = {
  'quran-wrong-prophet': { label: 'क़ुरआन किस नबी पर नाज़िल हुआ, इसमें ग़लती' },
  'wahy-place-time': { label: 'पहली वह्य की जगह और वक़्त में ग़लती' },
  'wahy-all-at-once': { label: 'क़ुरआन एक साथ नाज़िल होने का ख़्याल' },
  'wahy-only-dream': { label: 'वह्य को सिर्फ़ सपना समझना' },
  'quran-human-made': { label: 'क़ुरआन को इंसान की लिखी किताब समझना' },
  'hadis-quran-same': { label: 'हदीस और क़ुरआन को एक समझना' },
  'hadis-wrong-source': { label: 'हदीस का ग़लत ज़रिया समझना' },
  'sunnat-custom-only': { label: 'सुन्नत को सिर्फ़ रस्म समझना' },
  'sunnat-not-needed': { label: 'सुन्नत को ज़रूरी न समझना' },
  'hadis-history-only': { label: 'हदीस को सिर्फ़ इतिहास समझना' },
  'hadis-above-quran': { label: 'हदीस को क़ुरआन से अलग समझना' },
  'tilavat-no-adab': { label: 'तिलावत के आदाब को ज़रूरी न समझना' },
  'tilavat-fast': { label: 'तिलावत में जल्दबाज़ी ठीक समझना' },
  'tilavat-no-wudu': { label: 'बिना वुज़ू तिलावत ठीक समझना' },
  'tilavat-special-days': { label: 'तिलावत सिर्फ़ ख़ास दिनों में समझना' },
  'tilavat-talking': { label: 'तिलावत के वक़्त बातें ठीक समझना' },
  'tilavat-elders-only': { label: 'तिलावत सिर्फ़ बड़ों के लिए समझना' },
  'tauheed-words-only': { label: 'तौहीद को सिर्फ़ ज़बान की बात समझना' },
  'tauheed-all-religions': { label: 'तौहीद का ग़लत मतलब लेना' },
  'worship-angels': { label: 'फ़रिश्तों की इबादत ठीक समझना' },
  'allah-has-partners': { label: 'अल्लाह का शरीक समझना' },
  'allah-like-human': { label: 'अल्लाह को इंसान जैसा समझना' },
  'allah-limited': { label: 'अल्लाह की मालिकियत को महदूद समझना' },
  'shirk-small-sin': { label: 'शिर्क को छोटा गुनाह समझना' },
  'shirk-only-idols': { label: 'शिर्क को सिर्फ़ बुत-परस्ती समझना' },
  'every-sin-shirk': { label: 'हर गुनाह को शिर्क समझना' },
  'last-prophet-wrong': { label: 'आख़िरी नबी के बारे में ग़लती' },
  'prophet-yet-to-come': { label: 'अभी नबी आने का इंतज़ार समझना' },
  'prophet-message-wrong': { label: 'नबियों का पैग़ाम ग़लत समझना' },
  'prophet-not-human': { label: 'नबी को फ़रिश्ता समझना' },
  'prophethood-earned': { label: 'नबुव्वत को मेहनत से मिलने वाली चीज़ समझना' },
  'angels-creation-wrong': { label: 'फ़रिश्तों की पैदाइश के बारे में ग़लती' },
  'angel-wrong-duty': { label: 'फ़रिश्तों के कामों में ग़लती' },
  'akhirah-no-effect': { label: 'आख़िरत के ईमान को बेअसर समझना' },
  'akhirah-leave-world': { label: 'आख़िरत के लिए दुनिया छोड़ना ज़रूरी समझना' },
  'akhirah-old-age': { label: 'आख़िरत की तैयारी बुढ़ापे पर टालना' },
  'salah-count-wrong': { label: 'फ़र्ज़ नमाज़ों की तादाद में ग़लती' },
  'salah-only-friday': { label: 'नमाज़ को सिर्फ़ जुमे की समझना' },
  'salah-anytime-only': { label: 'नमाज़ का वक़्त मुक़र्रर न समझना' },
  'salah-prep-wrong': { label: 'नमाज़ की तैयारी में ग़लती' },
  'wudu-not-needed': { label: 'वुज़ू को ज़रूरी न समझना' },
  'salah-elders-only': { label: 'नमाज़ सिर्फ़ बड़ों के लिए समझना' },
  'salah-only-masjid': { label: 'नमाज़ सिर्फ़ मस्जिद में समझना' },
  'ibadat-replaces-other': { label: 'एक इबादत को दूसरी की जगह समझना' },
  'zakat-recipient-wrong': { label: 'ज़कात के हक़दार के बारे में ग़लती' },
  'zakat-anyone': { label: 'ज़कात किसी को भी दे देना ठीक समझना' },
  'nisab-wrong': { label: 'निसाब का मतलब ग़लत समझना' },
  'zakat-on-everything': { label: 'ज़कात हर चीज़ पर समझना' },
  'zakat-ramadan-only': { label: 'ज़कात सिर्फ़ रमज़ान में समझना' },
  'zakat-any-amount': { label: 'ज़कात का कोई हिसाब न समझना' },
  'roza-month-wrong': { label: 'रोज़ों के महीने में ग़लती' },
  'sawm-only-food': { label: 'रोज़ा सिर्फ़ खाना छोड़ना समझना' },
  'sawm-sleep-only': { label: 'रोज़ा सोकर गुज़ारना ठीक समझना' },
  'hajj-every-year': { label: 'हज हर साल फ़र्ज़ समझना' },
  'hajj-anytime': { label: 'हज किसी भी वक़्त हो सकता है, ये समझना' },
  'hajj-elders-only': { label: 'हज सिर्फ़ बूढ़ों के लिए समझना' },
  'titles-wrong': { label: 'नबी ﷺ के अलक़ाब के बारे में ग़लती' },
  'upbringing-wrong': { label: 'नबी ﷺ की परवरिश के बारे में ग़लती' },
  'sabr-means-quit': { label: 'सब्र को हक़ छोड़ देना समझना' },
  'revenge-first': { label: 'बदले को सबसे पहले समझना' },
  'hatred-lesson': { label: 'सीरत से नफ़रत का सबक़ लेना' },
  'hijrah-direction': { label: 'हिजरत की दिशा में ग़लती' },
  'ansar-muhajir-swap': { label: 'अंसार और मुहाजिर में उलट-पुलट करना' },
  'hijrah-escape-only': { label: 'हिजरत को सिर्फ़ भागना समझना' },
  'hijrah-cut-ties': { label: 'हिजरत को राबता तोड़ना समझना' },
  'hijrah-no-effect': { label: 'हिजरत को बेअसर समझना' },
  'fatah-silent': { label: 'फ़तहे मक्का पर माफ़ी का एलान न हुआ, ये समझना' },
  'amanat-kept': { label: 'अमानत रख लेने को ठीक समझना' },
  'seerat-dates-only': { label: 'सीरत को सिर्फ़ तारीख़ें समझना' },
  'seerat-show-off': { label: 'सीरत का इल्म दिखावे के लिए समझना' },
  'amanat-meaning-wrong': { label: 'अमानत का मतलब ग़लत समझना' },
  'amanat-only-money': { label: 'अमानत को सिर्फ़ पैसे की समझना' },
  'amanat-secret-leak': { label: 'राज़ खोलना ठीक समझना' },
  'amanat-elders-only': { label: 'अमानत सिर्फ़ बड़ों पर समझना' },
  'small-lie-ok': { label: 'छोटा झूठ ठीक समझना' },
  'lie-only-elders': { label: 'झूठ सिर्फ़ बड़ों के सामने बुरा समझना' },
  'lie-for-benefit': { label: 'फ़ायदे के लिए झूठ ठीक समझना' },
  'parents-festivals-only': { label: 'माता-पिता का हक़ सिर्फ़ ख़ास दिनों में समझना' },
  'parents-mother-only': { label: 'सिर्फ़ माँ का हक़ समझना' },
  'parents-when-grown': { label: 'माता-पिता की ख़िदमत बड़े होने पर टालना' },
  'neighbour-no-relation': { label: 'पड़ोसी से ताल्लुक़ न रखना ठीक समझना' },
  'neighbour-only-muslim': { label: 'पड़ोसी का हक़ सिर्फ़ मुसलमान का समझना' },
  'neighbour-only-relative': { label: 'पड़ोसी का हक़ सिर्फ़ रिश्तेदार का समझना' },
  'neighbour-harm-ok': { label: 'पड़ोसी को तकलीफ़ देना ठीक समझना' },
  'help-only-own-faith': { label: 'मदद सिर्फ़ अपने मज़हब वालों की समझना' },
  'trader-reward-wrong': { label: 'ईमानदार व्यापारी के दर्जे में ग़लती' },
  'measure-short-ok': { label: 'नाप-तोल में कमी ठीक समझना' },
  'measure-big-only': { label: 'नाप-तोल का हुक्म सिर्फ़ बड़े व्यापारियों पर समझना' },
  'measure-buyer-duty': { label: 'नाप की ज़िम्मेदारी ख़रीदार पर डालना' },
  'cleanliness-not-faith': { label: 'सफ़ाई को ईमान से अलग समझना' },
  'clean-only-prayer': { label: 'सफ़ाई सिर्फ़ नमाज़ के वक़्त समझना' },
  'clean-rich-only': { label: 'सफ़ाई सिर्फ़ अमीरों के लिए समझना' },
};
