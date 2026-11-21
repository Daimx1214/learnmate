// LearnMate content file — Urdu (ur). Mirrors chapter.js.
// CHAPTER holds the chapter id, subject, class, title and an ordered list of concepts.
// Each concept has a short Urdu card (points + one example) and exactly 3 MCQ questions.
// Each question has 4 options (a-d); exactly one has correct: true and no other fields.
// Each question also has difficulty: 'easy' | 'medium' | 'hard' (used by pickNextQuestion in js/mastery.js).
// Every wrong option has a misconception tag (a key of MISCONCEPTIONS) and Urdu feedback.
// MISCONCEPTIONS maps each tag to a short Urdu label naming the mistake.

export const CHAPTER = {
  id: 'sci8-bal-dab',
  subject: 'سائنس',
  classLevel: 8,
  title: 'قوت اور دباؤ',
  concepts: [
    {
      id: 'bal-kya-hai',
      title: 'قوت کیا ہے',
      keywords: ['قوت', 'دھکا', 'کھچاؤ', 'force', 'push', 'pull'],
      card: {
        points: [
          'قوت ایک دھکا یا کھچاؤ ہے۔',
          'قوت سے ساکن چیز حرکت میں آ سکتی ہے، اور متحرک چیز سست، ساکن یا مڑ سکتی ہے۔',
          'قوت سے چیز کی شکل بھی بدل سکتی ہے۔',
        ],
        example: 'فٹ بال کو ٹھوکر مارنا ایک دھکا ہے، جس سے فٹ بال لڑھکنے لگتا ہے۔',
      },
      questions: [
        {
          id: 'bal-kya-hai-q1',
          difficulty: 'easy',
          text: 'قوت کیا ہے؟',
          options: [
            { id: 'a', text: 'صرف دھکا دینا ہی قوت ہے', correct: false, misconception: 'push-is-always-force', feedback: 'کھچاؤ بھی قوت ہے۔ کنویں سے رسی کھینچ کر ڈول نکالنا بھی قوت لگانا ہے۔' },
            { id: 'b', text: 'دھکا یا کھچاؤ، جو چیز کی حرکت یا شکل بدل سکتا ہے', correct: true },
            { id: 'c', text: 'کھچاؤ قوت نہیں ہوتا', correct: false, misconception: 'pull-not-force', feedback: 'رسی سے ڈوری کھینچنا بھی قوت ہے۔ کھینچنے سے بھی چیز حرکت میں آ سکتی ہے۔' },
            { id: 'd', text: 'قوت صرف متحرک چیز پر لگتی ہے', correct: false, misconception: 'force-only-when-moving', feedback: 'ساکن دیوار کو دھکا دو تو بھی آپ قوت لگاتے ہو۔ قوت لگنے کے لیے چیز کا حرکت میں ہونا ضروری نہیں۔' },
          ],
        },
        {
          id: 'bal-kya-hai-q2',
          difficulty: 'medium',
          text: 'ساکن فٹ بال کو ٹھوکر مارنے پر کیا ہوتا ہے؟',
          options: [
            { id: 'a', text: 'ساکن فٹ بال صرف تب چلتی ہے جب وہ پہلے سے چل رہی ہو', correct: false, misconception: 'force-only-when-moving', feedback: 'ساکن فٹ بال کو بھی ٹھوکر سے قوت ملتی ہے اور وہ لڑھک پڑتی ہے۔ قوت کے لیے حرکت ضروری نہیں۔' },
            { id: 'b', text: 'فٹ بال چل پڑتی ہے یا اس کی سمت بدل جاتی ہے', correct: true },
            { id: 'c', text: 'صرف چھونے سے فٹ بال چل پڑتی ہے، دھکا دینا ضروری نہیں', correct: false, misconception: 'contact-only-touch', feedback: 'صرف چھونے سے فٹ بال نہیں چلتی۔ اسے دھکا دینے سے قوت لگتی ہے اور وہ حرکت کرتی ہے۔' },
            { id: 'd', text: 'فٹ بال صرف کھچاؤ سے چلتی ہے، دھکے سے نہیں', correct: false, misconception: 'pull-not-force', feedback: 'ٹھوکر دھکا ہے، اور دھکا بھی قوت ہے۔ دھکے سے بھی چیز حرکت کرتی ہے۔' },
          ],
        },
        {
          id: 'bal-kya-hai-q3',
          difficulty: 'hard',
          text: 'نیچے کون سی مثال قوت کی ہے؟',
          options: [
            { id: 'a', text: 'ساکن میز کو دھکا دینا، مگر اسے بالکل نہ کھینچنا', correct: false, misconception: 'force-only-when-moving', feedback: 'ساکن میز کو دھکا دینے سے بھی قوت لگتی ہے۔ قوت کے لیے حرکت ضروری نہیں۔' },
            { id: 'b', text: 'رسی سے بالٹی کو کنویں سے کھینچنا', correct: true },
            { id: 'c', text: 'کتاب کو ہاتھ سے صرف چھو کر رکھے رہنا، اسے نہ ہلانا', correct: false, misconception: 'contact-only-touch', feedback: 'صرف چھونا خود بخود قوت نہیں ہے۔ قوت تب ہوتی ہے جب چیز پر دھکے یا کھچاؤ کا اثر ہو۔' },
            { id: 'd', text: 'صرف دھکا دینا ہی قوت ہے، بالٹی کھینچنا نہیں', correct: false, misconception: 'push-is-always-force', feedback: 'بالٹی کھینچنا بھی قوت ہے۔ دھکا اور کھچاؤ دونوں قوتیں ہیں۔' },
          ],
        },
      ],
    },
    {
      id: 'sampark-bal',
      title: 'تماسی قوت اور غیر تماسی قوت',
      keywords: ['تماسی', 'غیر تماسی', 'مقناطیس', 'contact', 'non-contact'],
      card: {
        points: [
          'جو قوت چیزوں کے چھونے پر لگے، اسے تماسی قوت کہتے ہیں۔',
          'جو قوت بغیر چھوئے لگے، اسے غیر تماسی قوت کہتے ہیں۔',
          'مقناطیس لوہے کو بغیر چھوئے کھینچ سکتا ہے، یہ غیر تماسی قوت ہے۔',
          'زمین کی کشش ثقل بھی غیر تماسی قوت ہے، جو چیز کو نیچے کھینچتی ہے۔',
        ],
        example: 'مقناطیس لوہے کی کیل کو بغیر چھوئے اپنی طرف کھینچ لیتا ہے۔',
      },
      questions: [
        {
          id: 'sampark-bal-q1',
          difficulty: 'medium',
          text: 'مقناطیس کا لوہے کو بغیر چھوئے کھینچنا کون سی قوت ہے؟',
          options: [
            { id: 'a', text: 'تماسی قوت، کیونکہ مقناطیس لوہے کے پاس ہوتا ہے', correct: false, misconception: 'contact-only-touch', feedback: 'قوت تبھی تماسی ہوتی ہے جب چیزیں ایک دوسرے کو چھوئیں۔ مقناطیس لوہے کو بغیر چھوئے کھینچتا ہے، اس لیے یہ غیر تماسی قوت ہے۔' },
            { id: 'b', text: 'غیر تماسی قوت، کیونکہ چیزیں ایک دوسرے کو چھوئے بغیر کھنچتی ہیں', correct: true },
            { id: 'c', text: 'یہ قوت نہیں ہوتی، کیونکہ لوہا حرکت نہیں کرتا', correct: false, misconception: 'force-only-when-moving', feedback: 'لوہا بغیر حرکت کیے بھی مقناطیس سے کھنچتا ہے۔ قوت کے لیے حرکت ضروری نہیں۔' },
            { id: 'd', text: 'یہ تماسی قوت ہے، کیونکہ لوہے کے اندر قوت ہوتی ہے', correct: false, misconception: 'contact-only-touch', feedback: 'لوہے کے اندر کی قوت نہیں، بلکہ مقناطیس کا کھچاؤ بغیر چھوئے کام کرتا ہے۔ یہ غیر تماسی قوت ہے۔' },
          ],
        },
        {
          id: 'sampark-bal-q2',
          difficulty: 'easy',
          text: 'نیچے کون سی غیر تماسی قوت ہے؟',
          options: [
            { id: 'a', text: 'رسی سے کسی چیز کو کھینچنا', correct: false, misconception: 'contact-only-touch', feedback: 'رسی چیز کو چھو کر کھینچتی ہے، اس لیے یہ تماسی قوت ہے۔' },
            { id: 'b', text: 'زمین کی کشش ثقل، جس سے پتھر نیچے گرتا ہے', correct: true },
            { id: 'c', text: 'دیوار کو ہاتھ سے دھکا دینا', correct: false, misconception: 'contact-only-touch', feedback: 'ہاتھ سے دھکا دینے میں ہاتھ دیوار کو چھوتا ہے، اس لیے یہ تماسی قوت ہے۔' },
            { id: 'd', text: 'کشش ثقل تبھی لگتی ہے جب پتھر حرکت کر رہا ہو', correct: false, misconception: 'force-only-when-moving', feedback: 'ساکن پتھر پر بھی کشش ثقل لگتی ہے۔ قوت کے لیے حرکت ضروری نہیں۔' },
          ],
        },
        {
          id: 'sampark-bal-q3',
          difficulty: 'hard',
          text: 'تماسی اور غیر تماسی قوت کے بارے میں کون سا بیان درست ہے؟',
          options: [
            { id: 'a', text: 'قوت صرف چھونے پر لگتی ہے', correct: false, misconception: 'contact-only-touch', feedback: 'قوت بغیر چھوئے بھی لگ سکتی ہے، جیسے مقناطیس کا لوہے کو کھینچنا۔' },
            { id: 'b', text: 'بغیر چھوئے بھی قوت لگ سکتی ہے', correct: true },
            { id: 'c', text: 'غیر تماسی قوت ہمیشہ دھکا ہوتی ہے', correct: false, misconception: 'push-is-always-force', feedback: 'غیر تماسی قوت کھینچنے والی بھی ہو سکتی ہے، جیسے مقناطیس کا کھچاؤ۔ وہ ہمیشہ دھکا نہیں ہوتی۔' },
            { id: 'd', text: 'کھینچنے والی قوت تماسی قوت نہیں ہوتی', correct: false, misconception: 'pull-not-force', feedback: 'رسی سے کھینچنا تماسی قوت ہے۔ کھینچنا بھی قوت ہے اور چیز کو چھو کر لگتی ہے۔' },
          ],
        },
      ],
    },
    {
      id: 'dab',
      title: 'دباؤ کیا ہے',
      keywords: ['دباؤ', 'رقبہ', 'pressure', 'area'],
      card: {
        points: [
          'دباؤ وہ قوت ہے جو کسی سطح کے فی اکائی رقبے پر لگتی ہے۔',
          'دباؤ = قوت ÷ رقبہ۔',
          'قوت برابر ہو تو رقبہ کم ہونے پر دباؤ زیادہ ہوتا ہے۔',
        ],
        example: 'نوکیلی کیل دیوار میں آسانی سے گھس جاتی ہے، کیونکہ اس کی نوک کا رقبہ کم ہے۔',
      },
      questions: [
        {
          id: 'dab-q1',
          difficulty: 'easy',
          text: 'دباؤ کسے کہتے ہیں؟',
          options: [
            { id: 'a', text: 'سطح پر لگنے والی کل قوت، چاہے رقبہ کچھ بھی ہو', correct: false, misconception: 'area-same-pressure', feedback: 'کل قوت وہی رہتی ہے، مگر دباؤ قوت کو رقبے سے تقسیم کرنے پر ملتا ہے۔ رقبہ بدلنے سے دباؤ بدلتا ہے۔' },
            { id: 'b', text: 'فی اکائی رقبے پر لگنے والی قوت', correct: true },
            { id: 'c', text: 'قوت اور رقبے کا ضرب', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'ضرب نہیں، تقسیم ہوتی ہے۔ بڑے رقبے پر قوت پھیل جاتی ہے، اس لیے دباؤ گھٹتا ہے۔' },
            { id: 'd', text: 'صرف ٹھوس اشیا پر لگنے والی قوت', correct: false, misconception: 'pressure-only-solids', feedback: 'دباؤ مائع اور گیس میں بھی ہوتا ہے، جیسے پانی اور ہوا میں۔' },
          ],
        },
        {
          id: 'dab-q2',
          difficulty: 'medium',
          text: 'کیل کی نوک نوکیلی کیوں ہوتی ہے؟',
          options: [
            { id: 'a', text: 'نوک کا وزن زیادہ ہوتا ہے', correct: false, misconception: 'heavier-more-pressure', feedback: 'دباؤ وزن سے نہیں، رقبے سے طے ہوتا ہے۔ نوک کا رقبہ کم ہے، اس لیے دباؤ زیادہ ہوتا ہے۔' },
            { id: 'b', text: 'رقبہ کم ہونے سے دباؤ زیادہ ہوتا ہے', correct: true },
            { id: 'c', text: 'نوک بڑی سطح بناتی ہے', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'نوک چھوٹی سطح بناتی ہے۔ بڑا رقبہ دباؤ کم کرتا ہے، جیسے چوڑا جوتا۔' },
            { id: 'd', text: 'نوک پر دباؤ ہمیشہ برابر رہتا ہے', correct: false, misconception: 'area-same-pressure', feedback: 'رقبہ بدلنے سے دباؤ بدلتا ہے۔ نوک کا کم رقبہ دباؤ بڑھاتا ہے۔' },
          ],
        },
        {
          id: 'dab-q3',
          difficulty: 'hard',
          text: 'قوت برابر ہو تو دباؤ کب زیادہ ہوگا؟',
          options: [
            { id: 'a', text: 'جب رقبہ زیادہ ہو', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'قوت برابر ہو تو بڑا رقبہ دباؤ گھٹاتا ہے۔ چوڑی پٹی والا بیگ کندھے پر کم چبھتا ہے۔' },
            { id: 'b', text: 'جب رقبہ کم ہو', correct: true },
            { id: 'c', text: 'رقبے کا دباؤ سے کوئی تعلق نہیں', correct: false, misconception: 'area-same-pressure', feedback: 'رقبے سے دباؤ براہ راست بدلتا ہے۔ چاقو کی پتلی دھار اسی سے کاٹتی ہے۔' },
            { id: 'd', text: 'جب چیز بھاری ہو، چاہے رقبہ کچھ بھی ہو', correct: false, misconception: 'heavier-more-pressure', feedback: 'دباؤ قوت اور رقبہ دونوں پر منحصر ہے۔ قوت برابر ہو تو رقبہ ہی دباؤ طے کرتا ہے۔' },
          ],
        },
      ],
    },
    {
      id: 'taral-dab',
      title: 'مائع میں دباؤ',
      keywords: ['مائع', 'پانی', 'گہرائی', 'liquid', 'depth'],
      card: {
        points: [
          'پانی جیسے مائع بھی دباؤ ڈالتے ہیں۔',
          'مائع میں گہرائی بڑھنے پر دباؤ بڑھتا ہے۔',
          'مائع کا دباؤ تمام سمتوں میں لگتا ہے، نیچے، اوپر اور اطراف میں۔',
        ],
        example: 'بوتل کے نچلے سوراخ سے پانی زیادہ زور سے نکلتا ہے۔',
      },
      questions: [
        {
          id: 'taral-dab-q1',
          difficulty: 'easy',
          text: 'پانی میں گہرائی بڑھنے پر دباؤ کیسے بدلتا ہے؟',
          options: [
            { id: 'a', text: 'گھٹتا ہے', correct: false, misconception: 'deeper-less-pressure', feedback: 'گہرائی بڑھنے پر اوپر کے پانی کا وزن بڑھتا ہے، اس لیے دباؤ بڑھتا ہے۔' },
            { id: 'b', text: 'بڑھتا ہے', correct: true },
            { id: 'c', text: 'پانی میں دباؤ صرف تب ہوتا ہے جب وہ ٹھوس کی طرح جما ہو', correct: false, misconception: 'pressure-only-solids', feedback: 'پانی جیسے مائع میں بھی دباؤ ہوتا ہے۔ گہرائی پر بوتل کا سوراخ پانی کو زور سے نکالتا ہے۔' },
            { id: 'd', text: 'گہرائی کا دباؤ سے کوئی تعلق نہیں', correct: false, misconception: 'depth-no-effect', feedback: 'گہرائی کا اثر ہوتا ہے۔ گہرائی بڑھنے پر دباؤ بڑھتا ہے۔' },
          ],
        },
        {
          id: 'taral-dab-q2',
          difficulty: 'medium',
          text: 'پانی میں دباؤ کن سمتوں میں لگتا ہے؟',
          options: [
            { id: 'a', text: 'صرف نیچے کی جانب', correct: false, misconception: 'pressure-only-solids', feedback: 'مائع کا دباؤ نیچے، اوپر اور اطراف، سب سمتوں میں لگتا ہے۔ بوتل کے پہلو کے سوراخ سے بھی پانی نکلتا ہے۔' },
            { id: 'b', text: 'صرف اطراف میں', correct: false, misconception: 'pressure-only-solids', feedback: 'مائع کا دباؤ صرف اطراف میں نہیں، تمام سمتوں میں لگتا ہے۔' },
            { id: 'c', text: 'تمام سمتوں میں', correct: true },
            { id: 'd', text: 'صرف اوپر کی جانب', correct: false, misconception: 'pressure-only-solids', feedback: 'پانی کا دباؤ اوپر کے ساتھ ساتھ نیچے اور اطراف میں بھی لگتا ہے۔' },
          ],
        },
        {
          id: 'taral-dab-q3',
          difficulty: 'hard',
          text: 'پانی میں 1 میٹر اور 3 میٹر گہرائی میں سے کس گہرائی پر دباؤ زیادہ ہے؟',
          options: [
            { id: 'a', text: '1 میٹر پر', correct: false, misconception: 'deeper-less-pressure', feedback: 'گہرائی بڑھنے پر دباؤ بڑھتا ہے، اس لیے 3 میٹر پر دباؤ زیادہ ہوتا ہے۔' },
            { id: 'b', text: '3 میٹر پر', correct: true },
            { id: 'c', text: 'دونوں پر دباؤ برابر ہوتا ہے', correct: false, misconception: 'depth-no-effect', feedback: 'گہرائی کا اثر ہوتا ہے۔ گہرے تالاب کی تہہ پر زیادہ دباؤ ہوتا ہے۔' },
            { id: 'd', text: 'دباؤ صرف سطح پر ہوتا ہے، گہرائی پر نہیں', correct: false, misconception: 'pressure-only-solids', feedback: 'دباؤ ہر گہرائی پر ہوتا ہے، صرف سطح پر نہیں۔' },
          ],
        },
      ],
    },
    {
      id: 'vayu-dab',
      title: 'ہوا کا دباؤ',
      keywords: ['ہوا', 'فضا', 'کرۂ ہوائی', 'air', 'atmosphere'],
      card: {
        points: [
          'ہمارے چاروں طرف ہوا کا کرۂ ہوائی ہے، جس کا وزن ہوتا ہے۔',
          'ہوا تمام سمتوں میں دباؤ ڈالتی ہے۔',
          'بلندی پر جانے سے ہوا کا دباؤ گھٹتا ہے۔',
        ],
        example: 'غبارے میں ہوا بھرنے پر وہ پھولتا ہے، کیونکہ ہوا ہر طرف دباؤ ڈالتی ہے۔',
      },
      questions: [
        {
          id: 'vayu-dab-q1',
          difficulty: 'easy',
          text: 'ہوا میں دباؤ کیوں ہوتا ہے؟',
          options: [
            { id: 'a', text: 'ہوا کا کوئی وزن نہیں ہوتا', correct: false, misconception: 'air-no-weight', feedback: 'ہوا کا وزن ہوتا ہے۔ ہوا بھرنے سے غبارہ بھاری ہوتا ہے۔' },
            { id: 'b', text: 'ہوا کا وزن ہوتا ہے اور وہ تمام سمتوں میں دباؤ ڈالتی ہے', correct: true },
            { id: 'c', text: 'ہوا صرف ٹھوس اشیا پر دباؤ ڈالتی ہے', correct: false, misconception: 'pressure-only-solids', feedback: 'ہوا تمام سمتوں میں دباؤ ڈالتی ہے، جیسے غبارہ پھلانے پر۔' },
            { id: 'd', text: 'بلندی پر جانے سے ہوا کا دباؤ بڑھتا ہے', correct: false, misconception: 'height-more-pressure', feedback: 'بلندی پر جانے سے ہوا کا دباؤ گھٹتا ہے، بڑھتا نہیں۔' },
          ],
        },
        {
          id: 'vayu-dab-q2',
          difficulty: 'medium',
          text: 'اونچے پہاڑ پر چڑھنے پر فضائی دباؤ کیسا ہوتا ہے؟',
          options: [
            { id: 'a', text: 'بڑھتا ہے', correct: false, misconception: 'height-more-pressure', feedback: 'اوپر جانے پر اوپر کی ہوا کا وزن کم ہوتا ہے، اس لیے دباؤ گھٹتا ہے۔' },
            { id: 'b', text: 'گھٹتا ہے', correct: true },
            { id: 'c', text: 'بالکل نہیں بدلتا', correct: false, misconception: 'depth-no-effect', feedback: 'ہوا کا دباؤ بلندی کے ساتھ بدلتا ہے۔ پہاڑ پر سانس لینے میں دشواری اسی سے ہوتی ہے۔' },
            { id: 'd', text: 'ہوا میں گہرائی سے دباؤ گھٹتا ہے، جیسے پانی میں', correct: false, misconception: 'deeper-less-pressure', feedback: 'ہوا میں گہرائی نہیں ہوتی۔ بلندی بڑھنے پر اس کے اوپر کی ہوا کم ہوتی ہے، اس لیے دباؤ گھٹتا ہے۔' },
          ],
        },
        {
          id: 'vayu-dab-q3',
          difficulty: 'hard',
          text: 'غبارہ ہوا سے بھرنے پر کیوں پھولتا ہے؟',
          options: [
            { id: 'a', text: 'ہوا کا کوئی دباؤ نہیں ہوتا', correct: false, misconception: 'air-no-weight', feedback: 'ہوا کا دباؤ ہوتا ہے۔ غبارے کا پھولنا اسی دباؤ کا اثر ہے۔' },
            { id: 'b', text: 'بھری ہوئی ہوا تمام سمتوں میں دباؤ ڈالتی ہے، جس سے غبارہ پھیلتا ہے', correct: true },
            { id: 'c', text: 'ہوا صرف نیچے کی جانب دباؤ ڈالتی ہے', correct: false, misconception: 'pressure-only-solids', feedback: 'ہوا تمام سمتوں میں دباؤ ڈالتی ہے، صرف نیچے نہیں۔' },
            { id: 'd', text: 'صرف بھاری چیز ہی دباؤ ڈال سکتی ہے، ہلکی ہوا نہیں', correct: false, misconception: 'heavier-more-pressure', feedback: 'ہلکی چیز بھی دباؤ ڈال سکتی ہے۔ ہوا ہلکی ہے پھر بھی غبارے کے اندر سے ہر طرف دباؤ ڈالتی ہے۔' },
          ],
        },
      ],
    },
  ],
};

export const MISCONCEPTIONS = {
  'push-is-always-force': { label: 'قوت صرف دھکا ہی ہوتی ہے' },
  'pull-not-force': { label: 'کھچاؤ قوت نہیں ہوتا' },
  'force-only-when-moving': { label: 'قوت صرف متحرک چیز پر لگتی ہے' },
  'contact-only-touch': { label: 'قوت صرف چھونے پر لگتی ہے' },
  'area-same-pressure': { label: 'دباؤ رقبے پر منحصر نہیں' },
  'pressure-only-solids': { label: 'دباؤ صرف ٹھوس میں ہوتا ہے' },
  'bigger-area-more-pressure': { label: 'بڑا رقبہ زیادہ دباؤ دیتا ہے' },
  'depth-no-effect': { label: 'گہرائی کا دباؤ پر اثر نہیں' },
  'deeper-less-pressure': { label: 'گہرائی پر دباؤ کم ہوتا ہے' },
  'air-no-weight': { label: 'ہوا کا کوئی وزن نہیں ہوتا' },
  'heavier-more-pressure': { label: 'بھاری چیز کا دباؤ ہمیشہ زیادہ' },
  'height-more-pressure': { label: 'بلندی پر ہوا کا دباؤ بڑھتا ہے' },
};
