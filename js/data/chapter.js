// Saathi content file: the ONLY editable content file.
// CHAPTER holds the chapter id, subject, class, title and an ordered list of concepts.
// Each concept has a short Hindi card (points + one example) and exactly 3 MCQ questions.
// Each question has 4 options (a-d); exactly one has correct: true and no other fields.
// Each question also has difficulty: 'easy' | 'medium' | 'hard' (used by pickNextQuestion in js/mastery.js).
// Every wrong option has a misconception tag (a key of MISCONCEPTIONS) and Hindi feedback.
// MISCONCEPTIONS maps each tag to a short Hindi label naming the mistake.

export const CHAPTER = {
  id: 'sci8-bal-dab',
  subject: 'विज्ञान',
  classLevel: 8,
  title: 'बल और दाब',
  concepts: [
    {
      id: 'bal-kya-hai',
      title: 'बल क्या है',
      keywords: ['बल', 'धक्का', 'खिंचाव', 'force', 'push', 'pull'],
      card: {
        points: [
          'बल एक धक्का या खिंचाव है।',
          'बल से रुकी वस्तु चल सकती है, और चलती वस्तु रुक, धीमी या मुड़ सकती है।',
          'बल से वस्तु का आकार भी बदल सकता है।',
        ],
        example: 'फुटबॉल को लात मारना एक धक्का है, जिससे फुटबॉल चल पड़ती है।',
      },
      questions: [
        {
          id: 'bal-kya-hai-q1',
          difficulty: 'easy',
          text: 'बल क्या है?',
          options: [
            { id: 'a', text: 'केवल धक्का देना ही बल है', correct: false, misconception: 'push-is-always-force', feedback: 'खिंचाव भी बल है। कुएँ से रस्सी खींचकर बाल्टी निकालना भी बल लगाना है।' },
            { id: 'b', text: 'धक्का या खिंचाव, जो वस्तु की गति या आकार बदल सकता है', correct: true },
            { id: 'c', text: 'खिंचाव बल नहीं होता', correct: false, misconception: 'pull-not-force', feedback: 'रस्सी से डोरी खींचना भी बल है। खींचने से भी वस्तु चल सकती है।' },
            { id: 'd', text: 'बल केवल चलती वस्तु पर लगता है', correct: false, misconception: 'force-only-when-moving', feedback: 'रुकी हुई दीवार को धक्का दो, तब भी आप बल लगाते हो। बल लगने के लिए वस्तु का चलना ज़रूरी नहीं।' },
          ],
        },
        {
          id: 'bal-kya-hai-q2',
          difficulty: 'medium',
          text: 'रुकी हुई फुटबॉल को लात मारने पर क्या होता है?',
          options: [
            { id: 'a', text: 'रुकी फुटबॉल केवल तब चलती है जब वह पहले से चल रही हो', correct: false, misconception: 'force-only-when-moving', feedback: 'रुकी हुई फुटबॉल को भी लात से बल मिलता है और वह चल पड़ती है। बल के लिए गति ज़रूरी नहीं।' },
            { id: 'b', text: 'फुटबॉल चल पड़ती है या उसकी दिशा बदल जाती है', correct: true },
            { id: 'c', text: 'छूने से ही फुटबॉल चल पड़ती है, धक्का देना ज़रूरी नहीं', correct: false, misconception: 'contact-only-touch', feedback: 'केवल छूने से फुटबॉल नहीं चलती। उसे धक्का देने से बल लगता है और वह चलती है।' },
            { id: 'd', text: 'फुटबॉल केवल खिंचाव से चलती है, धक्के से नहीं', correct: false, misconception: 'pull-not-force', feedback: 'लात धक्का है, और धक्का भी बल है। धक्के से भी वस्तु चलती है।' },
          ],
        },
        {
          id: 'bal-kya-hai-q3',
          difficulty: 'hard',
          text: 'नीचे कौन-सा उदाहरण बल का है?',
          options: [
            { id: 'a', text: 'धूप में रखी किताब का गर्म होना', correct: false, misconception: 'heat-is-force', feedback: 'किताब का गर्म होना बल नहीं है, गर्मी का असर है। बल धक्का या खिंचाव होता है।' },
            { id: 'b', text: 'बाल्टी को रस्सी से कुएँ से खींचना', correct: true },
            { id: 'c', text: 'किताब को हाथ से केवल छूकर रखे रहना, उसे न हिलाना', correct: false, misconception: 'contact-only-touch', feedback: 'केवल छूना अपने-आप बल नहीं है। बल तब होता है जब वस्तु पर धक्का या खिंचाव का असर हो।' },
            { id: 'd', text: 'केवल धक्का देना ही बल है, बाल्टी खींचना नहीं', correct: false, misconception: 'push-is-always-force', feedback: 'बाल्टी खींचना भी बल है। धक्का और खिंचाव दोनों बल हैं।' },
          ],
        },
      ],
    },
    {
      id: 'sampark-bal',
      title: 'संपर्क बल और असंपर्क बल',
      keywords: ['संपर्क', 'असंपर्क', 'चुंबक', 'contact', 'non-contact'],
      card: {
        points: [
          'जो बल वस्तुओं के छूने पर लगे, उसे संपर्क बल कहते हैं।',
          'जो बल बिना छुए लगे, उसे असंपर्क बल कहते हैं।',
          'चुंबक लोहे को बिना छुए खींच सकता है, यह असंपर्क बल है।',
          'पृथ्वी का गुरुत्व बल भी असंपर्क बल है, जो वस्तु को नीचे खींचता है।',
        ],
        example: 'चुंबक लोहे की कील को बिना छुए अपनी ओर खींच लेता है।',
      },
      questions: [
        {
          id: 'sampark-bal-q1',
          difficulty: 'medium',
          text: 'चुंबक का लोहे को बिना छुए खींचना कौन-सा बल है?',
          options: [
            { id: 'a', text: 'संपर्क बल, क्योंकि चुंबक लोहे के पास होता है', correct: false, misconception: 'contact-only-touch', feedback: 'बल तभी संपर्क बल होता है जब वस्तुएँ एक-दूसरे को छुएँ। चुंबक लोहे को बिना छुए खींचता है, इसलिए यह असंपर्क बल है।' },
            { id: 'b', text: 'असंपर्क बल, क्योंकि वस्तुएँ एक-दूसरे को छुए बिना खिंचती हैं', correct: true },
            { id: 'c', text: 'यह बल नहीं होता, क्योंकि लोहा चलता नहीं', correct: false, misconception: 'force-only-when-moving', feedback: 'लोहा बिना चले भी चुंबक से खिंचता है। बल लगने के लिए गति ज़रूरी नहीं।' },
            { id: 'd', text: 'यह संपर्क बल है, क्योंकि लोहे के अंदर बल होता है', correct: false, misconception: 'contact-only-touch', feedback: 'बल लोहे के अंदर नहीं होता — चुंबक का खिंचाव बिना छुए काम करता है, इसलिए यह असंपर्क बल है।' },
          ],
        },
        {
          id: 'sampark-bal-q2',
          difficulty: 'easy',
          text: 'नीचे कौन-सा असंपर्क बल है?',
          options: [
            { id: 'a', text: 'रस्सी से किसी वस्तु को खींचना', correct: false, misconception: 'contact-only-touch', feedback: 'रस्सी वस्तु को छूकर खींचती है, इसलिए यह संपर्क बल है।' },
            { id: 'b', text: 'पृथ्वी का गुरुत्व बल, जिससे पत्थर नीचे गिरता है', correct: true },
            { id: 'c', text: 'दीवार को हाथ से धक्का देना', correct: false, misconception: 'contact-only-touch', feedback: 'हाथ से धक्का देने में हाथ दीवार को छूता है, इसलिए यह संपर्क बल है।' },
            { id: 'd', text: 'गुरुत्व बल तभी लगता है जब पत्थर चल रहा हो', correct: false, misconception: 'force-only-when-moving', feedback: 'रुके हुए पत्थर पर भी गुरुत्व बल लगता है। बल लगने के लिए गति ज़रूरी नहीं।' },
          ],
        },
        {
          id: 'sampark-bal-q3',
          difficulty: 'hard',
          text: 'संपर्क और असंपर्क बल के बारे में कौन-सा कथन सही है?',
          options: [
            { id: 'a', text: 'बल केवल छूने पर लगता है', correct: false, misconception: 'contact-only-touch', feedback: 'बल बिना छुए भी लग सकता है, जैसे चुंबक का लोहे को खींचना।' },
            { id: 'b', text: 'बिना छुए भी बल लग सकता है', correct: true },
            { id: 'c', text: 'असंपर्क बल हमेशा धक्का होता है', correct: false, misconception: 'push-is-always-force', feedback: 'असंपर्क बल खींचने वाला भी हो सकता है, जैसे चुंबक का खिंचाव। वह हमेशा धक्का नहीं होता।' },
            { id: 'd', text: 'खींचने वाला बल संपर्क बल नहीं होता', correct: false, misconception: 'pull-not-force', feedback: 'रस्सी से खींचना संपर्क बल है। खींचना भी बल है और वस्तु को छूकर लगता है।' },
          ],
        },
      ],
    },
    {
      id: 'dab',
      title: 'दाब क्या है',
      keywords: ['दाब', 'क्षेत्रफल', 'pressure', 'area'],
      card: {
        points: [
          'दाब वह बल है जो किसी सतह के प्रति इकाई क्षेत्रफल पर लगता है।',
          'दाब = बल ÷ क्षेत्रफल।',
          'बल समान हो, तो क्षेत्रफल कम होने पर दाब अधिक होता है।',
        ],
        example: 'नुकीली कील दीवार में आसानी से घुस जाती है, क्योंकि उसकी नोक का क्षेत्रफल कम है।',
      },
      questions: [
        {
          id: 'dab-q1',
          difficulty: 'easy',
          text: 'दाब किसे कहते हैं?',
          options: [
            { id: 'a', text: 'सतह पर लगने वाला कुल बल, चाहे क्षेत्रफल कुछ भी हो', correct: false, misconception: 'area-same-pressure', feedback: 'कुल बल वही रह सकता है, पर दाब = बल ÷ क्षेत्रफल होता है, इसलिए क्षेत्रफल बदलने से दाब बदलता है।' },
            { id: 'b', text: 'प्रति इकाई क्षेत्रफल पर लगने वाला बल', correct: true },
            { id: 'c', text: 'बल और क्षेत्रफल का गुणा', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'गुणा नहीं, भाग होता है। बड़े क्षेत्रफल पर बल फैलता है, इसलिए दाब घटता है।' },
            { id: 'd', text: 'केवल ठोस वस्तुओं पर लगने वाला बल', correct: false, misconception: 'pressure-only-solids', feedback: 'दाब तरल और गैस में भी होता है, जैसे पानी और हवा में।' },
          ],
        },
        {
          id: 'dab-q2',
          difficulty: 'medium',
          text: 'कील की नोक नुकीली क्यों होती है?',
          options: [
            { id: 'a', text: 'नोक का भार अधिक होता है', correct: false, misconception: 'heavier-more-pressure', feedback: 'दाब भार से नहीं, क्षेत्रफल से तय होता है। नोक का क्षेत्रफल कम है, इसलिए दाब अधिक होता है।' },
            { id: 'b', text: 'क्षेत्रफल कम होने से दाब अधिक होता है', correct: true },
            { id: 'c', text: 'नोक बड़ी सतह बनाती है', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'नोक छोटी सतह बनाती है। बड़ा क्षेत्रफल दाब कम करता है, जैसे चौड़ा जूता।' },
            { id: 'd', text: 'नोक पर दाब हमेशा समान रहता है', correct: false, misconception: 'area-same-pressure', feedback: 'क्षेत्रफल बदलने से दाब बदलता है। नोक का कम क्षेत्रफल दाब बढ़ाता है।' },
          ],
        },
        {
          id: 'dab-q3',
          difficulty: 'hard',
          text: 'बल समान हो, तो दाब कब अधिक होगा?',
          options: [
            { id: 'a', text: 'जब क्षेत्रफल अधिक हो', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'बल समान हो तो बड़ा क्षेत्रफल दाब घटाता है। चौड़े पट्टे वाला बैग कंधे पर कम चुभता है।' },
            { id: 'b', text: 'जब क्षेत्रफल कम हो', correct: true },
            { id: 'c', text: 'क्षेत्रफल से दाब का कोई संबंध नहीं', correct: false, misconception: 'area-same-pressure', feedback: 'क्षेत्रफल से दाब सीधे बदलता है। चाकू की पतली धार इसी से काटती है।' },
            { id: 'd', text: 'जब वस्तु भारी हो, चाहे क्षेत्रफल कुछ भी हो', correct: false, misconception: 'heavier-more-pressure', feedback: 'दाब बल और क्षेत्रफल दोनों पर निर्भर है। बल समान हो तो क्षेत्रफल ही दाब तय करता है।' },
          ],
        },
      ],
    },
    {
      id: 'taral-dab',
      title: 'द्रव में दाब',
      keywords: ['द्रव', 'पानी', 'गहराई', 'liquid', 'depth'],
      card: {
        points: [
          'पानी जैसे द्रव भी दाब डालते हैं।',
          'द्रव में गहराई बढ़ने पर दाब बढ़ता है।',
          'द्रव का दाब सभी दिशाओं में लगता है, नीचे, ऊपर और बगल में।',
        ],
        example: 'बोतल के नीचे वाले छेद से पानी ज़्यादा ज़ोर से निकलता है।',
      },
      questions: [
        {
          id: 'taral-dab-q1',
          difficulty: 'easy',
          text: 'पानी में गहराई बढ़ने पर दाब कैसे बदलता है?',
          options: [
            { id: 'a', text: 'घटता है', correct: false, misconception: 'deeper-less-pressure', feedback: 'गहराई बढ़ने पर ऊपर के पानी का भार बढ़ता है, इसलिए दाब बढ़ता है।' },
            { id: 'b', text: 'बढ़ता है', correct: true },
            { id: 'c', text: 'पानी में दाब केवल तब होता है जब वह ठोस जैसा जमा हो', correct: false, misconception: 'pressure-only-solids', feedback: 'पानी जैसे द्रव में भी दाब होता है। गहराई पर बोतल का छेद पानी को ज़ोर से निकालता है।' },
            { id: 'd', text: 'गहराई से दाब का कोई संबंध नहीं', correct: false, misconception: 'depth-no-effect', feedback: 'गहराई का असर होता है। गहराई बढ़ने पर दाब बढ़ता है।' },
          ],
        },
        {
          id: 'taral-dab-q2',
          difficulty: 'medium',
          text: 'पानी में दाब किन दिशाओं में लगता है?',
          options: [
            { id: 'a', text: 'केवल नीचे की ओर', correct: false, misconception: 'pressure-direction', feedback: 'द्रव का दाब नीचे, ऊपर और बगल, सभी दिशाओं में लगता है। बोतल के बगल के छेद से भी पानी निकलता है।' },
            { id: 'b', text: 'केवल बगल में', correct: false, misconception: 'pressure-direction', feedback: 'द्रव का दाब केवल बगल में नहीं, सभी दिशाओं में लगता है।' },
            { id: 'c', text: 'सभी दिशाओं में', correct: true },
            { id: 'd', text: 'केवल ऊपर की ओर', correct: false, misconception: 'pressure-direction', feedback: 'पानी का दाब ऊपर के साथ-साथ नीचे और बगल में भी लगता है।' },
          ],
        },
        {
          id: 'taral-dab-q3',
          difficulty: 'hard',
          text: 'पानी में 1 मीटर और 3 मीटर गहराई में से किस गहराई पर दाब अधिक है?',
          options: [
            { id: 'a', text: '1 मीटर पर', correct: false, misconception: 'deeper-less-pressure', feedback: 'गहराई बढ़ने पर दाब बढ़ता है, इसलिए 3 मीटर पर दाब अधिक होता है।' },
            { id: 'b', text: '3 मीटर पर', correct: true },
            { id: 'c', text: 'दोनों पर दाब समान होता है', correct: false, misconception: 'depth-no-effect', feedback: 'गहराई का असर होता है। गहरे तालाब के नीचे पर अधिक दाब होता है।' },
            { id: 'd', text: 'दाब केवल सतह पर होता है, गहराई पर नहीं', correct: false, misconception: 'pressure-only-solids', feedback: 'दाब हर गहराई पर होता है, केवल सतह पर नहीं।' },
          ],
        },
      ],
    },
    {
      id: 'vayu-dab',
      title: 'वायु का दाब',
      keywords: ['वायु', 'हवा', 'वायुमंडल', 'air', 'atmosphere'],
      card: {
        points: [
          'हमारे चारों ओर हवा का वायुमंडल है, जिसका भार होता है।',
          'वायु सभी दिशाओं में दाब डालती है।',
          'ऊँचाई पर जाने पर वायु का दाब घटता है।',
        ],
        example: 'गुब्बारे में हवा भरने पर वह फूलता है, क्योंकि हवा हर ओर दाब डालती है।',
      },
      questions: [
        {
          id: 'vayu-dab-q1',
          difficulty: 'easy',
          text: 'हवा में दाब क्यों होता है?',
          options: [
            { id: 'a', text: 'हवा का कोई भार नहीं होता', correct: false, misconception: 'air-no-weight', feedback: 'हवा का भार होता है। हवा भरने से गुब्बारा भारी होता है।' },
            { id: 'b', text: 'हवा का भार होता है और वह सभी दिशाओं में दाब डालती है', correct: true },
            { id: 'c', text: 'हवा केवल ठोस वस्तुओं पर दाब डालती है', correct: false, misconception: 'pressure-direction', feedback: 'हवा सभी दिशाओं में दाब डालती है, जैसे गुब्बारे को फुलाने पर।' },
            { id: 'd', text: 'ऊँचाई पर जाने से हवा का दाब बढ़ता है', correct: false, misconception: 'height-more-pressure', feedback: 'ऊँचाई पर जाने से हवा का दाब घटता है, बढ़ता नहीं।' },
          ],
        },
        {
          id: 'vayu-dab-q2',
          difficulty: 'medium',
          text: 'ऊँची पहाड़ी पर चढ़ने पर वायुमंडलीय दाब कैसा होता है?',
          options: [
            { id: 'a', text: 'बढ़ता है', correct: false, misconception: 'height-more-pressure', feedback: 'ऊपर जाने पर ऊपर की हवा का भार कम होता है, इसलिए दाब घटता है।' },
            { id: 'b', text: 'घटता है', correct: true },
            { id: 'c', text: 'बिलकुल नहीं बदलता', correct: false, misconception: 'depth-no-effect', feedback: 'वायु दाब ऊँचाई के साथ बदलता है। पहाड़ पर साँस लेने में कठिनाई इसी से होती है।' },
            { id: 'd', text: 'हवा में गहराई से दाब घटता है, जैसे पानी में', correct: false, misconception: 'deeper-less-pressure', feedback: 'हवा में गहराई नहीं होती। ऊँचाई बढ़ने पर उसके ऊपर की हवा कम होती है, इसलिए दाब घटता है।' },
          ],
        },
        {
          id: 'vayu-dab-q3',
          difficulty: 'hard',
          text: 'गुब्बारा हवा से भरने पर क्यों फूलता है?',
          options: [
            { id: 'a', text: 'हवा का कोई दाब नहीं होता', correct: false, misconception: 'air-no-weight', feedback: 'हवा का दाब होता है। गुब्बारे का फूलना इसी दाब का असर है।' },
            { id: 'b', text: 'भरी हवा सभी दिशाओं में दाब डालती है, जिससे गुब्बारा फैलता है', correct: true },
            { id: 'c', text: 'हवा केवल नीचे की ओर दाब डालती है', correct: false, misconception: 'pressure-direction', feedback: 'हवा सभी दिशाओं में दाब डालती है, केवल नीचे नहीं।' },
            { id: 'd', text: 'केवल भारी वस्तु ही दाब डाल सकती है, हल्की हवा नहीं', correct: false, misconception: 'heavier-more-pressure', feedback: 'हल्की चीज़ भी दाब डाल सकती है। हवा हल्की है फिर भी गुब्बारे के अंदर से हर ओर दाब डालती है।' },
          ],
        },
      ],
    },
  ],
};

