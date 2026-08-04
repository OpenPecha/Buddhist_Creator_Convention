# Award winner portraits

These are the real ceremony photos from `docs/Award_Winners.docx`, cropped to a
uniform 4:3 landscape (each winner on stage with the coaches). If a file is ever
missing, the site falls back to a branded monogram of the winner's initials
instead — nothing breaks and no code change is needed.

| File | Winner | Award |
| --- | --- | --- |
| `quinthup-pema-bhutia.jpg` | Ven. Quinthup Pema Bhutia | Buddhist Influencer of the Year 2026 |
| `chhewang-dorjee.jpg` | Chhewang Dorjee | Rising Star Award |
| `tashi-chosgon.jpg` | Tashi Chosgon | Audience Choice Award |
| `tenzin-chime.jpg` | Tenzin Chime | Most Creative Video Award |
| `sonam-dolma.jpg` | Sonam Dolma | Most Followers Gained Award |

To swap in a cleaner individual portrait later, replace the file at the same
path — 4:3 or taller works best, with the winner's face centred, since these
render inside both square avatars and 4:5 cards.

Filenames and Instagram handles are wired up in `src/data/awards.ts` via each
winner's `photo` and `instagram` fields.
