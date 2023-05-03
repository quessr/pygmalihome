import { css } from "@emotion/react";
import AlertBellIcon from "./AlertBellIcon";
import FeedCardList, { FeedCardListProps, FeedCardProps } from "./FeedCardList";
import Notification from "./Notification";
import ShackeBellIcon from "./ShakeBellIcon";
import { FC } from "react";

interface FeedProps {
  subscriptionPeriodNotices?: Array<FeedCardProps> | null;
  within2WeeksNotices?: Array<FeedCardProps> | null;
}

const Feed: FC<FeedProps> = ({
  subscriptionPeriodNotices,
  within2WeeksNotices,
}) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 24px;
      `}
    >
      <FeedCardList
        icon={<AlertBellIcon />}
        title="청약기간 입니다, 지금 바로 신청하세요!"
        cardList={subscriptionPeriodNotices}
      />

      <FeedCardList
        icon={<ShackeBellIcon />}
        title="청약신청일까지 이주이내의 공고들 입니다!"
        cardList={within2WeeksNotices}
      />
      <Notification fullWidth />
    </div>
  );
};

export default Feed;
