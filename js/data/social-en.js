// English mirror of social.js, keyed by the same ids.
// Correct options carry { text } only; wrong options carry { text, feedback }.

export const EN_SOCIAL_TITLE = 'Class 8 Social Studies';

export const EN_SOCIAL_CHAPTERS = {
  'soc-sangram': 'The Freedom Struggle',
  'soc-bhumi-jalvayu': 'Pakistan: Land and Climate',
  'soc-sarkar-nagrikta': 'Government and Citizenship',
  'soc-arthavyavastha': 'The Economy',
  'soc-manchitra-kaushal': 'Map Skills',
};

export const EN_SOCIAL_CONCEPTS = {
  'soc-1857-sangram': {
    title: 'The Revolt of 1857',
    points: [
      'In 1857, Indian soldiers and people rose in a great revolt against the British.',
      'It began on 10 May 1857 at Meerut.',
      'News that new rifle cartridges were greased with cow and pig fat angered the soldiers.',
      'In Delhi, Bahadur Shah Zafar was accepted as the leader of the revolt.',
    ],
    example: 'Village elders still tell how Rani Lakshmibai of Jhansi fought the British bravely in 1857.',
    questions: {
      'soc-1857-sangram-q1': {
        text: 'Where did the Revolt of 1857 begin first?',
        options: {
          a: { text: 'Delhi', feedback: 'Delhi became a centre later. The revolt began at Meerut, and then the soldiers marched to Delhi.' },
          b: { text: 'Meerut' },
          c: { text: 'Jhansi', feedback: 'Rani Lakshmibai fought at Jhansi, but the revolt did not begin there. It began at Meerut.' },
          d: { text: 'Lucknow', feedback: 'Lucknow also became a big centre, but the first start was at Meerut on 10 May 1857.' },
        },
      },
      'soc-1857-sangram-q2': {
        text: 'What was the immediate cause of the Revolt of 1857?',
        options: {
          a: { text: 'The coming of trains', feedback: 'Trains made people uneasy, but the immediate cause was the news about greased cartridges.' },
          b: { text: 'The news that new cartridges were greased with cow and pig fat' },
          c: { text: 'A tax on salt', feedback: 'The Salt March happened in 1930. In 1857 the immediate cause was the greased cartridges.' },
          d: { text: 'The British opening schools', feedback: 'Schools were not the cause. The greased cartridges, bitten open by mouth, angered the soldiers.' },
        },
      },
      'soc-1857-sangram-q3': {
        text: 'What big change came in the rule of India after the Revolt of 1857?',
        options: {
          a: { text: 'India became fully free', feedback: 'Freedom did not come in 1857. It came in 1947.' },
          b: { text: 'France began ruling India', feedback: 'France did not come. Rule passed from the East India Company to the British Crown.' },
          c: { text: 'The East India Company rule ended and rule passed to the British Crown' },
          d: { text: 'The Mughal emperor became strong again', feedback: 'The opposite happened. Bahadur Shah Zafar was sent out of the country and Mughal rule ended.' },
        },
      },
    },
  },
  'soc-muslim-league': {
    title: 'The Freedom Movement and the Muslim League',
    points: [
      'The Muslim League was founded in 1906 in Dhaka.',
      'Its aim was to protect the rights of the Muslims.',
      'On 23 March 1940, the Pakistan Resolution was passed in Lahore.',
      'Quaid-e-Azam Muhammad Ali Jinnah was the great leader of the Muslim League.',
    ],
    example: 'Every year Pakistan Day is celebrated in school on 23 March, because the Lahore Resolution was passed on this day in 1940.',
    questions: {
      'soc-muslim-league-q1': {
        text: 'When was the Muslim League founded?',
        options: {
          a: { text: 'In 1857', feedback: 'The revolt happened in 1857. The Muslim League was formed later, in 1906.' },
          b: { text: 'In 1906' },
          c: { text: 'In 1940', feedback: 'The Lahore Resolution was passed in 1940. The League was founded in 1906 in Dhaka.' },
          d: { text: 'In 1947', feedback: 'Pakistan was created in 1947. The Muslim League had been formed much earlier, in 1906.' },
        },
      },
      'soc-muslim-league-q2': {
        text: 'What did the Lahore Resolution (1940) demand?',
        options: {
          a: { text: 'That the British be allowed to rule for a hundred more years', feedback: 'The Resolution did not ask for more British rule. It demanded a separate country for Muslims.' },
          b: { text: 'More holidays in schools', feedback: 'This was not a school demand. The Resolution demanded a separate Muslim homeland.' },
          c: { text: 'A separate free country for the Muslims' },
          d: { text: 'Only that Lahore city be made the capital', feedback: 'It was not about one city. The Resolution demanded separate free areas for Muslims.' },
        },
      },
      'soc-muslim-league-q3': {
        text: 'Where was the Lahore Resolution passed?',
        options: {
          a: { text: 'In Bagh-e-Jinnah, Karachi', feedback: 'The Resolution was not passed in Karachi. It was passed at Minto Park, Lahore.' },
          b: { text: 'In the Red Fort, Delhi', feedback: 'The Red Fort is in Delhi. The Lahore Resolution was passed at Minto Park in Lahore.' },
          c: { text: 'In a ground in Dhaka', feedback: 'The Muslim League was founded in Dhaka in 1906. The 1940 Resolution was passed in Lahore.' },
          d: { text: 'At Minto Park, Lahore' },
        },
      },
    },
  },
  'soc-pakistan-nirman': {
    title: 'The Creation of Pakistan',
    points: [
      'Pakistan was created on 14 August 1947.',
      'Quaid-e-Azam Muhammad Ali Jinnah became the first Governor-General of Pakistan.',
      'Liaquat Ali Khan became the first Prime Minister of Pakistan.',
      'At that time, Karachi was the capital of Pakistan.',
    ],
    example: 'Every year on 14 August, children put green flags on homes and cars to celebrate the birthday of Pakistan.',
    questions: {
      'soc-pakistan-nirman-q1': {
        text: 'When was Pakistan created?',
        options: {
          a: { text: '14 August 1947' },
          b: { text: '23 March 1940', feedback: 'The Lahore Resolution was passed on 23 March 1940. Pakistan was created on 14 August 1947.' },
          c: { text: '15 August 1947', feedback: '15 August is the day of India. Pakistan was created one day earlier, on 14 August 1947.' },
          d: { text: '14 August 1973', feedback: 'The Constitution of Pakistan was made in 1973. The country was created in 1947.' },
        },
      },
      'soc-pakistan-nirman-q2': {
        text: 'Who was the first Governor-General of Pakistan?',
        options: {
          a: { text: 'Liaquat Ali Khan', feedback: 'Liaquat Ali Khan was the first Prime Minister. The Governor-General was Quaid-e-Azam.' },
          b: { text: 'Lord Mountbatten', feedback: 'Mountbatten became the Governor-General of India. The first Governor-General of Pakistan was Quaid-e-Azam.' },
          c: { text: 'Quaid-e-Azam Muhammad Ali Jinnah' },
          d: { text: 'Allama Iqbal', feedback: 'Allama Iqbal was a poet and thinker. Quaid-e-Azam became the Governor-General.' },
        },
      },
      'soc-pakistan-nirman-q3': {
        text: 'Which city was the capital of Pakistan when it was created?',
        options: {
          a: { text: 'Islamabad', feedback: 'Islamabad was built later and became the capital later. In 1947 the capital was Karachi.' },
          b: { text: 'Lahore', feedback: 'Lahore was a big city, but the first capital was Karachi.' },
          c: { text: 'Dhaka', feedback: 'Dhaka was a big city of East Pakistan, but the capital was Karachi.' },
          d: { text: 'Karachi' },
        },
      },
    },
  },
  'soc-prant-bhumi': {
    title: 'Provinces and Landforms',
    points: [
      'Pakistan has four provinces: Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan.',
      'Balochistan is the largest province by area.',
      'Punjab is the largest province by population.',
      'There are high mountains in the north. K2 is the second highest peak in the world.',
    ],
    example: 'On a map, seeing mountains at the top and the sea near Sindh at the bottom helps us understand the land of Pakistan.',
    questions: {
      'soc-prant-bhumi-q1': {
        text: 'Which is the largest province of Pakistan by area?',
        options: {
          a: { text: 'Punjab', feedback: 'Punjab is the largest by population. The largest by area is Balochistan.' },
          b: { text: 'Sindh', feedback: 'Sindh is smaller than Balochistan. The largest province is Balochistan.' },
          c: { text: 'Balochistan' },
          d: { text: 'Khyber Pakhtunkhwa', feedback: 'Khyber Pakhtunkhwa is a mountainous province, but the largest by area is Balochistan.' },
        },
      },
      'soc-prant-bhumi-q2': {
        text: 'Which statement about K2 is correct?',
        options: {
          a: { text: 'It is the highest peak in the world', feedback: 'The highest peak is Mount Everest. K2 is the second highest.' },
          b: { text: 'It is in the north of Pakistan and is the second highest peak in the world' },
          c: { text: 'It is in the desert of Balochistan', feedback: 'K2 is not in a desert. It stands in the Karakoram mountains in the north.' },
          d: { text: 'It is the name of a river', feedback: 'K2 is not a river. It is a very high mountain peak.' },
        },
      },
      'soc-prant-bhumi-q3': {
        text: 'In which part of Pakistan is the Thar Desert?',
        options: {
          a: { text: 'In the south-east of Sindh' },
          b: { text: 'In the north of Punjab', feedback: 'There are hills in the north of Punjab. The Thar Desert is in the south-east of Sindh.' },
          c: { text: 'In the mountains of Gilgit', feedback: 'Gilgit has high snowy mountains. Thar is a hot desert, in Sindh.' },
          d: { text: 'Near Islamabad', feedback: 'The Margalla hills are near Islamabad. The Thar Desert is in Sindh.' },
        },
      },
    },
  },
  'soc-nadi-jalvayu': {
    title: 'Rivers and Climate',
    points: [
      'The Indus is the biggest and most important river of Pakistan.',
      'Jhelum, Chenab, Ravi, Beas and Sutlej are tributaries of the Indus.',
      'The Tarbela Dam is built on the Indus River.',
      'Most rain falls from July to September because of the monsoon.',
    ],
    example: 'In summer, the farmer waits for the monsoon rain, because the fields get water from it.',
    questions: {
      'soc-nadi-jalvayu-q1': {
        text: 'Which is the biggest river of Pakistan?',
        options: {
          a: { text: 'Ravi', feedback: 'Ravi is a tributary. The biggest river is the Indus.' },
          b: { text: 'Chenab', feedback: 'Chenab is also a tributary. The main and biggest river is the Indus.' },
          c: { text: 'Indus' },
          d: { text: 'Beas', feedback: 'Beas is a small tributary. The biggest river is the Indus.' },
        },
      },
      'soc-nadi-jalvayu-q2': {
        text: 'On which river is the Tarbela Dam built?',
        options: {
          a: { text: 'On the Jhelum River', feedback: 'The Mangla Dam is on the Jhelum. The Tarbela Dam is on the Indus.' },
          b: { text: 'On the Indus River' },
          c: { text: 'On the Ravi River', feedback: 'Tarbela is not on the Ravi. The Tarbela Dam is built on the Indus.' },
          d: { text: 'On the Sutlej River', feedback: 'Tarbela is not on the Sutlej either. It is on the Indus.' },
        },
      },
      'soc-nadi-jalvayu-q3': {
        text: 'When does the monsoon rain usually come in Pakistan?',
        options: {
          a: { text: 'December to February', feedback: 'Some western rain falls in winter. The monsoon comes in summer, from July to September.' },
          b: { text: 'March to May', feedback: 'The monsoon does not come in spring. Its time is July to September.' },
          c: { text: 'The same all year', feedback: 'The monsoon does not stay all year. It comes in a special season, July to September.' },
          d: { text: 'July to September' },
        },
      },
    },
  },
  'soc-sansadhan': {
    title: 'Natural Resources',
    points: [
      'Pakistan has resources like coal, gas, salt and limestone.',
      'There are large reserves of coal in Thar (Sindh).',
      'Natural gas is found at Sui (Balochistan).',
      'The salt mine of Khewra (Punjab) is very large and famous.',
    ],
    example: 'The salt used for cooking at home may have come from the Khewra mine in Punjab.',
    questions: {
      'soc-sansadhan-q1': {
        text: 'What is the Khewra mine famous for?',
        options: {
          a: { text: 'Gold', feedback: 'Khewra is not for gold. It is a very large salt mine.' },
          b: { text: 'Salt' },
          c: { text: 'Coal', feedback: 'Coal is found in large amounts in Thar. Khewra is famous for salt.' },
          d: { text: 'Oil', feedback: 'Oil does not come out at Khewra. Salt is taken out of the hills there.' },
        },
      },
      'soc-sansadhan-q2': {
        text: 'For which resource is the Sui area known?',
        options: {
          a: { text: 'Natural gas' },
          b: { text: 'Salt', feedback: 'Salt comes from Khewra. Sui is famous for natural gas.' },
          c: { text: 'Cotton', feedback: 'Cotton is a field crop. Sui is known for its gas wells.' },
          d: { text: 'Fish', feedback: 'Fish comes from the sea and rivers. Sui is famous for gas.' },
        },
      },
      'soc-sansadhan-q3': {
        text: 'What is the biggest benefit of Thar coal?',
        options: {
          a: { text: 'It will increase rain', feedback: 'Coal does not increase rain. Coal is burnt to make electricity.' },
          b: { text: 'Salt will be made from it', feedback: 'Salt comes from mines. Electricity is made from Thar coal.' },
          c: { text: 'Electricity is made from it for homes and factories' },
          d: { text: 'It will make river water sweet', feedback: 'Coal does not sweeten water. Its job is to work as fuel and give electricity.' },
        },
      },
    },
  },
  'soc-samvidhan': {
    title: 'Basics of the Constitution',
    points: [
      'The Constitution is the highest law of a country.',
      'The present Constitution of Pakistan was made in 1973.',
      'Pakistan is an Islamic republic.',
      'It has a parliamentary system: the Prime Minister runs the government and the President is the head of state.',
    ],
    example: 'Just as school rules apply to everyone, the rules of the Constitution apply to the whole country.',
    questions: {
      'soc-samvidhan-q1': {
        text: 'When was the present Constitution of Pakistan made?',
        options: {
          a: { text: 'In 1947', feedback: 'Pakistan was created in 1947. The present Constitution was made in 1973.' },
          b: { text: 'In 1956', feedback: 'The first constitution was made in 1956, but it ended later. The present one is from 1973.' },
          c: { text: 'In 1973' },
          d: { text: 'In 2000', feedback: 'No new constitution was made in 2000. The present Constitution is from 1973.' },
        },
      },
      'soc-samvidhan-q2': {
        text: 'What is a constitution?',
        options: {
          a: { text: 'A book of stories', feedback: 'A constitution is not a story book. It is the highest law of the country.' },
          b: { text: 'A rule made only for courts', feedback: 'The Constitution is not only for courts. It applies to the whole country and every citizen.' },
          c: { text: 'The highest law of the country, by which the government runs' },
          d: { text: 'The name of a newspaper', feedback: 'A constitution is not a newspaper. It is the book of basic rules for running the country.' },
        },
      },
      'soc-samvidhan-q3': {
        text: 'Which two houses make up the Parliament (Majlis-e-Shoora) of Pakistan?',
        options: {
          a: { text: 'Supreme Court and High Court', feedback: 'Courts are not part of Parliament. Parliament has the National Assembly and the Senate.' },
          b: { text: 'National Assembly and Senate' },
          c: { text: 'Army and police', feedback: 'The army and police are not Parliament. Parliament is the National Assembly and the Senate, which make laws.' },
          d: { text: 'The Prime Minister and the President', feedback: 'These are two big offices, not Parliament. Parliament is made of the National Assembly and the Senate.' },
        },
      },
    },
  },
  'soc-adhikar-kartavya': {
    title: 'Rights and Duties of Citizens',
    points: [
      'Every citizen has basic rights like education, equality and freedom of speech.',
      'The Constitution says children aged 5 to 16 must get free education.',
      'Citizens also have duties: to obey the law, pay taxes and respect the rights of others.',
      'Rights and duties go together.',
    ],
    example: 'Going to school is the right of a child, and looking after school property is the duty of the child.',
    questions: {
      'soc-adhikar-kartavya-q1': {
        text: 'Which of these is a basic right of a citizen?',
        options: {
          a: { text: 'To snatch the things of others', feedback: 'Snatching is not a right, it is a wrong act. A right is what the Constitution gives to every citizen.' },
          b: { text: 'To get education' },
          c: { text: 'To break the law', feedback: 'Breaking the law is not a right. Getting education is a basic right.' },
          d: { text: 'Not to pay taxes', feedback: 'Paying taxes is a duty of a citizen. Getting education is a right.' },
        },
      },
      'soc-adhikar-kartavya-q2': {
        text: 'According to the Constitution, children of which ages must get free education?',
        options: {
          a: { text: 'Only above 18 years', feedback: 'This is not for adults, it is for children. Children aged 5 to 16 have the right to free education.' },
          b: { text: '5 to 16 years' },
          c: { text: 'Only 2 to 4 years', feedback: 'That age is too small. The Constitution speaks of free education for children aged 5 to 16.' },
          d: { text: 'No one at all', feedback: 'That is not true. The Constitution gives children the right to free education.' },
        },
      },
      'soc-adhikar-kartavya-q3': {
        text: 'Which of these is a duty of a citizen?',
        options: {
          a: { text: 'Throwing litter on the road', feedback: 'Throwing litter is wrong. Keeping cleanliness and obeying the law is a duty.' },
          b: { text: 'To obey the law and pay taxes on time' },
          c: { text: 'To sleep at home on election day and never vote', feedback: 'Voting is good citizenship. Duties include obeying the law and paying taxes.' },
          d: { text: 'To take away the rights of others', feedback: 'Taking the rights of others is not a duty, it is injustice. The duty is to obey the law.' },
        },
      },
    },
  },
  'soc-sthaniya-sarkar': {
    title: 'Local Government',
    points: [
      'Local government looks after the work of our street and village.',
      'Its smallest unit is the Union Council.',
      'Cleanliness, water, streets and birth certificates are the work of local government.',
      'Its representatives are chosen through local elections.',
    ],
    example: 'A complaint about a broken drain or a dead street light in the street is made at the Union Council.',
    questions: {
      'soc-sthaniya-sarkar-q1': {
        text: 'What is the smallest unit of local government?',
        options: {
          a: { text: 'National Assembly', feedback: 'The National Assembly is for the whole country. The smallest unit of local government is the Union Council.' },
          b: { text: 'Senate', feedback: 'The Senate is part of Parliament. The smallest local unit is the Union Council.' },
          c: { text: 'Union Council' },
          d: { text: 'Supreme Court', feedback: 'The Supreme Court is a court, not local government. The smallest unit is the Union Council.' },
        },
      },
      'soc-sthaniya-sarkar-q2': {
        text: 'Which of these jobs is usually done by local government?',
        options: {
          a: { text: 'Making agreements with other countries', feedback: 'Foreign affairs are seen by the federal government. Local government does the work of the neighbourhood.' },
          b: { text: 'Cleanliness and water supply of the neighbourhood' },
          c: { text: 'Printing new currency notes', feedback: 'Notes are printed by the State Bank. Local government does jobs like cleanliness and water.' },
          d: { text: 'Running the army', feedback: 'The army is with the federal government. Local government looks after streets and cleanliness.' },
        },
      },
      'soc-sthaniya-sarkar-q3': {
        text: 'How are the representatives of local government chosen?',
        options: {
          a: { text: 'By a lottery', feedback: 'Representatives are not chosen by lottery. People choose them by voting.' },
          b: { text: 'Only government officers appoint them', feedback: 'Representatives are not appointed. The public chooses them in local elections.' },
          c: { text: 'By the votes of the public in local elections' },
          d: { text: 'The son automatically takes the place of the father', feedback: 'This office is not inherited. A representative is made by votes in an election.' },
        },
      },
    },
  },
  'soc-krishi': {
    title: 'Agriculture of Pakistan',
    points: [
      'Pakistan is an agricultural country. Many people earn their living from farming.',
      'The main crops are wheat, cotton, sugarcane, rice and maize.',
      'Fields get water from the Indus River and its canals.',
      'The basmati rice of Pakistan is also sold in other countries.',
    ],
    example: 'In the grain market, the farmer sells wheat, from which people in the cities get flour.',
    questions: {
      'soc-krishi-q1': {
        text: 'Which of these is a main crop of Pakistan?',
        options: {
          a: { text: 'Tea', feedback: 'Tea is not a main crop of Pakistan. Wheat, cotton and rice are main crops.' },
          b: { text: 'Coffee', feedback: 'Coffee is not a crop here. Wheat and cotton are among the main crops.' },
          c: { text: 'Wheat' },
          d: { text: 'Banana is the only crop', feedback: 'Not only bananas grow here. Wheat, cotton, sugarcane and rice are big crops of Pakistan.' },
        },
      },
      'soc-krishi-q2': {
        text: 'From where do the fields of Pakistan mostly get water?',
        options: {
          a: { text: 'Only from rain', feedback: 'Rain is not enough everywhere. Most water comes from rivers and canals.' },
          b: { text: 'Directly from sea water', feedback: 'Sea water is salty and spoils the crop. Fields get sweet water from canals.' },
          c: { text: 'From the Indus River and its canals' },
          d: { text: 'From bottled water', feedback: 'Fields are not watered with bottles. Rivers and canals give water to the fields.' },
        },
      },
      'soc-krishi-q3': {
        text: 'Why are cotton and sugarcane called cash crops?',
        options: {
          a: { text: 'Because they cannot be eaten', feedback: 'It is not about eating. The farmer earns cash by selling these crops, so they are called cash crops.' },
          b: { text: 'Because the farmer earns money by selling them and factories make things from them' },
          c: { text: 'Because they grow only in banks', feedback: 'Crops grow in fields. Money is earned by selling them, so they are cash crops.' },
          d: { text: 'Because coins grow on them', feedback: 'Coins do not grow on plants. A cash crop means a crop that gives earning when sold.' },
        },
      },
    },
  },
  'soc-udyog-vyapar': {
    title: 'Industries and Trade',
    points: [
      'The biggest industry of Pakistan is the cloth (textile) industry.',
      'The footballs and surgical instruments of Sialkot are famous all over the world.',
      'Pakistan sells cloth, rice and sports goods to other countries.',
      'Gwadar and Karachi are big ports, from where trade is done by ships.',
    ],
    example: 'The balls used in big football matches of the world are often made in Sialkot.',
    questions: {
      'soc-udyog-vyapar-q1': {
        text: 'Which is the biggest industry of Pakistan?',
        options: {
          a: { text: 'The cloth (textile) industry' },
          b: { text: 'The aeroplane-making industry', feedback: 'Aeroplanes are not a big industry here. The biggest industry is cloth.' },
          c: { text: 'The toy industry is the biggest', feedback: 'Toys are made at a small level. The biggest industry of Pakistan is textiles.' },
          d: { text: 'The ice-making industry', feedback: 'Ice is not a big industry. The cloth industry is the biggest.' },
        },
      },
      'soc-udyog-vyapar-q2': {
        text: 'For what is the city of Sialkot famous all over the world?',
        options: {
          a: { text: 'For footballs and sports goods' },
          b: { text: 'For salt mines', feedback: 'The salt mine is at Khewra. Sialkot is famous for footballs and sports goods.' },
          c: { text: 'For snowy mountains', feedback: 'Sialkot is a plains city. It is known for sports goods and instruments.' },
          d: { text: 'For a big dam', feedback: 'The big dams are Tarbela and Mangla. Sialkot is famous for footballs.' },
        },
      },
      'soc-udyog-vyapar-q3': {
        text: 'What does export mean?',
        options: {
          a: { text: 'To bring things from another country', feedback: 'Bringing things from another country is import. Selling our things to another country is export.' },
          b: { text: 'To sell things in our own city only', feedback: 'Selling in our own city is ordinary trade. In export, goods go to another country.' },
          c: { text: 'To sell the goods made in our country to other countries' },
          d: { text: 'To give things away for free', feedback: 'Giving free is not export. In export, goods are sold and earning is made.' },
        },
      },
    },
  },
  'soc-jansankhya': {
    title: 'Population and Occupations',
    points: [
      'The population of Pakistan is more than 240 million.',
      'Most people live in the Punjab province.',
      'Many people do farming, and jobs and business are growing in cities.',
      'A bigger population increases the demand for schools, hospitals and houses.',
    ],
    example: 'A bus in a big city is crowded because the number of people living in cities has grown a lot.',
    questions: {
      'soc-jansankhya-q1': {
        text: 'Which province has the largest population in Pakistan?',
        options: {
          a: { text: 'Balochistan', feedback: 'Balochistan is big in area, but few people live there. The largest population is in Punjab.' },
          b: { text: 'Punjab' },
          c: { text: 'Gilgit-Baltistan', feedback: 'Gilgit-Baltistan has a small population. Most people live in Punjab.' },
          d: { text: 'Khyber Pakhtunkhwa', feedback: 'The population of Khyber Pakhtunkhwa is less than Punjab. The biggest population is in Punjab.' },
        },
      },
      'soc-jansankhya-q2': {
        text: 'What problem is created when the population grows a lot?',
        options: {
          a: { text: 'Crowds increase in schools and hospitals' },
          b: { text: 'Rain stops completely', feedback: 'Population does not stop rain. A growing population puts more load on schools and hospitals.' },
          c: { text: 'Rivers dry up in one day', feedback: 'Rivers do not dry up like this. Population growth increases the demand for houses, schools and work.' },
          d: { text: 'The sun rises late', feedback: 'The sun rises at its own time. Population affects the crowding of facilities.' },
        },
      },
      'soc-jansankhya-q3': {
        text: 'Why do people move from villages to cities?',
        options: {
          a: { text: 'There is more farmland in cities', feedback: 'Cities have less farmland. People go to cities for work and facilities.' },
          b: { text: 'Because there are no rivers in cities', feedback: 'Rivers have nothing to do with it. Cities offer more jobs and facilities.' },
          c: { text: 'For better facilities of jobs, education and treatment' },
          d: { text: 'Because living in villages is forbidden', feedback: 'Living in villages is not forbidden. People go to cities in search of better work and facilities.' },
        },
      },
    },
  },
  'soc-disha-paemana': {
    title: 'Directions and Scale',
    points: [
      'There are four main directions: north, south, east and west.',
      'On a map, north is usually at the top.',
      'The scale tells how much the distance on the map is in real distance.',
      'For example, if the scale is 1 centimetre = 10 kilometres, then 2 centimetres on the map will be 20 real kilometres.',
    ],
    example: 'On the map, home is 3 centimetres from school and the scale is 1 centimetre = 1 kilometre, so the real distance is 3 kilometres.',
    questions: {
      'soc-disha-paemana-q1': {
        text: 'From which direction does the sun rise?',
        options: {
          a: { text: 'From the west', feedback: 'The sun sets in the west. It rises in the east.' },
          b: { text: 'From the north', feedback: 'The sun does not rise from the north. It rises in the east.' },
          c: { text: 'From the east' },
          d: { text: 'From the south', feedback: 'The sun does not rise from the south either. The direction of rising is east.' },
        },
      },
      'soc-disha-paemana-q2': {
        text: 'The scale of a map is 1 centimetre = 5 kilometres. Two cities are 4 centimetres apart on the map. What is the real distance?',
        options: {
          a: { text: '5 kilometres', feedback: 'That is the distance for only 1 centimetre. For 4 centimetres: 4 × 5 = 20 kilometres.' },
          b: { text: '9 kilometres', feedback: 'Do not add, multiply. 4 × 5 = 20 kilometres.' },
          c: { text: '20 kilometres' },
          d: { text: '4 kilometres', feedback: 'Centimetres on the map are not real kilometres. Multiply by the scale: 4 × 5 = 20.' },
        },
      },
      'soc-disha-paemana-q3': {
        text: 'You are standing facing north. Which direction is on your right-hand side?',
        options: {
          a: { text: 'West', feedback: 'West will be on the left. Facing north, the right side is east.' },
          b: { text: 'South', feedback: 'South will be behind you. The right-hand side is east.' },
          c: { text: 'East' },
          d: { text: 'It stays north', feedback: 'North is in front. On the right, the direction changes to east.' },
        },
      },
    },
  },
  'soc-akshansh-deshantar': {
    title: 'Latitude and Longitude',
    points: [
      'Latitude lines are imaginary lines drawn on the Earth from east to west.',
      'The Equator is the biggest latitude line, and its value is 0°.',
      'Longitude lines go from north to south and meet at both poles.',
      'The 0° longitude line passes through Greenwich (near London).',
    ],
    example: 'In a mobile map, the location of a place is found from the numbers of latitude and longitude.',
    questions: {
      'soc-akshansh-deshantar-q1': {
        text: 'What is the latitude of the Equator?',
        options: {
          a: { text: '90°', feedback: '90° is at the poles. The latitude of the Equator is 0°.' },
          b: { text: '0°' },
          c: { text: '180°', feedback: '180° is linked with longitude. The Equator is 0° latitude.' },
          d: { text: '45°', feedback: '45° is a line in the middle. The Equator is exactly in the centre at 0°.' },
        },
      },
      'soc-akshansh-deshantar-q2': {
        text: 'What is special about longitude lines?',
        options: {
          a: { text: 'They never meet', feedback: 'Latitude lines never meet. Longitude lines meet at both poles.' },
          b: { text: 'They are full circles as long as the Equator', feedback: 'Longitude lines are like half circles. They meet at the north and south poles.' },
          c: { text: 'They meet at the north and south poles' },
          d: { text: 'They are only in the sea', feedback: 'These imaginary lines are over the whole Earth, on land and on sea.' },
        },
      },
      'soc-akshansh-deshantar-q3': {
        text: 'Between about which latitudes is Pakistan located?',
        options: {
          a: { text: '0° to 10° north', feedback: 'That area is near the Equator. Pakistan is above it, at about 24° to 37° north.' },
          b: { text: 'About 24° north to 37° north' },
          c: { text: '60° to 70° north', feedback: 'Very cold countries are that far up. Pakistan is at about 24° to 37° north.' },
          d: { text: '10° to 20° south', feedback: 'Pakistan is not in the southern half. It is in the northern hemisphere.' },
        },
      },
    },
  },
  'soc-manchitra-sanket': {
    title: 'Map Symbols and Reading Maps',
    points: [
      'On a map, blue colour is usually used for rivers and lakes.',
      'Brown colour is shown for mountains and green or light colour for plains.',
      'The list of symbols (legend) in a corner of the map tells the meaning of every symbol.',
      'While reading a map, first see the title, direction and scale.',
    ],
    example: 'Seeing a small railway-track-like symbol on the map, we understand that a railway line passes there.',
    questions: {
      'soc-manchitra-sanket-q1': {
        text: 'What does blue colour usually show on a map?',
        options: {
          a: { text: 'Mountains', feedback: 'Mountains are shown in brown colour. Blue is for water.' },
          b: { text: 'Desert', feedback: 'Desert is shown in light yellow. Blue is for rivers, lakes and the sea.' },
          c: { text: 'Water (river, lake, sea)' },
          d: { text: 'Forest only', feedback: 'Forest is shown in green. Blue shows water.' },
        },
      },
      'soc-manchitra-sanket-q2': {
        text: 'From where can we find the meaning of map symbols?',
        options: {
          a: { text: 'From the legend (symbol list) of the map' },
          b: { text: 'We have to guess ourselves, there is no list', feedback: 'We do not have to guess. Every good map has a legend with the meanings of symbols.' },
          c: { text: 'Only from the diary of the teacher', feedback: 'The meanings are given on the map itself. Every symbol can be understood from the legend.' },
          d: { text: 'Symbols have no meaning', feedback: 'Symbols are not decoration. Every symbol shows some place or thing.' },
        },
      },
      'soc-manchitra-sanket-q3': {
        text: 'What is the difference between a political map and a physical map?',
        options: {
          a: { text: 'Both are exactly the same', feedback: 'Both are different. One shows boundaries, the other shows the forms of land.' },
          b: { text: 'A political map shows the boundaries of countries and provinces, and a physical map shows mountains and rivers' },
          c: { text: 'A political map is made only on election day', feedback: 'That is not so. A political map shows boundaries and cities, and can be read any day.' },
          d: { text: 'A physical map is only for sports', feedback: 'A physical map is not for sports. It shows mountains, rivers and plains.' },
        },
      },
    },
  },
};

