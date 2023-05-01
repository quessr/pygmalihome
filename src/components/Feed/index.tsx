import { css } from "@emotion/react";
import AlertBellIcon from "./AlertBellIcon";
import FeedCardList, { FeedCardListProps } from "./FeedCardList";
import Notification from "./Notification";
import ShackeBellIcon from "./ShakeBellIcon";
import { FC } from "react";

interface FeedProps extends FeedCardListProps {}

const Feed: FC<FeedProps> = ({ cardList }) => {
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
        cardList={cardList}
      />
      <FeedCardList
        icon={<ShackeBellIcon />}
        title="청약신청일까지 이주이내의 공고들 입니다!"
        cardList={[]}
      />
      <Notification />
    </div>
  );
};

export default Feed;
