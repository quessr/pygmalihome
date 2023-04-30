import AlertBellIcon from "./AlertBellIcon";
import FeedCardList from "./FeedCardList";
import Notification from "./Notification";
import ShackeBellIcon from "./ShakeBellIcon";

const Feed = () => {
  return (
    <div>
      <FeedCardList
        icon={<AlertBellIcon />}
        title="청약기간 입니다, 지금 바로 신청하세요!"
      />
      <FeedCardList
        icon={<ShackeBellIcon />}
        title="청약신청일까지 이주이내의 공고들 입니다!"
      />
      <Notification />
    </div>
  );
};

export default Feed;
