import { useRef, useState, useCallback } from "react";

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
}

const BeforeAfterSlider = ({ beforeSrc, afterSrc, beforeAlt = "Before", afterAlt = "After", className = "" }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    updatePosition(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      className={`ba-slider rounded-2xl ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{ touchAction: "none" }}
    >
      {/* Before (background) */}
      <img src={beforeSrc} alt={beforeAlt} className="w-full h-full object-cover block" draggable={false} />
      
      {/* After (clipped overlay) */}
      <div className="ba-after" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <img src={afterSrc} alt={afterAlt} className="w-full h-full object-cover block" draggable={false} />
      </div>

      {/* Handle */}
      <div className="ba-handle" style={{ left: `${position}%`, transform: "translateX(-50%)" }} />

      {/* Labels */}
      <span className="absolute top-4 left-4 bg-foreground/70 text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider z-20">Before</span>
      <span className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-heading font-bold uppercase tracking-wider z-20">After</span>
    </div>
  );
};

export default BeforeAfterSlider;
