// js/i18n.js — UI strings in English (default) and Hindi.
// Placeholders look like {name} and are filled by t(key, { name }).
import { getLang } from './lang.js';

export const STRINGS = {
  // ----- app shell: nav, errors, header -----
  app_title: { en: 'LearnMate — Class 8 Science Tutor', hi: 'LearnMate — कक्षा 8 विज्ञान ट्यूटर' },
  lang_switch_label: { en: 'हिंदी', hi: 'English' },
  nav_home: { en: 'Home', hi: 'होम' },
  nav_learn: { en: 'Learn', hi: 'सीखें' },
  nav_practice: { en: 'Practice', hi: 'अभ्यास' },
  nav_ask: { en: 'Ask', hi: 'पूछें' },
  nav_progress: { en: 'Progress', hi: 'प्रगति' },
  app_error: { en: 'Something went wrong. Please try again.', hi: 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें।' },
  app_retry: { en: 'Try again', hi: 'फिर से कोशिश करें' },
  data_today: { en: 'Today ~{kb} KB data', hi: 'आज ~{kb} KB डेटा' },
  data_today_zero: { en: 'Today 0 KB data', hi: 'आज 0 KB डेटा' },

  // ----- shared -----
  profile_pick_first: { en: 'Pick a profile first', hi: 'पहले प्रोफ़ाइल चुनें' },
  profile_pick_link: { en: 'Choose profile', hi: 'प्रोफ़ाइल चुनें' },
  weak_none: { en: 'No weak topics yet', hi: 'अभी कोई कमज़ोर विषय नहीं' },
  family_entry: { en: 'For family: see progress with a code', hi: 'परिवार के लिए: कोड से प्रगति देखें' },
  status_mastered: { en: 'Learned', hi: 'सीखा' },
  status_help: { en: 'Needs more practice', hi: 'और अभ्यास चाहिए' },
  status_learning: { en: 'Learning', hi: 'सीख रहे हैं' },

  // ----- profiles -----
  profiles_title: { en: 'Choose a profile', hi: 'प्रोफ़ाइल चुनें' },
  profiles_photo_add: { en: 'Add your photo', hi: 'अपनी फ़ोटो लगाएँ' },
  profiles_photo_change: { en: 'Change photo', hi: 'फ़ोटो बदलें' },
  profiles_photo_note: { en: 'The photo stays only on this phone. It is never sent anywhere.', hi: 'फ़ोटो सिर्फ़ इसी फ़ोन पर रहेगी, कहीं नहीं भेजी जाएगी।' },
  profiles_photo_failed: { en: 'The photo could not be added. Try again.', hi: 'फ़ोटो नहीं लग पाई, फिर से कोशिश करें' },
  profiles_delete: { en: 'Delete', hi: 'हटाएँ' },
  profiles_confirm_delete: { en: 'Delete this profile?', hi: 'क्या यह प्रोफ़ाइल हटाना है?' },
  profiles_delete_failed: { en: 'The profile could not be deleted', hi: 'प्रोफ़ाइल नहीं हटाई जा सकी' },
  profiles_name: { en: 'Your name', hi: 'तुम्हारा नाम' },
  profiles_start: { en: 'Start', hi: 'शुरू करें' },
  profiles_create_failed: { en: 'The profile could not be created', hi: 'प्रोफ़ाइल नहीं बन सकी' },
  profiles_limit: { en: 'At most 4 profiles on one phone', hi: 'एक फ़ोन पर अधिकतम 4 प्रोफ़ाइल' },
  avatar_lotus: { en: 'Lotus', hi: 'कमल' },
  avatar_tiger: { en: 'Tiger', hi: 'बाघ' },
  avatar_peacock: { en: 'Peacock', hi: 'मोर' },
  avatar_elephant: { en: 'Elephant', hi: 'हाथी' },
  avatar_sun: { en: 'Sun', hi: 'सूरज' },
  avatar_moon: { en: 'Moon', hi: 'चाँद' },
  avatar_star: { en: 'Star', hi: 'तारा' },
  avatar_fish: { en: 'Fish', hi: 'मछली' },

  // ----- progress -----
  progress_title: { en: 'My progress', hi: 'मेरी प्रगति' },
  progress_streak: { en: 'Day streak: {n}', hi: 'लगातार दिन: {n}' },
  progress_week: { en: 'This week: {n} minutes', hi: 'इस हफ़्ते: {n} मिनट' },
  progress_week_one: { en: 'This week: 1 minute', hi: 'इस हफ़्ते: 1 मिनट' },
  weak_heading: { en: 'Weak topics', hi: 'कमज़ोर विषय' },
  strong_heading: { en: 'Strong topics', hi: 'मज़बूत विषय' },
  strong_none: { en: 'No topic is fully mastered yet. Keep practising!', hi: 'अभी कोई विषय पूरी तरह पक्का नहीं है। अभ्यास जारी रखो!' },
  status_offline: { en: 'Offline', hi: 'ऑफ़लाइन' },
  family_intro: { en: "Enter the learner's 6-letter family code to see a read-only weekly summary: study minutes, topics mastered and topics that need practice. The learner's questions are never shown, only topic names.", hi: 'सीखने वाले का 6 अक्षरों वाला परिवार कोड डालें, हफ़्ते का सार दिखेगा: पढ़ाई के मिनट, पक्के विषय और अभ्यास वाले विषय। सवाल कभी नहीं दिखते, सिर्फ़ विषयों के नाम दिखते हैं।' },
  family_heading: { en: 'Family', hi: 'परिवार' },
  family_code_note: { en: 'Your family can see progress with this code', hi: 'परिवार इस कोड से प्रगति देख सकता है' },
  data_saver_on: { en: 'Data saver is on', hi: 'डेटा बचत चालू है' },
  family_sync: { en: 'Sync with family', hi: 'परिवार के साथ सिंक करें' },
  sync_done: { en: 'Synced', hi: 'सिंक हो गया' },
  sync_later: { en: 'Could not sync now. It will happen on its own when the internet connects.', hi: 'अभी सिंक नहीं हो पाया, इंटरनेट जुड़ने पर अपने-आप होगा' },
  sync_saved_local: { en: 'Saved on this phone. Family can view it on this phone with the code.', hi: 'इस फ़ोन पर सहेजा गया — परिवार इसी फ़ोन पर कोड से देख सकता है' },
  profiles_intro: { en: 'Class 8 Science — no tutor needed, works on low internet.', hi: 'कक्षा 8 विज्ञान — हिंदी में, बिना ट्यूटर के, कम इंटरनेट पर।' },
  ask_scope: { en: 'LearnMate answers from all chapters of Class 8 Science.', hi: 'LearnMate कक्षा 8 विज्ञान के सभी अध्यायों से जवाब देता है।' },
  data_saver: { en: 'Data saver', hi: 'डेटा बचत' },

  // ----- home -----
  home_greeting: { en: 'Hello, {name}!', hi: 'नमस्ते, {name}!' },
  home_stat_today: { en: "Today's study", hi: 'आज का अध्ययन' },
  home_minutes: { en: '{n} min', hi: '{n} मिनट' },
  home_stat_streak: { en: 'Day streak', hi: 'लगातार दिन' },
  home_days: { en: '{n} days', hi: '{n} दिन' },
  home_stat_weak: { en: 'Weakest topic', hi: 'सबसे कमज़ोर विषय' },
  home_mastery: { en: 'Overall understanding: {pct}%', hi: 'कुल समझ: {pct}%' },
  home_btn_learn: { en: "Learn today's lesson", hi: 'आज का पाठ सीखें' },
  home_btn_practice: { en: 'Practice', hi: 'अभ्यास करें' },
  home_btn_ask: { en: 'Ask a question', hi: 'सवाल पूछें' },
  home_chapter: { en: 'Subject: {title} (all 15 chapters)', hi: 'विषय: {title} (सभी 15 अध्याय)' },
  home_base: { en: 'Based on: NCERT Class 8 Science', hi: 'आधार: NCERT कक्षा 8 विज्ञान' },

  // ----- learn -----
  learn_title: { en: 'Learn: Class 8 Science', hi: 'सीखें: कक्षा 8 विज्ञान' },
  learn_cards: { en: 'Lesson cards: {n}', hi: 'पाठ कार्ड: {n}' },
  learn_offline_ready: { en: ' · ready for offline', hi: ' · ऑफ़लाइन के लिए तैयार' },
  learn_example: { en: 'Example: {example}', hi: 'उदाहरण: {example}' },
  learn_listen: { en: 'Listen', hi: 'सुनें' },
  learn_practice_after: { en: 'Got it, practice now', hi: 'समझ गया, अभ्यास करें' },
  learn_practice: { en: 'Start practice', hi: 'अभ्यास शुरू करें' },
  back_to_list: { en: 'Back to list', hi: 'सूची पर वापस' },
  learn_not_found: { en: 'This lesson was not found', hi: 'यह पाठ नहीं मिला' },

  // ----- practice -----
  practice_lesson_note: { en: 'This topic needs a little more work. Read this lesson first.', hi: 'इस विषय में थोड़ी और मेहनत चाहिए। पहले यह पाठ पढ़ें।' },
  practice_read_done: { en: 'Lesson read, continue', hi: 'पाठ पढ़ लिया, आगे बढ़ें' },
  practice_title: { en: 'Practice: {title}', hi: 'अभ्यास: {title}' },
  practice_mastery: { en: '{concept} understanding: {pct}%', hi: '{concept} की समझ: {pct}%' },
  practice_correct: { en: 'Exactly right! {reason}', hi: 'बिल्कुल सही! {reason}' },
  practice_default_reason: { en: 'Very good, that is the right answer.', hi: 'बहुत अच्छा, यही सही उत्तर है।' },
  practice_misconception: { en: 'Misconception: {label}', hi: 'गलतफ़हमी: {label}' },
  practice_next: { en: 'Next', hi: 'आगे बढ़ें' },
  practice_view_lesson: { en: 'View lesson', hi: 'पाठ देखें' },
  practice_none: { en: 'No questions are available right now.', hi: 'अभी कोई सवाल उपलब्ध नहीं है।' },

  // ----- ask -----
  ask_title: { en: 'Ask a question', hi: 'सवाल पूछें' },
  ask_placeholder: { en: 'Write your question...', hi: 'अपना सवाल लिखें...' },
  ask_listening: { en: 'Listening...', hi: 'सुन रहा हूँ...' },
  ask_speak: { en: 'Ask by voice', hi: 'बोलकर पूछें' },
  ask_send: { en: 'Send', hi: 'भेजें' },
  ask_add_photo: { en: 'Add a photo', hi: 'फ़ोटो जोड़ें' },
  ask_photo_preparing: { en: 'Preparing the photo...', hi: 'फ़ोटो तैयार हो रही है...' },
  ask_photo_added: { en: 'Photo added', hi: 'फ़ोटो जुड़ गई है' },
  ask_not_image: { en: 'This file is not a photo. Please choose an image.', hi: 'यह फ़ाइल फ़ोटो नहीं है, कृपया कोई इमेज चुनें' },
  ask_photo_too_large: { en: 'The photo is too large. Choose another photo.', hi: 'फ़ोटो बहुत बड़ी है, कोई दूसरी फ़ोटो चुनें' },
  ask_photo_failed: { en: 'The photo could not be opened. Choose another photo.', hi: 'फ़ोटो नहीं खोली जा सकी, कोई दूसरी फ़ोटो चुनें' },
  ask_no_voice: { en: 'Voice questions are not available on this phone', hi: 'इस फ़ोन पर बोलकर पूछने की सुविधा नहीं है' },
  ask_voice_unheard: { en: 'Your voice could not be heard. Try again.', hi: 'आवाज़ नहीं सुनी जा सकी, फिर से कोशिश करें' },
  ask_voice_start_failed: { en: 'Voice could not be started', hi: 'आवाज़ शुरू नहीं हो सकी' },
  ask_need_input: { en: 'Please write a question or add a photo', hi: 'कृपया सवाल लिखें या फ़ोटो जोड़ें' },
  ask_answer_heading: { en: 'Answer', hi: 'जवाब' },
  ask_right: { en: 'Exactly right!', hi: 'बिल्कुल सही!' },
  ask_wrong: { en: 'Not yet. Think again.', hi: 'अभी नहीं। फिर से सोचें।' },
  ask_offline_note: {
    en: 'There is no internet, but the answer is below. Progress will sync when you connect.',
    hi: 'इंटरनेट नहीं है, फिर भी जवाब नीचे है — प्रगति जुड़ने पर सिंक होगी।',
  },
  ask_photo_note: { en: 'The photo has been saved. It has not been read or checked yet.', hi: 'फ़ोटो सहेज लिया गया है। फ़ोटो को अभी पढ़ा या जाँचा नहीं गया है।' },
  ask_open_lesson: { en: 'Open this lesson', hi: 'यह पाठ खोलें' },
  ask_failed: { en: 'The answer could not be made. Try again.', hi: 'जवाब नहीं बन सका, फिर से कोशिश करें' },
  ask_past: { en: 'Your earlier questions', hi: 'आपके पिछले सवाल' },
  ask_none: { en: 'No questions asked yet', hi: 'अभी कोई सवाल नहीं पूछा गया' },
  ask_photo_only: { en: 'Photo only', hi: 'केवल फ़ोटो' },
  ask_status_answered: { en: 'Answered', hi: 'जवाब मिला' },
  ask_status_photo: { en: 'Photo saved', hi: 'फ़ोटो सहेजी गई' },
  ask_status_queued: { en: 'Waiting to send', hi: 'भेजने की प्रतीक्षा में' },
  ask_see_answer: { en: 'See answer', hi: 'जवाब देखें' },
  ask_photo_alt: { en: 'Photo', hi: 'फ़ोटो' },

  // ----- family -----
  family_title: { en: 'For family', hi: 'परिवार के लिए' },
  family_code_placeholder: { en: 'Six-letter code', hi: 'छह अक्षर का कोड' },
  family_view: { en: 'View', hi: 'देखें' },
  family_read_only: { en: 'This is read-only.', hi: 'यह केवल पढ़ने के लिए है।' },
  family_loading: { en: 'Loading...', hi: 'लोड हो रहा है...' },
  family_not_found: { en: 'This code was not found', hi: 'यह कोड नहीं मिला' },
  family_error: { en: 'Something went wrong. Try later.', hi: 'कुछ गड़बड़ हुई, बाद में कोशिश करें' },
  family_bad_code: { en: 'The code is not correct', hi: 'कोड सही नहीं है' },
  sum_minutes: { en: "This week's study minutes: {n}", hi: 'इस हफ़्ते के अध्ययन मिनट: {n}' },
  sum_mastered: { en: 'Topics understood: {n}', hi: 'समझे गए विषय: {n}' },
  sum_help: { en: 'Needs help: {list}', hi: 'मदद चाहिए: {list}' },
  sum_help_none: { en: 'Needs help: none', hi: 'मदद चाहिए: कोई नहीं' },
  sum_updated: { en: 'Last updated: {date}', hi: 'आख़िरी अपडेट: {date}' },

  // ----- about -----
  about_title: { en: 'About LearnMate', hi: 'LearnMate के बारे में' },
  about_free_title: { en: 'Free learning', hi: 'मुफ़्त पढ़ाई' },
  about_free_body: {
    en: 'LearnMate is free for students: no login, no ads, and no personal data is ever sold. Students pay nothing.',
    hi: 'LearnMate छात्रों के लिए मुफ़्त है: कोई लॉगिन नहीं, कोई विज्ञापन नहीं, कोई व्यक्तिगत डेटा नहीं बेचा जाता। छात्र कुछ नहीं देते।',
  },
  about_payer_title: { en: 'Who pays?', hi: 'कौन पैसे देगा?' },
  about_payer_body: {
    en: 'NGOs, corporate social responsibility (CSR) education programmes and district school programmes can pay per student per year.',
    hi: 'एनजीओ, कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) की शिक्षा योजनाएँ और ज़िला स्कूल कार्यक्रम प्रति छात्र प्रति वर्ष के हिसाब से भुगतान कर सकते हैं।',
  },
  about_payer_note: { en: 'This is an estimate; the real price will be set by discussion.', hi: 'यह एक अनुमान है; वास्तविक कीमत बातचीत से तय होगी।' },
  about_costs_title: { en: 'Cost per student', hi: 'प्रति छात्र लागत' },
  about_cost_caption: { en: 'All numbers are estimates (assumptions)', hi: 'सभी संख्याएँ अनुमान हैं (धारणाएँ)' },
  about_cost_item: { en: 'Item', hi: 'मद' },
  about_cost_amount: { en: 'Amount (per student per year)', hi: 'राशि (प्रति छात्र प्रति वर्ष)' },
  about_cost_total: { en: 'Total (estimate)', hi: 'कुल (अनुमान)' },
  cost_content: { en: 'Content and syllabus review (estimate)', hi: 'सामग्री और पाठ्यक्रम समीक्षा (अनुमान)' },
  cost_hosting: { en: 'Devices and hosting, shared server and sync (estimate)', hi: 'उपकरण और होस्टिंग, साझा सर्वर और सिंक (अनुमान)' },
  cost_training: { en: 'Teacher / volunteer orientation (estimate)', hi: 'शिक्षक / स्वयंसेवक अभिमुखीकरण (अनुमान)' },
  cost_support: { en: 'Data and support (estimate)', hi: 'डेटा और सहायता (अनुमान)' },
  cost_overhead: { en: 'Overhead (estimate)', hi: 'ओवरहेड (अनुमान)' },
  about_value_title: { en: 'Value argument', hi: 'मूल्य तर्क' },
  about_value_body: {
    en: 'At {price} per student per year, about {total} per year for {learners} students (estimate).',
    hi: '{price} प्रति छात्र प्रति वर्ष मानकर, {learners} छात्रों के लिए लगभग {total} प्रति वर्ष (अनुमान)।',
  },
  about_data_title: { en: 'Data', hi: 'डेटा' },
  footer_line: { en: 'LearnMate · Class 8 Science · Based on NCERT · Free', hi: 'LearnMate · कक्षा 8 विज्ञान · NCERT पर आधारित · मुफ़्त' },
  about_data_body: {
    en: 'Profiles and progress stay only on this phone; sync sends only the week\'s minutes, the number of mastered topics and weak topics.',
    hi: 'प्रोफ़ाइल और प्रगति केवल इसी फ़ोन पर रहती है; सिंक में केवल सप्ताह के मिनट, महारत की संख्या और कमज़ोर विषय भेजे जाते हैं।',
  },
};

// Speech recognition / synthesis language follows the chosen language.
export function speechLang() {
  return getLang() === 'hi' ? 'hi-IN' : 'en-IN';
}

// Text for a key in the current language, or the key itself when unknown.
// Placeholders {name} are replaced from vars when given.
export function t(key, vars) {
  const entry = STRINGS[key];
  if (!entry) return key;
  const text = entry[getLang()] ?? entry.en ?? entry.hi ?? key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match,
  );
}
