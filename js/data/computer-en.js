// English mirror of computer.js, keyed by the same ids.
// Correct option = { text } only; wrong option = { text, feedback }.

export const EN_COMPUTER_TITLE = 'Class 8 Computer Science';

export const EN_COMPUTER_CHAPTERS = {
  'comp-tantra': 'The Computer System',
  'comp-sankhya': 'Number Systems',
  'comp-algorithm': 'Algorithms',
  'comp-programming': 'Starting Programming',
  'comp-internet': 'Internet and Safety',
};

export const EN_COMPUTER_CONCEPTS = {
  'comp-input-output': {
    title: 'Input and Output Devices',
    points: [
      'Devices we use to give information to a computer are input devices, like the keyboard and mouse.',
      'Devices that show or play the result for us are output devices, like the monitor and speaker.',
      'A scanner puts a paper picture into the computer, and a printer prints onto paper.',
    ],
    example: 'While typing, the keyboard is the input and the letter appearing on the screen is the monitor output.',
    questions: {
      'comp-input-output-q1': {
        text: 'What kind of device is a keyboard?',
        options: {
          a: { text: 'An output device', feedback: 'We type letters into the computer with a keyboard, so it is an input device.' },
          b: { text: 'An input device' },
          c: { text: 'A storage device', feedback: 'A keyboard saves nothing; it only sends letters in. Saving is the job of a hard disk or pen drive.' },
          d: { text: 'A device only for playing games', feedback: 'A keyboard is used for study, writing and all kinds of work, not only games.' },
        },
      },
      'comp-input-output-q2': {
        text: 'What kind of device is a printer, and why?',
        options: {
          a: { text: 'An input device, because it takes paper in', feedback: 'Taking paper in is not input. A printer takes information from the computer and prints it on paper, so it is output.' },
          b: { text: 'A storage device, because it saves pages', feedback: 'A printer saves nothing; it only prints.' },
          c: { text: 'An output device, because it prints the result on paper' },
          d: { text: 'A part of the CPU', feedback: 'A printer is a separate device attached outside. The CPU sits inside the system unit.' },
        },
      },
      'comp-input-output-q3': {
        text: 'Which pair is correct?',
        options: {
          a: { text: 'Mouse — output, Speaker — input', feedback: 'We send pointing signals in with a mouse, so it is input. A speaker gives sound out, so it is output.' },
          b: { text: 'Scanner — output, Monitor — input', feedback: 'A scanner sends a picture in, so it is input. A monitor shows things, so it is output.' },
          c: { text: 'Microphone — input, Headphones — output' },
          d: { text: 'Webcam — output, Printer — input', feedback: 'A webcam sends pictures in, so it is input. A printer prints, so it is output.' },
        },
      },
    },
  },
  'comp-cpu-memory': {
    title: 'CPU and Memory (RAM and ROM)',
    points: [
      'The CPU is the brain of the computer. It does all the calculations and gives orders to every part.',
      'RAM is temporary memory. Its data is erased as soon as the power goes off.',
      'ROM is permanent memory. It holds the instructions needed to start the computer.',
      'Programs that are running stay in RAM while we work.',
    ],
    example: 'When you switch a phone off and on again, an open game closes, because it was in RAM.',
    questions: {
      'comp-cpu-memory-q1': {
        text: 'What is called the brain of the computer?',
        options: {
          a: { text: 'The monitor', feedback: 'The monitor only shows things. The CPU does the calculations and decisions.' },
          b: { text: 'The keyboard', feedback: 'The keyboard only sends letters in; thinking is the CPU job.' },
          c: { text: 'The CPU' },
          d: { text: 'The printer', feedback: 'The printer only prints; it does not think.' },
        },
      },
      'comp-cpu-memory-q2': {
        text: 'Which describes RAM correctly?',
        options: {
          a: { text: 'Data stays saved in it forever, even without power', feedback: 'RAM is temporary. Its data is erased as soon as the power goes off.' },
          b: { text: 'Temporary working memory that becomes empty when the power goes off' },
          c: { text: 'Permanent memory that can only be read', feedback: 'Permanent read-only memory is ROM, not RAM.' },
          d: { text: 'A disk that saves photos', feedback: 'Photos are saved on a disk or pen drive, not in RAM.' },
        },
      },
      'comp-cpu-memory-q3': {
        text: 'When a computer is switched on, where do the very first instructions come from?',
        options: {
          a: { text: 'From RAM, because it is the fastest', feedback: 'The RAM of a switched-off computer is empty. The start-up instructions are stored in ROM.' },
          b: { text: 'From a pen drive', feedback: 'A pen drive is outside storage. Every computer has its start-up instructions in its own ROM.' },
          c: { text: 'From the monitor', feedback: 'The monitor only shows pictures; it gives no instructions.' },
          d: { text: 'From ROM, because the start-up instructions are permanently stored there' },
        },
      },
    },
  },
  'comp-storage-devices': {
    title: 'Storage Devices (HDD, SSD, Pen Drive)',
    points: [
      'Storage devices save data permanently, so it stays even when the power is off.',
      'An HDD has a spinning magnetic disk. It is cheap and gives more space, but it is slower.',
      'An SSD has no moving parts. It is faster and stronger than an HDD, but costs more.',
      'A pen drive is small, light storage that connects by USB and carries data from place to place.',
    ],
    example: 'Putting your project file on a pen drive and opening it on the school computer is the magic of storage.',
    questions: {
      'comp-storage-devices-q1': {
        text: 'Which device saves data permanently?',
        options: {
          a: { text: 'RAM', feedback: 'RAM is temporary and becomes empty when the power goes off. A disk is needed for permanent saving.' },
          b: { text: 'Monitor', feedback: 'A monitor only shows things; it saves nothing.' },
          c: { text: 'Hard disk (HDD)' },
          d: { text: 'Speaker', feedback: 'A speaker plays sound; it does not save data.' },
        },
      },
      'comp-storage-devices-q2': {
        text: 'How is an SSD better than an HDD?',
        options: {
          a: { text: 'It has a spinning disk', feedback: 'The spinning disk is in an HDD. An SSD has no moving parts.' },
          b: { text: 'It is faster and has no moving parts' },
          c: { text: 'It is always cheaper', feedback: 'An SSD usually costs more than an HDD; its strength is speed.' },
          d: { text: 'It needs no electricity', feedback: 'Every electronic device needs power. An SSD needs electricity too.' },
        },
      },
      'comp-storage-devices-q3': {
        text: 'About how many 1 MB photos can fit on an 8 GB pen drive?',
        options: {
          a: { text: 'About 8', feedback: '1 GB has 1024 MB. 8 GB means about 8192 MB, so the photos will be in thousands.' },
          b: { text: 'About 80', feedback: '8 GB = 8 × 1024 = 8192 MB. Each photo is 1 MB, so about 8000 photos fit.' },
          c: { text: 'Only 1', feedback: 'Even 1 GB has 1024 MB. 8 GB has about 8192 MB of space.' },
          d: { text: 'About 8000' },
        },
      },
    },
  },
  'comp-binary-numbers': {
    title: 'Binary Numbers',
    points: [
      'A computer understands only two digits: 0 and 1.',
      'Numbers made of 0 and 1 are called binary numbers. Their base is 2.',
      'Our everyday numbers use the ten digits 0 to 9; their base is 10.',
      'In binary, each place from the right doubles in value: 1, 2, 4, 8, 16.',
    ],
    example: 'For a computer, every letter and picture is finally just a long line of 0s and 1s.',
    questions: {
      'comp-binary-numbers-q1': {
        text: 'Which digits are used in the binary system?',
        options: {
          a: { text: 'All digits from 0 to 9', feedback: 'The ten digits 0 to 9 belong to the decimal system. Binary has only 0 and 1.' },
          b: { text: 'Only 0 and 1' },
          c: { text: 'Only digits from 1 to 9', feedback: '1 to 9 are decimal digits. Binary has only two digits: 0 and 1.' },
          d: { text: 'All letters and digits', feedback: 'Binary has no letters, only 0 and 1.' },
        },
      },
      'comp-binary-numbers-q2': {
        text: 'What is the decimal value of the binary number 101?',
        options: {
          a: { text: '3', feedback: 'Do not count the digits. Add the place values: 4 + 0 + 1 = 5.' },
          b: { text: '101', feedback: 'Binary 101 is not read as one hundred one. Its place values are 4, 2, 1.' },
          c: { text: '5' },
          d: { text: '7', feedback: '7 would need the number 111. Here the middle digit is 0, so 4 + 0 + 1 = 5.' },
        },
      },
      'comp-binary-numbers-q3': {
        text: 'What is the decimal value of the binary number 1101?',
        options: {
          a: { text: '13' },
          b: { text: '11', feedback: 'The place values are 8, 4, 2, 1. Add where there is a 1: 8 + 4 + 0 + 1 = 13.' },
          c: { text: '9', feedback: 'Do not add only 8 + 1. The middle 1 counts too: 8 + 4 + 0 + 1 = 13.' },
          d: { text: '1101', feedback: 'A binary number is not read as it is. Adding the place values gives 13.' },
        },
      },
    },
  },
  'comp-conversion': {
    title: 'Decimal to Binary and Binary to Decimal',
    points: [
      'To change a decimal number into binary, keep dividing it by 2.',
      'Write down each remainder, and at the end read the remainders in reverse, from bottom to top.',
      'To change binary into decimal, add the place value of every 1.',
      'To check your answer, convert the result back again.',
    ],
    example: 'Dividing 13 by 2 again and again gives remainders 1, 0, 1, 1 in order. Reading them in reverse makes 1101.',
    questions: {
      'comp-conversion-q1': {
        text: 'What is decimal 5 in binary?',
        options: {
          a: { text: '100', feedback: '100 has the value 4. For 5 we need 4 + 1, which is 101.' },
          b: { text: '101' },
          c: { text: '110', feedback: '110 has the value 4 + 2 = 6. For 5, 101 is correct.' },
          d: { text: '5', feedback: 'There is no digit 5 in binary. 5 is written as 101.' },
        },
      },
      'comp-conversion-q2': {
        text: 'What is decimal 10 in binary?',
        options: {
          a: { text: '1001', feedback: '1001 has the value 8 + 1 = 9. For 10 we need 8 + 2, which is 1010.' },
          b: { text: '1010' },
          c: { text: '1111', feedback: '1111 has the value 15. For 10, 1010 is correct.' },
          d: { text: '101', feedback: '101 has the value 5. For 10 we need one more place: 1010.' },
        },
      },
      'comp-conversion-q3': {
        text: 'Convert binary 1001 into decimal.',
        options: {
          a: { text: '8', feedback: 'Add the last 1 as well: 8 + 0 + 0 + 1 = 9.' },
          b: { text: '10', feedback: 'The place values are 8, 4, 2, 1. Add only where there is a 1: 8 + 1 = 9.' },
          c: { text: '9' },
          d: { text: '1001', feedback: 'Do not leave binary as it is. Adding the place values gives 9.' },
        },
      },
    },
  },
  'comp-bits-bytes': {
    title: 'Bits and Bytes',
    points: [
      'A single 0 or 1 is called a bit. It is the smallest unit of a computer.',
      '8 bits together make 1 byte.',
      '1 KB = 1024 bytes, 1 MB = 1024 KB and 1 GB = 1024 MB.',
      'The size of files and memory is measured in bytes, KB, MB and GB.',
    ],
    example: 'Saving one letter takes about 1 byte, so even a small story takes many KB.',
    questions: {
      'comp-bits-bytes-q1': {
        text: 'How many bits are there in 1 byte?',
        options: {
          a: { text: '10', feedback: '10 is a decimal habit. There are 8 bits in 1 byte.' },
          b: { text: '8' },
          c: { text: '100', feedback: 'There are only 8 bits in 1 byte, not 100.' },
          d: { text: '2', feedback: '2 is the number of binary digits, but 1 byte is made of 8 bits.' },
        },
      },
      'comp-bits-bytes-q2': {
        text: 'Which is the smallest unit?',
        options: {
          a: { text: 'Bit' },
          b: { text: 'Byte', feedback: 'A byte is bigger than a bit; 8 bits make 1 byte.' },
          c: { text: 'KB', feedback: 'A KB has 1024 bytes, so it is much bigger than a bit.' },
          d: { text: 'GB', feedback: 'GB is among the biggest units. The smallest unit is the bit.' },
        },
      },
      'comp-bits-bytes-q3': {
        text: 'How many bytes are there in 2 KB?',
        options: {
          a: { text: '2000', feedback: 'In computers 1 KB = 1024 bytes. 2 KB = 2 × 1024 = 2048 bytes.' },
          b: { text: '2048' },
          c: { text: '1024', feedback: '1024 is only 1 KB. For 2 KB, double it: 2048.' },
          d: { text: '16', feedback: '16 is a count of bits. The question asks for bytes: 2 × 1024 = 2048 bytes.' },
        },
      },
    },
  },
  'comp-algorithm-kya': {
    title: 'What Is an Algorithm',
    points: [
      'Step-by-step instructions for doing a task are called an algorithm.',
      'The steps of an algorithm must be clear and in the right order.',
      'Every algorithm must end somewhere; it cannot keep running forever.',
      'An algorithm can be written in any language, and it is made before the program.',
    ],
    example: 'A recipe for making tea is also an algorithm: boil water, add leaves, add milk, strain it.',
    questions: {
      'comp-algorithm-kya-q1': {
        text: 'What is an algorithm?',
        options: {
          a: { text: 'A part of the computer', feedback: 'An algorithm is not a part. It is a list of steps for doing a task.' },
          b: { text: 'Step-by-step instructions for a task' },
          c: { text: 'Only a maths question', feedback: 'An algorithm can be for any task, like making tea or finding a way.' },
          d: { text: 'A kind of game', feedback: 'An algorithm is not a game; it is a way of doing a task.' },
        },
      },
      'comp-algorithm-kya-q2': {
        text: 'What is the sign of a good algorithm?',
        options: {
          a: { text: 'It is very long', feedback: 'Length is not a good thing. Clear steps in the right order are the real sign.' },
          b: { text: 'It never ends', feedback: 'Something that never ends is not a correct algorithm. Every algorithm must have an end.' },
          c: { text: 'Its steps are clear and it ends at the finish' },
          d: { text: 'Only a computer can understand it', feedback: 'People can also understand and follow an algorithm, like a cooking recipe.' },
        },
      },
      'comp-algorithm-kya-q3': {
        text: 'Which order is correct in an algorithm for making tea?',
        options: {
          a: { text: 'Strain the tea, then boil the water', feedback: 'Straining happens at the very end. The water must boil first.' },
          b: { text: 'Boil the water, add the leaves, then strain it' },
          c: { text: 'Pour tea into the cup, then boil the milk', feedback: 'Tea comes into the cup at the very end. First the water boils, leaves go in, then it is strained.' },
          d: { text: 'Eat the leaves, then drink the water', feedback: 'That is not making tea at all. The right order: boil water, add leaves, strain.' },
        },
      },
    },
  },
  'comp-flowchart': {
    title: 'Flowcharts and Their Symbols',
    points: [
      'Showing an algorithm with pictures and symbols is called a flowchart.',
      'The oval symbol is used for the start and the end.',
      'A rectangle is used for a task or calculation, and a parallelogram for input and output.',
      'The diamond shape is used for a decision, where the answer is yes or no.',
    ],
    example: 'The place that checks whether a number is even or odd will have a diamond, because a decision is made there.',
    questions: {
      'comp-flowchart-q1': {
        text: 'Which symbol shows the start and end in a flowchart?',
        options: {
          a: { text: 'Rectangle', feedback: 'A rectangle is for a task or calculation. The oval is used for start and end.' },
          b: { text: 'Oval' },
          c: { text: 'Diamond', feedback: 'A diamond is for a decision, not for the start.' },
          d: { text: 'Arrow', feedback: 'An arrow only shows direction, not the start.' },
        },
      },
      'comp-flowchart-q2': {
        text: '"Is the number bigger than 10?" — which symbol is used for such a decision?',
        options: {
          a: { text: 'Rectangle', feedback: 'A rectangle shows a plain task. Where a yes-no decision is made, a diamond is drawn.' },
          b: { text: 'Diamond' },
          c: { text: 'Oval', feedback: 'The oval is for start and end, not for decisions.' },
          d: { text: 'Parallelogram', feedback: 'A parallelogram is for input and output. A diamond is used for a decision.' },
        },
      },
      'comp-flowchart-q3': {
        text: 'Which symbol would show taking a number from the keyboard in a flowchart?',
        options: {
          a: { text: 'Parallelogram' },
          b: { text: 'Diamond', feedback: 'A diamond is for a decision. Taking or giving something is input-output, whose symbol is the parallelogram.' },
          c: { text: 'Rectangle', feedback: 'A rectangle is for a calculation or task. Taking a number is input, whose symbol is the parallelogram.' },
          d: { text: 'Oval', feedback: 'The oval is for start and end. The input symbol is the parallelogram.' },
        },
      },
    },
  },
  'comp-sequence-loop': {
    title: 'Sequences and Loops in Logic',
    points: [
      'When steps run one after another in order, it is called a sequence.',
      'When some steps are repeated again and again, it is called a loop.',
      'A loop saves time, because the same thing does not have to be written again and again.',
      'A loop has a condition or a count, so it stops at the right time.',
    ],
    example: 'Climbing stairs, we repeat the same action on every step; that is like a loop.',
    questions: {
      'comp-sequence-loop-q1': {
        text: 'What does a loop mean?',
        options: {
          a: { text: 'Doing a task only once', feedback: 'Doing something once is not a loop. In a loop, steps are repeated again and again.' },
          b: { text: 'Repeating some steps again and again' },
          c: { text: 'Leaving a task in the middle', feedback: 'Leaving is not a loop. A loop means repetition.' },
          d: { text: 'Drawing a picture', feedback: 'Drawing a picture is a different task. A loop is the repetition of steps.' },
        },
      },
      'comp-sequence-loop-q2': {
        text: '"Say the counting from 1 to 10" — where is the loop in this?',
        options: {
          a: { text: 'Saying each next number is a step repeated again and again' },
          b: { text: 'There is no repetition in it', feedback: '1, 2, 3... the same work is repeating every time; that is the loop.' },
          c: { text: 'Only saying 10 is the loop', feedback: 'The loop is in the whole counting, not only in the last number.' },
          d: { text: 'Counting becomes a loop only when written', feedback: 'A loop comes from repetition, not from speaking or writing.' },
        },
      },
      'comp-sequence-loop-q3': {
        text: 'What is the most important thing for a loop?',
        options: {
          a: { text: 'It has a condition or count for stopping' },
          b: { text: 'It keeps running forever without stopping', feedback: 'A loop that never stops is a mistake. Every loop must stop at the right time.' },
          c: { text: 'It has only one step', feedback: 'A loop can have many steps too. The important thing is the stopping condition.' },
          d: { text: 'It must be written by hand', feedback: 'A loop is a way of thinking; writing by hand is not required.' },
        },
      },
    },
  },
  'comp-variables': {
    title: 'Variables and Data',
    points: [
      'A variable is a named box in which a value is stored.',
      'The value of a variable can change, just like a score keeps growing in a game.',
      'Data is of many kinds: numbers, words (text), and yes-no (true/false).',
      'In Python, writing x = 5 means the value 5 is put into the box named x.',
    ],
    example: 'In a game, the variable named "score" increases with every correct answer.',
    questions: {
      'comp-variables-q1': {
        text: 'What is a variable?',
        options: {
          a: { text: 'The screen of the computer', feedback: 'A screen shows things. A variable is a name that stores a value.' },
          b: { text: 'A named place where a value is stored' },
          c: { text: 'A kind of keyboard', feedback: 'A keyboard is a device. A variable is a name inside a program that holds a value.' },
          d: { text: 'A number that always stays the same', feedback: 'The value of a variable can change; that is why it is called a variable.' },
        },
      },
      'comp-variables-q2': {
        text: 'What does x = 5 mean in Python?',
        options: {
          a: { text: 'Checking whether x and 5 are equal', feedback: 'A single = sign stores a value. Checking uses ==. Here 5 is stored in x.' },
          b: { text: 'The value 5 is stored in the variable named x' },
          c: { text: 'x has been deleted', feedback: 'Nothing is deleted here; 5 is stored in x.' },
          d: { text: 'x is stored in a variable named 5', feedback: 'The value moves from the right side into the name on the left. 5 is stored in x, not the reverse.' },
        },
      },
      'comp-variables-q3': {
        text: 'Which of these is word (text) data?',
        options: {
          a: { text: '25', feedback: '25 is a number. Words are always written inside "..." marks.' },
          b: { text: '"Ali"' },
          c: { text: 'true', feedback: 'True/false is a different kind of data, called boolean.' },
          d: { text: '3.5', feedback: '3.5 is a decimal number, not a word.' },
        },
      },
    },
  },
  'comp-conditions': {
    title: 'Conditions (if-else)',
    points: [
      'if-else is used to make decisions in a program.',
      'If the condition is true, the if part runs; if it is false, the else part runs.',
      'Out of the two parts, only one runs at a time.',
      'Conditions are made by comparing, like whether a number is bigger, smaller or equal.',
    ],
    example: 'If marks are 33 or more, "Pass", otherwise "Fail" — that is if-else.',
    questions: {
      'comp-conditions-q1': {
        text: 'What is the job of if-else?',
        options: {
          a: { text: 'Doing the same task again and again', feedback: 'Repeating is the job of a loop. if-else makes decisions.' },
          b: { text: 'Making a decision by checking a condition' },
          c: { text: 'Printing a picture', feedback: 'Printing is the printer job. if-else decides using a condition.' },
          d: { text: 'Switching the computer off', feedback: 'if-else is for decisions inside a program.' },
        },
      },
      'comp-conditions-q2': {
        text: 'If the condition is false, which part runs?',
        options: {
          a: { text: 'The if part', feedback: 'The if part runs when the condition is true. When it is false, else runs.' },
          b: { text: 'The else part' },
          c: { text: 'Both parts', feedback: 'Both do not run together. Only one part runs at a time.' },
          d: { text: 'No part at all', feedback: 'The else part exists exactly so that it runs when the condition is false.' },
        },
      },
      'comp-conditions-q3': {
        text: 'Marks = 40. The rule is: if marks >= 33 then Pass, else Fail. What will the result be?',
        options: {
          a: { text: 'Pass, because 40 is more than 33' },
          b: { text: 'Fail, because 40 is not a full 50', feedback: 'The rule compares with 33, not 50. 40 >= 33 is true, so the result is Pass.' },
          c: { text: 'Both, Pass and Fail', feedback: 'Only one result comes at a time.' },
          d: { text: 'Nothing will happen', feedback: 'The condition is true, so the if part will surely run.' },
        },
      },
    },
  },
  'comp-loops-basics': {
    title: 'Loops and Scratch/Python Basics',
    points: [
      'A loop is a way to do the same task many times, like printing "Salaam" 5 times.',
      'In Scratch, programs are made by joining blocks, and the "repeat" block does the work of a loop.',
      'In Python, a for loop runs with counting and a while loop runs with a condition.',
      'If the condition of a while loop never becomes false, it never stops; that is called an infinite loop.',
    ],
    example: 'In Scratch, to make the cat walk 10 steps again and again, the "move" block is placed inside a repeat block.',
    questions: {
      'comp-loops-basics-q1': {
        text: 'Which block is used to make a loop in Scratch?',
        options: {
          a: { text: 'The repeat block' },
          b: { text: 'The sound block', feedback: 'The sound block plays a sound. The repeat block is used for repetition.' },
          c: { text: 'The colour-changing block', feedback: 'The colour block only changes the look. A loop needs repeat.' },
          d: { text: 'The delete block', feedback: 'Deleting is a different task. Repetition comes from the repeat block.' },
        },
      },
      'comp-loops-basics-q2': {
        text: 'When does a while loop stop?',
        options: {
          a: { text: 'On its own after running once', feedback: 'A while loop is not for one run. It keeps running while its condition stays true.' },
          b: { text: 'When its condition becomes false' },
          c: { text: 'It never stops', feedback: 'The condition of a correctly made while loop becomes false at some point, and then it stops.' },
          d: { text: 'Only when the computer is switched off', feedback: 'A loop stops by its condition; there is no need to switch the computer off.' },
        },
      },
      'comp-loops-basics-q3': {
        text: 'A loop in a program is not stopping at all. What is the most likely reason?',
        options: {
          a: { text: 'The condition of the loop never becomes false' },
          b: { text: 'The computer is very fast', feedback: 'Speed does not make a loop infinite. The condition staying true forever is the reason.' },
          c: { text: 'The name of the variable is long', feedback: 'The length of a name does not trap a loop. Look at the condition.' },
          d: { text: 'The screen is small', feedback: 'The size of the screen is not connected to a loop. The condition staying true is the reason.' },
        },
      },
    },
  },
  'comp-internet-web': {
    title: 'Internet and Web Basics',
    points: [
      'The internet is a network of computers all over the world, joined together.',
      'The web (WWW) is one service that runs on the internet, and it is made of web pages.',
      'A browser, like Chrome or Firefox, is needed to see web pages.',
      'Every web page has its own address, which is called a URL.',
    ],
    example: 'Email and video calls also run on the internet, but they are not the web.',
    questions: {
      'comp-internet-web-q1': {
        text: 'What is used to see web pages?',
        options: {
          a: { text: 'A browser' },
          b: { text: 'A printer', feedback: 'A printer prints. Web pages open in a browser.' },
          c: { text: 'A scanner', feedback: 'A scanner puts pictures in. A browser is needed to see pages.' },
          d: { text: 'A pen drive', feedback: 'A pen drive is storage. Web pages open with a browser.' },
        },
      },
      'comp-internet-web-q2': {
        text: 'What is the correct relation between the internet and the web?',
        options: {
          a: { text: 'Both are the same thing', feedback: 'They are not the same. The web is one service that runs on the internet.' },
          b: { text: 'The web is a service that runs on the internet' },
          c: { text: 'The internet is a part of the web', feedback: 'It is the reverse. The internet is the big network; the web is one of its services.' },
          d: { text: 'The web works without the internet', feedback: 'Web pages cannot open without the internet.' },
        },
      },
      'comp-internet-web-q3': {
        text: 'Which thing uses the internet but is not the web?',
        options: {
          a: { text: 'Sending an email' },
          b: { text: 'Opening a website', feedback: 'Opening a website is the web itself. Email is a separate service that runs on the internet.' },
          c: { text: 'Reading an online news page', feedback: 'A news page is a web page. Email is not the web.' },
          d: { text: 'Watching a video in a browser', feedback: 'A service running in a browser is the web. Email is a service separate from the web.' },
        },
      },
    },
  },
  'comp-password-safety': {
    title: 'Strong Passwords and Online Safety',
    points: [
      'A strong password is long and mixes capital and small letters, digits and symbols.',
      'Never keep an easy password like your name, your date of birth, or "12345".',
      'Keep a different password for every account and tell it to no one.',
      'Never give an OTP to anyone; even a bank or company does not ask for an OTP on the phone.',
    ],
    example: '"Ali2015" is a weak password, but a password like "Mango#Tree42" is much stronger.',
    questions: {
      'comp-password-safety-q1': {
        text: 'Which of these is the strongest password?',
        options: {
          a: { text: '12345', feedback: 'Only digits, and in order too — this is the weakest password.' },
          b: { text: 'My own name', feedback: 'Everyone knows your name, so a name password is easy to guess.' },
          c: { text: 'Mango#Tree42' },
          d: { text: 'password', feedback: '"password" is among the most common passwords in the world; everyone tries it.' },
        },
      },
      'comp-password-safety-q2': {
        text: 'A stranger asks for your OTP on the phone. What should you do?',
        options: {
          a: { text: 'Tell it at once', feedback: 'Never give an OTP to anyone. Giving an OTP is like handing over the key to your account.' },
          b: { text: 'Do not give the OTP and tell the elders at home' },
          c: { text: 'Tell only the last digit', feedback: 'Not even half an OTP should be given. An OTP is fully secret.' },
          d: { text: 'Send it in a message', feedback: 'An OTP is never sent to anyone, in any way.' },
        },
      },
      'comp-password-safety-q3': {
        text: 'Which is the best habit for password safety?',
        options: {
          a: { text: 'Keeping a different, long password for every account' },
          b: { text: 'Keeping one same password for all accounts', feedback: 'If one password leaks, all accounts are in danger. Keep a different password for every account.' },
          c: { text: 'Writing the password down and showing everyone', feedback: 'Passwords are kept secret; they are not shown to anyone.' },
          d: { text: 'Keeping only your date of birth as the password', feedback: 'Many people know a date of birth; it is not a safe password.' },
        },
      },
    },
  },
  'comp-digital-citizenship': {
    title: 'Digital Citizenship and Cyberbullying',
    points: [
      'The rules of good behaviour apply on the internet just as in real life.',
      'Scaring, threatening or making fun of someone online is cyberbullying, and it is wrong.',
      'Do not give your personal information, like your home address or school name, to strangers.',
      'If something wrong happens, tell an elder, and block and report the bad person.',
    ],
    example: 'Making a nasty comment on a classmate photo in the class group is cyberbullying.',
    questions: {
      'comp-digital-citizenship-q1': {
        text: 'What is cyberbullying?',
        options: {
          a: { text: 'Scaring someone online or making fun of them' },
          b: { text: 'Studying on the internet', feedback: 'Studying is a good thing. Scaring or mocking someone online is cyberbullying.' },
          c: { text: 'Making a strong password', feedback: 'Passwords are about safety. Bullying is bad behaviour online.' },
          d: { text: 'Making a video call', feedback: 'A video call is a normal thing. Troubling someone online is bullying.' },
        },
      },
      'comp-digital-citizenship-q2': {
        text: 'In an online game, a stranger player asks for your home address. What will you do?',
        options: {
          a: { text: 'Tell the address; he has become a friend', feedback: 'A person met online is still a stranger. Never give personal information.' },
          b: { text: 'Not give the address and tell the elders' },
          c: { text: 'Tell only the name of the city', feedback: 'Even a little information is not given to a stranger. Staying safe is the right thing.' },
          d: { text: 'Send my photo instead', feedback: 'A photo is also personal information; it is not sent to strangers.' },
        },
      },
      'comp-digital-citizenship-q3': {
        text: 'Someone is making fun of a classmate in the class group. What is the best thing to do?',
        options: {
          a: { text: 'Laugh along and join in', feedback: 'Joining in is also taking part in bullying. It is wrong.' },
          b: { text: 'Stay quiet; it is none of my business', feedback: 'Staying quiet does not help. The right thing is to tell the elders and report it.' },
          c: { text: 'Ask them to stop, tell the elders and report it' },
          d: { text: 'Threaten that classmate myself', feedback: 'Threats make things worse. Telling the elders and reporting is the right way.' },
        },
      },
    },
  },
};

