
// import React from 'react';

// interface TrueFocusProps {
//   sentence: string;
//   blurAmount?: number;
//   borderColor?: string;
//   animationDuration?: number;
//   pauseBetweenAnimations?: number;
//   manualMode?: boolean;
// }

// const TrueFocus: React.FC<TrueFocusProps> = ({
//   sentence,
//   blurAmount = 5,
//   borderColor = 'black',
//   animationDuration = 2,
//   pauseBetweenAnimations = 1,
// }) => {
//   const words = sentence.split(' '); // Show word-by-word animation

//   return (
//     <div className="text-white font-extrabold text-xl tracking-wide">
//       {words.map((word, index) => (
//         <span
//           key={index}
//           className="inline-block mx-1 animate-pulse"
//           style={{
//             filter: `blur(${blurAmount}px)`,
//             animation: `focusIn ${animationDuration}s ease-in-out ${index * pauseBetweenAnimations}s forwards`,
//             borderBottom: `2px solid ${borderColor}`,
//           }}
//         >
//           {word}
//         </span>
//       ))}
//       <style>
//         {`
//           @keyframes focusIn {
//             to {
//               filter: blur(0px);
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default TrueFocus;


import React, { useEffect, useState } from "react";

interface TrueFocusProps {
  sentence: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

const TrueFocus: React.FC<TrueFocusProps> = ({
  sentence,
  manualMode = false,
  blurAmount = 3,
  borderColor = "#000",
  animationDuration = 1,
  pauseBetweenAnimations = 0.5,
}) => {
  const words = sentence.split(" ");
  const [visibleWordIndex, setVisibleWordIndex] = useState(0);

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setVisibleWordIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  return (
    <div className="flex items-center gap-2 text-xl font-bold">
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            filter:
              index === visibleWordIndex ? "none" : `blur(${blurAmount}px)`,
            transition: `all ${animationDuration}s ease-in-out`,
            borderBottom:
              index === visibleWordIndex ? `2px solid ${borderColor}` : "none",
            color: index === visibleWordIndex ? borderColor : "#999",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default TrueFocus;
