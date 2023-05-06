import Chart from './Chart';

const ActivityRight = () => {
  return (
    <div className='activity__right activity-right'>
      <div className='activity-right__chart-box'>
        <div className='activity-right__content'>
          <span>
            Active Vehicles <br /> VS. In-Active <br /> Vehicles
          </span>
          <div className='activity-right__labels'>
            <span>Active Vehicles</span>
            <span>In-Active Vehicles</span>
          </div>
        </div>
        <div className='activity-right__chart'>
          <Chart />
        </div>
      </div>

      <div className='activity-right__box'>
        <div className='activity-right__item'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/4_h2NB1_3JR.png?updatedAt=1683388673550'
            alt='img'
          />
          <p>2,108</p>
          <p>Total Violations</p>
        </div>
        <div className='activity-right__item'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/3_cv-wbis6s.png?updatedAt=1683388673542'
            alt='img'
          />
          <p>100,000</p>
          <p>Total Dectations</p>
        </div>
        <div className='activity-right__item'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/1_7g6tdqgkZ.png?updatedAt=1683388673584'
            alt='img'
          />
          <p>48</p>
          <p>Total Active Vehicles </p>
        </div>
        <div className='activity-right__item'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/2_-vjkUNtts.png?updatedAt=1683388673558'
            alt='img'
          />
          <p>50,000</p>
          <p>Total Distance in KM</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityRight;
