// English mirror of math.js, keyed by the same ids.
// Correct options carry only { text }; wrong options carry { text, feedback }.

export const EN_MATH_TITLE = 'Class 8 Mathematics';

export const EN_MATH_CHAPTERS = {
  'math-parimey': 'Rational Numbers',
  'math-varg': 'Squares and Square Roots',
  'math-beejganit': 'Algebraic Expressions',
  'math-rekhik': 'Linear Equations',
  'math-chaturbhuj': 'Quadrilaterals',
  'math-kshetramiti': 'Mensuration',
};

export const EN_MATH_CONCEPTS = {
  'math-parimey-parichay': {
    title: 'What Is a Rational Number',
    points: [
      'A rational number is a number that can be written as p/q, where p and q are integers and q ≠ 0.',
      'Every integer is also a rational number, because it can be written with denominator 1, like 5 = 5/1.',
      'Fractions, decimals like 0.5, and negative numbers can also be rational numbers.',
    ],
    example: 'Half a roti is written as 1/2, which is a rational number.',
    questions: {
      'math-parimey-parichay-q1': {
        text: 'Which of these is a rational number?',
        options: {
          a: { text: '3/4' },
          b: { text: '5/0', feedback: 'The denominator cannot be zero, because dividing by zero is not possible.' },
          c: { text: '√2', feedback: '√2 cannot be written as p/q, so it is an irrational number.' },
          d: { text: '0/0', feedback: '0/0 has no fixed value; the denominator cannot be zero.' },
        },
      },
      'math-parimey-parichay-q2': {
        text: 'How can the number −7 be written in rational form?',
        options: {
          a: { text: '1/−7', feedback: '1/−7 equals −1/7, not −7. You swapped the numerator and the denominator.' },
          b: { text: '−7/1' },
          c: { text: '0/−7', feedback: '0/−7 = 0, not −7. If the numerator is zero, the whole number becomes zero.' },
          d: { text: '−7/0', feedback: 'The denominator cannot be zero, so −7/0 is not a rational form.' },
        },
      },
      'math-parimey-parichay-q3': {
        text: 'Which statement is true?',
        options: {
          a: { text: 'Every rational number is an integer', feedback: '1/2 is rational but not an integer, so this statement is false.' },
          b: { text: '0 is not a rational number', feedback: '0 can be written as 0/1, so 0 is also a rational number.' },
          c: { text: 'Every integer is a rational number' },
          d: { text: 'Only positive fractions are rational numbers', feedback: '−3/4 is also rational. Negative numbers can be rational too.' },
        },
      },
    },
  },
  'math-parimey-jod-guna': {
    title: 'Adding, Subtracting, Multiplying and Dividing Rationals',
    points: [
      'For addition or subtraction, first make the denominators equal, then add or subtract the numerators.',
      'In multiplication, numerator × numerator and denominator × denominator.',
      'To divide, multiply by the reciprocal of the second number.',
    ],
    example: 'Half a glass (1/2) and a quarter glass (1/4) of milk together make 3/4 glass of milk.',
    questions: {
      'math-parimey-jod-guna-q1': {
        text: '1/2 + 1/4 = ?',
        options: {
          a: { text: '2/6', feedback: 'Do not add both numerators and denominators. First make denominators equal: 2/4 + 1/4 = 3/4.' },
          b: { text: '1/8', feedback: '1/8 comes from multiplying. For addition, make denominators equal and add numerators: 3/4.' },
          c: { text: '3/4' },
          d: { text: '2/4', feedback: 'Adding only the numerators gave 2/4. With equal denominators, 2/4 + 1/4 = 3/4.' },
        },
      },
      'math-parimey-jod-guna-q2': {
        text: '2/3 × 3/5 = ?',
        options: {
          a: { text: '5/8', feedback: 'You added the numerators and denominators. In multiplication, numerator × numerator and denominator × denominator: 6/15 = 2/5.' },
          b: { text: '2/5' },
          c: { text: '1', feedback: 'When the 3 cancels with 3, 2/5 remains, not 1. Cancel carefully.' },
          d: { text: '10/9', feedback: '10/9 comes from flipping the second number and multiplying. Plain multiplication uses no reciprocal: 2/5.' },
        },
      },
      'math-parimey-jod-guna-q3': {
        text: '3/4 ÷ 2/3 = ?',
        options: {
          a: { text: '1/2', feedback: 'You multiplied directly. For division, multiply by the reciprocal of the second number: 3/4 × 3/2 = 9/8.' },
          b: { text: '8/9', feedback: 'You wrote the reciprocal of the correct answer. 3/4 × 3/2 = 9/8.' },
          c: { text: '5/7', feedback: 'You used the addition method. For division, multiply by the reciprocal: 9/8.' },
          d: { text: '9/8' },
        },
      },
    },
  },
  'math-parimey-beech': {
    title: 'Rationals Between Two Rationals and the Number Line',
    points: [
      'There are countless rational numbers between any two rational numbers.',
      'An easy way to find one number in between is to take the average of the two numbers.',
      'On the number line, negative rationals lie to the left of zero and positive ones to the right.',
    ],
    example: '3/4 comes between 1/2 and 1, like a three-quarter part between a half and a whole roti.',
    questions: {
      'math-parimey-beech-q1': {
        text: 'Which number comes between 1/2 and 1?',
        options: {
          a: { text: '1/4', feedback: '1/4 is smaller than 1/2, so it does not come in between.' },
          b: { text: '3/4' },
          c: { text: '3/2', feedback: '3/2 is bigger than 1, so it does not come in between.' },
          d: { text: '2', feedback: '2 is also bigger than 1. Compare the number with both ends before choosing.' },
        },
      },
      'math-parimey-beech-q2': {
        text: 'Which rational number lies between 1/3 and 2/3?',
        options: {
          a: { text: '1/6', feedback: '1/6 is smaller than 1/3 (that is, 2/6), so it is not in between.' },
          b: { text: '5/6', feedback: '5/6 is bigger than 2/3 (that is, 4/6), so it is not in between.' },
          c: { text: '2/3', feedback: '2/3 is itself an end point. A number in between must be different from both ends.' },
          d: { text: '1/2' },
        },
      },
      'math-parimey-beech-q3': {
        text: 'Where will −3/4 be on the number line?',
        options: {
          a: { text: 'To the right of 0', feedback: 'A negative number is always to the left of 0.' },
          b: { text: 'To the left of −1', feedback: '−3/4 is greater than −1 because its value is less than 1. It lies between 0 and −1.' },
          c: { text: 'To the left of 0, between 0 and −1' },
          d: { text: 'Exactly at −1', feedback: '−3/4 is not the whole of −1; it is three quarters of it.' },
        },
      },
    },
  },
  'math-varg-pattern': {
    title: 'Perfect Squares and Their Patterns',
    points: [
      'Multiplying a number by itself gives its square, like 5² = 25.',
      'Numbers whose square root is a whole integer are called perfect squares.',
      'A number whose unit digit is 2, 3, 7 or 8 can never be a perfect square.',
      'The sum of the first n odd numbers is n².',
    ],
    example: 'If a field has 6 rows with 6 plants in each row, the total plants are 6² = 36.',
    questions: {
      'math-varg-pattern-q1': {
        text: 'What is the square of 9?',
        options: {
          a: { text: '18', feedback: 'A square means the number × the same number: 9 × 9 = 81. Doing 9 × 2 is wrong.' },
          b: { text: '81' },
          c: { text: '27', feedback: '27 is the cube of 3. The square of 9 is 9 × 9 = 81.' },
          d: { text: '90', feedback: '9 × 9 = 81, not 90. Multiply carefully.' },
        },
      },
      'math-varg-pattern-q2': {
        text: 'Which of these numbers can never be a perfect square?',
        options: {
          a: { text: '144', feedback: '144 = 12², so it is a perfect square. Check the unit digit again.' },
          b: { text: '128' },
          c: { text: '225', feedback: '225 = 15², so it is a perfect square.' },
          d: { text: '625', feedback: '625 = 25², so it is a perfect square.' },
        },
      },
      'math-varg-pattern-q3': {
        text: 'The sum 1 + 3 + 5 + 7 + 9 is the square of which number?',
        options: {
          a: { text: '9²', feedback: 'Do not take the square of the last number. There are 5 odd numbers, so the sum is 5² = 25.' },
          b: { text: '4²', feedback: 'There are 5 odd numbers here, not 4. The sum will be 5² = 25.' },
          c: { text: '25²', feedback: 'The sum itself is 25, and 25 = 5². 25² would be 625.' },
          d: { text: '5²' },
        },
      },
    },
  },
  'math-vargmool-gunankhand': {
    title: 'Square Root by Prime Factorisation',
    points: [
      'First find the prime factors of the number and group them in pairs.',
      'Taking one factor from each pair and multiplying gives the square root.',
      'If all factors cannot be grouped in pairs, the number is not a perfect square.',
    ],
    example: 'To plant 36 plants in a square bed, √36 = 6, so 6 plants will go on each side.',
    questions: {
      'math-vargmool-gunankhand-q1': {
        text: '√144 = ?',
        options: {
          a: { text: '72', feedback: 'A square root does not mean half. 12 × 12 = 144, so √144 = 12.' },
          b: { text: '14', feedback: '14 × 14 = 196. Since 12 × 12 = 144, the answer is 12.' },
          c: { text: '12' },
          d: { text: '24', feedback: '24 × 24 = 576. The correct square root is 12.' },
        },
      },
      'math-vargmool-gunankhand-q2': {
        text: 'By prime factorisation, √324 = ?',
        options: {
          a: { text: '16', feedback: '324 = 2² × 3⁴. Taking one factor from each pair gives 2 × 3 × 3 = 18.' },
          b: { text: '81', feedback: '81 is 9². Since 18 × 18 = 324, √324 = 18.' },
          c: { text: '18' },
          d: { text: '36', feedback: '36 × 36 = 1296. Take one factor from each pair: 2 × 3 × 3 = 18.' },
        },
      },
      'math-vargmool-gunankhand-q3': {
        text: 'Which number will not have a whole-number square root?',
        options: {
          a: { text: '441', feedback: '441 = 21², so its square root is the whole number 21.' },
          b: { text: '560' },
          c: { text: '729', feedback: '729 = 27², so its square root is the whole number 27.' },
          d: { text: '1024', feedback: '1024 = 32², so its square root is the whole number 32.' },
        },
      },
    },
  },
  'math-vargmool-anuman': {
    title: 'Estimating Square Roots',
    points: [
      'For an estimate, remember the perfect squares near the number.',
      '50 lies between 49 (7²) and 64 (8²), so √50 lies between 7 and 8.',
      'The closer perfect square tells you which number the square root is nearer to.',
    ],
    example: 'A square room of 50 square metres has a side of about 7 metres, because √50 ≈ 7.07.',
    questions: {
      'math-vargmool-anuman-q1': {
        text: '√90 will lie between which two numbers?',
        options: {
          a: { text: '8 and 9', feedback: '8² = 64 and 9² = 81 are both smaller than 90. 90 lies between 81 and 100.' },
          b: { text: '9 and 10' },
          c: { text: '10 and 11', feedback: '10² = 100 is bigger than 90, so √90 is smaller than 10.' },
          d: { text: '45 and 46', feedback: 'A square root is not half the number. Look at the nearby squares 81 and 100.' },
        },
      },
      'math-vargmool-anuman-q2': {
        text: 'What is the best estimate of √50?',
        options: {
          a: { text: '6.5', feedback: '6.5² = 42.25, which is far below 50. 50 is very close to 49, so √50 ≈ 7.1.' },
          b: { text: '25', feedback: '25 is half of 50, not its square root. The square root is about 7.1.' },
          c: { text: '7.1' },
          d: { text: '8.2', feedback: '8.2² = 67.24, which is far too big. 50 is near 49 (7²), so the estimate is 7.1.' },
        },
      },
      'math-vargmool-anuman-q3': {
        text: 'A square field has an area of 200 square metres. What is the best estimate of one side?',
        options: {
          a: { text: 'About 10 metres', feedback: '10² = 100 is only half. 14² = 196 is closest to 200.' },
          b: { text: 'About 20 metres', feedback: '20² = 400 is double. 14² = 196 is close, so the side is about 14 metres.' },
          c: { text: 'About 100 metres', feedback: 'Half the area is not the side. √200 ≈ 14.1, so about 14 metres.' },
          d: { text: 'About 14 metres' },
        },
      },
    },
  },
  'math-beej-padh': {
    title: 'Terms, Coefficients and Adding Like Terms',
    points: [
      'The parts of an expression joined by + or − are called terms.',
      'The number multiplied with the variable in a term is its coefficient, like 5 in 5x.',
      'Only like terms can be added or subtracted, like 3x + 2x = 5x.',
    ],
    example: '3 mangoes and 2 mangoes make 5 mangoes, just like 3x + 2x = 5x.',
    questions: {
      'math-beej-padh-q1': {
        text: 'In the expression 7y − 4, what is the coefficient of y?',
        options: {
          a: { text: '−4', feedback: '−4 is the constant term. The number multiplied with y, that is 7, is the coefficient.' },
          b: { text: '4', feedback: '4 is part of the constant term. Look in the term with the variable: 7 in 7y.' },
          c: { text: '7' },
          d: { text: 'y', feedback: 'y is the variable. The number with it, 7, is the coefficient.' },
        },
      },
      'math-beej-padh-q2': {
        text: '5a + 3a − 2a = ?',
        options: {
          a: { text: '10a', feedback: 'You forgot to subtract 2a. 5 + 3 − 2 = 6, so the answer is 6a.' },
          b: { text: '6a' },
          c: { text: '6', feedback: 'The variable a stays in the answer. The correct answer is 6a.' },
          d: { text: '6a²', feedback: 'Powers do not grow in addition or subtraction. Only the coefficients of like terms combine: 6a.' },
        },
      },
      'math-beej-padh-q3': {
        text: 'Simplify 4x + 3y + 2x − y.',
        options: {
          a: { text: '6x + 4y', feedback: 'The −y had to be subtracted. 3y − y = 2y, so the answer is 6x + 2y.' },
          b: { text: '10xy', feedback: 'x and y are unlike terms; they cannot be merged into one term.' },
          c: { text: '6x + 2', feedback: 'The y term stays as 2y. The variable does not disappear.' },
          d: { text: '6x + 2y' },
        },
      },
    },
  },
  'math-beej-gunan': {
    title: 'Multiplying Expressions',
    points: [
      'In monomial × monomial, coefficient × coefficient and variable × variable.',
      'When variables multiply, their powers add, like x² × x³ = x⁵.',
      'A monomial multiplies every term of a polynomial, like 2x(x + 3) = 2x² + 6x.',
    ],
    example: 'If a rectangle has length 3x and width 2x, its area is 3x × 2x = 6x².',
    questions: {
      'math-beej-gunan-q1': {
        text: '3x × 4x = ?',
        options: {
          a: { text: '12x', feedback: 'When variables multiply, powers add: x × x = x². The answer is 12x².' },
          b: { text: '7x²', feedback: 'Coefficients are multiplied, not added: 3 × 4 = 12. The answer is 12x².' },
          c: { text: '12x²' },
          d: { text: '12x³', feedback: 'Powers add, they do not multiply: 1 + 1 = 2. The answer is 12x².' },
        },
      },
      'math-beej-gunan-q2': {
        text: '2a(3a + 5) = ?',
        options: {
          a: { text: '6a² + 5', feedback: 'Multiply every term inside the bracket. 2a × 5 = 10a also comes: 6a² + 10a.' },
          b: { text: '6a² + 10a' },
          c: { text: '16a²', feedback: '6a² and 10a are unlike terms; they cannot be merged into one term.' },
          d: { text: '6a + 10a', feedback: 'In 2a × 3a, a × a = a². The first term is 6a².' },
        },
      },
      'math-beej-gunan-q3': {
        text: '(x + 2)(x + 3) = ?',
        options: {
          a: { text: 'x² + 6', feedback: 'The middle terms also come: 3x + 2x = 5x. The full answer is x² + 5x + 6.' },
          b: { text: 'x² + 6x + 6', feedback: 'The middle term is 3x + 2x = 5x, not 6x.' },
          c: { text: 'x² + 5x + 6' },
          d: { text: 'x² + 5x + 5', feedback: 'The constant term is 2 × 3 = 6, not 5.' },
        },
      },
    },
  },
  'math-beej-sarvasamika': {
    title: 'Identities (a + b)² and (a − b)²',
    points: [
      '(a + b)² = a² + 2ab + b².',
      '(a − b)² = a² − 2ab + b².',
      'Never forget the middle term 2ab; (a + b)² is not just a² + b².',
    ],
    example: 'To find 52², write (50 + 2)² = 2500 + 200 + 4 = 2704.',
    questions: {
      'math-beej-sarvasamika-q1': {
        text: '(x + 3)² = ?',
        options: {
          a: { text: 'x² + 9', feedback: 'The middle term 2 × x × 3 = 6x also comes. The answer is x² + 6x + 9.' },
          b: { text: 'x² + 6x + 9' },
          c: { text: 'x² + 3x + 9', feedback: 'The middle term is 2ab, not just ab: 2 × 3 = 6, so it is 6x.' },
          d: { text: 'x² + 6x + 6', feedback: 'The last term is b² = 3² = 9, not 6.' },
        },
      },
      'math-beej-sarvasamika-q2': {
        text: '(a − 5)² = ?',
        options: {
          a: { text: 'a² − 25', feedback: 'The middle term −2 × a × 5 = −10a also comes. The answer is a² − 10a + 25.' },
          b: { text: 'a² − 10a − 25', feedback: 'The last term b² is always positive: +25. Only the middle term is negative.' },
          c: { text: 'a² − 10a + 25' },
          d: { text: 'a² + 10a + 25', feedback: 'That is (a + 5)². In (a − b)² the middle term is negative.' },
        },
      },
      'math-beej-sarvasamika-q3': {
        text: 'Using an identity, what is the value of 103²?',
        options: {
          a: { text: '10009', feedback: 'Add the middle term 2 × 100 × 3 = 600 as well: 10000 + 600 + 9 = 10609.' },
          b: { text: '10909', feedback: 'The middle term is 600, not 900: 2 × 100 × 3 = 600. The answer is 10609.' },
          c: { text: '10609' },
          d: { text: '10309', feedback: 'Start from 100² = 10000: 10000 + 600 + 9 = 10609.' },
        },
      },
    },
  },
  'math-rekhik-saral': {
    title: 'Solving Simple Equations',
    points: [
      'In an equation, both sides of = are balanced.',
      'To leave the variable alone, use the inverse operation: if added, subtract; if multiplied, divide.',
      'Whatever operation you do on one side, do the same on the other side.',
    ],
    example: 'x + 5 = 12 means adding 5 to some number gave 12; that number is 12 − 5 = 7.',
    questions: {
      'math-rekhik-saral-q1': {
        text: 'In x + 7 = 15, x = ?',
        options: {
          a: { text: '22', feedback: 'The inverse of addition is subtraction: x = 15 − 7 = 8.' },
          b: { text: '8' },
          c: { text: '7', feedback: '7 is the added number. x = 15 − 7 = 8.' },
          d: { text: '15', feedback: 'The right-hand number is not itself the answer. x = 15 − 7 = 8.' },
        },
      },
      'math-rekhik-saral-q2': {
        text: 'In 4x = 28, x = ?',
        options: {
          a: { text: '112', feedback: 'The inverse of multiplication is division: x = 28 ÷ 4 = 7.' },
          b: { text: '24', feedback: '4 is multiplied here, not added. 28 ÷ 4 = 7.' },
          c: { text: '32', feedback: '4x means 4 × x. Dividing gives x = 28 ÷ 4 = 7.' },
          d: { text: '7' },
        },
      },
      'math-rekhik-saral-q3': {
        text: 'In 3x + 4 = 19, x = ?',
        options: {
          a: { text: '23/3', feedback: 'Subtract 4 first: 3x = 15, then divide by 3: x = 5. Keep the order of steps right.' },
          b: { text: '15', feedback: '3x = 15 is correct, but one step remains: x = 15 ÷ 3 = 5.' },
          c: { text: '5' },
          d: { text: '3', feedback: 'Check: 3 × 3 + 4 = 13, which is not 19. The correct x is 5.' },
        },
      },
    },
  },
  'math-rekhik-dono-or': {
    title: 'Equations with Variables on Both Sides',
    points: [
      'Bring the variable terms to one side and the numbers to the other side.',
      'When a term changes side, its sign changes.',
      'At the end, divide by the coefficient of the variable and check the answer.',
    ],
    example: 'If 5x = 3x + 8, subtract 3x from both sides to get 2x = 8, so x = 4.',
    questions: {
      'math-rekhik-dono-or-q1': {
        text: 'In 5x = 3x + 10, x = ?',
        options: {
          a: { text: '10', feedback: 'After 2x = 10, dividing by 2 still remains: x = 5.' },
          b: { text: '2', feedback: '2 is the coefficient of 2x. x = 10 ÷ 2 = 5.' },
          c: { text: '5' },
          d: { text: '13', feedback: '5x − 3x = 2x, then x = 10 ÷ 2 = 5.' },
        },
      },
      'math-rekhik-dono-or-q2': {
        text: 'In 7x − 5 = 3x + 11, x = ?',
        options: {
          a: { text: '6', feedback: '−5 becomes +5 on the other side: 4x = 11 + 5 = 16, so x = 4.' },
          b: { text: '4' },
          c: { text: '16', feedback: '4x = 16 is correct so far; now divide by 4: x = 4.' },
          d: { text: '1.5', feedback: 'The sign changes when the side changes: 11 + 5 = 16, then x = 16 ÷ 4 = 4.' },
        },
      },
      'math-rekhik-dono-or-q3': {
        text: 'In 2(x + 3) = 18, x = ?',
        options: {
          a: { text: '9', feedback: 'x + 3 = 9 has come; now subtract 3: x = 6.' },
          b: { text: '7.5', feedback: 'Open the bracket first: 2x + 6 = 18 gives 2x = 12 and x = 6.' },
          c: { text: '12', feedback: 'Subtracting 6 directly from 18 is wrong. First divide by 2: x + 3 = 9, so x = 6.' },
          d: { text: '6' },
        },
      },
    },
  },
  'math-rekhik-shabdik': {
    title: 'Making Equations from Word Problems',
    points: [
      'Take the unknown number as x and turn the problem into an equation.',
      'Write "double of a number" as 2x and "5 more" as + 5.',
      'After finding the answer, always check it in the original problem.',
    ],
    example: 'Adding 4 to three times a number gives 25: 3x + 4 = 25, so x = 7.',
    questions: {
      'math-rekhik-shabdik-q1': {
        text: 'Adding 9 to a number gives 20. What is the number?',
        options: {
          a: { text: '29', feedback: 'The inverse of addition is subtraction: the number is 20 − 9 = 11.' },
          b: { text: '9', feedback: '9 is the added number. The number is 20 − 9 = 11.' },
          c: { text: '11' },
          d: { text: '20', feedback: '20 is the result. The number is 11; check: 11 + 9 = 20.' },
        },
      },
      'math-rekhik-shabdik-q2': {
        text: 'Four times a number is 48. What is the number?',
        options: {
          a: { text: '44', feedback: 'Four times means 4x = 48. Do not subtract; divide: 48 ÷ 4 = 12.' },
          b: { text: '192', feedback: 'You multiplied 48 × 4. From 4x = 48, x = 48 ÷ 4 = 12.' },
          c: { text: '4', feedback: '4 is the coefficient, not the answer. x = 48 ÷ 4 = 12.' },
          d: { text: '12' },
        },
      },
      'math-rekhik-shabdik-q3': {
        text: 'A father is three times as old as his son. The sum of their ages is 48 years. What is the age of the son?',
        options: {
          a: { text: '36 years', feedback: '36 years is the age of the father. The age of the son is x = 12 years.' },
          b: { text: '12 years' },
          c: { text: '16 years', feedback: 'The sum includes both ages: x + 3x = 4x = 48, so x = 12.' },
          d: { text: '24 years', feedback: 'The two ages are not equal. From 4x = 48, the age of the son is 12 years.' },
        },
      },
    },
  },
  'math-chaturbhuj-kon-yog': {
    title: 'Sum of Angles of a Polygon',
    points: [
      'The sum of the interior angles of a polygon with n sides is (n − 2) × 180°.',
      'The four angles of a quadrilateral add up to 360°.',
      'The sum of the exterior angles of any polygon is always 360°.',
    ],
    example: 'The four corners of a rectangular room make 90° + 90° + 90° + 90° = 360°.',
    questions: {
      'math-chaturbhuj-kon-yog-q1': {
        text: 'What is the sum of the interior angles of a pentagon?',
        options: {
          a: { text: '360°', feedback: '360° is the sum for a quadrilateral. For a pentagon: (5 − 2) × 180° = 540°.' },
          b: { text: '540°' },
          c: { text: '900°', feedback: 'It is not n × 180° but (n − 2) × 180°: 3 × 180° = 540°.' },
          d: { text: '180°', feedback: '180° is the angle sum of a triangle. A pentagon has 540°.' },
        },
      },
      'math-chaturbhuj-kon-yog-q2': {
        text: 'Three angles of a quadrilateral are 80°, 90° and 100°. What is the fourth angle?',
        options: {
          a: { text: '270°', feedback: '270° is the sum of the three angles. The fourth angle is 360° − 270° = 90°.' },
          b: { text: '100°', feedback: 'The largest angle is not the answer. Subtract the sum from 360°: 90°.' },
          c: { text: '90°' },
          d: { text: '80°', feedback: '360° − (80° + 90° + 100°) = 90°, not the smallest angle.' },
        },
      },
      'math-chaturbhuj-kon-yog-q3': {
        text: 'The sum of the interior angles of a polygon is 720°. How many sides does it have?',
        options: {
          a: { text: '4', feedback: '720 ÷ 180 = 4 is the value of (n − 2). The number of sides is 4 + 2 = 6.' },
          b: { text: '8', feedback: 'From (n − 2) = 4 we get n = 6, not 8. Add only 2.' },
          c: { text: '6' },
          d: { text: '5', feedback: 'Check: (6 − 2) × 180° = 720°. The polygon has 6 sides.' },
        },
      },
    },
  },
  'math-chaturbhuj-samantar': {
    title: 'Properties of a Parallelogram',
    points: [
      'Opposite sides of a parallelogram are equal and parallel.',
      'Opposite angles are equal, and adjacent angles add up to 180°.',
      'The diagonals bisect each other, that is, they cut each other into halves.',
    ],
    example: 'The frame of a swing or a slanted table looks like a parallelogram, whose opposite sides stay equal.',
    questions: {
      'math-chaturbhuj-samantar-q1': {
        text: 'One side of a parallelogram is 7 cm. What is the side exactly opposite to it?',
        options: {
          a: { text: '14 cm', feedback: 'Opposite sides are equal, not double. The answer is 7 cm.' },
          b: { text: '7 cm' },
          c: { text: '3.5 cm', feedback: 'Do not halve it. The opposite side is equal, that is, 7 cm.' },
          d: { text: 'It cannot be found', feedback: 'The property tells us: opposite sides are equal, so the answer is 7 cm.' },
        },
      },
      'math-chaturbhuj-samantar-q2': {
        text: 'One angle of a parallelogram is 65°. What are the angle opposite to it and the angle next to (adjacent to) it?',
        options: {
          a: { text: '65° and 65°', feedback: 'Adjacent angles are not equal; they add up to 180°, so the adjacent one is 115°.' },
          b: { text: '115° and 65°', feedback: 'The order is swapped. The opposite angle is equal (65°) and the adjacent one is supplementary (115°).' },
          c: { text: '65° and 115°' },
          d: { text: '90° and 90°', feedback: 'Not every parallelogram is a rectangle. The angles are 65° and 115°.' },
        },
      },
      'math-chaturbhuj-samantar-q3': {
        text: 'In a parallelogram, one diagonal cuts the other so that a half part of 6 cm is formed. What is the length of that whole diagonal?',
        options: {
          a: { text: '6 cm', feedback: 'Diagonals bisect each other. 6 cm is the half part; the whole diagonal is 12 cm.' },
          b: { text: '3 cm', feedback: '6 cm is already the half. The whole diagonal is 6 × 2 = 12 cm.' },
          c: { text: '12 cm' },
          d: { text: '24 cm', feedback: 'Double it only once: 6 × 2 = 12 cm.' },
        },
      },
    },
  },
  'math-chaturbhuj-vishesh': {
    title: 'Special Quadrilaterals: Rhombus, Rectangle and Square',
    points: [
      'All four sides of a rhombus are equal, and its diagonals cut each other at right angles.',
      'In a rectangle, opposite sides are equal, all angles are 90°, and the diagonals are equal.',
      'A square has the properties of both a rectangle and a rhombus: all sides equal and all angles 90°.',
    ],
    example: 'A square tile on the floor, the rectangle shape of a door, and the shape of a kite are everyday examples.',
    questions: {
      'math-chaturbhuj-vishesh-q1': {
        text: 'Which quadrilateral has all four sides equal and all four angles 90°?',
        options: {
          a: { text: 'Rectangle', feedback: 'In a rectangle only the opposite sides are equal. All sides equal with 90° angles happens in a square.' },
          b: { text: 'Rhombus', feedback: 'The sides of a rhombus are equal, but its angles need not be 90°.' },
          c: { text: 'Square' },
          d: { text: 'Trapezium', feedback: 'A trapezium has only one pair of parallel sides. The correct answer is the square.' },
        },
      },
      'math-chaturbhuj-vishesh-q2': {
        text: 'What is special about the diagonals of a rectangle?',
        options: {
          a: { text: 'They cut at right angles', feedback: 'Perpendicular diagonals are the mark of a rhombus. The diagonals of a rectangle are equal.' },
          b: { text: 'They are equal' },
          c: { text: 'They are always unequal', feedback: 'The diagonals of a rectangle are equal and bisect each other.' },
          d: { text: 'A rectangle has only one diagonal', feedback: 'Every quadrilateral has two diagonals, including a rectangle.' },
        },
      },
      'math-chaturbhuj-vishesh-q3': {
        text: 'Which statement is true?',
        options: {
          a: { text: 'Every rectangle is a square', feedback: 'All four sides of a square are equal; those of a rectangle are not. The reverse statement is false.' },
          b: { text: 'The angles of a rhombus are always 90°', feedback: 'The angles of a rhombus can be anything. Only when they are 90° does it become a square.' },
          c: { text: 'A square is not a parallelogram', feedback: 'The opposite sides of a square are parallel, so a square is also a parallelogram.' },
          d: { text: 'Every square is a rectangle' },
        },
      },
    },
  },
  'math-kshetra-samlamb': {
    title: 'Area of a Trapezium',
    points: [
      'A trapezium has one pair of opposite sides parallel.',
      'Area of a trapezium = ½ × (sum of the parallel sides) × height.',
      'The height is the perpendicular distance between the two parallel sides.',
    ],
    example: 'One face of a bucket that is narrow at the top and wide at the bottom, or a slanted roof, is shaped like a trapezium.',
    questions: {
      'math-kshetra-samlamb-q1': {
        text: 'The parallel sides of a trapezium are 6 cm and 4 cm, and the height is 5 cm. What is its area?',
        options: {
          a: { text: '50 sq cm', feedback: 'The formula also has ½: ½ × (6 + 4) × 5 = 25 sq cm.' },
          b: { text: '25 sq cm' },
          c: { text: '20 sq cm', feedback: '4 × 5 is just one side × height. Take the sum of the parallel sides: ½ × 10 × 5 = 25.' },
          d: { text: '15 sq cm', feedback: 'Do not just add everything. Apply the formula: ½ × (6 + 4) × 5 = 25 sq cm.' },
        },
      },
      'math-kshetra-samlamb-q2': {
        text: 'The parallel sides of a trapezium are 10 m and 6 m, and the distance between them is 4 m. What is its area?',
        options: {
          a: { text: '64 sq m', feedback: 'You forgot the ½: ½ × (10 + 6) × 4 = 32 sq m.' },
          b: { text: '40 sq m', feedback: '10 × 4 is like a rectangle. Take the sum of both sides, 16, and halve the product: 32 sq m.' },
          c: { text: '20 sq m', feedback: 'You added all the numbers. The formula is ½ × (10 + 6) × 4 = 32 sq m.' },
          d: { text: '32 sq m' },
        },
      },
      'math-kshetra-samlamb-q3': {
        text: 'A trapezium-shaped field has an area of 180 sq m. The sum of its parallel sides is 24 m. What is the height (distance between the sides) of the field?',
        options: {
          a: { text: '7.5 m', feedback: 'The ½ is already in the formula: 180 = ½ × 24 × height = 12 × height. So the height is 15 m; do not halve again.' },
          b: { text: '15 m' },
          c: { text: '24 m', feedback: '24 m is the sum of the sides. The height is 180 ÷ 12 = 15 m.' },
          d: { text: '204 m', feedback: 'Do not add the area and the sum. The height is 180 ÷ 12 = 15 m.' },
        },
      },
    },
  },
  'math-kshetra-prishth': {
    title: 'Surface Area of Cube and Cuboid',
    points: [
      'All 6 faces of a cube are equal squares; surface area = 6 × side².',
      'Surface area of a cuboid = 2(lb + bh + hl), where l is length, b is breadth and h is height.',
      'Surface area is always written in square units.',
    ],
    example: 'The paint needed to colour a box from outside depends on its surface area.',
    questions: {
      'math-kshetra-prishth-q1': {
        text: 'What is the surface area of a cube of side 3 cm?',
        options: {
          a: { text: '9 sq cm', feedback: '9 is the area of only one face. A cube has 6 faces: 6 × 9 = 54.' },
          b: { text: '54 sq cm' },
          c: { text: '27 sq cm', feedback: '27 is the volume (3³). The surface area is 6 × 3² = 54 sq cm.' },
          d: { text: '36 sq cm', feedback: 'Count 6 faces, not 4: 6 × 9 = 54 sq cm.' },
        },
      },
      'math-kshetra-prishth-q2': {
        text: 'A cuboid has length 5 cm, breadth 3 cm and height 2 cm. What is its surface area?',
        options: {
          a: { text: '31 sq cm', feedback: '31 is just lb + bh + hl. Faces come in pairs, so multiply by 2: 62.' },
          b: { text: '30 sq cm', feedback: '30 is the volume (5 × 3 × 2). The surface area is 2(15 + 6 + 10) = 62 sq cm.' },
          c: { text: '62 sq cm' },
          d: { text: '60 sq cm', feedback: 'Add carefully: 15 + 6 + 10 = 31. Then 2 × 31 = 62 sq cm.' },
        },
      },
      'math-kshetra-prishth-q3': {
        text: 'The surface area of a cube is 96 sq cm. What is one side of the cube?',
        options: {
          a: { text: '16 cm', feedback: '16 is the square of the side. The side is √16 = 4 cm.' },
          b: { text: '8 cm', feedback: 'Divide by the 6 faces: 96 ÷ 6 = 16 = side², so the side is 4 cm.' },
          c: { text: '4 cm' },
          d: { text: '96 cm', feedback: '96 is the total surface area. One face is 16 sq cm, so the side is 4 cm.' },
        },
      },
    },
  },
  'math-kshetra-aayatan': {
    title: 'Volume of Cube and Cuboid',
    points: [
      'Volume tells how much space an object occupies.',
      'Volume of a cuboid = length × breadth × height.',
      'Volume of a cube = side³, and volume is written in cubic units.',
    ],
    example: 'How much water a tank can hold is found from its volume.',
    questions: {
      'math-kshetra-aayatan-q1': {
        text: 'What is the volume of a cube of side 4 cm?',
        options: {
          a: { text: '16 cu cm', feedback: '16 is 4². For volume, side³ = 4 × 4 × 4 = 64 cu cm.' },
          b: { text: '12 cu cm', feedback: 'Not side × 3; do side × side × side: 64 cu cm.' },
          c: { text: '64 cu cm' },
          d: { text: '32 cu cm', feedback: 'Halving is wrong. The volume is 4³ = 64 cu cm.' },
        },
      },
      'math-kshetra-aayatan-q2': {
        text: 'A box is 8 cm long, 5 cm wide and 2 cm high. What is its volume?',
        options: {
          a: { text: '15 cu cm', feedback: 'Do not add the three; multiply them: 8 × 5 × 2 = 80 cu cm.' },
          b: { text: '80 cu cm' },
          c: { text: '40 cu cm', feedback: 'Multiply by the height too: 8 × 5 × 2 = 80 cu cm. 40 is incomplete.' },
          d: { text: '66 cu cm', feedback: '66 is the sum lb + bh + hl. For volume, multiply all three: 80 cu cm.' },
        },
      },
      'math-kshetra-aayatan-q3': {
        text: 'A cube-shaped tank has a volume of 216 cu m. What is one side of the tank?',
        options: {
          a: { text: '36 m', feedback: 'From volume, the side comes from the cube root, not the square root: 6³ = 216, so the side is 6 m.' },
          b: { text: '72 m', feedback: '216 ÷ 3 does not give the side. Check: 6 × 6 × 6 = 216.' },
          c: { text: '6 m' },
          d: { text: '108 m', feedback: 'Halving is wrong. 6³ = 216, so the side is 6 m.' },
        },
      },
    },
  },
};

