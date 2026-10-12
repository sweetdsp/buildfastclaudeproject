// Each concept = one short video + an interactive demo + a practice quiz.
// To add a concept: drop a video in /public/videos (or set `video.youtube`),
// add an entry below, and (optionally) a widget in src/components/widgets.
//
// video: { src: '/videos/<file>.mp4' }  -> self-hosted file
//        { youtube: '<VIDEO_ID>' }      -> YouTube embed
// Leave `video` null/missing files and a friendly placeholder is shown.

export const concepts = [
  {
    id: 'fractions',
    title: 'Understanding Fractions',
    topic: 'Arithmetic',
    level: 'Beginner',
    minutes: 4,
    emoji: '🍕',
    video: { src: './videos/fractions.mp4' },
    summary: 'A fraction describes equal parts of a whole.',
    steps: [
      'The bottom number (denominator) tells how many equal parts the whole is split into.',
      'The top number (numerator) tells how many of those parts we are talking about.',
      'Fractions like 2/4 and 1/2 are equivalent – they cover the same amount.',
    ],
    widget: 'fractions',
    quiz: [
      { q: 'A pizza is cut into 8 equal slices and you eat 3. What fraction did you eat?', options: ['3/5', '3/8', '8/3', '5/8'], answer: 1, why: '3 slices out of 8 equal slices is 3/8.' },
      { q: 'Which fraction is equivalent to 1/2?', options: ['2/3', '3/5', '4/8', '1/4'], answer: 2, why: 'Multiply top and bottom of 1/2 by 4 to get 4/8.' },
      { q: 'In 5/9, what is the denominator?', options: ['5', '9', '14', '4'], answer: 1, why: 'The denominator is the bottom number: 9.' },
    ],
  },
  {
    id: 'number-line',
    title: 'Adding & Subtracting on a Number Line',
    topic: 'Arithmetic',
    level: 'Beginner',
    minutes: 3,
    emoji: '📏',
    video: { src: './videos/number-line.mp4' },
    summary: 'Adding moves right, subtracting moves left – even through negative numbers.',
    steps: [
      'Start at the first number on the line.',
      'To add, take that many steps to the right. To subtract, step left.',
      'Where you land is the answer. Crossing zero gives negative numbers.',
    ],
    widget: 'numberline',
    quiz: [
      { q: 'What is 3 − 7?', options: ['4', '−4', '10', '−10'], answer: 1, why: 'Start at 3 and move 7 left: you land on −4.' },
      { q: 'What is −2 + 5?', options: ['3', '−3', '7', '−7'], answer: 0, why: 'Start at −2 and move 5 right: you land on 3.' },
      { q: 'Subtracting a number moves you…', options: ['Right', 'Left', 'Nowhere', 'Up'], answer: 1, why: 'Subtraction moves left on the number line.' },
    ],
  },
  {
    id: 'area',
    title: 'Area of Rectangles',
    topic: 'Geometry',
    level: 'Beginner',
    minutes: 3,
    emoji: '▭',
    video: { src: './videos/area.mp4' },
    summary: 'Area counts the unit squares that cover a shape: width × height.',
    steps: [
      'Imagine tiling the rectangle with 1×1 squares.',
      'Each row has "width" squares, and there are "height" rows.',
      'So Area = width × height, measured in square units.',
    ],
    widget: 'area',
    quiz: [
      { q: 'A rectangle is 6 wide and 4 tall. What is its area?', options: ['10', '20', '24', '48'], answer: 2, why: '6 × 4 = 24 square units.' },
      { q: 'A garden has area 36 and width 9. What is its height?', options: ['4', '27', '45', '6'], answer: 0, why: '36 ÷ 9 = 4.' },
      { q: 'Area is measured in…', options: ['units', 'square units', 'cubic units', 'degrees'], answer: 1, why: 'Area counts squares, so we use square units.' },
    ],
  },
  {
    id: 'pythagoras',
    title: 'The Pythagorean Theorem',
    topic: 'Geometry',
    level: 'Intermediate',
    minutes: 5,
    emoji: '📐',
    video: { src: './videos/pythagoras.mp4' },
    summary: 'In a right triangle, a² + b² = c², where c is the longest side.',
    steps: [
      'Only works for right triangles (one 90° angle).',
      'The two shorter sides are a and b; the longest side opposite the right angle is c (the hypotenuse).',
      'Square a and b, add them, then take the square root to find c.',
    ],
    widget: 'pythagoras',
    quiz: [
      { q: 'A right triangle has legs 3 and 4. How long is the hypotenuse?', options: ['5', '7', '6', '25'], answer: 0, why: '3² + 4² = 9 + 16 = 25, and √25 = 5.' },
      { q: 'Which side is the hypotenuse?', options: ['The shortest', 'Any side', 'Opposite the right angle', 'The bottom'], answer: 2, why: 'The hypotenuse faces the right angle and is the longest side.' },
      { q: 'Legs 5 and 12 give a hypotenuse of…', options: ['13', '17', '15', '11'], answer: 0, why: '25 + 144 = 169, and √169 = 13.' },
    ],
  },
  {
    id: 'linear',
    title: 'Linear Functions: y = mx + b',
    topic: 'Algebra',
    level: 'Intermediate',
    minutes: 5,
    emoji: '📈',
    video: { src: './videos/linear.mp4' },
    summary: 'A straight line is described by its slope m and its y-intercept b.',
    steps: [
      'The slope m tells how steeply the line rises (or falls) for each step right.',
      'The intercept b is where the line crosses the y-axis (when x = 0).',
      'Plug in any x to get y: y = m·x + b.',
    ],
    widget: 'linear',
    quiz: [
      { q: 'In y = 2x + 3, what is the slope?', options: ['3', '2', '5', 'x'], answer: 1, why: 'The number multiplying x is the slope: 2.' },
      { q: 'Where does y = −x + 4 cross the y-axis?', options: ['−1', '4', '−4', '1'], answer: 1, why: 'The intercept b is 4, so the point is (0, 4).' },
      { q: 'For y = 3x − 1, what is y when x = 2?', options: ['5', '6', '7', '2'], answer: 0, why: '3·2 − 1 = 5.' },
    ],
  },
]

export const topics = [...new Set(concepts.map((c) => c.topic))]
