// js/i18n.js — UI strings in Hindi (default, the original text), English and Urdu.
// The chosen language is a device-level setting stored as 'lang' in the store settings.
// Placeholders look like {name} and are filled by t(key, { name }).

import { getSettings, setSettings } from './store.js';

export const LANGS = ['hi', 'en', 'ur'];
export const LANG_CHANGE_EVENT = 'learnmate:langchange';

const DEFAULT_LANG = 'hi';
// Each language is shown in its own script; these names are never translated.
const LANG_NAMES = { hi: 'हिंदी', en: 'English', ur: 'اردو' };
// Number and date formatting locale per language. 'hi' stays 'hi-IN' (unchanged output).
const LOCALES = { hi: 'hi-IN', en: 'en-IN', ur: 'ur-PK' };
const DIRS = { hi: 'ltr', en: 'ltr', ur: 'rtl' };
// Shell elements that carry the text direction (app root and bottom nav).
const SHELL_IDS = ['app', 'bottom-nav'];

export const STRINGS = {
  // ----- app shell: nav, errors, header -----
  nav_home: { hi: 'होम', en: 'Home', ur: 'ہوم' },
  nav_learn: { hi: 'सीखें', en: 'Learn', ur: 'سیکھیں' },
  nav_ask: { hi: 'पूछें', en: 'Ask', ur: 'پوچھیں' },
  nav_progress: { hi: 'प्रगति', en: 'Progress', ur: 'پیش رفت' },
  app_error: {
    hi: 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें।',
    en: 'Something went wrong. Please try again.',
    ur: 'کچھ خرابی ہو گئی۔ براہ کرم دوبارہ کوشش کریں۔',
  },
  app_retry: { hi: 'फिर से कोशिश करें', en: 'Try again', ur: 'دوبارہ کوشش کریں' },
  data_today: { hi: 'आज ~{kb} KB डेटा', en: 'Today ~{kb} KB data', ur: 'آج ~{kb} KB ڈیٹا' },
  lang_label: { hi: 'भाषा', en: 'Language', ur: 'زبان' },

  // ----- shared -----
  profile_pick_first: { hi: 'पहले प्रोफ़ाइल चुनें', en: 'Choose a profile first', ur: 'پہلے پروفائل چنیں' },
  profile_pick_link: { hi: 'प्रोफ़ाइल चुनें', en: 'Choose a profile', ur: 'پروفائل چنیں' },
  weak_none: { hi: 'अभी कोई कमज़ोर विषय नहीं', en: 'No weak topics for now', ur: 'ابھی کوئی کمزور موضوع نہیں' },
  family_entry: {
    hi: 'परिवार के लिए: कोड से प्रगति देखें',
    en: 'For family: view progress with a code',
    ur: 'گھر والوں کے لیے: کوڈ سے پیش رفت دیکھیں',
  },
  status_mastered: { hi: 'सीखा', en: 'Learned', ur: 'سیکھ لیا' },
  status_help: { hi: 'और अभ्यास चाहिए', en: 'Needs more practice', ur: 'مزید مشق درکار ہے' },
  status_learning: { hi: 'सीख रहे हैं', en: 'Learning', ur: 'سیکھ رہے ہیں' },

  // ----- profiles -----
  profiles_title: { hi: 'प्रोफ़ाइल चुनें', en: 'Choose a profile', ur: 'پروفائل چنیں' },
  profiles_delete: { hi: 'हटाएँ', en: 'Delete', ur: 'حذف کریں' },
  profiles_confirm_delete: {
    hi: 'क्या यह प्रोफ़ाइल हटाना है?',
    en: 'Delete this profile?',
    ur: 'کیا یہ پروفائل حذف کرنی ہے؟',
  },
  profiles_delete_failed: {
    hi: 'प्रोफ़ाइल नहीं हटाई जा सकी',
    en: 'Could not delete the profile',
    ur: 'پروفائل حذف نہیں ہو سکی',
  },
  profiles_name: { hi: 'तुम्हारा नाम', en: 'Your name', ur: 'آپ کا نام' },
  profiles_start: { hi: 'शुरू करें', en: 'Start', ur: 'شروع کریں' },
  profiles_create_failed: { hi: 'प्रोफ़ाइल नहीं बन सकी', en: 'Could not create the profile', ur: 'پروفائل نہیں بن سکی' },
  profiles_limit: {
    hi: 'एक फ़ोन पर अधिकतम 4 प्रोफ़ाइल',
    en: 'Up to 4 profiles on one phone',
    ur: 'ایک فون پر زیادہ سے زیادہ 4 پروفائلیں',
  },
  avatar_lotus: { hi: 'कमल', en: 'Lotus', ur: 'کنول' },
  avatar_tiger: { hi: 'बाघ', en: 'Tiger', ur: 'شیر' },
  avatar_peacock: { hi: 'मोर', en: 'Peacock', ur: 'مور' },
  avatar_elephant: { hi: 'हाथी', en: 'Elephant', ur: 'ہاتھی' },
  avatar_sun: { hi: 'सूरज', en: 'Sun', ur: 'سورج' },
  avatar_moon: { hi: 'चाँद', en: 'Moon', ur: 'چاند' },
  avatar_star: { hi: 'तारा', en: 'Star', ur: 'ستارہ' },
  avatar_fish: { hi: 'मछली', en: 'Fish', ur: 'مچھلی' },

  // ----- progress -----
  progress_title: { hi: 'मेरी प्रगति', en: 'My progress', ur: 'میری پیش رفت' },
  progress_streak: { hi: 'लगातार दिन: {n}', en: 'Days in a row: {n}', ur: 'مسلسل دن: {n}' },
  progress_week: { hi: 'इस हफ़्ते: {n} मिनट', en: 'This week: {n} min', ur: 'اس ہفتے: {n} منٹ' },
  weak_heading: { hi: 'कमज़ोर विषय', en: 'Weak topics', ur: 'کمزور موضوعات' },
  family_heading: { hi: 'परिवार', en: 'Family', ur: 'گھر والے' },
  family_code_note: {
    hi: 'परिवार इस कोड से प्रगति देख सकता है',
    en: 'Family can view progress with this code',
    ur: 'گھر والے اس کوڈ سے پیش رفت دیکھ سکتے ہیں',
  },
  data_saver_on: { hi: 'डेटा बचत चालू है', en: 'Data saver is on', ur: 'ڈیٹا بچت آن ہے' },
  family_sync: { hi: 'परिवार के साथ सिंक करें', en: 'Sync with family', ur: 'گھر والوں کے ساتھ سنک کریں' },
  sync_done: { hi: 'सिंक हो गया', en: 'Sync complete', ur: 'سنک ہو گیا' },
  sync_later: {
    hi: 'अभी सिंक नहीं हो पाया, इंटरनेट जुड़ने पर अपने-आप होगा',
    en: 'Could not sync now. It will sync automatically when you are online.',
    ur: 'ابھی سنک نہیں ہو سکا، انٹرنیٹ جڑنے پر خود بخود ہو جائے گا۔',
  },
  data_saver: { hi: 'डेटा बचत', en: 'Data saver', ur: 'ڈیٹا بچت' },

  // ----- home -----
  home_greeting: { hi: 'नमस्ते, {name}!', en: 'Hello, {name}!', ur: 'خوش آمدید، {name}!' },
  home_stat_today: { hi: 'आज का अध्ययन', en: 'Study today', ur: 'آج کا مطالعہ' },
  home_minutes: { hi: '{n} मिनट', en: '{n} min', ur: '{n} منٹ' },
  home_stat_streak: { hi: 'लगातार दिन', en: 'Days in a row', ur: 'مسلسل دن' },
  home_days: { hi: '{n} दिन', en: '{n} days', ur: '{n} دن' },
  home_stat_weak: { hi: 'सबसे कमज़ोर विषय', en: 'Weakest topic', ur: 'سب سے کمزور موضوع' },
  home_mastery: { hi: 'कुल समझ: {pct}%', en: 'Overall understanding: {pct}%', ur: 'مجموعی سمجھ: {pct}%' },
  home_btn_learn: { hi: 'आज का पाठ सीखें', en: "Learn today's lesson", ur: 'آج کا سبق سیکھیں' },
  home_btn_practice: { hi: 'अभ्यास करें', en: 'Practise', ur: 'مشق کریں' },
  home_btn_ask: { hi: 'सवाल पूछें', en: 'Ask a question', ur: 'سوال پوچھیں' },
  home_chapter: { hi: 'अध्याय: {title}', en: 'Chapter: {title}', ur: 'باب: {title}' },
  home_base: {
    hi: 'आधार: कक्षा 8 विज्ञान पाठ्यक्रम',
    en: 'Based on: Class 8 science curriculum',
    ur: 'بنیاد: جماعت 8 سائنس نصاب',
  },

  // ----- learn -----
  learn_title: { hi: 'सीखें: बल और दाब', en: 'Learn: Force and Pressure', ur: 'سیکھیں: قوت اور دباؤ' },
  learn_cards: { hi: 'पाठ कार्ड: {n}', en: 'Lesson cards: {n}', ur: 'سبق کارڈز: {n}' },
  learn_offline_ready: { hi: ' · ऑफ़लाइन के लिए तैयार', en: ' · Ready offline', ur: ' · آف لائن کے لیے تیار' },
  learn_reshow: {
    hi: 'इस विषय में थोड़ी और मेहनत चाहिए। पहले यह पाठ फिर से देखें।',
    en: 'This topic needs a bit more work. Review this lesson first.',
    ur: 'اس موضوع پر تھوڑی اور محنت درکار ہے۔ پہلے یہ سبق دوبارہ دیکھیں۔',
  },
  learn_example: { hi: 'उदाहरण: {example}', en: 'Example: {example}', ur: 'مثال: {example}' },
  learn_listen: { hi: 'सुनें', en: 'Listen', ur: 'سنیں' },
  learn_practice_after: { hi: 'समझ गया, अभ्यास करें', en: 'Got it, practise', ur: 'سمجھ گیا، مشق کریں' },
  learn_practice: { hi: 'अभ्यास शुरू करें', en: 'Start practice', ur: 'مشق شروع کریں' },
  back_to_list: { hi: 'सूची पर वापस', en: 'Back to list', ur: 'فہرست پر واپس' },
  learn_not_found: { hi: 'यह पाठ नहीं मिला', en: 'This lesson was not found', ur: 'یہ سبق نہیں ملا' },

  // ----- practice -----
  practice_lesson_note: {
    hi: 'इस विषय में थोड़ी और मेहनत चाहिए। पहले यह पाठ पढ़ें।',
    en: 'This topic needs a bit more work. Read this lesson first.',
    ur: 'اس موضوع پر تھوڑی اور محنت درکار ہے۔ پہلے یہ سبق پڑھیں۔',
  },
  practice_read_done: {
    hi: 'पाठ पढ़ लिया, आगे बढ़ें',
    en: 'I have read it, continue',
    ur: 'سبق پڑھ لیا، آگے بڑھیں',
  },
  practice_title: { hi: 'अभ्यास: {title}', en: 'Practice: {title}', ur: 'مشق: {title}' },
  practice_mastery: { hi: 'समझ: {pct}%', en: 'Understanding: {pct}%', ur: 'سمجھ: {pct}%' },
  practice_correct: { hi: 'बिल्कुल सही! {reason}', en: 'Correct! {reason}', ur: 'بالکل درست! {reason}' },
  practice_default_reason: {
    hi: 'बहुत अच्छा, यही सही उत्तर है।',
    en: 'Well done, this is the right answer.',
    ur: 'بہت خوب، یہی درست جواب ہے۔',
  },
  practice_misconception: { hi: 'गलतफ़हमी: {label}', en: 'Misconception: {label}', ur: 'غلط فہمی: {label}' },
  practice_next: { hi: 'आगे बढ़ें', en: 'Next', ur: 'آگے بڑھیں' },
  practice_view_lesson: { hi: 'पाठ देखें', en: 'View lesson', ur: 'سبق دیکھیں' },
  practice_none: {
    hi: 'अभी कोई सवाल उपलब्ध नहीं है।',
    en: 'No questions are available right now.',
    ur: 'ابھی کوئی سوال دستیاب نہیں ہے۔',
  },

  // ----- ask -----
  ask_title: { hi: 'सवाल पूछें', en: 'Ask a question', ur: 'سوال پوچھیں' },
  ask_placeholder: { hi: 'अपना सवाल लिखें...', en: 'Type your question...', ur: 'اپنا سوال لکھیں...' },
  ask_listening: { hi: 'सुन रहा हूँ...', en: 'Listening...', ur: 'سن رہا ہوں...' },
  ask_speak: { hi: 'बोलकर पूछें', en: 'Ask by voice', ur: 'بول کر پوچھیں' },
  ask_send: { hi: 'भेजें', en: 'Send', ur: 'بھیجیں' },
  ask_add_photo: { hi: 'फ़ोटो जोड़ें', en: 'Add photo', ur: 'تصویر شامل کریں' },
  ask_photo_preparing: { hi: 'फ़ोटो तैयार हो रही है...', en: 'Preparing photo...', ur: 'تصویر تیار ہو رہی ہے...' },
  ask_photo_added: { hi: 'फ़ोटो जुड़ गई है', en: 'Photo added', ur: 'تصویر شامل ہو گئی' },
  ask_not_image: {
    hi: 'यह फ़ाइल फ़ोटो नहीं है, कृपया कोई इमेज चुनें',
    en: 'This file is not a photo. Please choose an image.',
    ur: 'یہ فائل تصویر نہیں ہے، براہ کرم کوئی تصویر چنیں۔',
  },
  ask_photo_too_large: {
    hi: 'फ़ोटो बहुत बड़ी है, कोई दूसरी फ़ोटो चुनें',
    en: 'The photo is too large. Choose another photo.',
    ur: 'تصویر بہت بڑی ہے، کوئی دوسری تصویر چنیں۔',
  },
  ask_photo_failed: {
    hi: 'फ़ोटो नहीं खोली जा सकी, कोई दूसरी फ़ोटो चुनें',
    en: 'The photo could not be opened. Choose another photo.',
    ur: 'تصویر کھولی نہیں جا سکی، کوئی دوسری تصویر چنیں۔',
  },
  ask_no_voice: {
    hi: 'इस फ़ोन पर बोलकर पूछने की सुविधा नहीं है',
    en: 'Asking by voice is not available on this phone',
    ur: 'اس فون پر بول کر پوچھنے کی سہولت نہیں ہے',
  },
  ask_voice_unheard: {
    hi: 'आवाज़ नहीं सुनी जा सकी, फिर से कोशिश करें',
    en: 'Could not hear you. Please try again.',
    ur: 'آواز نہیں سنی جا سکی، دوبارہ کوشش کریں۔',
  },
  ask_voice_start_failed: { hi: 'आवाज़ शुरू नहीं हो सकी', en: 'Could not start voice input', ur: 'آواز شروع نہیں ہو سکی' },
  ask_need_input: {
    hi: 'कृपया सवाल लिखें या फ़ोटो जोड़ें',
    en: 'Please type a question or add a photo',
    ur: 'براہ کرم سوال لکھیں یا تصویر شامل کریں',
  },
  ask_answer_heading: { hi: 'जवाब', en: 'Answer', ur: 'جواب' },
  ask_right: { hi: 'बिल्कुल सही!', en: 'Correct!', ur: 'بالکل درست!' },
  ask_wrong: { hi: 'अभी नहीं। फिर से सोचें।', en: 'Not quite. Think again.', ur: 'ابھی نہیں۔ دوبارہ سوچیں۔' },
  ask_offline_note: {
    hi: 'इंटरनेट नहीं है। आपका सवाल सहेज लिया गया है, जुड़ने पर जवाब मिल जाएगा। अभी इस विषय का पाठ देखें:',
    en: 'You are offline. Your question is saved and will be answered when you reconnect. For now, look at this topic\'s lesson:',
    ur: 'انٹرنیٹ نہیں ہے۔ آپ کا سوال محفوظ کر لیا گیا ہے، جڑنے پر جواب مل جائے گا۔ ابھی اس موضوع کا سبق دیکھیں:',
  },
  ask_photo_note: {
    hi: 'फ़ोटो सहेज लिया गया है। फ़ोटो को अभी पढ़ा या जाँचा नहीं गया है।',
    en: 'The photo is saved. It has not been read or checked yet.',
    ur: 'تصویر محفوظ ہو گئی ہے۔ تصویر ابھی پڑھی یا جانچی نہیں گئی۔',
  },
  ask_open_lesson: { hi: 'यह पाठ खोलें', en: 'Open this lesson', ur: 'یہ سبق کھولیں' },
  ask_failed: {
    hi: 'जवाब नहीं बन सका, फिर से कोशिश करें',
    en: 'Could not make an answer. Please try again.',
    ur: 'جواب نہیں بن سکا، دوبارہ کوشش کریں۔',
  },
  ask_past: { hi: 'आपके पिछले सवाल', en: 'Your earlier questions', ur: 'آپ کے پچھلے سوال' },
  ask_none: { hi: 'अभी कोई सवाल नहीं पूछा गया', en: 'No questions asked yet', ur: 'ابھی تک کوئی سوال نہیں پوچھا گیا' },
  ask_photo_only: { hi: 'केवल फ़ोटो', en: 'Photo only', ur: 'صرف تصویر' },
  ask_status_answered: { hi: 'जवाब मिला', en: 'Answered', ur: 'جواب مل گیا' },
  ask_status_photo: { hi: 'फ़ोटो सहेजी गई', en: 'Photo saved', ur: 'تصویر محفوظ' },
  ask_status_queued: { hi: 'भेजने की प्रतीक्षा में', en: 'Waiting to send', ur: 'بھیجے جانے کے انتظار میں' },
  ask_see_answer: { hi: 'जवाब देखें', en: 'See answer', ur: 'جواب دیکھیں' },
  ask_offline_wait: {
    hi: 'इंटरनेट नहीं है, जुड़ने पर जवाब मिलेगा',
    en: 'No internet. You will get an answer when you reconnect.',
    ur: 'انٹرنیٹ نہیں ہے، جڑنے پر جواب ملے گا۔',
  },
  ask_photo_alt: { hi: 'फ़ोटो', en: 'Photo', ur: 'تصویر' },

  // ----- family -----
  family_title: { hi: 'परिवार के लिए', en: 'For family', ur: 'گھر والوں کے لیے' },
  family_code_placeholder: { hi: 'छह अक्षर का कोड', en: 'Six-letter code', ur: 'چھ حروف کا کوڈ' },
  family_view: { hi: 'देखें', en: 'View', ur: 'دیکھیں' },
  family_read_only: { hi: 'यह केवल पढ़ने के लिए है।', en: 'This is for viewing only.', ur: 'یہ صرف پڑھنے کے لیے ہے۔' },
  family_loading: { hi: 'लोड हो रहा है...', en: 'Loading...', ur: 'لوڈ ہو رہا ہے...' },
  family_not_found: { hi: 'यह कोड नहीं मिला', en: 'This code was not found', ur: 'یہ کوڈ نہیں ملا' },
  family_error: {
    hi: 'कुछ गड़बड़ हुई, बाद में कोशिश करें',
    en: 'Something went wrong. Please try later.',
    ur: 'کچھ خرابی ہوئی، بعد میں کوشش کریں۔',
  },
  family_bad_code: { hi: 'कोड सही नहीं है', en: 'The code is not valid', ur: 'کوڈ درست نہیں ہے' },
  sum_minutes: {
    hi: 'इस हफ़्ते के अध्ययन मिनट: {n}',
    en: 'Study minutes this week: {n}',
    ur: 'اس ہفتے کے مطالعے کے منٹ: {n}',
  },
  sum_mastered: { hi: 'समझे गए विषय: {n}', en: 'Topics understood: {n}', ur: 'سمجھے گئے موضوعات: {n}' },
  sum_help: { hi: 'मदद चाहिए: {list}', en: 'Needs help: {list}', ur: 'مدد درکار: {list}' },
  sum_help_none: { hi: 'मदद चाहिए: कोई नहीं', en: 'Needs help: none', ur: 'مدد درکار: کوئی نہیں' },
  sum_updated: { hi: 'आख़िरी अपडेट: {date}', en: 'Last update: {date}', ur: 'آخری اپڈیٹ: {date}' },

  // ----- about -----
  about_title: { hi: 'LearnMate के बारे में', en: 'About LearnMate', ur: 'LearnMate کے بارے میں' },
  about_free_title: { hi: 'मुफ़्त पढ़ाई', en: 'Free for students', ur: 'طلبہ کے لیے مفت پڑھائی' },
  about_free_body: {
    hi: 'LearnMate छात्रों के लिए मुफ़्त है: कोई लॉगिन नहीं, कोई विज्ञापन नहीं, कोई व्यक्तिगत डेटा नहीं बेचा जाता। छात्र कुछ नहीं देते।',
    en: 'LearnMate is free for students: no login, no ads, and no personal data is sold. Students pay nothing.',
    ur: 'LearnMate طلبہ کے لیے مفت ہے: کوئی لاگ اِن نہیں، کوئی اشتہار نہیں، اور کوئی ذاتی ڈیٹا فروخت نہیں کیا جاتا۔ طلبہ کو کچھ نہیں دینا پڑتا۔',
  },
  about_payer_title: { hi: 'कौन पैसे देगा?', en: 'Who will pay?', ur: 'پیسے کون دے گا؟' },
  about_payer_body: {
    hi: 'एनजीओ, कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) की शिक्षा योजनाएँ और ज़िला स्कूल कार्यक्रम प्रति छात्र प्रति वर्ष के हिसाब से भुगतान कर सकते हैं।',
    en: 'NGOs, corporate social responsibility (CSR) education schemes and district school programmes can pay on a per-student, per-year basis.',
    ur: 'این جی اوز، کارپوریٹ سماجی ذمہ داری (CSR) کی تعلیمی اسکیمیں اور ضلعی اسکول پروگرام فی طالب علم، فی سال کی بنیاد پر ادائیگی کر سکتے ہیں۔',
  },
  about_payer_note: {
    hi: 'यह एक अनुमान है; वास्तविक कीमत बातचीत से तय होगी।',
    en: 'This is an estimate; the actual price will be agreed in discussion.',
    ur: 'یہ ایک اندازہ ہے؛ اصل قیمت بات چیت سے طے ہوگی۔',
  },
  about_costs_title: { hi: 'प्रति छात्र लागत', en: 'Cost per student', ur: 'فی طالب علم لاگت' },
  about_cost_caption: {
    hi: 'सभी संख्याएँ अनुमान हैं (धारणाएँ)',
    en: 'All figures are estimates (assumptions)',
    ur: 'تمام اعداد اندازے ہیں (مفروضے)',
  },
  about_cost_item: { hi: 'मद', en: 'Item', ur: 'مد' },
  about_cost_amount: {
    hi: 'राशि (प्रति छात्र प्रति वर्ष)',
    en: 'Amount (per student per year)',
    ur: 'رقم (فی طالب علم فی سال)',
  },
  about_cost_total: { hi: 'कुल (अनुमान)', en: 'Total (estimate)', ur: 'کل (اندازہ)' },
  cost_content: {
    hi: 'सामग्री और पाठ्यक्रम समीक्षा (अनुमान)',
    en: 'Content and curriculum review (estimate)',
    ur: 'مواد اور نصاب کا جائزہ (اندازہ)',
  },
  cost_hosting: {
    hi: 'उपकरण और होस्टिंग, साझा सर्वर और सिंक (अनुमान)',
    en: 'Tools and hosting, shared server and sync (estimate)',
    ur: 'آلات اور ہوسٹنگ، مشترکہ سرور اور سنک (اندازہ)',
  },
  cost_training: {
    hi: 'शिक्षक / स्वयंसेवक अभिमुखीकरण (अनुमान)',
    en: 'Teacher / volunteer orientation (estimate)',
    ur: 'اساتذہ / رضاکاروں کی تربیتی نشست (اندازہ)',
  },
  cost_support: { hi: 'डेटा और सहायता (अनुमान)', en: 'Data and support (estimate)', ur: 'ڈیٹا اور معاونت (اندازہ)' },
  cost_overhead: { hi: 'ओवरहेड (अनुमान)', en: 'Overheads (estimate)', ur: 'اوور ہیڈ (اندازہ)' },
  about_value_title: { hi: 'मूल्य तर्क', en: 'Value reasoning', ur: 'قدر کی وجہ' },
  about_value_body: {
    hi: '{price} प्रति छात्र प्रति वर्ष मानकर, {learners} छात्रों के लिए लगभग {total} प्रति वर्ष (अनुमान)।',
    en: 'Assuming {price} per student per year, about {total} per year for {learners} students (estimate).',
    ur: 'فی طالب علم فی سال {price} فرض کرتے ہوئے، {learners} طلبہ کے لیے تقریباً {total} فی سال (اندازہ)۔',
  },
  about_data_title: { hi: 'डेटा', en: 'Data', ur: 'ڈیٹا' },
  about_data_body: {
    hi: 'डेटा: प्रोफ़ाइल और प्रगति केवल इसी फ़ोन पर रहती है; सिंक में केवल सप्ताह के मिनट, महारत की संख्या और कमज़ोर विषय भेजे जाते हैं।',
    en: 'Data: profiles and progress stay only on this phone; sync sends only weekly minutes, the number of topics mastered and weak topics.',
    ur: 'ڈیٹا: پروفائلیں اور پیش رفت صرف اسی فون پر رہتی ہیں؛ سنک میں صرف ہفتے کے منٹ، سیکھے گئے موضوعات کی تعداد اور کمزور موضوعات بھیجے جاتے ہیں۔',
  },
};