export const EN_MATH_MISCONCEPTIONS = {
  'denominator-zero': 'Keeping zero as the denominator',
  'irrational-confusion': 'Taking an irrational number as rational',
  'reciprocal-error': 'Mistake with the reciprocal',
  'numerator-zero-value': 'Misunderstanding the value of a zero numerator',
  'all-rational-integers': 'Thinking every rational number is an integer',
  'zero-not-rational': 'Not accepting zero as a rational number',
  'negative-not-rational': 'Not accepting negative numbers as rational',
  'add-denominator': 'Adding the denominators too',
  'multiply-instead-add': 'Multiplying instead of adding',
  'numerator-only-add': 'Adding only the numerators',
  'add-instead-multiply': 'Adding instead of multiplying',
  'cancel-wrong': 'Mistake in cancelling (simplifying)',
  'multiply-instead-divide': 'Multiplying instead of dividing',
  'add-instead-divide': 'Adding instead of dividing',
  'smaller-than-start': 'Choosing a number smaller than the starting one',
  'larger-than-end': 'Choosing a number bigger than the ending one',
  'endpoint-chosen': 'Taking an end point itself as the middle number',
  'sign-error': 'Sign mistake',
  'value-size-confusion': 'Misjudging the size of a number',
  'fraction-integer-confusion': 'Taking a fraction as an integer',
  'square-as-double': 'Taking a square as double',
  'cube-confusion': 'Confusing cube and square',
  'place-value-slip': 'Place-value slip',
  'square-recognition-error': 'Mistake in recognising a perfect square',
  'last-term-square': 'Taking the square of the last number',
  'count-error': 'Counting mistake',
  'sum-square-swap': 'Swapping the sum and the square',
  'root-as-half': 'Taking a square or cube root as half',
  'digit-guess': 'Guessing from the digits',
  'root-as-double': 'Taking a square root as double',
  'pair-pick-error': 'Mistake in picking one factor from each pair',
  'square-root-swap': 'Swapping square and square root',
  'factor-pair-skip': 'Skipping pairs of factors',
  'lower-bracket': 'Choosing the smaller square bracket',
  'upper-bracket': 'Choosing the bigger square bracket',
  'nearer-square-missed': 'Not noticing the nearer square',
  'round-square-only': 'Taking the square of a round number only',
  'digit-slip': 'Digit slip',
  'constant-as-coefficient': 'Taking the constant term as the coefficient',
  'wrong-term-pick': 'Picking the wrong term',
  'variable-as-coefficient': 'Taking the variable as the coefficient',
  'subtract-missed': 'Missing the subtraction',
  'variable-dropped': 'Dropping the variable',
  'power-added': 'Raising the power while adding',
  'unlike-terms-merged': 'Merging unlike terms',
  'power-not-added': 'Not adding powers while multiplying',
  'power-multiplied': 'Multiplying the powers with each other',
  'second-term-missed': 'Missing the second term',
  'middle-term-missed': 'Forgetting the middle term',
  'cross-term-error': 'Calculation mistake in the middle term',
  'constant-product-error': 'Mistake in multiplying the constant terms',
  'two-ab-error': 'Taking 2ab as only ab',
  'square-of-constant-error': 'Writing the square of the constant wrongly',
  'inverse-op-missed': 'Not using the inverse operation',
  'term-copied': 'Writing the given number itself as the answer',
  'rhs-copied': 'Writing the right-hand side number as the answer',
  'subtract-instead-divide': 'Subtracting instead of dividing',
  'order-of-steps': 'Wrong order of steps',
  'last-step-missed': 'Missing the last step',
  'guess-without-steps': 'Guessing without steps',
  'coefficient-as-answer': 'Taking the coefficient itself as the answer',
  'terms-added-wrong': 'Adding the terms the wrong way',
  'sign-change-missed': 'Not changing the sign when changing sides',
  'bracket-ignored': 'Ignoring the bracket',
  'divide-wrong-side': 'Dividing in the wrong order',
  'wrong-person-answer': 'Writing the age of the wrong person as the answer',
  'divide-by-3-only': 'Dividing by 3 only',
  'half-of-total': 'Taking half the total as the answer',
  'quadrilateral-formula-used': 'Using the quadrilateral formula',
  'formula-n-times': 'Taking the formula as n × 180°',
  'triangle-formula-used': 'Using the triangle formula',
  'sum-not-subtracted': 'Not subtracting the sum from 360°',
  'largest-copied': 'Writing the largest angle itself as the answer',
  'smallest-copied': 'Writing the smallest angle itself as the answer',
  'bracket-as-answer': 'Taking (n − 2) itself as the answer',
  'extra-added': 'Adding an extra number',
  'off-by-one': 'Off by one',
  'side-doubled': 'Taking the side as double',
  'side-halved': 'Taking the side as half',
  'property-missed': 'Not using the property',
  'adjacent-equal-error': 'Taking adjacent angles as equal',
  'opposite-adjacent-swap': 'Swapping opposite and adjacent angles',
  'rectangle-assumed': 'Assuming the parallelogram is a rectangle',
  'bisect-missed': 'Forgetting the bisection property',
  'half-of-half': 'Taking half of the half',
  'double-twice': 'Doubling twice',
  'rectangle-sides-error': 'Wrongly identifying the sides of a rectangle',
  'rhombus-angle-error': 'Wrongly identifying the angles of a rhombus',
  'trapezium-confusion': 'Confusing with a trapezium',
  'rhombus-property-mixup': 'Applying a rhombus property to a rectangle',
  'diagonal-unequal-error': 'Taking the diagonals as unequal',
  'diagonal-count-error': 'Mistake in the number of diagonals',
  'reverse-inclusion-error': 'Understanding the relation in reverse',
  'square-parallelogram-error': 'Not accepting a square as a parallelogram',
  'half-missed': 'Forgetting the ½',
  'side-product-error': 'Doing one side × height',
  'all-added': 'Adding all the numbers',
  'given-value-copied': 'Writing the given number itself as the answer',
  'one-face-only': 'Counting only one face',
  'volume-confusion': 'Confusing volume and surface area',
  'four-faces-only': 'Counting only four faces',
  'two-missed': 'Forgetting to multiply by 2',
  'pair-sum-error': 'Mistake in the sum of the pairs',
  'divide-by-12': 'Dividing by the wrong number',
  'square-instead-cube': 'Squaring instead of cubing',
  'side-times-3': 'Doing side × 3',
  'height-missed': 'Forgetting to multiply by the height',
  'sum-instead-product': 'Taking the sum instead of the product',
  'square-root-used': 'Thinking of a square root instead of a cube root',
  'divide-by-3': 'Dividing by 3 and taking it as the side',
};
