// English mirror of islamiat.js, keyed by the same ids.
// Correct options carry { text } only; wrong options carry { text, feedback }.

export const EN_ISLAMIAT_TITLE = 'Class 8 Islamic Studies';

export const EN_ISLAMIAT_CHAPTERS = {
  'isl-quran-hadis': 'The Quran and Hadith',
  'isl-imaniyat': 'Beliefs (Imaniyat)',
  'isl-ibadat': 'Worship (Ibadat)',
  'isl-seerat': 'Seerah of the Prophet',
  'isl-akhlaq': 'Character and Dealings (Akhlaq)',
};

export const EN_ISLAMIAT_CONCEPTS = {
  'isl-quran-parichay': {
    title: 'The Quran: Introduction and Revelation',
    points: [
      'The Quran is the last book of Allah, revealed to Prophet Muhammad ﷺ.',
      'Wahy (revelation) is the message of Allah that reached the Prophet through the angel Jibreel.',
      'The first revelation came in the Cave Hira near Makkah, in the month of Ramadan. The first verses were from Surah Al-Alaq, and their first word was "Iqra" (Read).',
      'The Quran was revealed little by little over about 23 years, and it has 114 surahs.',
    ],
    example: 'When we read the Quran, we learn that Allah has shown us the right way to live, just as elders teach us the right things.',
    questions: {
      'isl-quran-parichay-q1': {
        text: 'To whom was the Quran revealed?',
        options: {
          a: { text: 'To Prophet Musa', feedback: 'The Tawrat was revealed to Prophet Musa. The Quran was revealed to Prophet Muhammad ﷺ.' },
          b: { text: 'To Prophet Muhammad ﷺ' },
          c: { text: 'To Prophet Isa', feedback: 'The Injil was revealed to Prophet Isa. The Quran was revealed to the last Prophet, Muhammad ﷺ.' },
          d: { text: 'To Prophet Ibrahim', feedback: 'Scriptures (Suhuf) came to Prophet Ibrahim. The Quran was revealed to Prophet Muhammad ﷺ.' },
        },
      },
      'isl-quran-parichay-q2': {
        text: 'Where and when did the first revelation come?',
        options: {
          a: { text: 'In Madinah, after the Hijrah', feedback: 'The first revelation came before the Hijrah, during the Makkah period, when the Prophet ﷺ used to worship in Cave Hira.' },
          b: { text: 'In Cave Thawr, during the Hijrah journey', feedback: 'The Prophet ﷺ stayed in Cave Thawr during the Hijrah journey. The first revelation came in Cave Hira.' },
          c: { text: 'In Cave Hira, in the month of Ramadan' },
          d: { text: 'Inside the Kaaba, at the time of the first prayer', feedback: 'The first revelation did not come in the Kaaba. It came in Cave Hira in the mountain near Makkah, in Ramadan.' },
        },
      },
      'isl-quran-parichay-q3': {
        text: 'Which statement about the revelation of the Quran is correct?',
        options: {
          a: { text: 'The whole Quran was revealed in a single day', feedback: 'The Quran was not revealed in one day. It came down little by little over about 23 years, according to the situations.' },
          b: { text: 'The Quran was revealed little by little over about 23 years, and the Companions preserved it by writing it down and memorizing it' },
          c: { text: 'The Quran came only in dreams', feedback: 'The main way of revelation was the coming of Jibreel. The Quran was revealed in this way, and the Companions also wrote it down.' },
          d: { text: 'The Quran is a book written by the Companions themselves after the Prophet ﷺ', feedback: 'The Quran is not a human-written book; it is the word of Allah. The Companions wrote it down, but it was revealed from Allah.' },
        },
      },
    },
  },
  'isl-hadis-sunnat': {
    title: 'Hadith and Sunnah',
    points: [
      'Hadith means the sayings of the Prophet ﷺ, his actions, and his silent approval of something done in his presence.',
      'Sunnah means the practical way of the Prophet ﷺ — how he lived his life.',
      'Hadith shows the teachings of the Quran in practice; for example, we learn the method of Salah from Hadith.',
      'Sahih Bukhari and Sahih Muslim are the most famous and trusted books of Hadith.',
    ],
    example: 'The Quran commands us to offer Salah, and the way to pray is known to us from the Sunnah and Hadith of the Prophet ﷺ.',
    questions: {
      'isl-hadis-sunnat-q1': {
        text: 'What is Hadith?',
        options: {
          a: { text: 'The report of the sayings, actions and approval of the Prophet ﷺ' },
          b: { text: 'Only the verses of the Quran', feedback: 'The verses of the Quran are the word of Allah. Hadith is the report of the sayings and actions of the Prophet ﷺ.' },
          c: { text: 'The letters of the Companions', feedback: 'Hadith is not the letters of the Companions. The Companions passed on the sayings and actions of the Prophet ﷺ to us — those are Hadith.' },
          d: { text: 'Stories of old kings', feedback: 'Hadith is not stories. These are true reports of the commands and practice of the Prophet ﷺ.' },
        },
      },
      'isl-hadis-sunnat-q2': {
        text: 'What does Sunnah mean?',
        options: {
          a: { text: 'Only the customs of special occasions', feedback: 'Sunnah is not customs. Sunnah is the complete practical way of the Prophet ﷺ, which we should adopt in our lives.' },
          b: { text: 'The practical way of the Prophet ﷺ and the example of his life' },
          c: { text: 'An act that makes no difference whether you do it or not', feedback: 'Acting on the Sunnah is a path of reward and success. It should not be taken lightly.' },
          d: { text: 'Only the manners of eating and drinking', feedback: 'Eating and drinking manners are one part of the Sunnah, but the Sunnah includes worship, character and dealings as well.' },
        },
      },
      'isl-hadis-sunnat-q3': {
        text: 'Why do we need Hadith?',
        options: {
          a: { text: 'We do not need Hadith; we should work out the method ourselves', feedback: 'The details of Salah, fasting and Zakat are known to us only from Hadith. Without the teaching of the Prophet ﷺ, practice is incomplete.' },
          b: { text: 'Hadith is only for learning history', feedback: 'Hadith is not only history. It tells us how to act upon the commands of the Quran.' },
          c: { text: 'Hadith shows the commands of the Quran in practice, such as the method of Salah' },
          d: { text: 'Hadith is a separate teaching, higher than the Quran', feedback: 'Hadith is not a separate teaching from the Quran. Hadith is the explanation and practical form of the Quran itself.' },
        },
      },
    },
  },
  'isl-tilavat-adab': {
    title: 'Etiquette of Recitation (Tilawat)',
    points: [
      'Before recitation, one should make wudu and be clean and pure.',
      'Recitation should begin with "A\'udhu billah" and "Bismillah".',
      'The Quran should be recited slowly, with attention, and with an effort to understand it.',
      'When the Quran is being recited somewhere, one should listen quietly, and the Quran should be kept in a clean, high place.',
    ],
    example: 'Just as we listen to an elder with respect and attention, the Quran should also be recited and listened to with respect and attention.',
    questions: {
      'isl-tilavat-adab-q1': {
        text: 'What should be done before starting recitation?',
        options: {
          a: { text: 'Talk to everyone and set the mood', feedback: 'Before recitation one should not talk; one should make wudu, sit with respect, and recite A\'udhu billah and Bismillah.' },
          b: { text: 'Make wudu and recite A\'udhu billah and Bismillah' },
          c: { text: 'Nothing is necessary; recite however you like', feedback: 'The Quran is the word of Allah. Its recitation has etiquette: wudu, respect and attention.' },
          d: { text: 'Eat food first', feedback: 'Eating is not a required condition. For recitation, being pure and having wudu is necessary.' },
        },
      },
      'isl-tilavat-adab-q2': {
        text: 'How should the Quran be recited?',
        options: {
          a: { text: 'Very fast, so it finishes quickly', feedback: 'Finishing quickly is not the goal. The Quran should be recited slowly, with pauses and understanding.' },
          b: { text: 'Only on special days', feedback: 'The Quran is for reading every day. Reading a little daily is the best habit.' },
          c: { text: 'Slowly, with attention and an effort to understand' },
          d: { text: 'Touching and reading it without wudu is best', feedback: 'Wudu should be made for touching and reciting the Quran. Purity is the first etiquette of recitation.' },
        },
      },
      'isl-tilavat-adab-q3': {
        text: 'When the Quran is being recited somewhere, what should the listeners do?',
        options: {
          a: { text: 'Listen quietly and attentively' },
          b: { text: 'Keep talking among themselves', feedback: 'Talking during recitation is against etiquette. The Quran commands us to listen quietly.' },
          c: { text: 'Get up and leave', feedback: 'Listening to recitation is a rewarding act. Leaving without a reason is not right; one should listen with attention.' },
          d: { text: 'Only elders should listen, not children', feedback: 'Recitation is for every Muslim. Children should also be given the habit of listening to and reading the Quran from childhood.' },
        },
      },
    },
  },
  'isl-tauheed': {
    title: 'Tauheed (Oneness of Allah)',
    points: [
      'Tauheed means believing that Allah is One and not making anyone a partner with Him in worship.',
      'Allah alone is the Creator, the Giver of sustenance and the Owner of the whole universe.',
      'Allah has no likeness; He was not born of anyone, nor was anyone born of Him. This is stated in Surah Al-Ikhlas.',
      'The opposite of Tauheed is shirk — making a partner with Allah — which is the greatest sin.',
    ],
    example: 'Just as a school has one head teacher, the whole universe has one Owner and Ruler: Allah.',
    questions: {
      'isl-tauheed-q1': {
        text: 'What does Tauheed mean?',
        options: {
          a: { text: 'Only taking the name of Allah', feedback: 'Only taking the name is not enough. Tauheed is believing from the heart that Allah is One and worshipping Him alone.' },
          b: { text: 'Believing Allah is One and making no one His partner in worship' },
          c: { text: 'Considering all religions to be the same', feedback: 'Tauheed does not mean mixing religions. Tauheed is faith in the oneness of Allah.' },
          d: { text: 'Worshipping the angels', feedback: 'Angels are servants of Allah, not worthy of worship. Worship is only for Allah.' },
        },
      },
      'isl-tauheed-q2': {
        text: 'What does Surah Al-Ikhlas tell us about Allah?',
        options: {
          a: { text: 'Allah has many helpers', feedback: 'Surah Al-Ikhlas says: Allah is One, He needs no one, and He has no partner.' },
          b: { text: 'Allah has a form like humans', feedback: 'Allah has no likeness and no human-like form. Surah Al-Ikhlas says nothing is equal to Him.' },
          c: { text: 'Allah is One, He is self-sufficient; no one was born of Him, nor was He born of anyone' },
          d: { text: 'Allah is the Owner of the skies only, not the earth', feedback: 'Allah is the Owner of the whole universe, including the skies and the earth and everything.' },
        },
      },
      'isl-tauheed-q3': {
        text: 'What is shirk?',
        options: {
          a: { text: 'A small mistake that is easily fixed', feedback: 'Shirk is the greatest sin, because in it someone else is made a partner in the right of Allah.' },
          b: { text: 'Only prostrating to idols', feedback: 'Idol worship is one form of shirk. Calling anyone besides Allah for worship or help is also included in shirk.' },
          c: { text: 'Making someone a partner with Allah in worship or divinity; it is the greatest sin, against Tauheed' },
          d: { text: 'Committing any sin at all', feedback: 'Not every sin is shirk. Shirk is specifically making a partner with Allah.' },
        },
      },
    },
  },
  'isl-risalat': {
    title: 'Risalat (Prophethood)',
    points: [
      'Risalat means that Allah sent prophets and messengers to guide human beings.',
      'The first prophet was Hazrat Adam and the last prophet is Hazrat Muhammad ﷺ. No prophet will come after him, so he is called Khatam-un-Nabiyyin (the Seal of the Prophets).',
      'All prophets brought the same message: Allah is One, worship Him alone.',
      'Prophets were human beings whom Allah chose and taught through revelation.',
    ],
    example: 'Just as a teacher shows the class the right path, Allah sent prophets so that people could learn the difference between right and wrong.',
    questions: {
      'isl-risalat-q1': {
        text: 'Who is the last Prophet?',
        options: {
          a: { text: 'Hazrat Muhammad ﷺ' },
          b: { text: 'Hazrat Isa', feedback: 'Hazrat Isa is also a messenger of Allah, but the last Prophet is Hazrat Muhammad ﷺ.' },
          c: { text: 'Hazrat Musa', feedback: 'Hazrat Musa is among the great messengers. The last Prophet is Hazrat Muhammad ﷺ; no prophet comes after him.' },
          d: { text: 'A prophet is still to come', feedback: 'The chain of prophets ended with Hazrat Muhammad ﷺ. He is Khatam-un-Nabiyyin.' },
        },
      },
      'isl-risalat-q2': {
        text: 'What was the basic message of all the prophets?',
        options: {
          a: { text: 'The greatness of their own tribe', feedback: 'The message of the prophets was not tribal greatness. They all said one thing: Allah is One, worship Him alone.' },
          b: { text: 'Allah is One; worship Him alone and do good deeds' },
          c: { text: 'Collecting wealth', feedback: 'Collecting wealth was not the message of the prophets. Their message was Tauheed and a righteous life.' },
          d: { text: 'Only the customs of their own time', feedback: 'Prophets did not bring customs. They brought the message of Allah, which guides people of every age.' },
        },
      },
      'isl-risalat-q3': {
        text: 'Which statement about the prophets is correct?',
        options: {
          a: { text: 'Prophets were angels who lived among humans', feedback: 'Prophets were human beings, not angels. Allah chose prophets from among humans to guide humans.' },
          b: { text: 'Prophethood can be achieved through hard work', feedback: 'Prophethood is not gained by effort. It is a selection from Allah; only whom Allah wills becomes a prophet.' },
          c: { text: 'Prophets were chosen human beings who guided people through revelation' },
          d: { text: 'Every pious person can become a prophet', feedback: 'Being pious is good, but only the one chosen by Allah is a prophet. This rank is not given to every pious person.' },
        },
      },
    },
  },
  'isl-akhirah': {
    title: 'Angels, Revealed Books and the Hereafter',
    points: [
      'Angels are a creation of Allah, made from light (noor). They always obey Allah and never disobey Him.',
      'Hazrat Jibreel used to bring the revelation, and Hazrat Mikaeel is in charge of rain and sustenance.',
      'Allah also sent books for guidance: the Tawrat to Hazrat Musa, the Zabur to Hazrat Dawud, the Injil to Hazrat Isa, and the Quran to Hazrat Muhammad ﷺ.',
      'Belief in the Hereafter means: there is life after death, the Day of Judgment will come, and good and bad deeds will be accounted for. This belief leads us towards good deeds.',
    ],
    example: 'Just as a student who prepares for an exam works hard, a person who believes in the Hereafter does good deeds in this world.',
    questions: {
      'isl-akhirah-q1': {
        text: 'From what were the angels created?',
        options: {
          a: { text: 'From clay', feedback: 'Man was created from clay. Angels were created from light (noor).' },
          b: { text: 'From fire', feedback: 'The jinn were created from fire. Angels were created from light.' },
          c: { text: 'From light (noor)' },
          d: { text: 'From water', feedback: 'Angels were not made from water. According to Hadith, angels were created from light.' },
        },
      },
      'isl-akhirah-q2': {
        text: 'Which angel used to bring the revelation?',
        options: {
          a: { text: 'Hazrat Mikaeel', feedback: 'Hazrat Mikaeel is in charge of rain and sustenance. Hazrat Jibreel used to bring the revelation.' },
          b: { text: 'Hazrat Jibreel' },
          c: { text: 'Hazrat Israfil', feedback: 'Hazrat Israfil will blow the trumpet on the Day of Judgment. Bringing revelation was the task of Hazrat Jibreel.' },
          d: { text: 'Malak-ul-Maut (the Angel of Death)', feedback: 'The Angel of Death is appointed to take souls. Hazrat Jibreel used to bring the revelation.' },
        },
      },
      'isl-akhirah-q3': {
        text: 'What effect should belief in the Hereafter have on our daily life?',
        options: {
          a: { text: 'No effect; the Hereafter is a matter of after death', feedback: 'Belief in the Hereafter changes life. A person who is sure of the accounting avoids wrong deeds.' },
          b: { text: 'We should give up all the work of this world', feedback: 'Preparing for the Hereafter is not leaving the world. Doing good deeds while living in the world is the real preparation.' },
          c: { text: 'A person avoids sins and advances in good deeds, because he is certain of the accounting' },
          d: { text: 'We should think about the Hereafter only in old age', feedback: 'No one knows the time of death. So preparation for the Hereafter and good deeds are necessary at every age.' },
        },
      },
    },
  },
  'isl-salah': {
    title: 'Salah (Prayer)',
    points: [
      'Salah is the second pillar of Islam. Five daily prayers are obligatory for every adult Muslim: Fajr, Zuhr, Asr, Maghrib and Isha.',
      'Before Salah, making wudu is necessary, and the place and clothes should be clean.',
      'Salah includes qiyam (standing), ruku (bowing), sujud (prostration) and finally turning the face in salam.',
      'Salah is a connection with Allah, and it stops a person from evil and shameful deeds.',
    ],
    example: 'Just as eating food several times a day gives strength to the body, the five daily prayers give strength to our soul.',
    questions: {
      'isl-salah-q1': {
        text: 'How many times a day is Salah obligatory?',
        options: {
          a: { text: 'Three times', feedback: 'The obligatory prayers are five times a day: Fajr, Zuhr, Asr, Maghrib and Isha.' },
          b: { text: 'Only once, on Friday', feedback: 'The Friday prayer is special, but Salah is obligatory five times every day, not only on Friday.' },
          c: { text: 'Five times' },
          d: { text: 'Whenever the heart wishes', feedback: 'Every prayer has a fixed time. All five prayers must be offered at their appointed times.' },
        },
      },
      'isl-salah-q2': {
        text: 'What is necessary before Salah?',
        options: {
          a: { text: 'Making wudu and being pure' },
          b: { text: 'Eating food', feedback: 'Eating is not a condition of Salah. Wudu and purity are necessary before Salah.' },
          c: { text: 'Wearing new clothes', feedback: 'New clothes are not necessary; clean clothes are. And making wudu before Salah is obligatory.' },
          d: { text: 'Nothing is necessary', feedback: 'Salah is not valid without wudu. Wudu is the key to Salah.' },
        },
      },
      'isl-salah-q3': {
        text: 'Which statement about the importance of Salah is correct?',
        options: {
          a: { text: 'Salah is only for elders', feedback: 'Salah is obligatory for every adult Muslim. Children should be given the habit of Salah from the age of seven.' },
          b: { text: 'Salah can only be offered in a mosque, not at home', feedback: 'Praying in congregation in a mosque is better, but Salah can also be offered at home on a clean place.' },
          c: { text: 'Salah is the pillar of the religion, and it will be the first thing asked about on the Day of Judgment' },
          d: { text: 'A person who fasts does not need Salah', feedback: 'Fasting and Salah are separate obligations. One act of worship does not take the place of another.' },
        },
      },
    },
  },
  'isl-zakat': {
    title: 'Zakat',
    points: [
      'Zakat is the third pillar of Islam. A Muslim who owns the nisab must give a fixed portion of his wealth to the poor once a year.',
      'The amount of Zakat is generally two and a half percent (2.5%) of savings and trade goods.',
      'Nisab means the minimum wealth on which Zakat becomes obligatory: wealth equal to 7.5 tolas of gold or 52.5 tolas of silver.',
      'Zakat purifies wealth, helps the poor, and increases love in society.',
    ],
    example: 'Just as pruning makes a tree grow better, giving Zakat does not decrease wealth; it brings blessing in it and feeds the poor.',
    questions: {
      'isl-zakat-q1': {
        text: 'To whom is Zakat given?',
        options: {
          a: { text: 'Only to rich relatives', feedback: 'Zakat is the right of the poor and the needy. Zakat cannot be given to a rich person.' },
          b: { text: 'To the poor, the destitute and the needy' },
          c: { text: 'Only to one\'s friends', feedback: 'Friends can be given gifts, but Zakat is only for those entitled to it — the poor and the needy.' },
          d: { text: 'To anyone, without any condition', feedback: 'Those entitled to Zakat are mentioned in the Quran: the poor, the destitute and other needy people.' },
        },
      },
      'isl-zakat-q2': {
        text: 'What does nisab mean?',
        options: {
          a: { text: 'The amount of Zakat that every Muslim gives equally', feedback: 'Zakat is not equal for everyone. Nisab is the minimum wealth; when wealth is above it, Zakat becomes obligatory.' },
          b: { text: 'Food given in Ramadan', feedback: 'Feeding people in Ramadan is a good deed, but nisab is the limit of wealth on which Zakat becomes obligatory.' },
          c: { text: 'The minimum wealth on which Zakat becomes obligatory' },
          d: { text: 'A special fund of the mosque', feedback: 'Nisab is not a mosque fund. It is the fixed limit of wealth whose owner must pay Zakat.' },
        },
      },
      'isl-zakat-q3': {
        text: 'Which statement about the rate and calculation of Zakat is correct?',
        options: {
          a: { text: 'Zakat applies to everything, including the house and the car', feedback: 'There is no Zakat on the house one lives in and items of personal use. Zakat is on savings, cash and trade goods.' },
          b: { text: 'Zakat is two and a half percent (2.5%) on savings and trade goods after one year, if the wealth is equal to or more than the nisab' },
          c: { text: 'Zakat can only be given in Ramadan', feedback: 'Giving Zakat in Ramadan is better, but it can be given in any month once the year is complete.' },
          d: { text: 'Give as much Zakat as you wish; there is no calculation', feedback: 'Charity can be given generously, but Zakat has a fixed calculation: 2.5% on the nisab.' },
        },
      },
    },
  },
  'isl-sawm-hajj': {
    title: 'Sawm (Fasting) and Hajj',
    points: [
      'Sawm (fasting) is the fourth pillar of Islam. In the month of Ramadan, leaving food and drink from dawn (end of sehri time) to sunset (iftar) is the fast.',
      'Fasting is not only staying hungry: avoiding lies, backbiting and quarrels is also part of the fast.',
      'Fasting creates patience, God-consciousness and a feeling for the hunger of the poor. A sick person and a traveller are allowed to fast later.',
      'Hajj is the fifth pillar of Islam. A Muslim who has the ability (health and expenses) must perform Hajj once in a lifetime. It is performed in Makkah in the month of Dhul-Hijjah, and the stay at Arafat takes place on 9th Dhul-Hijjah.',
    ],
    example: 'By fasting we understand how a poor person feels while hungry, so a fasting person also feeds others at iftar.',
    questions: {
      'isl-sawm-hajj-q1': {
        text: 'In which month is the fast kept?',
        options: {
          a: { text: 'In Muharram', feedback: 'Special fasts may be kept in Muharram, but the obligatory fasts are those of Ramadan.' },
          b: { text: 'In Ramadan' },
          c: { text: 'In Shaban', feedback: 'Shaban is the month before Ramadan. The obligatory fasts are in Ramadan.' },
          d: { text: 'In Dhul-Hijjah', feedback: 'Dhul-Hijjah is the month of Hajj. The month of fasting is Ramadan.' },
        },
      },
      'isl-sawm-hajj-q2': {
        text: 'What should a person do while fasting?',
        options: {
          a: { text: 'Only leaving food and drink is enough; speech can be anything', feedback: 'Fasting is not only about food and drink. Avoiding lies, backbiting and quarrels is also part of the fast.' },
          b: { text: 'Along with food and drink, one should also avoid lies, backbiting and bad deeds' },
          c: { text: 'Spend the whole day sleeping', feedback: 'Fasting is not the name of sleeping. A fasting person should do his usual work and worship as well.' },
          d: { text: 'Only drinking water is forbidden; one may eat food', feedback: 'In a fast, both eating and drinking are left, from after sehri until iftar.' },
        },
      },
      'isl-sawm-hajj-q3': {
        text: 'Which statement about Hajj is correct?',
        options: {
          a: { text: 'Hajj is obligatory on every Muslim every year', feedback: 'Hajj is obligatory once in a lifetime, and only on the one who has the ability to go.' },
          b: { text: 'Hajj can be performed in any month of the year', feedback: 'The days of Hajj are fixed: in the month of Dhul-Hijjah, especially the stay at Arafat on 9th Dhul-Hijjah.' },
          c: { text: 'Hajj is obligatory once in a lifetime on a Muslim who has the ability of health and expenses, and it is performed in Dhul-Hijjah' },
          d: { text: 'Hajj is only for old people', feedback: 'Hajj depends on ability, not age. A young person who has the expenses and health also becomes obliged to perform it.' },
        },
      },
    },
  },
  'isl-makki-zindagi': {
    title: 'The Makki Life',
    points: [
      'Hazrat Muhammad ﷺ was born in Makkah. His father, Hazrat Abdullah, had passed away before his birth.',
      'In childhood he was brought up by his grandfather Hazrat Abdul Muttalib and then by his uncle Abu Talib.',
      'In his youth he was famous for his truthfulness and trustworthiness, known as "Sadiq" and "Ameen". At the age of 25 he married Hazrat Khadijah.',
      'At the age of 40, the first revelation came in Cave Hira and prophethood began. The people of Makkah caused severe hardships over his call, but he stood firm with patience.',
    ],
    example: 'The people of Makkah kept their valuable goods with the Prophet ﷺ as a trust, because everyone knew he never betrayed a trust.',
    questions: {
      'isl-makki-zindagi-q1': {
        text: 'By what names did the people of Makkah call the Prophet ﷺ?',
        options: {
          a: { text: 'Only by the name of his tribe', feedback: 'People called him Sadiq and Ameen because of his truthfulness and trustworthiness.' },
          b: { text: 'Sadiq (the truthful) and Ameen (the trustworthy)' },
          c: { text: 'King and ruler', feedback: 'He was not a king. People called him Sadiq and Ameen because of his truthfulness.' },
          d: { text: 'He had no special name', feedback: 'Because of his character, everyone in Makkah knew him as Sadiq and Ameen.' },
        },
      },
      'isl-makki-zindagi-q2': {
        text: 'Who brought up the Prophet ﷺ?',
        options: {
          a: { text: 'His mother alone', feedback: 'After his mother passed away, his grandfather Abdul Muttalib and then his uncle Abu Talib brought him up.' },
          b: { text: 'First his grandfather Abdul Muttalib, then his uncle Abu Talib' },
          c: { text: 'The chiefs of Makkah together', feedback: 'The chiefs did not bring him up. This responsibility was carried out by his grandfather and then his uncle.' },
          d: { text: 'No relative at all', feedback: 'He was brought up within the family: first with his grandfather, then with his uncle Abu Talib.' },
        },
      },
      'isl-makki-zindagi-q3': {
        text: 'What lesson do we learn from the hardships of the Makkah period?',
        options: {
          a: { text: 'When difficulty comes, one should give up the truth', feedback: 'The Prophet ﷺ did not leave the truth even in severe hardships. The lesson is to keep patience and steadfastness in difficulty.' },
          b: { text: 'Taking revenge is most important', feedback: 'In Makkah the Prophet ﷺ chose the path of patience and prayer instead of revenge.' },
          c: { text: 'Patience and steadfastness: standing firm on truth and goodness even in difficulties' },
          d: { text: 'Hate those who cause trouble forever', feedback: 'The Prophet ﷺ prayed for the guidance of those who troubled him. The lesson is not hatred, but patience and mercy.' },
        },
      },
    },
  },
  'isl-hijrat-madani': {
    title: 'Hijrah and the Madani Life',
    points: [
      'Hijrah means leaving one\'s home and land for the sake of Allah and going to another place. The Prophet ﷺ went from Makkah to Madinah by the command of Allah.',
      'The Islamic (Hijri) year begins from the Hijrah.',
      'On reaching Madinah, he built Masjid-e-Nabawi and established brotherhood between the Muhajirun (those who came from Makkah) and the Ansar (the helpers of Madinah).',
      'In Madinah he made an agreement called the Charter of Madinah (Misaq-e-Madinah), in which the rights of Muslims and people of other religions were fixed.',
    ],
    example: 'The Ansar shared their homes and food with their Muhajir brothers. This brotherhood still teaches us to help others.',
    questions: {
      'isl-hijrat-madani-q1': {
        text: 'In the Hijrah, from where to where did the Prophet ﷺ travel?',
        options: {
          a: { text: 'From Madinah to Makkah', feedback: 'The Hijrah took place from Makkah to Madinah, not in the opposite direction.' },
          b: { text: 'From Makkah to Madinah' },
          c: { text: 'From Makkah to Taif', feedback: 'He went to Taif for preaching. The Hijrah was from Makkah to Madinah, from which the Hijri year begins.' },
          d: { text: 'From Makkah to Sham (Syria)', feedback: 'He went to Sham in childhood on a trade journey. The Hijrah was towards Madinah.' },
        },
      },
      'isl-hijrat-madani-q2': {
        text: 'Who are called the Ansar?',
        options: {
          a: { text: 'Those who came from Makkah', feedback: 'Those who came from Makkah are called Muhajirun. The Ansar are the Muslims of Madinah who helped them.' },
          b: { text: 'The Muslims of Madinah who helped the Muhajirun' },
          c: { text: 'Those who perform Hajj', feedback: 'Those who perform Hajj are called Hajis. The Ansar were the helping Muslims of Madinah.' },
          d: { text: 'The family of the Prophet ﷺ', feedback: 'The Ansar are not a family; they are the people of Madinah who gave homes and help to the Muhajirun.' },
        },
      },
      'isl-hijrat-madani-q3': {
        text: 'Which statement about the Hijrah is correct?',
        options: {
          a: { text: 'The Hijrah was running away out of fear', feedback: 'The Hijrah was not fleeing in fear. It happened by the command of Allah and with full planning, so that a new centre for the call to Islam could be established.' },
          b: { text: 'The Hijrah happened by the command of Allah, and the Hijri year begins from it' },
          c: { text: 'After the Hijrah there was no contact with Makkah', feedback: 'Dealings with the people of Makkah continued after the Hijrah, and later Makkah was conquered. The Hijrah was not cutting off relations.' },
          d: { text: 'The Hijrah was a journey of only a few days with no effect', feedback: 'The Hijrah is the greatest turning point of Islamic history. The first Islamic society was established in Madinah.' },
        },
      },
    },
  },
  'isl-seerat-sabaq': {
    title: 'Lessons from the Seerah',
    points: [
      'The purpose of studying the Seerah is not only to memorize events, but to take lessons from them and bring them into our own lives.',
      'Patience: the Prophet ﷺ showed patience during the severe hardships of Makkah and the bad treatment at Taif, and did not curse anyone.',
      'Truthfulness and trust: he always spoke the truth and returned trusts — even on the night of the Hijrah he arranged for the people\'s trusts to be returned before leaving.',
      'Mercy and forgiveness: at the conquest of Makkah, he gave a general pardon even to those who had caused him great hardship.',
    ],
    example: 'Instead of panicking after failing an exam, working hard again with patience is a lesson taken from the Seerah.',
    questions: {
      'isl-seerat-sabaq-q1': {
        text: 'At the conquest of Makkah, how did the Prophet ﷺ treat his enemies?',
        options: {
          a: { text: 'He took revenge on everyone', feedback: 'The Prophet ﷺ did not take revenge. At the conquest of Makkah he announced a general pardon.' },
          b: { text: 'He gave a general pardon, although they had caused him much hardship' },
          c: { text: 'He expelled everyone from the city', feedback: 'The Prophet ﷺ did not expel anyone. He forgave everyone, showing mercy.' },
          d: { text: 'He said nothing', feedback: 'The Prophet ﷺ clearly announced that there would be no revenge today and all were forgiven. This is the lesson of mercy.' },
        },
      },
      'isl-seerat-sabaq-q2': {
        text: 'What did the Prophet ﷺ do about the trusts on the night of the Hijrah?',
        options: {
          a: { text: 'He took the trusts with him', feedback: 'The Prophet ﷺ did not take the trusts with him. He left Hazrat Ali in Makkah so that everyone\'s trusts would be returned to them.' },
          b: { text: 'He left Hazrat Ali behind so that the people\'s trusts would be returned to them' },
          c: { text: 'He sent the trusts to Madinah', feedback: 'The trusts were returned to their owners in Makkah itself. This is the greatest proof of trustworthiness.' },
          d: { text: 'No arrangement was made for the trusts', feedback: 'An arrangement was made. Even in difficult circumstances, the Prophet ﷺ considered returning the trusts essential.' },
        },
      },
      'isl-seerat-sabaq-q3': {
        text: 'What is the real benefit of studying the Seerah?',
        options: {
          a: { text: 'Only memorizing dates and events', feedback: 'Memorizing dates alone is not enough. The real benefit is to take lessons from those events and change our lives.' },
          b: { text: 'Telling others to gain respect', feedback: 'The Seerah is not for showing off knowledge. Its purpose is practice: adopting patience, truthfulness and mercy.' },
          c: { text: 'Adopting lessons like patience, truthfulness, trust and mercy in our own lives' },
          d: { text: 'Only getting marks in the exam', feedback: 'An exam can be one purpose, but the real purpose of the Seerah is to practice it in life.' },
        },
      },
    },
  },
  'isl-sach-amanat': {
    title: 'Truthfulness and Trust (Amanat)',
    points: [
      'Speaking the truth is necessary in every situation, even if the matter goes against oneself.',
      'Lying is a bad act, and in Hadith lying is counted among the signs of a hypocrite.',
      'Amanat (trust) means protecting something, money or a secret entrusted to you, and returning it.',
      'Fulfilling a promise and doing work honestly is also amanat. A student\'s amanat is his studies.',
    ],
    example: 'If a shopkeeper gives you extra money by mistake, returning it is trustworthiness, even if no one is watching.',
    questions: {
      'isl-sach-amanat-q1': {
        text: 'What does amanat mean?',
        options: {
          a: { text: 'Protecting an entrusted thing or secret and returning it' },
          b: { text: 'Keeping someone\'s thing for yourself', feedback: 'Keeping a thing is betrayal (khayanat). Amanat means protecting it and returning it to its owner.' },
          c: { text: 'Only saving money', feedback: 'Amanat is not only about money. A secret, a promise and an entrusted task are also amanat.' },
          d: { text: 'Taking a loan', feedback: 'A loan is a different thing. Amanat is what someone keeps with you, trusting you.' },
        },
      },
      'isl-sach-amanat-q2': {
        text: 'What is the teaching of Hadith about lying?',
        options: {
          a: { text: 'A small lie is allowed', feedback: 'A lie, small or big, is bad. Lying even in jokes should be avoided.' },
          b: { text: 'Lying is among the signs of a hypocrite, and truth leads to salvation (goodness)' },
          c: { text: 'Lying is bad only in front of elders', feedback: 'Lying is bad everywhere, whether anyone sees it or not. Allah sees everything.' },
          d: { text: 'Lying is fine if it benefits you', feedback: 'Lying for benefit is also forbidden. The benefit of truth is always lasting.' },
        },
      },
      'isl-sach-amanat-q3': {
        text: 'Which of the following is included in amanat?',
        options: {
          a: { text: 'Only money kept in a bank', feedback: 'The scope of amanat is wide: a promise, a secret and an entrusted task are also amanat, not money alone.' },
          b: { text: 'Telling a friend\'s secret to others', feedback: 'Revealing a secret is betrayal of amanat. Amanat itself means protecting the secret.' },
          c: { text: 'Fulfilling a promise, keeping a secret, and doing an entrusted task honestly' },
          d: { text: 'Amanat applies only to elders', feedback: 'Amanat applies to a person of every age. A child\'s amanat is his studies and the trust of his family.' },
        },
      },
    },
  },
  'isl-walidain-padosi': {
    title: 'Rights of Parents and Neighbours',
    points: [
      'After Allah, the greatest right belongs to the parents. The Quran commands that one should not even say "uff" to them and should always speak to them gently.',
      'The rank of the mother is especially high: when a Companion asked, the Prophet ﷺ named the mother three times, and then the father.',
      'The right of the neighbour was stressed so much that the Prophet ﷺ said: Jibreel kept advising me about the neighbour so much that I thought the neighbour would be made an heir.',
      'The right of the neighbour is not limited to a Muslim neighbour: every neighbour should be kept safe from harm, and one should share in his happiness and sorrow.',
    ],
    example: 'Sending a bowl of good food cooked at home to a neighbour\'s house, and asking after a sick neighbour, are examples of the neighbour\'s right.',
    questions: {
      'isl-walidain-padosi-q1': {
        text: 'What is the command of the Quran about behaviour with parents?',
        options: {
          a: { text: 'Care for them only on festivals', feedback: 'The right of parents is for every day. The Quran forbids even saying "uff" to them.' },
          b: { text: 'Do not even say "uff" to them, and always speak with gentleness and respect' },
          c: { text: 'Serve only the mother, not the father', feedback: 'The rank of the mother is very high, but the father also has a right. Serving and respecting both is necessary.' },
          d: { text: 'Serve them only when you grow up', feedback: 'Serving parents is for every age; in their old age this right becomes even greater.' },
        },
      },
      'isl-walidain-padosi-q2': {
        text: 'What did the Prophet ﷺ say about the neighbour?',
        options: {
          a: { text: 'Keep no relation with the neighbour', feedback: 'Islam teaches a good relation with the neighbour. The Prophet ﷺ stressed the neighbour\'s right greatly.' },
          b: { text: 'Only a Muslim neighbour has a right', feedback: 'The right of the neighbour belongs to every neighbour, whatever his religion. Harming him is forbidden.' },
          c: { text: 'Jibreel stressed the neighbour\'s right so much that it seemed the neighbour would be made an heir' },
          d: { text: 'The neighbour has a right only if he is a relative', feedback: 'The neighbour\'s right comes from neighbourhood, not from relation. Every near neighbour has a right.' },
        },
      },
      'isl-walidain-padosi-q3': {
        text: 'What is the correct behaviour when a non-Muslim neighbour falls ill?',
        options: {
          a: { text: 'Have nothing to do with him', feedback: 'A different religion does not end the neighbour\'s right. Asking after the sick is part of good character.' },
          b: { text: 'Ask after him and help him if needed' },
          c: { text: 'Help only the people of your own religion', feedback: 'Help and good behaviour are for every human being. The Prophet ﷺ treated everyone with mercy.' },
          d: { text: 'It is allowed to harm him', feedback: 'Harming anyone is not allowed. A Hadith says that one is not a believer whose neighbour is not safe from his harm.' },
        },
      },
    },
  },
  'isl-tijarat-safai': {
    title: 'Honesty in Trade and Cleanliness',
    points: [
      'A truthful and trustworthy trader will be with the prophets, the truthful (siddiqin) and the martyrs on the Day of Judgment — this is the glad tidings of a Hadith.',
      'Giving less in measuring and weighing is a sin. The Quran gave a severe warning to those who give less in measure.',
      'Selling goods by hiding a defect is cheating. Telling the buyer the truth is honesty, and selling goods by taking false oaths is also forbidden.',
      'Cleanliness is a part of faith: a Hadith says that purity (cleanliness) is half of faith. Keeping the body, clothes, home and streets clean is the responsibility of every Muslim.',
    ],
    example: 'If a vegetable seller hides rotten vegetables under good ones, that is cheating. An honest shopkeeper separates the bad goods and sells them by telling the buyer.',
    questions: {
      'isl-tijarat-safai-q1': {
        text: 'According to Hadith, with whom will the truthful and trustworthy trader be?',
        options: {
          a: { text: 'With the rich people', feedback: 'In Hadith, the glad tidings for the truthful, trustworthy trader is the company of the prophets, the truthful and the martyrs.' },
          b: { text: 'With the prophets, the truthful (siddiqin) and the martyrs' },
          c: { text: 'Only with his friends', feedback: 'This glad tidings is not about friends. The rank of an honest trader is described as very high.' },
          d: { text: 'There is no promise of any special rank', feedback: 'The promise does exist: the truthful, trustworthy trader will be with the prophets and the martyrs. That is why honesty in trade is a great good deed.' },
        },
      },
      'isl-tijarat-safai-q2': {
        text: 'What is the teaching of the Quran about measuring and weighing?',
        options: {
          a: { text: 'A little shortage is fine; everyone does it', feedback: 'Shortage in measuring and weighing is a sin in every case. The Quran strongly condemned it.' },
          b: { text: 'It applies only to big traders', feedback: 'The command is for every seller, small or big. Giving less in the balance is cheating.' },
          c: { text: 'Measure and weight should be full and correct; giving less is a grave sin' },
          d: { text: 'The buyer himself should keep the account of the measure', feedback: 'Measuring correctly is the seller\'s responsibility. Putting the burden on the buyer is not honesty.' },
        },
      },
      'isl-tijarat-safai-q3': {
        text: 'What does the Hadith "Cleanliness is half of faith" mean?',
        options: {
          a: { text: 'Cleanliness has nothing to do with faith; it is only a habit', feedback: 'Hadith describes cleanliness as a part of faith. Purity is not only a habit; it is a teaching of the religion.' },
          b: { text: 'Purity and cleanliness are an important part of the religion: keeping the body, clothes and surroundings clean is a sign of faith' },
          c: { text: 'Being clean only at prayer time is enough', feedback: 'Purity is necessary for prayer, but cleanliness should be a habit at all times: home, street and neighbourhood too.' },
          d: { text: 'Cleanliness is possible only for the rich', feedback: 'Cleanliness comes from habit, not wealth. With water and a little effort, everyone can keep his surroundings clean.' },
        },
      },
    },
  },
};