export const EN_COMPUTER_MISCONCEPTIONS = {
  'input-is-output': 'Thinking input is output',
  'keyboard-is-storage': 'Thinking the keyboard is storage',
  'keyboard-only-games': 'Thinking the keyboard is only for games',
  'printer-is-input': 'Thinking the printer is input',
  'printer-is-storage': 'Thinking the printer is storage',
  'printer-is-cpu': 'Thinking the printer is part of the CPU',
  'input-output-swapped': 'Mixing up input and output',
  'monitor-is-brain': 'Thinking the monitor is the brain of the computer',
  'keyboard-is-brain': 'Thinking the keyboard is the brain',
  'printer-is-brain': 'Thinking the printer is the brain',
  'ram-is-permanent': 'Thinking RAM is permanent memory',
  'ram-is-rom': 'Thinking RAM and ROM are the same',
  'ram-is-disk': 'Thinking RAM is a disk',
  'startup-from-ram': 'Thinking start-up instructions are in RAM',
  'startup-from-pendrive': 'Thinking start-up instructions are in a pen drive',
  'monitor-is-storage': 'Thinking the monitor is storage',
  'speaker-is-storage': 'Thinking the speaker is storage',
  'ssd-has-disk': 'Thinking an SSD has a spinning disk',
  'ssd-is-cheaper': 'Thinking an SSD is always cheaper',
  'ssd-no-power': 'Thinking an SSD runs without electricity',
  'gb-mb-confusion': 'Not knowing how GB and MB are related',
  'binary-has-ten-digits': 'Thinking binary has ten digits',
  'binary-has-letters': 'Thinking binary has letters',
  'binary-count-digits': 'Thinking the binary value is the count of digits',
  'binary-same-as-decimal': 'Reading binary just like decimal',
  'binary-all-ones': 'Adding the place of a 0 as well',
  'binary-place-value-skip': 'Adding place values wrongly',
  'conversion-off-by-one': 'Going one more or one less while converting',
  'conversion-wrong-combo': 'Choosing the wrong mix of place values',
  'conversion-all-ones': 'Thinking every place is 1',
  'conversion-missing-digit': 'Dropping a digit in binary',
  'byte-is-ten-bits': 'Thinking a byte has 10 bits',
  'byte-is-hundred-bits': 'Thinking a byte has 100 bits',
  'bit-byte-same': 'Thinking bit and byte are the same',
  'unit-size-confusion': 'Not recognising the sizes of units',
  'kb-is-1000': 'Thinking 1 KB is 1000 bytes',
  'kb-times-forgot': 'Forgetting to multiply',
  'algorithm-is-hardware': 'Thinking an algorithm is a part of the computer',
  'algorithm-is-math-only': 'Thinking an algorithm is only for maths',
  'algorithm-is-game': 'Thinking an algorithm is a game',
  'longer-is-better': 'Thinking longer is always better',
  'algorithm-never-ends': 'Not understanding that an algorithm ends',
  'algorithm-only-computer': 'Thinking an algorithm is only for computers',
  'steps-wrong-order': 'Keeping the steps in the wrong order',
  'symbol-rectangle-start': 'Thinking the rectangle is the start symbol',
  'symbol-diamond-start': 'Thinking the diamond is the start symbol',
  'symbol-arrow-start': 'Thinking the arrow is the start symbol',
  'decision-is-rectangle': 'Thinking the decision symbol is the rectangle',
  'decision-is-oval': 'Thinking the decision symbol is the oval',
  'decision-is-parallelogram': 'Thinking the decision symbol is the parallelogram',
  'input-is-diamond': 'Thinking the input symbol is the diamond',
  'input-is-rectangle': 'Thinking the input symbol is the rectangle',
  'input-is-oval': 'Thinking the input symbol is the oval',
  'loop-runs-once': 'Thinking a loop runs only once',
  'loop-means-stop': 'Thinking loop means stopping',
  'loop-is-drawing': 'Thinking a loop means drawing a picture',
  'no-loop-in-counting': 'Not seeing repetition in counting',
  'loop-only-last': 'Thinking only the last step is the loop',
  'loop-only-writing': 'Linking a loop only with writing',
  'loop-never-stops': 'Thinking a loop never stopping is correct',
  'loop-one-step-only': 'Thinking a loop has only one step',
  'variable-is-screen': 'Thinking a variable is the screen',
  'variable-is-keyboard': 'Thinking a variable is a keyboard',
  'variable-never-changes': 'Thinking a variable value never changes',
  'equal-is-compare': 'Thinking = is the sign for comparing',
  'assign-is-delete': 'Thinking storing a value means deleting',
  'assign-is-reversed': 'Thinking the value moves in the reverse direction',
  'number-is-text': 'Thinking a number is text',
  'boolean-is-text': 'Thinking true/false is text',
  'decimal-is-text': 'Thinking a decimal number is text',
  'if-is-loop': 'Thinking if-else is a loop',
  'if-is-printing': 'Thinking if-else means printing',
  'if-is-shutdown': 'Thinking if-else means switching off the computer',
  'false-runs-if': 'Thinking the if part runs when the condition is false',
  'if-runs-both': 'Thinking if and else both run together',
  'false-runs-none': 'Thinking nothing runs when the condition is false',
  'condition-wrong-compare': 'Comparing with the wrong number',
  'scratch-sound-is-loop': 'Thinking the sound block is the loop',
  'scratch-color-is-loop': 'Thinking the colour block is the loop',
  'scratch-delete-is-loop': 'Thinking the delete block is the loop',
  'while-runs-once': 'Thinking a while loop runs only once',
  'while-never-stops': 'Thinking a while loop never stops',
  'while-stops-on-shutdown': 'Thinking a while loop stops when the computer is switched off',
  'infinite-loop-is-speed': 'Thinking speed is the reason for an infinite loop',
  'infinite-loop-is-name': 'Thinking the name is the reason for an infinite loop',
  'infinite-loop-is-screen': 'Thinking the screen is the reason for an infinite loop',
  'browser-is-printer': 'Thinking the browser is a printer',
  'browser-is-scanner': 'Thinking the browser is a scanner',
  'browser-is-pendrive': 'Thinking the browser is a pen drive',
  'internet-is-web': 'Thinking the internet and the web are the same',
  'web-is-bigger': 'Thinking the web is bigger than the internet',
  'web-without-internet': 'Thinking the web works without the internet',
  'website-is-not-web': 'Thinking a website is not the web',
  'news-is-not-web': 'Thinking a news page is not the web',
  'video-is-not-web': 'Thinking a browser video is not the web',
  'short-password-safe': 'Thinking a short password is safe',
  'name-password-safe': 'Thinking a name or birth-date password is safe',
  'common-password-safe': 'Thinking a common password is safe',
  'share-otp-safe': 'Thinking sharing an OTP is safe',
  'same-password-safe': 'Thinking one password for all accounts is safe',
  'password-show-safe': 'Thinking showing a password is safe',
  'bullying-is-study': 'Thinking cyberbullying means studying',
  'bullying-is-password': 'Thinking cyberbullying means passwords',
  'bullying-is-call': 'Thinking cyberbullying means a video call',
  'personal-info-safe': 'Thinking sharing personal information is safe',
  'bullying-is-fun': 'Thinking joining in bullying is just fun',
  'bullying-ignore-ok': 'Thinking staying quiet about bullying is fine',
  'bullying-fight-back': 'Thinking answering bullying with threats is fine',
};
