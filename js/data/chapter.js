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
      id: 'sanrakshan', title: 'जंगल और जानवरों की रक्षा',
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
      id: 'prajan', title: 'नए जीव कैसे पैदा होते हैं',
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
      id: 'pradushan', title: 'हवा और पानी क्यों गंदे होते हैं',
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
  'manure-chemical': { label: 'गोबर खाद को रासायनिक समझना' },
  'manure-pesticide2': { label: 'खाद को कीटनाशक समझना' },
  'manure-seed': { label: 'खाद को बीज समझना' },
  'urea-natural': { label: 'यूरिया को प्राकृतिक समझना' },
  'urea-pesticide': { label: 'यूरिया को कीटनाशक समझना' },
  'urea-irrigation': { label: 'यूरिया को सिंचाई समझना' },
  'excess-always-double': { label: 'ज़्यादा उर्वरक से फ़सल दोगुनी' },
  'excess-soil-forever': { label: 'ज़्यादा उर्वरक से मिट्टी हमेशा उपजाऊ' },
  'excess-water-clean': { label: 'उर्वरक से पानी साफ़' },
  'drip-more-water': { label: 'ड्रिप में पानी ज़्यादा लगता है' },
  'drip-dry': { label: 'ड्रिप से फ़सल सूखती है' },
  'drip-erosion': { label: 'ड्रिप से मिट्टी बहती है' },
  'overwater-always-good': { label: 'ज़्यादा पानी हमेशा अच्छा' },
  'overwater-fertile': { label: 'ज़्यादा पानी से मिट्टी उपजाऊ' },
  'overwater-no-pests': { label: 'ज़्यादा पानी से कीड़े नहीं' },
  'irrigation-fixed-time': { label: 'सिंचाई बिना देखे रोज़' },
  'irrigation-only-rain': { label: 'सिंचाई केवल बारिश के बाद' },
  'irrigation-only-night': { label: 'सिंचाई केवल रात में' },
  'bread-air': { label: 'आटा हवा से फूलता है' },
  'bread-sugar': { label: 'आटा चीनी से फूलता है' },
  'bread-salt': { label: 'आटा नमक से फूलता है' },
  'vaccine-cure': { label: 'टीका इलाज है' },
  'vaccine-all': { label: 'एक टीका सारी बीमारियों के लिए' },
  'vaccine-adults': { label: 'टीका केवल बड़ों के लिए' },
  'legume-eats-soil': { label: 'दालें मिट्टी खाती हैं' },
  'legume-makes-soil': { label: 'जड़ें मिट्टी बनाती हैं' },
  'legume-leaves-only': { label: 'उपजाऊपन केवल पत्तों से' },
  'malaria-water': { label: 'मलेरिया पानी पीने से' },
  'malaria-air': { label: 'मलेरिया हवा से' },
  'malaria-touch': { label: 'मलेरिया छूने से' },
  'food-spoil-magic': { label: 'खाना अपने आप ख़राब होता है' },
  'food-spoil-salt': { label: 'खाना नमक कम होने से ख़राब' },
  'food-spoil-color': { label: 'खाना रंग बदलने से ख़राब' },
  'prevention-daily-medicine': { label: 'बचाव के लिए रोज़ दवा' },
  'prevention-stay-home': { label: 'बचाव के लिए घर बंद रहना' },
  'prevention-hot-food-only': { label: 'बचाव केवल गर्म खाने से' },
  'coke-spice': { label: 'कोक मसाला है' },
  'coke-wash': { label: 'कोक से कपड़े धुलते हैं' },
  'coke-medicine': { label: 'कोक दवा है' },
  'tar-glass': { label: 'कोल तार से काँच' },
  'tar-paper': { label: 'कोल तार से केवल कागज़' },
  'tar-sugar': { label: 'कोल तार से चीनी' },
  'fossil-alive': { label: 'जीवाश्म ईंधन जीवित हैं' },
  'fossil-bones': { label: 'नाम हड्डियाँ दिखने से' },
  'fossil-eaten': { label: 'जीवाश्म ईंधन खाना है' },
  'solar-petrol': { label: 'पेट्रोल कभी ख़त्म नहीं' },
  'solar-coal': { label: 'कोयला कभी ख़त्म नहीं' },
  'solar-diesel': { label: 'डीज़ल कभी ख़त्म नहीं' },
  'idle-saves': { label: 'खड़ा इंजन ईंधन बचाता है' },
  'idle-strong': { label: 'खड़ा इंजन मज़बूत होता है' },
  'idle-clean': { label: 'खड़े इंजन से प्रदूषण घटता है' },
  'lpg-free': { label: 'LPG मुफ़्त मिलती है' },
  'lpg-endless': { label: 'LPG कभी ख़त्म नहीं' },
  'lpg-auto-cook': { label: 'LPG से खाना अपने आप पकता है' },
  'water-eats-wood': { label: 'पानी लकड़ी खा जाता है' },
  'water-heavy': { label: 'पानी से लकड़ी भारी, इसलिए आग बुझी' },
  'water-smoke': { label: 'धुएँ से आग बुझती है' },
  'oil-water-cost': { label: 'तेल की आग पर पानी कीमत की वजह से नहीं' },
  'oil-water-burns': { label: 'तेल पानी से जलता है' },
  'oil-water-nocool': { label: 'पानी तेल ठंडा नहीं करता' },
  'extinguisher-blows': { label: 'यंत्र आग उड़ाता है' },
  'extinguisher-sound': { label: 'यंत्र आवाज़ से आग बुझाता है' },
  'extinguisher-color': { label: 'यंत्र रंग डालता है' },
  'clean-wet-wood': { label: 'गीली लकड़ी साफ़ ईंधन' },
  'clean-dungcake': { label: 'उपले साफ़ ईंधन' },
  'clean-kerosene': { label: 'मिट्टी का तेल सबसे साफ़' },
  'goodfuel-cheapest': { label: 'अच्छा ईंधन सबसे सस्ता' },
  'goodfuel-heavy': { label: 'अच्छा ईंधन सबसे भारी' },
  'goodfuel-dark': { label: 'अच्छा ईंधन गहरे रंग का' },
  'cng-water': { label: 'CNG पानी से बनती है' },
  'cng-endless': { label: 'CNG कभी ख़त्म नहीं' },
  'cng-nogas': { label: 'CNG में गैस नहीं होती' },
  'tiger-nofood': { label: 'बाघ खाना नहीं खाते' },
  'tiger-sleep': { label: 'बाघ सोने से घटे' },
  'tiger-rain': { label: 'बाघ केवल बारिश से घटे' },
  'sanctuary-show': { label: 'अभयारण्य शो है' },
  'sanctuary-farm': { label: 'अभयारण्य खेत है' },
  'sanctuary-fishing': { label: 'अभयारण्य मछली की जगह' },
  'extinct-no-effect': { label: 'प्रजाति जाने से कोई असर नहीं' },
  'extinct-happy': { label: 'प्रजाति जाने से दूसरे खुश' },
  'extinct-only-self': { label: 'नुकसान केवल उसी प्रजाति का' },
  'roots-leaves-eat': { label: 'पत्ते मिट्टी खाते हैं' },
  'roots-make-daily': { label: 'पेड़ रोज़ मिट्टी बनाते हैं' },
  'roots-shadow-freeze': { label: 'छाया से मिट्टी जमती है' },
  'trees-dust': { label: 'पेड़ धूल उड़ाकर हवा साफ़ करते हैं' },
  'trees-cool-only': { label: 'पेड़ केवल ठंडक से हवा साफ़' },
  'trees-eat-gas': { label: 'पत्ते गैस खा जाते हैं' },
  'flood-clouds': { label: 'बाढ़ बादल रुकने से' },
  'flood-drink': { label: 'बाढ़ पेड़ों के पानी पीने से' },
  'flood-fish': { label: 'बाढ़ मछलियों से' },
  'parts-nucleus-cover': { label: 'केंद्रक आवरण है' },
  'parts-vacuole-cover': { label: 'रिक्तिका आवरण है' },
  'parts-chloro-cover': { label: 'हरितलवक आवरण है' },
  'food-nucleus': { label: 'भोजन केंद्रक में बनता है' },
  'food-vacuole': { label: 'भोजन रिक्तिका में बनता है' },
  'food-membrane': { label: 'भोजन झिल्ली में बनता है' },
  'unicellular-frog': { label: 'मेंढक एककोशिकीय' },
  'unicellular-tree': { label: 'पेड़ एककोशिकीय' },
  'unicellular-fish': { label: 'मछली एककोशिकीय' },
  'see-telescope': { label: 'कोशिका दूरबीन से दिखती है' },
  'see-glasses': { label: 'कोशिका चश्मे से दिखती है' },
  'see-torch': { label: 'कोशिका टॉर्च से दिखती है' },
  'nerve-food': { label: 'तंत्रिका कोशिका खाने के लिए लंबी' },
  'nerve-color': { label: 'तंत्रिका कोशिका रंग के लिए लंबी' },
  'nerve-eggs': { label: 'तंत्रिका कोशिका अंडों के लिए लंबी' },
  'tissue-single': { label: 'ऊतक एक कोशिका है' },
  'tissue-body': { label: 'ऊतक पूरा शरीर है' },
  'tissue-blood': { label: 'ऊतक केवल खून है' },
  'tadpole-puppy': { label: 'टैडपोल को पिल्ला समझना' },
  'tadpole-chick': { label: 'टैडपोल को चूज़ा समझना' },
  'tadpole-calf': { label: 'टैडपोल को बछड़ा समझना' },
  'birth-hen': { label: 'मुर्गी जन्म देती है' },
  'birth-fish': { label: 'मछली जन्म देती है' },
  'birth-butterfly': { label: 'तितली जन्म देती है' },
  'tadpole-flies': { label: 'टैडपोल उड़ता है' },
  'tadpole-land': { label: 'टैडपोल ज़मीन पर रहता है' },
  'tadpole-red': { label: 'टैडपोल लाल होता है' },
  'butterfly-tadpole': { label: 'तितली का चरण टैडपोल' },
  'butterfly-chick': { label: 'तितली का चरण चूज़ा' },
  'butterfly-seed': { label: 'तितली का चरण बीज' },
  'silk-bark': { label: 'रेशम छाल से' },
  'silk-spider': { label: 'रेशम मकड़ी के जाले से' },
  'silk-cotton': { label: 'रेशम कपास से' },
  'meta-cow': { label: 'गाय में कायांतरण' },
  'meta-dog': { label: 'कुत्ते में कायांतरण' },
  'meta-human': { label: 'मनुष्य में पूरा कायांतरण' },
  'sole-light': { label: 'खाँचें हल्केपन के लिए' },
  'sole-beauty': { label: 'खाँचें सुंदरता के लिए' },
  'sole-water': { label: 'खाँचें पानी भरने के लिए' },
  'bearing-heavy': { label: 'बेयरिंग वज़न के लिए' },
  'bearing-noise': { label: 'बेयरिंग आवाज़ के लिए' },
  'bearing-oil': { label: 'बेयरिंग केवल तेल बचाने के लिए' },
  'wet-tire-soft': { label: 'गीली सड़क पर टायर मुलायम' },
  'wet-road-permanent': { label: 'गीली सड़क हमेशा चिकनी' },
  'wet-gravity': { label: 'गीली सड़क पर गुरुत्व घटता है' },
  'friction-static-least': { label: 'स्थैतिक घर्षण सबसे कम' },
  'friction-sliding-least': { label: 'सर्पी घर्षण सबसे कम' },
  'friction-equal': { label: 'सभी घर्षण बराबर' },
  'wheels-lighter': { label: 'पहियों से बक्सा हल्का' },
  'wheels-gravity': { label: 'पहियों से गुरुत्व ख़त्म' },
  'wheels-air': { label: 'पहियों पर हवा धक्का देती है' },
  'static-sleep': { label: 'वस्तु सो रही होती है' },
  'static-glue': { label: 'वस्तु ज़मीन से चिपकती है' },
  'static-weight': { label: 'रुकने पर वज़न बढ़ता है' },
  'fastest-air': { label: 'ध्वनि हवा में सबसे तेज़' },
  'fastest-vacuum': { label: 'ध्वनि निर्वात में सबसे तेज़' },
  'fastest-water': { label: 'ध्वनि केवल पानी में सबसे तेज़' },
  'space-small-blast': { label: 'अंतरिक्ष में आवाज़ धमाके के आकार से' },
  'space-ears': { label: 'अंतरिक्ष में कान बंद' },
  'space-lost': { label: 'आवाज़ रास्ते में खोती है' },
  'thunder-later-made': { label: 'गरज बाद में बनती है' },
  'thunder-slow-clouds': { label: 'गरज बादलों की गति से' },
  'thunder-eyes': { label: 'गरज आँखों की तेज़ी से' },
  'db-meter': { label: 'तीव्रता मीटर में' },
  'db-liter': { label: 'तीव्रता लीटर में' },
  'db-kilo': { label: 'तीव्रता किलो में' },
  'noise-strong-ears': { label: 'शोर से कान मज़बूत' },
  'noise-no-harm': { label: 'शोर से कोई नुकसान नहीं' },
  'noise-sweet': { label: 'शोर से आवाज़ मीठी' },
  'far-air-eats': { label: 'हवा आवाज़ खा जाती है' },
  'far-tired': { label: 'आवाज़ थक जाती है' },
  'far-ears-close': { label: 'दूर से कान बंद' },
  'conductor-distilled': { label: 'आसुत जल अच्छा चालक' },
  'conductor-oil': { label: 'तेल अच्छा चालक' },
  'conductor-honey': { label: 'शहद अच्छा चालक' },
  'led-room-light': { label: 'LED कमरे की रोशनी के लिए' },
  'led-heat': { label: 'LED गर्मी के लिए' },
  'led-decor': { label: 'LED सजावट के लिए' },
  'rain-hot': { label: 'बारिश का पानी गर्मी से चालक' },
  'rain-fast': { label: 'बारिश का पानी तेज़ी से चालक' },
  'rain-cloud-current': { label: 'बादल पानी को बिजली देते हैं' },
  'chrome-weight': { label: 'परत वज़न के लिए' },
  'chrome-hide': { label: 'परत रंग छिपाने के लिए' },
  'chrome-heat': { label: 'परत गर्मी रोकने के लिए' },
  'plating-anode-object': { label: 'वस्तु धनात्मक सिरे से' },
  'plating-no-battery': { label: 'लेपन बिना बैटरी' },
  'plating-outside': { label: 'वस्तु द्रव से बाहर' },
  'galv-heavy': { label: 'गैल्वनीकरण वज़न के लिए' },
  'galv-soft': { label: 'गैल्वनीकरण नरमी के लिए' },
  'galv-color': { label: 'गैल्वनीकरण केवल रंग के लिए' },
  'comb-magnet': { label: 'कंघी चुंबक बनती है' },
  'comb-light-only': { label: 'खिंचाव केवल हल्केपन से' },
  'comb-glue': { label: 'कंघी पर गोंद' },
  'same-charge-stick': { label: 'समान आवेश चिपकते हैं' },
  'same-charge-melt': { label: 'समान आवेश पिघलते हैं' },
  'same-charge-nothing': { label: 'समान आवेशों में कुछ नहीं होता' },
  'lightning-fire': { label: 'बिजली बादलों की आग है' },
  'lightning-sun': { label: 'बिजली सूरज की रोशनी से' },
  'lightning-air-burns': { label: 'बिजली में हवा जलती है' },
  'richter-db': { label: 'भूकंप डेसीबल पर' },
  'richter-thermo': { label: 'भूकंप थर्मामीटर पर' },
  'richter-meter': { label: 'भूकंप मीटर में' },
  'quake-thunder': { label: 'भूकंप गरज से' },
  'quake-waves-only': { label: 'भूकंप केवल लहरों से' },
  'quake-air-pressure': { label: 'भूकंप हवा के दबाव से' },
  'quake-wrong-table': { label: 'मेज़ के नीचे छिपना ग़लत' },
  'quake-wrong-open': { label: 'खुली जगह जाना ग़लत' },
  'quake-wrong-wall': { label: 'खिड़की से दूर रहना ग़लत' },
  'ambulance-beauty': { label: 'एंबुलेंस नाम सजावट के लिए उल्टा' },
  'ambulance-mistake': { label: 'एंबुलेंस नाम ग़लती से उल्टा' },
  'ambulance-driver': { label: 'एंबुलेंस नाम अपने ड्राइवर के लिए' },
  'mirrorimg-bigger': { label: 'समतल दर्पण में प्रतिबिंब बड़ा' },
  'mirrorimg-smaller': { label: 'समतल दर्पण में प्रतिबिंब छोटा' },
  'mirrorimg-half': { label: 'समतल दर्पण में प्रतिबिंब आधा' },
  'multi-mirrors-grow': { label: 'दर्पण बढ़ जाते हैं' },
  'multi-light-grows': { label: 'रोशनी अपने आप बढ़ती है' },
  'multi-illusion-only': { label: 'प्रतिबिंब केवल धोखा है' },
  'image-on-lens': { label: 'प्रतिबिंब लेंस पर' },
  'image-pupil': { label: 'प्रतिबिंब पुतली पर' },
  'image-eyelid': { label: 'प्रतिबिंब पलक पर' },
  'myopia-color': { label: 'दूर धुंधला रंग अंधापन है' },
  'myopia-cataract-only': { label: 'दूर धुंधला हमेशा मोतियाबिंद' },
  'myopia-none': { label: 'दूर धुंधला कोई दोष नहीं' },
  'braille-fast': { label: 'ब्रेल तेज़ लिखने के लिए' },
  'braille-game': { label: 'ब्रेल खेल के लिए' },
  'braille-distance': { label: 'ब्रेल दूर से पढ़ने के लिए' },
  'fullmoon-hidden': { label: 'पूर्णिमा छिपा चाँद' },
  'fullmoon-daily': { label: 'पूर्णिमा हर रोज़' },
  'fullmoon-winter': { label: 'पूर्णिमा केवल सर्दियों में' },
  'newmoon-gone': { label: 'अमावस्या को चाँद गायब' },
  'newmoon-clouds': { label: 'अमावस्या बादलों से' },
  'newmoon-sleep': { label: 'चाँद सो जाता है' },
  'phases-real-shape': { label: 'कलाएँ आकार बदलने से' },
  'phases-earth-shadow': { label: 'कलाएँ पृथ्वी की छाया से' },
  'phases-clouds': { label: 'कलाएँ बादलों से' },
  'satellite-sun': { label: 'सूरज उपग्रह है' },
  'satellite-venus': { label: 'शुक्र उपग्रह है' },
  'satellite-station-only': { label: 'प्राकृतिक उपग्रह केवल स्टेशन' },
  'artsat-rain': { label: 'उपग्रह बारिश लाते हैं' },
  'artsat-light': { label: 'उपग्रह रोशनी के लिए' },
  'artsat-farming': { label: 'उपग्रह सीधे खेती करते हैं' },
  'sun-biggest': { label: 'सूरज सबसे बड़ा तारा' },
  'sun-moves': { label: 'सूरज चलने से बड़ा दिखता है' },
  'sun-yellow': { label: 'सूरज पीलेपन से बड़ा दिखता है' },
  'dirty-water-malaria': { label: 'गंदे पानी से मलेरिया' },
  'dirty-water-glasses': { label: 'गंदे पानी से चश्मा' },
  'dirty-water-nofever': { label: 'गंदे पानी से कोई बीमारी नहीं' },
  'rainwater-stops-rain': { label: 'संचयन बारिश रोकना है' },
  'rainwater-river': { label: 'संचयन नदी मोड़ना है' },
  'rainwater-clouds': { label: 'संचयन बादल बनाना है' },
  'fish-soap-food': { label: 'मछलियाँ साबुन खाती हैं' },
  'fish-sweet': { label: 'मछलियाँ मीठे पानी से मरती हैं' },
  'fish-scared-color': { label: 'मछलियाँ रंग से डरती हैं' },
  'burning-cleans': { label: 'कचरा जलाने से हवा साफ़' },
  'burning-only-mosquito': { label: 'कचरा जलाने से केवल मच्छर मरते हैं' },
  'burning-always-fertile': { label: 'कचरा जलाने से मिट्टी हमेशा उपजाऊ' },
  'cityair-leaves': { label: 'शहर की हवा पत्तों से गंदी' },
  'cityair-rain': { label: 'शहर की हवा बारिश से गंदी' },
  'cityair-rivers': { label: 'शहर की हवा नदियों से गंदी' },
  'smokeair-hair': { label: 'धुएँ का असर बालों पर' },
  'smokeair-nails': { label: 'धुएँ का असर नाखूनों पर' },
  'smokeair-none': { label: 'धुएँ का कोई असर नहीं' },
};


