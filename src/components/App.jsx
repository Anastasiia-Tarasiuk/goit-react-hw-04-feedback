import React from "react";
import Section from "./SectionWrapper/SectionWrapper";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Expresso Application" />
    </div>
  );
};