export const MISCONCEPTIONS = {
  'push-is-always-force': { label: 'बल सिर्फ़ धक्का ही होता है' },
  'pull-not-force': { label: 'खिंचाव बल नहीं होता' },
  'force-only-when-moving': { label: 'बल केवल चलती वस्तु पर लगता है' },
  'contact-only-touch': { label: 'बल केवल छूने पर लगता है' },
  'area-same-pressure': { label: 'दाब क्षेत्रफल पर निर्भर नहीं' },
  'pressure-only-solids': { label: 'दाब केवल ठोस में होता है' },
  'pressure-direction': { label: 'दाब की दिशा गलत समझना' },
  'heat-is-force': { label: 'गर्मी को बल समझना' },
  'bigger-area-more-pressure': { label: 'बड़ा क्षेत्रफल अधिक दाब देता है' },
  'depth-no-effect': { label: 'गहराई का दाब पर असर नहीं' },
  'deeper-less-pressure': { label: 'गहराई पर दाब कम होता है' },
  'air-no-weight': { label: 'हवा का कोई भार नहीं होता' },
  'heavier-more-pressure': { label: 'भारी वस्तु का दाब हमेशा अधिक' },
  'height-more-pressure': { label: 'ऊँचाई पर वायु दाब बढ़ता है' },
};
