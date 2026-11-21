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


// Extra chapter packs (owner order, 21 Nov): every remaining Class 8 Science
// chapter gets one starter concept (card + 3 questions) — "thora thora" of each.
const EXTRA_A = [
  {
    id: 'sci8-fasal', subject: 'विज्ञान', classLevel: 8, title: 'फ़सल उत्पादन और प्रबंधन',
    concepts: [{
      id: 'fasal-dekhbhal', title: 'फ़सल की देखभाल कैसे होती है',
      keywords: ['फ़सल', 'ख़रीफ़', 'रबी', 'खाद', 'सिंचाई', 'crop', 'kharif', 'rabi'],
      card: { points: [
        'ख़रीफ़ फ़सलें बारिश के मौसम में बोई जाती हैं, जैसे धान और मक्का।',
        'रबी फ़सलें सर्दियों में बोई जाती हैं, जैसे गेहूँ और चना।',
        'अच्छी फ़सल के लिए अच्छे बीज, खाद, सिंचाई और सुरक्षा ज़रूरी है।',
      ], example: 'गाँव में किसान बारिश से पहले धान बोता है और समय पर सिंचाई करता है।' },
      questions: [
        { id: 'fasal-dekhbhal-q1', difficulty: 'easy', text: 'ख़रीफ़ फ़सल कौन-सी है?', options: [
          { id: 'a', text: 'गेहूँ', correct: false, misconception: 'rabi-is-kharif', feedback: 'गेहूँ रबी फ़सल है, जो सर्दियों में बोई जाती है।' },
          { id: 'b', text: 'धान', correct: true },
          { id: 'c', text: 'चना', correct: false, misconception: 'rabi-is-kharif', feedback: 'चना भी रबी की फ़सल है।' },
          { id: 'd', text: 'सरसों', correct: false, misconception: 'rabi-is-kharif', feedback: 'सरसों भी रबी की फ़सल है।' } ] },
        { id: 'fasal-dekhbhal-q2', difficulty: 'medium', text: 'पौधों को खाद क्यों दी जाती है?', options: [
          { id: 'a', text: 'पौधे एक दिन में बड़े हो जाते हैं', correct: false, misconception: 'manure-magic', feedback: 'खाद जादू नहीं है, यह धीरे-धीरे पोषक तत्व देती है।' },
          { id: 'b', text: 'कीड़े अपने आप मर जाते हैं', correct: false, misconception: 'manure-is-pesticide', feedback: 'खाद पोषण देती है, कीड़े मारना कीटनाशक का काम है।' },
          { id: 'c', text: 'मिट्टी में पोषक तत्व बढ़ाने के लिए', correct: true },
          { id: 'd', text: 'सिंचाई की ज़रूरत ख़त्म हो जाती है', correct: false, misconception: 'manure-replaces-water', feedback: 'खाद के बाद भी पौधों को पानी चाहिए।' } ] },
        { id: 'fasal-dekhbhal-q3', difficulty: 'hard', text: 'धान के खेत में पानी भरा क्यों रखा जाता है?', options: [
          { id: 'a', text: 'मछलियाँ पालने के लिए', correct: false, misconception: 'paddy-water-fish', feedback: 'पानी धान की ज़रूरत के लिए भरा जाता है।' },
          { id: 'b', text: 'धान को ज़्यादा पानी चाहिए होता है', correct: true },
          { id: 'c', text: 'बारिश का पानी बचाकर रखने के लिए', correct: false, misconception: 'paddy-water-storage', feedback: 'खेत का पानी फ़सल के लिए है, भंडारण के लिए नहीं।' },
          { id: 'd', text: 'मिट्टी को ठंडा रखने के लिए ही', correct: false, misconception: 'paddy-water-cold', feedback: 'मुख्य कारण धान की पानी की ज़रूरत है।' } ] },
      ] }],
  },
  {
    id: 'sci8-sukshmjeev', subject: 'विज्ञान', classLevel: 8, title: 'सूक्ष्मजीव: मित्र और शत्रु',
    concepts: [{
      id: 'sukshmjeev', title: 'सूक्ष्मजीव: छोटे दोस्त और दुश्मन',
      keywords: ['सूक्ष्मजीव', 'जीवाणु', 'दही', 'microbe', 'bacteria', 'virus'],
      card: { points: [
        'सूक्ष्मजीव इतने छोटे होते हैं कि बिना सूक्ष्मदर्शी के नहीं दिखते।',
        'कुछ सूक्ष्मजीव लाभदायक हैं, जैसे दही जमाने वाले जीवाणु।',
        'कुछ सूक्ष्मजीव बीमारियाँ भी फैलाते हैं।',
      ], example: 'दूध में थोड़ा दही मिलाने से जीवाणु उसे दही में बदल देते हैं।' },
      questions: [
        { id: 'sukshmjeev-q1', difficulty: 'easy', text: 'दही किसकी मदद से जमता है?', options: [
          { id: 'a', text: 'मक्खी से', correct: false, misconception: 'microbes-visible', feedback: 'मक्खी सूक्ष्मजीव नहीं है, वह आँख से दिखती है।' },
          { id: 'b', text: 'केवल गर्मी से, जीवाणु से नहीं', correct: false, misconception: 'curd-only-heat', feedback: 'गर्मी मदद करती है, पर दही जीवाणुओं से ही जमता है।' },
          { id: 'c', text: 'जीवाणुओं से', correct: true },
          { id: 'd', text: 'चींटी से', correct: false, misconception: 'microbes-visible', feedback: 'चींटी भी आँख से दिखती है, सूक्ष्मजीव नहीं है।' } ] },
        { id: 'sukshmjeev-q2', difficulty: 'medium', text: 'सूक्ष्मजीव कहाँ पाए जाते हैं?', options: [
          { id: 'a', text: 'केवल गंदी जगहों पर', correct: false, misconception: 'microbes-only-dirty', feedback: 'सूक्ष्मजीव साफ़ जगहों और हमारे शरीर में भी होते हैं।' },
          { id: 'b', text: 'हवा, पानी, मिट्टी, हर जगह', correct: true },
          { id: 'c', text: 'केवल पानी में', correct: false, misconception: 'microbes-only-water', feedback: 'सूक्ष्मजीव हवा और मिट्टी में भी होते हैं।' },
          { id: 'd', text: 'केवल अस्पतालों में', correct: false, misconception: 'microbes-only-hospital', feedback: 'सूक्ष्मजीव हर जगह होते हैं, केवल अस्पताल में नहीं।' } ] },
        { id: 'sukshmjeev-q3', difficulty: 'hard', text: 'पेनिसिलिन दवा किससे बनी है?', options: [
          { id: 'a', text: 'जीवाणु से', correct: false, misconception: 'penicillin-bacteria', feedback: 'पेनिसिलिन एक फफूंद से बनी है, जीवाणु से नहीं।' },
          { id: 'b', text: 'पौधे की जड़ से', correct: false, misconception: 'penicillin-plant', feedback: 'पेनिसिलिन फफूंद (कवक) से बनी है।' },
          { id: 'c', text: 'एक फफूंद (कवक) से', correct: true },
          { id: 'd', text: 'मिट्टी के तेल से', correct: false, misconception: 'penicillin-oil', feedback: 'पेनिसिलिन का स्रोत एक फफूंद है।' } ] },
      ] }],
  },
  {
    id: 'sci8-koyla-petroleum', subject: 'विज्ञान', classLevel: 8, title: 'कोयला और पेट्रोलियम',
    concepts: [{
      id: 'jeevashm-indhan', title: 'जीवाश्म ईंधन: कोयला और पेट्रोलियम',
      keywords: ['कोयला', 'पेट्रोलियम', 'ईंधन', 'coal', 'petroleum', 'fuel'],
      card: { points: [
        'कोयला और पेट्रोलियम लाखों साल पहले दबे जीवों के अवशेषों से बने हैं।',
        'ये संसाधन सीमित हैं, एक दिन ख़त्म हो सकते हैं।',
        'पेट्रोलियम से पेट्रोल, डीज़ल और मिट्टी का तेल जैसे पदार्थ मिलते हैं।',
      ], example: 'गाँव की बस डीज़ल से चलती है, जो पेट्रोलियम से मिलता है।' },
      questions: [
        { id: 'jeevashm-indhan-q1', difficulty: 'easy', text: 'कोयला कैसे बना?', options: [
          { id: 'a', text: 'ज्वालामुखी की राख से', correct: false, misconception: 'coal-volcano', feedback: 'कोयला राख से नहीं, दबे हुए पौधों से बना है।' },
          { id: 'b', text: 'दबे हुए पेड़-पौधों के अवशेषों से, लाखों साल में', correct: true },
          { id: 'c', text: 'समुद्र के पानी से', correct: false, misconception: 'coal-seawater', feedback: 'कोयला दबे पौधों के अवशेषों से बना है।' },
          { id: 'd', text: 'एक साल में खेत की मिट्टी से', correct: false, misconception: 'coal-fast', feedback: 'कोयला बनने में लाखों साल लगते हैं।' } ] },
        { id: 'jeevashm-indhan-q2', difficulty: 'medium', text: 'पेट्रोलियम से क्या-क्या मिलता है?', options: [
          { id: 'a', text: 'केवल पेट्रोल', correct: false, misconception: 'petroleum-only-petrol', feedback: 'पेट्रोलियम से डीज़ल, मिट्टी का तेल और मोम भी मिलते हैं।' },
          { id: 'b', text: 'दूध और दही', correct: false, misconception: 'petroleum-food', feedback: 'दूध-दही जानवरों से मिलते हैं, पेट्रोलियम से नहीं।' },
          { id: 'c', text: 'पेट्रोल, डीज़ल और मिट्टी का तेल', correct: true },
          { id: 'd', text: 'केवल कपड़ा और कागज़', correct: false, misconception: 'petroleum-cloth', feedback: 'कपड़ा-कागज़ पेट्रोलियम के मुख्य उत्पाद नहीं हैं।' } ] },
        { id: 'jeevashm-indhan-q3', difficulty: 'hard', text: 'जीवाश्म ईंधन बचाना क्यों ज़रूरी है?', options: [
          { id: 'a', text: 'ये कभी ख़त्म नहीं होंगे', correct: false, misconception: 'fuel-endless', feedback: 'जीवाश्म ईंधन सीमित हैं, एक दिन ख़त्म हो सकते हैं।' },
          { id: 'b', text: 'इनसे प्रदूषण बिल्कुल नहीं होता', correct: false, misconception: 'fuel-clean', feedback: 'इनके जलने से धुआँ और प्रदूषण होता है।' },
          { id: 'c', text: 'ये मुफ़्त मिलते हैं इसलिए', correct: false, misconception: 'fuel-free', feedback: 'बचत का कारण मुफ़्त होना नहीं, सीमित होना है।' },
          { id: 'd', text: 'ये सीमित हैं और बनने में लाखों साल लगते हैं', correct: true } ] },
      ] }],
  },
  {
    id: 'sci8-dahan', subject: 'विज्ञान', classLevel: 8, title: 'दहन और ज्वाला',
    concepts: [{
      id: 'dahan', title: 'दहन: जलने की शर्तें',
      keywords: ['दहन', 'ज्वाला', 'ज्वलन', 'आग', 'combustion', 'flame', 'fire'],
      card: { points: [
        'दहन वह क्रिया है जिसमें पदार्थ ऑक्सीजन से मिलकर गर्मी और रोशनी देता है।',
        'हर ईंधन एक निश्चित तापमान पर ही जलता है, उसे ज्वलन तापमान कहते हैं।',
        'आग के लिए ईंधन, हवा (ऑक्सीजन) और गर्मी, तीनों चाहिए।',
      ], example: 'माचिस की तीली घिसने से गर्म होकर जल उठती है।' },
      questions: [
        { id: 'dahan-q1', difficulty: 'easy', text: 'आग जलने के लिए क्या-क्या चाहिए?', options: [
          { id: 'a', text: 'केवल ईंधन', correct: false, misconception: 'fire-only-fuel', feedback: 'सिर्फ़ ईंधन से आग नहीं जलती, हवा और गर्मी भी चाहिए।' },
          { id: 'b', text: 'ईंधन, हवा और गर्मी', correct: true },
          { id: 'c', text: 'केवल पानी', correct: false, misconception: 'fire-water', feedback: 'पानी आग बुझाता है, जलाता नहीं।' },
          { id: 'd', text: 'केवल धूप', correct: false, misconception: 'fire-only-sun', feedback: 'धूप हर चीज़ को नहीं जलाती, ज्वलन तापमान चाहिए।' } ] },
        { id: 'dahan-q2', difficulty: 'medium', text: 'ज्वलन तापमान क्या है?', options: [
          { id: 'a', text: 'आग का सबसे ऊँचा तापमान', correct: false, misconception: 'ignition-max', feedback: 'ज्वलन तापमान वह सबसे कम तापमान है जहाँ जलना शुरू होता है।' },
          { id: 'b', text: 'कमरे का सामान्य तापमान', correct: false, misconception: 'ignition-room', feedback: 'हर पदार्थ का ज्वलन तापमान अलग होता है।' },
          { id: 'c', text: 'वह सबसे कम तापमान जिस पर पदार्थ जलने लगता है', correct: true },
          { id: 'd', text: 'पानी के उबलने का तापमान', correct: false, misconception: 'ignition-boiling', feedback: 'उबलना और जलना अलग बातें हैं।' } ] },
        { id: 'dahan-q3', difficulty: 'hard', text: 'जलती मोमबत्ती पर गिलास उल्टा रखने से वह बुझ क्यों जाती है?', options: [
          { id: 'a', text: 'गिलास ठंडा होता है इसलिए', correct: false, misconception: 'candle-glass-cold', feedback: 'कारण ठंडक नहीं, ऑक्सीजन का ख़त्म होना है।' },
          { id: 'b', text: 'मोम पिघल जाता है इसलिए', correct: false, misconception: 'candle-wax-melt', feedback: 'मोम पिघलना सामान्य है, बुझने का कारण हवा की कमी है।' },
          { id: 'c', text: 'हवा (ऑक्सीजन) ख़त्म हो जाती है', correct: true },
          { id: 'd', text: 'रोशनी बंद हो जाती है इसलिए', correct: false, misconception: 'candle-light-off', feedback: 'रोशनी का जाना परिणाम है, कारण नहीं।' } ] },
      ] }],
  },
  {
    id: 'sci8-sanrakshan', subject: 'विज्ञान', classLevel: 8, title: 'पौधों और जानवरों का संरक्षण',
    concepts: [{
      id: 'sanrakshan', title: 'पौधों और जानवरों का संरक्षण',
      keywords: ['संरक्षण', 'जंगल', 'राष्ट्रीय उद्यान', 'विलुप्त', 'conservation', 'forest'],
      card: { points: [
        'जंगल कटने से जानवरों का घर ख़त्म होता है और मिट्टी बह जाती है।',
        'राष्ट्रीय उद्यान और अभयारण्य जानवरों की रक्षा के लिए बनाए जाते हैं।',
        'कुछ प्रजातियाँ विलुप्त होने के कगार पर हैं, उन्हें बचाना ज़रूरी है।',
      ], example: 'गाँव के पास के जंगल से छाया, फल और साफ़ हवा मिलती है।' },
      questions: [
        { id: 'sanrakshan-q1', difficulty: 'easy', text: 'राष्ट्रीय उद्यान क्यों बनाए जाते हैं?', options: [
          { id: 'a', text: 'खेती करने के लिए', correct: false, misconception: 'park-farming', feedback: 'राष्ट्रीय उद्यान में खेती नहीं, संरक्षण होता है।' },
          { id: 'b', text: 'जंगली जानवरों और पौधों की रक्षा के लिए', correct: true },
          { id: 'c', text: 'लकड़ी काटने के लिए', correct: false, misconception: 'park-logging', feedback: 'वहाँ पेड़ काटना मना होता है।' },
          { id: 'd', text: 'घर बनाने के लिए', correct: false, misconception: 'park-houses', feedback: 'राष्ट्रीय उद्यान रहने की जगह नहीं, संरक्षण क्षेत्र है।' } ] },
        { id: 'sanrakshan-q2', difficulty: 'medium', text: 'वनों की कटाई से क्या नुकसान होता है?', options: [
          { id: 'a', text: 'बारिश बढ़ जाती है', correct: false, misconception: 'deforest-more-rain', feedback: 'जंगल कटने से बारिश घट सकती है, बढ़ती नहीं।' },
          { id: 'b', text: 'हवा अपने आप साफ़ हो जाती है', correct: false, misconception: 'deforest-clean-air', feedback: 'पेड़ हवा साफ़ करते हैं, कटाई से हवा बिगड़ती है।' },
          { id: 'c', text: 'जानवरों का आवास ख़त्म होता है और मिट्टी का कटाव बढ़ता है', correct: true },
          { id: 'd', text: 'कोई नुकसान नहीं होता', correct: false, misconception: 'deforest-no-harm', feedback: 'कटाई से आवास, मिट्टी और जलवायु सब पर असर पड़ता है।' } ] },
        { id: 'sanrakshan-q3', difficulty: 'hard', text: 'विलुप्त प्रजाति का क्या मतलब है?', options: [
          { id: 'a', text: 'जो बहुत तेज़ दौड़ती है', correct: false, misconception: 'extinct-fast', feedback: 'विलुप्त का मतलब है पूरी तरह ख़त्म हो चुकी प्रजाति।' },
          { id: 'b', text: 'जो केवल चिड़ियाघर में रहती है', correct: false, misconception: 'extinct-zoo', feedback: 'चिड़ियाघर में होना विलुप्त होना नहीं है।' },
          { id: 'c', text: 'जो रात में जागती है', correct: false, misconception: 'extinct-night', feedback: 'रात में जागना विलुप्त होना नहीं है।' },
          { id: 'd', text: 'जो प्रजाति पूरी तरह ख़त्म हो चुकी है', correct: true } ] },
      ] }],
  },
  {
    id: 'sci8-koshika', subject: 'विज्ञान', classLevel: 8, title: 'कोशिका — संरचना और कार्य',
    concepts: [{
      id: 'koshika', title: 'कोशिका: जीवन की इकाई',
      keywords: ['कोशिका', 'केंद्रक', 'cell', 'nucleus'],
      card: { points: [
        'कोशिका हर जीव की सबसे छोटी इकाई है।',
        'कोशिका के बीच में केंद्रक होता है, जो कोशिका को नियंत्रित करता है।',
        'पौधों की कोशिका में कोशिका भित्ति और हरितलवक भी होते हैं।',
      ], example: 'जैसे घर ईंटों से बनता है, वैसे शरीर कोशिकाओं से बनता है।' },
      questions: [
        { id: 'koshika-q1', difficulty: 'easy', text: 'जीवन की सबसे छोटी इकाई क्या है?', options: [
          { id: 'a', text: 'हृदय', correct: false, misconception: 'cell-heart', feedback: 'हृदय एक अंग है, जो कोशिकाओं से बना होता है।' },
          { id: 'b', text: 'कोशिका', correct: true },
          { id: 'c', text: 'हड्डी', correct: false, misconception: 'cell-bone', feedback: 'हड्डी भी कोशिकाओं से बनी होती है।' },
          { id: 'd', text: 'पत्ता', correct: false, misconception: 'cell-leaf', feedback: 'पत्ता भी कोशिकाओं से बना होता है।' } ] },
        { id: 'koshika-q2', difficulty: 'medium', text: 'कोशिका को कौन नियंत्रित करता है?', options: [
          { id: 'a', text: 'कोशिका भित्ति', correct: false, misconception: 'nucleus-wall', feedback: 'भित्ति सुरक्षा देती है, नियंत्रण केंद्रक करता है।' },
          { id: 'b', text: 'हरितलवक', correct: false, misconception: 'nucleus-chloroplast', feedback: 'हरितलवक भोजन बनाता है, नियंत्रण नहीं करता।' },
          { id: 'c', text: 'केंद्रक', correct: true },
          { id: 'd', text: 'रिक्तिका', correct: false, misconception: 'nucleus-vacuole', feedback: 'रिक्तिका चीज़ें जमा करती है, नियंत्रण केंद्रक का काम है।' } ] },
        { id: 'koshika-q3', difficulty: 'hard', text: 'पौधों की कोशिका में ऐसा क्या है जो जानवरों की कोशिका में नहीं होता?', options: [
          { id: 'a', text: 'केंद्रक', correct: false, misconception: 'plant-nucleus-diff', feedback: 'केंद्रक दोनों में होता है।' },
          { id: 'b', text: 'कोशिका भित्ति और हरितलवक', correct: true },
          { id: 'c', text: 'कोशिका झिल्ली', correct: false, misconception: 'plant-membrane-diff', feedback: 'झिल्ली दोनों में होती है।' },
          { id: 'd', text: 'कोशिका द्रव्य', correct: false, misconception: 'plant-cytoplasm-diff', feedback: 'कोशिका द्रव्य दोनों में होता है।' } ] },
      ] }],
  },
  {
    id: 'sci8-prajan', subject: 'विज्ञान', classLevel: 8, title: 'जानवरों में प्रजनन',
    concepts: [{
      id: 'prajan', title: 'जानवरों में प्रजनन',
      keywords: ['प्रजनन', 'अंडा', 'अमीबा', 'reproduction', 'amoeba'],
      card: { points: [
        'प्रजनन से जीव अपनी तरह के नए जीव पैदा करते हैं।',
        'कुछ जीव अंडे देते हैं और कुछ बच्चे को जन्म देते हैं।',
        'अमीबा जैसे जीव दो भागों में बँटकर बढ़ते हैं, इसे द्विखंडन कहते हैं।',
      ], example: 'मुर्गी अंडे देती है और गाय बछड़े को जन्म देती है।' },
      questions: [
        { id: 'prajan-q1', difficulty: 'easy', text: 'अमीबा कैसे बढ़ता है?', options: [
          { id: 'a', text: 'अंडे देकर', correct: false, misconception: 'amoeba-eggs', feedback: 'अमीबा अंडे नहीं देता, दो भागों में बँट जाता है।' },
          { id: 'b', text: 'दो भागों में बँटकर (द्विखंडन)', correct: true },
          { id: 'c', text: 'बीज बनाकर', correct: false, misconception: 'amoeba-seeds', feedback: 'बीज पौधे बनाते हैं, अमीबा नहीं।' },
          { id: 'd', text: 'बच्चे को जन्म देकर', correct: false, misconception: 'amoeba-birth', feedback: 'अमीबा एककोशिकीय है, वह द्विखंडन से बढ़ता है।' } ] },
        { id: 'prajan-q2', difficulty: 'medium', text: 'कौन-सा जानवर अंडे देता है?', options: [
          { id: 'a', text: 'गाय', correct: false, misconception: 'eggs-cow', feedback: 'गाय बछड़े को जन्म देती है।' },
          { id: 'b', text: 'कुत्ता', correct: false, misconception: 'eggs-dog', feedback: 'कुत्ता पिल्लों को जन्म देता है।' },
          { id: 'c', text: 'मुर्गी', correct: true },
          { id: 'd', text: 'बिल्ली', correct: false, misconception: 'eggs-cat', feedback: 'बिल्ली बच्चों को जन्म देती है।' } ] },
        { id: 'prajan-q3', difficulty: 'hard', text: 'हाइड्रा में कलिका (बड) से नया जीव बनना किस प्रकार का प्रजनन है?', options: [
          { id: 'a', text: 'लैंगिक प्रजनन', correct: false, misconception: 'budding-sexual', feedback: 'कलिका से बढ़ना अलैंगिक प्रजनन है, इसमें एक ही जनक होता है।' },
          { id: 'b', text: 'अलैंगिक प्रजनन', correct: true },
          { id: 'c', text: 'द्विखंडन', correct: false, misconception: 'budding-fission', feedback: 'द्विखंडन में जीव दो भागों में बँटता है, हाइड्रा में कलिका निकलती है।' },
          { id: 'd', text: 'बीजाणु निर्माण', correct: false, misconception: 'budding-spore', feedback: 'हाइड्रा कलिका से बढ़ता है, बीजाणु से नहीं।' } ] },
      ] }],
  },
];


