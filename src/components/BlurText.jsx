import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function BlurText({
  text = '',
  delay = 50,
  className = '',
  animateBy = 'letters', // 'words' or 'letters'
  direction = 'top', // 'top', 'bottom', 'left', 'right'
  duration = 0.6
}) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const isGradient = className.includes('text-gradient') || className.includes('text-glow');
  
  const getInitialPosition = () => {
    switch (direction) {
      case 'top': return { y: -20, opacity: 0, filter: 'blur(10px)' };
      case 'bottom': return { y: 20, opacity: 0, filter: 'blur(10px)' };
      case 'left': return { x: -20, opacity: 0, filter: 'blur(10px)' };
      case 'right': return { x: 20, opacity: 0, filter: 'blur(10px)' };
      default: return { y: 0, opacity: 0, filter: 'blur(10px)' };
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: delay / 1000,
      }
    }
  };

  const childVariants = {
    hidden: getInitialPosition(),
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 100,
        duration: duration
      }
    }
  };

  return (
    <motion.span
      className={`inline-block ${!isGradient ? className : ''}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ whiteSpace: 'pre-wrap' }}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          className={`inline-block ${isGradient ? className : ''}`}
          variants={childVariants}
          style={{ display: 'inline-block' }}
        >
          {el === '' ? '\u00A0' : el}
          {animateBy === 'words' && i < elements.length - 1 ? '\u00A0' : ''}
        </motion.span>
      ))}
    </motion.span>
  );
}
