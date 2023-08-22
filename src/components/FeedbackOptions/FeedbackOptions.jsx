import { Block, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onIncrement }) => {
  return (
    <Block>
      <Button onClick={() => onIncrement('good')}>Good</Button>
      <Button onClick={() => onIncrement('bad')}>Bad</Button>
      <Button onClick={() => onIncrement('neutral')}>Neutral</Button>
    </Block>
  );
};
