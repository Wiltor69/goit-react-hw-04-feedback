import { useState } from 'react';
import { Section } from './Section/Section ';

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const total = good + bad + neutral;
  const procent = Math.round((good / (1 + total)) * 100);

  const handleAdd = type => {
    switch (type) {
      case 'good':
        setGood(good + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <Section
        onIncrement={handleAdd}
        onGood={good}
        onBad={bad}
        onNeutral={neutral}
        onSum={total}
        onProcent={procent}
      />
    </div>
  );
};
