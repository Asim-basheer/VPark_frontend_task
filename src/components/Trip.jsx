import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Trip = () => {
  return (
    <div className='trip'>
      <span className='trip__heading'>Trip Route</span>

      <div className='trip__body'>
        <div className='trip__box'>
          <div className='trip__form'>
            <p>
              Trip Route <span className='icon-i'>i</span>
            </p>
            <p>
              Draw Trip Route by adding start point, Way points, and End point
            </p>
            <hr />
            <div className='trip__inputs'>
              <div className='trip__input-box'>
                <label>Trip name</label>
                <input
                  type='text'
                  className='trip__input'
                  defaultValue={'Trip two'}
                />
              </div>
              <div className='trip__input-box'>
                <label>Sector</label>
                <input
                  type='text'
                  className='trip__input'
                  defaultValue={'Marina'}
                />
                <MdOutlineKeyboardArrowDown />
              </div>
            </div>
            <hr />
            <div className='trip__auto'>
              <div className='auto-generate'>
                <span>Auto Generate</span>
                <p className='icon-i'>i</p>
              </div>
              <div className='trip__img-auto'>
                <img
                  src='https://ik.imagekit.io/ievdkoh2e/task_work/g3387_PYReBrqYT.svg?updatedAt=1683391181008'
                  alt=''
                />
              </div>
            </div>

            <hr />
            <div className='trip__points'>
              <div className='trip__point'>
                <span>
                  Add <br /> Start Point
                </span>
                <span className='green'>+</span>
              </div>
              <div className='trip__point'>
                <span className='active'>
                  Add <br /> Way Point
                </span>
                <span>+</span>
              </div>
              <div className='trip__point'>
                <span>
                  Add <br /> Stop Point
                </span>
                <span className='red'>+</span>
              </div>
            </div>
            <hr />
            <div className='trip__buttons'>
              <a href='#' className='btn btn--outline'>
                Cancel
              </a>
              <a href='' className='btn'>
                Save
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trip;
