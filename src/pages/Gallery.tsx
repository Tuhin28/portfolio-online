import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type GalleryImage = {
  src: string;
  title?: string;
};

const Gallery = () => {
  const [allImages, setAllImages] = useState<GalleryImage[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentRotatingImages, setCurrentRotatingImages] = useState<GalleryImage[]>([]);
  const rotationTimerRef = useRef<NodeJS.Timeout | null>(null);
  const [imageLoadStatus, setImageLoadStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const galleryImages: GalleryImage[] = [
      "20240427_185549.jpg",
      "20240427_202511.jpg",
      "IMG_0549.jpg",
      "IMG_0552.jpg",
      "IMG_0622.JPG",
      "IMG_1681.JPG",
      "IMG_1705.jpg",
      "IMG_1722.jpg",
      "IMG_1722(1).jpg",
      "IMG_1835.jpg",
      "IMG_1908.jpg",
      "IMG_1981.jpg",
      "IMG_2013.jpg",
      "IMG_20190930_175815.jpg",
      "IMG_20191020_154943.jpg",
      "IMG_20191020_155304.jpg",
      "IMG_20191023_115308.jpg",
      "IMG_20191024_063833.jpg",
      "IMG_20191026_162447.jpg",
      "IMG_4466.JPG",
      "IMG_4934.JPG",
      "IMG_5969.JPG",
      "IMG_6293.JPG",
      "IMG_6442.JPG",
      "IMG_6594.JPG",
      "IMG_6772.JPG",
      "IMG_6873.JPG",
      "IMG_7380.JPG",
      "IMG_7734.jpg",
      "IMG_7774.JPG",
      "IMG_8089.JPG",
      "IMG_8536.JPG",
      "IMG_8555.JPG",
      "IMG_8593.JPG",
      "IMG_8744.JPG"
    ].map((filename) => ({
      src: `/Gallery/${filename}`,
      title: filename.replace(/\.[^/.]+$/, "").replace(/_/g, " "),
    }));

    setAllImages(galleryImages);
    setCurrentRotatingImages(shuffleArray([...galleryImages]).slice(0, 8));
  }, []);

  useEffect(() => {
    if (!isExpanded && allImages.length > 8) {
      const rotateImages = () => {
        setCurrentRotatingImages((prev) => {
          const availableImages = allImages.filter(img => !prev.includes(img));
          if (availableImages.length === 0) return prev;

          const randomIndex = Math.floor(Math.random() * prev.length);
          const randomReplacement = availableImages[Math.floor(Math.random() * availableImages.length)];

          const newImages = [...prev];
          newImages[randomIndex] = randomReplacement;
          return newImages;
        });
      };

      rotationTimerRef.current = setInterval(rotateImages, 3500);

      return () => {
        if (rotationTimerRef.current) {
          clearInterval(rotationTimerRef.current);
        }
      };
    }
  }, [isExpanded, allImages]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleLoadMore = () => {
    setIsExpanded(true);
    if (rotationTimerRef.current) {
      clearInterval(rotationTimerRef.current);
    }
  };

  const displayedImages = isExpanded ? allImages : currentRotatingImages;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50/50 to-white px-4 sm:px-6 md:px-8 py-8 md:py-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Visual Stories
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Moments captured through the lens — a collection of perspectives and experiences
          </p>
        </motion.div>

        {allImages.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-12 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              No images found. Add images to <code className="font-mono bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">public/Gallery</code>
            </p>
          </motion.div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className={`grid gap-4 md:gap-6 ${
                isExpanded
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-2 lg:grid-cols-4"
              }`}
            >
              <AnimatePresence mode="popLayout">
                {displayedImages.map((img, idx) => (
                  <motion.div
                    key={`${img.src}-${idx}`}
                    variants={itemVariants}
                    layout
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
                      isExpanded
                        ? "aspect-[4/3]"
                        : idx === 0 || idx === 3
                        ? "row-span-2 aspect-[3/4]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="relative w-full h-full"
                    >
                      <img
                        src={img.src}
                        alt={img.title ?? `Gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        onLoad={() => {
                          setImageLoadStatus((prev) => ({ ...prev, [img.src]: true }));
                        }}
                        onError={() => {
                          setImageLoadStatus((prev) => ({ ...prev, [img.src]: false }));
                        }}
                      />
                      {!imageLoadStatus[img.src] && (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      {img.title && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                          <p className="text-white text-sm font-medium truncate">{img.title}</p>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {!isExpanded && allImages.length > 8 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex justify-center mt-8 md:mt-12"
              >
                <motion.button
                  onClick={handleLoadMore}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Load More</span>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </motion.div>
            )}

            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-center mt-8 md:mt-12"
              >
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Showing all {allImages.length} images
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gallery;
