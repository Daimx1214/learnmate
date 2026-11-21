// LearnMate content file — English (en). Mirrors chapter.js.
// CHAPTER holds the chapter id, subject, class, title and an ordered list of concepts.
// Each concept has a short English card (points + one example) and exactly 3 MCQ questions.
// Each question has 4 options (a-d); exactly one has correct: true and no other fields.
// Each question also has difficulty: 'easy' | 'medium' | 'hard' (used by pickNextQuestion in js/mastery.js).
// Every wrong option has a misconception tag (a key of MISCONCEPTIONS) and English feedback.
// MISCONCEPTIONS maps each tag to a short English label naming the mistake.

export const CHAPTER = {
  id: 'sci8-bal-dab',
  subject: 'Science',
  classLevel: 8,
  title: 'Force and Pressure',
  concepts: [
    {
      id: 'bal-kya-hai',
      title: 'What is force',
      keywords: ['force', 'push', 'pull', 'thrust', 'shove', 'tug'],
      card: {
        points: [
          'A force is a push or a pull.',
          'A force can make a still object move, and can slow down, stop or change the direction of a moving object.',
          'A force can also change the shape of an object.',
        ],
        example: 'Kicking a football is a push, and it makes the football move.',
      },
      questions: [
        {
          id: 'bal-kya-hai-q1',
          difficulty: 'easy',
          text: 'What is a force?',
          options: [
            { id: 'a', text: 'Only a push is a force', correct: false, misconception: 'push-is-always-force', feedback: 'A pull is also a force. Pulling a rope to lift a bucket out of a well is also applying a force.' },
            { id: 'b', text: 'A push or a pull that can change the motion or shape of an object', correct: true },
            { id: 'c', text: 'A pull is not a force', correct: false, misconception: 'pull-not-force', feedback: 'Pulling a string is also a force. Pulling can make an object move.' },
            { id: 'd', text: 'A force acts only on a moving object', correct: false, misconception: 'force-only-when-moving', feedback: 'Push a still wall and you are still applying a force. A force does not need the object to be moving.' },
          ],
        },
        {
          id: 'bal-kya-hai-q2',
          difficulty: 'medium',
          text: 'What happens when you kick a football that is at rest?',
          options: [
            { id: 'a', text: 'A football at rest moves only if it was already moving', correct: false, misconception: 'force-only-when-moving', feedback: 'A still football gets a force from the kick and starts moving. Motion is not needed for a force.' },
            { id: 'b', text: 'The football starts moving or its direction changes', correct: true },
            { id: 'c', text: 'Just touching the football makes it move; a push is not needed', correct: false, misconception: 'contact-only-touch', feedback: 'Touching alone does not make the football move. A push gives it a force, and then it moves.' },
            { id: 'd', text: 'A football moves only by a pull, not by a push', correct: false, misconception: 'pull-not-force', feedback: 'A kick is a push, and a push is also a force. A push can make an object move.' },
          ],
        },
        {
          id: 'bal-kya-hai-q3',
          difficulty: 'hard',
          text: 'Which of these is an example of a force?',
          options: [
            { id: 'a', text: 'Pushing a still table without pulling it at all', correct: false, misconception: 'force-only-when-moving', feedback: 'Pushing a still table also applies a force. A force does not need motion.' },
            { id: 'b', text: 'Pulling a bucket out of a well with a rope', correct: true },
            { id: 'c', text: 'Holding a book by just touching it, without moving it', correct: false, misconception: 'contact-only-touch', feedback: 'Touching alone is not a force by itself. A force is there when a push or a pull acts on the object.' },
            { id: 'd', text: 'Only a push is a force, not pulling a bucket', correct: false, misconception: 'push-is-always-force', feedback: 'Pulling a bucket is also a force. Both push and pull are forces.' },
          ],
        },
      ],
    },
    {
      id: 'sampark-bal',
      title: 'Contact force and non-contact force',
      keywords: ['contact', 'non-contact', 'magnet', 'touch', 'gravity'],
      card: {
        points: [
          'A force that acts when objects touch each other is called a contact force.',
          'A force that acts without touching is called a non-contact force.',
          'A magnet can pull an iron object without touching it; this is a non-contact force.',
          'The gravitational force of the Earth is also a non-contact force; it pulls objects downward.',
        ],
        example: 'A magnet pulls an iron nail towards itself without touching it.',
      },
      questions: [
        {
          id: 'sampark-bal-q1',
          difficulty: 'medium',
          text: 'What kind of force is it when a magnet pulls iron without touching it?',
          options: [
            { id: 'a', text: 'A contact force, because the magnet is near the iron', correct: false, misconception: 'contact-only-touch', feedback: 'A force is a contact force only when the objects touch each other. The magnet pulls the iron without touching it, so it is a non-contact force.' },
            { id: 'b', text: 'A non-contact force, because the objects attract each other without touching', correct: true },
            { id: 'c', text: 'It is not a force, because the iron does not move', correct: false, misconception: 'force-only-when-moving', feedback: 'The iron is pulled by the magnet even when it does not move. A force does not need motion.' },
            { id: 'd', text: 'It is a contact force, because the force is inside the iron', correct: false, misconception: 'contact-only-touch', feedback: 'The force is not inside the iron. The pull of the magnet works without touching, so it is a non-contact force.' },
          ],
        },
        {
          id: 'sampark-bal-q2',
          difficulty: 'easy',
          text: 'Which of these is a non-contact force?',
          options: [
            { id: 'a', text: 'Pulling an object with a rope', correct: false, misconception: 'contact-only-touch', feedback: 'The rope touches the object while pulling it, so this is a contact force.' },
            { id: 'b', text: 'The gravitational force of the Earth that makes a stone fall', correct: true },
            { id: 'c', text: 'Pushing a wall with your hand', correct: false, misconception: 'contact-only-touch', feedback: 'Your hand touches the wall while pushing, so this is a contact force.' },
            { id: 'd', text: 'A force acts only when the stone is moving', correct: false, misconception: 'force-only-when-moving', feedback: 'A stone at rest also feels the gravitational force. A force does not need motion.' },
          ],
        },
        {
          id: 'sampark-bal-q3',
          difficulty: 'hard',
          text: 'Which statement about contact and non-contact forces is correct?',
          options: [
            { id: 'a', text: 'A force acts only when objects touch', correct: false, misconception: 'contact-only-touch', feedback: 'A force can also act without touching, such as a magnet pulling iron.' },
            { id: 'b', text: 'A force can act even without touching', correct: true },
            { id: 'c', text: 'A non-contact force is always a push', correct: false, misconception: 'push-is-always-force', feedback: 'A non-contact force can also be a pull, such as the pull of a magnet. It is not always a push.' },
            { id: 'd', text: 'A pulling force is not a contact force', correct: false, misconception: 'pull-not-force', feedback: 'Pulling with a rope is a contact force. A pull is a force and acts through touch.' },
          ],
        },
      ],
    },
    {
      id: 'dab',
      title: 'What is pressure',
      keywords: ['pressure', 'area', 'force', 'per unit area'],
      card: {
        points: [
          'Pressure is the force that acts on each unit of area of a surface.',
          'Pressure = force ÷ area.',
          'When the force is the same, pressure is greater when the area is smaller.',
        ],
        example: 'A pointed nail easily goes into a wall, because the area of its tip is small.',
      },
      questions: [
        {
          id: 'dab-q1',
          difficulty: 'easy',
          text: 'What is pressure?',
          options: [
            { id: 'a', text: 'The total force on a surface, whatever the area', correct: false, misconception: 'area-same-pressure', feedback: 'The total force stays the same, but pressure is found by dividing the force by the area. Changing the area changes the pressure.' },
            { id: 'b', text: 'The force acting on each unit of area', correct: true },
            { id: 'c', text: 'The product of force and area', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'It is division, not multiplication. A force spread over a bigger area makes the pressure smaller.' },
            { id: 'd', text: 'A force that acts only on solid objects', correct: false, misconception: 'pressure-only-solids', feedback: 'Pressure is also present in liquids and gases, such as water and air.' },
          ],
        },
        {
          id: 'dab-q2',
          difficulty: 'medium',
          text: 'Why is the tip of a nail pointed?',
          options: [
            { id: 'a', text: 'The tip has a larger weight', correct: false, misconception: 'heavier-more-pressure', feedback: 'Pressure depends on the area, not on the weight. The tip has a small area, so the pressure is high.' },
            { id: 'b', text: 'A small area makes the pressure greater', correct: true },
            { id: 'c', text: 'The tip makes a larger surface', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'The tip makes a small surface. A large area reduces pressure, like a wide shoe.' },
            { id: 'd', text: 'The pressure on the tip is always the same', correct: false, misconception: 'area-same-pressure', feedback: 'Changing the area changes the pressure. The small area of the tip increases the pressure.' },
          ],
        },
        {
          id: 'dab-q3',
          difficulty: 'hard',
          text: 'When the force is the same, when will the pressure be greater?',
          options: [
            { id: 'a', text: 'When the area is larger', correct: false, misconception: 'bigger-area-more-pressure', feedback: 'If the force is the same, a larger area reduces the pressure. A bag with a wide strap hurts the shoulder less.' },
            { id: 'b', text: 'When the area is smaller', correct: true },
            { id: 'c', text: 'Pressure has no relation to the area', correct: false, misconception: 'area-same-pressure', feedback: 'Pressure changes directly with the area. The thin edge of a knife cuts because of this.' },
            { id: 'd', text: 'When the object is heavy, whatever the area', correct: false, misconception: 'heavier-more-pressure', feedback: 'Pressure depends on both force and area. If the force is the same, the area decides the pressure.' },
          ],
        },
      ],
    },
    {
      id: 'taral-dab',
      title: 'Pressure in a liquid',
      keywords: ['liquid', 'water', 'depth', 'fluid', 'pressure'],
      card: {
        points: [
          'Liquids such as water also exert pressure.',
          'In a liquid, pressure increases as the depth increases.',
          'Liquid pressure acts in all directions: downward, upward and sideways.',
        ],
        example: 'Water comes out with more force through a hole at the bottom of a bottle.',
      },
      questions: [
        {
          id: 'taral-dab-q1',
          difficulty: 'easy',
          text: 'How does the pressure in water change as the depth increases?',
          options: [
            { id: 'a', text: 'It decreases', correct: false, misconception: 'deeper-less-pressure', feedback: 'As the depth increases, the weight of the water above increases, so the pressure increases.' },
            { id: 'b', text: 'It increases', correct: true },
            { id: 'c', text: 'Water has pressure only when it is frozen like a solid', correct: false, misconception: 'pressure-only-solids', feedback: 'Water, a liquid, also has pressure. At depth, water coming out of a hole in a bottle comes out with force.' },
            { id: 'd', text: 'Depth has no relation to the pressure', correct: false, misconception: 'depth-no-effect', feedback: 'Depth does have an effect. As the depth increases, the pressure increases.' },
          ],
        },
        {
          id: 'taral-dab-q2',
          difficulty: 'medium',
          text: 'In which directions does pressure act in water?',
          options: [
            { id: 'a', text: 'Only downward', correct: false, misconception: 'pressure-only-solids', feedback: 'Liquid pressure acts downward, upward and sideways, in all directions. Water also comes out of a hole on the side of a bottle.' },
            { id: 'b', text: 'Only sideways', correct: false, misconception: 'pressure-only-solids', feedback: 'Liquid pressure does not act only sideways; it acts in all directions.' },
            { id: 'c', text: 'In all directions', correct: true },
            { id: 'd', text: 'Only upward', correct: false, misconception: 'pressure-only-solids', feedback: 'Water pressure acts downward and sideways too, not only upward.' },
          ],
        },
        {
          id: 'taral-dab-q3',
          difficulty: 'hard',
          text: 'In water, at which depth is the pressure greater: 1 metre or 3 metres?',
          options: [
            { id: 'a', text: 'At 1 metre', correct: false, misconception: 'deeper-less-pressure', feedback: 'As the depth increases, the pressure increases, so the pressure is greater at 3 metres.' },
            { id: 'b', text: 'At 3 metres', correct: true },
            { id: 'c', text: 'The pressure is the same at both depths', correct: false, misconception: 'depth-no-effect', feedback: 'Depth has an effect. The bottom of a deep pond has greater pressure.' },
            { id: 'd', text: 'Pressure exists only at the surface, not at depth', correct: false, misconception: 'pressure-only-solids', feedback: 'Pressure exists at every depth, not only at the surface.' },
          ],
        },
      ],
    },
    {
      id: 'vayu-dab',
      title: 'Pressure of air',
      keywords: ['air', 'atmosphere', 'wind', 'gas', 'weight'],
      card: {
        points: [
          'All around us there is an atmosphere of air, and air has weight.',
          'Air exerts pressure in all directions.',
          'Air pressure decreases as you go higher.',
        ],
        example: 'A balloon swells when you fill it with air, because the air pushes outward in every direction.',
      },
      questions: [
        {
          id: 'vayu-dab-q1',
          difficulty: 'easy',
          text: 'Why does air have pressure?',
          options: [
            { id: 'a', text: 'Air has no weight', correct: false, misconception: 'air-no-weight', feedback: 'Air has weight. Filling a balloon with air makes it heavier.' },
            { id: 'b', text: 'Air has weight and it exerts pressure in all directions', correct: true },
            { id: 'c', text: 'Air exerts pressure only on solid objects', correct: false, misconception: 'pressure-only-solids', feedback: 'Air exerts pressure in all directions, for example when a balloon is inflated.' },
            { id: 'd', text: 'Air pressure increases when you go higher', correct: false, misconception: 'height-more-pressure', feedback: 'Air pressure decreases when you go higher. It does not increase.' },
          ],
        },
        {
          id: 'vayu-dab-q2',
          difficulty: 'medium',
          text: 'What happens to atmospheric pressure when you climb a high hill?',
          options: [
            { id: 'a', text: 'It increases', correct: false, misconception: 'height-more-pressure', feedback: 'Going up, the air above you has less weight, so the pressure decreases.' },
            { id: 'b', text: 'It decreases', correct: true },
            { id: 'c', text: 'It does not change at all', correct: false, misconception: 'depth-no-effect', feedback: 'Air pressure changes with height. This is why breathing is difficult on high mountains.' },
            { id: 'd', text: 'In air, pressure decreases with depth, as in water', correct: false, misconception: 'deeper-less-pressure', feedback: 'Air does not have depth in that sense. When the height increases, there is less air above us, so the pressure decreases.' },
          ],
        },
        {
          id: 'vayu-dab-q3',
          difficulty: 'hard',
          text: 'Why does a balloon swell when it is filled with air?',
          options: [
            { id: 'a', text: 'Air has no pressure', correct: false, misconception: 'air-no-weight', feedback: 'Air does have pressure. The swelling of the balloon is the effect of this pressure.' },
            { id: 'b', text: 'The air inside spreads pressure in all directions, so the balloon expands', correct: true },
            { id: 'c', text: 'Air exerts pressure only downward', correct: false, misconception: 'pressure-only-solids', feedback: 'Air exerts pressure in all directions, not only downward.' },
            { id: 'd', text: 'Only a heavy object can exert pressure, not light air', correct: false, misconception: 'heavier-more-pressure', feedback: 'A light thing can also exert pressure. Air is light, yet inside the balloon it pushes in every direction.' },
          ],
        },
      ],
    },
  ],
};

export const MISCONCEPTIONS = {
  'push-is-always-force': { label: 'A force is only a push' },
  'pull-not-force': { label: 'A pull is not a force' },
  'force-only-when-moving': { label: 'A force acts only on a moving object' },
  'contact-only-touch': { label: 'A force acts only on touching objects' },
  'area-same-pressure': { label: 'Pressure does not depend on area' },
  'pressure-only-solids': { label: 'Pressure exists only in solids' },
  'bigger-area-more-pressure': { label: 'A bigger area gives more pressure' },
  'depth-no-effect': { label: 'Depth has no effect on pressure' },
  'deeper-less-pressure': { label: 'Pressure decreases with depth' },
  'air-no-weight': { label: 'Air has no weight' },
  'heavier-more-pressure': { label: 'A heavier object always has more pressure' },
  'height-more-pressure': { label: 'Air pressure increases with height' },
};