// Full-pack expansion (owner order, late 21 Nov: "sahi kr sara k sara"):
// two more concepts for every starter chapter, merged into CHAPTERS below.
const MORE1 = {
  'sci8-fasal': [
    {
      id: 'khad-aur-urvarak', title: 'खाद और उर्वरक',
      keywords: ['खाद', 'उर्वरक', 'यूरिया', 'गोबर', 'manure', 'fertilizer'],
      card: { points: [
        'खाद प्राकृतिक होती है, जैसे गोबर और सड़े पत्ते।',
        'उर्वरक कारखाने में बनते हैं, जैसे यूरिया।',
        'ज़रूरत से ज़्यादा उर्वरक मिट्टी और पानी को बिगाड़ सकता है।',
      ], example: 'किसान खेत में गोबर की खाद डालकर मिट्टी उपजाऊ बनाता है।' },
      questions: [
        { id: 'khad-aur-urvarak-q1', difficulty: 'easy', text: 'गोबर की खाद किस प्रकार की है?', options: [
          { id: 'a', text: 'प्राकृतिक (जैविक) खाद', correct: true },
          { id: 'b', text: 'रासायनिक उर्वरक', correct: false, misconception: 'manure-chemical', feedback: 'गोबर की खाद प्राकृतिक है, कारखाने में नहीं बनती।' },
          { id: 'c', text: 'कीटनाशक', correct: false, misconception: 'manure-pesticide2', feedback: 'खाद पोषण देती है, कीटनाशक कीड़े मारता है।' },
          { id: 'd', text: 'बीज', correct: false, misconception: 'manure-seed', feedback: 'गोबर बीज नहीं, खाद है।' } ] },
        { id: 'khad-aur-urvarak-q2', difficulty: 'medium', text: 'यूरिया क्या है?', options: [
          { id: 'a', text: 'प्राकृतिक खाद', correct: false, misconception: 'urea-natural', feedback: 'यूरिया कारखाने में बनने वाला रासायनिक उर्वरक है।' },
          { id: 'b', text: 'एक रासायनिक उर्वरक', correct: true },
          { id: 'c', text: 'कीटनाशक', correct: false, misconception: 'urea-pesticide', feedback: 'यूरिया पोषण देता है, कीड़े नहीं मारता।' },
          { id: 'd', text: 'सिंचाई का साधन', correct: false, misconception: 'urea-irrigation', feedback: 'सिंचाई पानी देने को कहते हैं, यूरिया उर्वरक है।' } ] },
        { id: 'khad-aur-urvarak-q3', difficulty: 'hard', text: 'ज़रूरत से ज़्यादा रासायनिक उर्वरक डालने से क्या हो सकता है?', options: [
          { id: 'a', text: 'फ़सल हमेशा दोगुनी होगी', correct: false, misconception: 'excess-always-double', feedback: 'ज़्यादा उर्वरक फ़सल को भी नुकसान पहुँचा सकता है।' },
          { id: 'b', text: 'मिट्टी और पानी प्रदूषित हो सकते हैं', correct: true },
          { id: 'c', text: 'मिट्टी हमेशा उपजाऊ रहेगी', correct: false, misconception: 'excess-soil-forever', feedback: 'लगातार ज़्यादा उर्वरक मिट्टी की सेहत बिगाड़ता है।' },
          { id: 'd', text: 'पानी अपने आप साफ़ होगा', correct: false, misconception: 'excess-water-clean', feedback: 'उर्वरक बहकर पानी को प्रदूषित करता है।' } ] },
      ] },
    {
      id: 'sinchai', title: 'सिंचाई: पानी कैसे दें',
      keywords: ['सिंचाई', 'ड्रिप', 'पानी', 'irrigation', 'drip'],
      card: { points: [
        'सिंचाई का मतलब है फ़सल को समय पर पानी देना।',
        'ड्रिप (टपक) सिंचाई में पानी बूंद-बूंद जड़ों तक जाता है और बचत होती है।',
        'ज़रूरत से ज़्यादा पानी भी नुकसान करता है, जड़ें सड़ सकती हैं।',
      ], example: 'क्यारियों में ड्रिप पाइप से सीधा जड़ों तक पानी पहुँचता है।' },
      questions: [
        { id: 'sinchai-q1', difficulty: 'easy', text: 'ड्रिप (टपक) सिंचाई का सबसे बड़ा फ़ायदा क्या है?', options: [
          { id: 'a', text: 'पानी ज़्यादा लगता है', correct: false, misconception: 'drip-more-water', feedback: 'ड्रिप में पानी कम लगता है, यही उसका फ़ायदा है।' },
          { id: 'b', text: 'फ़सल जल्दी सूखती है', correct: false, misconception: 'drip-dry', feedback: 'ड्रिप से जड़ों को नियमित पानी मिलता है।' },
          { id: 'c', text: 'पानी की बचत होती है', correct: true },
          { id: 'd', text: 'मिट्टी बह जाती है', correct: false, misconception: 'drip-erosion', feedback: 'बूंद-बूंद पानी से मिट्टी नहीं बहती।' } ] },
        { id: 'sinchai-q2', difficulty: 'medium', text: 'खेत में ज़रूरत से ज़्यादा पानी भरने से क्या होगा?', options: [
          { id: 'a', text: 'जड़ें सड़ सकती हैं और फ़सल ख़राब हो सकती है', correct: true },
          { id: 'b', text: 'फ़सल हमेशा अच्छी होगी', correct: false, misconception: 'overwater-always-good', feedback: 'ज़्यादा पानी जड़ों को हवा नहीं मिलने देता।' },
          { id: 'c', text: 'मिट्टी अपने आप उपजाऊ बन जाएगी', correct: false, misconception: 'overwater-fertile', feedback: 'पानी भरने से मिट्टी उपजाऊ नहीं बनती।' },
          { id: 'd', text: 'कीड़े बिल्कुल नहीं बढ़ेंगे', correct: false, misconception: 'overwater-no-pests', feedback: 'ज़्यादा नमी से कुछ कीड़े-रोग बढ़ भी सकते हैं।' } ] },
        { id: 'sinchai-q3', difficulty: 'hard', text: 'सिंचाई कब करनी चाहिए?', options: [
          { id: 'a', text: 'रोज़ एक ही समय पर, बिना देखे', correct: false, misconception: 'irrigation-fixed-time', feedback: 'सिंचाई ज़रूरत देखकर करनी चाहिए, अंधाधुंध नहीं।' },
          { id: 'b', text: 'केवल बारिश के बाद', correct: false, misconception: 'irrigation-only-rain', feedback: 'बारिश न हो तब भी फ़सल को पानी चाहिए हो सकता है।' },
          { id: 'c', text: 'मिट्टी की नमी और फ़सल की ज़रूरत देखकर', correct: true },
          { id: 'd', text: 'केवल रात में', correct: false, misconception: 'irrigation-only-night', feedback: 'समय से ज़्यादा ज़रूरी नमी की जाँच है।' } ] },
      ] },
  ],
  'sci8-sukshmjeev': [
    {
      id: 'sukshmjeev-labh', title: 'सूक्ष्मजीवों के लाभ',
      keywords: ['यीस्ट', 'टीका', 'नाइट्रोजन', 'yeast', 'vaccine'],
      card: { points: [
        'यीस्ट से ब्रेड और जलेबी का घोल फूलता है।',
        'टीके (वैक्सीन) शरीर को बीमारियों से लड़ने के लिए तैयार करते हैं।',
        'दाल वाली फ़सलों की जड़ों के जीवाणु मिट्टी में नाइट्रोजन बढ़ाते हैं।',
      ], example: 'अरहर की फ़सल के बाद खेत की मिट्टी उपजाऊ हो जाती है।' },
      questions: [
        { id: 'sukshmjeev-labh-q1', difficulty: 'easy', text: 'ब्रेड का आटा क्यों फूलता है?', options: [
          { id: 'a', text: 'हवा भर जाने से अपने आप', correct: false, misconception: 'bread-air', feedback: 'आटे में यीस्ट गैस बनाता है, तभी आटा फूलता है।' },
          { id: 'b', text: 'यीस्ट (एक कवक) की वजह से', correct: true },
          { id: 'c', text: 'चीनी की वजह से', correct: false, misconception: 'bread-sugar', feedback: 'चीनी यीस्ट का भोजन है, फूलना यीस्ट से होता है।' },
          { id: 'd', text: 'नमक की वजह से', correct: false, misconception: 'bread-salt', feedback: 'नमक स्वाद देता है, फूलना यीस्ट से होता है।' } ] },
        { id: 'sukshmjeev-labh-q2', difficulty: 'medium', text: 'टीका (वैक्सीन) क्या करता है?', options: [
          { id: 'a', text: 'बीमारी को तुरंत ठीक कर देता है', correct: false, misconception: 'vaccine-cure', feedback: 'टीका बचाव करता है, बीमारी का इलाज नहीं है।' },
          { id: 'b', text: 'एक टीके से सारी बीमारियाँ ख़त्म', correct: false, misconception: 'vaccine-all', feedback: 'हर बीमारी का टीका अलग होता है।' },
          { id: 'c', text: 'शरीर को बीमारी से लड़ने के लिए पहले से तैयार करता है', correct: true },
          { id: 'd', text: 'केवल बड़ों के लिए होता है', correct: false, misconception: 'vaccine-adults', feedback: 'टीके बच्चों को भी लगते हैं, बल्कि सबसे ज़्यादा उन्हीं को।' } ] },
        { id: 'sukshmjeev-labh-q3', difficulty: 'hard', text: 'दाल वाली फ़सल के बाद मिट्टी उपजाऊ क्यों हो जाती है?', options: [
          { id: 'a', text: 'दालें मिट्टी खाती हैं इसलिए', correct: false, misconception: 'legume-eats-soil', feedback: 'मिट्टी उपजाऊ जड़ों के जीवाणुओं से होती है।' },
          { id: 'b', text: 'जड़ों के जीवाणु हवा की नाइट्रोजन मिट्टी में मिलाते हैं', correct: true },
          { id: 'c', text: 'जड़ें नई मिट्टी बनाती हैं', correct: false, misconception: 'legume-makes-soil', feedback: 'जड़ें मिट्टी नहीं बनातीं, नाइट्रोजन बढ़ाती हैं।' },
          { id: 'd', text: 'केवल पत्ते गिरने से', correct: false, misconception: 'legume-leaves-only', feedback: 'मुख्य कारण जड़ों की गांठों के जीवाणु हैं।' } ] },
      ] },
    {
      id: 'sukshmjeev-hani', title: 'सूक्ष्मजीवों से हानि और बचाव',
      keywords: ['मलेरिया', 'हैजा', 'बीमारी', 'सफ़ाई', 'malaria', 'disease'],
      card: { points: [
        'कुछ सूक्ष्मजीव हैजा, दस्त और मलेरिया जैसी बीमारियाँ फैलाते हैं।',
        'खुले रखे खाने में सूक्ष्मजीव बढ़कर उसे ख़राब कर देते हैं।',
        'साफ़ पानी, ढका खाना और हाथ धोना सबसे आसान बचाव है।',
      ], example: 'ढका हुआ खाना मक्खियों और जीवाणुओं से बचा रहता है।' },
      questions: [
        { id: 'sukshmjeev-hani-q1', difficulty: 'easy', text: 'मलेरिया कैसे फैलता है?', options: [
          { id: 'a', text: 'केवल गंदा पानी पीने से', correct: false, misconception: 'malaria-water', feedback: 'मलेरिया मादा एनोफ़िलीज़ मच्छर के काटने से फैलता है।' },
          { id: 'b', text: 'मच्छर के काटने से', correct: true },
          { id: 'c', text: 'हवा से सीधे', correct: false, misconception: 'malaria-air', feedback: 'मलेरिया का वाहक मच्छर है, हवा नहीं।' },
          { id: 'd', text: 'मरीज़ को छूने से', correct: false, misconception: 'malaria-touch', feedback: 'मलेरिया छूने से नहीं, मच्छर से फैलता है।' } ] },
        { id: 'sukshmjeev-hani-q2', difficulty: 'medium', text: 'रखा हुआ खाना ख़राब क्यों हो जाता है?', options: [
          { id: 'a', text: 'उसमें सूक्ष्मजीव बढ़ जाते हैं', correct: true },
          { id: 'b', text: 'खाना अपने आप बदल जाता है', correct: false, misconception: 'food-spoil-magic', feedback: 'खाना सूक्ष्मजीवों की वजह से ख़राब होता है।' },
          { id: 'c', text: 'केवल नमक कम होने से', correct: false, misconception: 'food-spoil-salt', feedback: 'नमक बचाव कर सकता है, पर कारण सूक्ष्मजीव हैं।' },
          { id: 'd', text: 'रंग बदलने से', correct: false, misconception: 'food-spoil-color', feedback: 'रंग बदलना नतीजा है, कारण सूक्ष्मजीव हैं।' } ] },
        { id: 'sukshmjeev-hani-q3', difficulty: 'hard', text: 'बीमारियों से बचाव का सबसे आसान तरीका कौन-सा है?', options: [
          { id: 'a', text: 'रोज़ दवा खाना', correct: false, misconception: 'prevention-daily-medicine', feedback: 'बिना बीमारी दवा खाना बचाव नहीं है।' },
          { id: 'b', text: 'घर से बाहर बिल्कुल न निकलना', correct: false, misconception: 'prevention-stay-home', feedback: 'बचाव सफ़ाई से होता है, बंद रहने से नहीं।' },
          { id: 'c', text: 'खाने से पहले हाथ धोना और साफ़ पानी पीना', correct: true },
          { id: 'd', text: 'केवल गर्म खाना खाना', correct: false, misconception: 'prevention-hot-food-only', feedback: 'गर्म खाना मदद करता है, पर हाथ धोना और साफ़ पानी मूल बचाव है।' } ] },
      ] },
  ],
  'sci8-koyla-petroleum': [
    {
      id: 'koyla-utpad', title: 'कोयले से मिलने वाली चीज़ें',
      keywords: ['कोक', 'कोल तार', 'coke', 'coal tar'],
      card: { points: [
        'कोयले से कोक बनता है, जो धातु निकालने में ईंधन का काम करता है।',
        'कोल तार से रंग, दवाएँ और सड़क की परत बनती है।',
        'कोयला गैस भी एक ईंधन है।',
      ], example: 'लोहे के कारखाने की भट्ठी में कोक जलता है।' },
      questions: [
        { id: 'koyla-utpad-q1', difficulty: 'easy', text: 'कोक कहाँ काम आता है?', options: [
          { id: 'a', text: 'खाने के मसाले में', correct: false, misconception: 'coke-spice', feedback: 'कोक मसाला नहीं, ईंधन है।' },
          { id: 'b', text: 'धातु निकालने में ईंधन के रूप में', correct: true },
          { id: 'c', text: 'कपड़े धोने में', correct: false, misconception: 'coke-wash', feedback: 'कोक से कपड़े नहीं धुलते।' },
          { id: 'd', text: 'सीधे दवा की जगह', correct: false, misconception: 'coke-medicine', feedback: 'कोक दवा नहीं है।' } ] },
        { id: 'koyla-utpad-q2', difficulty: 'medium', text: 'कोल तार से क्या-क्या बनता है?', options: [
          { id: 'a', text: 'काँच', correct: false, misconception: 'tar-glass', feedback: 'काँच रेत से बनता है, कोल तार से नहीं।' },
          { id: 'b', text: 'केवल कागज़', correct: false, misconception: 'tar-paper', feedback: 'कागज़ लकड़ी के गूदे से बनता है।' },
          { id: 'c', text: 'रंग, दवाएँ और सड़क की परत', correct: true },
          { id: 'd', text: 'चीनी', correct: false, misconception: 'tar-sugar', feedback: 'चीनी गन्ने से बनती है।' } ] },
        { id: 'koyla-utpad-q3', difficulty: 'hard', text: 'कोयले और पेट्रोलियम को "जीवाश्म ईंधन" क्यों कहते हैं?', options: [
          { id: 'a', text: 'ये जीवित जीव हैं इसलिए', correct: false, misconception: 'fossil-alive', feedback: 'ये जीवित नहीं, प्राचीन जीवों के अवशेष हैं।' },
          { id: 'b', text: 'इनमें हड्डियाँ दिखती हैं इसलिए', correct: false, misconception: 'fossil-bones', feedback: 'नाम अवशेषों से बना होने के कारण है।' },
          { id: 'c', text: 'ये प्राचीन जीवों के अवशेषों से बने हैं', correct: true },
          { id: 'd', text: 'ये जानवरों का खाना हैं इसलिए', correct: false, misconception: 'fossil-eaten', feedback: 'जीवाश्म ईंधन खाना नहीं, ईंधन है।' } ] },
      ] },
    {
      id: 'indhan-bachat', title: 'ईंधन की बचत',
      keywords: ['बचत', 'सौर ऊर्जा', 'LPG', 'CNG', 'solar'],
      card: { points: [
        'पेट्रोल और डीज़ल सीमित हैं, इन्हें बचाना ज़रूरी है।',
        'साइकिल, पैदल और सार्वजनिक वाहन से ईंधन बचता है।',
        'सौर ऊर्जा कभी ख़त्म नहीं होती और प्रदूषण नहीं करती।',
      ], example: 'पास के बाज़ार तक साइकिल से जाने से पेट्रोल बचता है।' },
      questions: [
        { id: 'indhan-bachat-q1', difficulty: 'easy', text: 'कौन-सी ऊर्जा कभी ख़त्म नहीं होती?', options: [
          { id: 'a', text: 'पेट्रोल', correct: false, misconception: 'solar-petrol', feedback: 'पेट्रोल सीमित है, एक दिन ख़त्म होगा।' },
          { id: 'b', text: 'कोयला', correct: false, misconception: 'solar-coal', feedback: 'कोयला भी सीमित जीवाश्म ईंधन है।' },
          { id: 'c', text: 'सौर ऊर्जा', correct: true },
          { id: 'd', text: 'डीज़ल', correct: false, misconception: 'solar-diesel', feedback: 'डीज़ल पेट्रोलियम से मिलता है, सीमित है।' } ] },
        { id: 'indhan-bachat-q2', difficulty: 'medium', text: 'खड़ी गाड़ी का इंजन चालू रखने से क्या होता है?', options: [
          { id: 'a', text: 'ईंधन बेकार जलता है', correct: true },
          { id: 'b', text: 'ईंधन बचता है', correct: false, misconception: 'idle-saves', feedback: 'खड़ी हालत में इंजन चलाना ईंधन की बर्बादी है।' },
          { id: 'c', text: 'इंजन मज़बूत होता है', correct: false, misconception: 'idle-strong', feedback: 'बेकार चलने से इंजन मज़बूत नहीं होता।' },
          { id: 'd', text: 'प्रदूषण घटता है', correct: false, misconception: 'idle-clean', feedback: 'इंजन चलने से धुआँ निकलता है, प्रदूषण बढ़ता है।' } ] },
        { id: 'indhan-bachat-q3', difficulty: 'hard', text: 'LPG को लकड़ी-उपलों से बेहतर ईंधन क्यों माना जाता है?', options: [
          { id: 'a', text: 'यह मुफ़्त मिलती है', correct: false, misconception: 'lpg-free', feedback: 'LPG मुफ़्त नहीं मिलती, साफ़ जलती है इसलिए बेहतर है।' },
          { id: 'b', text: 'यह कभी ख़त्म नहीं होती', correct: false, misconception: 'lpg-endless', feedback: 'LPG भी पेट्रोलियम से मिलती है, सीमित है।' },
          { id: 'c', text: 'यह साफ़ जलती है और कम धुआँ करती है', correct: true },
          { id: 'd', text: 'इससे खाना अपने आप पकता है', correct: false, misconception: 'lpg-auto-cook', feedback: 'LPG भी जलानी पड़ती है, फ़र्क़ साफ़ जलने का है।' } ] },
      ] },
  ],
  'sci8-dahan': [
    {
      id: 'aag-bujhana', title: 'आग कैसे बुझाएँ',
      keywords: ['आग बुझाना', 'अग्निशामक', 'पानी', 'fire extinguisher'],
      card: { points: [
        'आग के तीन तत्व हैं: ईंधन, हवा और गर्मी। एक भी हटे तो आग बुझती है।',
        'लकड़ी की आग पर पानी ठंडा करके आग बुझाता है।',
        'तेल की आग पर पानी नहीं डालते, मिट्टी या कंबल से हवा रोकते हैं।',
      ], example: 'जलते तेल के बर्तन पर ढक्कन रखने से आग बुझ जाती है।' },
      questions: [
        { id: 'aag-bujhana-q1', difficulty: 'easy', text: 'जलती लकड़ी पर पानी डालने से आग क्यों बुझती है?', options: [
          { id: 'a', text: 'पानी लकड़ी को खा जाता है', correct: false, misconception: 'water-eats-wood', feedback: 'पानी लकड़ी को ठंडा करता है, खाता नहीं।' },
          { id: 'b', text: 'लकड़ी ठंडी होकर ज्वलन तापमान से नीचे आ जाती है', correct: true },
          { id: 'c', text: 'लकड़ी भारी हो जाती है इसलिए', correct: false, misconception: 'water-heavy', feedback: 'वज़न कारण नहीं, ठंडक कारण है।' },
          { id: 'd', text: 'धुआँ बढ़ जाता है इसलिए', correct: false, misconception: 'water-smoke', feedback: 'धुआँ परिणाम है, कारण ठंडक है।' } ] },
        { id: 'aag-bujhana-q2', difficulty: 'medium', text: 'तेल की आग पर पानी क्यों नहीं डालना चाहिए?', options: [
          { id: 'a', text: 'पानी महंगा है इसलिए', correct: false, misconception: 'oil-water-cost', feedback: 'कारण कीमत नहीं, आग फैलने का ख़तरा है।' },
          { id: 'b', text: 'तेल पानी से जलने लगता है', correct: false, misconception: 'oil-water-burns', feedback: 'तेल पानी से जलता नहीं, पानी पर तैरकर फैलता है।' },
          { id: 'c', text: 'तेल पानी पर तैरता है और आग फैल सकती है', correct: true },
          { id: 'd', text: 'पानी तेल को कभी ठंडा नहीं करता', correct: false, misconception: 'oil-water-nocool', feedback: 'मुख्य ख़तरा तैरते तेल से आग का फैलना है।' } ] },
        { id: 'aag-bujhana-q3', difficulty: 'hard', text: 'अग्निशामक यंत्र आग कैसे बुझाता है?', options: [
          { id: 'a', text: 'आग को फूंककर उड़ाकर', correct: false, misconception: 'extinguisher-blows', feedback: 'फूंकने से आग बढ़ सकती है, यंत्र गैस छोड़ता है।' },
          { id: 'b', text: 'कार्बन डाइऑक्साइड छोड़कर हवा (ऑक्सीजन) काट देता है', correct: true },
          { id: 'c', text: 'तेज़ आवाज़ से डराकर', correct: false, misconception: 'extinguisher-sound', feedback: 'आवाज़ से आग नहीं बुझती।' },
          { id: 'd', text: 'आग पर रंग डालकर', correct: false, misconception: 'extinguisher-color', feedback: 'यंत्र रंग नहीं, CO2 गैस छोड़ता है।' } ] },
      ] },
    {
      id: 'achha-indhan', title: 'अच्छा ईंधन कैसा हो',
      keywords: ['ईंधन', 'LPG', 'CNG', 'धुआँ', 'fuel'],
      card: { points: [
        'अच्छा ईंधन ज़्यादा गर्मी देता है और कम धुआँ करता है।',
        'LPG और CNG साफ़ जलने वाले ईंधन हैं।',
        'गीली लकड़ी और उपलों से धुआँ ज़्यादा होता है, जो सेहत के लिए बुरा है।',
      ], example: 'चूल्हे के धुएँ से रसोई में आँखें जलती हैं, LPG से नहीं।' },
      questions: [
        { id: 'achha-indhan-q1', difficulty: 'easy', text: 'इनमें सबसे साफ़ घरेलू ईंधन कौन-सा है?', options: [
          { id: 'a', text: 'गीली लकड़ी', correct: false, misconception: 'clean-wet-wood', feedback: 'गीली लकड़ी सबसे ज़्यादा धुआँ करती है।' },
          { id: 'b', text: 'उपले', correct: false, misconception: 'clean-dungcake', feedback: 'उपलों से भी धुआँ बहुत होता है।' },
          { id: 'c', text: 'LPG', correct: true },
          { id: 'd', text: 'मिट्टी का तेल', correct: false, misconception: 'clean-kerosene', feedback: 'मिट्टी का तेल LPG से ज़्यादा धुआँ करता है।' } ] },
        { id: 'achha-indhan-q2', difficulty: 'medium', text: 'अच्छे ईंधन की पहचान क्या है?', options: [
          { id: 'a', text: 'सबसे सस्ता हो', correct: false, misconception: 'goodfuel-cheapest', feedback: 'सस्ता होना ही पहचान नहीं, गर्मी और धुआँ देखो।' },
          { id: 'b', text: 'ज़्यादा गर्मी दे और कम धुआँ करे', correct: true },
          { id: 'c', text: 'सबसे भारी हो', correct: false, misconception: 'goodfuel-heavy', feedback: 'वज़न से ईंधन अच्छा नहीं होता।' },
          { id: 'd', text: 'रंग गहरा हो', correct: false, misconception: 'goodfuel-dark', feedback: 'रंग का गर्मी से कोई संबंध नहीं।' } ] },
        { id: 'achha-indhan-q3', difficulty: 'hard', text: 'CNG को पेट्रोल से साफ़ ईंधन क्यों कहते हैं?', options: [
          { id: 'a', text: 'यह पानी से बनती है', correct: false, misconception: 'cng-water', feedback: 'CNG एक गैस है, पानी से नहीं बनती।' },
          { id: 'b', text: 'यह कभी ख़त्म नहीं होती', correct: false, misconception: 'cng-endless', feedback: 'CNG भी सीमित जीवाश्म स्रोत से आती है।' },
          { id: 'c', text: 'इसमें कोई गैस होती ही नहीं', correct: false, misconception: 'cng-nogas', feedback: 'CNG खुद एक गैस है।' },
          { id: 'd', text: 'यह लगभग पूरी जलती है और कम हानिकारक गैसें छोड़ती है', correct: true } ] },
      ] },
  ],
};


