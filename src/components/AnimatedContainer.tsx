import type { CSSProperties, ReactNode } from "react";

type AnimatedContainerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

const AnimatedContainer = ({
  children,
  className = "",
  stagger = 0.3,
  delayChildren = 0,
}: AnimatedContainerProps) => {
  const animationStyle = (index: number): CSSProperties => ({
    animationDelay: `${delayChildren + index * stagger}s`,
  });

  return (
    <div className={className}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div key={i} className="animate-content-enter" style={animationStyle(i)}>
              {child}
            </div>
          ))
        : <div className="animate-content-enter" style={animationStyle(0)}>{children}</div>}
    </div>
  );
};

export default AnimatedContainer;
