// English mirror of urdu.js, keyed by the same ids.
// Correct options carry { text } only; wrong options carry { text, feedback }.

export const EN_URDU_TITLE = 'Class 8 Urdu';

export const EN_URDU_CHAPTERS = {
  'urdu-ism-aqsam': 'The Noun and Its Kinds',
  'urdu-fail-zamane': 'The Verb and the Tenses',
  'urdu-huroof': 'Particles (Huroof)',
  'urdu-murakkab-jumla': 'Compounds and the Sentence',
  'urdu-muhavare-khat': 'Idioms and Letter Writing',
};

export const EN_URDU_CONCEPTS = {
  'urdu-ism-taarif': {
    title: 'The Noun: Definition and Kinds (Proper and Common)',
    points: [
      'A noun (ism) is the name of a person, a place or a thing.',
      'A common noun (ism-e-aam) is a name for a whole class, like boy, city, book.',
      'A proper noun (ism-e-khaas) is the name of one particular person, place or thing, like Ahmad, Lahore, the River Indus.',
      'A proper noun is always used for one specific being or thing.',
    ],
    example: '"Book" is a common noun, while "Diwan-e-Ghalib" is the name of one particular book, so it is a proper noun.',
    questions: {
      'urdu-ism-taarif-q1': {
        text: 'What is a noun (ism)?',
        options: {
          a: { text: 'A word that shows doing an action', feedback: 'That is the definition of a verb. A noun is the name of a person, place or thing.' },
          b: { text: 'The name of a person, place or thing' },
          c: { text: 'A word that tells a quality', feedback: 'A word that tells a quality is an adjective (sifat). A noun is only a name.' },
          d: { text: 'Every word is a noun', feedback: 'Not every word is a noun. Verb, adjective and particle are separate kinds. A noun is only a name.' },
        },
      },
      'urdu-ism-taarif-q2': {
        text: 'Which kind of noun is "Lahore"?',
        options: {
          a: { text: 'Common noun (ism-e-aam)', feedback: 'Lahore is the name of one particular city, so it is a proper noun. "City" would be a common noun.' },
          b: { text: 'Pronoun (ism-e-zameer)', feedback: 'A pronoun is used in place of a noun, like he, this. Lahore is itself a name, so it is a proper noun.' },
          c: { text: 'Proper noun (ism-e-khaas)' },
          d: { text: 'Adjective (ism-e-sifat)', feedback: 'An adjective tells a quality. Lahore is the particular name of a place, so it is a proper noun.' },
        },
      },
      'urdu-ism-taarif-q3': {
        text: 'Which of these words is a common noun?',
        options: {
          a: { text: 'The River Indus', feedback: 'The River Indus is the name of one particular river, so it is a proper noun.' },
          b: { text: 'Ahmad', feedback: 'Ahmad is the name of one particular person, so it is a proper noun.' },
          c: { text: 'Karachi', feedback: 'Karachi is the name of one particular city, so it is a proper noun. "City" would be a common noun.' },
          d: { text: 'River' },
        },
      },
    },
  },
  'urdu-ism-zameer': {
    title: 'The Pronoun (Ism-e-Zameer)',
    points: [
      'A word used in place of a noun is called a pronoun (ism-e-zameer).',
      'Mein (I), hum (we), tu, tum, aap (you), woh (he/she/that), yeh (this), us (him/her) are examples of pronouns.',
      'Using pronouns means a name does not have to be repeated again and again.',
      'In a sentence, a pronoun points to the same noun in whose place it has come.',
    ],
    example: '"Ali went to school. He (woh) is reading a book." Here "woh" has come in place of Ali.',
    questions: {
      'urdu-ism-zameer-q1': {
        text: 'Which of these is a pronoun?',
        options: {
          a: { text: 'Book (kitab)', feedback: 'Book is itself a common noun. A pronoun is a word that comes in place of a noun, like woh (he/she).' },
          b: { text: 'Woh (he/she/that)' },
          c: { text: 'Read (parha)', feedback: 'Parha is a verb because it shows an action. A pronoun is a word used in place of a noun.' },
          d: { text: 'Fast (tez)', feedback: 'Tez is an adjective because it tells a quality. A pronoun comes in place of a noun, like mein, woh.' },
        },
      },
      'urdu-ism-zameer-q2': {
        text: 'In the sentence "Sara cooked the food; she (us ne) served it to everyone", which word is the pronoun?',
        options: {
          a: { text: 'Sara', feedback: 'Sara is itself a proper noun. The word that came in her place, "us ne", is the pronoun.' },
          b: { text: 'Food (khana)', feedback: 'Khana is a common noun. The pronoun is the word used in place of a noun; here "us ne" came in place of Sara.' },
          c: { text: 'Cooked (banaya)', feedback: 'Banaya is a verb. The pronoun is "us ne", used in place of Sara.' },
          d: { text: 'Us ne (she)' },
        },
      },
      'urdu-ism-zameer-q3': {
        text: 'Why is a pronoun used?',
        options: {
          a: { text: 'So that the noun is not repeated again and again' },
          b: { text: 'So that the sentence becomes longer', feedback: 'The purpose of a pronoun is not to lengthen a sentence. It saves us from repeating a name and makes speech easy.' },
          c: { text: 'So that it takes the place of the verb', feedback: 'A pronoun takes the place of a noun, not of a verb. The verb stays separate in the sentence.' },
          d: { text: 'So that every sentence becomes a question', feedback: 'Making a question is the work of istifham words. A pronoun only comes in place of a noun and ends repetition.' },
        },
      },
    },
  },
  'urdu-ism-sifat': {
    title: 'The Adjective (Ism-e-Sifat)',
    points: [
      'A word that tells the goodness, badness, colour, size or state of a noun is called an adjective (sifat).',
      'Achha (good), bara (big), kala (black), meetha (sweet), zaheen (intelligent) are examples of adjectives.',
      'The noun whose quality is told is called the mausoof.',
      'An adjective always joins a noun and shows its quality.',
    ],
    example: 'In "meetha aam" (sweet mango), "meetha" is the adjective and "aam" is the mausoof.',
    questions: {
      'urdu-ism-sifat-q1': {
        text: 'What is an adjective (sifat)?',
        options: {
          a: { text: 'A word that comes in place of a noun', feedback: 'A word that comes in place of a noun is a pronoun. An adjective tells the quality of a noun.' },
          b: { text: 'A word that tells an action', feedback: 'A word that tells an action is a verb. An adjective tells the quality of a noun, like good, big.' },
          c: { text: 'A word that tells the quality of a noun' },
          d: { text: 'A word that joins two sentences', feedback: 'A word that joins things is a harf-e-ataf. An adjective tells a quality.' },
        },
      },
      'urdu-ism-sifat-q2': {
        text: 'In "zaheen talib ilm" (intelligent student), which word is the adjective?',
        options: {
          a: { text: 'Talib ilm (student)', feedback: 'The student is the one whose quality is told; that is the mausoof. The adjective is "zaheen".' },
          b: { text: 'Zaheen (intelligent)' },
          c: { text: 'There is no adjective in it', feedback: 'There is an adjective here. "Zaheen" is telling the quality of the student.' },
          d: { text: 'Ilm (knowledge)', feedback: 'Ilm is itself a noun. Here the word telling the quality is "zaheen".' },
        },
      },
      'urdu-ism-sifat-q3': {
        text: 'Which of these words is NOT an adjective?',
        options: {
          a: { text: 'Surkh (red)', feedback: 'Surkh tells a colour, so it is an adjective. An adjective can tell colour too.' },
          b: { text: 'Mota (fat)', feedback: 'Mota tells state and size, so it is an adjective.' },
          c: { text: 'Mez (table)' },
          d: { text: 'Tez (fast)', feedback: 'Tez tells a quality, so it is an adjective. Mez is the name of a thing; it is a noun.' },
        },
      },
    },
  },
  'urdu-fail-taarif': {
    title: 'The Verb: Definition and Recognition',
    points: [
      'A word that shows the doing or happening of an action is called a verb (fail).',
      'Khana (to eat), parhna (to read), khelna (to play), sona (to sleep) are examples of verbs.',
      'Asking the question "What did he/she do?" in a sentence helps us find the verb.',
      'Without a verb, a sentence stays incomplete.',
    ],
    example: '"The children are playing in the field." Here "are playing" is the verb.',
    questions: {
      'urdu-fail-taarif-q1': {
        text: 'What is a verb (fail)?',
        options: {
          a: { text: 'A word that shows the name of a person or thing', feedback: 'A word that shows a name is a noun. A verb tells the doing or happening of an action.' },
          b: { text: 'A word that shows the doing or happening of an action' },
          c: { text: 'A word that shows a quality', feedback: 'A word that shows a quality is an adjective. A verb tells an action, like to play, to read.' },
          d: { text: 'A word that joins two sentences', feedback: 'A joining word is a particle (harf). A verb means the doing of an action.' },
        },
      },
      'urdu-fail-taarif-q2': {
        text: 'In "Ammi ne khana pakaya" (Mother cooked the food), which word is the verb?',
        options: {
          a: { text: 'Ammi (mother)', feedback: 'Ammi is a noun. Ask "What did she do?" — pakaya (cooked). That is the verb.' },
          b: { text: 'Khana (food)', feedback: 'Here khana is the name of a thing, a noun. The verb is "pakaya".' },
          c: { text: 'Ne (particle)', feedback: 'Ne is a particle. The verb is the word that shows the action, here "pakaya".' },
          d: { text: 'Pakaya (cooked)' },
        },
      },
      'urdu-fail-taarif-q3': {
        text: 'Which of these sentences has a verb?',
        options: {
          a: { text: 'The blue sky', feedback: 'This has only a noun and an adjective; no action is told. A verb needs the happening of an action.' },
          b: { text: 'The birds are flying' },
          c: { text: 'A big tree', feedback: 'This is only a phrase; no action has happened in it. The sentence with "are flying" has the verb.' },
          d: { text: 'Sweet water', feedback: 'This has an adjective and a noun, no verb. A verb tells an action like flying, reading.' },
        },
      },
    },
  },
  'urdu-zamana-mazi': {
    title: 'The Past Tense (Zamana-e-Mazi)',
    points: [
      'A verb that tells an action done in time already gone by is in the past tense (mazi).',
      '"Woh gaya" (he went) and "Us ne khat likha" (he wrote a letter) are examples of the past.',
      'In the past tense, the action is already complete.',
      'The past is recognised by verb endings like a, i, e, or by tha/thi (was).',
    ],
    example: '"Kal hum ne match khela tha" (Yesterday we played a match). This sentence is about time gone by, so it is past tense.',
    questions: {
      'urdu-zamana-mazi-q1': {
        text: '"Us ne sabak yaad kiya" (He learnt the lesson) — which tense is this?',
        options: {
          a: { text: 'Present tense (haal)', feedback: 'In the present, the action is going on, like "yaad kar raha hai". "Yaad kiya" is done and gone; it is past.' },
          b: { text: 'Future tense (mustaqbil)', feedback: 'The future is time to come, like "yaad kare ga". "Yaad kiya" has already happened; it is past.' },
          c: { text: 'Past tense (mazi)' },
          d: { text: 'It has no tense', feedback: 'Every verb has some tense. "Kiya" tells of time gone by; this is the past.' },
        },
      },
      'urdu-zamana-mazi-q2': {
        text: 'Which of these is an example of the past tense?',
        options: {
          a: { text: 'She is going to the market', feedback: '"Is going" is the present time; this is the present tense. In the past, the action is already done.' },
          b: { text: 'She will go to the market', feedback: '"Will go" speaks of time to come; this is the future tense.' },
          c: { text: 'She had gone to the market' },
          d: { text: 'She goes to the market', feedback: '"Goes" tells a habit or present time; this is the present tense. For the past, see "had gone".' },
        },
      },
      'urdu-zamana-mazi-q3': {
        text: 'Which of these sentences is NOT in the past tense?',
        options: {
          a: { text: 'Ali wrote a letter', feedback: '"Wrote" tells of time gone by; this is past tense. The question asks for the sentence that is not past.' },
          b: { text: 'We had eaten the food', feedback: '"Had eaten" is also past. "Tha" is a clear sign of the past.' },
          c: { text: 'Ali will go to school tomorrow' },
          d: { text: 'He fell asleep', feedback: '"Fell asleep" is done; it is past. "Will go" is about time to come.' },
        },
      },
    },
  },
  'urdu-zamana-hal-mustaqbil': {
    title: 'The Present and Future Tenses (Haal and Mustaqbil)',
    points: [
      'A verb that tells an action happening in the present time is in the present tense (haal), like "Woh parh raha hai" (he is reading).',
      'A verb that points to time still to come is in the future tense (mustaqbil), like "Woh kal aye ga" (he will come tomorrow).',
      'The present uses "raha hai, rahi hai, ta hai"; the future uses "ga, gi, ge".',
      'The three tenses show the time of the verb: past = time gone, present = time now, future = time to come.',
    ],
    example: '"I am studying my lesson now and will take the exam tomorrow." The first part is present, the second is future.',
    questions: {
      'urdu-zamana-hal-mustaqbil-q1': {
        text: '"Bacha so raha hai" (The child is sleeping) — which tense is this?',
        options: {
          a: { text: 'Past tense (mazi)', feedback: 'In the past, the action is already done. "So raha hai" is happening right now; it is the present.' },
          b: { text: 'Present tense (haal)' },
          c: { text: 'Future tense (mustaqbil)', feedback: 'The future is time to come, like "soye ga". Here the action is going on now; it is the present.' },
          d: { text: 'It has no tense', feedback: '"Raha hai" is a sign of the present time, so this is the present tense.' },
        },
      },
      'urdu-zamana-hal-mustaqbil-q2': {
        text: 'Which of these is an example of the future tense?',
        options: {
          a: { text: 'We had gone to Lahore', feedback: '"Had gone" is time gone by; this is the past. The future carries "ga, gi, ge".' },
          b: { text: 'We are going to Lahore', feedback: '"Are going" is the action of right now; this is the present.' },
          c: { text: 'We will go to Lahore tomorrow' },
          d: { text: 'We go to Lahore', feedback: '"Go" tells a present habit; this is the present tense. "Will go" is the future.' },
        },
      },
      'urdu-zamana-hal-mustaqbil-q3': {
        text: '"Ga, gi, ge" are signs of which tense?',
        options: {
          a: { text: 'Of the present tense', feedback: 'The signs of the present are "raha hai, ta hai". "Ga, gi, ge" always tell of time to come.' },
          b: { text: 'Of the past tense', feedback: 'The signs of the past are "tha, thi" or verb endings a, i. "Ga, gi" are signs of the future.' },
          c: { text: 'Of all three tenses', feedback: 'Each tense has its own signs. "Ga, gi, ge" come only in the future.' },
          d: { text: 'Of the future tense (mustaqbil)' },
        },
      },
    },
  },
  'urdu-harf-jar': {
    title: 'Huroof-e-Jar (Prepositions)',
    points: [
      'Particles that join a noun with the verb and show place, time or relation are called huroof-e-jar.',
      'Mein (in), par (on), se (from/with), ko (to), tak (up to), ke liye (for), ki taraf (towards) are huroof-e-jar.',
      'The noun that comes after a harf-e-jar is called majroor.',
      'These particles make the meaning of a sentence clear.',
    ],
    example: '"Kitab mez par rakhi hai" (The book is kept on the table). Here "par" is a harf-e-jar telling the place of the book.',
    questions: {
      'urdu-harf-jar-q1': {
        text: 'Which of these is a harf-e-jar?',
        options: {
          a: { text: 'Aur (and)', feedback: '"Aur" joins two things; it is a harf-e-ataf. A harf-e-jar tells place or relation, like "par".' },
          b: { text: 'Par (on)' },
          c: { text: 'Ae (O!)', feedback: '"Ae" is used for calling; it is a harf-e-nida. Huroof-e-jar like mein, par, se show a relation.' },
          d: { text: 'Kya (what?)', feedback: '"Kya" is used for a question; it is a harf-e-istifham. A harf-e-jar shows the relation of a noun.' },
        },
      },
      'urdu-harf-jar-q2': {
        text: 'In "Woh school se aya" (He came from school), which word is the harf-e-jar?',
        options: {
          a: { text: 'Woh (he)', feedback: '"Woh" is a pronoun. The harf-e-jar is the word showing the relation; here "se" shows coming from school.' },
          b: { text: 'School', feedback: 'School is a noun, and because it comes after a harf-e-jar it is majroor. The harf-e-jar is "se".' },
          c: { text: 'Aya (came)', feedback: 'Aya is a verb. The harf-e-jar is "se", which shows the relation of coming from a place.' },
          d: { text: 'Se (from)' },
        },
      },
      'urdu-harf-jar-q3': {
        text: 'What is the work of a harf-e-jar?',
        options: {
          a: { text: 'To join two words or sentences', feedback: 'Joining is the work of a harf-e-ataf, like "aur". A harf-e-jar shows the relation of a noun with the verb.' },
          b: { text: 'To call someone', feedback: 'Calling is the work of a harf-e-nida, like "ae". A harf-e-jar tells place, time or relation.' },
          c: { text: 'To show the relation of a noun with the verb or sentence' },
          d: { text: 'To ask a question', feedback: 'Asking a question is the work of a harf-e-istifham, like "kya". A harf-e-jar tells a relation.' },
        },
      },
    },
  },
  'urdu-harf-ataf': {
    title: 'Huroof-e-Ataf (Conjunctions)',
    points: [
      'Particles that join two words or two sentences together are called huroof-e-ataf.',
      'Aur (and), wa, bhi (also), lekin (but), magar (but), ya (or) are huroof-e-ataf.',
      '"Lekin" and "magar" show a contrast or opposition.',
      '"Ya" is used for choosing one of two things.',
    ],
    example: '"Ahmad aur Ali dost hain" (Ahmad and Ali are friends). Here "aur" is joining two names; it is a harf-e-ataf.',
    questions: {
      'urdu-harf-ataf-q1': {
        text: 'Which of these is a harf-e-ataf?',
        options: {
          a: { text: 'Mein (in)', feedback: '"Mein" tells a place; it is a harf-e-jar. A harf-e-ataf is a joining word, like "aur".' },
          b: { text: 'Ae (O!)', feedback: '"Ae" is for calling; it is a harf-e-nida. The joining particle is "aur".' },
          c: { text: 'Aur (and)' },
          d: { text: 'Ne (particle)', feedback: '"Ne" comes as a harf-e-jar. The harf-e-ataf that joins two things is "aur".' },
        },
      },
      'urdu-harf-ataf-q2': {
        text: 'In "I wanted to go, lekin (but) it rained", which word is the harf-e-ataf?',
        options: {
          a: { text: 'Mein (I)', feedback: '"Mein" is a pronoun. In this sentence the word joining the two parts is "lekin".' },
          b: { text: 'Lekin (but)' },
          c: { text: 'Barish (rain)', feedback: 'Barish is a noun. The joining particle is "lekin", which also shows a contrast.' },
          d: { text: 'Gayi (fell/happened)', feedback: 'Gayi is a verb. The harf-e-ataf is "lekin".' },
        },
      },
      'urdu-harf-ataf-q3': {
        text: 'When is "ya" (or) used?',
        options: {
          a: { text: 'For calling someone', feedback: 'For calling, "ae, are" are used. "Ya" is used for a choice, like tea or coffee.' },
          b: { text: 'For asking a question', feedback: 'For a question, "kya, kyun" are used. "Ya" is used to pick one of two things.' },
          c: { text: 'For telling a place', feedback: 'Telling a place is the work of a harf-e-jar, like "mein, par". "Ya" tells a choice.' },
          d: { text: 'For choosing one of two things' },
        },
      },
    },
  },
  'urdu-harf-nida-istifham': {
    title: 'Huroof-e-Nida and Huroof-e-Istifham (Calling and Question Words)',
    points: [
      'Particles used to call someone are called huroof-e-nida, like ae, are, o.',
      'Particles used to ask a question are called huroof-e-istifham, like kya (what), kyun (why), kab (when), kahan (where), kaun (who).',
      'A sentence of calling usually carries the exclamation mark (!).',
      'A question sentence ends with the question mark (?).',
    ],
    example: '"Ae dost! Zara meri baat suno" (O friend! Just listen to me). Here "ae" is a harf-e-nida.',
    questions: {
      'urdu-harf-nida-istifham-q1': {
        text: 'Which of these is a harf-e-nida?',
        options: {
          a: { text: 'Kya (what?)', feedback: '"Kya" is used for a question; it is a harf-e-istifham. The calling word is "ae".' },
          b: { text: 'Aur (and)', feedback: '"Aur" is a joining harf-e-ataf. For calling, "ae, are" are used.' },
          c: { text: 'Ae (O!)' },
          d: { text: 'Par (on)', feedback: '"Par" is a harf-e-jar telling a place. A harf-e-nida is used for calling.' },
        },
      },
      'urdu-harf-nida-istifham-q2': {
        text: 'In "Tum kahan ja rahe ho?" (Where are you going?), which word is the harf-e-istifham?',
        options: {
          a: { text: 'Tum (you)', feedback: '"Tum" is a pronoun. The question word is "kahan", which asks about the place.' },
          b: { text: 'Ja rahe (going)', feedback: '"Ja rahe" is part of the verb. The istifham is the word that makes the question, here "kahan".' },
          c: { text: 'Ho (are)', feedback: '"Ho" is part of the verb. The question is made by "kahan"; that is the harf-e-istifham.' },
          d: { text: 'Kahan (where)' },
        },
      },
      'urdu-harf-nida-istifham-q3': {
        text: 'In "Are! Tum aa gaye" (Oh! You have come), what is "are"?',
        options: {
          a: { text: 'Harf-e-jar', feedback: 'A harf-e-jar tells place or relation, like "mein, par". "Are" has come for calling and surprise.' },
          b: { text: 'Harf-e-nida' },
          c: { text: 'Harf-e-ataf', feedback: 'A harf-e-ataf joins two things, like "aur". "Are" here is for calling.' },
          d: { text: 'Harf-e-istifham', feedback: 'Istifham asks a question, like "kya, kahan". There is no question here; "are" is nida.' },
        },
      },
    },
  },
  'urdu-murakkab-izafi': {
    title: 'Murakkab-e-Izafi (Possessive Compound)',
    points: [
      'When two nouns join in such a way that possession or relation is shown, it is called murakkab-e-izafi.',
      'The one who owns is called mudaf ilaih, and the thing owned is called mudaf.',
      'In Urdu izafat, "ka, ki, ke" are used, like "Ahmad ki kitab" (Ahmad\'s book).',
      'In "Ahmad ki kitab", "kitab" is the mudaf and "Ahmad" is the mudaf ilaih.',
    ],
    example: '"Maryam ka qalam mez par hai" (Maryam\'s pen is on the table). Here "Maryam ka qalam" is a murakkab-e-izafi.',
    questions: {
      'urdu-murakkab-izafi-q1': {
        text: 'Which of these is a murakkab-e-izafi?',
        options: {
          a: { text: 'Blue sky', feedback: '"Blue" is an adjective of sky; this is murakkab-e-tausifi. Izafi shows possession, like "Ali ka ghar".' },
          b: { text: "Ali's house (Ali ka ghar)" },
          c: { text: 'Good boy', feedback: '"Good" is the adjective of the boy; this is tausifi. In izafi, possession is shown by "ka, ki".' },
          d: { text: 'Big tree', feedback: '"Big" is an adjective; this is a tausifi phrase. An izafi example would be "the shade of the tree".' },
        },
      },
      'urdu-murakkab-izafi-q2': {
        text: 'In "Ustad ki kursi" (the teacher\'s chair), which word is the mudaf?',
        options: {
          a: { text: 'Ustad (teacher)', feedback: 'The teacher is the one who owns; he is called mudaf ilaih. The mudaf is the thing owned: the chair.' },
          b: { text: 'Ki (of)', feedback: '"Ki" is the word of izafat; it is neither mudaf nor mudaf ilaih. The mudaf is "kursi".' },
          c: { text: 'Kursi (chair)' },
          d: { text: 'Both words are mudaf', feedback: 'The two have separate names: ustad is mudaf ilaih and kursi is mudaf.' },
        },
      },
      'urdu-murakkab-izafi-q3': {
        text: 'Which relation is shown in a murakkab-e-izafi?',
        options: {
          a: { text: 'Of an adjective and its noun', feedback: 'The relation of adjective and noun is found in murakkab-e-tausifi. Izafi holds possession or relation.' },
          b: { text: 'Of tense', feedback: 'Tense is shown by the verb. Murakkab-e-izafi tells possession between two nouns.' },
          c: { text: 'Of possession or relation' },
          d: { text: 'Of verb and subject', feedback: 'Verb and subject are parts of a sentence. In izafi, two nouns join by the relation of possession.' },
        },
      },
    },
  },
  'urdu-murakkab-tausifi': {
    title: 'Murakkab-e-Tausifi (Adjective Compound)',
    points: [
      'When an adjective and its noun (mausoof) join to form one phrase, it is called murakkab-e-tausifi.',
      'In this phrase, the first word is the adjective and the second is the mausoof.',
      '"Surkh phool" (red flower) and "zaheen talib ilm" (intelligent student) are its examples.',
      'This phrase tells the quality of a noun.',
    ],
    example: '"Fragrant flowers have bloomed in the garden." Here "fragrant flowers" is a murakkab-e-tausifi.',
    questions: {
      'urdu-murakkab-tausifi-q1': {
        text: 'Which of these is a murakkab-e-tausifi?',
        options: {
          a: { text: "Ahmad's mango", feedback: '"Ahmad ka aam" shows possession; it is murakkab-e-izafi. Tausifi has an adjective, like "meetha aam".' },
          b: { text: 'The shade of the tree', feedback: 'This shows possession with "ka"; it is izafi. In tausifi, the first word is an adjective.' },
          c: { text: 'Sweet mango (meetha aam)' },
          d: { text: 'That boy', feedback: '"That" (woh) is a pointing pronoun, not an adjective. Tausifi has a quality word, like "meetha".' },
        },
      },
      'urdu-murakkab-tausifi-q2': {
        text: 'In "lambi sarak" (long road), which word is the adjective?',
        options: {
          a: { text: 'Sarak (road)', feedback: 'The road is the thing whose quality is told; it is the mausoof. The adjective is "lambi".' },
          b: { text: 'Both words are adjectives', feedback: 'The second word is a noun, called the mausoof. Here the only adjective is "lambi".' },
          c: { text: 'There is no adjective in it', feedback: '"Lambi" is telling the quality of the road; that itself is the adjective.' },
          d: { text: 'Lambi (long)' },
        },
      },
      'urdu-murakkab-tausifi-q3': {
        text: 'What is the real difference between murakkab-e-tausifi and murakkab-e-izafi?',
        options: {
          a: { text: 'Both are exactly the same thing', feedback: 'They are different: tausifi has an adjective with its noun, and izafi has the relation of possession.' },
          b: { text: 'Tausifi has possession and izafi has an adjective', feedback: 'This is reversed. Tausifi has the adjective and izafi has possession.' },
          c: { text: 'Tausifi has an adjective with its noun; izafi shows possession' },
          d: { text: 'Tausifi is used only in poetry', feedback: 'Both phrases are used in prose and everyday language. The difference is in their meaning.' },
        },
      },
    },
  },
  'urdu-jumla-aqsam': {
    title: 'Kinds of Sentences, and Singular and Plural',
    points: [
      'A sentence (jumla) is a group of words from which the full meaning is understood.',
      'A sentence that gives some news is called khabriya, and one that asks a question is called sawaliya.',
      'A sentence that gives an order or makes a request is called amriya.',
      'The singular (wahid) is for one and the plural (jama) for more than one, like kitab to kitabein, larka to larke.',
    ],
    example: '"Kya tum ne sabak yaad kar liya?" (Have you learnt the lesson?) is a sawaliya sentence because a question is asked in it.',
    questions: {
      'urdu-jumla-aqsam-q1': {
        text: 'How is a sawaliya (question) sentence recognised?',
        options: {
          a: { text: 'Some news is given in it', feedback: 'A sentence giving news is khabriya. In a sawaliya, a question is asked.' },
          b: { text: 'A question is asked and a question mark comes at the end' },
          c: { text: 'An order is given in it', feedback: 'A sentence with an order is amriya. A sawaliya has a question and the mark "?".' },
          d: { text: 'Surprise is shown in it', feedback: 'A sentence of surprise is fujaiya. A sawaliya is recognised by the question and the question mark.' },
        },
      },
      'urdu-jumla-aqsam-q2': {
        text: 'What is the plural (jama) of "kitab" (book)?',
        options: {
          a: { text: 'Kitaba', feedback: '"Kitaba" is not a plural in Urdu. The plural of kitab is "kitabein".' },
          b: { text: 'Kitaban', feedback: '"Kitaban" is also not the correct plural. In Urdu, the plural of kitab is "kitabein".' },
          c: { text: 'Kitabein (books)' },
          d: { text: 'Kitab itself is the plural', feedback: 'Kitab is singular, for one book. For more than one we say "kitabein".' },
        },
      },
      'urdu-jumla-aqsam-q3': {
        text: '"Barah-e-karam darwaza band kar dein" (Please close the door) — which kind of sentence is this?',
        options: {
          a: { text: 'Khabriya (statement)', feedback: 'Khabriya gives news. In this sentence a request is made; it is amriya.' },
          b: { text: 'Sawaliya (question)', feedback: 'A sawaliya has a question and the mark "?". Here there is a request, not a question.' },
          c: { text: 'Fujaiya (exclamatory)', feedback: 'Fujaiya holds surprise or feelings. This sentence is a polite request; it is amriya.' },
          d: { text: 'Amriya (command/request)' },
        },
      },
    },
  },
  'urdu-muhavara': {
    title: 'Idioms: Meanings and Use (Muhavare)',
    points: [
      'An idiom (muhavra) is a phrase used in a special figurative meaning instead of its literal meaning.',
      '"Aankhon ka tara" (the star of the eyes) means very dear.',
      'Idioms make the language beautiful and effective.',
      'The words of an idiom are generally not changed; they are used in the same form.',
    ],
    example: '"The son is the star of his mother\'s eyes." That is, the son is very dear to his mother.',
    questions: {
      'urdu-muhavara-q1': {
        text: 'What does "aankhon ka tara" (star of the eyes) mean?',
        options: {
          a: { text: 'A star seen in the eye', feedback: 'That is the literal meaning. The real meaning of an idiom is figurative: very dear.' },
          b: { text: 'Very dear / beloved' },
          c: { text: 'A person with weak eyesight', feedback: 'The idiom does not tell the state of the eye. "Aankhon ka tara" is used for a beloved, dear person.' },
          d: { text: 'One who stays awake at night', feedback: 'The star brings night to mind, but the meaning of the idiom is to be very dear.' },
        },
      },
      'urdu-muhavara-q2': {
        text: 'What does "nau do gyarah hona" mean?',
        options: {
          a: { text: 'Learning counting', feedback: 'That is the literal sense. In the idiom it means to run away quietly.' },
          b: { text: 'To come at eleven o\'clock', feedback: 'Telling the time is not the meaning of this idiom. It is said for slipping away.' },
          c: { text: 'To run away quietly' },
          d: { text: 'To do sums', feedback: 'The numbers suggest sums, but the real meaning is to disappear, to run off.' },
        },
      },
      'urdu-muhavara-q3': {
        text: 'What is an idiom (muhavra)?',
        options: {
          a: { text: 'A phrase that gives only its literal meaning', feedback: 'Ordinary speech gives the literal meaning. An idiom is used in a figurative meaning.' },
          b: { text: 'A phrase used in a figurative meaning' },
          c: { text: 'A phrase used only in poetry', feedback: 'Idioms are used in prose and daily speech too. Their mark is the figurative meaning.' },
          d: { text: 'That which joins two sentences', feedback: 'Joining is the work of a harf-e-ataf. An idiom is a phrase carrying a special meaning.' },
        },
      },
    },
  },
  'urdu-zarb-ul-misl': {
    title: 'Proverbs (Zarb-ul-Amsaal)',
    points: [
      'A proverb (zarb-ul-misl) is a famous saying that holds some experience of life or a piece of advice.',
      '"Jaisa karo ge waisa bharo ge" (as you do, so shall you get) is a proverb.',
      'Proverbs say a thing in a brief and effective way.',
      'They are the essence of the experience of elders and are commonly spoken in the language.',
    ],
    example: '"Jaisa boo ge waisa kato ge" (as you sow, so shall you reap). That is, the result will match the deed.',
    questions: {
      'urdu-zarb-ul-misl-q1': {
        text: 'What is a proverb (zarb-ul-misl)?',
        options: {
          a: { text: 'A famous saying that holds advice or experience' },
          b: { text: 'Just a joking remark', feedback: 'A proverb is not a joke. It holds a true lesson of life.' },
          c: { text: 'A long story', feedback: 'A story is long. A proverb is a short sentence that says a big thing.' },
          d: { text: 'A verse of a poem', feedback: 'A verse is part of poetry. A proverb is a famous saying in prose that holds experience.' },
        },
      },
      'urdu-zarb-ul-misl-q2': {
        text: 'What does "jaisa karo ge waisa bharo ge" mean?',
        options: {
          a: { text: 'A good fruit is got from farming', feedback: 'This saying is not about farming. It means the result of a deed is just like the deed.' },
          b: { text: 'Good or bad deeds bring a like result' },
          c: { text: 'A vessel should be filled properly', feedback: 'Here "bharo ge" means receiving the result, not filling a vessel.' },
          d: { text: 'Everything should be weighed before taking', feedback: 'This saying has nothing to do with weighing. It is about deeds and their outcome.' },
        },
      },
      'urdu-zarb-ul-misl-q3': {
        text: 'What is the difference between an idiom and a proverb?',
        options: {
          a: { text: 'Both are exactly the same thing', feedback: 'They are different: a proverb is a complete sentence giving advice; an idiom is a phrase.' },
          b: { text: 'A proverb is a complete sentence and gives advice; an idiom is a phrase' },
          c: { text: 'An idiom gives advice and a proverb does not', feedback: 'This is reversed. Advice is found in the proverb; an idiom only gives a special meaning.' },
          d: { text: 'A proverb is used only in poetry', feedback: 'Proverbs are spoken in everyday talk. The difference lies in their form and their advice.' },
        },
      },
    },
  },
  'urdu-khat-darxast': {
    title: 'The Style of Letters and Applications (Khat-o-Darkhast)',
    points: [
      'In a letter or application, one\'s address and the date are written first of all.',
      'Then a suitable title for the person addressed is written, like "Muhtaram Janab" (Respected Sir).',
      'The matter is written briefly, politely and clearly.',
      'At the end, "Wassalam" or "Aap ka shagird" (your student) is written, followed by one\'s name.',
    ],
    example: 'An application for leave to the head of the school is written in this same style.',
    questions: {
      'urdu-khat-darxast-q1': {
        text: 'What is written first of all in an application?',
        options: {
          a: { text: 'Address and date' },
          b: { text: 'A long introduction', feedback: 'An introduction does not come first. An application begins with the address and the date.' },
          c: { text: 'The signature at the very top', feedback: 'The signature and name come at the end. First of all, the address and date are written.' },
          d: { text: 'A sentence of thanks', feedback: 'Thanks can come at the end. The beginning is always with the address and date.' },
        },
      },
      'urdu-khat-darxast-q2': {
        text: 'Which is a suitable title for a teacher in an application?',
        options: {
          a: { text: 'Dear friend', feedback: 'This title is for a friend\'s letter. For a teacher, the respectful title is "Muhtaram Janab".' },
          b: { text: 'O teacher!', feedback: 'Calling out like this is against the manners of a letter. A teacher is addressed as "Muhtaram Janab".' },
          c: { text: 'Muhtaram Janab (Respected Sir)' },
          d: { text: 'No title is needed; only the name is enough', feedback: 'A title is necessary in a letter to elders. Writing only the name is against good manners.' },
        },
      },
      'urdu-khat-darxast-q3': {
        text: 'How should the language of an application be?',
        options: {
          a: { text: 'Long and full of difficult words', feedback: 'Difficult and long language weakens an application. The matter should be simple and clear.' },
          b: { text: 'Funny and informal', feedback: 'An application is a formal piece of writing. Seriousness and politeness are necessary in it.' },
          c: { text: 'Polite, brief and clear' },
          d: { text: 'Only signs and abbreviations', feedback: 'Abbreviations are not suitable for a formal letter. The full, clear matter should be written.' },
        },
      },
    },
  },
};

