/**
 * Partner products and collaborating organisations, sourced from the BCC 2026 report
 * (public/images/convention/bcc-2026-report.pdf, pp. 1, 3, 12-13) and site feedback.
 *
 * `logo` is optional on purpose: cards render as text/wordmark until real logo files
 * are dropped into public/images/brand/ or public/images/about/ and wired up here.
 */

export interface PartnerProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  logo?: string;
  screenshots?: string[];
}

export const PARTNER_PRODUCTS: PartnerProduct[] = [
  {
    id: "webuddhist",
    name: "WeBuddhist",
    tagline: "App & Web",
    description:
      "An AI-guided companion for daily practice and content creation, built with Buddhist creators in mind — from scripting challenge reels to studying the Bodhicharyavatara, verse by verse.",
    url: "https://www.webuddhist.com",
    screenshots: [
      "/images/home/tech-assistant-tablet.jpg",
      "/images/home/tech-tibetan-app.jpg",
      "/images/home/tech-assistant-desktop.jpg",
      "/images/home/tech-assistant-mobile.jpg",
    ],
  },
  {
    id: "webuddhist-academy",
    name: "WeBuddhist Academy",
    tagline: "App & Web",
    description:
      "Sherab.org is our e-learning platform for Buddhist creators — every BCC 2026 masterclass and workbook is available here free of charge, with lifetime access and materials in English, Hindi, Nepali, and Tibetan.",
    url: "https://www.sherab.org",
  },
];

export interface Collaborator {
  id: string;
  name: string;
  logo?: string;
  url?: string;
}

export const COLLABORATORS: Collaborator[] = [
  { id: "dharmaduta", name: "Dharmaduta Services", url: "https://dharmaduta.in/" },
  { id: "shechen", name: "Shechen Monastery", logo: "/images/about/collaborator-shechen.png" },
  { id: "indrajala", name: "Indrajala", logo: "/images/about/collaborator-indrajala.png" },
  {
    id: "khyentse-foundation",
    name: "Khyentse Foundation",
    logo: "/images/about/collaborator-khyentse-foundation.png",
  },
  { id: "openpecha", name: "OpenPecha", logo: "/images/about/collaborator-partner.png", url: "https://openpecha.org/" },
  { id: "sherab", name: "Sherab (Digital Materials)", url: "https://www.sherab.org" },
];
