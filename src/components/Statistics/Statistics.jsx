import { Block, Title } from './Statistics.styled';

export const Statistics = ({ good, bad, neutral, total, procent }) => {
  return (
    <Block>
      <Title>Statistics</Title>

      <p>Good: {good}</p>
      <p>Bad: {bad}</p>
      <p>Neutral: {neutral}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {procent} %</p>
    </Block>
  );
};