const MORE2 = {
  'sci8-sanrakshan': [
    {
      id: 'lupt-prajati', title: 'लुप्तप्राय प्रजातियाँ',
      keywords: ['बाघ', 'लुप्तप्राय', 'अभयारण्य', 'शिकार', 'tiger', 'endangered'],
      card: { points: [
        'कुछ जानवर ख़त्म होने के कगार पर हैं, जैसे बाघ और एक सींग वाला गैंडा।',
        'शिकार और जंगलों का कटना इनके घटने के बड़े कारण हैं।',
        'कानून से शिकार पर रोक है और अभयारण्यों में इन्हें सुरक्षा मिलती है।',
      ], example: 'बाघों की गिनती बढ़ाने के लिए बाघ अभयारण्य बनाए गए हैं।' },
      questions: [
        { id: 'lupt-prajati-q1', difficulty: 'easy', text: 'बाघों की संख्या घटने का बड़ा कारण क्या है?', options: [
          { id: 'a', text: 'शिकार और जंगलों का कटना', correct: true },
          { id: 'b', text: 'बाघ खाना नहीं खाते', correct: false, misconception: 'tiger-nofood', feedback: 'बाघ खाना खाते हैं, ख़तरा शिकार और आवास से है।' },
          { id: 'c', text: 'बाघ बहुत सोते हैं', correct: false, misconception: 'tiger-sleep', feedback: 'सोना स्वभाव है, घटने का कारण नहीं।' },
          { id: 'd', text: 'केवल बारिश कम होना', correct: false, misconception: 'tiger-rain', feedback: 'मुख्य कारण शिकार और जंगलों का कटना है।' } ] },
        { id: 'lupt-prajati-q2', difficulty: 'medium', text: 'अभयारण्य (सैंक्चुअरी) क्या है?', options: [
          { id: 'a', text: 'जानवर दिखाने का शो', correct: false, misconception: 'sanctuary-show', feedback: 'अभयारण्य शो नहीं, सुरक्षित क्षेत्र है।' },
          { id: 'b', text: 'जानवरों के लिए सुरक्षित क्षेत्र जहाँ शिकार मना है', correct: true },
          { id: 'c', text: 'खेती की ज़मीन', correct: false, misconception: 'sanctuary-farm', feedback: 'अभयारण्य में खेती नहीं, संरक्षण होता है।' },
          { id: 'd', text: 'मछली पकड़ने की जगह', correct: false, misconception: 'sanctuary-fishing', feedback: 'अभयारण्य जंगली जीवों की रक्षा के लिए है।' } ] },
        { id: 'lupt-prajati-q3', difficulty: 'hard', text: 'एक प्रजाति के ख़त्म होने से प्रकृति पर क्या असर पड़ता है?', options: [
          { id: 'a', text: 'कोई असर नहीं पड़ता', correct: false, misconception: 'extinct-no-effect', feedback: 'हर प्रजाति प्रकृति के संतुलन से जुड़ी है।' },
          { id: 'b', text: 'खाद्य शृंखला बिगड़ती है और संतुलन टूटता है', correct: true },
          { id: 'c', text: 'दूसरे जानवर खुश होते हैं', correct: false, misconception: 'extinct-happy', feedback: 'एक के जाने से दूसरों का खाना या सुरक्षा बिगड़ती है।' },
          { id: 'd', text: 'नुकसान केवल उसी प्रजाति का है', correct: false, misconception: 'extinct-only-self', feedback: 'असर पूरी खाद्य शृंखला पर पड़ता है।' } ] },
      ] },
    {
      id: 'ped-lagao', title: 'पेड़ क्यों बचाएँ',
      keywords: ['पेड़', 'जड़', 'ऑक्सीजन', 'tree', 'oxygen'],
      card: { points: [
        'पेड़ कार्बन डाइऑक्साइड लेकर ऑक्सीजन छोड़ते हैं, हवा साफ़ रहती है।',
        'पेड़ों की जड़ें मिट्टी को बाँधे रखती हैं, कटाव रुकता है।',
        'एक पेड़ कई जीवों का घर और सबके लिए छाया है।',
      ], example: 'स्कूल के आँगन का नीम गर्मी में ठंडी छाया देता है।' },
      questions: [
        { id: 'ped-lagao-q1', difficulty: 'easy', text: 'पेड़ मिट्टी को कैसे बचाते हैं?', options: [
          { id: 'a', text: 'पत्ते मिट्टी खाते हैं', correct: false, misconception: 'roots-leaves-eat', feedback: 'पत्ते मिट्टी नहीं खाते, जड़ें उसे बाँधती हैं।' },
          { id: 'b', text: 'जड़ें मिट्टी को बाँधे रखती हैं', correct: true },
          { id: 'c', text: 'पेड़ रोज़ नई मिट्टी बनाते हैं', correct: false, misconception: 'roots-make-daily', feedback: 'पेड़ मिट्टी बनाते नहीं, बाँधकर बचाते हैं।' },
          { id: 'd', text: 'छाया से मिट्टी जम जाती है', correct: false, misconception: 'roots-shadow-freeze', feedback: 'छाया ठंडक देती है, बचाव जड़ों से होता है।' } ] },
        { id: 'ped-lagao-q2', difficulty: 'medium', text: 'पेड़ हवा को कैसे साफ़ करते हैं?', options: [
          { id: 'a', text: 'धूल उड़ाकर', correct: false, misconception: 'trees-dust', feedback: 'धूल उड़ाना सफ़ाई नहीं है।' },
          { id: 'b', text: 'केवल हवा ठंडी करके', correct: false, misconception: 'trees-cool-only', feedback: 'ठंडक के साथ पेड़ गैसों का आदान-प्रदान भी करते हैं।' },
          { id: 'c', text: 'कार्बन डाइऑक्साइड लेकर ऑक्सीजन छोड़कर', correct: true },
          { id: 'd', text: 'पत्ते गैसों को खा जाते हैं', correct: false, misconception: 'trees-eat-gas', feedback: 'पत्ते CO2 लेकर भोजन बनाते हैं और ऑक्सीजन छोड़ते हैं।' } ] },
        { id: 'ped-lagao-q3', difficulty: 'hard', text: 'जंगल कटने से बाढ़ क्यों बढ़ती है?', options: [
          { id: 'a', text: 'जंगल बादल रोकते थे इसलिए', correct: false, misconception: 'flood-clouds', feedback: 'कारण बादल नहीं, मिट्टी और बहाव है।' },
          { id: 'b', text: 'पेड़ों के बिना पानी तेज़ बहता है और मिट्टी कटती है', correct: true },
          { id: 'c', text: 'पेड़ पानी पीते थे, अब पानी बच गया', correct: false, misconception: 'flood-drink', feedback: 'मुख्य कारण जड़ों का मिट्टी न बाँधना है।' },
          { id: 'd', text: 'मछलियाँ घट जाती हैं इसलिए', correct: false, misconception: 'flood-fish', feedback: 'मछलियों से बाढ़ का सीधा संबंध नहीं।' } ] },
      ] },
  ],
  'sci8-koshika': [
    {
      id: 'koshika-bhag', title: 'कोशिका के भाग',
      keywords: ['झिल्ली', 'रिक्तिका', 'हरितलवक', 'membrane', 'chloroplast'],
      card: { points: [
        'कोशिका झिल्ली कोशिका का बाहरी आवरण है, जो चीज़ों का आना-जाना संभालती है।',
        'कोशिका द्रव्य में कोशिका के सारे भाग तैरते हैं।',
        'पौधों के हरितलवक में सूरज की रोशनी से भोजन बनता है।',
      ], example: 'कोशिका एक छोटे कमरे जैसी है: दीवार झिल्ली, मुखिया केंद्रक।' },
      questions: [
        { id: 'koshika-bhag-q1', difficulty: 'easy', text: 'कोशिका का बाहरी आवरण क्या है?', options: [
          { id: 'a', text: 'केंद्रक', correct: false, misconception: 'parts-nucleus-cover', feedback: 'केंद्रक बीच में होता है, आवरण झिल्ली है।' },
          { id: 'b', text: 'कोशिका झिल्ली', correct: true },
          { id: 'c', text: 'रिक्तिका', correct: false, misconception: 'parts-vacuole-cover', feedback: 'रिक्तिका भंडारण करती है, आवरण नहीं है।' },
          { id: 'd', text: 'हरितलवक', correct: false, misconception: 'parts-chloro-cover', feedback: 'हरितलवक भोजन बनाता है, आवरण नहीं है।' } ] },
        { id: 'koshika-bhag-q2', difficulty: 'medium', text: 'पौधों की कोशिका में भोजन कहाँ बनता है?', options: [
          { id: 'a', text: 'केंद्रक में', correct: false, misconception: 'food-nucleus', feedback: 'केंद्रक नियंत्रण करता है, भोजन नहीं बनाता।' },
          { id: 'b', text: 'रिक्तिका में', correct: false, misconception: 'food-vacuole', feedback: 'रिक्तिका भंडारण करती है।' },
          { id: 'c', text: 'हरितलवक में', correct: true },
          { id: 'd', text: 'झिल्ली में', correct: false, misconception: 'food-membrane', feedback: 'झिल्ली आवरण है, भोजन हरितलवक में बनता है।' } ] },
        { id: 'koshika-bhag-q3', difficulty: 'hard', text: 'एककोशिकीय जीव कौन-सा है?', options: [
          { id: 'a', text: 'मेंढक', correct: false, misconception: 'unicellular-frog', feedback: 'मेंढक बहुकोशिकीय है।' },
          { id: 'b', text: 'अमीबा', correct: true },
          { id: 'c', text: 'पेड़', correct: false, misconception: 'unicellular-tree', feedback: 'पेड़ में करोड़ों कोशिकाएँ होती हैं।' },
          { id: 'd', text: 'मछली', correct: false, misconception: 'unicellular-fish', feedback: 'मछली भी बहुकोशिकीय है।' } ] },
      ] },
    {
      id: 'koshika-aakar', title: 'कोशिकाओं के आकार और काम',
      keywords: ['ऊतक', 'तंत्रिका कोशिका', 'सूक्ष्मदर्शी', 'tissue', 'nerve cell'],
      card: { points: [
        'कोशिकाएँ काम के हिसाब से अलग आकार की होती हैं।',
        'तंत्रिका कोशिका लंबी होती है ताकि संदेश दूर तक जाए।',
        'एक ही काम करने वाली कोशिकाओं के समूह को ऊतक कहते हैं।',
      ], example: 'पेशी कोशिकाएँ सिकुड़कर हाथ-पैर हिलाती हैं।' },
      questions: [
        { id: 'koshika-aakar-q1', difficulty: 'easy', text: 'कोशिकाएँ देखने के लिए क्या चाहिए?', options: [
          { id: 'a', text: 'दूरबीन', correct: false, misconception: 'see-telescope', feedback: 'दूरबीन दूर की चीज़ों के लिए है, कोशिका के लिए सूक्ष्मदर्शी चाहिए।' },
          { id: 'b', text: 'सूक्ष्मदर्शी', correct: true },
          { id: 'c', text: 'केवल चश्मा', correct: false, misconception: 'see-glasses', feedback: 'चश्मे से कोशिका नहीं दिखती।' },
          { id: 'd', text: 'टॉर्च', correct: false, misconception: 'see-torch', feedback: 'टॉर्च रोशनी देती है, बड़ा करके नहीं दिखाती।' } ] },
        { id: 'koshika-aakar-q2', difficulty: 'medium', text: 'तंत्रिका कोशिका लंबी क्यों होती है?', options: [
          { id: 'a', text: 'खाना जमा करने के लिए', correct: false, misconception: 'nerve-food', feedback: 'इसका काम संदेश पहुँचाना है, भंडारण नहीं।' },
          { id: 'b', text: 'संदेश दूर तक पहुँचाने के लिए', correct: true },
          { id: 'c', text: 'रंग बनाने के लिए', correct: false, misconception: 'nerve-color', feedback: 'तंत्रिका कोशिका रंग नहीं बनाती।' },
          { id: 'd', text: 'अंडे देने के लिए', correct: false, misconception: 'nerve-eggs', feedback: 'तंत्रिका कोशिका अंडे नहीं देती।' } ] },
        { id: 'koshika-aakar-q3', difficulty: 'hard', text: 'ऊतक किसे कहते हैं?', options: [
          { id: 'a', text: 'एक अकेली कोशिका को', correct: false, misconception: 'tissue-single', feedback: 'एक कोशिका ऊतक नहीं, कोशिकाओं का समूह ऊतक है।' },
          { id: 'b', text: 'पूरे शरीर को', correct: false, misconception: 'tissue-body', feedback: 'शरीर अंगों से बनता है, ऊतक कोशिकाओं का समूह है।' },
          { id: 'c', text: 'एक ही काम करने वाली कोशिकाओं का समूह', correct: true },
          { id: 'd', text: 'केवल खून को', correct: false, misconception: 'tissue-blood', feedback: 'खून एक ऊतक है, पर ऊतक केवल खून नहीं होता।' } ] },
      ] },
  ],
  'sci8-prajan': [
    {
      id: 'anda-bachcha', title: 'अंडे देने वाले और बच्चे देने वाले',
      keywords: ['अंडा', 'टैडपोल', 'मेंढक', 'egg', 'tadpole'],
      card: { points: [
        'पक्षी, मछली और मेंढक अंडे देते हैं।',
        'गाय, बकरी और कुत्ता जैसे स्तनधारी बच्चे को जन्म देते हैं।',
        'मेंढक के अंडे से टैडपोल निकलता है, जो बाद में मेंढक बनता है।',
      ], example: 'तालाब में मेंढक के छोटे टैडपोल तैरते दिखते हैं।' },
      questions: [
        { id: 'anda-bachcha-q1', difficulty: 'easy', text: 'मेंढक के बच्चे को क्या कहते हैं?', options: [
          { id: 'a', text: 'पिल्ला', correct: false, misconception: 'tadpole-puppy', feedback: 'पिल्ला कुत्ते का बच्चा है।' },
          { id: 'b', text: 'टैडपोल', correct: true },
          { id: 'c', text: 'चूज़ा', correct: false, misconception: 'tadpole-chick', feedback: 'चूज़ा मुर्गी का बच्चा है।' },
          { id: 'd', text: 'बछड़ा', correct: false, misconception: 'tadpole-calf', feedback: 'बछड़ा गाय का बच्चा है।' } ] },
        { id: 'anda-bachcha-q2', difficulty: 'medium', text: 'कौन-सा जानवर बच्चे को जन्म देता है?', options: [
          { id: 'a', text: 'मुर्गी', correct: false, misconception: 'birth-hen', feedback: 'मुर्गी अंडे देती है।' },
          { id: 'b', text: 'मछली', correct: false, misconception: 'birth-fish', feedback: 'मछली अंडे देती है।' },
          { id: 'c', text: 'बकरी', correct: true },
          { id: 'd', text: 'तितली', correct: false, misconception: 'birth-butterfly', feedback: 'तितली अंडे देती है।' } ] },
        { id: 'anda-bachcha-q3', difficulty: 'hard', text: 'टैडपोल बड़े मेंढक से अलग कैसे है?', options: [
          { id: 'a', text: 'वह उड़ सकता है', correct: false, misconception: 'tadpole-flies', feedback: 'टैडपोल पानी में तैरता है, उड़ता नहीं।' },
          { id: 'b', text: 'उसके पास पूंछ और गलफड़े होते हैं, पैर नहीं', correct: true },
          { id: 'c', text: 'वह ज़मीन पर रहता है', correct: false, misconception: 'tadpole-land', feedback: 'टैडपोल पानी में रहता है।' },
          { id: 'd', text: 'उसका रंग हमेशा लाल होता है', correct: false, misconception: 'tadpole-red', feedback: 'फ़र्क़ रंग का नहीं, पूंछ और गलफड़ों का है।' } ] },
      ] },
    {
      id: 'kayantaran', title: 'कायांतरण: बच्चे से बड़ा होना',
      keywords: ['कायांतरण', 'तितली', 'प्यूपा', 'रेशम', 'metamorphosis', 'silk'],
      card: { points: [
        'कुछ जीव बड़े होते हुए पूरी तरह बदल जाते हैं, इसे कायांतरण कहते हैं।',
        'तितली के चरण हैं: अंडा, लारवा (इल्ली), प्यूपा, फिर तितली।',
        'रेशम रेशम के कीड़े के कोकून से मिलता है।',
      ], example: 'पत्ते पर इल्ली कुछ दिनों में तितली बन जाती है।' },
      questions: [
        { id: 'kayantaran-q1', difficulty: 'easy', text: 'तितली बनने से ठीक पहले का चरण कौन-सा है?', options: [
          { id: 'a', text: 'टैडपोल', correct: false, misconception: 'butterfly-tadpole', feedback: 'टैडपोल मेंढक का चरण है।' },
          { id: 'b', text: 'प्यूपा', correct: true },
          { id: 'c', text: 'चूज़ा', correct: false, misconception: 'butterfly-chick', feedback: 'चूज़ा पक्षियों का बच्चा है।' },
          { id: 'd', text: 'बीज', correct: false, misconception: 'butterfly-seed', feedback: 'बीज पौधों का होता है।' } ] },
        { id: 'kayantaran-q2', difficulty: 'medium', text: 'रेशम किससे मिलता है?', options: [
          { id: 'a', text: 'पेड़ की छाल से', correct: false, misconception: 'silk-bark', feedback: 'रेशम कीड़े के कोकून से मिलता है।' },
          { id: 'b', text: 'मकड़ी के जाले से', correct: false, misconception: 'silk-spider', feedback: 'जाला मकड़ी का है, रेशम रेशम-कीड़े के कोकून से मिलता है।' },
          { id: 'c', text: 'रेशम के कीड़े के कोकून से', correct: true },
          { id: 'd', text: 'कपास से', correct: false, misconception: 'silk-cotton', feedback: 'कपास से सूती कपड़ा बनता है, रेशम नहीं।' } ] },
        { id: 'kayantaran-q3', difficulty: 'hard', text: 'कायांतरण किनमें होता है?', options: [
          { id: 'a', text: 'गाय में', correct: false, misconception: 'meta-cow', feedback: 'गाय का बछड़ा छोटी गाय जैसा ही होता है।' },
          { id: 'b', text: 'मेंढक और तितली में', correct: true },
          { id: 'c', text: 'कुत्ते में', correct: false, misconception: 'meta-dog', feedback: 'पिल्ला छोटे कुत्ते जैसा होता है, कायांतरण नहीं।' },
          { id: 'd', text: 'मनुष्य में पूरी तरह', correct: false, misconception: 'meta-human', feedback: 'मनुष्य का विकास सीधा होता है, कायांतरण नहीं।' } ] },
      ] },
  ],
  'sci8-gharshan': [
    {
      id: 'gharshan-badhao-ghatao', title: 'घर्षण बढ़ाना और घटाना',
      keywords: ['खाँचें', 'टायर', 'बॉल बेयरिंग', 'ग्रीस', 'grip', 'ball bearing'],
      card: { points: [
        'जूतों के तलो और टायरों की खाँचें घर्षण बढ़ाती हैं ताकि फिसलन न हो।',
        'तेल और ग्रीस लगाने से मशीनों का घर्षण घटता है।',
        'बॉल बेयरिंग लुढ़कने वाला घर्षण लाकर घर्षण और घटाता है।',
      ], example: 'साइकिल की चेन में तेल डालने से पैडल हल्का चलता है।' },
      questions: [
        { id: 'gharshan-badhao-ghatao-q1', difficulty: 'easy', text: 'जूते के तले में खाँचें क्यों होती हैं?', options: [
          { id: 'a', text: 'जूता हल्का करने के लिए', correct: false, misconception: 'sole-light', feedback: 'खाँचें वज़न के लिए नहीं, पकड़ के लिए हैं।' },
          { id: 'b', text: 'घर्षण बढ़ाकर फिसलन रोकने के लिए', correct: true },
          { id: 'c', text: 'सुंदर दिखने के लिए', correct: false, misconception: 'sole-beauty', feedback: 'खाँचों का काम पकड़ है, सजावट नहीं।' },
          { id: 'd', text: 'पानी भरने के लिए', correct: false, misconception: 'sole-water', feedback: 'खाँचें पानी भरने के लिए नहीं होतीं।' } ] },
        { id: 'gharshan-badhao-ghatao-q2', difficulty: 'medium', text: 'बॉल बेयरिंग का काम क्या है?', options: [
          { id: 'a', text: 'मशीन भारी करना', correct: false, misconception: 'bearing-heavy', feedback: 'बेयरिंग वज़न नहीं, घर्षण घटाता है।' },
          { id: 'b', text: 'आवाज़ बढ़ाना', correct: false, misconception: 'bearing-noise', feedback: 'बेयरिंग से चलना आसान और शांत होता है।' },
          { id: 'c', text: 'लुढ़कने वाला घर्षण लाकर घर्षण घटाना', correct: true },
          { id: 'd', text: 'केवल तेल बचाना', correct: false, misconception: 'bearing-oil', feedback: 'मुख्य काम फिसलन वाले घर्षण को लुढ़कने वाले से बदलना है।' } ] },
        { id: 'gharshan-badhao-ghatao-q3', difficulty: 'hard', text: 'गीली सड़क पर गाड़ी क्यों फिसलती है?', options: [
          { id: 'a', text: 'टायर मुलायम हो जाते हैं', correct: false, misconception: 'wet-tire-soft', feedback: 'टायर नहीं बदलते, घर्षण घट जाता है।' },
          { id: 'b', text: 'पानी की परत से टायर और सड़क के बीच घर्षण घट जाता है', correct: true },
          { id: 'c', text: 'सड़क हमेशा के लिए चिकनी हो जाती है', correct: false, misconception: 'wet-road-permanent', feedback: 'सड़क सूखने पर पकड़ लौट आती है।' },
          { id: 'd', text: 'गुरुत्व घट जाता है', correct: false, misconception: 'wet-gravity', feedback: 'गुरुत्व नहीं बदलता, घर्षण घटता है।' } ] },
      ] },
    {
      id: 'gharshan-ke-prakar', title: 'घर्षण के प्रकार',
      keywords: ['स्थैतिक', 'सर्पी', 'लुढ़कने वाला', 'static', 'rolling friction'],
      card: { points: [
        'रुकी वस्तु को हिलाने में लगने वाला घर्षण स्थैतिक घर्षण है, यह सबसे ज़्यादा होता है।',
        'फिसलती वस्तु का घर्षण सर्पी घर्षण है।',
        'लुढ़कने वाला घर्षण सबसे कम होता है, इसलिए पहिया इतना उपयोगी है।',
      ], example: 'भारी बक्सा धकेलना मुश्किल, पर ट्रॉली पर वही बक्सा आसानी से चलता है।' },
      questions: [
        { id: 'gharshan-ke-prakar-q1', difficulty: 'easy', text: 'सबसे कम घर्षण कौन-सा होता है?', options: [
          { id: 'a', text: 'स्थैतिक घर्षण', correct: false, misconception: 'friction-static-least', feedback: 'स्थैतिक घर्षण तो सबसे ज़्यादा होता है।' },
          { id: 'b', text: 'सर्पी घर्षण', correct: false, misconception: 'friction-sliding-least', feedback: 'सर्पी घर्षण लुढ़कने वाले से ज़्यादा होता है।' },
          { id: 'c', text: 'लुढ़कने वाला घर्षण', correct: true },
          { id: 'd', text: 'सभी बराबर होते हैं', correct: false, misconception: 'friction-equal', feedback: 'तीनों अलग-अलग होते हैं।' } ] },
        { id: 'gharshan-ke-prakar-q2', difficulty: 'medium', text: 'भारी बक्से के नीचे पहिये लगाने से धकेलना आसान क्यों होता है?', options: [
          { id: 'a', text: 'बक्सा हल्का हो जाता है', correct: false, misconception: 'wheels-lighter', feedback: 'वज़न वही रहता है, घर्षण बदलता है।' },
          { id: 'b', text: 'लुढ़कने वाला घर्षण फिसलने वाले घर्षण से कम होता है', correct: true },
          { id: 'c', text: 'गुरुत्व ख़त्म हो जाता है', correct: false, misconception: 'wheels-gravity', feedback: 'गुरुत्व नहीं बदलता।' },
          { id: 'd', text: 'हवा धक्का देती है', correct: false, misconception: 'wheels-air', feedback: 'आसानी पहियों के घर्षण से आती है।' } ] },
        { id: 'gharshan-ke-prakar-q3', difficulty: 'hard', text: 'रुकी वस्तु को हिलाना शुरू करना, चलती वस्तु को धकेलते रहने से भारी क्यों लगता है?', options: [
          { id: 'a', text: 'वस्तु सो रही होती है', correct: false, misconception: 'static-sleep', feedback: 'कारण घर्षण का प्रकार है, नींद नहीं।' },
          { id: 'b', text: 'स्थैतिक घर्षण सर्पी घर्षण से ज़्यादा होता है', correct: true },
          { id: 'c', text: 'ज़मीन से चिपक जाती है', correct: false, misconception: 'static-glue', feedback: 'चिपकना नहीं, स्थैतिक घर्षण ज़्यादा होता है।' },
          { id: 'd', text: 'रुकने पर वज़न बढ़ जाता है', correct: false, misconception: 'static-weight', feedback: 'वज़न नहीं बदलता, घर्षण बदलता है।' } ] },
      ] },
  ],
};


