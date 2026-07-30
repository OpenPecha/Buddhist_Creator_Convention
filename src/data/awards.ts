/**
 * BCC 2026 award winners, sourced from the Buddhist Creators Convention 2026 report
 * (public/images/convention/bcc-2026-report.pdf, pp. 17-21).
 *
 * Portrait images are optional: `WinnerPortrait` renders a branded monogram whenever
 * `photo` is omitted or fails to load, so real photos can be dropped into
 * public/images/awards/ and wired up here without any other change.
 */

export interface AwardWinner {
  /** Stable slug, also used as the DOM id for deep links. */
  id: string;
  category: string;
  /** Short label used in compact cards and nav chips. */
  shortCategory: string;
  name: string;
  honorific?: string;
  /** Where the winner is from, or their monastery/affiliation. */
  affiliation?: string;
  photo?: string;
  /** One-line reason for the win, used as the card headline. */
  citation: string;
  /** Full narrative shown on the awards page. */
  story: string;
  /** The winner's own words, paraphrased from the report. */
  quote?: string;
  /** Headline metrics rendered as stat chips. */
  stats?: { value: string; label: string }[];
  /** How the winner was chosen. */
  selection: string;
}

export const AWARD_CEREMONY = {
  event: "Buddhist Creators Convention 2026",
  date: "6 February 2026",
  location: "Shechen Monastery, Bodh Gaya",
  presenters: "Mr. Milan Amin & Dr. Jaimin Shukla",
  witness: "Chokyong Palga Rinpoche",
} as const;

/** The headline award — given its own spotlight treatment across the site. */
export const INFLUENCER_OF_THE_YEAR: AwardWinner = {
  id: "influencer-of-the-year",
  category: "Buddhist Influencer of the Year 2026",
  shortCategory: "Influencer of the Year",
  name: "Quinthup Pema Bhutia",
  honorific: "Venerable",
  affiliation: "Namdroling Monastery",
  photo: "/images/awards/quinthup-pema-bhutia.jpg",
  citation:
    "A creator whose content is dedicated entirely to the teachings of the Buddha, reaching over a million people across social media.",
  story:
    "The Buddhist Influencer of the Year is the most prestigious recognition of the ceremony, honouring a digital creator who has consistently shared Buddhist content throughout 2025. After an extensive and challenging deliberation process, the committee and coaches presented the award to Venerable Quinthup Pema Bhutia of Namdroling Monastery — a creator who has built a following of over 1.2 million across social media, with content dedicated entirely to the teachings of the Buddha. His posts have collectively garnered over 100 million engagements, reflecting the profound impact and reach of his work.",
  quote:
    "He had not expected to win, feeling the other nominees were equally deserving. The recognition, he said, meant a great deal to him personally, and filled him with renewed inspiration to continue creating meaningful Buddhist content for audiences around the world.",
  stats: [
    { value: "1.2M+", label: "Followers" },
    { value: "100M+", label: "Engagements" },
    { value: "8", label: "Nominees shortlisted" },
  ],
  selection:
    "Selected from a shortlist of eight nominees by a specialist committee, judged on global reach and audience growth alongside the integrity, authenticity, and innovation they bring to sharing the Dharma in the digital age. Presented in the presence of Chokyong Palga Rinpoche.",
};

/** The four category awards, open exclusively to creators present at the convention. */
export const CATEGORY_WINNERS: AwardWinner[] = [
  {
    id: "rising-star",
    category: "Rising Star Award",
    shortCategory: "Rising Star",
    name: "Chhewang Dorjee",
    photo: "/images/awards/chhewang-dorjee.jpg",
    citation: "For his video Why Everybody Should Create Content.",
    story:
      "The Rising Star Award celebrates the creator who demonstrated the most remarkable potential and progress over the ten days of the convention. The coaches invited all nominees onto the stage, acknowledging how narrow the margin was between the winner and the rest of the field.",
    quote:
      "He spoke about how content creation clears the mind, transforms confusion into clarity, and helps you develop a deeper understanding each day.",
    selection:
      "Evaluated by the coaches on research quality, uniqueness of niche, originality of approach, video style, view counts, storytelling, and the practical application of Dharma teachings.",
  },
  {
    id: "audience-choice",
    category: "Audience Choice Award",
    shortCategory: "Audience Choice",
    name: "Tashi Chosgon",
    photo: "/images/awards/tashi-chosgon.jpg",
    citation: "Voted the community's favourite, with 33% of all participant votes.",
    story:
      "The Audience Choice Award places the power of selection entirely in the hands of the participants. Nine videos created during the convention were curated by the board team and screened in front of the entire audience, who then voted live. Tashi Chosgon emerged as the clear winner.",
    quote:
      "He said he felt deeply humbled in the presence of Palga Rinpoche, to whom he dedicated the award, and pledged to continue promoting the Dharma across digital platforms.",
    stats: [
      { value: "33%", label: "Of all votes" },
      { value: "9", label: "Films screened" },
    ],
    selection: "Decided by a live audience vote of all convention participants, facilitated through Mentimeter.",
  },
  {
    id: "most-creative-video",
    category: "Most Creative Video Award",
    shortCategory: "Most Creative Video",
    name: "Tenzin Chime",
    affiliation: "Arunachal Pradesh",
    photo: "/images/awards/tenzin-chime.jpg",
    citation: "For a collaborative reel built on the message 'Smile wherever possible, it is always possible.'",
    story:
      "The Most Creative Video Award recognises the most outstanding video produced during the convention, celebrating creators who pushed the boundaries of creativity, technology, and innovation. Tenzin Chime's winning reel was made together with fellow participants and set to a Bollywood track, gathering more than 30,000 engagements within three days of release.",
    quote:
      "In her acceptance she expressed heartfelt gratitude to all her supporters, and took the award as motivation to continue doing more.",
    stats: [{ value: "30K+", label: "Engagements in 3 days" }],
    selection:
      "Narrowed to a top five, then reviewed and voted on by the coaches and panelists — judged on use of AI, lighting, camera work, storytelling, authenticity, and emotional depth.",
  },
  {
    id: "most-followers-gained",
    category: "Most Followers Gained Award",
    shortCategory: "Most Followers Gained",
    name: "Sonam Dolma",
    affiliation: "Spiti",
    photo: "/images/awards/sonam-dolma.jpg",
    citation: "For growing her following by over 16% in just eight days.",
    story:
      "The Most Followers Gained Award recognises the participant who grew their audience the most across the convention, measured from their follower count at registration against the day before the ceremony. Hailing from a village in Spiti, the aspiring creator was visibly moved, shedding tears upon receiving an award she had never anticipated.",
    quote:
      "She expressed deep humility and heartfelt gratitude towards the coaches and the organizing committee, for their encouragement and for helping her realise her true potential.",
    stats: [
      { value: "+16%", label: "Follower growth" },
      { value: "8", label: "Days" },
    ],
    selection:
      "Determined by the Selection Committee, comparing each participant's follower count on arrival against their count the day before the ceremony.",
  },
];

export const ALL_WINNERS: AwardWinner[] = [INFLUENCER_OF_THE_YEAR, ...CATEGORY_WINNERS];

export const AWARD_CATEGORIES = ALL_WINNERS.map((winner) => winner.category);
