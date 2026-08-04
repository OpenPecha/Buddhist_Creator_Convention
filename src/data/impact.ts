/**
 * Headline numbers for BCC 2026, sourced from the Buddhist Creators Convention 2026
 * report (public/images/convention/bcc-2026-report.pdf, pp. 1-2, 15-16).
 */

export const IMPACT_STATS = [
  { value: "110", label: "Selected Creators" },
  { value: "10", label: "Countries" },
  { value: "360+", label: "Applicants" },
  { value: "9", label: "Days in Bodh Gaya" },
] as const;

export const VISION_2030 = {
  value: "100M",
  label: "Followers reached by 2030",
  description:
    "Our shared vision: empower Buddhist creators worldwide to collectively reach 100 million followers with authentic Buddha teachings through digital platforms.",
} as const;

export const MASTERCLASS_EFFECTIVENESS = {
  veryEffective: "82%",
  somewhatEffective: "12%",
} as const;

export const APPLICANT_BREAKDOWN = {
  female: 27,
  male: 83,
  total: 110,
  applicantPool: "360+",
} as const;

export const REPORT_PDF_PATH = "/images/convention/bcc-2026-report.pdf";
