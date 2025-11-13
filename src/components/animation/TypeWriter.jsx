import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterComponent = ({ strings, className, style }) => {
  return (
    <div className={className} style={style}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComponent;
