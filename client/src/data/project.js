import thumb from '../assets/dance.png'
import thumb2 from '../assets/boat.png'
import thumb3 from '../assets/car.png'
import vid from '../assets/legit.mov'
import vid1 from '../assets/legit1.mov'
import vid2 from '../assets/legit2.mov'

export const projects = [
  {
    slug: "between-the-beats",
    title: "Between the beats",
    category: "Music film",
    duration: "03:12",
    description:
      "Movement meets rhythm. A performance-led edit built around the energy between each beat.",
    tags: ["Editing", "Color", "Sound design"],
    thumbnail: thumb,
    video: vid,
  },
  {
    slug: "where-we-belong",
    title: "Where we belong",
    category: "Documentary",
    duration: "05:40",
    description:
      "A quieter kind of storytelling. Finding a human thread in the everyday rituals of a coastal life.",
    tags: ["Story edit", "Color", "Sound mix"],
    thumbnail: thumb2,
    video: vid1,
  },
  {
    slug: "after-hours",
    title: "After hours",
    category: "Spec commercial",
    duration: "00:45",
    description:
      "A city that never slows down. A punchy, texture-rich cut shaped for a short-form brand story.",
    tags: ["Editing", "Sound design", "Finishing"],
    thumbnail: thumb3,
    video: vid2,
  },
];