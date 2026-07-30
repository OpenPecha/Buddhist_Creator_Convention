import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface VideoLightboxProps {
  youtubeId: string;
  title: string;
  children: ReactNode;
}

/**
 * Wraps any trigger element in a full-bleed YouTube player.
 * The iframe only mounts while the dialog is open, so the video never loads
 * until the user asks for it and playback stops the moment they close it.
 */
export const VideoLightbox = ({ youtubeId, title, children }: VideoLightboxProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      {/* The width cap keeps a 16:9 frame inside the viewport height too, so the
          player still fits when a phone is held in landscape. */}
      <DialogContent className="w-[calc(100vw-1.5rem)] max-w-[min(72rem,calc((100vh-7rem)*16/9))] border-0 bg-transparent p-0 shadow-none [&>button]:right-0 [&>button]:top-auto [&>button]:bottom-full [&>button]:mb-3 [&>button]:rounded-full [&>button]:bg-white/10 [&>button]:p-2.5 [&>button]:text-white [&>button]:opacity-100 [&>button]:backdrop-blur-sm [&>button]:transition-colors hover:[&>button]:bg-white/25 [&>button>svg]:h-5 [&>button>svg]:w-5">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-2xl sm:rounded-2xl">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full border-0"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
