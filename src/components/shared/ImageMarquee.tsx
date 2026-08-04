interface ImageMarqueeProps {
  images: { src: string; alt: string }[];
}

/**
 * An infinite, CSS-driven horizontal scroll of photos. The image list is
 * duplicated so the looping edge is seamless; the track pauses on hover and
 * sits still entirely under prefers-reduced-motion (see index.css).
 */
export const ImageMarquee = ({ images }: ImageMarqueeProps) => {
  const track = [...images, ...images];

  return (
    <div className="overflow-hidden py-6">
      <div className="marquee-track flex w-max gap-4">
        {track.map((image, i) => (
          <div
            key={`${image.src}-${i}`}
            className="h-40 w-56 shrink-0 overflow-hidden rounded-xl shadow-soft sm:h-48 sm:w-64 md:h-56 md:w-80"
          >
            <img src={image.src} alt={image.alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};
