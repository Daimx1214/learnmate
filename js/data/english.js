// Class 8 English content pack (base language). Registered in chapter.js.
// This subject is English, so the base pack itself is written in English.
// Each chapter has exactly 3 concepts; each concept has a short card
// (points + one example) and exactly 3 MCQ questions (easy, medium, hard).
// Each question has 4 options (a-d); exactly one has correct: true and no
// other fields. Every wrong option has a misconception tag and feedback.
// ENGLISH_MISCONCEPTIONS maps each tag to a short label naming the mistake.

export const ENGLISH_PACK_TITLE = 'Class 8 English';

export const ENGLISH_CHAPTERS = [
  {
    id: 'eng-parts-of-speech',
    title: 'Parts of Speech',
    concepts: [
      {
        id: 'eng-nouns-pronouns',
        title: 'Nouns and Pronouns',
        keywords: ['noun', 'pronoun', 'name', 'person', 'place', 'he', 'she'],
        card: {
          points: [
            'A noun is the name of a person, place, animal or thing.',
            'Words like Ali, Lahore, dog and book are nouns.',
            'A pronoun is a word used in place of a noun, like he, she, it and they.',
            'Pronouns keep our sentences short and clear.',
          ],
          example: 'Sara lost her pen, so she borrowed one from me.',
        },
        questions: [
          {
            id: 'eng-nouns-pronouns-q1',
            difficulty: 'easy',
            text: 'Which word is a noun in the sentence "The cat is sleeping"?',
            options: [
              { id: 'a', text: 'sleeping', misconception: 'verb-is-noun', feedback: 'Sleeping tells what the cat is doing, so it is a verb, not a noun.' },
              { id: 'b', text: 'cat', correct: true },
              { id: 'c', text: 'the', misconception: 'article-is-noun', feedback: 'The is an article. It comes before a noun but does not name anything itself.' },
              { id: 'd', text: 'is', misconception: 'helping-verb-is-noun', feedback: 'Is is a helping verb. It supports the main verb and names nothing.' },
            ],
          },
          {
            id: 'eng-nouns-pronouns-q2',
            difficulty: 'medium',
            text: 'Which word is a pronoun in the sentence "Ahmed lost his book"?',
            options: [
              { id: 'a', text: 'Ahmed', misconception: 'noun-is-pronoun', feedback: 'Ahmed is a name, so it is a noun, not a pronoun.' },
              { id: 'b', text: 'book', misconception: 'noun-is-pronoun', feedback: 'Book names a thing, so it is a noun. A pronoun takes the place of a noun.' },
              { id: 'c', text: 'his', correct: true },
              { id: 'd', text: 'lost', misconception: 'verb-is-pronoun', feedback: 'Lost is an action word, a verb. Pronouns are words like he, she, his and they.' },
            ],
          },
          {
            id: 'eng-nouns-pronouns-q3',
            difficulty: 'hard',
            text: 'Choose the sentence where the pronoun is used correctly.',
            options: [
              { id: 'a', text: 'Me is going to school.', misconception: 'wrong-pronoun-case', feedback: 'At the start of a sentence we need the subject pronoun I, not me.' },
              { id: 'b', text: 'Her is my best friend.', misconception: 'wrong-pronoun-case', feedback: 'Her shows possession or works as an object. The subject here should be She.' },
              { id: 'c', text: 'They are playing in the park.', correct: true },
              { id: 'd', text: 'Us are happy today.', misconception: 'wrong-pronoun-case', feedback: 'Us is an object pronoun. The subject of this sentence should be We.' },
            ],
          },
        ],
      },
      {
        id: 'eng-verbs',
        title: 'Verbs',
        keywords: ['verb', 'action', 'doing word', 'state'],
        card: {
          points: [
            'A verb is an action word. It tells what someone or something does.',
            'Run, eat, write and play are verbs.',
            'Some verbs show a state, not an action, like is, am, are and seem.',
            'Every complete sentence needs a verb.',
          ],
          example: 'The children play cricket in the evening.',
        },
        questions: [
          {
            id: 'eng-verbs-q1',
            difficulty: 'easy',
            text: 'Which word is the verb in the sentence "Birds fly in the sky"?',
            options: [
              { id: 'a', text: 'birds', misconception: 'noun-is-verb', feedback: 'Birds is a naming word, a noun. A verb shows an action.' },
              { id: 'b', text: 'fly', correct: true },
              { id: 'c', text: 'sky', misconception: 'noun-is-verb', feedback: 'Sky names a place, so it is a noun, not a verb.' },
              { id: 'd', text: 'in', misconception: 'preposition-is-verb', feedback: 'In is a preposition. It shows position and is not an action.' },
            ],
          },
          {
            id: 'eng-verbs-q2',
            difficulty: 'medium',
            text: 'Which sentence has a verb that shows a state, not an action?',
            options: [
              { id: 'a', text: 'She runs to school.', misconception: 'action-state-same', feedback: 'Runs shows a clear action. A state verb does not show movement.' },
              { id: 'b', text: 'He is happy.', correct: true },
              { id: 'c', text: 'They eat mangoes.', misconception: 'action-state-same', feedback: 'Eat is an action verb. A state verb like is shows a condition.' },
              { id: 'd', text: 'The dog barks loudly.', misconception: 'action-state-same', feedback: 'Barks is an action the dog does. Look for a verb like is or seems.' },
            ],
          },
          {
            id: 'eng-verbs-q3',
            difficulty: 'hard',
            text: 'Which group contains only verbs?',
            options: [
              { id: 'a', text: 'run, table, happy', misconception: 'mixed-word-groups', feedback: 'Table is a noun and happy is an adjective, so this group is not all verbs.' },
              { id: 'b', text: 'sing, dance, write', correct: true },
              { id: 'c', text: 'quickly, jump, book', misconception: 'mixed-word-groups', feedback: 'Quickly is an adverb and book is a noun here, so this group has non-verbs.' },
              { id: 'd', text: 'she, read, under', misconception: 'mixed-word-groups', feedback: 'She is a pronoun and under is a preposition, so this group is not all verbs.' },
            ],
          },
        ],
      },
      {
        id: 'eng-adjectives-adverbs',
        title: 'Adjectives and Adverbs',
        keywords: ['adjective', 'adverb', 'describe', 'quality', 'ly'],
        card: {
          points: [
            'An adjective describes a noun. It tells what kind, how many or which one.',
            'Big, red, three and this are adjectives.',
            'An adverb describes a verb. It tells how, when or where an action happens.',
            'Many adverbs end in -ly, like quickly, slowly and happily.',
          ],
          example: 'The tall boy ran quickly to catch the bus.',
        },
        questions: [
          {
            id: 'eng-adjectives-adverbs-q1',
            difficulty: 'easy',
            text: 'In the sentence "She has a red bag", which word is the adjective?',
            options: [
              { id: 'a', text: 'she', misconception: 'pronoun-is-adjective', feedback: 'She is a pronoun. An adjective describes a noun.' },
              { id: 'b', text: 'has', misconception: 'verb-is-adjective', feedback: 'Has is a verb. Look for the word that describes the bag.' },
              { id: 'c', text: 'red', correct: true },
              { id: 'd', text: 'bag', misconception: 'noun-is-adjective', feedback: 'Bag is the noun itself. The adjective tells us more about the bag.' },
            ],
          },
          {
            id: 'eng-adjectives-adverbs-q2',
            difficulty: 'medium',
            text: 'In the sentence "He speaks softly", the word softly is:',
            options: [
              { id: 'a', text: 'an adjective, because it describes He', misconception: 'adverb-describes-noun', feedback: 'Softly describes how he speaks, the action. Words that describe verbs are adverbs.' },
              { id: 'b', text: 'an adverb, because it describes how he speaks', correct: true },
              { id: 'c', text: 'a verb, because it comes after speaks', misconception: 'position-makes-verb', feedback: 'A word is not a verb just because of its position. Softly adds information about the action.' },
              { id: 'd', text: 'a noun, because it ends in -ly', misconception: 'ly-makes-noun', feedback: 'Words ending in -ly are usually adverbs, not nouns.' },
            ],
          },
          {
            id: 'eng-adjectives-adverbs-q3',
            difficulty: 'hard',
            text: 'Choose the sentence that has both an adjective and an adverb.',
            options: [
              { id: 'a', text: 'The cat sleeps.', misconception: 'missing-describing-words', feedback: 'This sentence has no describing words at all.' },
              { id: 'b', text: 'The small cat sleeps quietly.', correct: true },
              { id: 'c', text: 'Ali reads a book daily.', misconception: 'missing-describing-words', feedback: 'Daily is an adverb, but there is no adjective describing a noun here.' },
              { id: 'd', text: 'She is a good singer.', misconception: 'missing-describing-words', feedback: 'Good is an adjective, but this sentence has no adverb.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eng-tenses',
    title: 'Tenses',
    concepts: [
      {
        id: 'eng-present-tenses',
        title: 'Present Simple and Continuous',
        keywords: ['present simple', 'present continuous', 'habit', 'now'],
        card: {
          points: [
            'The present simple tense is used for habits and facts: "She reads daily."',
            'With he, she or it, add -s to the verb in present simple: "He plays."',
            'The present continuous tense is used for actions happening now: "She is reading."',
            'Present continuous = is, am or are + verb-ing.',
          ],
          example: 'Ali plays football every Sunday, but today he is resting.',
        },
        questions: [
          {
            id: 'eng-present-tenses-q1',
            difficulty: 'easy',
            text: 'Choose the correct sentence in the present simple tense.',
            options: [
              { id: 'a', text: 'He play cricket.', misconception: 'missing-third-person-s', feedback: 'With he, she or it, the verb takes -s in present simple: He plays.' },
              { id: 'b', text: 'He plays cricket.', correct: true },
              { id: 'c', text: 'He playing cricket.', misconception: 'missing-helping-verb', feedback: 'Playing alone is not a complete verb form. We need plays, or is playing.' },
              { id: 'd', text: 'He is play cricket.', misconception: 'mixed-tense-form', feedback: 'Is cannot join the base verb play like this. Say He plays or He is playing.' },
            ],
          },
          {
            id: 'eng-present-tenses-q2',
            difficulty: 'medium',
            text: '"Look! The baby ___ crying." Choose the correct verb.',
            options: [
              { id: 'a', text: 'is', correct: true },
              { id: 'b', text: 'are', misconception: 'wrong-helping-verb', feedback: 'Baby is one person, so we use is, not are.' },
              { id: 'c', text: 'cries', misconception: 'double-verb-form', feedback: 'Crying is already in the sentence, so we need a helping verb, not another main verb.' },
              { id: 'd', text: 'am', misconception: 'wrong-helping-verb', feedback: 'Am is used only with I. With the baby we use is.' },
            ],
          },
          {
            id: 'eng-present-tenses-q3',
            difficulty: 'hard',
            text: 'Which sentence is in the present continuous tense?',
            options: [
              { id: 'a', text: 'They watch TV every night.', misconception: 'habit-is-continuous', feedback: 'Every night shows a habit, so this is present simple, not continuous.' },
              { id: 'b', text: 'They are watching TV now.', correct: true },
              { id: 'c', text: 'They watched TV yesterday.', misconception: 'past-is-continuous', feedback: 'Watched shows a finished past action. It is past simple.' },
              { id: 'd', text: 'They will watch TV tomorrow.', misconception: 'future-is-continuous', feedback: 'Will watch shows a future action, not a present one.' },
            ],
          },
        ],
      },
      {
        id: 'eng-past-tenses',
        title: 'Past Simple and Continuous',
        keywords: ['past simple', 'past continuous', 'was doing', 'yesterday', 'went'],
        card: {
          points: [
            'The past simple tense is used for actions that finished in the past: "We visited Lahore."',
            'Regular verbs add -ed in past simple: play becomes played, watch becomes watched.',
            'The past continuous tense shows an action that was going on at a past time: "We were playing."',
            'Past continuous = was or were + verb-ing.',
          ],
          example: 'It was raining when we reached home yesterday.',
        },
        questions: [
          {
            id: 'eng-past-tenses-q1',
            difficulty: 'easy',
            text: 'Choose the past simple form of the verb "go".',
            options: [
              { id: 'a', text: 'goed', misconception: 'regular-ed-everywhere', feedback: 'Go is an irregular verb. Its past form is went, not goed.' },
              { id: 'b', text: 'went', correct: true },
              { id: 'c', text: 'gone', misconception: 'participle-is-past', feedback: 'Gone is used with has or have, like has gone. The simple past of go is went.' },
              { id: 'd', text: 'going', misconception: 'ing-is-past', feedback: 'Going is the -ing form, used in continuous tenses, not as the simple past.' },
            ],
          },
          {
            id: 'eng-past-tenses-q2',
            difficulty: 'medium',
            text: '"She ___ a letter last night." Choose the correct verb.',
            options: [
              { id: 'a', text: 'writes', misconception: 'present-for-past', feedback: 'Last night shows past time, so we need a past form, not writes.' },
              { id: 'b', text: 'wrote', correct: true },
              { id: 'c', text: 'is writing', misconception: 'continuous-for-finished', feedback: 'The letter was finished last night, so past simple wrote is right, not is writing.' },
              { id: 'd', text: 'write', misconception: 'base-form-is-past', feedback: 'Write is the base form. For a finished past action we use wrote.' },
            ],
          },
          {
            id: 'eng-past-tenses-q3',
            difficulty: 'hard',
            text: 'Which sentence is in the past continuous tense?',
            options: [
              { id: 'a', text: 'He slept early.', misconception: 'past-simple-is-continuous', feedback: 'Slept is past simple. Continuous needs was or were with verb-ing.' },
              { id: 'b', text: 'He was sleeping at 9 pm.', correct: true },
              { id: 'c', text: 'He sleeps early daily.', misconception: 'present-is-past-continuous', feedback: 'Sleeps daily is present simple, not past continuous.' },
              { id: 'd', text: 'He has slept well.', misconception: 'perfect-is-continuous', feedback: 'Has slept is present perfect. Past continuous uses was or were + verb-ing.' },
            ],
          },
        ],
      },
      {
        id: 'eng-future-forms',
        title: 'Future Forms',
        keywords: ['future', 'will', 'going to', 'tomorrow', 'plan'],
        card: {
          points: [
            'We use will to talk about future actions: "I will help you."',
            'Will is followed by the base verb, without to: "She will come."',
            'We use going to for plans already decided: "We are going to visit Karachi."',
            'Words like tomorrow, next week and soon often show future time.',
          ],
          example: 'Tomorrow we will travel to Multan, and we are going to meet our cousins.',
        },
        questions: [
          {
            id: 'eng-future-forms-q1',
            difficulty: 'easy',
            text: 'Choose the correct future sentence.',
            options: [
              { id: 'a', text: 'I will helps you.', misconception: 's-after-will', feedback: 'After will, the verb stays in its base form: I will help you.' },
              { id: 'b', text: 'I will help you.', correct: true },
              { id: 'c', text: 'I will to help you.', misconception: 'to-after-will', feedback: 'We do not use to after will. Say: I will help you.' },
              { id: 'd', text: 'I am will help you.', misconception: 'extra-helping-verb', feedback: 'Am and will cannot be used together like this. Use only will before the verb.' },
            ],
          },
          {
            id: 'eng-future-forms-q2',
            difficulty: 'medium',
            text: 'Which sentence shows a plan that is already decided?',
            options: [
              { id: 'a', text: 'Maybe I will buy a cycle someday.', misconception: 'wish-is-plan', feedback: 'Maybe and someday show a wish, not a decided plan.' },
              { id: 'b', text: 'We are going to buy a cycle on Saturday.', correct: true },
              { id: 'c', text: 'I bought a cycle last year.', misconception: 'past-is-future-plan', feedback: 'Bought last year is a past action, not a future plan.' },
              { id: 'd', text: 'She buys a cycle every year.', misconception: 'habit-is-plan', feedback: 'Buys every year shows a habit in present simple, not a plan.' },
            ],
          },
          {
            id: 'eng-future-forms-q3',
            difficulty: 'hard',
            text: '"Watch out! You ___ drop the glass." Choose the best verb form.',
            options: [
              { id: 'a', text: 'are going to', correct: true },
              { id: 'b', text: 'dropped', misconception: 'past-for-future-warning', feedback: 'Dropped is past. The glass has not fallen yet, so we need a future form.' },
              { id: 'c', text: 'drop yesterday', misconception: 'past-for-future-warning', feedback: 'Yesterday cannot go with a warning about something that is about to happen now.' },
              { id: 'd', text: 'drops daily', misconception: 'habit-is-plan', feedback: 'Drops daily shows a habit. Here we warn about something that is about to happen.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eng-voice',
    title: 'Active and Passive Voice',
    concepts: [
      {
        id: 'eng-what-is-voice',
        title: 'What Voice Means',
        keywords: ['active voice', 'passive voice', 'subject', 'doer'],
        card: {
          points: [
            'In the active voice, the subject does the action: "The boy kicked the ball."',
            'In the passive voice, the subject receives the action: "The ball was kicked."',
            'Passive voice is formed with be + past participle, like was written or is made.',
            'We use passive voice when the action matters more than the doer.',
          ],
          example: 'The teacher praised Ali. (active) Ali was praised by the teacher. (passive)',
        },
        questions: [
          {
            id: 'eng-what-is-voice-q1',
            difficulty: 'easy',
            text: 'Which sentence is in the active voice?',
            options: [
              { id: 'a', text: 'The letter was written by Sara.', misconception: 'passive-looks-active', feedback: 'Was written shows the letter received the action, so this is passive voice.' },
              { id: 'b', text: 'Sara wrote the letter.', correct: true },
              { id: 'c', text: 'The window was broken.', misconception: 'passive-looks-active', feedback: 'The window did not do the action; it received it. This is passive voice.' },
              { id: 'd', text: 'The cake is baked by mother.', misconception: 'passive-looks-active', feedback: 'Is baked with by shows passive voice, even in the present tense.' },
            ],
          },
          {
            id: 'eng-what-is-voice-q2',
            difficulty: 'medium',
            text: 'In the passive sentence "The room was cleaned", what really happened?',
            options: [
              { id: 'a', text: 'The room did the cleaning itself.', misconception: 'subject-always-doer', feedback: 'In passive voice the subject does not act. Someone cleaned the room.' },
              { id: 'b', text: 'Someone cleaned the room.', correct: true },
              { id: 'c', text: 'The room cleans itself every day.', misconception: 'subject-always-doer', feedback: 'Rooms cannot clean themselves. The doer is simply not named in passive voice.' },
              { id: 'd', text: 'Nothing happened to the room.', misconception: 'passive-means-nothing', feedback: 'The action did happen; only the doer is not named.' },
            ],
          },
          {
            id: 'eng-what-is-voice-q3',
            difficulty: 'hard',
            text: 'Why do we often use the passive voice in news and science reports?',
            options: [
              { id: 'a', text: 'Because the doer is always unknown in science.', misconception: 'passive-only-unknown', feedback: 'The doer may be known. Passive is used because the action or result matters more.' },
              { id: 'b', text: 'Because passive sentences are always shorter.', misconception: 'passive-always-shorter', feedback: 'Passive sentences are often longer, not shorter. Length is not the reason.' },
              { id: 'c', text: 'Because the action or result is more important than the doer.', correct: true },
              { id: 'd', text: 'Because active voice is wrong in reports.', misconception: 'active-is-wrong', feedback: 'Active voice is not wrong. Both voices are correct; we choose as needed.' },
            ],
          },
        ],
      },
      {
        id: 'eng-passive-present-past',
        title: 'Passive in Present and Past',
        keywords: ['passive present', 'passive past', 'is made', 'was built'],
        card: {
          points: [
            'Present passive: is or are + past participle. "Bread is made from flour."',
            'Past passive: was or were + past participle. "The bridge was built in 1990."',
            'Use is with singular subjects and are with plural subjects.',
            'Use was with singular subjects and were with plural subjects.',
          ],
          example: 'Cars are repaired here. The old car was repaired yesterday.',
        },
        questions: [
          {
            id: 'eng-passive-present-past-q1',
            difficulty: 'easy',
            text: 'Choose the correct present passive sentence.',
            options: [
              { id: 'a', text: 'Rice is grow in Sindh.', misconception: 'base-form-in-passive', feedback: 'Passive needs the past participle: is grown, not is grow.' },
              { id: 'b', text: 'Rice is grown in Sindh.', correct: true },
              { id: 'c', text: 'Rice grows is in Sindh.', misconception: 'scrambled-passive', feedback: 'Grows is is not a correct form. Use is + past participle: is grown.' },
              { id: 'd', text: 'Rice are grown in Sindh.', misconception: 'agreement-in-passive', feedback: 'Rice is treated as singular here, so we use is grown, not are grown.' },
            ],
          },
          {
            id: 'eng-passive-present-past-q2',
            difficulty: 'medium',
            text: 'Choose the correct past passive sentence.',
            options: [
              { id: 'a', text: 'The match was win by our team.', misconception: 'base-form-in-passive', feedback: 'After was we need the past participle won, not the base form win.' },
              { id: 'b', text: 'The match were won by our team.', misconception: 'agreement-in-passive', feedback: 'Match is singular, so we use was won, not were won.' },
              { id: 'c', text: 'The match was won by our team.', correct: true },
              { id: 'd', text: 'The match is won by our team yesterday.', misconception: 'present-for-past-passive', feedback: 'Yesterday shows past time, so we need was won, not is won.' },
            ],
          },
          {
            id: 'eng-passive-present-past-q3',
            difficulty: 'hard',
            text: '"The windows ___ cleaned every week." Choose the correct verb.',
            options: [
              { id: 'a', text: 'is', misconception: 'agreement-in-passive', feedback: 'Windows is plural, so the helping verb must be are, not is.' },
              { id: 'b', text: 'are', correct: true },
              { id: 'c', text: 'was', misconception: 'agreement-in-passive', feedback: 'Was is singular and past. Windows is plural, and the action repeats every week.' },
              { id: 'd', text: 'cleans', misconception: 'active-for-passive-blank', feedback: 'Cleaned is already the main verb in this sentence. We need a be-verb before it: are cleaned.' },
            ],
          },
        ],
      },
      {
        id: 'eng-changing-to-passive',
        title: 'Changing Active to Passive',
        keywords: ['change voice', 'by', 'object', 'subject', 'participle'],
        card: {
          points: [
            'To change active to passive, the object of the active sentence becomes the subject.',
            'Keep the same tense: wrote (past) becomes was written.',
            'Use be + past participle of the main verb.',
            'The doer can be added at the end with by, or dropped if it is not needed.',
          ],
          example: 'Active: She made a cake. Passive: A cake was made by her.',
        },
        questions: [
          {
            id: 'eng-changing-to-passive-q1',
            difficulty: 'easy',
            text: 'Change into passive voice: "Ali eats an apple."',
            options: [
              { id: 'a', text: 'An apple is eaten by Ali.', correct: true },
              { id: 'b', text: 'An apple is eat by Ali.', misconception: 'base-form-in-passive', feedback: 'Passive needs the past participle eaten, not the base form eat.' },
              { id: 'c', text: 'An apple was eaten by Ali.', misconception: 'tense-changes-in-passive', feedback: 'Eats is present tense, so the passive must stay in the present: is eaten.' },
              { id: 'd', text: 'Ali is eaten by an apple.', misconception: 'subject-object-swapped-wrong', feedback: 'An apple cannot eat Ali. The object, an apple, becomes the subject, and Ali stays the doer.' },
            ],
          },
          {
            id: 'eng-changing-to-passive-q2',
            difficulty: 'medium',
            text: 'Change into passive voice: "They built a new school."',
            options: [
              { id: 'a', text: 'A new school is built by them.', misconception: 'tense-changes-in-passive', feedback: 'Built is past tense, so the passive must use was built, not is built.' },
              { id: 'b', text: 'A new school was built by them.', correct: true },
              { id: 'c', text: 'A new school was build by them.', misconception: 'base-form-in-passive', feedback: 'After was we need the past participle built, not build.' },
              { id: 'd', text: 'They were built by a new school.', misconception: 'subject-object-swapped-wrong', feedback: 'The school is the thing that was built. It must become the subject of the passive sentence.' },
            ],
          },
          {
            id: 'eng-changing-to-passive-q3',
            difficulty: 'hard',
            text: 'Change into passive voice: "The cat chased the mouse."',
            options: [
              { id: 'a', text: 'The mouse was chased by the cat.', correct: true },
              { id: 'b', text: 'The mouse is chased by the cat.', misconception: 'tense-changes-in-passive', feedback: 'Chased is past tense. The passive must keep the past tense: was chased.' },
              { id: 'c', text: 'The mouse was chase by the cat.', misconception: 'base-form-in-passive', feedback: 'Chase is the base form. Passive needs the past participle chased.' },
              { id: 'd', text: 'The cat was chased by the mouse.', misconception: 'subject-object-swapped-wrong', feedback: 'The mouse was the one being chased, so the mouse becomes the subject.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eng-sentences-punctuation',
    title: 'Sentences and Punctuation',
    concepts: [
      {
        id: 'eng-types-of-sentences',
        title: 'Types of Sentences',
        keywords: ['statement', 'question', 'command', 'exclamation'],
        card: {
          points: [
            'A statement gives information and ends with a full stop: "The sun rises in the east."',
            'A question asks something and ends with a question mark: "Where do you live?"',
            'A command gives an order or a request: "Please close the door."',
            'An exclamation shows strong feeling and ends with an exclamation mark: "What a beautiful day!"',
          ],
          example: 'Please open your books. This is a command.',
        },
        questions: [
          {
            id: 'eng-types-of-sentences-q1',
            difficulty: 'easy',
            text: '"What is your name?" is which type of sentence?',
            options: [
              { id: 'a', text: 'A statement', misconception: 'question-is-statement', feedback: 'This sentence asks something, so it is a question, not a statement.' },
              { id: 'b', text: 'A question', correct: true },
              { id: 'c', text: 'A command', misconception: 'question-is-command', feedback: 'A command orders someone to do something. This sentence only asks.' },
              { id: 'd', text: 'An exclamation', misconception: 'question-is-exclamation', feedback: 'An exclamation shows strong feeling and ends with an exclamation mark, not a question mark.' },
            ],
          },
          {
            id: 'eng-types-of-sentences-q2',
            difficulty: 'medium',
            text: 'Which sentence is a command?',
            options: [
              { id: 'a', text: 'The door is open.', misconception: 'statement-is-command', feedback: 'This only gives information. A command tells someone to do something.' },
              { id: 'b', text: 'Is the door open?', misconception: 'question-is-command', feedback: 'This asks a question. It does not order or request an action.' },
              { id: 'c', text: 'Please shut the door.', correct: true },
              { id: 'd', text: 'What a big door it is!', misconception: 'exclamation-is-command', feedback: 'This shows surprise. It does not tell anyone to do anything.' },
            ],
          },
          {
            id: 'eng-types-of-sentences-q3',
            difficulty: 'hard',
            text: 'Choose the correctly matched pair.',
            options: [
              { id: 'a', text: 'Statement: "Where are you going?"', misconception: 'type-mismatch', feedback: 'A sentence that asks something and ends with a question mark is a question, not a statement.' },
              { id: 'b', text: 'Question: "Close the window."', misconception: 'type-mismatch', feedback: 'Close the window orders an action, so it is a command, not a question.' },
              { id: 'c', text: 'Exclamation: "What a lovely flower!"', correct: true },
              { id: 'd', text: 'Command: "The train is late."', misconception: 'type-mismatch', feedback: 'The train is late only gives information. It is a statement.' },
            ],
          },
        ],
      },
      {
        id: 'eng-punctuation-marks',
        title: 'Punctuation Marks',
        keywords: ['full stop', 'comma', 'question mark', 'capital letter'],
        card: {
          points: [
            'A full stop (.) ends a statement or a command.',
            'A question mark (?) ends a question.',
            'A comma (,) shows a short pause and separates items in a list.',
            'Every sentence begins with a capital letter.',
          ],
          example: 'We bought apples, bananas and oranges from the market.',
        },
        questions: [
          {
            id: 'eng-punctuation-marks-q1',
            difficulty: 'easy',
            text: 'Choose the correctly punctuated sentence.',
            options: [
              { id: 'a', text: 'where do you live', misconception: 'missing-punctuation', feedback: 'A question needs a capital letter at the start and a question mark at the end.' },
              { id: 'b', text: 'Where do you live?', correct: true },
              { id: 'c', text: 'Where do you live.', misconception: 'full-stop-for-question', feedback: 'A question ends with a question mark, not a full stop.' },
              { id: 'd', text: 'where do you live?', misconception: 'missing-capital', feedback: 'Every sentence must begin with a capital letter: Where.' },
            ],
          },
          {
            id: 'eng-punctuation-marks-q2',
            difficulty: 'medium',
            text: 'Where should the comma go in the sentence "I like tea coffee and juice"?',
            options: [
              { id: 'a', text: 'I like tea, coffee and juice.', correct: true },
              { id: 'b', text: 'I, like tea coffee and juice.', misconception: 'comma-after-subject', feedback: 'We do not put a comma between the subject I and the verb like.' },
              { id: 'c', text: 'I like, tea coffee and juice.', misconception: 'comma-after-verb', feedback: 'A comma does not come right after the verb like in this list.' },
              { id: 'd', text: 'I like tea coffee and, juice.', misconception: 'comma-before-and-only', feedback: 'In a list, commas separate the items. A comma is not placed before and in this way.' },
            ],
          },
          {
            id: 'eng-punctuation-marks-q3',
            difficulty: 'hard',
            text: 'Choose the sentence with correct punctuation.',
            options: [
              { id: 'a', text: 'Hurry up, we are getting late!', correct: true },
              { id: 'b', text: 'hurry up. We are getting late?', misconception: 'question-mark-misuse', feedback: 'The first word needs a capital letter, and a statement does not end with a question mark.' },
              { id: 'c', text: 'Hurry up we are getting late.', misconception: 'missing-punctuation', feedback: 'Two ideas are joined with no pause mark at all. A comma or a full stop is needed.' },
              { id: 'd', text: 'Hurry up? We are getting late', misconception: 'question-mark-for-command', feedback: 'Hurry up is a command, not a question, and the last sentence needs an end mark.' },
            ],
          },
        ],
      },
      {
        id: 'eng-subject-verb-agreement',
        title: 'Subject-Verb Agreement',
        keywords: ['agreement', 'singular', 'plural', 'he goes', 'they go'],
        card: {
          points: [
            'A singular subject takes a singular verb: "He goes to school."',
            'A plural subject takes a plural verb: "They go to school."',
            'In present simple, add -s to the verb with he, she, it or one name.',
            'With I and you, the verb stays in its base form: "I go", "You go".',
          ],
          example: 'My brother plays hockey, but my friends play football.',
        },
        questions: [
          {
            id: 'eng-subject-verb-agreement-q1',
            difficulty: 'easy',
            text: 'Choose the correct sentence.',
            options: [
              { id: 'a', text: 'She go to school daily.', misconception: 'missing-third-person-s', feedback: 'With she, the verb takes -s: She goes to school.' },
              { id: 'b', text: 'She goes to school daily.', correct: true },
              { id: 'c', text: 'She going to school daily.', misconception: 'missing-helping-verb', feedback: 'Going alone is incomplete. Use goes, or is going with a helping verb.' },
              { id: 'd', text: 'She gone to school daily.', misconception: 'participle-as-verb', feedback: 'Gone cannot stand alone as the main verb here. Use goes.' },
            ],
          },
          {
            id: 'eng-subject-verb-agreement-q2',
            difficulty: 'medium',
            text: '"The list of names ___ on the table." Choose the correct verb.',
            options: [
              { id: 'a', text: 'are', misconception: 'nearest-noun-agreement', feedback: 'The subject is list, which is singular. Names is only part of the phrase that follows it.' },
              { id: 'b', text: 'is', correct: true },
              { id: 'c', text: 'were', misconception: 'nearest-noun-agreement', feedback: 'Were is plural and past. The subject list is singular, so use is.' },
              { id: 'd', text: 'have', misconception: 'plural-verb-singular-subject', feedback: 'Have goes with plural subjects. The subject here is the singular word list.' },
            ],
          },
          {
            id: 'eng-subject-verb-agreement-q3',
            difficulty: 'hard',
            text: 'Which sentence has correct subject-verb agreement?',
            options: [
              { id: 'a', text: 'My friends was late yesterday.', misconception: 'plural-subject-singular-verb', feedback: 'Friends is plural, so the verb should be were, not was.' },
              { id: 'b', text: 'Each student have a book.', misconception: 'each-takes-plural', feedback: 'Each is treated as singular, so the verb should be has, not have.' },
              { id: 'c', text: 'The teacher and the student are in class.', correct: true },
              { id: 'd', text: 'Ten rupees are a small amount.', misconception: 'amount-takes-plural', feedback: 'Ten rupees as one amount is treated as singular, so we say is a small amount.' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'eng-words-reading',
    title: 'Words and Reading',
    concepts: [
      {
        id: 'eng-synonyms-antonyms',
        title: 'Synonyms and Antonyms',
        keywords: ['synonym', 'antonym', 'same meaning', 'opposite'],
        card: {
          points: [
            'Synonyms are words with the same or nearly the same meaning: happy and glad.',
            'Antonyms are words with opposite meanings: hot and cold.',
            'Synonyms make our writing richer and less boring.',
            'Always read the full sentence, because one word can have many meanings.',
          ],
          example: 'Begin and start are synonyms. Both fit in the sentence "Let us begin the lesson".',
        },
        questions: [
          {
            id: 'eng-synonyms-antonyms-q1',
            difficulty: 'easy',
            text: 'Which word is a synonym of "big"?',
            options: [
              { id: 'a', text: 'large', correct: true },
              { id: 'b', text: 'small', misconception: 'antonym-as-synonym', feedback: 'Small is the opposite of big. A synonym has a similar meaning.' },
              { id: 'c', text: 'tiny', misconception: 'antonym-as-synonym', feedback: 'Tiny means very small, which is the opposite of big.' },
              { id: 'd', text: 'thin', misconception: 'unrelated-word-as-synonym', feedback: 'Thin describes width, not size. Large has nearly the same meaning as big.' },
            ],
          },
          {
            id: 'eng-synonyms-antonyms-q2',
            difficulty: 'medium',
            text: 'Which pair shows antonyms?',
            options: [
              { id: 'a', text: 'happy - glad', misconception: 'synonym-as-antonym', feedback: 'Happy and glad have nearly the same meaning, so they are synonyms.' },
              { id: 'b', text: 'begin - start', misconception: 'synonym-as-antonym', feedback: 'Begin and start mean the same thing. Antonyms must be opposites.' },
              { id: 'c', text: 'day - night', correct: true },
              { id: 'd', text: 'fast - quick', misconception: 'synonym-as-antonym', feedback: 'Fast and quick are synonyms. Look for a pair with opposite meanings.' },
            ],
          },
          {
            id: 'eng-synonyms-antonyms-q3',
            difficulty: 'hard',
            text: 'Choose the best synonym for "brave" in the sentence "The brave soldier saved the child."',
            options: [
              { id: 'a', text: 'afraid', misconception: 'antonym-as-synonym', feedback: 'Afraid is the opposite of brave, so it changes the meaning of the sentence.' },
              { id: 'b', text: 'courageous', correct: true },
              { id: 'c', text: 'weak', misconception: 'antonym-as-synonym', feedback: 'Weak is opposite in spirit to brave. A synonym must keep the meaning.' },
              { id: 'd', text: 'silent', misconception: 'unrelated-word-as-synonym', feedback: 'Silent is about making no sound. It does not mean brave.' },
            ],
          },
        ],
      },
      {
        id: 'eng-homophones',
        title: 'Homophones',
        keywords: ['homophone', 'same sound', 'their', 'there', 'to', 'too', 'two'],
        card: {
          points: [
            'Homophones are words that sound the same but have different meanings and spellings.',
            'Examples: to, too and two; there and their; sea and see.',
            'Choosing the wrong homophone changes the meaning of a sentence.',
            'Read the full sentence to pick the correct word.',
          ],
          example: 'I can see the sea from my window. See and sea sound the same.',
        },
        questions: [
          {
            id: 'eng-homophones-q1',
            difficulty: 'easy',
            text: '"We ___ the sea from our roof." Choose the correct word.',
            options: [
              { id: 'a', text: 'see', correct: true },
              { id: 'b', text: 'sea', misconception: 'homophone-confusion', feedback: 'Sea is a large body of water. The word for using your eyes is see.' },
              { id: 'c', text: 'seen', misconception: 'participle-alone', feedback: 'Seen needs a helping verb like have. The simple word here is see.' },
              { id: 'd', text: 'sees', misconception: 'agreement-mismatch', feedback: 'With we, the verb does not take -s. Use see.' },
            ],
          },
          {
            id: 'eng-homophones-q2',
            difficulty: 'medium',
            text: 'Choose the correct sentence.',
            options: [
              { id: 'a', text: 'Their going to school.', misconception: 'their-there-theyre', feedback: "Their shows possession. For 'they are' we write they're." },
              { id: 'b', text: 'They are playing in there room.', misconception: 'their-there-theyre', feedback: 'There shows a place. For possession we need their room.' },
              { id: 'c', text: 'The books are over there.', correct: true },
              { id: 'd', text: 'There bag is on the table.', misconception: 'their-there-theyre', feedback: 'There points to a place. The bag belongs to someone, so we need their.' },
            ],
          },
          {
            id: 'eng-homophones-q3',
            difficulty: 'hard',
            text: '"I have ___ brothers, and I love them ___ much." Choose the pair of words that fills both blanks correctly.',
            options: [
              { id: 'a', text: 'two, too', correct: true },
              { id: 'b', text: 'too, two', misconception: 'to-too-two-mixup', feedback: 'The first blank needs a number, two. The second blank needs too, which means very.' },
              { id: 'c', text: 'to, two', misconception: 'to-too-two-mixup', feedback: 'To is used for direction or before a verb. These blanks need two and too.' },
              { id: 'd', text: 'two, to', misconception: 'to-too-two-mixup', feedback: 'Two is right for the number, but the second blank needs too, not to.' },
            ],
          },
        ],
      },
      {
        id: 'eng-reading-and-letter',
        title: 'Reading and Formal Letters',
        keywords: ['reading', 'main idea', 'formal letter', 'application', 'passage'],
        card: {
          points: [
            'Reading comprehension means understanding what a passage says.',
            'First read the whole passage, then read the questions, then find the answers in the passage.',
            'The main idea is what the passage is mostly about.',
            'A formal letter has the sender address, date, subject, salutation, body and a polite closing.',
          ],
          example: 'A leave application begins with the address and date, then the line "Subject: Application for leave".',
        },
        questions: [
          {
            id: 'eng-reading-and-letter-q1',
            difficulty: 'easy',
            text: 'Read the passage: "Bees help plants grow. They carry pollen from flower to flower." What is the main idea of the passage?',
            options: [
              { id: 'a', text: 'Bees are yellow and black.', misconception: 'detail-as-main-idea', feedback: 'The passage says nothing about colours. The main idea is what the whole passage is about.' },
              { id: 'b', text: 'Bees help plants grow.', correct: true },
              { id: 'c', text: 'Flowers are beautiful.', misconception: 'detail-as-main-idea', feedback: 'Flowers are mentioned, but the passage is about how bees help plants.' },
              { id: 'd', text: 'Plants grow in gardens.', misconception: 'detail-as-main-idea', feedback: 'Gardens are not mentioned at all. Always answer from the passage.' },
            ],
          },
          {
            id: 'eng-reading-and-letter-q2',
            difficulty: 'medium',
            text: 'Which line belongs in a formal letter to your headmaster?',
            options: [
              { id: 'a', text: 'Hey Sir, I need a day off!', misconception: 'informal-in-formal', feedback: 'Hey is too informal for a headmaster. A formal letter uses polite words.' },
              { id: 'b', text: 'Respected Sir, I request leave for one day.', correct: true },
              { id: 'c', text: 'Dear buddy, please give me leave.', misconception: 'informal-in-formal', feedback: 'Buddy is used for friends, not for a headmaster in a formal letter.' },
              { id: 'd', text: 'Give me leave tomorrow, okay?', misconception: 'informal-in-formal', feedback: 'This sounds like an order. Formal letters make polite requests.' },
            ],
          },
          {
            id: 'eng-reading-and-letter-q3',
            difficulty: 'hard',
            text: 'Read the passage: "Ali gets up early. He waters the plants and feeds the hens. Then he walks to school." Why does Ali get up early?',
            options: [
              { id: 'a', text: 'Because he waters the plants and feeds the hens before school.', correct: true },
              { id: 'b', text: 'Because he likes the hens more than school.', misconception: 'guess-beyond-passage', feedback: 'The passage never says this. Answers must come from the passage.' },
              { id: 'c', text: 'Because the school is very far away.', misconception: 'guess-beyond-passage', feedback: 'The passage does not say the school is far. Do not add your own ideas.' },
              { id: 'd', text: 'Because he cannot sleep at night.', misconception: 'guess-beyond-passage', feedback: 'Sleep is not mentioned in the passage. Stick to what the passage says.' },
            ],
          },
        ],
      },
    ],
  },
];

export const ENGLISH_MISCONCEPTIONS = {
  'verb-is-noun': { label: 'Mistaking a verb for a noun' },
  'article-is-noun': { label: 'Mistaking an article for a noun' },
  'helping-verb-is-noun': { label: 'Mistaking a helping verb for a noun' },
  'noun-is-pronoun': { label: 'Mistaking a noun for a pronoun' },
  'verb-is-pronoun': { label: 'Mistaking a verb for a pronoun' },
  'wrong-pronoun-case': { label: 'Using the wrong pronoun form' },
  'noun-is-verb': { label: 'Mistaking a noun for a verb' },
  'preposition-is-verb': { label: 'Mistaking a preposition for a verb' },
  'action-state-same': { label: 'Mixing action verbs and state verbs' },
  'mixed-word-groups': { label: 'Picking a group with mixed word classes' },
  'pronoun-is-adjective': { label: 'Mistaking a pronoun for an adjective' },
  'verb-is-adjective': { label: 'Mistaking a verb for an adjective' },
  'noun-is-adjective': { label: 'Mistaking a noun for an adjective' },
  'adverb-describes-noun': { label: 'Thinking an adverb describes a noun' },
  'position-makes-verb': { label: 'Judging a word class by its position' },
  'ly-makes-noun': { label: 'Thinking -ly words are nouns' },
  'missing-describing-words': { label: 'Missing an adjective or an adverb' },
  'missing-third-person-s': { label: 'Forgetting -s with he, she or it' },
  'missing-helping-verb': { label: 'Leaving out the helping verb' },
  'mixed-tense-form': { label: 'Mixing two verb forms wrongly' },
  'wrong-helping-verb': { label: 'Choosing the wrong helping verb' },
  'double-verb-form': { label: 'Using two main verbs together' },
  'habit-is-continuous': { label: 'Taking a habit for a continuous action' },
  'past-is-continuous': { label: 'Taking a past action for present continuous' },
  'future-is-continuous': { label: 'Taking a future action for present continuous' },
  'regular-ed-everywhere': { label: 'Adding -ed to an irregular verb' },
  'participle-is-past': { label: 'Using the participle as the simple past' },
  'ing-is-past': { label: 'Using the -ing form as the past tense' },
  'present-for-past': { label: 'Using a present form for past time' },
  'continuous-for-finished': { label: 'Using continuous for a finished action' },
  'base-form-is-past': { label: 'Using the base form as the past tense' },
  'past-simple-is-continuous': { label: 'Taking past simple for past continuous' },
  'present-is-past-continuous': { label: 'Taking present simple for past continuous' },
  'perfect-is-continuous': { label: 'Taking present perfect for past continuous' },
  's-after-will': { label: 'Adding -s after will' },
  'to-after-will': { label: 'Putting to after will' },
  'extra-helping-verb': { label: 'Adding an extra helping verb' },
  'wish-is-plan': { label: 'Taking a wish for a decided plan' },
  'past-is-future-plan': { label: 'Taking a past action for a future plan' },
  'habit-is-plan': { label: 'Taking a habit for a future plan' },
  'past-for-future-warning': { label: 'Using a past form in a future warning' },
  'passive-looks-active': { label: 'Taking a passive sentence for active' },
  'subject-always-doer': { label: 'Thinking the subject always does the action' },
  'passive-means-nothing': { label: 'Thinking passive means nothing happened' },
  'passive-only-unknown': { label: 'Thinking passive is only for unknown doers' },
  'passive-always-shorter': { label: 'Thinking passive is always shorter' },
  'active-is-wrong': { label: 'Thinking active voice is wrong in reports' },
  'base-form-in-passive': { label: 'Using the base form in passive voice' },
  'scrambled-passive': { label: 'Scrambling the passive form' },
  'agreement-in-passive': { label: 'Wrong be-verb agreement in passive' },
  'present-for-past-passive': { label: 'Using present passive for past time' },
  'active-for-passive-blank': { label: 'Using an active verb where be is needed' },
  'tense-changes-in-passive': { label: 'Changing the tense while making passive' },
  'subject-object-swapped-wrong': { label: 'Swapping subject and object wrongly' },
  'question-is-statement': { label: 'Taking a question for a statement' },
  'question-is-command': { label: 'Taking a question for a command' },
  'question-is-exclamation': { label: 'Taking a question for an exclamation' },
  'statement-is-command': { label: 'Taking a statement for a command' },
  'exclamation-is-command': { label: 'Taking an exclamation for a command' },
  'type-mismatch': { label: 'Matching a sentence with the wrong type' },
  'missing-punctuation': { label: 'Leaving out needed punctuation' },
  'full-stop-for-question': { label: 'Ending a question with a full stop' },
  'missing-capital': { label: 'Forgetting the capital letter' },
  'comma-after-subject': { label: 'Putting a comma after the subject' },
  'comma-after-verb': { label: 'Putting a comma right after the verb' },
  'comma-before-and-only': { label: 'Putting a comma before and in a list' },
  'question-mark-misuse': { label: 'Using a question mark for a statement' },
  'question-mark-for-command': { label: 'Using a question mark for a command' },
  'participle-as-verb': { label: 'Using the participle as the main verb' },
  'nearest-noun-agreement': { label: 'Agreeing the verb with the nearest noun' },
  'plural-verb-singular-subject': { label: 'Using a plural verb with a singular subject' },
  'plural-subject-singular-verb': { label: 'Using a singular verb with a plural subject' },
  'each-takes-plural': { label: 'Treating each as plural' },
  'amount-takes-plural': { label: 'Treating one amount as plural' },
  'antonym-as-synonym': { label: 'Picking an antonym as a synonym' },
  'unrelated-word-as-synonym': { label: 'Picking an unrelated word as a synonym' },
  'synonym-as-antonym': { label: 'Picking a synonym pair as antonyms' },
  'homophone-confusion': { label: 'Confusing two homophones' },
  'participle-alone': { label: 'Using a participle without a helping verb' },
  'agreement-mismatch': { label: 'Subject and verb do not agree' },
  'their-there-theyre': { label: 'Mixing their, there and they are' },
  'to-too-two-mixup': { label: 'Mixing to, too and two' },
  'detail-as-main-idea': { label: 'Taking a detail for the main idea' },
  'informal-in-formal': { label: 'Using informal words in a formal letter' },
  'guess-beyond-passage': { label: 'Guessing beyond the passage' },
};