const MORE3 = {
  'sci8-dhwani': [
    {
      id: 'dhwani-ka-madhyam', title: 'ध्वनि कैसे फैलती है',
      keywords: ['माध्यम', 'तरंग', 'निर्वात', 'medium', 'vacuum'],
      card: { points: [
        'ध्वनि को फैलने के लिए माध्यम चाहिए: हवा, पानी या ठोस।',
        'ध्वनि ठोस में सबसे तेज़ और गैस में सबसे धीमी चलती है।',
        'खाली जगह (निर्वात) में ध्वनि बिल्कुल नहीं चल सकती।',
      ], example: 'रेल की पटरी पर कान लगाने से ट्रेन की आवाज़ पहले आ जाती है।' },
      questions: [
        { id: 'dhwani-ka-madhyam-q1', difficulty: 'easy', text: 'ध्वनि सबसे तेज़ किसमें चलती है?', options: [
          { id: 'a', text: 'हवा में', correct: false, misconception: 'fastest-air', feedback: 'हवा में ध्वनि सबसे धीमी चलती है।' },
          { id: 'b', text: 'ठोस में', correct: true },
          { id: 'c', text: 'खाली जगह (निर्वात) में', correct: false, misconception: 'fastest-vacuum', feedback: 'निर्वात में ध्वनि चल ही नहीं सकती, माध्यम चाहिए।' },
          { id: 'd', text: 'केवल पानी में सबसे तेज़', correct: false, misconception: 'fastest-water', feedback: 'पानी हवा से तेज़ है, पर ठोस सबसे तेज़ है।' } ] },
        { id: 'dhwani-ka-madhyam-q2', difficulty: 'medium', text: 'अंतरिक्ष में धमाके की आवाज़ क्यों नहीं सुनाई देती?', options: [
          { id: 'a', text: 'धमाका हल्का होता है', correct: false, misconception: 'space-small-blast', feedback: 'कारण धमाके का आकार नहीं, माध्यम की कमी है।' },
          { id: 'b', text: 'वहाँ ध्वनि के लिए माध्यम नहीं है', correct: true },
          { id: 'c', text: 'कान बंद हो जाते हैं', correct: false, misconception: 'space-ears', feedback: 'कान ठीक रहते हैं, हवा ही नहीं है।' },
          { id: 'd', text: 'आवाज़ रास्ते में खो जाती है', correct: false, misconception: 'space-lost', feedback: 'आवाज़ बनती ही माध्यम से है, माध्यम नहीं तो आवाज़ नहीं।' } ] },
        { id: 'dhwani-ka-madhyam-q3', difficulty: 'hard', text: 'बिजली की चमक पहले दिखती है और गरज बाद में सुनाई देती है, क्यों?', options: [
          { id: 'a', text: 'गरज बाद में बनती है', correct: false, misconception: 'thunder-later-made', feedback: 'चमक और गरज साथ बनते हैं, रोशनी तेज़ पहुँचती है।' },
          { id: 'b', text: 'रोशनी की गति ध्वनि से बहुत ज़्यादा है', correct: true },
          { id: 'c', text: 'बादल बहुत धीमे होते हैं', correct: false, misconception: 'thunder-slow-clouds', feedback: 'कारण बादलों की गति नहीं, रोशनी और ध्वनि की गति का फ़र्क़ है।' },
          { id: 'd', text: 'आँखें कानों से तेज़ होती हैं', correct: false, misconception: 'thunder-eyes', feedback: 'कारण इंद्रियाँ नहीं, गतियों का फ़र्क़ है।' } ] },
      ] },
    {
      id: 'aawaz-unchi-neechi', title: 'आवाज़ की तीव्रता और शोर',
      keywords: ['डेसीबल', 'शोर', 'तीव्रता', 'decibel', 'noise'],
      card: { points: [
        'आवाज़ की तीव्रता डेसीबल में नापी जाती है।',
        'बहुत तेज़ शोर से सुनने की क्षमता घट सकती है।',
        'दूर जाने पर आवाज़ धीमी लगती है क्योंकि ऊर्जा फैल जाती है।',
      ], example: 'पास बजता ढोल तेज़ सुनाई देता है, गली के सिरे से धीमा।' },
      questions: [
        { id: 'aawaz-unchi-neechi-q1', difficulty: 'easy', text: 'आवाज़ की तीव्रता किसमें नापी जाती है?', options: [
          { id: 'a', text: 'मीटर में', correct: false, misconception: 'db-meter', feedback: 'मीटर लंबाई नापता है, तीव्रता डेसीबल में होती है।' },
          { id: 'b', text: 'डेसीबल में', correct: true },
          { id: 'c', text: 'लीटर में', correct: false, misconception: 'db-liter', feedback: 'लीटर आयतन की इकाई है।' },
          { id: 'd', text: 'किलो में', correct: false, misconception: 'db-kilo', feedback: 'किलो वज़न की इकाई है।' } ] },
        { id: 'aawaz-unchi-neechi-q2', difficulty: 'medium', text: 'बहुत तेज़ शोर से क्या नुकसान हो सकता है?', options: [
          { id: 'a', text: 'कान मज़बूत होते हैं', correct: false, misconception: 'noise-strong-ears', feedback: 'तेज़ शोर कानों को नुकसान पहुँचाता है।' },
          { id: 'b', text: 'कोई नुकसान नहीं', correct: false, misconception: 'noise-no-harm', feedback: 'लगातार तेज़ शोर सुनने की क्षमता घटाता है।' },
          { id: 'c', text: 'सुनने की क्षमता घट सकती है', correct: true },
          { id: 'd', text: 'आवाज़ मीठी हो जाती है', correct: false, misconception: 'noise-sweet', feedback: 'शोर से आवाज़ मीठी नहीं होती।' } ] },
        { id: 'aawaz-unchi-neechi-q3', difficulty: 'hard', text: 'दूर की आवाज़ धीमी क्यों लगती है?', options: [
          { id: 'a', text: 'हवा आवाज़ को खा जाती है', correct: false, misconception: 'far-air-eats', feedback: 'हवा आवाज़ खाती नहीं, ऊर्जा फैल जाती है।' },
          { id: 'b', text: 'आवाज़ थक जाती है', correct: false, misconception: 'far-tired', feedback: 'आवाज़ थकती नहीं, उसकी तीव्रता फैलकर घटती है।' },
          { id: 'c', text: 'ध्वनि की ऊर्जा फैल जाती है, तीव्रता घटती है', correct: true },
          { id: 'd', text: 'दूर से कान बंद हो जाते हैं', correct: false, misconception: 'far-ears-close', feedback: 'कान खुले रहते हैं, तीव्रता कम पहुँचती है।' } ] },
      ] },
  ],
  'sci8-vidyut-rasayan': [
    {
      id: 'chalak-kuchalak', title: 'चालक और कुचालक द्रव',
      keywords: ['चालक', 'LED', 'आसुत जल', 'conductor', 'distilled'],
      card: { points: [
        'नमक मिला पानी और नींबू का रस बिजली के अच्छे चालक हैं।',
        'शुद्ध (आसुत) पानी बिजली का कमज़ोर चालक है।',
        'द्रव चालक है या नहीं, यह LED लगाकर परखा जाता है।',
      ], example: 'नींबू के रस में तार डालने से छोटा LED जल उठता है।' },
      questions: [
        { id: 'chalak-kuchalak-q1', difficulty: 'easy', text: 'कौन-सा द्रव बिजली का अच्छा चालक है?', options: [
          { id: 'a', text: 'शुद्ध आसुत जल', correct: false, misconception: 'conductor-distilled', feedback: 'आसुत जल कमज़ोर चालक है।' },
          { id: 'b', text: 'नमक मिला पानी', correct: true },
          { id: 'c', text: 'सरसों का तेल', correct: false, misconception: 'conductor-oil', feedback: 'तेल बिजली का चालक नहीं है।' },
          { id: 'd', text: 'शहद', correct: false, misconception: 'conductor-honey', feedback: 'शहद अच्छा चालक नहीं है।' } ] },
        { id: 'chalak-kuchalak-q2', difficulty: 'medium', text: 'द्रव की चालकता परखने में LED क्यों लगाया जाता है?', options: [
          { id: 'a', text: 'कमरे की रोशनी के लिए', correct: false, misconception: 'led-room-light', feedback: 'LED यहाँ संकेत के लिए है, रोशनी के लिए नहीं।' },
          { id: 'b', text: 'धारा बह रही है या नहीं, यह जानने के लिए', correct: true },
          { id: 'c', text: 'गर्मी पैदा करने के लिए', correct: false, misconception: 'led-heat', feedback: 'LED का काम यहाँ जाँच है।' },
          { id: 'd', text: 'सजावट के लिए', correct: false, misconception: 'led-decor', feedback: 'प्रयोग में LED संकेतक है।' } ] },
        { id: 'chalak-kuchalak-q3', difficulty: 'hard', text: 'बारिश का पानी आसुत जल से बेहतर चालक क्यों होता है?', options: [
          { id: 'a', text: 'बारिश का पानी गर्म होता है', correct: false, misconception: 'rain-hot', feedback: 'कारण गर्मी नहीं, घुले लवण हैं।' },
          { id: 'b', text: 'उसमें घुले लवण और अशुद्धियाँ होती हैं', correct: true },
          { id: 'c', text: 'बारिश तेज़ गिरती है इसलिए', correct: false, misconception: 'rain-fast', feedback: 'गिरने की तेज़ी से चालकता नहीं बढ़ती।' },
          { id: 'd', text: 'बादल उसे बिजली देते हैं', correct: false, misconception: 'rain-cloud-current', feedback: 'चालकता घुले लवणों से आती है।' } ] },
      ] },
    {
      id: 'vidyut-lepan', title: 'विद्युत लेपन (इलेक्ट्रोप्लेटिंग)',
      keywords: ['लेपन', 'क्रोमियम', 'गैल्वनीकरण', 'electroplating', 'zinc'],
      card: { points: [
        'विद्युत लेपन से सस्ती धातु पर चमकदार धातु की पतली परत चढ़ती है।',
        'साइकिल के हैंडल पर क्रोमियम की परत ज़ंग से बचाती है और चमक देती है।',
        'लोहे पर ज़िंक की परत चढ़ाने को गैल्वनीकरण कहते हैं।',
      ], example: 'नकली गहनों पर सोने जैसी चमक विद्युत लेपन से आती है।' },
      questions: [
        { id: 'vidyut-lepan-q1', difficulty: 'easy', text: 'साइकिल के हैंडल पर चमकदार परत क्यों होती है?', options: [
          { id: 'a', text: 'वज़न बढ़ाने के लिए', correct: false, misconception: 'chrome-weight', feedback: 'परत पतली होती है, काम सुरक्षा और चमक है।' },
          { id: 'b', text: 'ज़ंग से बचाव और चमक के लिए', correct: true },
          { id: 'c', text: 'रंग छिपाने के लिए', correct: false, misconception: 'chrome-hide', feedback: 'परत का मक़सद छिपाना नहीं, बचाना है।' },
          { id: 'd', text: 'गर्मी रोकने के लिए', correct: false, misconception: 'chrome-heat', feedback: 'क्रोमियम परत ज़ंग रोकती है।' } ] },
        { id: 'vidyut-lepan-q2', difficulty: 'medium', text: 'विद्युत लेपन में जिस वस्तु पर परत चढ़ानी हो, उसे बैटरी के किस सिरे से जोड़ते हैं?', options: [
          { id: 'a', text: 'ऋणात्मक सिरे (कैथोड) से', correct: true },
          { id: 'b', text: 'हमेशा धनात्मक सिरे से', correct: false, misconception: 'plating-anode-object', feedback: 'परत वस्तु पर जमती है, जो कैथोड से जुड़ी होती है।' },
          { id: 'c', text: 'बैटरी से जोड़ते ही नहीं', correct: false, misconception: 'plating-no-battery', feedback: 'बिना धारा के लेपन नहीं होता।' },
          { id: 'd', text: 'वस्तु को द्रव से बाहर रखते हैं', correct: false, misconception: 'plating-outside', feedback: 'वस्तु द्रव में डूबी रहती है तभी परत चढ़ती है।' } ] },
        { id: 'vidyut-lepan-q3', difficulty: 'hard', text: 'लोहे पर ज़िंक की परत (गैल्वनीकरण) क्यों चढ़ाते हैं?', options: [
          { id: 'a', text: 'लोहा भारी करने के लिए', correct: false, misconception: 'galv-heavy', feedback: 'मक़सद वज़न नहीं, ज़ंग से बचाव है।' },
          { id: 'b', text: 'लोहे को ज़ंग से बचाने के लिए', correct: true },
          { id: 'c', text: 'लोहा नरम करने के लिए', correct: false, misconception: 'galv-soft', feedback: 'परत लोहे को नरम नहीं करती।' },
          { id: 'd', text: 'केवल रंग बदलने के लिए', correct: false, misconception: 'galv-color', feedback: 'रंग गौण है, मुख्य काम ज़ंग रोकना है।' } ] },
      ] },
  ],
  'sci8-prakritik-ghatna': [
    {
      id: 'sthir-vidyut', title: 'घर्षण से बिजली (स्थिर विद्युत)',
      keywords: ['आवेश', 'कंघी', 'स्थिर विद्युत', 'charge', 'static'],
      card: { points: [
        'दो वस्तुओं को रगड़ने से उन पर विद्युत आवेश आ जाता है।',
        'रगड़ी हुई कंघी कागज़ के छोटे टुकड़ों को खींच लेती है।',
        'समान आवेश एक-दूसरे को धकेलते हैं, विपरीत आवेश खींचते हैं।',
      ], example: 'सर्दियों में स्वेटर उतारते समय चटचट की आवाज़ आवेश से होती है।' },
      questions: [
        { id: 'sthir-vidyut-q1', difficulty: 'easy', text: 'बालों से रगड़ी कंघी कागज़ के टुकड़े क्यों खींचती है?', options: [
          { id: 'a', text: 'कंघी चुंबक बन जाती है', correct: false, misconception: 'comb-magnet', feedback: 'कंघी चुंबक नहीं बनती, उस पर आवेश आता है।' },
          { id: 'b', text: 'उस पर स्थिर विद्युत आवेश आ जाता है', correct: true },
          { id: 'c', text: 'कागज़ बहुत हल्का होता है, बस इसलिए', correct: false, misconception: 'comb-light-only', feedback: 'हल्कापन मदद करता है, पर खिंचाव आवेश से होता है।' },
          { id: 'd', text: 'कंघी पर गोंद लग जाता है', correct: false, misconception: 'comb-glue', feedback: 'गोंद नहीं, आवेश खींचता है।' } ] },
        { id: 'sthir-vidyut-q2', difficulty: 'medium', text: 'दो समान आवेश वाली वस्तुएँ पास लाने पर क्या होता है?', options: [
          { id: 'a', text: 'वे चिपक जाती हैं', correct: false, misconception: 'same-charge-stick', feedback: 'समान आवेश धकेलते हैं, चिपकते नहीं।' },
          { id: 'b', text: 'वे एक-दूसरे को धकेलती हैं', correct: true },
          { id: 'c', text: 'वे पिघल जाती हैं', correct: false, misconception: 'same-charge-melt', feedback: 'आवेश से वस्तुएँ पिघलती नहीं।' },
          { id: 'd', text: 'कुछ नहीं होता', correct: false, misconception: 'same-charge-nothing', feedback: 'समान आवेशों में प्रतिकर्षण होता है।' } ] },
        { id: 'sthir-vidyut-q3', difficulty: 'hard', text: 'आसमान में बिजली क्यों चमकती है?', options: [
          { id: 'a', text: 'बादल टकराकर आग लगती है', correct: false, misconception: 'lightning-fire', feedback: 'बिजली आग नहीं, जमा आवेश का अचानक बहाव है।' },
          { id: 'b', text: 'बादलों में जमा आवेश अचानक बहता है', correct: true },
          { id: 'c', text: 'सूरज की रोशनी से', correct: false, misconception: 'lightning-sun', feedback: 'बिजली रात में भी चमकती है, कारण आवेश है।' },
          { id: 'd', text: 'हवा जल उठती है', correct: false, misconception: 'lightning-air-burns', feedback: 'हवा जलती नहीं, आवेश बहता है।' } ] },
      ] },
    {
      id: 'bhukamp-suraksha', title: 'भूकंप: कारण और सुरक्षा',
      keywords: ['भूकंप', 'रिक्टर', 'प्लेट', 'earthquake', 'richter'],
      card: { points: [
        'भूकंप पृथ्वी के अंदर की प्लेटों की हलचल से आता है।',
        'भूकंप की तीव्रता रिक्टर पैमाने पर नापी जाती है।',
        'झटकों में मज़बूत मेज़ के नीचे छिपें या खुली जगह जाएँ, लिफ़्ट कभी न लें।',
      ], example: 'स्कूल में भूकंप ड्रिल में सब मेज़ों के नीचे छिपते हैं।' },
      questions: [
        { id: 'bhukamp-suraksha-q1', difficulty: 'easy', text: 'भूकंप की तीव्रता किस पैमाने पर नापी जाती है?', options: [
          { id: 'a', text: 'डेसीबल पर', correct: false, misconception: 'richter-db', feedback: 'डेसीबल ध्वनि के लिए है, भूकंप के लिए रिक्टर है।' },
          { id: 'b', text: 'रिक्टर पैमाने पर', correct: true },
          { id: 'c', text: 'थर्मामीटर पर', correct: false, misconception: 'richter-thermo', feedback: 'थर्मामीटर तापमान नापता है।' },
          { id: 'd', text: 'मीटर में', correct: false, misconception: 'richter-meter', feedback: 'मीटर लंबाई की इकाई है।' } ] },
        { id: 'bhukamp-suraksha-q2', difficulty: 'medium', text: 'भूकंप क्यों आता है?', options: [
          { id: 'a', text: 'बादलों के गरजने से', correct: false, misconception: 'quake-thunder', feedback: 'गरज से ज़मीन नहीं हिलती।' },
          { id: 'b', text: 'पृथ्वी के अंदर की प्लेटों की हलचल से', correct: true },
          { id: 'c', text: 'केवल समुद्र की लहरों से', correct: false, misconception: 'quake-waves-only', feedback: 'लहरें भूकंप का परिणाम हो सकती हैं, कारण प्लेटें हैं।' },
          { id: 'd', text: 'हवा के दबाव से', correct: false, misconception: 'quake-air-pressure', feedback: 'हवा के दबाव से भूकंप नहीं आता।' } ] },
        { id: 'bhukamp-suraksha-q3', difficulty: 'hard', text: 'भूकंप के समय इमारत में सबसे ग़लत काम क्या है?', options: [
          { id: 'a', text: 'मेज़ के नीचे छिपना', correct: false, misconception: 'quake-wrong-table', feedback: 'मेज़ के नीचे छिपना सही काम है।' },
          { id: 'b', text: 'लिफ़्ट से भागना', correct: true },
          { id: 'c', text: 'खुली जगह की ओर जाना', correct: false, misconception: 'quake-wrong-open', feedback: 'खुली जगह जाना सुरक्षित है।' },
          { id: 'd', text: 'खिड़कियों से दूर रहना', correct: false, misconception: 'quake-wrong-wall', feedback: 'खिड़कियों से दूर रहना सही है।' } ] },
      ] },
  ],
};


