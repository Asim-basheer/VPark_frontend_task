import { AiOutlineGlobal } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';
import { FaBell } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const Header = () => {
  return (
    <header className='header-main'>
      <a href='#' className='header-main__logo'>
        <img
          src='https://ik.imagekit.io/ievdkoh2e/task_work/logo__1__IDWJkpCrI.svg?updatedAt=1683293409860'
          alt='logo'
        />
        <span>Logo</span>
      </a>
      <div className='header-main__actions'>
        <div className='header-main__search-box'>
          <input type='text' placeholder='Search' />
          <RiSearch2Line />
        </div>
        <div className='header-main__lang'>
          <AiOutlineGlobal />
        </div>
        <div className='header-main__bell'>
          <FaBell />
        </div>
        <div className='header-main__user'>
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/244597_pMEoKKDOu.jpg?updatedAt=1683297257297'
            alt='user img'
          />
          <div className='header-main__user-details'>
            <span>John Doe</span>
            <span>Admin</span>
          </div>
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </header>
  );
};

export default Header;
