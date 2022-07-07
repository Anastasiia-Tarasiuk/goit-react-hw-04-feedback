import React from "react";
import Section from "./SectionWrapper/SectionWrapper";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        paddingLeft: 10,
        flexDirection: 'column',
        alignItems: 'left',
        fontSize: 30,
        color: '#010101'

      }}
    >
      <Section title="Expresso Feedback Application"  />
    </div>
  );
};
