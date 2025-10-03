import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    // Left margin shapes
    {
      id: 1,
      type: 'circle',
      color: '#feb249',
      size: 20,
      initialX: 5,
      initialY: 20,
      animationType: 'float'
    },
    {
      id: 2,
      type: 'square',
      color: '#53d3d1',
      size: 16,
      initialX: 2,
      initialY: 35,
      animationType: 'rotate'
    },
    {
      id: 3,
      type: 'triangle',
      color: '#002447',
      size: 20,
      initialX: 8,
      initialY: 45,
      animationType: 'spin'
    },
    {
      id: 4,
      type: 'circle',
      color: '#002447',
      size: 18,
      initialX: 4,
      initialY: 60,
      animationType: 'float'
    },
    {
      id: 5,
      type: 'square',
      color: '#feb249',
      size: 14,
      initialX: 10,
      initialY: 80,
      animationType: 'drift'
    },
    {
      id: 6,
      type: 'circle',
      color: '#53d3d1',
      size: 12,
      initialX: 6,
      initialY: 90,
      animationType: 'bounce'
    },
    
    // Right margin shapes
    {
      id: 7,
      type: 'circle',
      color: '#53d3d1',
      size: 15,
      initialX: 92,
      initialY: 15,
      animationType: 'drift'
    },
    {
      id: 8,
      type: 'square',
      color: '#53d3d1',
      size: 22,
      initialX: 88,
      initialY: 30,
      animationType: 'float'
    },
    {
      id: 9,
      type: 'triangle',
      color: '#53d3d1',
      size: 16,
      initialX: 95,
      initialY: 50,
      animationType: 'bounce'
    },
    {
      id: 10,
      type: 'triangle',
      color: '#feb249',
      size: 18,
      initialX: 90,
      initialY: 65,
      animationType: 'drift'
    },
    {
      id: 11,
      type: 'circle',
      color: '#002447',
      size: 14,
      initialX: 94,
      initialY: 80,
      animationType: 'float'
    },
    {
      id: 12,
      type: 'square',
      color: '#002447',
      size: 12,
      initialX: 89,
      initialY: 95,
      animationType: 'rotate'
    }
  ];

  const getAnimation = (animationType: string, shapeX: number) => {
    // Reduce horizontal movement for margin-only positioning
    const isLeftMargin = shapeX <= 15;
    const horizontalRange = isLeftMargin ? [-8, 8, -8] : [-8, 8, -8]; // Smaller range to stay in margins
    
    switch (animationType) {
      case 'float':
        return {
          y: [-10, 10, -10],
          x: [-3, 3, -3], // Reduced horizontal movement
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
      case 'drift':
        return {
          x: horizontalRange,
          y: [-8, 8, -8],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
      case 'bounce':
        return {
          y: [-15, 15, -15],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
      case 'rotate':
        return {
          rotate: [0, 360],
          x: [-5, 5, -5], // Reduced horizontal movement
          transition: {
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }
        };
      case 'spin':
        return {
          rotate: [0, 360],
          y: [-12, 12, -12],
          transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }
        };
      default:
        return {};
    }
  };

  const renderShape = (shape: any) => {
    const baseStyle = {
      position: 'absolute' as const,
      left: `${shape.initialX}%`,
      top: `${shape.initialY}%`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      backgroundColor: shape.color,
      pointerEvents: 'none' as const,
      zIndex: -1
    };

    switch (shape.type) {
      case 'circle':
        return (
          <motion.div
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '50%'
            }}
            animate={getAnimation(shape.animationType, shape.initialX)}
          />
        );
      case 'square':
        return (
          <motion.div
            key={shape.id}
            style={{
              ...baseStyle,
              borderRadius: '2px'
            }}
            animate={getAnimation(shape.animationType, shape.initialX)}
          />
        );
      case 'triangle':
        return (
          <motion.div
            key={shape.id}
            style={{
              ...baseStyle,
              backgroundColor: 'transparent',
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
              width: 0,
              height: 0
            }}
            animate={getAnimation(shape.animationType, shape.initialX)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: -1 }}>
      {shapes.map(renderShape)}
    </div>
  );
}