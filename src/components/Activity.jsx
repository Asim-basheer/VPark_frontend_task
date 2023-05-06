import { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Activity = () => {
  const [vehiclesPopup, setVehiclesPopup] = useState(false);
  const [currentVehicles, setCurrentVehicles] = useState(null);

  const vehicleData = [
    {
      name: 'Smart Vehicle',
      status: 2,
    },

    {
      name: 'Smart Vehicle',
      status: 1,
    },

    {
      name: 'Smart Vehicle',
      status: 1,
    },
    {
      name: 'Smart Vehicle',
      status: 2,
    },

    {
      name: 'Smart Vehicle',
      status: 3,
    },

    {
      name: 'Smart Vehicle',
      status: 1,
    },
    {
      name: 'Smart Vehicle',
      status: 1,
    },
    {
      name: 'Smart Vehicle',
      status: 2,
    },

    {
      name: 'Smart Vehicle',
      status: 3,
    },

    {
      name: 'Smart Vehicle',
      status: 1,
    },
    {
      name: 'Smart Vehicle',
      status: 1,
    },
  ];

  return (
    <div className='activity'>
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
        <div className='vehicles-box'>
          {vehicleData.map(({ name, status }, i) => {
            return (
              <>
                <div
                  className={`vehicles-box__vehicle ${
                    vehiclesPopup && i === currentVehicles ? 'active' : ''
                  }`}
                >
                  <div
                    className='vehicles-box__vehicle-visible'
                    onClick={() => {
                      setVehiclesPopup(!vehiclesPopup);
                      setCurrentVehicles(i);
                    }}
                  >
                    <div
                      className={
                        vehiclesPopup && i === currentVehicles ? 'active' : ''
                      }
                    >
                      <img
                        src='https://ik.imagekit.io/ievdkoh2e/task_work/car-white-svgrepo-com_xAQcOIIIf.svg?updatedAt=1683330749021'
                        alt='vehicle icon'
                        className={
                          vehiclesPopup && i === currentVehicles ? 'active' : ''
                        }
                      />
                    </div>
                    <span
                      className={
                        status === 1
                          ? 'green-status'
                          : status === 2
                          ? 'yellow-status'
                          : 'red-status'
                      }
                    ></span>
                    <span>
                      {name} {i + 1}
                    </span>
                    <MdOutlineKeyboardArrowDown
                      className={
                        vehiclesPopup && i === currentVehicles ? 'active' : ''
                      }
                    />
                  </div>

                  <div
                    className={`vehicles-box__vehicle-hidden ${
                      vehiclesPopup && i === currentVehicles ? 'active' : ''
                    }`}
                  >
                    <div>
                      <img
                        src='https://ik.imagekit.io/ievdkoh2e/task_work/Group_85042_AOO3RzuKI.svg?updatedAt=1683332966632'
                        alt='cam icon'
                      />
                      <span>Camera</span>
                      <span>Online</span>
                      <span>Active</span>
                    </div>
                    <div>
                      <img
                        src='https://ik.imagekit.io/ievdkoh2e/task_work/Group_85041_8YPnmQFPn.svg?updatedAt=1683332966624'
                        alt='cam icon'
                      />
                      <span>Network</span>
                      <span>Available</span>
                      <span>Active</span>
                    </div>
                    <div>
                      <img
                        src='https://ik.imagekit.io/ievdkoh2e/task_work/Group_85043_eFxGgxe95.svg?updatedAt=1683332966642'
                        alt='cam icon'
                      />
                      <span>Memory</span>
                      <span>20%</span>
                      <span>Normal</span>
                    </div>
                    <div>
                      <img
                        src='https://ik.imagekit.io/ievdkoh2e/task_work/Group_85035_RTZQLVVLz.svg?updatedAt=1683332961390'
                        alt='cam icon'
                      />
                      <span>CPU Temp</span>
                      <span>70°</span>
                      <span className='red'>High</span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className='activity__right'>right</div>
    </div>
  );
};

export default Activity;
