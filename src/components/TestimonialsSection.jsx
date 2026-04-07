import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Cassie G.',
    avatar: 'https://i.pravatar.cc/80?img=47',
    stars: 5,
    review:
      'J R Foster Construction exceeded our expectations! Their attention to detail and quality craftsmanship made our dream home a reality. Highly recommended!',
  },
  {
    id: 2,
    name: 'Jenne Jackson',
    avatar: 'https://i.pravatar.cc/80?img=32',
    stars: 5,
    review:
      'From start to finish, the team was professional, timely, and dedicated. They handled our renovation seamlessly and delivered outstanding results.',
  },
  {
    id: 3,
    name: 'Jackie Kiser',
    avatar: 'https://i.pravatar.cc/80?img=45',
    stars: 5,
    review:
      'We entrusted J R Foster Construction with our commercial project, and they delivered beyond our expectations. Their expertise and commitment to quality are unmatched.',
  },
  {
    id: 4,
    name: 'Michael Torres',
    avatar: 'https://i.pravatar.cc/80?img=12',
    stars: 5,
    review:
      'Absolutely incredible work! The crew was respectful, clean, and finished ahead of schedule. Our bathroom remodel looks stunning. Will definitely hire again!',
  },
  {
    id: 5,
    name: 'Sarah Williams',
    avatar: 'https://i.pravatar.cc/80?img=5',
    stars: 5,
    review:
      'We had our kitchen fully renovated and the results are breathtaking. J R Foster Construction listened to every detail and brought our vision to life perfectly.',
  },
];

/* Responsive: show 3 on desktop, 2 on tablet, 1 on mobile */
const getVisibleCount = (width) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const StarRating = ({ count = 5 }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFC107">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    key={testimonial.id}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.45, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
    style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e8e8e8',
      borderRadius: '4px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
      boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
      flex: '1 1 0',
      minWidth: 0,
    }}
  >
    {/* Top: avatar + name + stars */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '2px solid #FFC107',
          flexShrink: 0,
        }}
      />
      <div>
        <p style={{ fontWeight: 700, fontSize: '14px', color: '#1a1a1a', marginBottom: '4px' }}>
          {testimonial.name}
        </p>
        <StarRating count={testimonial.stars} />
      </div>
    </div>

    {/* Review text */}
    <p style={{ fontSize: '13.5px', color: '#555', lineHeight: '1.7', flexGrow: 1 }}>
      {testimonial.review}
    </p>

    {/* Verified badge */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <CheckCircle size={15} color="#22c55e" strokeWidth={2.5} />
      <span style={{ fontSize: '12px', fontWeight: 600, color: '#22c55e' }}>Verified Customer</span>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const intervalRef = useRef(null);

  /* Track window width */
  useEffect(() => {
    const update = () => setVisibleCount(getVisibleCount(window.innerWidth));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const totalSlides = testimonials.length - visibleCount + 1;

  /* Auto-slide every 4 seconds */
  const startInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 4000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalSlides]);

  const goTo = (index) => {
    setCurrent(index);
    startInterval(); /* Reset timer on manual click */
  };

  const visible = testimonials.slice(current, current + visibleCount);

  return (
    <section
      style={{ backgroundColor: '#f5f5f5', padding: '72px 0 60px' }}
      className="font-sans overflow-hidden"
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* ---- Section heading ---- */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          style={{ textAlign: 'center', marginBottom: '44px' }}
        >
          <h2
            style={{
              fontSize: 'clamp(22px, 4vw, 32px)',
              fontWeight: 800,
              letterSpacing: '0.04em',
              color: '#111111',
              marginBottom: '10px',
              textTransform: 'uppercase',
            }}
          >
            Hear From Our Happy Customers
          </h2>
          <p style={{ fontSize: '15px', color: '#777', maxWidth: '480px', margin: '0 auto' }}>
            Check out real reviews from folks who love our construction work.
          </p>
        </motion.div>

        {/* ---- Cards row ---- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            style={{
              display: 'flex',
              gap: '20px',
              alignItems: 'stretch',
            }}
          >
            {visible.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ---- Dots ---- */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '8px',
            marginTop: '32px',
          }}
        >
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === current ? '24px' : '10px',
                height: '10px',
                borderRadius: i === current ? '5px' : '50%',
                backgroundColor: i === current ? '#FFC107' : '#c8c8c8',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
                outline: 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
