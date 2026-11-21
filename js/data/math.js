// LearnMate content file: Class 8 Mathematics pack (base language: Hindi).
// MATH_CHAPTERS holds ordered chapters; each chapter has exactly 3 concepts.
// Each concept has a short Hindi card (points + one example) and exactly 3 MCQ questions.
// Each question has 4 options (a-d); exactly one has correct: true and no other fields.
// Each question also has difficulty: 'easy' | 'medium' | 'hard' (one of each per concept).
// Every wrong option has a misconception tag (a key of MATH_MISCONCEPTIONS) and Hindi feedback.
// MATH_MISCONCEPTIONS maps each tag to a short Hindi label naming the mistake.

export const MATH_PACK_TITLE = 'कक्षा 8 गणित';

export const MATH_CHAPTERS = [
  {
    id: 'math-parimey',
    title: 'परिमेय संख्याएँ',
    concepts: [
      {
        id: 'math-parimey-parichay',
        title: 'परिमेय संख्या क्या है',
        keywords: ['परिमेय', 'भिन्न', 'अंश', 'हर', 'rational', 'fraction'],
        card: {
          points: [
            'परिमेय संख्या वह संख्या है जिसे p/q के रूप में लिखा जा सके, जहाँ p और q पूर्णांक हैं और q ≠ 0।',
            'हर पूर्णांक भी परिमेय संख्या है, क्योंकि उसे हर 1 के साथ लिखा जा सकता है, जैसे 5 = 5/1।',
            'भिन्न, 0.5 जैसी दशमलव संख्याएँ और ऋणात्मक संख्याएँ भी परिमेय हो सकती हैं।',
          ],
          example: 'आधी रोटी को 1/2 लिखते हैं, यह एक परिमेय संख्या है।',
        },
        questions: [
          {
            id: 'math-parimey-parichay-q1',
            difficulty: 'easy',
            text: 'इनमें से कौन-सी परिमेय संख्या है?',
            options: [
              { id: 'a', text: '3/4', correct: true },
              { id: 'b', text: '5/0', misconception: 'denominator-zero', feedback: 'हर शून्य नहीं हो सकता, क्योंकि शून्य से भाग देना संभव नहीं है।' },
              { id: 'c', text: '√2', misconception: 'irrational-confusion', feedback: '√2 को p/q के रूप में नहीं लिखा जा सकता, इसलिए यह अपरिमेय संख्या है।' },
              { id: 'd', text: '0/0', misconception: 'denominator-zero', feedback: '0/0 का कोई निश्चित मान नहीं होता; हर शून्य नहीं हो सकता।' },
            ],
          },
          {
            id: 'math-parimey-parichay-q2',
            difficulty: 'medium',
            text: 'संख्या −7 को परिमेय रूप में कैसे लिखा जा सकता है?',
            options: [
              { id: 'a', text: '1/−7', misconception: 'reciprocal-error', feedback: '1/−7 का मान −1/7 है, −7 नहीं। आपने अंश और हर उलट दिए।' },
              { id: 'b', text: '−7/1', correct: true },
              { id: 'c', text: '0/−7', misconception: 'numerator-zero-value', feedback: '0/−7 = 0 होता है, −7 नहीं। अंश शून्य हो तो पूरी संख्या शून्य हो जाती है।' },
              { id: 'd', text: '−7/0', misconception: 'denominator-zero', feedback: 'हर शून्य नहीं हो सकता, इसलिए −7/0 परिमेय रूप नहीं है।' },
            ],
          },
          {
            id: 'math-parimey-parichay-q3',
            difficulty: 'hard',
            text: 'कौन-सा कथन सही है?',
            options: [
              { id: 'a', text: 'हर परिमेय संख्या पूर्णांक होती है', misconception: 'all-rational-integers', feedback: '1/2 परिमेय है पर पूर्णांक नहीं है, इसलिए यह कथन गलत है।' },
              { id: 'b', text: '0 परिमेय संख्या नहीं है', misconception: 'zero-not-rational', feedback: '0 को 0/1 लिख सकते हैं, इसलिए 0 भी परिमेय संख्या है।' },
              { id: 'c', text: 'हर पूर्णांक परिमेय संख्या होती है', correct: true },
              { id: 'd', text: 'केवल धनात्मक भिन्न ही परिमेय होती हैं', misconception: 'negative-not-rational', feedback: '−3/4 भी परिमेय है। ऋणात्मक संख्याएँ भी परिमेय हो सकती हैं।' },
            ],
          },
        ],
      },
      {
        id: 'math-parimey-jod-guna',
        title: 'परिमेय संख्याओं का जोड़-घटाव और गुणा-भाग',
        keywords: ['जोड़', 'घटाव', 'गुणा', 'भाग', 'व्युत्क्रम', 'addition', 'multiplication'],
        card: {
          points: [
            'जोड़ या घटाव के लिए पहले हर समान बनाएँ, फिर अंश जोड़ें या घटाएँ।',
            'गुणा में अंश × अंश और हर × हर होता है।',
            'भाग देने के लिए दूसरी संख्या के व्युत्क्रम से गुणा करते हैं।',
          ],
          example: 'आधा गिलास (1/2) और चौथाई गिलास (1/4) दूध मिलाकर 3/4 गिलास दूध होता है।',
        },
        questions: [
          {
            id: 'math-parimey-jod-guna-q1',
            difficulty: 'easy',
            text: '1/2 + 1/4 = ?',
            options: [
              { id: 'a', text: '2/6', misconception: 'add-denominator', feedback: 'अंश और हर दोनों को नहीं जोड़ते। पहले हर समान करें: 2/4 + 1/4 = 3/4।' },
              { id: 'b', text: '1/8', misconception: 'multiply-instead-add', feedback: '1/8 गुणा करने से आता है। जोड़ में हर समान करके अंश जोड़ते हैं: 3/4।' },
              { id: 'c', text: '3/4', correct: true },
              { id: 'd', text: '2/4', misconception: 'numerator-only-add', feedback: 'केवल अंश जोड़ने से 2/4 आया। हर समान करके 2/4 + 1/4 = 3/4 होगा।' },
            ],
          },
          {
            id: 'math-parimey-jod-guna-q2',
            difficulty: 'medium',
            text: '2/3 × 3/5 = ?',
            options: [
              { id: 'a', text: '5/8', misconception: 'add-instead-multiply', feedback: 'आपने अंश और हर जोड़ दिए। गुणा में अंश × अंश और हर × हर होता है: 6/15 = 2/5।' },
              { id: 'b', text: '2/5', correct: true },
              { id: 'c', text: '1', misconception: 'cancel-wrong', feedback: '3 से 3 कटने पर 2/5 बचता है, 1 नहीं। काटते समय ध्यान से देखें।' },
              { id: 'd', text: '10/9', misconception: 'reciprocal-error', feedback: '10/9 दूसरी संख्या उलटकर गुणा करने से आया। सीधे गुणा में व्युत्क्रम नहीं लेते: 2/5।' },
            ],
          },
          {
            id: 'math-parimey-jod-guna-q3',
            difficulty: 'hard',
            text: '3/4 ÷ 2/3 = ?',
            options: [
              { id: 'a', text: '1/2', misconception: 'multiply-instead-divide', feedback: 'आपने सीधा गुणा कर दिया। भाग में दूसरी संख्या का व्युत्क्रम लेकर गुणा करते हैं: 3/4 × 3/2 = 9/8।' },
              { id: 'b', text: '8/9', misconception: 'reciprocal-error', feedback: 'आपने सही उत्तर का व्युत्क्रम लिख दिया। 3/4 × 3/2 = 9/8 होता है।' },
              { id: 'c', text: '5/7', misconception: 'add-instead-divide', feedback: 'आपने जोड़ की विधि लगा दी। भाग में व्युत्क्रम से गुणा करें: 9/8।' },
              { id: 'd', text: '9/8', correct: true },
            ],
          },
        ],
      },
      {
        id: 'math-parimey-beech',
        title: 'दो परिमेय संख्याओं के बीच की संख्याएँ और संख्या रेखा',
        keywords: ['बीच की संख्या', 'संख्या रेखा', 'औसत', 'between', 'number line'],
        card: {
          points: [
            'दो परिमेय संख्याओं के बीच अनगिनत परिमेय संख्याएँ होती हैं।',
            'बीच की एक संख्या निकालने का आसान तरीका है दोनों संख्याओं का औसत लेना।',
            'संख्या रेखा पर ऋणात्मक परिमेय संख्याएँ शून्य के बाईं ओर और धनात्मक दाईं ओर होती हैं।',
          ],
          example: '1/2 और 1 के बीच 3/4 आता है, जैसे आधी और पूरी रोटी के बीच तीन-चौथाई हिस्सा।',
        },
        questions: [
          {
            id: 'math-parimey-beech-q1',
            difficulty: 'easy',
            text: '1/2 और 1 के बीच कौन-सी संख्या आती है?',
            options: [
              { id: 'a', text: '1/4', misconception: 'smaller-than-start', feedback: '1/4, 1/2 से छोटा है, इसलिए यह बीच में नहीं आता।' },
              { id: 'b', text: '3/4', correct: true },
              { id: 'c', text: '3/2', misconception: 'larger-than-end', feedback: '3/2, 1 से बड़ा है, इसलिए यह बीच में नहीं आता।' },
              { id: 'd', text: '2', misconception: 'larger-than-end', feedback: '2 भी 1 से बड़ा है। बीच की संख्या दोनों सिरों से तुलना करके चुनें।' },
            ],
          },
          {
            id: 'math-parimey-beech-q2',
            difficulty: 'medium',
            text: '1/3 और 2/3 के बीच की एक परिमेय संख्या कौन-सी है?',
            options: [
              { id: 'a', text: '1/6', misconception: 'smaller-than-start', feedback: '1/6, 1/3 (अर्थात 2/6) से छोटा है, इसलिए बीच में नहीं है।' },
              { id: 'b', text: '5/6', misconception: 'larger-than-end', feedback: '5/6, 2/3 (अर्थात 4/6) से बड़ा है, इसलिए बीच में नहीं है।' },
              { id: 'c', text: '2/3', misconception: 'endpoint-chosen', feedback: '2/3 तो स्वयं एक सिरा है। बीच की संख्या दोनों सिरों से अलग होनी चाहिए।' },
              { id: 'd', text: '1/2', correct: true },
            ],
          },
          {
            id: 'math-parimey-beech-q3',
            difficulty: 'hard',
            text: 'संख्या रेखा पर −3/4 कहाँ होगा?',
            options: [
              { id: 'a', text: '0 के दाईं ओर', misconception: 'sign-error', feedback: 'ऋणात्मक संख्या हमेशा 0 के बाईं ओर होती है।' },
              { id: 'b', text: '−1 के बाईं ओर', misconception: 'value-size-confusion', feedback: '−3/4, −1 से बड़ा है क्योंकि इसका मान 1 से कम है। यह 0 और −1 के बीच है।' },
              { id: 'c', text: '0 के बाईं ओर, 0 और −1 के बीच', correct: true },
              { id: 'd', text: 'ठीक −1 पर', misconception: 'fraction-integer-confusion', feedback: '−3/4 पूरा −1 नहीं है, उसका तीन-चौथाई भाग है।' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'math-varg',
    title: 'वर्ग और वर्गमूल',
    concepts: [
      {
        id: 'math-varg-pattern',
        title: 'पूर्ण वर्ग और उनके पैटर्न',
        keywords: ['वर्ग', 'पूर्ण वर्ग', 'विषम संख्या', 'square', 'pattern'],
        card: {
          points: [
            'किसी संख्या को उसी संख्या से गुणा करने पर उसका वर्ग मिलता है, जैसे 5² = 25।',
            'जिन संख्याओं का वर्गमूल पूरा पूर्णांक आए, वे पूर्ण वर्ग कहलाती हैं।',
            'जिस संख्या के इकाई का अंक 2, 3, 7 या 8 हो, वह पूर्ण वर्ग नहीं हो सकती।',
            'पहली n विषम संख्याओं का योग n² होता है।',
          ],
          example: 'खेत में 6 पंक्तियों में 6-6 पौधे लगे हों तो कुल पौधे 6² = 36 होते हैं।',
        },
        questions: [
          {
            id: 'math-varg-pattern-q1',
            difficulty: 'easy',
            text: '9 का वर्ग क्या है?',
            options: [
              { id: 'a', text: '18', misconception: 'square-as-double', feedback: 'वर्ग का अर्थ है संख्या × वही संख्या: 9 × 9 = 81। 9 × 2 करना गलत है।' },
              { id: 'b', text: '81', correct: true },
              { id: 'c', text: '27', misconception: 'cube-confusion', feedback: '27, 3 का घन है। 9 का वर्ग 9 × 9 = 81 होता है।' },
              { id: 'd', text: '90', misconception: 'place-value-slip', feedback: '9 × 9 = 81 होता है, 90 नहीं। गुणा ध्यान से करें।' },
            ],
          },
          {
            id: 'math-varg-pattern-q2',
            difficulty: 'medium',
            text: 'इनमें से कौन-सी संख्या पूर्ण वर्ग नहीं हो सकती?',
            options: [
              { id: 'a', text: '144', misconception: 'square-recognition-error', feedback: '144 = 12² है, यह पूर्ण वर्ग है। इकाई का अंक देखकर फिर से जाँचें।' },
              { id: 'b', text: '128', correct: true },
              { id: 'c', text: '225', misconception: 'square-recognition-error', feedback: '225 = 15² है, यह पूर्ण वर्ग है।' },
              { id: 'd', text: '625', misconception: 'square-recognition-error', feedback: '625 = 25² है, यह पूर्ण वर्ग है।' },
            ],
          },
          {
            id: 'math-varg-pattern-q3',
            difficulty: 'hard',
            text: '1 + 3 + 5 + 7 + 9 का योग किसका वर्ग है?',
            options: [
              { id: 'a', text: '9²', misconception: 'last-term-square', feedback: 'अंतिम संख्या का वर्ग नहीं लेते। विषम संख्याएँ 5 हैं, इसलिए योग 5² = 25 होता है।' },
              { id: 'b', text: '4²', misconception: 'count-error', feedback: 'यहाँ 5 विषम संख्याएँ हैं, 4 नहीं। योग 5² = 25 होगा।' },
              { id: 'c', text: '25²', misconception: 'sum-square-swap', feedback: 'योग स्वयं 25 है और 25 = 5²। 25² तो 625 होगा।' },
              { id: 'd', text: '5²', correct: true },
            ],
          },
        ],
      },
      {
        id: 'math-vargmool-gunankhand',
        title: 'अभाज्य गुणनखंड विधि से वर्गमूल',
        keywords: ['वर्गमूल', 'अभाज्य गुणनखंड', 'जोड़ा', 'square root', 'prime factorisation'],
        card: {
          points: [
            'पहले संख्या के अभाज्य गुणनखंड बनाएँ और उन्हें जोड़ों में बाँटें।',
            'हर जोड़े से एक गुणनखंड बाहर लेकर गुणा करने से वर्गमूल मिलता है।',
            'यदि सभी गुणनखंड जोड़ों में न बँटें तो संख्या पूर्ण वर्ग नहीं है।',
          ],
          example: '36 पौधों को वर्गाकार क्यारी में लगाने के लिए √36 = 6, अर्थात हर ओर 6 पौधे लगेंगे।',
        },
        questions: [
          {
            id: 'math-vargmool-gunankhand-q1',
            difficulty: 'easy',
            text: '√144 = ?',
            options: [
              { id: 'a', text: '72', misconception: 'root-as-half', feedback: 'वर्गमूल का अर्थ आधा करना नहीं है। 12 × 12 = 144, इसलिए √144 = 12।' },
              { id: 'b', text: '14', misconception: 'digit-guess', feedback: '14 × 14 = 196 होता है। 12 × 12 = 144 है, इसलिए उत्तर 12।' },
              { id: 'c', text: '12', correct: true },
              { id: 'd', text: '24', misconception: 'root-as-double', feedback: '24 × 24 = 576 होगा। सही वर्गमूल 12 है।' },
            ],
          },
          {
            id: 'math-vargmool-gunankhand-q2',
            difficulty: 'medium',
            text: 'अभाज्य गुणनखंड विधि से √324 = ?',
            options: [
              { id: 'a', text: '16', misconception: 'pair-pick-error', feedback: '324 = 2² × 3⁴। हर जोड़े से एक गुणनखंड लेने पर 2 × 3 × 3 = 18 मिलता है।' },
              { id: 'b', text: '81', misconception: 'square-root-swap', feedback: '81 तो 9² है। 18 × 18 = 324 होता है, इसलिए √324 = 18।' },
              { id: 'c', text: '18', correct: true },
              { id: 'd', text: '36', misconception: 'factor-pair-skip', feedback: '36 × 36 = 1296 होगा। जोड़ों से एक-एक गुणनखंड लें: 2 × 3 × 3 = 18।' },
            ],
          },
          {
            id: 'math-vargmool-gunankhand-q3',
            difficulty: 'hard',
            text: 'किस संख्या का वर्गमूल पूरा पूर्णांक नहीं आएगा?',
            options: [
              { id: 'a', text: '441', misconception: 'square-recognition-error', feedback: '441 = 21² है, इसका वर्गमूल 21 पूर्णांक आता है।' },
              { id: 'b', text: '560', correct: true },
              { id: 'c', text: '729', misconception: 'square-recognition-error', feedback: '729 = 27² है, इसका वर्गमूल 27 पूर्णांक आता है।' },
              { id: 'd', text: '1024', misconception: 'square-recognition-error', feedback: '1024 = 32² है, इसका वर्गमूल 32 पूर्णांक आता है।' },
            ],
          },
        ],
      },
      {
        id: 'math-vargmool-anuman',
        title: 'वर्गमूल का अनुमान',
        keywords: ['अनुमान', 'आस-पास के वर्ग', 'estimate', 'square root'],
        card: {
          points: [
            'अनुमान के लिए संख्या के आस-पास के पूर्ण वर्ग याद रखें।',
            '50, 49 (7²) और 64 (8²) के बीच है, इसलिए √50, 7 और 8 के बीच होगा।',
            'जो पूर्ण वर्ग संख्या के ज़्यादा पास हो, वर्गमूल उसी संख्या के पास होगा।',
          ],
          example: '50 वर्ग मीटर के चौकोर कमरे की एक भुजा लगभग 7 मीटर होगी, क्योंकि √50 ≈ 7.07।',
        },
        questions: [
          {
            id: 'math-vargmool-anuman-q1',
            difficulty: 'easy',
            text: '√90 किन दो संख्याओं के बीच होगा?',
            options: [
              { id: 'a', text: '8 और 9', misconception: 'lower-bracket', feedback: '8² = 64 और 9² = 81, दोनों 90 से छोटे हैं। 90, 81 और 100 के बीच है।' },
              { id: 'b', text: '9 और 10', correct: true },
              { id: 'c', text: '10 और 11', misconception: 'upper-bracket', feedback: '10² = 100, जो 90 से बड़ा है। इसलिए √90, 10 से छोटा होगा।' },
              { id: 'd', text: '45 और 46', misconception: 'root-as-half', feedback: 'वर्गमूल आधा नहीं होता। पास के वर्ग 81 और 100 देखें।' },
            ],
          },
          {
            id: 'math-vargmool-anuman-q2',
            difficulty: 'medium',
            text: '√50 का सबसे अच्छा अनुमान क्या है?',
            options: [
              { id: 'a', text: '6.5', misconception: 'nearer-square-missed', feedback: '6.5² = 42.25, जो 50 से काफी छोटा है। 50, 49 के बहुत पास है, इसलिए √50 ≈ 7.1।' },
              { id: 'b', text: '25', misconception: 'root-as-half', feedback: '25, 50 का आधा है, वर्गमूल नहीं। वर्गमूल लगभग 7.1 है।' },
              { id: 'c', text: '7.1', correct: true },
              { id: 'd', text: '8.2', misconception: 'nearer-square-missed', feedback: '8.2² = 67.24, जो बहुत बड़ा है। 50, 49 (7²) के पास है, इसलिए अनुमान 7.1।' },
            ],
          },
          {
            id: 'math-vargmool-anuman-q3',
            difficulty: 'hard',
            text: 'एक चौकोर मैदान का क्षेत्रफल 200 वर्ग मीटर है। उसकी एक भुजा का सबसे अच्छा अनुमान क्या होगा?',
            options: [
              { id: 'a', text: 'लगभग 10 मीटर', misconception: 'round-square-only', feedback: '10² = 100, आधा ही रह जाता है। 14² = 196, 200 के सबसे पास है।' },
              { id: 'b', text: 'लगभग 20 मीटर', misconception: 'digit-slip', feedback: '20² = 400, दोगुना हो जाएगा। 14² = 196 पास है, इसलिए भुजा लगभग 14 मीटर।' },
              { id: 'c', text: 'लगभग 100 मीटर', misconception: 'root-as-half', feedback: 'क्षेत्रफल का आधा भुजा नहीं होती। √200 ≈ 14.1, इसलिए लगभग 14 मीटर।' },
              { id: 'd', text: 'लगभग 14 मीटर', correct: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'math-beejganit',
    title: 'बीजगणितीय व्यंजक',
    concepts: [
      {
        id: 'math-beej-padh',
        title: 'पद, गुणांक और समान पदों का जोड़',
        keywords: ['पद', 'गुणांक', 'समान पद', 'व्यंजक', 'terms', 'coefficient'],
        card: {
          points: [
            'व्यंजक के वे हिस्से जो + या − से जुड़े हों, पद कहलाते हैं।',
            'किसी पद में चर के साथ गुणा होने वाली संख्या उसका गुणांक है, जैसे 5x में 5।',
            'केवल समान पद ही जोड़े या घटाए जा सकते हैं, जैसे 3x + 2x = 5x।',
          ],
          example: '3 आम और 2 आम मिलकर 5 आम होते हैं, ठीक वैसे ही 3x + 2x = 5x।',
        },
        questions: [
          {
            id: 'math-beej-padh-q1',
            difficulty: 'easy',
            text: 'व्यंजक 7y − 4 में y का गुणांक क्या है?',
            options: [
              { id: 'a', text: '−4', misconception: 'constant-as-coefficient', feedback: '−4 अचर पद है। y के साथ गुणा होने वाली संख्या 7 गुणांक है।' },
              { id: 'b', text: '4', misconception: 'wrong-term-pick', feedback: '4 अचर पद की संख्या है। गुणांक चर वाले पद में देखें: 7y में 7।' },
              { id: 'c', text: '7', correct: true },
              { id: 'd', text: 'y', misconception: 'variable-as-coefficient', feedback: 'y चर है। उसके साथ वाली संख्या 7 गुणांक है।' },
            ],
          },
          {
            id: 'math-beej-padh-q2',
            difficulty: 'medium',
            text: '5a + 3a − 2a = ?',
            options: [
              { id: 'a', text: '10a', misconception: 'subtract-missed', feedback: '−2a घटाना भूल गए। 5 + 3 − 2 = 6, इसलिए उत्तर 6a।' },
              { id: 'b', text: '6a', correct: true },
              { id: 'c', text: '6', misconception: 'variable-dropped', feedback: 'चर a उत्तर में रहता है। सही उत्तर 6a है।' },
              { id: 'd', text: '6a²', misconception: 'power-added', feedback: 'जोड़-घटाव में घात नहीं बढ़ती। समान पदों के गुणांक ही जुड़ते हैं: 6a।' },
            ],
          },
          {
            id: 'math-beej-padh-q3',
            difficulty: 'hard',
            text: '4x + 3y + 2x − y को सरल करें।',
            options: [
              { id: 'a', text: '6x + 4y', misconception: 'sign-error', feedback: '−y घटाना था। 3y − y = 2y होता है, इसलिए उत्तर 6x + 2y।' },
              { id: 'b', text: '10xy', misconception: 'unlike-terms-merged', feedback: 'x और y असमान पद हैं, इन्हें एक पद में नहीं मिला सकते।' },
              { id: 'c', text: '6x + 2', misconception: 'variable-dropped', feedback: 'y वाला पद 2y रहेगा। चर गायब नहीं होता।' },
              { id: 'd', text: '6x + 2y', correct: true },
            ],
          },
        ],
      },
      {
        id: 'math-beej-gunan',
        title: 'व्यंजकों का गुणन',
        keywords: ['गुणन', 'एकपदी', 'घात', 'multiply', 'monomial'],
        card: {
          points: [
            'एकपदी × एकपदी में गुणांक × गुणांक और चर × चर होता है।',
            'चर के गुणा में घातें जुड़ती हैं, जैसे x² × x³ = x⁵।',
            'एकपदी से बहुपदी के हर पद को गुणा करते हैं, जैसे 2x(x + 3) = 2x² + 6x।',
          ],
          example: 'एक आयत की लंबाई 3x और चौड़ाई 2x हो तो क्षेत्रफल 3x × 2x = 6x² होगा।',
        },
        questions: [
          {
            id: 'math-beej-gunan-q1',
            difficulty: 'easy',
            text: '3x × 4x = ?',
            options: [
              { id: 'a', text: '12x', misconception: 'power-not-added', feedback: 'चर × चर में घात जुड़ती है: x × x = x²। उत्तर 12x² है।' },
              { id: 'b', text: '7x²', misconception: 'add-instead-multiply', feedback: 'गुणांकों का गुणा होता है, जोड़ नहीं: 3 × 4 = 12। उत्तर 12x²।' },
              { id: 'c', text: '12x²', correct: true },
              { id: 'd', text: '12x³', misconception: 'power-multiplied', feedback: 'घातें जुड़ती हैं, गुणा नहीं होतीं: 1 + 1 = 2। उत्तर 12x²।' },
            ],
          },
          {
            id: 'math-beej-gunan-q2',
            difficulty: 'medium',
            text: '2a(3a + 5) = ?',
            options: [
              { id: 'a', text: '6a² + 5', misconception: 'second-term-missed', feedback: 'कोष्ठक के हर पद से गुणा करें। 2a × 5 = 10a भी आएगा: 6a² + 10a।' },
              { id: 'b', text: '6a² + 10a', correct: true },
              { id: 'c', text: '16a²', misconception: 'unlike-terms-merged', feedback: '6a² और 10a असमान पद हैं, इन्हें एक पद में नहीं मिलाया जा सकता।' },
              { id: 'd', text: '6a + 10a', misconception: 'power-not-added', feedback: '2a × 3a में a × a = a² होगा। पहला पद 6a² है।' },
            ],
          },
          {
            id: 'math-beej-gunan-q3',
            difficulty: 'hard',
            text: '(x + 2)(x + 3) = ?',
            options: [
              { id: 'a', text: 'x² + 6', misconception: 'middle-term-missed', feedback: 'बीच वाले पद भी आते हैं: 3x + 2x = 5x। पूरा उत्तर x² + 5x + 6।' },
              { id: 'b', text: 'x² + 6x + 6', misconception: 'cross-term-error', feedback: 'बीच का पद 3x + 2x = 5x है, 6x नहीं।' },
              { id: 'c', text: 'x² + 5x + 6', correct: true },
              { id: 'd', text: 'x² + 5x + 5', misconception: 'constant-product-error', feedback: 'अचर पद 2 × 3 = 6 होगा, 5 नहीं।' },
            ],
          },
        ],
      },
      {
        id: 'math-beej-sarvasamika',
        title: 'सर्वसमिकाएँ (a + b)² और (a − b)²',
        keywords: ['सर्वसमिका', 'वर्ग', 'identity', '(a+b)²'],
        card: {
          points: [
            '(a + b)² = a² + 2ab + b² होता है।',
            '(a − b)² = a² − 2ab + b² होता है।',
            'बीच वाला पद 2ab कभी न भूलें; (a + b)² केवल a² + b² नहीं होता।',
          ],
          example: '52² निकालने के लिए (50 + 2)² = 2500 + 200 + 4 = 2704 लिख सकते हैं।',
        },
        questions: [
          {
            id: 'math-beej-sarvasamika-q1',
            difficulty: 'easy',
            text: '(x + 3)² = ?',
            options: [
              { id: 'a', text: 'x² + 9', misconception: 'middle-term-missed', feedback: 'बीच का पद 2 × x × 3 = 6x भी आता है। उत्तर x² + 6x + 9।' },
              { id: 'b', text: 'x² + 6x + 9', correct: true },
              { id: 'c', text: 'x² + 3x + 9', misconception: 'two-ab-error', feedback: 'बीच का पद 2ab होता है, केवल ab नहीं: 2 × 3 = 6, इसलिए 6x।' },
              { id: 'd', text: 'x² + 6x + 6', misconception: 'square-of-constant-error', feedback: 'अंतिम पद b² = 3² = 9 होगा, 6 नहीं।' },
            ],
          },
          {
            id: 'math-beej-sarvasamika-q2',
            difficulty: 'medium',
            text: '(a − 5)² = ?',
            options: [
              { id: 'a', text: 'a² − 25', misconception: 'middle-term-missed', feedback: 'बीच का पद −2 × a × 5 = −10a भी आएगा। उत्तर a² − 10a + 25।' },
              { id: 'b', text: 'a² − 10a − 25', misconception: 'sign-error', feedback: 'अंतिम पद b² हमेशा धनात्मक होता है: +25। बीच का पद ही ऋणात्मक होता है।' },
              { id: 'c', text: 'a² − 10a + 25', correct: true },
              { id: 'd', text: 'a² + 10a + 25', misconception: 'sign-error', feedback: 'यह (a + 5)² है। (a − b)² में बीच का पद ऋणात्मक होता है।' },
            ],
          },
          {
            id: 'math-beej-sarvasamika-q3',
            difficulty: 'hard',
            text: 'सर्वसमिका से 103² का मान क्या होगा?',
            options: [
              { id: 'a', text: '10009', misconception: 'middle-term-missed', feedback: 'बीच का पद 2 × 100 × 3 = 600 भी जोड़ें: 10000 + 600 + 9 = 10609।' },
              { id: 'b', text: '10909', misconception: 'two-ab-error', feedback: 'बीच का पद 600 है, 900 नहीं: 2 × 100 × 3 = 600। उत्तर 10609।' },
              { id: 'c', text: '10609', correct: true },
              { id: 'd', text: '10309', misconception: 'place-value-slip', feedback: '100² = 10000 से शुरू करें: 10000 + 600 + 9 = 10609।' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'math-rekhik',
    title: 'रैखिक समीकरण',
    concepts: [
      {
        id: 'math-rekhik-saral',
        title: 'सरल समीकरण हल करना',
        keywords: ['समीकरण', 'चर', 'उलटी क्रिया', 'equation', 'solve'],
        card: {
          points: [
            'समीकरण में = के दोनों ओर संतुलन होता है।',
            'चर को अकेला करने के लिए उलटी क्रिया करते हैं: जुड़ा है तो घटाएँ, गुणा है तो भाग दें।',
            'जो क्रिया एक ओर करें, वही दूसरी ओर भी करनी होती है।',
          ],
          example: 'x + 5 = 12 का अर्थ है किसी संख्या में 5 जोड़ने पर 12 मिला; वह संख्या 12 − 5 = 7 है।',
        },
        questions: [
          {
            id: 'math-rekhik-saral-q1',
            difficulty: 'easy',
            text: 'x + 7 = 15 में x = ?',
            options: [
              { id: 'a', text: '22', misconception: 'inverse-op-missed', feedback: 'जोड़ की उलटी क्रिया घटाव है: x = 15 − 7 = 8।' },
              { id: 'b', text: '8', correct: true },
              { id: 'c', text: '7', misconception: 'term-copied', feedback: '7 तो जुड़ी हुई संख्या है। x = 15 − 7 = 8 होगा।' },
              { id: 'd', text: '15', misconception: 'rhs-copied', feedback: 'दाईं ओर की संख्या ही उत्तर नहीं होती। x = 15 − 7 = 8।' },
            ],
          },
          {
            id: 'math-rekhik-saral-q2',
            difficulty: 'medium',
            text: '4x = 28 में x = ?',
            options: [
              { id: 'a', text: '112', misconception: 'inverse-op-missed', feedback: 'गुणा की उलटी क्रिया भाग है: x = 28 ÷ 4 = 7।' },
              { id: 'b', text: '24', misconception: 'subtract-instead-divide', feedback: '4 यहाँ गुणा में है, जुड़ा हुआ नहीं। 28 ÷ 4 = 7 होगा।' },
              { id: 'c', text: '32', misconception: 'add-instead-divide', feedback: '4x का अर्थ 4 × x है। भाग देने पर x = 28 ÷ 4 = 7।' },
              { id: 'd', text: '7', correct: true },
            ],
          },
          {
            id: 'math-rekhik-saral-q3',
            difficulty: 'hard',
            text: '3x + 4 = 19 में x = ?',
            options: [
              { id: 'a', text: '23/3', misconception: 'order-of-steps', feedback: 'पहले 4 घटाएँ: 3x = 15, फिर 3 से भाग दें: x = 5। क्रम सही रखें।' },
              { id: 'b', text: '15', misconception: 'last-step-missed', feedback: '3x = 15 तक ठीक है, पर अंतिम कदम बाकी है: x = 15 ÷ 3 = 5।' },
              { id: 'c', text: '5', correct: true },
              { id: 'd', text: '3', misconception: 'guess-without-steps', feedback: 'जाँचें: 3 × 3 + 4 = 13, जो 19 नहीं है। सही x = 5 है।' },
            ],
          },
        ],
      },
      {
        id: 'math-rekhik-dono-or',
        title: 'दोनों ओर चर वाले समीकरण',
        keywords: ['दोनों ओर चर', 'पक्ष बदलना', 'चिन्ह', 'both sides', 'equation'],
        card: {
          points: [
            'चर वाले पदों को एक ओर और संख्याओं को दूसरी ओर ले जाएँ।',
            'पद का पक्ष बदलने पर उसका चिन्ह बदल जाता है।',
            'अंत में चर के गुणांक से भाग देकर उत्तर निकालें और जाँच करें।',
          ],
          example: '5x = 3x + 8 हो तो दोनों ओर से 3x घटाकर 2x = 8 मिलता है, इसलिए x = 4।',
        },
        questions: [
          {
            id: 'math-rekhik-dono-or-q1',
            difficulty: 'easy',
            text: '5x = 3x + 10 में x = ?',
            options: [
              { id: 'a', text: '10', misconception: 'last-step-missed', feedback: '2x = 10 के बाद 2 से भाग देना बाकी है: x = 5।' },
              { id: 'b', text: '2', misconception: 'coefficient-as-answer', feedback: '2 तो 2x का गुणांक है। x = 10 ÷ 2 = 5 होगा।' },
              { id: 'c', text: '5', correct: true },
              { id: 'd', text: '13', misconception: 'terms-added-wrong', feedback: '5x − 3x = 2x होता है, फिर x = 10 ÷ 2 = 5।' },
            ],
          },
          {
            id: 'math-rekhik-dono-or-q2',
            difficulty: 'medium',
            text: '7x − 5 = 3x + 11 में x = ?',
            options: [
              { id: 'a', text: '6', misconception: 'sign-error', feedback: '−5 दूसरी ओर जाकर +5 होगा: 4x = 11 + 5 = 16, इसलिए x = 4।' },
              { id: 'b', text: '4', correct: true },
              { id: 'c', text: '16', misconception: 'last-step-missed', feedback: '4x = 16 तक ठीक है; अब 4 से भाग दें: x = 4।' },
              { id: 'd', text: '1.5', misconception: 'sign-change-missed', feedback: 'पक्ष बदलने पर चिन्ह बदलता है: 11 + 5 = 16, फिर x = 16 ÷ 4 = 4।' },
            ],
          },
          {
            id: 'math-rekhik-dono-or-q3',
            difficulty: 'hard',
            text: '2(x + 3) = 18 में x = ?',
            options: [
              { id: 'a', text: '9', misconception: 'last-step-missed', feedback: 'x + 3 = 9 आया, अब 3 घटाएँ: x = 6।' },
              { id: 'b', text: '7.5', misconception: 'bracket-ignored', feedback: 'पहले कोष्ठक खोलें: 2x + 6 = 18, इससे 2x = 12 और x = 6 मिलेगा।' },
              { id: 'c', text: '12', misconception: 'divide-wrong-side', feedback: '18 में से सीधे 6 घटाना गलत है। पहले 2 से भाग दें: x + 3 = 9, x = 6।' },
              { id: 'd', text: '6', correct: true },
            ],
          },
        ],
      },
      {
        id: 'math-rekhik-shabdik',
        title: 'शब्द प्रश्नों से समीकरण बनाना',
        keywords: ['शब्द प्रश्न', 'आयु', 'समीकरण बनाना', 'word problem'],
        card: {
          points: [
            'अज्ञात संख्या को x मानकर प्रश्न को समीकरण में बदलें।',
            '"किसी संख्या का दोगुना" को 2x और "5 अधिक" को + 5 लिखते हैं।',
            'उत्तर निकालकर मूल प्रश्न में रखकर जाँच अवश्य करें।',
          ],
          example: 'एक संख्या के तीन गुने में 4 जोड़ने पर 25 मिलता है: 3x + 4 = 25, इसलिए x = 7।',
        },
        questions: [
          {
            id: 'math-rekhik-shabdik-q1',
            difficulty: 'easy',
            text: 'किसी संख्या में 9 जोड़ने पर 20 मिलता है। वह संख्या कौन-सी है?',
            options: [
              { id: 'a', text: '29', misconception: 'inverse-op-missed', feedback: 'जोड़ की उलटी क्रिया घटाव है: संख्या = 20 − 9 = 11।' },
              { id: 'b', text: '9', misconception: 'term-copied', feedback: '9 तो जोड़ी गई संख्या है। संख्या = 20 − 9 = 11।' },
              { id: 'c', text: '11', correct: true },
              { id: 'd', text: '20', misconception: 'rhs-copied', feedback: '20 परिणाम है। संख्या 11 है; जाँचें: 11 + 9 = 20।' },
            ],
          },
          {
            id: 'math-rekhik-shabdik-q2',
            difficulty: 'medium',
            text: 'एक संख्या का चौगुना 48 है। वह संख्या कौन-सी है?',
            options: [
              { id: 'a', text: '44', misconception: 'subtract-instead-divide', feedback: 'चौगुना अर्थात 4x = 48। घटाव नहीं, भाग दें: 48 ÷ 4 = 12।' },
              { id: 'b', text: '192', misconception: 'inverse-op-missed', feedback: 'आपने 48 × 4 कर दिया। 4x = 48 से x = 48 ÷ 4 = 12।' },
              { id: 'c', text: '4', misconception: 'coefficient-as-answer', feedback: '4 गुणांक है, उत्तर नहीं। x = 48 ÷ 4 = 12।' },
              { id: 'd', text: '12', correct: true },
            ],
          },
          {
            id: 'math-rekhik-shabdik-q3',
            difficulty: 'hard',
            text: 'पिता की आयु पुत्र की आयु की तीन गुनी है। दोनों की आयु का योग 48 वर्ष है। पुत्र की आयु क्या है?',
            options: [
              { id: 'a', text: '36 वर्ष', misconception: 'wrong-person-answer', feedback: '36 वर्ष पिता की आयु है। पुत्र की आयु x = 12 वर्ष है।' },
              { id: 'b', text: '12 वर्ष', correct: true },
              { id: 'c', text: '16 वर्ष', misconception: 'divide-by-3-only', feedback: 'योग में दोनों की आयु आती है: x + 3x = 4x = 48, इसलिए x = 12।' },
              { id: 'd', text: '24 वर्ष', misconception: 'half-of-total', feedback: 'दोनों की आयु बराबर नहीं है। 4x = 48 से पुत्र की आयु 12 वर्ष।' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'math-chaturbhuj',
    title: 'चतुर्भुज',
    concepts: [
      {
        id: 'math-chaturbhuj-kon-yog',
        title: 'बहुभुज के कोणों का योग',
        keywords: ['बहुभुज', 'कोणों का योग', 'चतुर्भुज', 'polygon', 'angle sum'],
        card: {
          points: [
            'n भुजाओं वाले बहुभुज के अंतःकोणों का योग (n − 2) × 180° होता है।',
            'चतुर्भुज के चारों कोणों का योग 360° होता है।',
            'किसी भी बहुभुज के बाह्य कोणों का योग हमेशा 360° होता है।',
          ],
          example: 'आयताकार कमरे के चारों कोने 90° + 90° + 90° + 90° = 360° बनाते हैं।',
        },
        questions: [
          {
            id: 'math-chaturbhuj-kon-yog-q1',
            difficulty: 'easy',
            text: 'पंचभुज के अंतःकोणों का योग कितना होता है?',
            options: [
              { id: 'a', text: '360°', misconception: 'quadrilateral-formula-used', feedback: '360° चतुर्भुज का योग है। पंचभुज के लिए (5 − 2) × 180° = 540°।' },
              { id: 'b', text: '540°', correct: true },
              { id: 'c', text: '900°', misconception: 'formula-n-times', feedback: 'n × 180° नहीं, (n − 2) × 180° होता है: 3 × 180° = 540°।' },
              { id: 'd', text: '180°', misconception: 'triangle-formula-used', feedback: '180° त्रिभुज के कोणों का योग है। पंचभुज का योग 540° होता है।' },
            ],
          },
          {
            id: 'math-chaturbhuj-kon-yog-q2',
            difficulty: 'medium',
            text: 'चतुर्भुज के तीन कोण 80°, 90° और 100° हैं। चौथा कोण कितना है?',
            options: [
              { id: 'a', text: '270°', misconception: 'sum-not-subtracted', feedback: '270° तीनों कोणों का योग है। चौथा कोण = 360° − 270° = 90°।' },
              { id: 'b', text: '100°', misconception: 'largest-copied', feedback: 'सबसे बड़ा कोण ही उत्तर नहीं होता। 360° में से योग घटाएँ: 90°।' },
              { id: 'c', text: '90°', correct: true },
              { id: 'd', text: '80°', misconception: 'smallest-copied', feedback: '360° − (80° + 90° + 100°) = 90° होगा, सबसे छोटा कोण नहीं।' },
            ],
          },
          {
            id: 'math-chaturbhuj-kon-yog-q3',
            difficulty: 'hard',
            text: 'किसी बहुभुज के अंतःकोणों का योग 720° है। उसकी भुजाएँ कितनी हैं?',
            options: [
              { id: 'a', text: '4', misconception: 'bracket-as-answer', feedback: '720 ÷ 180 = 4 तो (n − 2) का मान है। भुजाएँ 4 + 2 = 6 होंगी।' },
              { id: 'b', text: '8', misconception: 'extra-added', feedback: '(n − 2) = 4 से n = 6 होता है, 8 नहीं। केवल 2 जोड़ें।' },
              { id: 'c', text: '6', correct: true },
              { id: 'd', text: '5', misconception: 'off-by-one', feedback: 'जाँचें: (6 − 2) × 180° = 720°। भुजाएँ 6 हैं।' },
            ],
          },
        ],
      },
      {
        id: 'math-chaturbhuj-samantar',
        title: 'समांतर चतुर्भुज के गुण',
        keywords: ['समांतर चतुर्भुज', 'सम्मुख भुजा', 'विकर्ण', 'parallelogram'],
        card: {
          points: [
            'समांतर चतुर्भुज की सम्मुख भुजाएँ बराबर और समांतर होती हैं।',
            'सम्मुख कोण बराबर होते हैं और आसन्न कोणों का योग 180° होता है।',
            'विकर्ण एक-दूसरे को समद्विभाजित करते हैं, अर्थात आधा-आधा काटते हैं।',
          ],
          example: 'तिरछी मेज़ या झूले की फ्रेम की आकृति समांतर चतुर्भुज जैसी होती है, जिसकी आमने-सामने की भुजाएँ बराबर रहती हैं।',
        },
        questions: [
          {
            id: 'math-chaturbhuj-samantar-q1',
            difficulty: 'easy',
            text: 'समांतर चतुर्भुज की एक भुजा 7 सेमी है। उसके ठीक सामने वाली भुजा कितनी होगी?',
            options: [
              { id: 'a', text: '14 सेमी', misconception: 'side-doubled', feedback: 'सम्मुख भुजाएँ बराबर होती हैं, दोगुनी नहीं। उत्तर 7 सेमी है।' },
              { id: 'b', text: '7 सेमी', correct: true },
              { id: 'c', text: '3.5 सेमी', misconception: 'side-halved', feedback: 'आधा नहीं करना है। सम्मुख भुजा बराबर अर्थात 7 सेमी होती है।' },
              { id: 'd', text: 'पता नहीं चल सकता', misconception: 'property-missed', feedback: 'गुण से पता चलता है: सम्मुख भुजाएँ बराबर होती हैं, उत्तर 7 सेमी।' },
            ],
          },
          {
            id: 'math-chaturbhuj-samantar-q2',
            difficulty: 'medium',
            text: 'समांतर चतुर्भुज का एक कोण 65° है। उसके सामने वाला कोण और पास (आसन्न) वाला कोण क्या होंगे?',
            options: [
              { id: 'a', text: '65° और 65°', misconception: 'adjacent-equal-error', feedback: 'आसन्न कोण बराबर नहीं होते; उनका योग 180° होता है, इसलिए पास वाला 115°।' },
              { id: 'b', text: '115° और 65°', misconception: 'opposite-adjacent-swap', feedback: 'क्रम उलट गया। सामने वाला कोण बराबर (65°) और पास वाला पूरक (115°) होता है।' },
              { id: 'c', text: '65° और 115°', correct: true },
              { id: 'd', text: '90° और 90°', misconception: 'rectangle-assumed', feedback: 'हर समांतर चतुर्भुज आयत नहीं होता। कोण 65° और 115° होंगे।' },
            ],
          },
          {
            id: 'math-chaturbhuj-samantar-q3',
            difficulty: 'hard',
            text: 'समांतर चतुर्भुज में एक विकर्ण, दूसरे विकर्ण को काटकर 6 सेमी का आधा भाग बनाता है। उस पूरे विकर्ण की लंबाई क्या है?',
            options: [
              { id: 'a', text: '6 सेमी', misconception: 'bisect-missed', feedback: 'विकर्ण एक-दूसरे को आधा काटते हैं। 6 सेमी आधा भाग है, पूरा विकर्ण 12 सेमी।' },
              { id: 'b', text: '3 सेमी', misconception: 'half-of-half', feedback: '6 सेमी पहले से ही आधा भाग है। पूरा विकर्ण 6 × 2 = 12 सेमी होगा।' },
              { id: 'c', text: '12 सेमी', correct: true },
              { id: 'd', text: '24 सेमी', misconception: 'double-twice', feedback: 'केवल एक बार दोगुना करें: 6 × 2 = 12 सेमी।' },
            ],
          },
        ],
      },
      {
        id: 'math-chaturbhuj-vishesh',
        title: 'विशेष चतुर्भुज: समचतुर्भुज, आयत और वर्ग',
        keywords: ['समचतुर्भुज', 'आयत', 'वर्ग', 'rhombus', 'rectangle', 'square'],
        card: {
          points: [
            'समचतुर्भुज की चारों भुजाएँ बराबर होती हैं और उसके विकर्ण एक-दूसरे को लंबवत काटते हैं।',
            'आयत की सम्मुख भुजाएँ बराबर, चारों कोण 90° और विकर्ण बराबर होते हैं।',
            'वर्ग में आयत और समचतुर्भुज दोनों के गुण होते हैं: चारों भुजाएँ बराबर और चारों कोण 90°।',
          ],
          example: 'फ़र्श की वर्गाकार टाइल, दरवाज़े की आयताकार आकृति और पतंग की आकृति रोज़मर्रा के उदाहरण हैं।',
        },
        questions: [
          {
            id: 'math-chaturbhuj-vishesh-q1',
            difficulty: 'easy',
            text: 'किस चतुर्भुज की चारों भुजाएँ बराबर और चारों कोण 90° होते हैं?',
            options: [
              { id: 'a', text: 'आयत', misconception: 'rectangle-sides-error', feedback: 'आयत की केवल सम्मुख भुजाएँ बराबर होती हैं। चारों भुजाएँ बराबर और कोण 90° वर्ग में होते हैं।' },
              { id: 'b', text: 'समचतुर्भुज', misconception: 'rhombus-angle-error', feedback: 'समचतुर्भुज की भुजाएँ बराबर होती हैं, पर कोणों का 90° होना ज़रूरी नहीं।' },
              { id: 'c', text: 'वर्ग', correct: true },
              { id: 'd', text: 'समलंब', misconception: 'trapezium-confusion', feedback: 'समलंब में केवल एक जोड़ी भुजाएँ समांतर होती हैं। सही उत्तर वर्ग है।' },
            ],
          },
          {
            id: 'math-chaturbhuj-vishesh-q2',
            difficulty: 'medium',
            text: 'आयत के विकर्णों की विशेषता क्या है?',
            options: [
              { id: 'a', text: 'वे लंबवत काटते हैं', misconception: 'rhombus-property-mixup', feedback: 'लंबवत विकर्ण समचतुर्भुज की पहचान है। आयत के विकर्ण बराबर होते हैं।' },
              { id: 'b', text: 'वे बराबर होते हैं', correct: true },
              { id: 'c', text: 'वे हमेशा असमान होते हैं', misconception: 'diagonal-unequal-error', feedback: 'आयत के विकर्ण बराबर होते हैं और एक-दूसरे को आधा काटते हैं।' },
              { id: 'd', text: 'आयत में केवल एक ही विकर्ण होता है', misconception: 'diagonal-count-error', feedback: 'हर चतुर्भुज में दो विकर्ण होते हैं, आयत में भी दो।' },
            ],
          },
          {
            id: 'math-chaturbhuj-vishesh-q3',
            difficulty: 'hard',
            text: 'कौन-सा कथन सही है?',
            options: [
              { id: 'a', text: 'हर आयत वर्ग होता है', misconception: 'reverse-inclusion-error', feedback: 'वर्ग की चारों भुजाएँ बराबर होती हैं, आयत की नहीं। उल्टा कथन गलत है।' },
              { id: 'b', text: 'समचतुर्भुज के कोण हमेशा 90° होते हैं', misconception: 'rhombus-angle-error', feedback: 'समचतुर्भुज के कोण कोई भी हो सकते हैं। कोण 90° हों तभी वह वर्ग बनता है।' },
              { id: 'c', text: 'वर्ग समांतर चतुर्भुज नहीं होता', misconception: 'square-parallelogram-error', feedback: 'वर्ग की सम्मुख भुजाएँ समांतर होती हैं, इसलिए वर्ग भी एक समांतर चतुर्भुज है।' },
              { id: 'd', text: 'हर वर्ग आयत होता है', correct: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'math-kshetramiti',
    title: 'क्षेत्रमिति',
    concepts: [
      {
        id: 'math-kshetra-samlamb',
        title: 'समलंब का क्षेत्रफल',
        keywords: ['समलंब', 'क्षेत्रफल', 'ऊँचाई', 'trapezium', 'area'],
        card: {
          points: [
            'समलंब में एक जोड़ी सम्मुख भुजाएँ समांतर होती हैं।',
            'समलंब का क्षेत्रफल = ½ × (समांतर भुजाओं का योग) × ऊँचाई।',
            'ऊँचाई दोनों समांतर भुजाओं के बीच की लंबवत दूरी होती है।',
          ],
          example: 'ऊपर से सँकरी और नीचे से चौड़ी बाल्टी की एक सतह या तिरछी छत जैसी आकृति समलंब होती है।',
        },
        questions: [
          {
            id: 'math-kshetra-samlamb-q1',
            difficulty: 'easy',
            text: 'समलंब की समांतर भुजाएँ 6 सेमी और 4 सेमी हैं और ऊँचाई 5 सेमी है। क्षेत्रफल कितना है?',
            options: [
              { id: 'a', text: '50 वर्ग सेमी', misconception: 'half-missed', feedback: 'सूत्र में ½ भी लगता है: ½ × (6 + 4) × 5 = 25 वर्ग सेमी।' },
              { id: 'b', text: '25 वर्ग सेमी', correct: true },
              { id: 'c', text: '20 वर्ग सेमी', misconception: 'side-product-error', feedback: '4 × 5 तो एक भुजा × ऊँचाई है। समांतर भुजाओं का योग लें: ½ × 10 × 5 = 25।' },
              { id: 'd', text: '15 वर्ग सेमी', misconception: 'all-added', feedback: 'सबको जोड़ना नहीं है। सूत्र लगाएँ: ½ × (6 + 4) × 5 = 25 वर्ग सेमी।' },
            ],
          },
          {
            id: 'math-kshetra-samlamb-q2',
            difficulty: 'medium',
            text: 'समलंब की समांतर भुजाएँ 10 मी और 6 मी हैं और उनके बीच की दूरी 4 मी है। क्षेत्रफल कितना है?',
            options: [
              { id: 'a', text: '64 वर्ग मी', misconception: 'half-missed', feedback: '½ लगाना भूल गए: ½ × (10 + 6) × 4 = 32 वर्ग मी।' },
              { id: 'b', text: '40 वर्ग मी', misconception: 'side-product-error', feedback: '10 × 4 आयत जैसा हुआ। दोनों भुजाओं का योग 16 लेकर आधा करें: 32 वर्ग मी।' },
              { id: 'c', text: '20 वर्ग मी', misconception: 'all-added', feedback: 'सब संख्याएँ जोड़ दीं। सूत्र है: ½ × (10 + 6) × 4 = 32 वर्ग मी।' },
              { id: 'd', text: '32 वर्ग मी', correct: true },
            ],
          },
          {
            id: 'math-kshetra-samlamb-q3',
            difficulty: 'hard',
            text: 'एक समलंबाकार खेत का क्षेत्रफल 180 वर्ग मी है। उसकी समांतर भुजाओं का योग 24 मी है। खेत की ऊँचाई (दोनों भुजाओं के बीच की दूरी) कितनी है?',
            options: [
              { id: 'a', text: '7.5 मी', misconception: 'half-missed', feedback: '½ सूत्र में पहले से है: 180 = ½ × 24 × ऊँचाई = 12 × ऊँचाई। इसलिए ऊँचाई = 15 मी; दोबारा आधा न करें।' },
              { id: 'b', text: '15 मी', correct: true },
              { id: 'c', text: '24 मी', misconception: 'given-value-copied', feedback: '24 मी भुजाओं का योग है। ऊँचाई = 180 ÷ 12 = 15 मी।' },
              { id: 'd', text: '204 मी', misconception: 'all-added', feedback: 'क्षेत्रफल और योग को जोड़ना नहीं है। ऊँचाई = 180 ÷ 12 = 15 मी।' },
            ],
          },
        ],
      },
      {
        id: 'math-kshetra-prishth',
        title: 'घन और घनाभ का पृष्ठीय क्षेत्रफल',
        keywords: ['पृष्ठीय क्षेत्रफल', 'घन', 'घनाभ', 'surface area', 'cube', 'cuboid'],
        card: {
          points: [
            'घन की सभी 6 सतहें बराबर वर्ग होती हैं; पृष्ठीय क्षेत्रफल = 6 × भुजा²।',
            'घनाभ का पृष्ठीय क्षेत्रफल = 2(lb + bh + hl), जहाँ l लंबाई, b चौड़ाई और h ऊँचाई है।',
            'पृष्ठीय क्षेत्रफल हमेशा वर्ग इकाई में लिखा जाता है।',
          ],
          example: 'एक डिब्बे को बाहर से रंगना हो तो लगने वाला रंग उसके पृष्ठीय क्षेत्रफल पर निर्भर करता है।',
        },
        questions: [
          {
            id: 'math-kshetra-prishth-q1',
            difficulty: 'easy',
            text: 'भुजा 3 सेमी वाले घन का पृष्ठीय क्षेत्रफल क्या है?',
            options: [
              { id: 'a', text: '9 वर्ग सेमी', misconception: 'one-face-only', feedback: '9 केवल एक सतह का क्षेत्रफल है। घन की 6 सतहें होती हैं: 6 × 9 = 54।' },
              { id: 'b', text: '54 वर्ग सेमी', correct: true },
              { id: 'c', text: '27 वर्ग सेमी', misconception: 'volume-confusion', feedback: '27 आयतन (3³) है। पृष्ठीय क्षेत्रफल 6 × 3² = 54 वर्ग सेमी होता है।' },
              { id: 'd', text: '36 वर्ग सेमी', misconception: 'four-faces-only', feedback: '4 सतहें नहीं, 6 सतहें गिनें: 6 × 9 = 54 वर्ग सेमी।' },
            ],
          },
          {
            id: 'math-kshetra-prishth-q2',
            difficulty: 'medium',
            text: 'एक घनाभ की लंबाई 5 सेमी, चौड़ाई 3 सेमी और ऊँचाई 2 सेमी है। उसका पृष्ठीय क्षेत्रफल क्या है?',
            options: [
              { id: 'a', text: '31 वर्ग सेमी', misconception: 'two-missed', feedback: '31 तो lb + bh + hl है। हर सतह की जोड़ी होती है, इसलिए 2 से गुणा करें: 62।' },
              { id: 'b', text: '30 वर्ग सेमी', misconception: 'volume-confusion', feedback: '30 आयतन (5 × 3 × 2) है। पृष्ठीय क्षेत्रफल 2(15 + 6 + 10) = 62 वर्ग सेमी।' },
              { id: 'c', text: '62 वर्ग सेमी', correct: true },
              { id: 'd', text: '60 वर्ग सेमी', misconception: 'pair-sum-error', feedback: 'जोड़ सही करें: 15 + 6 + 10 = 31 होता है। 2 × 31 = 62 वर्ग सेमी।' },
            ],
          },
          {
            id: 'math-kshetra-prishth-q3',
            difficulty: 'hard',
            text: 'किसी घन का पृष्ठीय क्षेत्रफल 96 वर्ग सेमी है। उसकी एक भुजा कितनी है?',
            options: [
              { id: 'a', text: '16 सेमी', misconception: 'last-step-missed', feedback: '16 तो भुजा का वर्ग है। भुजा = √16 = 4 सेमी होगी।' },
              { id: 'b', text: '8 सेमी', misconception: 'divide-by-12', feedback: '6 सतहों से भाग दें: 96 ÷ 6 = 16 = भुजा², इसलिए भुजा = 4 सेमी।' },
              { id: 'c', text: '4 सेमी', correct: true },
              { id: 'd', text: '96 सेमी', misconception: 'given-value-copied', feedback: '96 कुल पृष्ठीय क्षेत्रफल है। एक सतह 16 वर्ग सेमी, इसलिए भुजा 4 सेमी।' },
            ],
          },
        ],
      },
      {
        id: 'math-kshetra-aayatan',
        title: 'घन और घनाभ का आयतन',
        keywords: ['आयतन', 'घन', 'घनाभ', 'volume', 'cube', 'cuboid'],
        card: {
          points: [
            'आयतन बताता है कि कोई वस्तु कितनी जगह घेरती है।',
            'घनाभ का आयतन = लंबाई × चौड़ाई × ऊँचाई।',
            'घन का आयतन = भुजा³ होता है और आयतन घन इकाई में लिखा जाता है।',
          ],
          example: 'पानी की टंकी में कितना पानी आएगा, यह उसके आयतन से पता चलता है।',
        },
        questions: [
          {
            id: 'math-kshetra-aayatan-q1',
            difficulty: 'easy',
            text: 'भुजा 4 सेमी वाले घन का आयतन क्या है?',
            options: [
              { id: 'a', text: '16 घन सेमी', misconception: 'square-instead-cube', feedback: '16 तो 4² है। आयतन के लिए भुजा³ = 4 × 4 × 4 = 64 घन सेमी।' },
              { id: 'b', text: '12 घन सेमी', misconception: 'side-times-3', feedback: 'भुजा × 3 नहीं, भुजा × भुजा × भुजा करें: 64 घन सेमी।' },
              { id: 'c', text: '64 घन सेमी', correct: true },
              { id: 'd', text: '32 घन सेमी', misconception: 'root-as-half', feedback: 'आधा करना गलत है। आयतन 4³ = 64 घन सेमी होता है।' },
            ],
          },
          {
            id: 'math-kshetra-aayatan-q2',
            difficulty: 'medium',
            text: 'एक डिब्बा 8 सेमी लंबा, 5 सेमी चौड़ा और 2 सेमी ऊँचा है। उसका आयतन क्या है?',
            options: [
              { id: 'a', text: '15 घन सेमी', misconception: 'all-added', feedback: 'तीनों को जोड़ना नहीं, गुणा करना है: 8 × 5 × 2 = 80 घन सेमी।' },
              { id: 'b', text: '80 घन सेमी', correct: true },
              { id: 'c', text: '40 घन सेमी', misconception: 'height-missed', feedback: 'ऊँचाई से भी गुणा करें: 8 × 5 × 2 = 80 घन सेमी। 40 अधूरा है।' },
              { id: 'd', text: '66 घन सेमी', misconception: 'sum-instead-product', feedback: '66, lb + bh + hl का योग है। आयतन के लिए तीनों का गुणा करें: 80 घन सेमी।' },
            ],
          },
          {
            id: 'math-kshetra-aayatan-q3',
            difficulty: 'hard',
            text: 'एक घनाकार टंकी का आयतन 216 घन मी है। उसकी एक भुजा कितनी है?',
            options: [
              { id: 'a', text: '36 मी', misconception: 'square-root-used', feedback: 'आयतन से भुजा वर्गमूल से नहीं, घनमूल से मिलती है: 6³ = 216, इसलिए भुजा 6 मी।' },
              { id: 'b', text: '72 मी', misconception: 'divide-by-3', feedback: '216 ÷ 3 से भुजा नहीं मिलती। जाँचें: 6 × 6 × 6 = 216।' },
              { id: 'c', text: '6 मी', correct: true },
              { id: 'd', text: '108 मी', misconception: 'root-as-half', feedback: 'आधा करना गलत है। 6³ = 216, इसलिए भुजा 6 मी है।' },
            ],
          },
        ],
      },
    ],
  },
];

export const MATH_MISCONCEPTIONS = {
  'denominator-zero': { label: 'हर शून्य रखने की गलती' },
  'irrational-confusion': { label: 'अपरिमेय को परिमेय समझना' },
  'reciprocal-error': { label: 'व्युत्क्रम की गलती' },
  'numerator-zero-value': { label: 'अंश शून्य का मान गलत समझना' },
  'all-rational-integers': { label: 'सभी परिमेय संख्याओं को पूर्णांक समझना' },
  'zero-not-rational': { label: 'शून्य को परिमेय न मानना' },
  'negative-not-rational': { label: 'ऋणात्मक संख्याओं को परिमेय न मानना' },
  'add-denominator': { label: 'हरों को भी जोड़ देना' },
  'multiply-instead-add': { label: 'जोड़ की जगह गुणा करना' },
  'numerator-only-add': { label: 'केवल अंश जोड़ना' },
  'add-instead-multiply': { label: 'गुणा की जगह जोड़ करना' },
  'cancel-wrong': { label: 'काटने (सरल करने) की गलती' },
  'multiply-instead-divide': { label: 'भाग की जगह गुणा करना' },
  'add-instead-divide': { label: 'भाग की जगह जोड़ करना' },
  'smaller-than-start': { label: 'शुरुआती संख्या से छोटी संख्या चुनना' },
  'larger-than-end': { label: 'अंतिम संख्या से बड़ी संख्या चुनना' },
  'endpoint-chosen': { label: 'सिरे वाली संख्या को ही बीच की समझना' },
  'sign-error': { label: 'चिन्ह की गलती' },
  'value-size-confusion': { label: 'संख्या का आकार गलत समझना' },
  'fraction-integer-confusion': { label: 'भिन्न को पूर्णांक समझना' },
  'square-as-double': { label: 'वर्ग को दोगुना समझना' },
  'cube-confusion': { label: 'घन और वर्ग में भ्रम' },
  'place-value-slip': { label: 'स्थानीय मान की चूक' },
  'square-recognition-error': { label: 'पूर्ण वर्ग पहचानने की गलती' },
  'last-term-square': { label: 'अंतिम संख्या का वर्ग लेना' },
  'count-error': { label: 'गिनती की गलती' },
  'sum-square-swap': { label: 'योग और वर्ग को उलट देना' },
  'root-as-half': { label: 'वर्गमूल या घनमूल को आधा समझना' },
  'digit-guess': { label: 'अंक देखकर अनुमान लगाना' },
  'root-as-double': { label: 'वर्गमूल को दोगुना समझना' },
  'pair-pick-error': { label: 'जोड़े से गुणनखंड चुनने की गलती' },
  'square-root-swap': { label: 'वर्ग और वर्गमूल उलट देना' },
  'factor-pair-skip': { label: 'गुणनखंडों के जोड़े छोड़ देना' },
  'lower-bracket': { label: 'छोटा वर्ग-समूह चुनना' },
  'upper-bracket': { label: 'बड़ा वर्ग-समूह चुनना' },
  'nearer-square-missed': { label: 'पास वाले वर्ग को न देखना' },
  'round-square-only': { label: 'केवल गोल संख्या का वर्ग लेना' },
  'digit-slip': { label: 'अंक की चूक' },
  'constant-as-coefficient': { label: 'अचर पद को गुणांक समझना' },
  'wrong-term-pick': { label: 'गलत पद चुनना' },
  'variable-as-coefficient': { label: 'चर को गुणांक समझना' },
  'subtract-missed': { label: 'घटाव छोड़ देना' },
  'variable-dropped': { label: 'चर को गायब कर देना' },
  'power-added': { label: 'जोड़ में घात बढ़ा देना' },
  'unlike-terms-merged': { label: 'असमान पदों को मिला देना' },
  'power-not-added': { label: 'गुणा में घात न जोड़ना' },
  'power-multiplied': { label: 'घातों को आपस में गुणा कर देना' },
  'second-term-missed': { label: 'दूसरा पद छोड़ देना' },
  'middle-term-missed': { label: 'बीच वाला पद भूल जाना' },
  'cross-term-error': { label: 'बीच के पद की गणना की गलती' },
  'constant-product-error': { label: 'अचर पदों के गुणन की गलती' },
  'two-ab-error': { label: '2ab को केवल ab समझना' },
  'square-of-constant-error': { label: 'अचर का वर्ग गलत लिखना' },
  'inverse-op-missed': { label: 'उलटी क्रिया न करना' },
  'term-copied': { label: 'दी गई संख्या को ही उत्तर लिखना' },
  'rhs-copied': { label: 'दाईं ओर की संख्या को ही उत्तर लिखना' },
  'subtract-instead-divide': { label: 'भाग की जगह घटाव करना' },
  'order-of-steps': { label: 'कदमों का क्रम गलत होना' },
  'last-step-missed': { label: 'अंतिम कदम छोड़ देना' },
  'guess-without-steps': { label: 'बिना कदमों के अनुमान लगाना' },
  'coefficient-as-answer': { label: 'गुणांक को ही उत्तर समझना' },
  'terms-added-wrong': { label: 'पदों को गलत तरीके से जोड़ना' },
  'sign-change-missed': { label: 'पक्ष बदलने पर चिन्ह न बदलना' },
  'bracket-ignored': { label: 'कोष्ठक को नज़रअंदाज़ करना' },
  'divide-wrong-side': { label: 'गलत क्रम से भाग देना' },
  'wrong-person-answer': { label: 'गलत व्यक्ति की आयु उत्तर लिखना' },
  'divide-by-3-only': { label: 'केवल 3 से भाग देना' },
  'half-of-total': { label: 'योग का आधा ही उत्तर समझना' },
  'quadrilateral-formula-used': { label: 'चतुर्भुज का सूत्र लगाना' },
  'formula-n-times': { label: 'सूत्र को n × 180° समझना' },
  'triangle-formula-used': { label: 'त्रिभुज का सूत्र लगाना' },
  'sum-not-subtracted': { label: 'योग को 360° से न घटाना' },
  'largest-copied': { label: 'सबसे बड़ा कोण ही उत्तर लिखना' },
  'smallest-copied': { label: 'सबसे छोटा कोण ही उत्तर लिखना' },
  'bracket-as-answer': { label: '(n − 2) को ही उत्तर समझना' },
  'extra-added': { label: 'अतिरिक्त संख्या जोड़ देना' },
  'off-by-one': { label: 'एक का अंतर रह जाना' },
  'side-doubled': { label: 'भुजा को दोगुना समझना' },
  'side-halved': { label: 'भुजा को आधा समझना' },
  'property-missed': { label: 'गुण का प्रयोग न करना' },
  'adjacent-equal-error': { label: 'आसन्न कोणों को बराबर समझना' },
  'opposite-adjacent-swap': { label: 'सम्मुख और आसन्न कोण उलट देना' },
  'rectangle-assumed': { label: 'समांतर चतुर्भुज को आयत मान लेना' },
  'bisect-missed': { label: 'समद्विभाजन का गुण भूल जाना' },
  'half-of-half': { label: 'आधे का आधा कर देना' },
  'double-twice': { label: 'दो बार दोगुना करना' },
  'rectangle-sides-error': { label: 'आयत की भुजाओं की गलत पहचान' },
  'rhombus-angle-error': { label: 'समचतुर्भुज के कोणों की गलत पहचान' },
  'trapezium-confusion': { label: 'समलंब से भ्रम होना' },
  'rhombus-property-mixup': { label: 'समचतुर्भुज का गुण आयत में लगाना' },
  'diagonal-unequal-error': { label: 'विकर्णों को असमान समझना' },
  'diagonal-count-error': { label: 'विकर्णों की संख्या की गलती' },
  'reverse-inclusion-error': { label: 'सम्बन्ध को उल्टा समझना' },
  'square-parallelogram-error': { label: 'वर्ग को समांतर चतुर्भुज न मानना' },
  'half-missed': { label: '½ लगाना भूल जाना' },
  'side-product-error': { label: 'एक भुजा × ऊँचाई कर देना' },
  'all-added': { label: 'सभी संख्याएँ जोड़ देना' },
  'given-value-copied': { label: 'दी गई संख्या को ही उत्तर लिखना' },
  'one-face-only': { label: 'केवल एक सतह गिनना' },
  'volume-confusion': { label: 'आयतन और पृष्ठीय क्षेत्रफल में भ्रम' },
  'four-faces-only': { label: 'केवल चार सतहें गिनना' },
  'two-missed': { label: '2 से गुणा करना भूल जाना' },
  'pair-sum-error': { label: 'जोड़ों के योग की गलती' },
  'divide-by-12': { label: 'गलत संख्या से भाग देना' },
  'square-instead-cube': { label: 'घन की जगह वर्ग करना' },
  'side-times-3': { label: 'भुजा × 3 कर देना' },
  'height-missed': { label: 'ऊँचाई से गुणा करना भूल जाना' },
  'sum-instead-product': { label: 'गुणा की जगह योग लेना' },
  'square-root-used': { label: 'घनमूल की जगह वर्गमूल सोचना' },
  'divide-by-3': { label: '3 से भाग देकर भुजा समझना' },
};
