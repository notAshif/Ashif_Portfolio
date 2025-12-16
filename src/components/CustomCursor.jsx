import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: "power2.out"
      });
      
      gsap.to(follower, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, {
        scale: 0.8,
        duration: 0.1
      });
      gsap.to(follower, {
        scale: 0.8,
        duration: 0.3
      });
    };

    const onMouseUp = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.1
      });
      gsap.to(follower, {
        scale: 1,
        duration: 0.3
      });
    };

    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ opacity: 0 }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{ opacity: 0 }}
      />
    </>
  );
};

export default CustomCursor;