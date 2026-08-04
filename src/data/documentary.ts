/** The BCC 2026 documentary, featured across the site. */
export const DOCUMENTARY = {
  youtubeId: "vOStd3Dolg0",
  title: "The Buddhist Creators Convention 2026",
  tagline: "The Documentary",
  description:
    "Nine days in Bodh Gaya, 110 creators from 10 countries, and the first global sangha of its kind. Watch the full story of how it happened.",
  runtime: "20 min",
} as const;

export const documentaryWatchUrl = `https://www.youtube.com/watch?v=${DOCUMENTARY.youtubeId}`;
