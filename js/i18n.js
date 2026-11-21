// js/i18n.js — UI strings in Hindi (the app's only language).
// Placeholders look like {name} and are filled by t(key, { name }).

export const STRINGS = {
  // ----- app shell: nav, errors, header -----
  nav_home: { hi: 'होम' },
  nav_learn: { hi: 'सीखें' },
  nav_ask: { hi: 'पूछें' },
  nav_progress: { hi: 'प्रगति' },
  app_error: { hi: 'कुछ गड़बड़ हो गई। कृपया फिर से कोशिश करें।' },
  app_retry: { hi: 'फिर से कोशिश करें' },
  data_today: { hi: 'आज ~{kb} KB डेटा' },
  data_today_zero: { hi: 'आज 0 KB डेटा' },

  // ----- shared -----
  profile_pick_first: { hi: 'पहले प्रोफ़ाइल चुनें' },
  profile_pick_link: { hi: 'प्रोफ़ाइल चुनें' },
  weak_none: { hi: 'अभी कोई कमज़ोर विषय नहीं' },
  family_entry: { hi: 'परिवार के लिए: कोड से प्रगति देखें' },
  status_mastered: { hi: 'सीखा' },
  status_help: { hi: 'और अभ्यास चाहिए' },
  status_learning: { hi: 'सीख रहे हैं' },

  // ----- profiles -----
  profiles_title: { hi: 'प्रोफ़ाइल चुनें' },
  profiles_delete: { hi: 'हटाएँ' },
  profiles_confirm_delete: { hi: 'क्या यह प्रोफ़ाइल हटाना है?' },
  profiles_delete_failed: { hi: 'प्रोफ़ाइल नहीं हटाई जा सकी' },
  profiles_name: { hi: 'तुम्हारा नाम' },
  profiles_start: { hi: 'शुरू करें' },
  profiles_create_failed: { hi: 'प्रोफ़ाइल नहीं बन सकी' },
  profiles_limit: { hi: 'एक फ़ोन पर अधिकतम 4 प्रोफ़ाइल' },
  avatar_lotus: { hi: 'कमल' },
  avatar_tiger: { hi: 'बाघ' },
  avatar_peacock: { hi: 'मोर' },
  avatar_elephant: { hi: 'हाथी' },
  avatar_sun: { hi: 'सूरज' },
  avatar_moon: { hi: 'चाँद' },
  avatar_star: { hi: 'तारा' },
  avatar_fish: { hi: 'मछली' },

  // ----- progress -----
  progress_title: { hi: 'मेरी प्रगति' },
  progress_streak: { hi: 'लगातार दिन: {n}' },
  progress_week: { hi: 'इस हफ़्ते: {n} मिनट' },
  weak_heading: { hi: 'कमज़ोर विषय' },
  family_heading: { hi: 'परिवार' },
  family_code_note: { hi: 'परिवार इस कोड से प्रगति देख सकता है' },
  data_saver_on: { hi: 'डेटा बचत चालू है' },
  family_sync: { hi: 'परिवार के साथ सिंक करें' },
  sync_done: { hi: 'सिंक हो गया' },
  sync_later: { hi: 'अभी सिंक नहीं हो पाया, इंटरनेट जुड़ने पर अपने-आप होगा' },
  sync_saved_local: { hi: 'इस फ़ोन पर सहेजा गया — परिवार इसी फ़ोन पर कोड से देख सकता है' },
  profiles_intro: { hi: 'कक्षा 8 विज्ञान — हिंदी में, बिना ट्यूटर के, कम इंटरनेट पर।' },
  ask_scope: { hi: 'LearnMate कक्षा 8 विज्ञान के सभी अध्यायों से जवाब देता है।' },
  data_saver: { hi: 'डेटा बचत' },

  // ----- home -----
  home_greeting: { hi: 'नमस्ते, {name}!' },
  home_stat_today: { hi: 'आज का अध्ययन' },
  home_minutes: { hi: '{n} मिनट' },
  home_stat_streak: { hi: 'लगातार दिन' },
  home_days: { hi: '{n} दिन' },
  home_stat_weak: { hi: 'सबसे कमज़ोर विषय' },
  home_mastery: { hi: 'कुल समझ: {pct}%' },
  home_btn_learn: { hi: 'आज का पाठ सीखें' },
  home_btn_practice: { hi: 'अभ्यास करें' },
  home_btn_ask: { hi: 'सवाल पूछें' },
  home_chapter: { hi: 'विषय: {title} (सभी 15 अध्याय)' },
  home_base: { hi: 'आधार: NCERT कक्षा 8 विज्ञान' },

  // ----- learn -----
  learn_title: { hi: 'सीखें: कक्षा 8 विज्ञान' },
  learn_cards: { hi: 'पाठ कार्ड: {n}' },
  learn_offline_ready: { hi: ' · ऑफ़लाइन के लिए तैयार' },
  learn_example: { hi: 'उदाहरण: {example}' },
  learn_listen: { hi: 'सुनें' },
  learn_practice_after: { hi: 'समझ गया, अभ्यास करें' },
  learn_practice: { hi: 'अभ्यास शुरू करें' },
  back_to_list: { hi: 'सूची पर वापस' },
  learn_not_found: { hi: 'यह पाठ नहीं मिला' },

  // ----- practice -----
  practice_lesson_note: { hi: 'इस विषय में थोड़ी और मेहनत चाहिए। पहले यह पाठ पढ़ें।' },
  practice_read_done: { hi: 'पाठ पढ़ लिया, आगे बढ़ें' },
  practice_title: { hi: 'अभ्यास: {title}' },
  practice_mastery: { hi: 'समझ: {pct}%' },
  practice_correct: { hi: 'बिल्कुल सही! {reason}' },
  practice_default_reason: { hi: 'बहुत अच्छा, यही सही उत्तर है।' },
  practice_misconception: { hi: 'गलतफ़हमी: {label}' },
  practice_next: { hi: 'आगे बढ़ें' },
  practice_view_lesson: { hi: 'पाठ देखें' },
  practice_none: { hi: 'अभी कोई सवाल उपलब्ध नहीं है।' },

  // ----- ask -----
  ask_title: { hi: 'सवाल पूछें' },
  ask_placeholder: { hi: 'अपना सवाल लिखें...' },
  ask_listening: { hi: 'सुन रहा हूँ...' },
  ask_speak: { hi: 'बोलकर पूछें' },
  ask_send: { hi: 'भेजें' },
  ask_add_photo: { hi: 'फ़ोटो जोड़ें' },
  ask_photo_preparing: { hi: 'फ़ोटो तैयार हो रही है...' },
  ask_photo_added: { hi: 'फ़ोटो जुड़ गई है' },
  ask_not_image: { hi: 'यह फ़ाइल फ़ोटो नहीं है, कृपया कोई इमेज चुनें' },
  ask_photo_too_large: { hi: 'फ़ोटो बहुत बड़ी है, कोई दूसरी फ़ोटो चुनें' },
  ask_photo_failed: { hi: 'फ़ोटो नहीं खोली जा सकी, कोई दूसरी फ़ोटो चुनें' },
  ask_no_voice: { hi: 'इस फ़ोन पर बोलकर पूछने की सुविधा नहीं है' },
  ask_voice_unheard: { hi: 'आवाज़ नहीं सुनी जा सकी, फिर से कोशिश करें' },
  ask_voice_start_failed: { hi: 'आवाज़ शुरू नहीं हो सकी' },
  ask_need_input: { hi: 'कृपया सवाल लिखें या फ़ोटो जोड़ें' },
  ask_answer_heading: { hi: 'जवाब' },
  ask_right: { hi: 'बिल्कुल सही!' },
  ask_wrong: { hi: 'अभी नहीं। फिर से सोचें।' },
  ask_offline_note: {
    hi: 'इंटरनेट नहीं है, फिर भी जवाब नीचे है — प्रगति जुड़ने पर सिंक होगी।',
  },
  ask_photo_note: { hi: 'फ़ोटो सहेज लिया गया है। फ़ोटो को अभी पढ़ा या जाँचा नहीं गया है।' },
  ask_open_lesson: { hi: 'यह पाठ खोलें' },
  ask_failed: { hi: 'जवाब नहीं बन सका, फिर से कोशिश करें' },
  ask_past: { hi: 'आपके पिछले सवाल' },
  ask_none: { hi: 'अभी कोई सवाल नहीं पूछा गया' },
  ask_photo_only: { hi: 'केवल फ़ोटो' },
  ask_status_answered: { hi: 'जवाब मिला' },
  ask_status_photo: { hi: 'फ़ोटो सहेजी गई' },
  ask_status_queued: { hi: 'भेजने की प्रतीक्षा में' },
  ask_see_answer: { hi: 'जवाब देखें' },
  ask_photo_alt: { hi: 'फ़ोटो' },

  // ----- family -----
  family_title: { hi: 'परिवार के लिए' },
  family_code_placeholder: { hi: 'छह अक्षर का कोड' },
  family_view: { hi: 'देखें' },
  family_read_only: { hi: 'यह केवल पढ़ने के लिए है।' },
  family_loading: { hi: 'लोड हो रहा है...' },
  family_not_found: { hi: 'यह कोड नहीं मिला' },
  family_error: { hi: 'कुछ गड़बड़ हुई, बाद में कोशिश करें' },
  family_bad_code: { hi: 'कोड सही नहीं है' },
  sum_minutes: { hi: 'इस हफ़्ते के अध्ययन मिनट: {n}' },
  sum_mastered: { hi: 'समझे गए विषय: {n}' },
  sum_help: { hi: 'मदद चाहिए: {list}' },
  sum_help_none: { hi: 'मदद चाहिए: कोई नहीं' },
  sum_updated: { hi: 'आख़िरी अपडेट: {date}' },

  // ----- about -----
  about_title: { hi: 'LearnMate के बारे में' },
  about_free_title: { hi: 'मुफ़्त पढ़ाई' },
  about_free_body: {
    hi: 'LearnMate छात्रों के लिए मुफ़्त है: कोई लॉगिन नहीं, कोई विज्ञापन नहीं, कोई व्यक्तिगत डेटा नहीं बेचा जाता। छात्र कुछ नहीं देते।',
  },
  about_payer_title: { hi: 'कौन पैसे देगा?' },
  about_payer_body: {
    hi: 'एनजीओ, कॉर्पोरेट सामाजिक उत्तरदायित्व (CSR) की शिक्षा योजनाएँ और ज़िला स्कूल कार्यक्रम प्रति छात्र प्रति वर्ष के हिसाब से भुगतान कर सकते हैं।',
  },
  about_payer_note: { hi: 'यह एक अनुमान है; वास्तविक कीमत बातचीत से तय होगी।' },
  about_costs_title: { hi: 'प्रति छात्र लागत' },
  about_cost_caption: { hi: 'सभी संख्याएँ अनुमान हैं (धारणाएँ)' },
  about_cost_item: { hi: 'मद' },
  about_cost_amount: { hi: 'राशि (प्रति छात्र प्रति वर्ष)' },
  about_cost_total: { hi: 'कुल (अनुमान)' },
  cost_content: { hi: 'सामग्री और पाठ्यक्रम समीक्षा (अनुमान)' },
  cost_hosting: { hi: 'उपकरण और होस्टिंग, साझा सर्वर और सिंक (अनुमान)' },
  cost_training: { hi: 'शिक्षक / स्वयंसेवक अभिमुखीकरण (अनुमान)' },
  cost_support: { hi: 'डेटा और सहायता (अनुमान)' },
  cost_overhead: { hi: 'ओवरहेड (अनुमान)' },
  about_value_title: { hi: 'मूल्य तर्क' },
  about_value_body: {
    hi: '{price} प्रति छात्र प्रति वर्ष मानकर, {learners} छात्रों के लिए लगभग {total} प्रति वर्ष (अनुमान)।',
  },
  about_data_title: { hi: 'डेटा' },
  about_data_body: {
    hi: 'प्रोफ़ाइल और प्रगति केवल इसी फ़ोन पर रहती है; सिंक में केवल सप्ताह के मिनट, महारत की संख्या और कमज़ोर विषय भेजे जाते हैं।',
  },
};

// Speech recognition / synthesis language. Hindi is the only language.
export function speechLang() {
  return 'hi-IN';
}

// Text for a key, or the key itself when it is unknown.
// Placeholders {name} are replaced from vars when given.
export function t(key, vars) {
  const entry = STRINGS[key];
  if (!entry) return key;
  const text = entry.hi ?? key;
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name) =>
    Object.prototype.hasOwnProperty.call(vars, name) ? String(vars[name]) : match,
  );
}
