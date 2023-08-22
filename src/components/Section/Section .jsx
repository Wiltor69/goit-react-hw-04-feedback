import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Title, Block } from './Section.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification ';

export const Section = ({
  onIncrement,
  onGood,
  onBad,
  onNeutral,
  onSum,
  onProcent,
}) => {
  return (
    <Block>
      <Title>Please leave feedback</Title>
      <FeedbackOptions onIncrement={onIncrement} />
      {onSum === 0 && <Notification />}
      {onSum !== 0 && (
        <Statistics
          good={onGood}
          bad={onBad}
          neutral={onNeutral}
          total={onSum}
          procent={onProcent}
        />
      )}
    </Block>
  );
};
