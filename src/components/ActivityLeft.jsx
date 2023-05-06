import VehiclesBox from './VehiclesBox';

const ActivityLeft = () => {
  return (
    <div className='activity__left activity-left'>
      <span className='activity-left__heading'>VPart fleet</span>
      <div className='activity-left__controls'>
        <div>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/Group_79025_xcqKFFWHs.svg?updatedAt=1683329695920'
            alt='icon'
          />
        </div>
        <div>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/Group_79024_Xsoy0I9Ax.svg?updatedAt=1683329695918'
            alt='icon'
          />
        </div>
      </div>

      <VehiclesBox />
    </div>
  );
};

export default ActivityLeft;
