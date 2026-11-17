import { useEffect, useRef } from "react";

/**
 * Replaces heavy GIFs: a muted looping video that only downloads when it is
 * near the viewport and pauses when scrolled away. Shows a tiny poster first.
 */
export default function LazyVideo({ webm, mp4, poster, label, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let loaded = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loaded) {
            video.src = video.canPlayType('video/webm; codecs="vp9"') ? webm : mp4;
            loaded = true;
          }
          if (!reduce) video.play().catch(() => {});
        } else if (loaded) {
          video.pause();
        }
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(video);
    return () => io.disconnect();
  }, [webm, mp4]);

  return (
    <video
      ref={ref}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-label={label}
      className={className}
    />
  );
}