const MORE4 = {
  'sci8-prakash': [
    {
      id: 'darpan-pratibimb', title: 'दर्पण और प्रतिबिंब',
      keywords: ['प्रतिबिंब', 'एंबुलेंस', 'समतल दर्पण', 'image', 'ambulance'],
      card: { points: [
        'समतल दर्पण में प्रतिबिंब सीधा और वस्तु के बराबर आकार का बनता है।',
        'एंबुलेंस पर नाम उल्टा लिखा होता है ताकि आगे की गाड़ी के दर्पण में सीधा पढ़ा जाए।',
        'दो दर्पण कोण पर रखने से कई प्रतिबिंब बनते हैं।',
      ], example: 'नाई की दुकान में आमने-सामने के दर्पणों में कई प्रतिबिंब दिखते हैं।' },
      questions: [
        { id: 'darpan-pratibimb-q1', difficulty: 'easy', text: 'एंबुलेंस पर "AMBULANCE" उल्टा क्यों लिखा होता है?', options: [
          { id: 'a', text: 'सुंदर दिखने के लिए', correct: false, misconception: 'ambulance-beauty', feedback: 'कारण सजावट नहीं, दर्पण में सीधा पढ़ना है।' },
          { id: 'b', text: 'आगे वाली गाड़ी के दर्पण में सीधा पढ़ा जा सके', correct: true },
          { id: 'c', text: 'ग़लती से लिखा जाता है', correct: false, misconception: 'ambulance-mistake', feedback: 'यह जानबूझकर उल्टा लिखा जाता है।' },
          { id: 'd', text: 'केवल ड्राइवर के पढ़ने के लिए', correct: false, misconception: 'ambulance-driver', feedback: 'यह आगे चल रही गाड़ी के ड्राइवर के लिए है।' } ] },
        { id: 'darpan-pratibimb-q2', difficulty: 'medium', text: 'समतल दर्पण में प्रतिबिंब का आकार कैसा होता है?', options: [
          { id: 'a', text: 'हमेशा वस्तु से बड़ा', correct: false, misconception: 'mirrorimg-bigger', feedback: 'समतल दर्पण में आकार बराबर होता है।' },
          { id: 'b', text: 'वस्तु के बराबर', correct: true },
          { id: 'c', text: 'हमेशा वस्तु से छोटा', correct: false, misconception: 'mirrorimg-smaller', feedback: 'छोटा प्रतिबिंब उत्तल दर्पण में बनता है।' },
          { id: 'd', text: 'ठीक आधा', correct: false, misconception: 'mirrorimg-half', feedback: 'आधा दर्पण भी पूरा प्रतिबिंब दिखा सकता है, आकार बराबर रहता है।' } ] },
        { id: 'darpan-pratibimb-q3', difficulty: 'hard', text: 'दो दर्पण कोण पर रखने से कई प्रतिबिंब क्यों बनते हैं?', options: [
          { id: 'a', text: 'दर्पण बढ़ जाते हैं', correct: false, misconception: 'multi-mirrors-grow', feedback: 'दर्पण दो ही रहते हैं, परावर्तन बार-बार होता है।' },
          { id: 'b', text: 'प्रकाश बार-बार परावर्तित होता है', correct: true },
          { id: 'c', text: 'रोशनी अपने आप बढ़ जाती है', correct: false, misconception: 'multi-light-grows', feedback: 'रोशनी नहीं बढ़ती, प्रतिबिंब दोहराए जाते हैं।' },
          { id: 'd', text: 'यह केवल आँखों का धोखा है', correct: false, misconception: 'multi-illusion-only', feedback: 'प्रतिबिंब सच में बनते हैं, परावर्तन से।' } ] },
      ] },
    {
      id: 'aankh-aur-roshni', title: 'आँख और दृष्टि',
      keywords: ['आँख', 'रेटिना', 'चश्मा', 'ब्रेल', 'eye', 'braille'],
      card: { points: [
        'आँख के अंदर रेटिना (पर्दे) पर प्रतिबिंब बनता है।',
        'दूर या पास धुंधला दिखना दृष्टि दोष है, जो चश्मे से ठीक होता है।',
        'देख न सकने वाले लोग उभरे बिंदुओं वाली ब्रेल लिपि से पढ़ते हैं।',
      ], example: 'दादा जी अख़बार पढ़ने के लिए चश्मा लगाते हैं।' },
      questions: [
        { id: 'aankh-aur-roshni-q1', difficulty: 'easy', text: 'आँख में प्रतिबिंब कहाँ बनता है?', options: [
          { id: 'a', text: 'लेंस के ऊपर', correct: false, misconception: 'image-on-lens', feedback: 'लेंस रोशनी मोड़ता है, प्रतिबिंब रेटिना पर बनता है।' },
          { id: 'b', text: 'रेटिना (पर्दे) पर', correct: true },
          { id: 'c', text: 'पुतली पर', correct: false, misconception: 'image-pupil', feedback: 'पुतली रोशनी का रास्ता है, पर्दा नहीं।' },
          { id: 'd', text: 'पलक पर', correct: false, misconception: 'image-eyelid', feedback: 'पलक सुरक्षा करती है, प्रतिबिंब नहीं बनता वहाँ।' } ] },
        { id: 'aankh-aur-roshni-q2', difficulty: 'medium', text: 'दूर की चीज़ें धुंधली दिखें तो कौन-सा दोष होता है?', options: [
          { id: 'a', text: 'रंग अंधापन', correct: false, misconception: 'myopia-color', feedback: 'रंग अंधापन में रंगों की पहचान घटती है।' },
          { id: 'b', text: 'निकट दृष्टि दोष (मायोपिया)', correct: true },
          { id: 'c', text: 'हर बार मोतियाबिंद ही', correct: false, misconception: 'myopia-cataract-only', feedback: 'मोतियाबिंद लेंस का धुंधलापन है, यह दोष अलग है।' },
          { id: 'd', text: 'कोई दोष नहीं होता', correct: false, misconception: 'myopia-none', feedback: 'दूर धुंधला दिखना एक आम दृष्टि दोष है।' } ] },
        { id: 'aankh-aur-roshni-q3', difficulty: 'hard', text: 'ब्रेल लिपि किसके लिए है?', options: [
          { id: 'a', text: 'तेज़ लिखने के लिए', correct: false, misconception: 'braille-fast', feedback: 'ब्रेल गति के लिए नहीं, स्पर्श से पढ़ने के लिए है।' },
          { id: 'b', text: 'देख न सकने वालों के पढ़ने के लिए', correct: true },
          { id: 'c', text: 'बच्चों के खेल के लिए', correct: false, misconception: 'braille-game', feedback: 'ब्रेल एक पढ़ने की लिपि है।' },
          { id: 'd', text: 'दूर से पढ़ने के लिए', correct: false, misconception: 'braille-distance', feedback: 'ब्रेल छूकर पढ़ी जाती है, दूर से नहीं।' } ] },
      ] },
  ],
  'sci8-taare': [
    {
      id: 'chand-kalaein', title: 'चाँद की कलाएँ',
      keywords: ['पूर्णिमा', 'अमावस्या', 'कलाएँ', 'moon phases', 'full moon'],
      card: { points: [
        'चाँद खुद नहीं चमकता, सूरज की रोशनी से चमकता है।',
        'चाँद के घूमने से उसका रोशन हिस्सा हमें अलग-अलग दिखता है, यही कलाएँ हैं।',
        'पूरा रोशन हिस्सा दिखे तो पूर्णिमा, बिल्कुल न दिखे तो अमावस्या।',
      ], example: 'रोज़ शाम को चाँद देखो, उसका आकार बदलता दिखेगा।' },
      questions: [
        { id: 'chand-kalaein-q1', difficulty: 'easy', text: 'पूर्णिमा कब होती है?', options: [
          { id: 'a', text: 'जब चाँद पूरी तरह छिप जाता है', correct: false, misconception: 'fullmoon-hidden', feedback: 'छिपा चाँद अमावस्या है, पूर्णिमा पर पूरा दिखता है।' },
          { id: 'b', text: 'जब चाँद का पूरा रोशन हिस्सा दिखता है', correct: true },
          { id: 'c', text: 'हर रोज़', correct: false, misconception: 'fullmoon-daily', feedback: 'पूर्णिमा महीने में एक बार आती है।' },
          { id: 'd', text: 'केवल सर्दियों में', correct: false, misconception: 'fullmoon-winter', feedback: 'पूर्णिमा हर महीने होती है।' } ] },
        { id: 'chand-kalaein-q2', difficulty: 'medium', text: 'अमावस्या को चाँद क्यों नहीं दिखता?', options: [
          { id: 'a', text: 'चाँद गायब हो जाता है', correct: false, misconception: 'newmoon-gone', feedback: 'चाँद वहीं रहता है, रोशन हिस्सा हमारी ओर नहीं होता।' },
          { id: 'b', text: 'चाँद का रोशन हिस्सा पृथ्वी की ओर नहीं होता', correct: true },
          { id: 'c', text: 'हमेशा बादल होते हैं', correct: false, misconception: 'newmoon-clouds', feedback: 'साफ़ आसमान में भी अमावस्या को चाँद नहीं दिखता।' },
          { id: 'd', text: 'चाँद सो जाता है', correct: false, misconception: 'newmoon-sleep', feedback: 'चाँद सोता नहीं, दिशा का फ़र्क़ है।' } ] },
        { id: 'chand-kalaein-q3', difficulty: 'hard', text: 'चाँद की कलाएँ बदलने का असली कारण क्या है?', options: [
          { id: 'a', text: 'चाँद का आकार सच में बदलता है', correct: false, misconception: 'phases-real-shape', feedback: 'चाँद का आकार नहीं बदलता, दिखने वाला रोशन हिस्सा बदलता है।' },
          { id: 'b', text: 'पृथ्वी की छाया रोज़ चाँद पर पड़ती है', correct: false, misconception: 'phases-earth-shadow', feedback: 'पृथ्वी की छाया केवल चंद्र ग्रहण में पड़ती है।' },
          { id: 'c', text: 'चाँद के पृथ्वी के चारों ओर घूमने से रोशन हिस्सा अलग-अलग दिखता है', correct: true },
          { id: 'd', text: 'बादलों के आने-जाने से', correct: false, misconception: 'phases-clouds', feedback: 'कलाएँ बादलों से नहीं, घूमने से बदलती हैं।' } ] },
      ] },
    {
      id: 'taare-grah-fark', title: 'तारे, ग्रह और उपग्रह',
      keywords: ['उपग्रह', 'कृत्रिम उपग्रह', 'satellite', 'planet'],
      card: { points: [
        'तारे खुद की रोशनी से चमकते हैं और बहुत दूर हैं।',
        'ग्रह सूरज के चारों ओर घूमते हैं और उसकी रोशनी से दिखते हैं।',
        'उपग्रह ग्रह के चारों ओर घूमता है; कृत्रिम उपग्रह संचार और मौसम के काम आते हैं।',
      ], example: 'टीवी और मौसम की जानकारी कृत्रिम उपग्रहों से मिलती है।' },
      questions: [
        { id: 'taare-grah-fark-q1', difficulty: 'easy', text: 'पृथ्वी का प्राकृतिक उपग्रह कौन-सा है?', options: [
          { id: 'a', text: 'सूरज', correct: false, misconception: 'satellite-sun', feedback: 'सूरज तारा है, पृथ्वी उसका चक्कर लगाती है।' },
          { id: 'b', text: 'चाँद', correct: true },
          { id: 'c', text: 'शुक्र', correct: false, misconception: 'satellite-venus', feedback: 'शुक्र एक ग्रह है।' },
          { id: 'd', text: 'केवल अंतर्राष्ट्रीय अंतरिक्ष स्टेशन', correct: false, misconception: 'satellite-station-only', feedback: 'स्टेशन कृत्रिम है, प्राकृतिक उपग्रह चाँद है।' } ] },
        { id: 'taare-grah-fark-q2', difficulty: 'medium', text: 'कृत्रिम उपग्रह किस काम आते हैं?', options: [
          { id: 'a', text: 'बारिश लाने के लिए', correct: false, misconception: 'artsat-rain', feedback: 'उपग्रह बारिश नहीं लाते, जानकारी देते हैं।' },
          { id: 'b', text: 'संचार, मौसम और नक्शों के लिए', correct: true },
          { id: 'c', text: 'रात में रोशनी के लिए', correct: false, misconception: 'artsat-light', feedback: 'उपग्रह बल्ब नहीं हैं।' },
          { id: 'd', text: 'सीधे खेती करने के लिए', correct: false, misconception: 'artsat-farming', feedback: 'उपग्रह खेती में मदद की जानकारी देते हैं, खेती नहीं करते।' } ] },
        { id: 'taare-grah-fark-q3', difficulty: 'hard', text: 'सूरज भी एक तारा है, फिर दिन में इतना बड़ा क्यों दिखता है?', options: [
          { id: 'a', text: 'वह सबसे बड़ा तारा है', correct: false, misconception: 'sun-biggest', feedback: 'सूरज से बड़े तारे भी हैं, फ़र्क़ दूरी का है।' },
          { id: 'b', text: 'वह हमसे बहुत पास है', correct: true },
          { id: 'c', text: 'वह चलता है इसलिए', correct: false, misconception: 'sun-moves', feedback: 'आकार दिखना दूरी से तय होता है।' },
          { id: 'd', text: 'वह पीला है इसलिए', correct: false, misconception: 'sun-yellow', feedback: 'रंग से आकार नहीं बदलता।' } ] },
      ] },
  ],
  'sci8-pradushan': [
    {
      id: 'jal-pradushan', title: 'जल प्रदूषण और बचाव',
      keywords: ['जल प्रदूषण', 'वर्षा जल', 'तालाब', 'water pollution'],
      card: { points: [
        'गंदा पानी पीने से हैजा और दस्त जैसी बीमारियाँ होती हैं।',
        'पानी उबालकर और छानकर पीने योग्य बनाया जाता है।',
        'बारिश का पानी बचाकर रखना (वर्षा जल संचयन) सूखे में काम आता है।',
      ], example: 'गाँव का कुआँ ढककर रखने से पानी साफ़ रहता है।' },
      questions: [
        { id: 'jal-pradushan-q1', difficulty: 'easy', text: 'गंदा पानी पीने से कौन-सी बीमारी हो सकती है?', options: [
          { id: 'a', text: 'हैजा और दस्त', correct: true },
          { id: 'b', text: 'मलेरिया हमेशा', correct: false, misconception: 'dirty-water-malaria', feedback: 'मलेरिया मच्छर से होता है, गंदे पानी से हैजा-दस्त होते हैं।' },
          { id: 'c', text: 'चश्मे का नंबर बढ़ना', correct: false, misconception: 'dirty-water-glasses', feedback: 'गंदा पानी पेट की बीमारियाँ देता है।' },
          { id: 'd', text: 'कोई बीमारी नहीं होती', correct: false, misconception: 'dirty-water-nofever', feedback: 'गंदा पानी कई बीमारियों की जड़ है।' } ] },
        { id: 'jal-pradushan-q2', difficulty: 'medium', text: 'वर्षा जल संचयन का मतलब क्या है?', options: [
          { id: 'a', text: 'बारिश रोकना', correct: false, misconception: 'rainwater-stops-rain', feedback: 'संचयन का मतलब बचाकर रखना है, रोकना नहीं।' },
          { id: 'b', text: 'बारिश का पानी बचाकर रखना', correct: true },
          { id: 'c', text: 'नदी का रुख मोड़ना', correct: false, misconception: 'rainwater-river', feedback: 'संचयन छत और गड्ढों से पानी जमा करना है।' },
          { id: 'd', text: 'बादल बनाना', correct: false, misconception: 'rainwater-clouds', feedback: 'बादल हम नहीं बनाते, पानी बचाते हैं।' } ] },
        { id: 'jal-pradushan-q3', difficulty: 'hard', text: 'तालाब में साबुन-डिटर्जेंट वाला पानी मिलने से मछलियाँ क्यों मरती हैं?', options: [
          { id: 'a', text: 'मछलियाँ साबुन खाकर पेट भरती हैं', correct: false, misconception: 'fish-soap-food', feedback: 'साबुन खाना नहीं, ज़हर जैसा असर करता है।' },
          { id: 'b', text: 'पानी में ऑक्सीजन घटती है और रसायन हानि पहुँचाते हैं', correct: true },
          { id: 'c', text: 'पानी मीठा हो जाता है', correct: false, misconception: 'fish-sweet', feedback: 'मिठास कारण नहीं, ऑक्सीजन की कमी और रसायन हैं।' },
          { id: 'd', text: 'मछलियाँ रंग बदलने से डरती हैं', correct: false, misconception: 'fish-scared-color', feedback: 'कारण डर नहीं, पानी का बिगड़ना है।' } ] },
      ] },
    {
      id: 'vayu-pradushan', title: 'वायु प्रदूषण और बचाव',
      keywords: ['वायु प्रदूषण', 'धुआँ', 'फेफड़े', 'air pollution', 'smoke'],
      card: { points: [
        'वाहनों और कारखानों का धुआँ शहरों की हवा का सबसे बड़ा प्रदूषक है।',
        'गंदी हवा से फेफड़ों और साँस की बीमारियाँ होती हैं।',
        'कचरा खुले में जलाने से हानिकारक धुआँ फैलता है, पेड़ लगाना बचाव है।',
      ], example: 'खुले में पत्ते जलाने का धुआँ पूरी गली में फैल जाता है।' },
      questions: [
        { id: 'vayu-pradushan-q1', difficulty: 'easy', text: 'कचरा खुले में जलाने से क्या होता है?', options: [
          { id: 'a', text: 'हवा साफ़ हो जाती है', correct: false, misconception: 'burning-cleans', feedback: 'जलाने से हवा साफ़ नहीं, गंदी होती है।' },
          { id: 'b', text: 'हानिकारक धुआँ हवा में मिलता है', correct: true },
          { id: 'c', text: 'केवल मच्छर मरते हैं', correct: false, misconception: 'burning-only-mosquito', feedback: 'धुआँ इंसानों के फेफड़ों को भी नुकसान देता है।' },
          { id: 'd', text: 'मिट्टी हमेशा उपजाऊ हो जाती है', correct: false, misconception: 'burning-always-fertile', feedback: 'राख से थोड़ी मदद हो सकती है, पर धुआँ हानिकारक है।' } ] },
        { id: 'vayu-pradushan-q2', difficulty: 'medium', text: 'शहरों में वायु प्रदूषण का सबसे बड़ा स्रोत क्या है?', options: [
          { id: 'a', text: 'पेड़ों की पत्तियाँ', correct: false, misconception: 'cityair-leaves', feedback: 'पेड़ हवा साफ़ करते हैं।' },
          { id: 'b', text: 'वाहनों और कारखानों का धुआँ', correct: true },
          { id: 'c', text: 'बारिश', correct: false, misconception: 'cityair-rain', feedback: 'बारिश प्रदूषण घटाती है।' },
          { id: 'd', text: 'नदियाँ', correct: false, misconception: 'cityair-rivers', feedback: 'नदियाँ हवा गंदी नहीं करतीं।' } ] },
        { id: 'vayu-pradushan-q3', difficulty: 'hard', text: 'धुआँ वाली हवा में साँस लेने से सबसे ज़्यादा असर किस पर पड़ता है?', options: [
          { id: 'a', text: 'बालों पर', correct: false, misconception: 'smokeair-hair', feedback: 'धुआँ साँस के साथ अंदर जाता है, असर फेफड़ों पर होता है।' },
          { id: 'b', text: 'फेफड़ों और साँस की नली पर', correct: true },
          { id: 'c', text: 'नाखूनों पर', correct: false, misconception: 'smokeair-nails', feedback: 'नाखूनों पर धुएँ का सीधा असर नहीं होता।' },
          { id: 'd', text: 'कोई असर नहीं पड़ता', correct: false, misconception: 'smokeair-none', feedback: 'लगातार धुआँ अस्थमा जैसी बीमारियाँ बढ़ाता है।' } ] },
      ] },
  ],
};

