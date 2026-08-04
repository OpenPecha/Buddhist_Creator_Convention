/**
 * Testimonial quotes shown with a background photo behind the type.
 *
 * `photo` is optional per entry — cards fall back to a brand-gradient background
 * when it's missing. `youtubeId` is optional too: set it once a video testimonial
 * exists, and the card gains a play button wired to VideoLightbox automatically.
 *
 * RINPOCHE_TESTIMONIALS intentionally starts empty. The report (pp. 4-6) references
 * video messages from Dzongsar Jamyang Khyentse Rinpoche, Shechen Rabjam Rinpoche,
 * Kyabje Trulshik Yangsi Rinpoche, and Yongey Mingyur Rinpoche, but no photos or
 * direct quotes to publish verbatim were supplied — add entries here once the
 * YouTube links are available, and the Convention page section will appear
 * automatically (it renders nothing while this stays empty).
 */

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location?: string;
  role?: string;
  photo?: string;
  youtubeId?: string;
}

export const CREATOR_TESTIMONIALS: Testimonial[] = [
  {
    id: "thinle-dorjee",
    quote: "I came for the skills, I stayed for the sangha. This place melted my doubt.",
    name: "Thinle Dorjee",
    location: "Nepal",
    photo: "/images/home/gallery-1.jpg",
  },
  {
    id: "rahul-dongre",
    quote:
      "The Convention connected me with creators worldwide. Together we learned to share the Dharma better.",
    name: "Rahul Dongre",
    location: "India",
    photo: "/images/home/gallery-2.jpg",
  },
  {
    id: "noah",
    quote: "This community taught me that sharing the Dharma online is real, meaningful, and deeply needed.",
    name: "Noah",
    location: "Germany",
    photo: "/images/home/gallery-3.jpg",
  },
];

export const RINPOCHE_TESTIMONIALS: Testimonial[] = [];
