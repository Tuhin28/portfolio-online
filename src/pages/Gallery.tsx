import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  title?: string;
};

// Support both spellings: /gallary (existing) and /Gallery (user's folder)
const SOURCES = ["/gallary", "/Gallery"]; // public paths

async function fetchManifest(): Promise<GalleryImage[]> {
  try {
    // Try both locations for manifest
    const resList = await Promise.all(
      SOURCES.map((base) => fetch(`${base}/manifest.json`, { cache: "no-store" }).catch(() => null))
    );
    const res = resList.find((r) => r && (r as Response).ok) as Response | undefined;
    if (!res.ok) throw new Error("no manifest");
    const files: (string | GalleryImage)[] = await res.json();
    const base = SOURCES[resList.indexOf(res as any)] ?? SOURCES[0];
    return files.map((f) => (typeof f === "string" ? { src: `${base}/${f}` } : { ...f, src: `${base}/${f.src}` }));
  } catch {
    // No manifest: list common names from both folders
    const commonNames = [
      "gallery 1.webp","gallery 2.webp","gallery 3.webp","gallery 4.webp","gallery 5.webp",
      "gallery 6.webp","gallery 7.webp","gallery 8.webp","gallery 9.webp","gallery 10.webp"
    ];
    const found: GalleryImage[] = [];
    const checks = await Promise.all(
      SOURCES.flatMap((base) =>
        commonNames.map(async (n) => {
          try {
            const r = await fetch(`${base}/${n}`, { method: "HEAD" });
            return r.ok ? { src: `${base}/${n}` } : null;
          } catch {
            return null;
          }
        })
      )
    );
    checks.forEach((x) => x && found.push(x));
    return found;
  }
}

function sampleUnique<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  const result: T[] = [];
  const n = Math.min(count, copy.length);
  for (let i = 0; i < n; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy.splice(idx, 1)[0]);
  }
  return result;
}

const INITIAL_VISIBLE = 8;

const Gallery = () => {
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [shuffled, setShuffled] = useState<GalleryImage[]>([]);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    let mounted = true;
    fetchManifest().then((imgs) => {
      if (!mounted) return;
      setAllImages(imgs);
      const initial = imgs.length > 0 ? sampleUnique(imgs, Math.min(INITIAL_VISIBLE, imgs.length)) : [];
      setShuffled(initial);
    });
    return () => {
      mounted = false;
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
    };
  }, []);

  // Periodic randomized image rotation with staggered offsets
  useEffect(() => {
    timersRef.current.forEach((t) => window.clearTimeout(t));
    timersRef.current = [];
    if (shuffled.length === 0 || allImages.length === 0) return;

    const baseIntervalMs = 10000; // ~10s
    const maxStaggerMs = 4000; // distribute so not all change at once

    shuffled.forEach((_img, index) => {
      const offset = Math.floor((index / Math.max(1, shuffled.length - 1)) * maxStaggerMs);
      const schedule = () => {
        // choose a new image that's not currently visible to reduce repeats
        const pool = allImages.filter((g) => !shuffled.includes(g));
        const replacement = (pool.length > 0 ? pool : allImages)[Math.floor(Math.random() * (pool.length > 0 ? pool.length : allImages.length))];
        setShuffled((prev) => {
          const nxt = [...prev];
          nxt[index] = replacement;
          return nxt;
        });
        const id = window.setTimeout(schedule, baseIntervalMs + Math.floor(Math.random() * 1500));
        timersRef.current.push(id);
      };
      const id = window.setTimeout(schedule, baseIntervalMs + offset + Math.floor(Math.random() * 500));
      timersRef.current.push(id);
    });

    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t));
      timersRef.current = [];
    };
  }, [allImages, shuffled.length]);

  const visibleImages = useMemo(() => {
    if (visibleCount <= shuffled.length) return shuffled.slice(0, visibleCount);
    // if user loads more before rotation fills, pad from allImages
    const extra = sampleUnique(
      allImages.filter((g) => !shuffled.includes(g)),
      Math.max(0, visibleCount - shuffled.length)
    );
    return [...shuffled, ...extra];
  }, [allImages, shuffled, visibleCount]);

  const canLoadMore = allImages.length > 0 && visibleCount < allImages.length;

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="pt-6 pb-4">
          <h1 className="text-2xl sm:text-3xl font-semibold">Gallery</h1>
          <p className="text-muted-foreground mt-1">A living wall of moments I captured.</p>
        </div>

        {allImages.length === 0 ? (
          <div className="rounded-xl border border-dashed p-8 text-center text-sm text-muted-foreground">
            No images found in <code className="font-mono">public/Gallery</code> or <code className="font-mono">public/gallary</code>.
            Add a manifest with file names, for example: <code className="font-mono">["file1.webp","photo.jpg"]</code>.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
              {visibleImages.map((img, idx) => (
                <motion.div
                  key={`${img.src}-${idx}`}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow hover:shadow-lg transition-shadow"
                >
                  <img
                    src={img.src}
                    alt={img.title ?? `Gallery ${idx + 1}`}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>
              ))}
            </div>

            {canLoadMore && (
              <div className="flex justify-center py-8">
                <button
                  onClick={() => setVisibleCount(allImages.length)}
                  className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 shadow hover:shadow-md transition"
                >
                  Load more
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;