const MORE_ALL = Object.assign({}, MORE1, MORE2, MORE3, MORE4);

// The whole Class 8 Science subject: Force and Pressure (full pack) plus a
// starter concept for every other chapter, in NCERT chapter order.
export const CHAPTERS = [
  EXTRA_A[0], EXTRA_A[1], EXTRA_A[2], EXTRA_A[3], EXTRA_A[4], EXTRA_A[5], EXTRA_A[6],
  CHAPTER,
  EXTRA_B[0], EXTRA_B[1], EXTRA_B[2], EXTRA_B[3], EXTRA_B[4], EXTRA_B[5], EXTRA_B[6],
];

// Full-pack expansion: attach the extra concepts to their chapters before
// the flattened list is built.
for (const ch of CHAPTERS) {
  const extra = MORE_ALL[ch.id];
  if (extra) ch.concepts.push(...extra);
}

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

// ----- Language support (added 22 Nov 2026, owner request) -----
// English is the default language; Hindi remains complete. localizedPack()
// and localizedChapters() return the content in the current language.
import { EN_CHAPTERS, EN_CONCEPTS, EN_MISCONCEPTIONS, EN_PACK_TITLE } from './content-en.js';
import { getLang } from '../lang.js';

function localizeConcept(c) {
  const en = EN_CONCEPTS[c.id];
  if (!en) return c;
  return {
    ...c,
    title: en.title,
    card: { points: (en.points || []).slice(), example: en.example },
    questions: (c.questions || []).map((q) => {
      const eq = (en.questions || {})[q.id];
      if (!eq) return q;
      return {
        ...q,
        text: eq.text,
        options: (q.options || []).map((o) => {
          const eo = (eq.options || {})[o.id];
          if (!eo) return o;
          const out = { ...o, text: eo.text };
          if ('feedback' in eo) out.feedback = eo.feedback;
          return out;
        }),
      };
    }),
  };
}

export function localizedChapters() {
  if (getLang() !== 'en') return CHAPTERS;
  return CHAPTERS.map((ch) => ({
    ...ch,
    title: EN_CHAPTERS[ch.id] || ch.title,
    concepts: (ch.concepts || []).map(localizeConcept),
  }));
}

export function localizedPack() {
  const lang = getLang();
  if (lang !== 'en') return { ...SUBJECT_PACK, lang };
  return {
    id: SUBJECT_PACK.id,
    title: EN_PACK_TITLE,
    lang,
    concepts: localizedChapters().flatMap((ch) => ch.concepts || []),
  };
}

export function misconceptionLabel(tag) {
  if (getLang() === 'en' && EN_MISCONCEPTIONS[tag]) return EN_MISCONCEPTIONS[tag];
  const m = MISCONCEPTIONS[tag];
  return m ? m.label : tag;
}