const EXTRA_B = [
  {
    id: 'sci8-gharshan', subject: 'विज्ञान', classLevel: 8, title: 'घर्षण',
    concepts: [{
      id: 'gharshan', title: 'घर्षण: दोस्त भी, दुश्मन भी',
      keywords: ['घर्षण', 'फिसलना', 'तेल', 'friction'],
      card: { points: [
        'घर्षण वह बल है जो दो सतहों के बीच गति का विरोध करता है।',
        'घर्षण की वजह से ही हम चल पाते हैं और गाड़ी रुक पाती है।',
        'घर्षण से मशीनों के पुर्ज़े घिसते हैं, इसलिए उनमें तेल लगाया जाता है।',
      ], example: 'बरसात में कीचड़ वाली राह पर फिसलने का डर रहता है, क्योंकि वहाँ घर्षण कम हो जाता है।' },
      questions: [
        { id: 'gharshan-q1', difficulty: 'easy', text: 'हम ज़मीन पर चल क्यों पाते हैं?', options: [
          { id: 'a', text: 'केवल गुरुत्व की वजह से', correct: false, misconception: 'walk-gravity-only', feedback: 'गुरुत्व हमें नीचे रखता है, पर चलने के लिए घर्षण चाहिए।' },
          { id: 'b', text: 'पैरों और ज़मीन के बीच घर्षण की वजह से', correct: true },
          { id: 'c', text: 'घर्षण बिल्कुल न होने से', correct: false, misconception: 'walk-no-friction', feedback: 'घर्षण न हो तो पैर फिसलेंगे, चलना मुश्किल होगा।' },
          { id: 'd', text: 'हवा के दबाव से', correct: false, misconception: 'walk-air', feedback: 'चलने में मुख्य भूमिका घर्षण की है।' } ] },
        { id: 'gharshan-q2', difficulty: 'medium', text: 'मशीनों में तेल क्यों लगाया जाता है?', options: [
          { id: 'a', text: 'मशीन भारी करने के लिए', correct: false, misconception: 'oil-weight', feedback: 'तेल वज़न के लिए नहीं, घर्षण घटाने के लिए लगाया जाता है।' },
          { id: 'b', text: 'घर्षण कम करने के लिए', correct: true },
          { id: 'c', text: 'रंग चमकाने के लिए', correct: false, misconception: 'oil-shine', feedback: 'चमक मक़सद नहीं, घर्षण घटाना मक़सद है।' },
          { id: 'd', text: 'मशीन को केवल ठंडा रखने के लिए', correct: false, misconception: 'oil-cooling-only', feedback: 'यहाँ तेल का मुख्य काम घर्षण घटाना है।' } ] },
        { id: 'gharshan-q3', difficulty: 'hard', text: 'गेंद लुढ़कती हुई रुक क्यों जाती है?', options: [
          { id: 'a', text: 'गेंद थक जाती है', correct: false, misconception: 'ball-tired', feedback: 'गेंद थकती नहीं, घर्षण उसे रोकता है।' },
          { id: 'b', text: 'गुरुत्व उसे रोकता है', correct: false, misconception: 'ball-gravity', feedback: 'समतल ज़मीन पर गुरुत्व गेंद को नहीं रोकता।' },
          { id: 'c', text: 'घर्षण उसकी गति का विरोध करता है', correct: true },
          { id: 'd', text: 'केवल हवा उसे पीछे खींचती है', correct: false, misconception: 'ball-air-only', feedback: 'हवा का असर छोटा है, मुख्य कारण घर्षण है।' } ] },
      ] }],
  },
  {
    id: 'sci8-dhwani', subject: 'विज्ञान', classLevel: 8, title: 'ध्वनि',
    concepts: [{
      id: 'dhwani', title: 'ध्वनि कैसे बनती है',
      keywords: ['ध्वनि', 'कंपन', 'आवाज़', 'sound', 'vibration'],
      card: { points: [
        'ध्वनि किसी वस्तु के कंपन से पैदा होती है।',
        'ध्वनि को चलने के लिए हवा, पानी या ठोस जैसा माध्यम चाहिए।',
        'कंपन की आवृत्ति ज़्यादा होने पर आवाज़ तीखी (ऊँची) होती है।',
      ], example: 'ढोल बजाने पर उसकी झिल्ली काँपती है और आवाज़ निकलती है।' },
      questions: [
        { id: 'dhwani-q1', difficulty: 'easy', text: 'ध्वनि किससे पैदा होती है?', options: [
          { id: 'a', text: 'वस्तु के कंपन से', correct: true },
          { id: 'b', text: 'केवल रोशनी से', correct: false, misconception: 'sound-light', feedback: 'रोशनी से ध्वनि नहीं बनती, कंपन से बनती है।' },
          { id: 'c', text: 'केवल गर्मी से', correct: false, misconception: 'sound-heat', feedback: 'गर्मी से नहीं, कंपन से ध्वनि पैदा होती है।' },
          { id: 'd', text: 'हवा के रंग से', correct: false, misconception: 'sound-color', feedback: 'हवा का रंग नहीं होता, ध्वनि कंपन से बनती है।' } ] },
        { id: 'dhwani-q2', difficulty: 'medium', text: 'चाँद पर दो लोग बिना यंत्र के बात क्यों नहीं कर सकते?', options: [
          { id: 'a', text: 'वहाँ बहुत ठंड है इसलिए', correct: false, misconception: 'moon-cold', feedback: 'ठंड कारण नहीं, हवा का न होना कारण है।' },
          { id: 'b', text: 'वहाँ हवा नहीं है, ध्वनि को माध्यम चाहिए', correct: true },
          { id: 'c', text: 'वहाँ गुरुत्व कम है इसलिए', correct: false, misconception: 'moon-gravity', feedback: 'गुरुत्व से आवाज़ का चलना नहीं रुकता, माध्यम चाहिए।' },
          { id: 'd', text: 'वहाँ अंधेरा रहता है इसलिए', correct: false, misconception: 'moon-dark', feedback: 'अंधेरे से आवाज़ नहीं रुकती, माध्यम की कमी से रुकती है।' } ] },
        { id: 'dhwani-q3', difficulty: 'hard', text: 'आवाज़ कब ज़्यादा तीखी (ऊँची) होती है?', options: [
          { id: 'a', text: 'जब कोई ज़ोर से चिल्लाए', correct: false, misconception: 'pitch-loud', feedback: 'ज़ोर से बोलना तीव्रता है, तीखापन आवृत्ति से होता है।' },
          { id: 'b', text: 'जब कंपन की आवृत्ति ज़्यादा हो', correct: true },
          { id: 'c', text: 'जब आवाज़ भारी हो', correct: false, misconception: 'pitch-heavy', feedback: 'भारी आवाज़ की आवृत्ति कम होती है।' },
          { id: 'd', text: 'जब कोई बहुत धीरे बोले', correct: false, misconception: 'pitch-slow', feedback: 'धीरे बोलना तीव्रता घटाता है, तीखापन आवृत्ति से तय होता है।' } ] },
      ] }],
  },
  {
    id: 'sci8-vidyut-rasayan', subject: 'विज्ञान', classLevel: 8, title: 'विद्युत धारा के रासायनिक प्रभाव',
    concepts: [{
      id: 'vidyut-apghatan', title: 'बिजली से रासायनिक बदलाव',
      keywords: ['विद्युत अपघटन', 'इलेक्ट्रोप्लेटिंग', 'धारा', 'electrolysis', 'current'],
      card: { points: [
        'कुछ द्रवों से विद्युत धारा गुज़रने पर रासायनिक बदलाव होते हैं।',
        'विद्युत अपघटन से धातु की परत चढ़ाई जाती है, जैसे चम्मच पर चाँदी की परत।',
        'शुद्ध पानी बिजली का कमज़ोर चालक है, नमक मिला पानी अच्छा चालक है।',
      ], example: 'नकली गहनों पर सोने जैसी परत विद्युत अपघटन से ही चढ़ती है।' },
      questions: [
        { id: 'vidyut-apghatan-q1', difficulty: 'easy', text: 'चम्मच पर चाँदी की परत कैसे चढ़ती है?', options: [
          { id: 'a', text: 'रंग करने से', correct: false, misconception: 'plating-paint', feedback: 'रंग और धातु की परत अलग चीज़ें हैं।' },
          { id: 'b', text: 'विद्युत अपघटन (इलेक्ट्रोप्लेटिंग) से', correct: true },
          { id: 'c', text: 'घिसने से', correct: false, misconception: 'plating-rub', feedback: 'घिसने से परत नहीं चढ़ती, उतरती है।' },
          { id: 'd', text: 'पिघलाकर डालने से', correct: false, misconception: 'plating-melt', feedback: 'परत बिजली की मदद से चढ़ती है।' } ] },
        { id: 'vidyut-apghatan-q2', difficulty: 'medium', text: 'किस पानी से बिजली आसानी से गुज़रेगी?', options: [
          { id: 'a', text: 'शुद्ध (आसुत) पानी से', correct: false, misconception: 'salt-pure-water', feedback: 'शुद्ध पानी कमज़ोर चालक है, नमक मिलने से चालकता बढ़ती है।' },
          { id: 'b', text: 'तेल से', correct: false, misconception: 'salt-oil', feedback: 'तेल बिजली का चालक नहीं है।' },
          { id: 'c', text: 'नमक मिले पानी से', correct: true },
          { id: 'd', text: 'सूखी मिट्टी से', correct: false, misconception: 'salt-dry-soil', feedback: 'सूखी मिट्टी से धारा नहीं गुज़रती।' } ] },
        { id: 'vidyut-apghatan-q3', difficulty: 'hard', text: 'विद्युत अपघटन में गैस के बुलबुले कहाँ दिखते हैं?', options: [
          { id: 'a', text: 'बैटरी के ऊपर', correct: false, misconception: 'electrolysis-battery', feedback: 'बुलबुले द्रव में डूबे इलेक्ट्रोडों पर बनते हैं।' },
          { id: 'b', text: 'इलेक्ट्रोडों पर', correct: true },
          { id: 'c', text: 'तारों के बीच हवा में', correct: false, misconception: 'electrolysis-air', feedback: 'बुलबुले द्रव के अंदर इलेक्ट्रोडों पर बनते हैं।' },
          { id: 'd', text: 'केवल बर्तन की तली में', correct: false, misconception: 'electrolysis-bottom', feedback: 'बुलबुले इलेक्ट्रोडों की सतह पर बनते हैं।' } ] },
      ] }],
  },
  {
    id: 'sci8-prakritik-ghatna', subject: 'विज्ञान', classLevel: 8, title: 'कुछ प्राकृतिक घटनाएँ',
    concepts: [{
      id: 'bijli-bhukamp', title: 'बिजली और भूकंप से सुरक्षा',
      keywords: ['बिजली', 'तड़ित', 'भूकंप', 'lightning', 'earthquake'],
      card: { points: [
        'आसमान की बिजली एक बहुत बड़ी विद्युत चिंगारी है।',
        'ऊँची इमारतों पर तड़ित चालक लगाया जाता है, जो बिजली को सुरक्षित ज़मीन तक पहुँचाता है।',
        'भूकंप आने पर खुली जगह जाना या मज़बूत मेज़ के नीचे छिपना सुरक्षित होता है।',
      ], example: 'गाँव के स्कूल की छत पर लगी धातु की छड़ तड़ित चालक है।' },
      questions: [
        { id: 'bijli-bhukamp-q1', difficulty: 'easy', text: 'तड़ित चालक का काम क्या है?', options: [
          { id: 'a', text: 'बिजली बनाना', correct: false, misconception: 'rod-makes-lightning', feedback: 'तड़ित चालक बिजली बनाता नहीं, उसे सुरक्षित राह देता है।' },
          { id: 'b', text: 'बारिश रोकना', correct: false, misconception: 'rod-stops-rain', feedback: 'तड़ित चालक का बारिश से कोई लेना-देना नहीं।' },
          { id: 'c', text: 'बिजली को सुरक्षित ज़मीन तक पहुँचाना', correct: true },
          { id: 'd', text: 'इमारत को ऊँचा दिखाना', correct: false, misconception: 'rod-show', feedback: 'इसका काम सुरक्षा है, दिखावा नहीं।' } ] },
        { id: 'bijli-bhukamp-q2', difficulty: 'medium', text: 'आँधी-बिजली में कहाँ खड़ा होना सबसे ख़तरनाक है?', options: [
          { id: 'a', text: 'पक्के मकान के अंदर', correct: false, misconception: 'lightning-inside', feedback: 'मकान के अंदर रहना सुरक्षित होता है।' },
          { id: 'b', text: 'छोटी झाड़ी के पास', correct: false, misconception: 'lightning-bush', feedback: 'सबसे ख़तरनाक अकेला ऊँचा पेड़ होता है।' },
          { id: 'c', text: 'खुले मैदान में लेट जाना सुरक्षित है', correct: false, misconception: 'lightning-lie', feedback: 'मैदान में उकड़ूँ बैठना बेहतर है, लेटना नहीं।' },
          { id: 'd', text: 'अकेले ऊँचे पेड़ के नीचे', correct: true } ] },
        { id: 'bijli-bhukamp-q3', difficulty: 'hard', text: 'भूकंप के झटकों में सबसे सुरक्षित काम क्या है?', options: [
          { id: 'a', text: 'लिफ़्ट से नीचे भागना', correct: false, misconception: 'quake-lift', feedback: 'भूकंप में लिफ़्ट का उपयोग ख़तरनाक है।' },
          { id: 'b', text: 'मज़बूत मेज़ के नीचे छिपना या खुली जगह जाना', correct: true },
          { id: 'c', text: 'खिड़की के पास खड़े रहना', correct: false, misconception: 'quake-window', feedback: 'खिड़की का शीशा टूट सकता है, उससे दूर रहें।' },
          { id: 'd', text: 'सीढ़ियों पर भीड़ लगाना', correct: false, misconception: 'quake-stairs', feedback: 'भीड़ और घबराहट से चोट लग सकती है।' } ] },
      ] }],
  },
  {
    id: 'sci8-prakash', subject: 'विज्ञान', classLevel: 8, title: 'प्रकाश',
    concepts: [{
      id: 'paravartan', title: 'प्रकाश का परावर्तन',
      keywords: ['प्रकाश', 'दर्पण', 'परावर्तन', 'light', 'mirror', 'reflection'],
      card: { points: [
        'प्रकाश सीधी रेखा में चलता है।',
        'चिकनी सतह जैसे दर्पण से प्रकाश नियमित रूप से परावर्तित होता है।',
        'दर्पण के प्रतिबिंब में बायाँ और दायाँ उल्टा दिखता है।',
      ], example: 'सुबह दर्पण में चेहरा देखना प्रकाश के परावर्तन से ही संभव है।' },
      questions: [
        { id: 'paravartan-q1', difficulty: 'easy', text: 'दर्पण में चेहरा क्यों दिखता है?', options: [
          { id: 'a', text: 'दर्पण खुद रोशनी बनाता है', correct: false, misconception: 'mirror-makes-light', feedback: 'दर्पण रोशनी बनाता नहीं, उसे परावर्तित करता है।' },
          { id: 'b', text: 'प्रकाश के परावर्तन से', correct: true },
          { id: 'c', text: 'दर्पण पारदर्शी होता है', correct: false, misconception: 'mirror-transparent', feedback: 'दर्पण पारदर्शी नहीं होता।' },
          { id: 'd', text: 'आँखें रोशनी भेजती हैं', correct: false, misconception: 'mirror-eyes', feedback: 'रोशनी वस्तु से दर्पण तक जाती है, आँखों से नहीं निकलती।' } ] },
        { id: 'paravartan-q2', difficulty: 'medium', text: 'दर्पण के प्रतिबिंब में क्या उल्टा होता है?', options: [
          { id: 'a', text: 'ऊपर और नीचे', correct: false, misconception: 'mirror-up-down', feedback: 'दर्पण में ऊपर-नीचे नहीं, बायाँ-दायाँ उल्टा होता है।' },
          { id: 'b', text: 'बायाँ और दायाँ', correct: true },
          { id: 'c', text: 'सारे रंग बदल जाते हैं', correct: false, misconception: 'mirror-colors', feedback: 'रंग वही रहते हैं, केवल बायाँ-दायाँ बदलता है।' },
          { id: 'd', text: 'आकार आधा हो जाता है', correct: false, misconception: 'mirror-half', feedback: 'समतल दर्पण में प्रतिबिंब का आकार वस्तु जितना ही होता है।' } ] },
        { id: 'paravartan-q3', difficulty: 'hard', text: 'खुरदुरी दीवार से परावर्तन कैसा होता है?', options: [
          { id: 'a', text: 'नियमित परावर्तन', correct: false, misconception: 'diffuse-regular', feedback: 'नियमित परावर्तन चिकनी सतह से होता है, खुरदुरी से प्रकाश बिखरता है।' },
          { id: 'b', text: 'कोई परावर्तन नहीं होता', correct: false, misconception: 'diffuse-none', feedback: 'दीवार से भी परावर्तन होता है, तभी वह दिखती है।' },
          { id: 'c', text: 'बिखरा हुआ (विसरित) परावर्तन', correct: true },
          { id: 'd', text: 'केवल अवशोषण होता है', correct: false, misconception: 'diffuse-absorb', feedback: 'कुछ प्रकाश अवशोषित होता है, पर परावर्तन भी होता है।' } ] },
      ] }],
  },
  {
    id: 'sci8-taare', subject: 'विज्ञान', classLevel: 8, title: 'तारे और सौर मंडल',
    concepts: [{
      id: 'saur-mandal', title: 'सौर मंडल: हमारा पड़ोस',
      keywords: ['सौर मंडल', 'ग्रह', 'तारे', 'चाँद', 'solar system', 'planet', 'star'],
      card: { points: [
        'सूरज के चारों ओर आठ ग्रह घूमते हैं।',
        'पृथ्वी तीसरा ग्रह है और चाँद पृथ्वी का उपग्रह है।',
        'तारे खुद की रोशनी से चमकते हैं, ग्रह सूरज की रोशनी से दिखते हैं।',
      ], example: 'रात में दिखने वाला चमकीला शुक्र असल में एक ग्रह है, तारा नहीं।' },
      questions: [
        { id: 'saur-mandal-q1', difficulty: 'easy', text: 'सौर मंडल में कुल कितने ग्रह हैं?', options: [
          { id: 'a', text: 'नौ', correct: false, misconception: 'planets-nine', feedback: 'अब आठ ग्रह माने जाते हैं, प्लूटो बौना ग्रह है।' },
          { id: 'b', text: 'आठ', correct: true },
          { id: 'c', text: 'सात', correct: false, misconception: 'planets-seven', feedback: 'ग्रह आठ हैं: बुध से नेपच्यून तक।' },
          { id: 'd', text: 'दस', correct: false, misconception: 'planets-ten', feedback: 'ग्रह आठ ही हैं।' } ] },
        { id: 'saur-mandal-q2', difficulty: 'medium', text: 'चाँद की रोशनी कहाँ से आती है?', options: [
          { id: 'a', text: 'चाँद खुद रोशनी बनाता है', correct: false, misconception: 'moon-own-light', feedback: 'चाँद खुद नहीं चमकता, सूरज की रोशनी उससे टकराकर आती है।' },
          { id: 'b', text: 'पृथ्वी की रोशनी से', correct: false, misconception: 'moon-earth-light', feedback: 'चाँद पर सूरज की रोशनी पड़ती है।' },
          { id: 'c', text: 'सूरज की रोशनी चाँद से टकराकर आती है', correct: true },
          { id: 'd', text: 'तारों की रोशनी से', correct: false, misconception: 'moon-star-light', feedback: 'चाँद की चमक सूरज की रोशनी से है।' } ] },
        { id: 'saur-mandal-q3', difficulty: 'hard', text: 'तारे टिमटिमाते हैं, पर ग्रह क्यों नहीं टिमटिमाते?', options: [
          { id: 'a', text: 'ग्रह बहुत बड़े होते हैं इसलिए', correct: false, misconception: 'twinkle-size', feedback: 'आकार कारण नहीं, दूरी और हवा का असर कारण है।' },
          { id: 'b', text: 'तारे बहुत दूर हैं, उनकी रोशनी हवा से मुड़ती है; ग्रह पास हैं', correct: true },
          { id: 'c', text: 'ग्रह चलते नहीं हैं इसलिए', correct: false, misconception: 'twinkle-move', feedback: 'ग्रह भी चलते हैं, टिमटिमाहट दूरी से जुड़ी है।' },
          { id: 'd', text: 'तारों में आग जलती-बुझती है इसलिए', correct: false, misconception: 'twinkle-fire', feedback: 'टिमटिमाहट हवा में रोशनी के मुड़ने से होती है।' } ] },
      ] }],
  },
  {
    id: 'sci8-pradushan', subject: 'विज्ञान', classLevel: 8, title: 'वायु और जल प्रदूषण',
    concepts: [{
      id: 'pradushan', title: 'वायु और जल प्रदूषण',
      keywords: ['प्रदूषण', 'हवा', 'पानी', 'नदी', 'pollution'],
      card: { points: [
        'गंदी हवा और गंदा पानी सेहत के लिए हानिकारक हैं।',
        'कारखानों का धुआँ और गंदा पानी प्रदूषण के बड़े कारण हैं।',
        'पेड़ लगाना, पानी बचाना और कचरा अलग रखना प्रदूषण घटाता है।',
      ], example: 'गाँव का तालाब गंदा होने से मछलियाँ मरने लगती हैं।' },
      questions: [
        { id: 'pradushan-q1', difficulty: 'easy', text: 'वायु प्रदूषण का बड़ा कारण क्या है?', options: [
          { id: 'a', text: 'पेड़ों की छाया', correct: false, misconception: 'pollution-shade', feedback: 'पेड़ हवा साफ़ करते हैं, गंदी नहीं।' },
          { id: 'b', text: 'कारखानों और गाड़ियों का धुआँ', correct: true },
          { id: 'c', text: 'बारिश का पानी', correct: false, misconception: 'pollution-rain', feedback: 'बारिश प्रदूषण घटाती है।' },
          { id: 'd', text: 'सूरज की रोशनी', correct: false, misconception: 'pollution-sun', feedback: 'धुआँ और गैसें वायु प्रदूषण के कारण हैं।' } ] },
        { id: 'pradushan-q2', difficulty: 'medium', text: 'नदी का पानी पीने योग्य कैसे बनता है?', options: [
          { id: 'a', text: 'केवल ठंडा करके', correct: false, misconception: 'water-cooling-only', feedback: 'ठंडा करने से कीटाणु नहीं मरते, उबालना ज़रूरी है।' },
          { id: 'b', text: 'नमक डालकर', correct: false, misconception: 'water-salt', feedback: 'नमक से पानी शुद्ध नहीं होता।' },
          { id: 'c', text: 'उबालकर और छानकर', correct: true },
          { id: 'd', text: 'रंग डालकर', correct: false, misconception: 'water-color', feedback: 'रंग से पानी साफ़ नहीं, गंदा होता है।' } ] },
        { id: 'pradushan-q3', difficulty: 'hard', text: 'नदियों को साफ़ रखने के लिए सबसे ज़रूरी क्या है?', options: [
          { id: 'a', text: 'नदी में ज़्यादा नावें चलाना', correct: false, misconception: 'ganga-boats', feedback: 'नावों से नदी साफ़ नहीं होती।' },
          { id: 'b', text: 'किनारे और कारखाने बढ़ाना', correct: false, misconception: 'ganga-factories', feedback: 'कारखानों का गंदा पानी नदी को बिगाड़ता है।' },
          { id: 'c', text: 'गंदा पानी और कचरा नदी में न डालना', correct: true },
          { id: 'd', text: 'मछलियाँ ख़त्म करना', correct: false, misconception: 'ganga-fish', feedback: 'मछलियाँ नदी की सेहत का हिस्सा हैं।' } ] },
      ] }],
  },
];

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
  'rabi-is-kharif': { label: 'रबी को ख़रीफ़ समझना' },
  'manure-magic': { label: 'खाद को जादू समझना' },
  'manure-is-pesticide': { label: 'खाद को कीटनाशक समझना' },
  'manure-replaces-water': { label: 'खाद पानी की जगह लेती है' },
  'paddy-water-fish': { label: 'धान का पानी मछली के लिए' },
  'paddy-water-storage': { label: 'धान का पानी भंडारण के लिए' },
  'paddy-water-cold': { label: 'धान का पानी सिर्फ़ ठंडक के लिए' },
  'microbes-visible': { label: 'सूक्ष्मजीव आँख से दिखते हैं' },
  'curd-only-heat': { label: 'दही केवल गर्मी से जमता है' },
  'microbes-only-dirty': { label: 'सूक्ष्मजीव केवल गंदगी में' },
  'microbes-only-water': { label: 'सूक्ष्मजीव केवल पानी में' },
  'microbes-only-hospital': { label: 'सूक्ष्मजीव केवल अस्पताल में' },
  'penicillin-bacteria': { label: 'पेनिसिलिन जीवाणु से बनी' },
  'penicillin-plant': { label: 'पेनिसिलिन पौधे से बनी' },
  'penicillin-oil': { label: 'पेनिसिलिन तेल से बनी' },
  'coal-volcano': { label: 'कोयला राख से बना' },
  'coal-seawater': { label: 'कोयला समुद्र से बना' },
  'coal-fast': { label: 'कोयला जल्दी बनता है' },
  'petroleum-only-petrol': { label: 'पेट्रोलियम से केवल पेट्रोल' },
  'petroleum-food': { label: 'पेट्रोलियम से खाना मिलता है' },
  'petroleum-cloth': { label: 'पेट्रोलियम से केवल कपड़ा' },
  'fuel-endless': { label: 'ईंधन कभी ख़त्म नहीं होगा' },
  'fuel-clean': { label: 'जीवाश्म ईंधन से प्रदूषण नहीं' },
  'fuel-free': { label: 'ईंधन मुफ़्त है इसलिए बचाएँ' },
  'fire-only-fuel': { label: 'आग के लिए केवल ईंधन' },
  'fire-water': { label: 'पानी से आग जलती है' },
  'fire-only-sun': { label: 'धूप से हर चीज़ जलती है' },
  'ignition-max': { label: 'ज्वलन तापमान सबसे ऊँचा तापमान' },
  'ignition-room': { label: 'ज्वलन तापमान कमरे का तापमान' },
  'ignition-boiling': { label: 'ज्वलन तापमान उबलने का तापमान' },
  'candle-glass-cold': { label: 'मोमबत्ती ठंडक से बुझी' },
  'candle-wax-melt': { label: 'मोमबत्ती मोम पिघलने से बुझी' },
  'candle-light-off': { label: 'मोमबत्ती रोशनी बंद होने से बुझी' },
  'park-farming': { label: 'उद्यान खेती के लिए' },
  'park-logging': { label: 'उद्यान लकड़ी के लिए' },
  'park-houses': { label: 'उद्यान घरों के लिए' },
  'deforest-more-rain': { label: 'कटाई से बारिश बढ़ती है' },
  'deforest-clean-air': { label: 'कटाई से हवा साफ़ होती है' },
  'deforest-no-harm': { label: 'कटाई से कोई नुकसान नहीं' },
  'extinct-fast': { label: 'विलुप्त मतलब तेज़ दौड़ने वाला' },
  'extinct-zoo': { label: 'विलुप्त मतलब चिड़ियाघर वाला' },
  'extinct-night': { label: 'विलुप्त मतलब रात में जागने वाला' },
  'cell-heart': { label: 'हृदय सबसे छोटी इकाई' },
  'cell-bone': { label: 'हड्डी सबसे छोटी इकाई' },
  'cell-leaf': { label: 'पत्ता सबसे छोटी इकाई' },
  'nucleus-wall': { label: 'भित्ति कोशिका नियंत्रित करती है' },
  'nucleus-chloroplast': { label: 'हरितलवक नियंत्रण करता है' },
  'nucleus-vacuole': { label: 'रिक्तिका नियंत्रण करती है' },
  'plant-nucleus-diff': { label: 'केंद्रक केवल पौधों में' },
  'plant-membrane-diff': { label: 'झिल्ली केवल पौधों में' },
  'plant-cytoplasm-diff': { label: 'कोशिका द्रव्य केवल पौधों में' },
  'amoeba-eggs': { label: 'अमीबा अंडे देता है' },
  'amoeba-seeds': { label: 'अमीबा बीज बनाता है' },
  'amoeba-birth': { label: 'अमीबा जन्म देता है' },
  'eggs-cow': { label: 'गाय अंडे देती है' },
  'eggs-dog': { label: 'कुत्ता अंडे देता है' },
  'eggs-cat': { label: 'बिल्ली अंडे देती है' },
  'budding-sexual': { label: 'कलिका लैंगिक प्रजनन है' },
  'budding-fission': { label: 'कलिका द्विखंडन है' },
  'budding-spore': { label: 'हाइड्रा बीजाणु से बढ़ता है' },
  'walk-gravity-only': { label: 'चलना केवल गुरुत्व से' },
  'walk-no-friction': { label: 'बिना घर्षण चलना आसान' },
  'walk-air': { label: 'चलना हवा के दबाव से' },
  'oil-weight': { label: 'तेल वज़न के लिए' },
  'oil-shine': { label: 'तेल चमक के लिए' },
  'oil-cooling-only': { label: 'तेल केवल ठंडक के लिए' },
  'ball-tired': { label: 'गेंद थककर रुकती है' },
  'ball-gravity': { label: 'गुरुत्व गेंद रोकता है' },
  'ball-air-only': { label: 'गेंद केवल हवा से रुकती है' },
  'sound-light': { label: 'ध्वनि रोशनी से बनती है' },
  'sound-heat': { label: 'ध्वनि गर्मी से बनती है' },
  'sound-color': { label: 'ध्वनि हवा के रंग से' },
  'moon-cold': { label: 'चाँद पर ठंड से बात नहीं होती' },
  'moon-gravity': { label: 'चाँद पर गुरुत्व से बात नहीं होती' },
  'moon-dark': { label: 'चाँद पर अंधेरे से बात नहीं होती' },
  'pitch-loud': { label: 'तीखापन ज़ोर से होता है' },
  'pitch-heavy': { label: 'भारी आवाज़ तीखी होती है' },
  'pitch-slow': { label: 'धीमी आवाज़ तीखी होती है' },
  'plating-paint': { label: 'परत रंग से चढ़ती है' },
  'plating-rub': { label: 'परत घिसने से चढ़ती है' },
  'plating-melt': { label: 'परत पिघलाकर चढ़ती है' },
  'salt-pure-water': { label: 'शुद्ध पानी अच्छा चालक' },
  'salt-oil': { label: 'तेल बिजली का चालक' },
  'salt-dry-soil': { label: 'सूखी मिट्टी चालक है' },
  'electrolysis-battery': { label: 'बुलबुले बैटरी पर बनते हैं' },
  'electrolysis-air': { label: 'बुलबुले हवा में बनते हैं' },
  'electrolysis-bottom': { label: 'बुलबुले केवल तली में' },
  'rod-makes-lightning': { label: 'तड़ित चालक बिजली बनाता है' },
  'rod-stops-rain': { label: 'तड़ित चालक बारिश रोकता है' },
  'rod-show': { label: 'तड़ित चालक दिखावे के लिए' },
  'lightning-inside': { label: 'मकान के अंदर ख़तरा' },
  'lightning-bush': { label: 'झाड़ी सबसे ख़तरनाक' },
  'lightning-lie': { label: 'मैदान में लेटना सुरक्षित' },
  'quake-lift': { label: 'भूकंप में लिफ़्ट सुरक्षित' },
  'quake-window': { label: 'भूकंप में खिड़की पास सुरक्षित' },
  'quake-stairs': { label: 'भूकंप में सीढ़ियों पर भीड़ ठीक' },
  'mirror-makes-light': { label: 'दर्पण रोशनी बनाता है' },
  'mirror-transparent': { label: 'दर्पण पारदर्शी होता है' },
  'mirror-eyes': { label: 'आँखें रोशनी भेजती हैं' },
  'mirror-up-down': { label: 'दर्पण में ऊपर-नीचे उल्टा' },
  'mirror-colors': { label: 'दर्पण में रंग बदलते हैं' },
  'mirror-half': { label: 'प्रतिबिंब आधा होता है' },
  'diffuse-regular': { label: 'खुरदुरी सतह से नियमित परावर्तन' },
  'diffuse-none': { label: 'दीवार से परावर्तन नहीं' },
  'diffuse-absorb': { label: 'दीवार केवल अवशोषण करती है' },
  'planets-nine': { label: 'ग्रह नौ हैं' },
  'planets-seven': { label: 'ग्रह सात हैं' },
  'planets-ten': { label: 'ग्रह दस हैं' },
  'moon-own-light': { label: 'चाँद खुद चमकता है' },
  'moon-earth-light': { label: 'चाँद पृथ्वी की रोशनी से' },
  'moon-star-light': { label: 'चाँद तारों की रोशनी से' },
  'twinkle-size': { label: 'टिमटिमाहट आकार से' },
  'twinkle-move': { label: 'ग्रह चलते नहीं इसलिए नहीं टिमटिमाते' },
  'twinkle-fire': { label: 'तारों में आग जलती-बुझती है' },
  'pollution-shade': { label: 'छाया प्रदूषण करती है' },
  'pollution-rain': { label: 'बारिश प्रदूषण करती है' },
  'pollution-sun': { label: 'रोशनी प्रदूषण करती है' },
  'water-cooling-only': { label: 'ठंडा करने से पानी शुद्ध' },
  'water-salt': { label: 'नमक से पानी शुद्ध' },
  'water-color': { label: 'रंग से पानी शुद्ध' },
  'ganga-boats': { label: 'नावों से नदी साफ़' },
  'ganga-factories': { label: 'कारखानों से नदी साफ़' },
  'ganga-fish': { label: 'मछलियाँ नदी गंदी करती हैं' },
};

// The whole Class 8 Science subject: Force and Pressure (full pack) plus a
// starter concept for every other chapter, in NCERT chapter order.
export const CHAPTERS = [
  EXTRA_A[0], EXTRA_A[1], EXTRA_A[2], EXTRA_A[3], EXTRA_A[4], EXTRA_A[5], EXTRA_A[6],
  CHAPTER,
  EXTRA_B[0], EXTRA_B[1], EXTRA_B[2], EXTRA_B[3], EXTRA_B[4], EXTRA_B[5], EXTRA_B[6],
];

export const ALL_CONCEPTS = CHAPTERS.flatMap((c) => c.concepts || []);

// Drop-in replacement for the old single-chapter object: same shape the
// screens and mastery engine already use, but with every concept.
export const SUBJECT_PACK = {
  id: 'sci8-full',
  subject: 'विज्ञान',
  classLevel: 8,
  title: 'कक्षा 8 विज्ञान',
  concepts: ALL_CONCEPTS,
};