// Returns the saved language, or 'hi' when none is saved or the value is unknown.
export function getLang() {
  const code = getSettings().lang;
  return LANGS.includes(code) ? code : DEFAULT_LANG;
}

// Locale used for number and date formatting in the current language.
export function locale() {
  return LOCALES[getLang()];
}

export function speechLang(code) {
  const c = code ?? getLang();
  return { hi: 'hi-IN', en: 'en-IN', ur: 'ur-PK' }[c] || 'hi-IN';
}

// Text for a key in the current language, then Hindi, then the key itself.
// Placeholders {name} are replaced from vars when given.
export function t(key, vars) {
  const entry = STRINGS[key];
  if (!entry) return key;
  const text = entry[getLang()] ?? entry[DEFAULT_LANG] ?? key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match,
  );
}

// Makes the document language and the shell text direction match the saved language.
export function applyLang() {
  const lang = getLang();
  document.documentElement.lang = lang;
  for (const id of SHELL_IDS) {
    const el = document.getElementById(id);
    if (el) el.setAttribute('dir', DIRS[lang]);
  }
}

// Saves the language and re-renders the current screen (app.js listens for the event).
// Returns false, changing nothing, when the code is not a supported language.
export function setLang(code) {
  if (!LANGS.includes(code)) return false;
  setSettings({ lang: code });
  applyLang();
  window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
  return true;
}

// Three buttons, each labelled in its own script, with the active language marked.
export function langSelector() {
  const wrap = document.createElement('div');
  wrap.className = 'lang-selector';
  wrap.setAttribute('role', 'group');
  wrap.setAttribute('aria-label', t('lang_label'));
  const current = getLang();
  for (const code of LANGS) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lang-option';
    btn.lang = code;
    btn.textContent = LANG_NAMES[code];
    const on = code === current;
    btn.classList.toggle('active', on);
    btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    btn.addEventListener('click', () => setLang(code));
    wrap.appendChild(btn);
  }
  return wrap;
}
