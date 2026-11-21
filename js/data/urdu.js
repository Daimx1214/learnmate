// LearnMate content file: Class 8 Urdu (base pack, Urdu script).
// 5 chapters, 3 concepts each. Each concept has a short Urdu card
// (points + one example) and exactly 3 MCQ questions (easy, medium, hard).
// Each question has 4 options (a-d); exactly one has correct: true and no
// other fields. Every wrong option has a misconception tag (a key of
// URDU_MISCONCEPTIONS) and Urdu feedback.

export const URDU_PACK_TITLE = 'آٹھویں جماعت اردو';

export const URDU_CHAPTERS = [
  {
    id: 'urdu-ism-aqsam',
    title: 'اسم اور اس کی اقسام',
    concepts: [
      {
        id: 'urdu-ism-taarif',
        title: 'اسم کی تعریف اور اقسام: خاص اور عام',
        keywords: ['اسم', 'اسمِ عام', 'اسمِ خاص', 'نام', 'ism', 'noun', 'common noun', 'proper noun'],
        card: {
          points: [
            'کسی شخص، جگہ یا چیز کے نام کو اسم کہتے ہیں۔',
            'اسمِ عام وہ نام ہے جو کسی پوری جنس کے لیے ہو، جیسے لڑکا، شہر، کتاب۔',
            'اسمِ خاص کسی مخصوص شخص، جگہ یا چیز کا نام ہوتا ہے، جیسے احمد، لاہور، دریائے سندھ۔',
            'اسمِ خاص ہمیشہ کسی ایک مخصوص ہستی کے لیے آتا ہے۔',
          ],
          example: '«کتاب» اسمِ عام ہے، جبکہ «دیوانِ غالب» ایک مخصوص کتاب کا نام ہے اس لیے اسمِ خاص ہے۔',
        },
        questions: [
          {
            id: 'urdu-ism-taarif-q1',
            difficulty: 'easy',
            text: 'اسم کسے کہتے ہیں؟',
            options: [
              { id: 'a', text: 'جس لفظ سے کام کا کرنا ظاہر ہو', misconception: 'ism-fail-confusion', feedback: 'یہ فعل کی تعریف ہے۔ اسم کسی شخص، جگہ یا چیز کا نام ہوتا ہے۔' },
              { id: 'b', text: 'کسی شخص، جگہ یا چیز کے نام کو', correct: true },
              { id: 'c', text: 'جو لفظ کسی کی صفت بتائے', misconception: 'ism-sifat-confusion', feedback: 'خصوصیت بتانے والا لفظ صفت ہوتا ہے۔ اسم صرف نام کو کہتے ہیں۔' },
              { id: 'd', text: 'ہر لفظ اسم ہوتا ہے', misconception: 'har-lafz-ism', feedback: 'ہر لفظ اسم نہیں ہوتا۔ فعل، صفت اور حرف الگ الگ اقسام ہیں۔ اسم صرف نام ہے۔' },
            ],
          },
          {
            id: 'urdu-ism-taarif-q2',
            difficulty: 'medium',
            text: '«لاہور» کون سا اسم ہے؟',
            options: [
              { id: 'a', text: 'اسمِ عام', misconception: 'khas-aam-confusion', feedback: 'لاہور ایک مخصوص شہر کا نام ہے، اس لیے یہ اسمِ خاص ہے۔ «شہر» اسمِ عام ہوتا۔' },
              { id: 'b', text: 'اسمِ ضمیر', misconception: 'zameer-confusion', feedback: 'ضمیر اسم کی جگہ آتا ہے، جیسے وہ، یہ۔ لاہور خود ایک نام ہے اس لیے اسمِ خاص ہے۔' },
              { id: 'c', text: 'اسمِ خاص', correct: true },
              { id: 'd', text: 'اسمِ صفت', misconception: 'ism-sifat-confusion', feedback: 'صفت کسی کی خصوصیت بتاتی ہے۔ لاہور ایک جگہ کا مخصوص نام ہے، اس لیے اسمِ خاص ہے۔' },
            ],
          },
          {
            id: 'urdu-ism-taarif-q3',
            difficulty: 'hard',
            text: 'ان میں سے کون سا لفظ اسمِ عام ہے؟',
            options: [
              { id: 'a', text: 'دریائے سندھ', misconception: 'khas-aam-confusion', feedback: 'دریائے سندھ ایک مخصوص دریا کا نام ہے، اس لیے اسمِ خاص ہے۔' },
              { id: 'b', text: 'احمد', misconception: 'khas-aam-confusion', feedback: 'احمد ایک مخصوص شخص کا نام ہے، اس لیے اسمِ خاص ہے۔' },
              { id: 'c', text: 'کراچی', misconception: 'khas-aam-confusion', feedback: 'کراچی ایک مخصوص شہر کا نام ہے، اس لیے اسمِ خاص ہے۔ «شہر» اسمِ عام ہوتا۔' },
              { id: 'd', text: 'دریا', correct: true },
            ],
          },
        ],
      },
      {
        id: 'urdu-ism-zameer',
        title: 'اسمِ ضمیر',
        keywords: ['ضمیر', 'میں', 'ہم', 'وہ', 'یہ', 'zameer', 'pronoun'],
        card: {
          points: [
            'جو لفظ اسم کی جگہ استعمال ہو اسے اسمِ ضمیر کہتے ہیں۔',
            'میں، ہم، تو، تم، آپ، وہ، یہ، اس، اسے ضمیر کی مثالیں ہیں۔',
            'ضمیر استعمال کرنے سے نام بار بار نہیں دہرانا پڑتا۔',
            'جملے میں ضمیر اسی اسم کی طرف اشارہ کرتا ہے جس کی جگہ وہ آیا ہو۔',
          ],
          example: '«علی اسکول گیا۔ وہ کتاب پڑھ رہا ہے۔» یہاں «وہ» علی کی جگہ آیا ہے۔',
        },
        questions: [
          {
            id: 'urdu-ism-zameer-q1',
            difficulty: 'easy',
            text: 'اسمِ ضمیر کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'کتاب', misconception: 'zameer-ism-aam', feedback: 'کتاب خود ایک اسمِ عام ہے۔ ضمیر وہ لفظ ہے جو اسم کی جگہ آئے، جیسے وہ۔' },
              { id: 'b', text: 'وہ', correct: true },
              { id: 'c', text: 'پڑھا', misconception: 'zameer-fail', feedback: 'پڑھا فعل ہے کیونکہ اس سے کام ظاہر ہوتا ہے۔ ضمیر اسم کی جگہ آنے والا لفظ ہے۔' },
              { id: 'd', text: 'تیز', misconception: 'ism-sifat-confusion', feedback: 'تیز صفت ہے کیونکہ یہ خصوصیت بتاتا ہے۔ ضمیر اسم کی جگہ آتا ہے، جیسے میں، وہ۔' },
            ],
          },
          {
            id: 'urdu-ism-zameer-q2',
            difficulty: 'medium',
            text: 'جملے «سارہ نے کھانا بنایا، اس نے سب کو کھلایا» میں ضمیر کون سا ہے؟',
            options: [
              { id: 'a', text: 'سارہ', misconception: 'zameer-ism-khas', feedback: 'سارہ خود اسمِ خاص ہے۔ اس کی جگہ آنے والا لفظ «اس نے» ضمیر ہے۔' },
              { id: 'b', text: 'کھانا', misconception: 'zameer-ism-aam', feedback: 'کھانا اسمِ عام ہے۔ ضمیر وہ ہے جو کسی اسم کی جگہ آئے، یہاں «اس نے» سارہ کی جگہ آیا ہے۔' },
              { id: 'c', text: 'بنایا', misconception: 'zameer-fail', feedback: 'بنایا فعل ہے۔ ضمیر «اس نے» ہے جو سارہ کی جگہ استعمال ہوا ہے۔' },
              { id: 'd', text: 'اس نے', correct: true },
            ],
          },
          {
            id: 'urdu-ism-zameer-q3',
            difficulty: 'hard',
            text: 'ضمیر کیوں استعمال کیا جاتا ہے؟',
            options: [
              { id: 'a', text: 'تاکہ اسم بار بار نہ دہرایا جائے', correct: true },
              { id: 'b', text: 'تاکہ جملہ لمبا ہو جائے', misconception: 'zameer-maqsad', feedback: 'ضمیر کا مقصد جملہ لمبا کرنا نہیں۔ یہ نام کی تکرار سے بچاتا اور بات آسان بناتا ہے۔' },
              { id: 'c', text: 'تاکہ فعل کی جگہ لی جائے', misconception: 'zameer-fail', feedback: 'ضمیر فعل کی نہیں، اسم کی جگہ لیتا ہے۔ فعل جملے میں الگ رہتا ہے۔' },
              { id: 'd', text: 'تاکہ ہر بات سوال بن جائے', misconception: 'zameer-maqsad', feedback: 'سوال بنانا استفہام کا کام ہے۔ ضمیر صرف اسم کی جگہ آ کر تکرار ختم کرتا ہے۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-ism-sifat',
        title: 'اسمِ صفت',
        keywords: ['صفت', 'موصوف', 'اچھا', 'بڑا', 'sifat', 'adjective'],
        card: {
          points: [
            'جو لفظ کسی اسم کی اچھائی، برائی، رنگ، قد یا حالت بتائے اسے صفت کہتے ہیں۔',
            'اچھا، بڑا، کالا، میٹھا، ذہین صفت کی مثالیں ہیں۔',
            'جس اسم کی صفت بیان ہو اسے موصوف کہتے ہیں۔',
            'صفت ہمیشہ کسی اسم کے ساتھ مل کر اس کی خصوصیت ظاہر کرتی ہے۔',
          ],
          example: '«میٹھا آم» میں «میٹھا» صفت ہے اور «آم» موصوف ہے۔',
        },
        questions: [
          {
            id: 'urdu-ism-sifat-q1',
            difficulty: 'easy',
            text: 'صفت کسے کہتے ہیں؟',
            options: [
              { id: 'a', text: 'جو لفظ اسم کی جگہ آئے', misconception: 'sifat-zameer', feedback: 'اسم کی جگہ آنے والا لفظ ضمیر ہوتا ہے۔ صفت اسم کی خصوصیت بتاتی ہے۔' },
              { id: 'b', text: 'جو لفظ کسی کام کو بتائے', misconception: 'sifat-fail', feedback: 'کام بتانے والا لفظ فعل ہے۔ صفت کسی اسم کی خصوصیت بتاتی ہے، جیسے اچھا، بڑا۔' },
              { id: 'c', text: 'جو لفظ اسم کی خصوصیت بتائے', correct: true },
              { id: 'd', text: 'جو لفظ دو جملے جوڑے', misconception: 'sifat-harf', feedback: 'دو چیزوں کو جوڑنے والا لفظ حرفِ عطف ہے۔ صفت خصوصیت بتاتی ہے۔' },
            ],
          },
          {
            id: 'urdu-ism-sifat-q2',
            difficulty: 'medium',
            text: '«ذہین طالب علم» میں صفت کون سی ہے؟',
            options: [
              { id: 'a', text: 'طالب علم', misconception: 'sifat-mausoof', feedback: 'طالب علم وہ ہے جس کی خصوصیت بتائی گئی ہے، اسے موصوف کہتے ہیں۔ صفت «ذہین» ہے۔' },
              { id: 'b', text: 'ذہین', correct: true },
              { id: 'c', text: 'اس میں کوئی صفت نہیں ہے', misconception: 'sifat-missing', feedback: 'اس میں صفت موجود ہے۔ «ذہین» طالب علم کی خصوصیت بتا رہا ہے۔' },
              { id: 'd', text: 'علم', misconception: 'sifat-mausoof', feedback: 'علم خود ایک اسم ہے۔ یہاں خصوصیت بتانے والا لفظ «ذہین» ہے۔' },
            ],
          },
          {
            id: 'urdu-ism-sifat-q3',
            difficulty: 'hard',
            text: 'ان میں سے کون سا لفظ صفت نہیں ہے؟',
            options: [
              { id: 'a', text: 'سرخ', misconception: 'sifat-ism-hai', feedback: 'سرخ رنگ بتاتا ہے، اس لیے یہ صفت ہے۔ صفت رنگ بھی بتا سکتی ہے۔' },
              { id: 'b', text: 'موٹا', misconception: 'sifat-ism-hai', feedback: 'موٹا حالت اور جسامت بتاتا ہے، اس لیے یہ صفت ہے۔' },
              { id: 'c', text: 'میز', correct: true },
              { id: 'd', text: 'تیز', misconception: 'sifat-ism-hai', feedback: 'تیز خصوصیت بتاتا ہے، اس لیے یہ صفت ہے۔ میز ایک چیز کا نام ہے، وہ اسم ہے۔' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'urdu-fail-zamane',
    title: 'فعل اور زمانے',
    concepts: [
      {
        id: 'urdu-fail-taarif',
        title: 'فعل کی تعریف و پہچان',
        keywords: ['فعل', 'کام', 'کھانا', 'پڑھنا', 'fail', 'verb'],
        card: {
          points: [
            'جس لفظ سے کسی کام کا کرنا یا ہونا ظاہر ہو اسے فعل کہتے ہیں۔',
            'کھانا، پڑھنا، کھیلنا، سونا فعل کی مثالیں ہیں۔',
            'جملے میں «کیا کیا؟» کا سوال کرنے سے فعل پہچانا جا سکتا ہے۔',
            'فعل کے بغیر جملہ ادھورا رہتا ہے۔',
          ],
          example: '«بچے میدان میں کھیل رہے ہیں۔» یہاں «کھیل رہے ہیں» فعل ہے۔',
        },
        questions: [
          {
            id: 'urdu-fail-taarif-q1',
            difficulty: 'easy',
            text: 'فعل کسے کہتے ہیں؟',
            options: [
              { id: 'a', text: 'جس لفظ سے کسی شخص یا چیز کا نام ظاہر ہو', misconception: 'fail-ism', feedback: 'نام ظاہر کرنے والا لفظ اسم ہوتا ہے۔ فعل کام کا کرنا یا ہونا بتاتا ہے۔' },
              { id: 'b', text: 'جس لفظ سے کسی کام کا کرنا یا ہونا ظاہر ہو', correct: true },
              { id: 'c', text: 'جس لفظ سے کسی کی خصوصیت ظاہر ہو', misconception: 'fail-sifat', feedback: 'خصوصیت بتانے والا لفظ صفت ہے۔ فعل کام بتاتا ہے، جیسے کھیلنا، پڑھنا۔' },
              { id: 'd', text: 'جس لفظ سے دو جملے جڑیں', misconception: 'fail-harf', feedback: 'جوڑنے والا لفظ حرف ہوتا ہے۔ فعل کام کے کرنے کو کہتے ہیں۔' },
            ],
          },
          {
            id: 'urdu-fail-taarif-q2',
            difficulty: 'medium',
            text: '«امّی نے کھانا پکایا» میں فعل کون سا ہے؟',
            options: [
              { id: 'a', text: 'امّی', misconception: 'fail-ism', feedback: 'امّی اسم ہے۔ «کیا کیا؟» پوچھو: پکایا۔ یہی فعل ہے۔' },
              { id: 'b', text: 'کھانا', misconception: 'fail-ism', feedback: 'کھانا یہاں چیز کا نام ہے، اسم ہے۔ فعل «پکایا» ہے۔' },
              { id: 'c', text: 'نے', misconception: 'fail-harf', feedback: 'نے حرف ہے۔ فعل وہ ہے جس سے کام ظاہر ہو، یہاں «پکایا»۔' },
              { id: 'd', text: 'پکایا', correct: true },
            ],
          },
          {
            id: 'urdu-fail-taarif-q3',
            difficulty: 'hard',
            text: 'ان میں سے کس جملے میں فعل موجود ہے؟',
            options: [
              { id: 'a', text: 'نیلا آسمان', misconception: 'fail-missing', feedback: 'اس میں صرف اسم اور صفت ہیں، کوئی کام نہیں بتایا گیا۔ فعل کے لیے کام کا ہونا ضروری ہے۔' },
              { id: 'b', text: 'پرندے اڑ رہے ہیں', correct: true },
              { id: 'c', text: 'بڑا درخت', misconception: 'fail-missing', feedback: 'یہ صرف ایک ترکیب ہے، اس میں کوئی کام نہیں ہوا۔ «اڑ رہے ہیں» والا جملہ فعل رکھتا ہے۔' },
              { id: 'd', text: 'میٹھا پانی', misconception: 'fail-missing', feedback: 'اس میں صفت اور اسم ہیں، فعل نہیں۔ فعل کام بتاتا ہے جیسے اڑنا، پڑھنا۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-zamana-mazi',
        title: 'زمانۂ ماضی',
        keywords: ['ماضی', 'گزرا ہوا وقت', 'گیا', 'تھا', 'mazi', 'past tense'],
        card: {
          points: [
            'جو فعل گزرے ہوئے وقت میں کام کا ہونا بتائے اسے زمانۂ ماضی کہتے ہیں۔',
            '«وہ گیا» اور «اس نے خط لکھا» ماضی کی مثالیں ہیں۔',
            'ماضی میں کام مکمل ہو چکا ہوتا ہے۔',
            'ماضی کی پہچان کے لیے فعل کے آخر میں ا، ی، ے یا تھا، تھی آتا ہے۔',
          ],
          example: '«کل ہم نے میچ کھیلا تھا۔» یہ جملہ گزرے ہوئے وقت کا ہے اس لیے ماضی ہے۔',
        },
        questions: [
          {
            id: 'urdu-zamana-mazi-q1',
            difficulty: 'easy',
            text: '«اس نے سبق یاد کیا» کون سا زمانہ ہے؟',
            options: [
              { id: 'a', text: 'زمانۂ حال', misconception: 'zamana-confusion', feedback: 'حال میں کام ہو رہا ہوتا ہے، جیسے «یاد کر رہا ہے»۔ «یاد کیا» گزر چکا ہے، یہ ماضی ہے۔' },
              { id: 'b', text: 'زمانۂ مستقبل', misconception: 'zamana-confusion', feedback: 'مستقبل آنے والا وقت ہے، جیسے «یاد کرے گا»۔ «یاد کیا» ہو چکا ہے، یہ ماضی ہے۔' },
              { id: 'c', text: 'زمانۂ ماضی', correct: true },
              { id: 'd', text: 'اس میں کوئی زمانہ نہیں ہے', misconception: 'zamana-missing', feedback: 'ہر فعل کا کوئی نہ کوئی زمانہ ہوتا ہے۔ «کیا» گزرے وقت کو بتا رہا ہے، یہ ماضی ہے۔' },
            ],
          },
          {
            id: 'urdu-zamana-mazi-q2',
            difficulty: 'medium',
            text: 'زمانۂ ماضی کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'وہ بازار جا رہی ہے', misconception: 'zamana-confusion', feedback: '«جا رہی ہے» موجودہ وقت ہے، یہ حال ہے۔ ماضی میں کام ہو چکا ہوتا ہے۔' },
              { id: 'b', text: 'وہ بازار جائے گی', misconception: 'zamana-confusion', feedback: '«جائے گی» آنے والے وقت کی بات ہے، یہ مستقبل ہے۔' },
              { id: 'c', text: 'وہ بازار گئی تھی', correct: true },
              { id: 'd', text: 'وہ بازار جاتی ہے', misconception: 'zamana-confusion', feedback: '«جاتی ہے» عادت یا موجودہ وقت بتاتا ہے، یہ حال ہے۔ ماضی کے لیے «گئی تھی» دیکھو۔' },
            ],
          },
          {
            id: 'urdu-zamana-mazi-q3',
            difficulty: 'hard',
            text: 'ان میں سے کون سا جملہ زمانۂ ماضی کا نہیں ہے؟',
            options: [
              { id: 'a', text: 'علی نے خط لکھا', misconception: 'zamana-confusion', feedback: '«لکھا» گزرے وقت کو بتاتا ہے، یہ ماضی ہی ہے۔ سوال میں ماضی کا نہ ہونے والا جملہ پوچھا گیا ہے۔' },
              { id: 'b', text: 'ہم نے کھانا کھایا تھا', misconception: 'zamana-confusion', feedback: '«کھایا تھا» بھی ماضی ہے۔ «تھا» ماضی کی واضح علامت ہے۔' },
              { id: 'c', text: 'علی کل اسکول جائے گا', correct: true },
              { id: 'd', text: 'وہ سو گیا', misconception: 'zamana-confusion', feedback: '«سو گیا» ہو چکا ہے، یہ ماضی ہے۔ «جائے گا» آنے والے وقت کا ہے۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-zamana-hal-mustaqbil',
        title: 'زمانۂ حال و مستقبل',
        keywords: ['حال', 'مستقبل', 'رہا ہے', 'گا', 'گی', 'haal', 'mustaqbil', 'present tense', 'future tense'],
        card: {
          points: [
            'جو فعل موجودہ وقت میں کام کا ہونا بتائے اسے زمانۂ حال کہتے ہیں، جیسے «وہ پڑھ رہا ہے»۔',
            'جو فعل آنے والے وقت کی طرف اشارہ کرے اسے زمانۂ مستقبل کہتے ہیں، جیسے «وہ کل آئے گا»۔',
            'حال میں «رہا ہے، رہی ہے، تا ہے» اور مستقبل میں «گا، گی، گے» آتا ہے۔',
            'تینوں زمانے فعل کے وقت کو ظاہر کرتے ہیں: ماضی گزرا وقت، حال موجودہ وقت، مستقبل آنے والا وقت۔',
          ],
          example: '«میں ابھی سبق پڑھ رہا ہوں اور کل امتحان دوں گا۔» پہلا حصہ حال اور دوسرا مستقبل ہے۔',
        },
        questions: [
          {
            id: 'urdu-zamana-hal-mustaqbil-q1',
            difficulty: 'easy',
            text: '«بچہ سو رہا ہے» کون سا زمانہ ہے؟',
            options: [
              { id: 'a', text: 'زمانۂ ماضی', misconception: 'zamana-confusion', feedback: 'ماضی میں کام ہو چکا ہوتا ہے۔ «سو رہا ہے» ابھی ہو رہا ہے، یہ حال ہے۔' },
              { id: 'b', text: 'زمانۂ حال', correct: true },
              { id: 'c', text: 'زمانۂ مستقبل', misconception: 'zamana-confusion', feedback: 'مستقبل آنے والا وقت ہے، جیسے «سوئے گا»۔ یہاں کام ابھی جاری ہے، یہ حال ہے۔' },
              { id: 'd', text: 'اس میں کوئی زمانہ نہیں ہے', misconception: 'zamana-missing', feedback: '«رہا ہے» موجودہ وقت کی علامت ہے، اس لیے یہ زمانۂ حال ہے۔' },
            ],
          },
          {
            id: 'urdu-zamana-hal-mustaqbil-q2',
            difficulty: 'medium',
            text: 'زمانۂ مستقبل کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'ہم لاہور گئے تھے', misconception: 'zamana-confusion', feedback: '«گئے تھے» گزرا ہوا وقت ہے، یہ ماضی ہے۔ مستقبل میں «گا، گی، گے» آتا ہے۔' },
              { id: 'b', text: 'ہم لاہور جا رہے ہیں', misconception: 'zamana-confusion', feedback: '«جا رہے ہیں» ابھی کا کام ہے، یہ حال ہے۔' },
              { id: 'c', text: 'ہم کل لاہور جائیں گے', correct: true },
              { id: 'd', text: 'ہم لاہور جاتے ہیں', misconception: 'zamana-confusion', feedback: '«جاتے ہیں» موجودہ عادت بتاتا ہے، یہ حال ہے۔ «جائیں گے» مستقبل ہے۔' },
            ],
          },
          {
            id: 'urdu-zamana-hal-mustaqbil-q3',
            difficulty: 'hard',
            text: '«گا، گی، گے» کس زمانے کی علامت ہے؟',
            options: [
              { id: 'a', text: 'زمانۂ حال کی', misconception: 'zamana-nishani', feedback: 'حال کی علامت «رہا ہے، تا ہے» ہے۔ «گا، گی، گے» ہمیشہ آنے والے وقت کو بتاتا ہے۔' },
              { id: 'b', text: 'زمانۂ ماضی کی', misconception: 'zamana-nishani', feedback: 'ماضی کی علامت «تھا، تھی» یا فعل کا ا، ی پر ختم ہونا ہے۔ «گا، گی» مستقبل کی علامت ہے۔' },
              { id: 'c', text: 'تینوں زمانوں کی', misconception: 'zamana-nishani', feedback: 'ہر زمانے کی اپنی علامت ہے۔ «گا، گی، گے» صرف مستقبل میں آتا ہے۔' },
              { id: 'd', text: 'زمانۂ مستقبل کی', correct: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'urdu-huroof',
    title: 'حروف',
    concepts: [
      {
        id: 'urdu-harf-jar',
        title: 'حروفِ جار',
        keywords: ['حرفِ جار', 'میں', 'پر', 'سے', 'کو', 'harf-e-jar', 'preposition'],
        card: {
          points: [
            'جو حروف اسم کا تعلق فعل سے جوڑ کر جگہ، وقت یا نسبت ظاہر کریں انہیں حروفِ جار کہتے ہیں۔',
            'میں، پر، سے، کو، تک، کے لیے، کی طرف حروفِ جار ہیں۔',
            'حرفِ جار کے بعد آنے والے اسم کو مجرور کہتے ہیں۔',
            'یہ حروف جملے کے معنی واضح کرتے ہیں۔',
          ],
          example: '«کتاب میز پر رکھی ہے۔» یہاں «پر» حرفِ جار ہے جو کتاب کی جگہ بتا رہا ہے۔',
        },
        questions: [
          {
            id: 'urdu-harf-jar-q1',
            difficulty: 'easy',
            text: 'حرفِ جار کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'اور', misconception: 'harf-ataf-confusion', feedback: '«اور» دو چیزوں کو جوڑتا ہے، یہ حرفِ عطف ہے۔ حرفِ جار جگہ یا تعلق بتاتا ہے، جیسے «پر»۔' },
              { id: 'b', text: 'پر', correct: true },
              { id: 'c', text: 'اے', misconception: 'harf-nida-confusion', feedback: '«اے» پکارنے کے لیے آتا ہے، یہ حرفِ ندا ہے۔ حرفِ جار جیسے «میں، پر، سے» تعلق بتاتے ہیں۔' },
              { id: 'd', text: 'کیا', misconception: 'harf-istifham-confusion', feedback: '«کیا» سوال کے لیے آتا ہے، یہ حرفِ استفہام ہے۔ حرفِ جار اسم کا تعلق ظاہر کرتا ہے۔' },
            ],
          },
          {
            id: 'urdu-harf-jar-q2',
            difficulty: 'medium',
            text: '«وہ اسکول سے آیا» میں حرفِ جار کون سا ہے؟',
            options: [
              { id: 'a', text: 'وہ', misconception: 'jar-zameer', feedback: '«وہ» ضمیر ہے۔ حرفِ جار وہ ہے جو تعلق بتائے، یہاں «سے» اسکول سے آنے کا تعلق بتا رہا ہے۔' },
              { id: 'b', text: 'اسکول', misconception: 'jar-ism', feedback: 'اسکول اسم ہے اور حرفِ جار کے بعد آنے کی وجہ سے مجرور ہے۔ حرفِ جار «سے» ہے۔' },
              { id: 'c', text: 'آیا', misconception: 'jar-fail', feedback: 'آیا فعل ہے۔ حرفِ جار «سے» ہے جو جگہ سے آنے کا تعلق ظاہر کرتا ہے۔' },
              { id: 'd', text: 'سے', correct: true },
            ],
          },
          {
            id: 'urdu-harf-jar-q3',
            difficulty: 'hard',
            text: 'حرفِ جار کا کام کیا ہے؟',
            options: [
              { id: 'a', text: 'دو لفظوں یا جملوں کو جوڑنا', misconception: 'harf-ataf-confusion', feedback: 'جوڑنے کا کام حرفِ عطف کرتا ہے، جیسے «اور»۔ حرفِ جار اسم کا تعلق فعل سے ظاہر کرتا ہے۔' },
              { id: 'b', text: 'کسی کو پکارنا', misconception: 'harf-nida-confusion', feedback: 'پکارنا حرفِ ندا کا کام ہے، جیسے «اے»۔ حرفِ جار جگہ، وقت یا تعلق بتاتا ہے۔' },
              { id: 'c', text: 'اسم کا تعلق فعل یا جملے سے ظاہر کرنا', correct: true },
              { id: 'd', text: 'سوال پوچھنا', misconception: 'harf-istifham-confusion', feedback: 'سوال پوچھنا حرفِ استفہام کا کام ہے، جیسے «کیا»۔ حرفِ جار تعلق بتاتا ہے۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-harf-ataf',
        title: 'حروفِ عطف',
        keywords: ['حرفِ عطف', 'اور', 'لیکن', 'یا', 'harf-e-ataf', 'conjunction'],
        card: {
          points: [
            'جو حروف دو لفظوں یا دو جملوں کو آپس میں جوڑیں انہیں حروفِ عطف کہتے ہیں۔',
            'اور، و، بھی، لیکن، مگر، یا حروفِ عطف ہیں۔',
            '«لیکن» اور «مگر» اختلاف یا ضد ظاہر کرتے ہیں۔',
            '«یا» دو چیزوں میں سے ایک کے انتخاب کے لیے آتا ہے۔',
          ],
          example: '«احمد اور علی دوست ہیں۔» یہاں «اور» دو ناموں کو جوڑ رہا ہے، یہ حرفِ عطف ہے۔',
        },
        questions: [
          {
            id: 'urdu-harf-ataf-q1',
            difficulty: 'easy',
            text: 'حرفِ عطف کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'میں', misconception: 'harf-jar-confusion', feedback: '«میں» جگہ بتاتا ہے، یہ حرفِ جار ہے۔ حرفِ عطف جوڑنے والا ہوتا ہے، جیسے «اور»۔' },
              { id: 'b', text: 'اے', misconception: 'harf-nida-confusion', feedback: '«اے» پکارنے کے لیے ہے، یہ حرفِ ندا ہے۔ جوڑنے والا حرف «اور» ہے۔' },
              { id: 'c', text: 'اور', correct: true },
              { id: 'd', text: 'نے', misconception: 'harf-jar-confusion', feedback: '«نے» حرفِ جار کے طور پر آتا ہے۔ دو چیزوں کو جوڑنے والا حرفِ عطف «اور» ہے۔' },
            ],
          },
          {
            id: 'urdu-harf-ataf-q2',
            difficulty: 'medium',
            text: '«میں جانا چاہتا تھا لیکن بارش ہو گئی» میں حرفِ عطف کون سا ہے؟',
            options: [
              { id: 'a', text: 'میں', misconception: 'ataf-zameer', feedback: '«میں» ضمیر ہے۔ اس جملے میں دو باتوں کو جوڑنے والا لفظ «لیکن» ہے۔' },
              { id: 'b', text: 'لیکن', correct: true },
              { id: 'c', text: 'بارش', misconception: 'ataf-ism', feedback: 'بارش اسم ہے۔ جوڑنے والا حرف «لیکن» ہے جو ضد بھی ظاہر کر رہا ہے۔' },
              { id: 'd', text: 'گئی', misconception: 'ataf-fail', feedback: 'گئی فعل ہے۔ حرفِ عطف «لیکن» ہے۔' },
            ],
          },
          {
            id: 'urdu-harf-ataf-q3',
            difficulty: 'hard',
            text: '«یا» کب استعمال ہوتا ہے؟',
            options: [
              { id: 'a', text: 'کسی کو پکارنے کے لیے', misconception: 'harf-nida-confusion', feedback: 'پکارنے کے لیے «اے، ارے» آتے ہیں۔ «یا» انتخاب کے لیے آتا ہے، جیسے چائے یا کافی۔' },
              { id: 'b', text: 'سوال پوچھنے کے لیے', misconception: 'harf-istifham-confusion', feedback: 'سوال کے لیے «کیا، کیوں» آتے ہیں۔ «یا» دو چیزوں میں سے ایک چننے کے لیے آتا ہے۔' },
              { id: 'c', text: 'جگہ بتانے کے لیے', misconception: 'harf-jar-confusion', feedback: 'جگہ بتانا حرفِ جار کا کام ہے، جیسے «میں، پر»۔ «یا» انتخاب بتاتا ہے۔' },
              { id: 'd', text: 'دو چیزوں میں سے ایک کے انتخاب کے لیے', correct: true },
            ],
          },
        ],
      },
      {
        id: 'urdu-harf-nida-istifham',
        title: 'حروفِ ندا و استفہام',
        keywords: ['حرفِ ندا', 'حرفِ استفہام', 'اے', 'ارے', 'کیا', 'کیوں', 'nida', 'istifham', 'question words'],
        card: {
          points: [
            'جن حروف سے کسی کو پکارا جائے انہیں حروفِ ندا کہتے ہیں، جیسے اے، ارے، او۔',
            'جن حروف سے سوال کیا جائے انہیں حروفِ استفہام کہتے ہیں، جیسے کیا، کیوں، کب، کہاں، کون۔',
            'ندا کے جملے میں عموماً فجائیہ نشان (!) آتا ہے۔',
            'استفہام کے جملے کے آخر میں سوالیہ نشان (؟) لگتا ہے۔',
          ],
          example: '«اے دوست! ذرا میری بات سنو۔» یہاں «اے» حرفِ ندا ہے۔',
        },
        questions: [
          {
            id: 'urdu-harf-nida-istifham-q1',
            difficulty: 'easy',
            text: 'حرفِ ندا کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'کیا', misconception: 'nida-istifham-confusion', feedback: '«کیا» سوال کے لیے آتا ہے، یہ حرفِ استفہام ہے۔ پکارنے والا حرف «اے» ہے۔' },
              { id: 'b', text: 'اور', misconception: 'harf-ataf-confusion', feedback: '«اور» جوڑنے والا حرفِ عطف ہے۔ پکارنے کے لیے «اے، ارے» آتے ہیں۔' },
              { id: 'c', text: 'اے', correct: true },
              { id: 'd', text: 'پر', misconception: 'harf-jar-confusion', feedback: '«پر» حرفِ جار ہے جو جگہ بتاتا ہے۔ حرفِ ندا پکارنے کے لیے آتا ہے۔' },
            ],
          },
          {
            id: 'urdu-harf-nida-istifham-q2',
            difficulty: 'medium',
            text: '«تم کہاں جا رہے ہو؟» میں حرفِ استفہام کون سا ہے؟',
            options: [
              { id: 'a', text: 'تم', misconception: 'ataf-zameer', feedback: '«تم» ضمیر ہے۔ سوال والا لفظ «کہاں» ہے جو جگہ پوچھ رہا ہے۔' },
              { id: 'b', text: 'جا رہے', misconception: 'ataf-fail', feedback: '«جا رہے» فعل کا حصہ ہے۔ استفہام وہ لفظ ہے جس سے سوال بنے، یہاں «کہاں»۔' },
              { id: 'c', text: 'ہو', misconception: 'ataf-fail', feedback: '«ہو» فعل کا حصہ ہے۔ سوال «کہاں» سے بن رہا ہے، یہی حرفِ استفہام ہے۔' },
              { id: 'd', text: 'کہاں', correct: true },
            ],
          },
          {
            id: 'urdu-harf-nida-istifham-q3',
            difficulty: 'hard',
            text: '«ارے! تم آ گئے» میں «ارے» کیا ہے؟',
            options: [
              { id: 'a', text: 'حرفِ جار', misconception: 'harf-jar-confusion', feedback: 'حرفِ جار جگہ یا تعلق بتاتا ہے، جیسے «میں، پر»۔ «ارے» پکارنے اور تعجب کے لیے آیا ہے۔' },
              { id: 'b', text: 'حرفِ ندا', correct: true },
              { id: 'c', text: 'حرفِ عطف', misconception: 'harf-ataf-confusion', feedback: 'حرفِ عطف دو چیزوں کو جوڑتا ہے، جیسے «اور»۔ «ارے» یہاں پکارنے کے لیے ہے۔' },
              { id: 'd', text: 'حرفِ استفہام', misconception: 'nida-istifham-confusion', feedback: 'استفہام سے سوال ہوتا ہے، جیسے «کیا، کہاں»۔ یہاں کوئی سوال نہیں، «ارے» ندا ہے۔' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'urdu-murakkab-jumla',
    title: 'مرکبات و جملہ',
    concepts: [
      {
        id: 'urdu-murakkab-izafi',
        title: 'مرکبِ اضافی',
        keywords: ['مرکبِ اضافی', 'مضاف', 'مضاف الیہ', 'ملکیت', 'izafat', 'possessive compound'],
        card: {
          points: [
            'جب دو اسم اس طرح ملیں کہ ان سے ملکیت یا تعلق ظاہر ہو تو اسے مرکبِ اضافی کہتے ہیں۔',
            'جس کی ملکیت ہو اسے مضاف الیہ اور جو چیز ملکیت میں ہو اسے مضاف کہتے ہیں۔',
            'اردو کی اضافت میں «کا، کی، کے» آتا ہے، جیسے «احمد کی کتاب»۔',
            '«احمد کی کتاب» میں «کتاب» مضاف ہے اور «احمد» مضاف الیہ ہے۔',
          ],
          example: '«مریم کا قلم میز پر ہے۔» یہاں «مریم کا قلم» مرکبِ اضافی ہے۔',
        },
        questions: [
          {
            id: 'urdu-murakkab-izafi-q1',
            difficulty: 'easy',
            text: 'مرکبِ اضافی کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'نیلا آسمان', misconception: 'tausifi-confusion', feedback: '«نیلا» آسمان کی صفت ہے، یہ مرکبِ توصیفی ہے۔ اضافی میں ملکیت آتی ہے، جیسے «علی کا گھر»۔' },
              { id: 'b', text: 'علی کا گھر', correct: true },
              { id: 'c', text: 'اچھا لڑکا', misconception: 'tausifi-confusion', feedback: '«اچھا» لڑکے کی صفت ہے، یہ توصیفی ہے۔ اضافی میں «کا، کی» سے ملکیت ظاہر ہوتی ہے۔' },
              { id: 'd', text: 'بڑا درخت', misconception: 'tausifi-confusion', feedback: '«بڑا» صفت ہے، یہ توصیفی ترکیب ہے۔ اضافی کی مثال «درخت کا سایہ» ہوتی۔' },
            ],
          },
          {
            id: 'urdu-murakkab-izafi-q2',
            difficulty: 'medium',
            text: '«استاد کی کرسی» میں مضاف کون سا ہے؟',
            options: [
              { id: 'a', text: 'استاد', misconception: 'mudaf-confusion', feedback: 'استاد وہ ہے جس کی ملکیت ہے، اسے مضاف الیہ کہتے ہیں۔ مضاف وہ چیز ہے جو ملکیت میں ہو: کرسی۔' },
              { id: 'b', text: 'کی', misconception: 'mudaf-confusion', feedback: '«کی» اضافت کا حرف ہے، یہ نہ مضاف ہے نہ مضاف الیہ۔ مضاف «کرسی» ہے۔' },
              { id: 'c', text: 'کرسی', correct: true },
              { id: 'd', text: 'دونوں لفظ مضاف ہیں', misconception: 'mudaf-confusion', feedback: 'دونوں کے الگ نام ہیں: استاد مضاف الیہ اور کرسی مضاف ہے۔' },
            ],
          },
          {
            id: 'urdu-murakkab-izafi-q3',
            difficulty: 'hard',
            text: 'مرکبِ اضافی میں کون سا تعلق ظاہر ہوتا ہے؟',
            options: [
              { id: 'a', text: 'صفت اور موصوف کا', misconception: 'tausifi-confusion', feedback: 'صفت اور موصوف کا تعلق مرکبِ توصیفی میں ہوتا ہے۔ اضافی میں ملکیت یا نسبت ہوتی ہے۔' },
              { id: 'b', text: 'زمانے کا', misconception: 'zamana-confusion', feedback: 'زمانہ فعل سے ظاہر ہوتا ہے۔ مرکبِ اضافی دو اسموں کے درمیان ملکیت بتاتا ہے۔' },
              { id: 'c', text: 'ملکیت یا نسبت کا', correct: true },
              { id: 'd', text: 'فعل اور فاعل کا', misconception: 'fail-ism', feedback: 'فعل اور فاعل جملے کے اجزا ہیں۔ اضافی میں دو اسم ملکیت کے تعلق سے جڑتے ہیں۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-murakkab-tausifi',
        title: 'مرکبِ توصیفی',
        keywords: ['مرکبِ توصیفی', 'صفت', 'موصوف', 'tausifi', 'adjective compound'],
        card: {
          points: [
            'جب صفت اور موصوف مل کر ایک ترکیب بنائیں تو اسے مرکبِ توصیفی کہتے ہیں۔',
            'اس ترکیب میں پہلا لفظ صفت اور دوسرا موصوف ہوتا ہے۔',
            '«سرخ پھول» اور «ذہین طالب علم» اس کی مثالیں ہیں۔',
            'یہ ترکیب کسی اسم کی خصوصیت بتاتی ہے۔',
          ],
          example: '«باغ میں خوشبودار پھول کھلے ہیں۔» یہاں «خوشبودار پھول» مرکبِ توصیفی ہے۔',
        },
        questions: [
          {
            id: 'urdu-murakkab-tausifi-q1',
            difficulty: 'easy',
            text: 'مرکبِ توصیفی کی مثال کون سی ہے؟',
            options: [
              { id: 'a', text: 'احمد کا آم', misconception: 'izafi-confusion', feedback: '«احمد کا آم» میں ملکیت ہے، یہ مرکبِ اضافی ہے۔ توصیفی میں صفت آتی ہے، جیسے «میٹھا آم»۔' },
              { id: 'b', text: 'درخت کا سایہ', misconception: 'izafi-confusion', feedback: 'اس میں «کا» سے ملکیت ظاہر ہے، یہ اضافی ہے۔ توصیفی میں پہلا لفظ صفت ہوتا ہے۔' },
              { id: 'c', text: 'میٹھا آم', correct: true },
              { id: 'd', text: 'وہ لڑکا', misconception: 'tausifi-confusion', feedback: '«وہ» ضمیرِ اشارہ ہے، صفت نہیں۔ توصیفی میں خصوصیت بتانے والا لفظ ہوتا ہے، جیسے «میٹھا»۔' },
            ],
          },
          {
            id: 'urdu-murakkab-tausifi-q2',
            difficulty: 'medium',
            text: '«لمبی سڑک» میں صفت کون سی ہے؟',
            options: [
              { id: 'a', text: 'سڑک', misconception: 'sifat-mausoof', feedback: 'سڑک وہ چیز ہے جس کی خصوصیت بتائی گئی، یہ موصوف ہے۔ صفت «لمبی» ہے۔' },
              { id: 'b', text: 'دونوں لفظ صفت ہیں', misconception: 'sifat-mausoof', feedback: 'دوسرا لفظ اسم ہوتا ہے جسے موصوف کہتے ہیں۔ یہاں صفت صرف «لمبی» ہے۔' },
              { id: 'c', text: 'اس میں صفت نہیں ہے', misconception: 'sifat-missing', feedback: '«لمبی» سڑک کی خصوصیت بتا رہی ہے، یہی صفت ہے۔' },
              { id: 'd', text: 'لمبی', correct: true },
            ],
          },
          {
            id: 'urdu-murakkab-tausifi-q3',
            difficulty: 'hard',
            text: 'مرکبِ توصیفی اور مرکبِ اضافی میں اصل فرق کیا ہے؟',
            options: [
              { id: 'a', text: 'دونوں بالکل ایک ہی چیز ہیں', misconception: 'murakkab-farq', feedback: 'دونوں الگ ہیں: توصیفی میں صفت و موصوف اور اضافی میں ملکیت کا تعلق ہوتا ہے۔' },
              { id: 'b', text: 'توصیفی میں ملکیت اور اضافی میں صفت ہوتی ہے', misconception: 'murakkab-farq', feedback: 'یہ الٹ ہے۔ توصیفی میں صفت ہوتی ہے اور اضافی میں ملکیت۔' },
              { id: 'c', text: 'توصیفی میں صفت و موصوف ہوتے ہیں اور اضافی میں ملکیت کا تعلق ہوتا ہے', correct: true },
              { id: 'd', text: 'توصیفی صرف نظم میں آتا ہے', misconception: 'murakkab-farq', feedback: 'دونوں ترکیبییں نثر اور روزمرہ زبان میں آتی ہیں۔ فرق ان کے معنی کا ہے۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-jumla-aqsam',
        title: 'جملے کی اقسام اور واحد جمع',
        keywords: ['جملہ', 'خبریہ', 'سوالیہ', 'واحد', 'جمع', 'jumla', 'sentence', 'singular', 'plural'],
        card: {
          points: [
            'جملہ لفظوں کا ایسا مجموعہ ہے جس سے پوری بات سمجھ آئے۔',
            'جس جملے میں کوئی خبر دی جائے اسے خبریہ اور جس میں سوال ہو اسے سوالیہ کہتے ہیں۔',
            'جس جملے میں حکم یا درخواست ہو اسے امریہ کہتے ہیں۔',
            'واحد ایک کے لیے اور جمع ایک سے زیادہ کے لیے آتا ہے، جیسے کتاب سے کتابیں، لڑکا سے لڑکے۔',
          ],
          example: '«کیا تم نے سبق یاد کر لیا؟» یہ سوالیہ جملہ ہے کیونکہ اس میں سوال کیا گیا ہے۔',
        },
        questions: [
          {
            id: 'urdu-jumla-aqsam-q1',
            difficulty: 'easy',
            text: 'سوالیہ جملے کی پہچان کیا ہے؟',
            options: [
              { id: 'a', text: 'اس میں کوئی خبر دی جاتی ہے', misconception: 'jumla-aqsam-confusion', feedback: 'خبر دینے والا جملہ خبریہ ہوتا ہے۔ سوالیہ میں سوال پوچھا جاتا ہے۔' },
              { id: 'b', text: 'اس میں سوال کیا جاتا ہے اور آخر میں سوالیہ نشان آتا ہے', correct: true },
              { id: 'c', text: 'اس میں حکم دیا جاتا ہے', misconception: 'jumla-aqsam-confusion', feedback: 'حکم والا جملہ امریہ ہوتا ہے۔ سوالیہ میں سوال ہوتا ہے اور «؟» لگتا ہے۔' },
              { id: 'd', text: 'اس میں تعجب ظاہر ہوتا ہے', misconception: 'jumla-aqsam-confusion', feedback: 'تعجب والا جملہ فجائیہ ہوتا ہے۔ سوالیہ کی پہچان سوال اور سوالیہ نشان ہے۔' },
            ],
          },
          {
            id: 'urdu-jumla-aqsam-q2',
            difficulty: 'medium',
            text: '«کتاب» کا جمع کون سا ہے؟',
            options: [
              { id: 'a', text: 'کتابا', misconception: 'wahid-jama-confusion', feedback: '«کتابا» اردو میں جمع نہیں بنتا۔ کتاب کا جمع «کتابیں» ہے۔' },
              { id: 'b', text: 'کتابان', misconception: 'wahid-jama-confusion', feedback: '«کتابان» بھی درست جمع نہیں۔ اردو میں کتاب کی جمع «کتابیں» آتی ہے۔' },
              { id: 'c', text: 'کتابیں', correct: true },
              { id: 'd', text: 'کتاب ہی جمع ہے', misconception: 'wahid-jama-confusion', feedback: 'کتاب واحد ہے، ایک کتاب کے لیے۔ ایک سے زیادہ کے لیے «کتابیں» کہتے ہیں۔' },
            ],
          },
          {
            id: 'urdu-jumla-aqsam-q3',
            difficulty: 'hard',
            text: '«براہ کرم دروازہ بند کر دیں» کون سا جملہ ہے؟',
            options: [
              { id: 'a', text: 'خبریہ', misconception: 'jumla-aqsam-confusion', feedback: 'خبریہ میں خبر دی جاتی ہے۔ اس جملے میں درخواست کی گئی ہے، یہ امریہ ہے۔' },
              { id: 'b', text: 'سوالیہ', misconception: 'jumla-aqsam-confusion', feedback: 'سوالیہ میں سوال ہوتا ہے اور «؟» آتا ہے۔ یہاں درخواست ہے، سوال نہیں۔' },
              { id: 'c', text: 'فجائیہ', misconception: 'jumla-aqsam-confusion', feedback: 'فجائیہ میں تعجب یا جذبات ہوتے ہیں۔ اس جملے میں شائستہ درخواست ہے، یہ امریہ ہے۔' },
              { id: 'd', text: 'امریہ', correct: true },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'urdu-muhavare-khat',
    title: 'محاورے اور خط نویسی',
    concepts: [
      {
        id: 'urdu-muhavara',
        title: 'محاوروں کے معنی و استعمال',
        keywords: ['محاورہ', 'آنکھوں کا تارا', 'نو دو گیارہ', 'muhavra', 'idiom'],
        card: {
          points: [
            'محاورہ وہ ترکیب ہے جو اپنے لفظی معنی کے بجائے خاص مجازی معنی میں استعمال ہو۔',
            '«آنکھوں کا تارا» کا مطلب ہے بہت پیارا۔',
            'محاورے زبان کو خوبصورت اور پراثر بناتے ہیں۔',
            'محاورے کے الفاظ عام طور پر بدلے نہیں جاتے، وہ اسی صورت میں استعمال ہوتے ہیں۔',
          ],
          example: '«بیٹا ماں کی آنکھوں کا تارا ہے۔» یعنی بیٹا ماں کو بہت پیارا ہے۔',
        },
        questions: [
          {
            id: 'urdu-muhavara-q1',
            difficulty: 'easy',
            text: '«آنکھوں کا تارا» کا مطلب کیا ہے؟',
            options: [
              { id: 'a', text: 'آنکھ میں نظر آنے والا ستارہ', misconception: 'lafzi-maani', feedback: 'یہ لفظی معنی ہے۔ محاورے کا اصل مطلب مجازی ہوتا ہے: بہت پیارا۔' },
              { id: 'b', text: 'بہت پیارا', correct: true },
              { id: 'c', text: 'کمزور نظر والا', misconception: 'lafzi-maani', feedback: 'محاورہ آنکھ کی حالت نہیں بتاتا۔ «آنکھوں کا تارا» محبوب اور پیارے کے لیے آتا ہے۔' },
              { id: 'd', text: 'رات کو جاگنے والا', misconception: 'lafzi-maani', feedback: 'تارے سے رات کا خیال آیا مگر محاورے کا مطلب بہت پیارا ہونا ہے۔' },
            ],
          },
          {
            id: 'urdu-muhavara-q2',
            difficulty: 'medium',
            text: '«نو دو گیارہ ہونا» کا مطلب کیا ہے؟',
            options: [
              { id: 'a', text: 'گنتی سیکھنا', misconception: 'lafzi-maani', feedback: 'یہ لفظی مطلب ہے۔ محاورے میں اس کا مطلب چپکے سے بھاگ جانا ہے۔' },
              { id: 'b', text: 'گیارہ بجے آنا', misconception: 'lafzi-maani', feedback: 'وقت بتانا اس محاورے کا مطلب نہیں۔ یہ بھاگ نکلنے کے لیے بولا جاتا ہے۔' },
              { id: 'c', text: 'چپکے سے بھاگ جانا', correct: true },
              { id: 'd', text: 'حساب کرنا', misconception: 'lafzi-maani', feedback: 'اعداد دیکھ کر حساب کا خیال آتا ہے مگر اصل مطلب غائب ہو جانا ہے۔' },
            ],
          },
          {
            id: 'urdu-muhavara-q3',
            difficulty: 'hard',
            text: 'محاورہ کسے کہتے ہیں؟',
            options: [
              { id: 'a', text: 'جو ترکیب صرف لفظی معنی ہی دے', misconception: 'muhavara-taarif', feedback: 'لفظی معنی دینے والی بات عام بات ہے۔ محاورہ مجازی معنی میں آتا ہے۔' },
              { id: 'b', text: 'جو ترکیب مجازی معنی میں استعمال ہو', correct: true },
              { id: 'c', text: 'جو صرف نظم میں استعمال ہو', misconception: 'muhavara-taarif', feedback: 'محاورے نثر اور روزمرہ گفتگو میں بھی آتے ہیں۔ ان کی پہچان مجازی معنی ہے۔' },
              { id: 'd', text: 'جو دو جملوں کو جوڑے', misconception: 'harf-ataf-confusion', feedback: 'جوڑنے کا کام حرفِ عطف کرتا ہے۔ محاورہ ایک خاص معنی رکھنے والی ترکیب ہے۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-zarb-ul-misl',
        title: 'ضرب الامثال',
        keywords: ['ضرب المثل', 'کہاوت', 'نصیحت', 'zarb-ul-misl', 'proverb'],
        card: {
          points: [
            'ضرب المثل وہ مشہور کہاوت ہے جس میں زندگی کا کوئی تجربہ یا نصیحت ہوتی ہے۔',
            '«جیسا کرو گے ویسا بھرو گے» ایک ضرب المثل ہے۔',
            'ضرب الامثال بات کو مختصر اور پراثر انداز میں کہتی ہیں۔',
            'یہ بڑوں کے تجربے کا نچوڑ ہوتی ہیں اور زبان میں عام بولی جاتی ہیں۔',
          ],
          example: '«جیسا بوؤ گے ویسا کاٹو گے۔» یعنی جیسا عمل ہو گا ویسا ہی نتیجہ ملے گا۔',
        },
        questions: [
          {
            id: 'urdu-zarb-ul-misl-q1',
            difficulty: 'easy',
            text: 'ضرب المثل کسے کہتے ہیں؟',
            options: [
              { id: 'a', text: 'مشہور کہاوت جس میں نصیحت یا تجربہ ہو', correct: true },
              { id: 'b', text: 'صرف مذاق والی بات کو', misconception: 'misl-maqsad', feedback: 'ضرب المثل مذاق نہیں ہوتی۔ اس میں زندگی کی سچی نصیحت ہوتی ہے۔' },
              { id: 'c', text: 'ایک لمبی کہانی کو', misconception: 'misl-maqsad', feedback: 'کہانی لمبی ہوتی ہے۔ ضرب المثل مختصر جملہ ہوتا ہے جس میں بڑی بات کہی جاتی ہے۔' },
              { id: 'd', text: 'نظم کے کسی شعر کو', misconception: 'misl-maqsad', feedback: 'شعر نظم کا حصہ ہے۔ ضرب المثل نثر کی مشہور کہاوت ہے جس میں تجربہ ہوتا ہے۔' },
            ],
          },
          {
            id: 'urdu-zarb-ul-misl-q2',
            difficulty: 'medium',
            text: '«جیسا کرو گے ویسا بھرو گے» کا مطلب کیا ہے؟',
            options: [
              { id: 'a', text: 'کھیتی سے اچھا پھل ملتا ہے', misconception: 'misl-lafzi', feedback: 'یہ کہاوت کھیتی کی نہیں۔ اس کا مطلب ہے کہ عمل کا نتیجہ ویسا ہی ملتا ہے۔' },
              { id: 'b', text: 'اچھے یا برے عمل کا نتیجہ ویسا ہی ملتا ہے', correct: true },
              { id: 'c', text: 'برتن اچھی طرح بھرنا چاہیے', misconception: 'misl-lafzi', feedback: '«بھرو گے» یہاں نتیجہ پانے کے معنی میں ہے، برتن بھرنے کے نہیں۔' },
              { id: 'd', text: 'ہر چیز تول کر لینی چاہیے', misconception: 'misl-lafzi', feedback: 'اس کہاوت کا تعلق تول سے نہیں۔ یہ عمل اور اس کے انجام کی بات ہے۔' },
            ],
          },
          {
            id: 'urdu-zarb-ul-misl-q3',
            difficulty: 'hard',
            text: 'محاورے اور ضرب المثل میں کیا فرق ہے؟',
            options: [
              { id: 'a', text: 'دونوں بالکل ایک ہی چیز ہیں', misconception: 'misl-muhavara-confusion', feedback: 'دونوں الگ ہیں: ضرب المثل مکمل جملہ اور نصیحت ہوتی ہے، محاورہ ایک ترکیب ہوتا ہے۔' },
              { id: 'b', text: 'ضرب المثل مکمل جملہ ہوتی ہے اور نصیحت دیتی ہے، محاورہ ایک ترکیب ہوتا ہے', correct: true },
              { id: 'c', text: 'محاورہ نصیحت دیتا ہے اور ضرب المثل نہیں', misconception: 'misl-muhavara-confusion', feedback: 'یہ الٹ ہے۔ نصیحت ضرب المثل میں ہوتی ہے، محاورہ صرف خاص معنی دیتا ہے۔' },
              { id: 'd', text: 'ضرب المثل صرف نظم میں آتی ہے', misconception: 'misl-maqsad', feedback: 'ضرب الامثال روزمرہ گفتگو میں بولی جاتی ہیں۔ فرق ان کی ساخت اور نصیحت کا ہے۔' },
            ],
          },
        ],
      },
      {
        id: 'urdu-khat-darxast',
        title: 'خط و درخواست کا اسلوب',
        keywords: ['خط', 'درخواست', 'پتہ', 'تاریخ', 'لقب', 'khat', 'darkhast', 'letter', 'application'],
        card: {
          points: [
            'خط یا درخواست میں سب سے پہلے اپنا پتہ اور تاریخ لکھی جاتی ہے۔',
            'پھر مخاطب کے لیے مناسب لقب لکھا جاتا ہے، جیسے «محترم جناب»۔',
            'بات مختصر، شائستہ اور واضح انداز میں لکھی جاتی ہے۔',
            'آخر میں «والسلام» یا «آپ کا شاگرد» لکھ کر اپنا نام لکھا جاتا ہے۔',
          ],
          example: 'اسکول کے صدر مدرس کو چھٹی کی درخواست اسی اسلوب سے لکھی جاتی ہے۔',
        },
        questions: [
          {
            id: 'urdu-khat-darxast-q1',
            difficulty: 'easy',
            text: 'درخواست میں سب سے پہلے کیا لکھا جاتا ہے؟',
            options: [
              { id: 'a', text: 'پتہ اور تاریخ', correct: true },
              { id: 'b', text: 'لمبی تمہید', misconception: 'khat-tarteeb', feedback: 'تمہید پہلے نہیں آتی۔ درخواست کا آغاز پتے اور تاریخ سے ہوتا ہے۔' },
              { id: 'c', text: 'دستخط سب سے اوپر', misconception: 'khat-tarteeb', feedback: 'دستخط اور نام آخر میں آتے ہیں۔ سب سے پہلے پتہ اور تاریخ لکھی جاتی ہے۔' },
              { id: 'd', text: 'شکریے کا جملہ', misconception: 'khat-tarteeb', feedback: 'شکریہ آخر میں ہو سکتا ہے۔ آغاز ہمیشہ پتے اور تاریخ سے ہوتا ہے۔' },
            ],
          },
          {
            id: 'urdu-khat-darxast-q2',
            difficulty: 'medium',
            text: 'استاد کو درخواست میں مناسب لقب کون سا ہے؟',
            options: [
              { id: 'a', text: 'پیارے دوست', misconception: 'khat-laqab', feedback: 'یہ لقب دوست کے خط کے لیے ہے۔ استاد کے لیے احترام والا لقب «محترم جناب» ہے۔' },
              { id: 'b', text: 'اے استاد', misconception: 'khat-laqab', feedback: 'اس طرح پکارنا خط کے ادب کے خلاف ہے۔ استاد کو «محترم جناب» لکھا جاتا ہے۔' },
              { id: 'c', text: 'محترم جناب', correct: true },
              { id: 'd', text: 'لقب کی ضرورت نہیں، صرف نام کافی ہے', misconception: 'khat-laqab', feedback: 'بڑوں کے خط میں لقب ضروری ہے۔ صرف نام لکھنا ادب کے خلاف ہے۔' },
            ],
          },
          {
            id: 'urdu-khat-darxast-q3',
            difficulty: 'hard',
            text: 'درخواست کی زبان کیسی ہونی چاہیے؟',
            options: [
              { id: 'a', text: 'لمبی اور مشکل الفاظ والی', misconception: 'khat-usloob', feedback: 'مشکل اور لمبی زبان درخواست کو کمزور کرتی ہے۔ بات سادہ اور واضح ہونی چاہیے۔' },
              { id: 'b', text: 'مزاحیہ اور غیر رسمی', misconception: 'khat-usloob', feedback: 'درخواست ایک رسمی تحریر ہے۔ اس میں سنجیدگی اور شائستگی ضروری ہے۔' },
              { id: 'c', text: 'شائستہ، مختصر اور واضح', correct: true },
              { id: 'd', text: 'صرف اشاروں اور مخففات والی', misconception: 'khat-usloob', feedback: 'مخففات رسمی خط کے لیے مناسب نہیں۔ پوری اور صاف بات لکھنی چاہیے۔' },
            ],
          },
        ],
      },
    ],
  },
];

export const URDU_MISCONCEPTIONS = {
  'ism-fail-confusion': { label: 'اسم اور فعل میں فرق نہ کرنا' },
  'ism-sifat-confusion': { label: 'اسم اور صفت میں فرق نہ کرنا' },
  'har-lafz-ism': { label: 'ہر لفظ کو اسم سمجھنا' },
  'khas-aam-confusion': { label: 'اسمِ خاص اور عام میں فرق نہ کرنا' },
  'zameer-confusion': { label: 'ضمیر کی پہچان میں غلطی' },
  'zameer-ism-aam': { label: 'اسمِ عام کو ضمیر سمجھنا' },
  'zameer-ism-khas': { label: 'اسمِ خاص کو ضمیر سمجھنا' },
  'zameer-fail': { label: 'فعل کو ضمیر سمجھنا یا ضمیر کو فعل کی جگہ سمجھنا' },
  'zameer-maqsad': { label: 'ضمیر کا مقصد غلط سمجھنا' },
  'sifat-zameer': { label: 'صفت کو ضمیر سمجھنا' },
  'sifat-fail': { label: 'صفت کو فعل سمجھنا' },
  'sifat-harf': { label: 'صفت کو حرف سمجھنا' },
  'sifat-mausoof': { label: 'صفت اور موصوف میں فرق نہ کرنا' },
  'sifat-missing': { label: 'جملے میں صفت نہ پہچاننا' },
  'sifat-ism-hai': { label: 'صفت کو اسم سمجھنا' },
  'fail-ism': { label: 'فعل اور اسم میں فرق نہ کرنا' },
  'fail-sifat': { label: 'فعل کو صفت سمجھنا' },
  'fail-harf': { label: 'فعل کو حرف سمجھنا' },
  'fail-missing': { label: 'جملے میں فعل نہ پہچاننا' },
  'zamana-confusion': { label: 'زمانوں میں فرق نہ کرنا' },
  'zamana-missing': { label: 'فعل کا زمانہ نہ پہچاننا' },
  'zamana-nishani': { label: 'زمانے کی علامت پہچاننے میں غلطی' },
  'harf-ataf-confusion': { label: 'حرفِ عطف کو دوسرا حرف سمجھنا' },
  'harf-nida-confusion': { label: 'حرفِ ندا کو دوسرا حرف سمجھنا' },
  'harf-istifham-confusion': { label: 'حرفِ استفہام کو دوسرا حرف سمجھنا' },
  'harf-jar-confusion': { label: 'حرفِ جار کو دوسرا حرف سمجھنا' },
  'jar-zameer': { label: 'ضمیر کو حرفِ جار سمجھنا' },
  'jar-ism': { label: 'اسم کو حرفِ جار سمجھنا' },
  'jar-fail': { label: 'فعل کو حرفِ جار سمجھنا' },
  'ataf-zameer': { label: 'ضمیر کو جوڑنے والا حرف سمجھنا' },
  'ataf-ism': { label: 'اسم کو جوڑنے والا حرف سمجھنا' },
  'ataf-fail': { label: 'فعل کو جوڑنے والا حرف سمجھنا' },
  'nida-istifham-confusion': { label: 'ندا اور استفہام میں فرق نہ کرنا' },
  'tausifi-confusion': { label: 'مرکبِ توصیفی کو دوسری ترکیب سمجھنا' },
  'izafi-confusion': { label: 'مرکبِ اضافی کو توصیفی سمجھنا' },
  'mudaf-confusion': { label: 'مضاف اور مضاف الیہ میں فرق نہ کرنا' },
  'murakkab-farq': { label: 'مرکبات کا فرق نہ سمجھنا' },
  'jumla-aqsam-confusion': { label: 'جملے کی اقسام میں فرق نہ کرنا' },
  'wahid-jama-confusion': { label: 'واحد اور جمع بنانے میں غلطی' },
  'lafzi-maani': { label: 'محاورے کے لفظی معنی لینا' },
  'muhavara-taarif': { label: 'محاورے کی تعریف غلط سمجھنا' },
  'misl-maqsad': { label: 'ضرب المثل کا مقصد غلط سمجھنا' },
  'misl-lafzi': { label: 'ضرب المثل کے لفظی معنی لینا' },
  'misl-muhavara-confusion': { label: 'محاورے اور ضرب المثل میں فرق نہ کرنا' },
  'khat-tarteeb': { label: 'خط کی ترتیب میں غلطی' },
  'khat-laqab': { label: 'خط میں نامناسب لقب' },
  'khat-usloob': { label: 'درخواست کا اسلوب غلط سمجھنا' },
};