export const EN_URDU_MISCONCEPTIONS = {
  'ism-fail-confusion': 'Mixing up the noun and the verb',
  'ism-sifat-confusion': 'Mixing up the noun and the adjective',
  'har-lafz-ism': 'Taking every word to be a noun',
  'khas-aam-confusion': 'Not distinguishing proper and common nouns',
  'zameer-confusion': 'Mistake in recognising a pronoun',
  'zameer-ism-aam': 'Taking a common noun to be a pronoun',
  'zameer-ism-khas': 'Taking a proper noun to be a pronoun',
  'zameer-fail': 'Taking a verb to be a pronoun, or a pronoun to replace a verb',
  'zameer-maqsad': 'Misunderstanding the purpose of a pronoun',
  'sifat-zameer': 'Taking an adjective to be a pronoun',
  'sifat-fail': 'Taking an adjective to be a verb',
  'sifat-harf': 'Taking an adjective to be a particle',
  'sifat-mausoof': 'Not distinguishing adjective and mausoof',
  'sifat-missing': 'Not spotting the adjective in a phrase',
  'sifat-ism-hai': 'Taking an adjective to be a noun',
  'fail-ism': 'Not distinguishing verb and noun',
  'fail-sifat': 'Taking a verb to be an adjective',
  'fail-harf': 'Taking a verb to be a particle',
  'fail-missing': 'Not spotting the verb in a sentence',
  'zamana-confusion': 'Not distinguishing the tenses',
  'zamana-missing': 'Not recognising the tense of a verb',
  'zamana-nishani': 'Mistake in recognising the sign of a tense',
  'harf-ataf-confusion': 'Taking harf-e-ataf to be another particle',
  'harf-nida-confusion': 'Taking harf-e-nida to be another particle',
  'harf-istifham-confusion': 'Taking harf-e-istifham to be another particle',
  'harf-jar-confusion': 'Taking harf-e-jar to be another particle',
  'jar-zameer': 'Taking a pronoun to be a harf-e-jar',
  'jar-ism': 'Taking a noun to be a harf-e-jar',
  'jar-fail': 'Taking a verb to be a harf-e-jar',
  'ataf-zameer': 'Taking a pronoun to be the joining particle',
  'ataf-ism': 'Taking a noun to be the joining particle',
  'ataf-fail': 'Taking a verb to be the joining particle',
  'nida-istifham-confusion': 'Not distinguishing nida and istifham',
  'tausifi-confusion': 'Taking murakkab-e-tausifi to be another compound',
  'izafi-confusion': 'Taking murakkab-e-izafi to be tausifi',
  'mudaf-confusion': 'Not distinguishing mudaf and mudaf ilaih',
  'murakkab-farq': 'Not understanding the difference between the compounds',
  'jumla-aqsam-confusion': 'Not distinguishing the kinds of sentences',
  'wahid-jama-confusion': 'Mistake in making singular and plural',
  'lafzi-maani': 'Taking the literal meaning of an idiom',
  'muhavara-taarif': 'Misunderstanding the definition of an idiom',
  'misl-maqsad': 'Misunderstanding the purpose of a proverb',
  'misl-lafzi': 'Taking the literal meaning of a proverb',
  'misl-muhavara-confusion': 'Not distinguishing idiom and proverb',
  'khat-tarteeb': 'Mistake in the order of a letter',
  'khat-laqab': 'An unsuitable title in a letter',
  'khat-usloob': 'Misunderstanding the style of an application',
};
