import React, { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";

const ScrollFrameAnimation = ({ productId, frameConfig, theme, onScrollProgress }) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const currentFrame = useRef(0);
  const requestRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const frameImages = [];
    const imagePromises = [];

    for (let i = 0; i < frameConfig.frameCount; i++) {
      const img = new Image();
      const frameNumber = i.toString().padStart(3, '0');
      img.src = `/frames/${productId}/${frameConfig.prefix}_${frameNumber}.webp`;

      const promise = new Promise((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = reject;
      });

      frameImages.push(img);
      imagePromises.push(promise);
    }

    Promise.all(imagePromises)
      .then(() => {
        setImages(frameImages);
        setImagesLoaded(true);
      })
      .catch((err) => {
        console.error('Error loading frames:', err);
      });
  }, [productId, frameConfig]);

  const renderFrame = useCallback((frameIndex) => {
    if (!canvasRef.current || !images.length) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const img = images[frameIndex];

    if (!img || !img.complete) return;

    const displayWidth = canvas.clientWidth;
    const displayHeight = canvas.clientHeight;

    canvas.width = displayWidth;
    canvas.height = displayHeight;

    const imgAspect = img.width / img.height;
    const canvasAspect = displayWidth / displayHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    if (imgAspect > canvasAspect) {
      // Image is wider than canvas (relative to aspect ratios)
      // To cover, we match height and let width overflow
      drawHeight = displayHeight;
      drawWidth = displayHeight * imgAspect;
      offsetX = (displayWidth - drawWidth) / 2;
      offsetY = 0;
    } else {
      // Image is taller/narrower than canvas
      // To cover, we match width and let height overflow
      drawWidth = displayWidth;
      drawHeight = displayWidth / imgAspect;
      offsetX = 0;
      offsetY = (displayHeight - drawHeight) / 2;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded || !containerRef.current) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));

      setScrollProgress(progress);

      if (onScrollProgress) {
        onScrollProgress(progress);
      }

      if (progress > 0.1) {
        const adjustedProgress = (progress - 0.1) / 0.9;
        const frameIndex = Math.min(
          frameConfig.frameCount - 1,
          Math.floor(adjustedProgress * frameConfig.frameCount)
        );

        if (frameIndex !== currentFrame.current) {
          currentFrame.current = frameIndex;

          if (requestRef.current) {
            cancelAnimationFrame(requestRef.current);
          }
          requestRef.current = requestAnimationFrame(() => {
            renderFrame(frameIndex);
          });
        }
      } else {
        renderFrame(0);
      }
    };

    renderFrame(0);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [imagesLoaded, frameConfig, renderFrame, onScrollProgress]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const handleResize = () => {
      renderFrame(currentFrame.current);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [imagesLoaded, renderFrame]);

  const containerVisible = scrollProgress >= 0.1;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-20 md:top-32 lg:top-36 left-0 w-full flex items-center justify-center px-4 md:px-8 lg:px-12 pt-0 md:pt-6">
        <motion.div
          className="relative w-full max-w-7xl rounded-2xl md:rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[16/8]"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: containerVisible ? 1 : 0 }}
          transition={{ duration: 0.6 }}
        >
          {!imagesLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div
                  className="inline-block w-10 h-10 md:w-12 md:h-12 border-4 border-t-transparent rounded-full animate-spin mb-4"
                  style={{ borderColor: theme.accent, borderTopColor: 'transparent' }}
                />
                <p
                  className="text-sm md:text-lg font-semibold"
                  style={{
                    color: theme.text,
                    fontFamily: "'Manrope', sans-serif"
                  }}
                >
                  Loading...
                </p>
              </div>
            </div>
          )}
          <canvas
            ref={canvasRef}
            className={`w-full h-full transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'
              }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollFrameAnimation;
