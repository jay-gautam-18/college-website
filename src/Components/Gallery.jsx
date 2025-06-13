import React, { useRef, useEffect } from 'react';
import '../App.css';

const images = [
  { src: 'https://picsum.photos/id/1015/400/400', title: 'Library' },
  { src: 'https://picsum.photos/id/1016/400/400', title: 'Classroom' },
  { src: 'https://picsum.photos/id/1018/400/400', title: 'Lab' },
  { src: 'https://picsum.photos/id/1024/400/400', title: 'Campus' },
  { src: 'https://picsum.photos/id/1027/400/400', title: 'Auditorium' },
  { src: 'https://picsum.photos/id/1035/400/400', title: 'Hallway' },
  { src: 'https://picsum.photos/id/1040/400/400', title: 'Garden' },
];

const Gallery = () => {
  const carouselRef = useRef(null);
  const angle = 360 / images.length;
  let startX = 0;
  let currentRotation = 0;

  useEffect(() => {
    const container = carouselRef.current;

    const handleMouseDown = (e) => {
      startX = e.clientX;
      container.style.cursor = 'grabbing';

      const handleMouseMove = (e) => {
        const delta = e.clientX - startX;
        startX = e.clientX;
        currentRotation += delta * 0.3;
        container.style.transform = `translateZ(-1000px) rotateY(${currentRotation}deg)`;
      };

      const handleMouseUp = () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        container.style.cursor = 'grab';
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    container.addEventListener('mousedown', handleMouseDown);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <section className="w-full h-screen bg-[#0a0510] flex items-center justify-center overflow-hidden">
      <div
        ref={carouselRef}
        className="relative w-[500px] h-[500px]"
        style={{
          transformStyle: 'preserve-3d',
          transform: 'translateZ(-1000px) rotateY(0deg)',
          transition: 'transform 0.5s ease-out',
          cursor: 'grab'
        }}
      >
        {images.map((img, index) => {
          const rotation = index * angle;
          return (
            <div
              key={index}
              className="absolute w-[240px] h-[300px] p-2 text-white"
              style={{
                transform: `rotateY(${rotation}deg) translateZ(1000px)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover rounded-xl border border-white shadow-lg"
              />
              <p className="text-center mt-2 text-lg font-semibold tracking-wide">{img.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;