export const EN_SOCIAL_MISCONCEPTIONS = {
  'delhi-first-1857': 'The revolt began in Delhi',
  'jhansi-first-1857': 'The revolt began in Jhansi',
  'lucknow-first-1857': 'The revolt began in Lucknow',
  'railway-cause-1857': 'Trains were the cause of 1857',
  'salt-tax-1857': 'The salt tax was the cause of 1857',
  'schools-cause-1857': 'Schools were the cause of 1857',
  'freedom-in-1857': 'Freedom came in 1857 itself',
  'french-rule-after-1857': 'French rule came after 1857',
  'mughal-strong-after-1857': 'The Mughals became strong again after 1857',
  'league-in-1857': 'The Muslim League was formed in 1857',
  'league-in-1940': 'The Muslim League was formed in 1940',
  'league-in-1947': 'The Muslim League was formed in 1947',
  'resolution-more-british-rule': 'The Resolution demanded more British rule',
  'resolution-school-holidays': 'The Resolution was about school holidays',
  'resolution-lahore-capital': 'The Resolution was only about making Lahore the capital',
  'resolution-in-karachi': 'The Lahore Resolution was passed in Karachi',
  'resolution-in-delhi': 'The Lahore Resolution was passed in Delhi',
  'resolution-in-dhaka': 'The Lahore Resolution was passed in Dhaka',
  'pakistan-in-1940': 'Pakistan was created in 1940',
  'pakistan-on-15-august': 'Pakistan was created on 15 August',
  'pakistan-in-1973': 'Pakistan was created in 1973',
  'liaquat-governor-general': 'Liaquat Ali Khan was the Governor-General',
  'mountbatten-pakistan-gg': 'Mountbatten was the Governor-General of Pakistan',
  'iqbal-governor-general': 'Allama Iqbal was the Governor-General',
  'islamabad-first-capital': 'Islamabad was the first capital',
  'lahore-first-capital': 'Lahore was the first capital',
  'dhaka-first-capital': 'Dhaka was the first capital',
  'punjab-largest-area': 'Punjab is the largest by area',
  'sindh-largest-area': 'Sindh is the largest by area',
  'kpk-largest-area': 'Khyber Pakhtunkhwa is the largest by area',
  'k2-highest': 'K2 is the highest peak in the world',
  'k2-in-desert': 'K2 is in a desert',
  'k2-is-river': 'K2 is a river',
  'thar-in-north-punjab': 'Thar is in north Punjab',
  'thar-in-gilgit': 'Thar is in Gilgit',
  'thar-near-islamabad': 'Thar is near Islamabad',
  'ravi-biggest-river': 'Ravi is the biggest river',
  'chenab-biggest-river': 'Chenab is the biggest river',
  'beas-biggest-river': 'Beas is the biggest river',
  'tarbela-on-jhelum': 'Tarbela is on the Jhelum',
  'tarbela-on-ravi': 'Tarbela is on the Ravi',
  'tarbela-on-sutlej': 'Tarbela is on the Sutlej',
  'monsoon-in-winter': 'The monsoon comes in winter',
  'monsoon-in-spring': 'The monsoon comes in spring',
  'monsoon-all-year': 'The monsoon stays all year',
  'khewra-gold': 'Gold is found at Khewra',
  'khewra-coal': 'Khewra is famous for coal',
  'khewra-oil': 'Oil comes out at Khewra',
  'sui-salt': 'Sui is famous for salt',
  'sui-cotton': 'Sui is famous for cotton',
  'sui-fish': 'Sui is famous for fish',
  'coal-makes-rain': 'Coal increases rain',
  'coal-makes-salt': 'Salt is made from coal',
  'coal-sweetens-water': 'Coal sweetens water',
  'constitution-in-1947': 'The present Constitution was made in 1947',
  'constitution-in-1956': 'The present Constitution is from 1956',
  'constitution-in-2000': 'The present Constitution was made in 2000',
  'constitution-storybook': 'The Constitution is a story book',
  'constitution-only-courts': 'The Constitution is only for courts',
  'constitution-newspaper': 'The Constitution is a newspaper',
  'parliament-is-courts': 'Parliament is made of courts',
  'parliament-is-forces': 'Parliament is the army and police',
  'parliament-is-two-people': 'Parliament is the name of two people',
  'snatching-is-right': 'Snatching is a right of the citizen',
  'breaking-law-is-right': 'Breaking the law is a right',
  'no-tax-is-right': 'Not paying tax is a right',
  'free-education-adults-only': 'Free education is only for adults',
  'free-education-toddlers-only': 'Free education is only for small children (2-4 years)',
  'no-free-education': 'There is no right to free education',
  'littering-is-duty': 'Throwing litter is a duty',
  'never-vote-is-duty': 'Never voting is a duty',
  'taking-rights-is-duty': 'Taking the rights of others is a duty',
  'assembly-smallest-local': 'The National Assembly is the smallest local unit',
  'senate-smallest-local': 'The Senate is the smallest local unit',
  'court-smallest-local': 'The Supreme Court is the smallest local unit',
  'local-govt-foreign-affairs': 'Local government handles foreign affairs',
  'local-govt-prints-money': 'Local government prints notes',
  'local-govt-runs-army': 'Local government runs the army',
  'local-reps-by-lottery': 'Local representatives are chosen by lottery',
  'local-reps-appointed-only': 'Local representatives are only appointed',
  'local-reps-hereditary': 'The local office is inherited',
  'tea-main-crop': 'Tea is a main crop of Pakistan',
  'coffee-main-crop': 'Coffee is a main crop',
  'banana-only-crop': 'Banana is the only crop',
  'irrigation-rain-only': 'Fields get water only from rain',
  'irrigation-seawater': 'Fields get sea water',
  'irrigation-bottled-water': 'Fields are watered with bottled water',
  'cash-crop-not-eaten-only': 'A cash crop is one that cannot be eaten',
  'cash-crop-grows-in-bank': 'Cash crops grow in banks',
  'cash-crop-coins-grow': 'Coins grow on cash crops',
  'aircraft-biggest-industry': 'Aeroplanes are the biggest industry',
  'toys-biggest-industry': 'The toy industry is the biggest',
  'ice-biggest-industry': 'The ice industry is the biggest',
  'sialkot-salt-mines': 'Sialkot is famous for salt mines',
  'sialkot-snowy-mountains': 'Sialkot is famous for snowy mountains',
  'sialkot-big-dam': 'Sialkot is famous for a big dam',
  'export-means-import': 'Export means bringing things in',
  'export-means-local-sale': 'Export means selling in our own city',
  'export-means-free': 'Export means giving things free',
  'balochistan-most-populous': 'Balochistan has the most population',
  'gilgit-most-populous': 'Gilgit-Baltistan has the most population',
  'kpk-most-populous': 'Khyber Pakhtunkhwa has the most population',
  'population-stops-rain': 'Population growth stops rain',
  'population-dries-rivers': 'Population dries up rivers',
  'population-delays-sunrise': 'Population makes the sun rise late',
  'cities-more-farmland': 'Cities have more farmland',
  'cities-have-no-rivers-reason': 'People go to cities because there are no rivers there',
  'villages-banned': 'Living in villages is forbidden',
  'sun-rises-west': 'The sun rises in the west',
  'sun-rises-north': 'The sun rises in the north',
  'sun-rises-south': 'The sun rises in the south',
  'scale-reads-one-cm': 'In scale we count only 1 centimetre',
  'scale-adds-numbers': 'In scale the numbers are added',
  'scale-same-as-cm': 'Map centimetres are the real distance',
  'right-side-west-facing-north': 'Facing north, the right side is west',
  'right-side-south-facing-north': 'Facing north, the right side is south',
  'right-side-north-facing-north': 'The right side also stays north',
  'equator-90-degrees': 'The Equator is at 90 degrees',
  'equator-180-degrees': 'The Equator is at 180 degrees',
  'equator-45-degrees': 'The Equator is at 45 degrees',
  'longitudes-never-meet': 'Longitude lines never meet',
  'longitudes-equal-circles': 'Longitude lines are full equal circles',
  'longitudes-only-in-sea': 'Longitude lines are only in the sea',
  'pakistan-near-equator': 'Pakistan is near the Equator',
  'pakistan-far-north': 'Pakistan is far up in the north',
  'pakistan-south-hemisphere': 'Pakistan is in the southern hemisphere',
  'blue-means-mountains': 'Blue colour shows mountains',
  'blue-means-desert': 'Blue colour shows desert',
  'blue-means-forest': 'Blue colour shows forest',
  'symbols-have-no-legend': 'Map symbols have no list',
  'symbols-only-in-diary': 'Symbol meanings are only in a diary',
  'symbols-are-decoration': 'Map symbols are decoration',
  'both-maps-same': 'Political and physical maps are the same',
  'political-map-election-day': 'A political map is made only on election day',
  'physical-map-for-sports': 'A physical map is for sports',
};