export const EN_ISLAMIAT_MISCONCEPTIONS = {
  'quran-wrong-prophet': 'Mistake about which prophet the Quran was revealed to',
  'wahy-place-time': 'Mistake about the place and time of the first revelation',
  'wahy-all-at-once': 'Thinking the Quran was revealed all at once',
  'wahy-only-dream': 'Taking revelation to be only dreams',
  'quran-human-made': 'Taking the Quran to be a human-written book',
  'hadis-quran-same': 'Taking Hadith and the Quran to be the same thing',
  'hadis-wrong-source': 'Taking the wrong source for Hadith',
  'sunnat-custom-only': 'Taking Sunnah to be only customs',
  'sunnat-not-needed': 'Not considering the Sunnah necessary',
  'hadis-history-only': 'Taking Hadith to be only history',
  'hadis-above-quran': 'Taking Hadith to be separate from the Quran',
  'tilavat-no-adab': 'Not considering the etiquette of recitation necessary',
  'tilavat-fast': 'Thinking haste in recitation is fine',
  'tilavat-no-wudu': 'Thinking recitation without wudu is best',
  'tilavat-special-days': 'Thinking recitation is only for special days',
  'tilavat-talking': 'Thinking talking during recitation is fine',
  'tilavat-elders-only': 'Thinking recitation is only for elders',
  'tauheed-words-only': 'Taking Tauheed to be mere words',
  'tauheed-all-religions': 'Taking the wrong meaning of Tauheed',
  'worship-angels': 'Thinking worship of angels is fine',
  'allah-has-partners': 'Taking someone as a partner of Allah',
  'allah-like-human': 'Taking Allah to be like a human',
  'allah-limited': 'Taking the ownership of Allah to be limited',
  'shirk-small-sin': 'Taking shirk to be a small sin',
  'shirk-only-idols': 'Taking shirk to be only idol worship',
  'every-sin-shirk': 'Taking every sin to be shirk',
  'last-prophet-wrong': 'Mistake about the last Prophet',
  'prophet-yet-to-come': 'Waiting for another prophet to come',
  'prophet-message-wrong': 'Taking the message of the prophets wrongly',
  'prophet-not-human': 'Taking the prophet to be an angel',
  'prophethood-earned': 'Taking prophethood to be earned by effort',
  'angels-creation-wrong': 'Mistake about the creation of the angels',
  'angel-wrong-duty': 'Mistake about the duties of the angels',
  'akhirah-no-effect': 'Taking belief in the Hereafter to have no effect',
  'akhirah-leave-world': 'Thinking the world must be abandoned for the Hereafter',
  'akhirah-old-age': 'Postponing preparation for the Hereafter to old age',
  'salah-count-wrong': 'Mistake about the number of obligatory prayers',
  'salah-only-friday': 'Taking Salah to be only on Friday',
  'salah-anytime-only': 'Not taking the prayer times as fixed',
  'salah-prep-wrong': 'Mistake in the preparation for Salah',
  'wudu-not-needed': 'Not considering wudu necessary',
  'salah-elders-only': 'Taking Salah to be only for elders',
  'salah-only-masjid': 'Taking Salah to be only in a mosque',
  'ibadat-replaces-other': 'Taking one act of worship as a substitute for another',
  'zakat-recipient-wrong': 'Mistake about who is entitled to Zakat',
  'zakat-anyone': 'Thinking Zakat can be given to just anyone',
  'nisab-wrong': 'Taking the meaning of nisab wrongly',
  'zakat-on-everything': 'Taking Zakat to be on everything',
  'zakat-ramadan-only': 'Taking Zakat to be only in Ramadan',
  'zakat-any-amount': 'Thinking Zakat has no fixed calculation',
  'roza-month-wrong': 'Mistake about the month of fasting',
  'sawm-only-food': 'Taking fasting to be only leaving food',
  'sawm-sleep-only': 'Thinking the fast should be passed by sleeping',
  'hajj-every-year': 'Taking Hajj to be obligatory every year',
  'hajj-anytime': 'Thinking Hajj can be performed at any time',
  'hajj-elders-only': 'Taking Hajj to be only for old people',
  'titles-wrong': 'Mistake about the titles of the Prophet ﷺ',
  'upbringing-wrong': 'Mistake about the upbringing of the Prophet ﷺ',
  'sabr-means-quit': 'Taking patience to mean giving up the truth',
  'revenge-first': 'Putting revenge first',
  'hatred-lesson': 'Taking a lesson of hatred from the Seerah',
  'hijrah-direction': 'Mistake about the direction of the Hijrah',
  'ansar-muhajir-swap': 'Mixing up the Ansar and the Muhajirun',
  'hijrah-escape-only': 'Taking the Hijrah to be mere fleeing',
  'hijrah-cut-ties': 'Taking the Hijrah to mean cutting off relations',
  'hijrah-no-effect': 'Taking the Hijrah to be without effect',
  'fatah-silent': 'Thinking no pardon was announced at the conquest of Makkah',
  'amanat-kept': 'Thinking keeping a trust is fine',
  'seerat-dates-only': 'Taking the Seerah to be only dates',
  'seerat-show-off': 'Taking knowledge of the Seerah to be for showing off',
  'amanat-meaning-wrong': 'Taking the meaning of amanat wrongly',
  'amanat-only-money': 'Taking amanat to be only about money',
  'amanat-secret-leak': 'Thinking revealing a secret is fine',
  'amanat-elders-only': 'Taking amanat to apply only to elders',
  'small-lie-ok': 'Thinking a small lie is fine',
  'lie-only-elders': 'Thinking lying is bad only before elders',
  'lie-for-benefit': 'Thinking lying for benefit is fine',
  'parents-festivals-only': 'Taking the parents\' right to be only on special days',
  'parents-mother-only': 'Taking only the mother to have a right',
  'parents-when-grown': 'Postponing service of parents until one grows up',
  'neighbour-no-relation': 'Thinking keeping no relation with the neighbour is fine',
  'neighbour-only-muslim': 'Taking the neighbour\'s right to belong only to a Muslim',
  'neighbour-only-relative': 'Taking the neighbour\'s right to belong only to a relative',
  'neighbour-harm-ok': 'Thinking harming a neighbour is allowed',
  'help-only-own-faith': 'Thinking help is only for people of one\'s own religion',
  'trader-reward-wrong': 'Mistake about the rank of an honest trader',
  'measure-short-ok': 'Thinking a shortage in measure is fine',
  'measure-big-only': 'Taking the command about measure to apply only to big traders',
  'measure-buyer-duty': 'Putting the responsibility of measure on the buyer',
  'cleanliness-not-faith': 'Taking cleanliness to be separate from faith',
  'clean-only-prayer': 'Taking cleanliness to be only for prayer time',
  'clean-rich-only': 'Taking cleanliness to be only for the rich',
};
