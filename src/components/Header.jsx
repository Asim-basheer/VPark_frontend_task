import { useState } from 'react';
import { AiOutlineGlobal } from 'react-icons/ai';
import { RiSearch2Line } from 'react-icons/ri';
import { FaBell } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';
import { CiUser } from 'react-icons/ci';
import { SlSettings } from 'react-icons/sl';
import { FiPower } from 'react-icons/fi';

const Header = () => {
  const [langPopup, setLangPopup] = useState(false);
  const [bellPopup, setBellPopup] = useState(false);
  const [userPopup, setUserPopup] = useState(false);

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
        <div
          className='header-main__lang'
          onClick={() => setLangPopup(!langPopup)}
        >
          <AiOutlineGlobal />

          <div
            className={`header-main__lang-popup ${langPopup ? 'active' : ''}`}
          >
            <div className='header-main__lang-choice'>
              <img
                src='https://ik.imagekit.io/ievdkoh2e/task_work/united-kingdom-flag-icon_1_5J1DM_lps.svg?updatedAt=1683310790295'
                alt='UK icon'
              />
              <span>English</span>
            </div>
            <div className='header-main__lang-choice'>
              <img
                src='https://ik.imagekit.io/ievdkoh2e/task_work/flag-for-flag-united-arab-emirates-svgrepo-com_1_CZVqS4G6Z.svg?updatedAt=1683310790114'
                alt='UAE icon'
              />
              <span>عربي</span>
            </div>
          </div>
        </div>
        <div
          className={`header-main__bell ${!bellPopup ? 'active' : ''}`}
          onClick={() => setBellPopup(!bellPopup)}
        >
          <FaBell />

          <div
            className={`header-main__bell-popup ${bellPopup ? 'active' : ''}`}
          >
            <div className='header-main__bell-popup-item'>
              <div>
                <img
                  src='https://ik.imagekit.io/ievdkoh2e/task_work/bell-2-svgrepo-com_1_w573wQl2Y.svg?updatedAt=1683312493199'
                  alt='bell icon'
                />
              </div>
              <div>
                <span>GIS Data Request</span>
                <p>Ahmad Khalil is Waiting for approval to Add New GIS Data </p>
              </div>
              <div>
                <span>12:08 PM</span>
                <a href='#'>
                  Show
                  <IoIosArrowForward />
                </a>
              </div>
            </div>
            <div className='header-main__bell-popup-item'>
              <div>
                <img
                  src='https://ik.imagekit.io/ievdkoh2e/task_work/bell-2-svgrepo-com_1_w573wQl2Y.svg?updatedAt=1683312493199'
                  alt='bell icon'
                />
              </div>
              <div>
                <span>GIS Data Request</span>
                <p>Ahmad Khalil is Waiting for approval to Add New GIS Data </p>
              </div>
              <div>
                <span>23/01/2023</span>
                <a href='#'>
                  Show
                  <IoIosArrowForward />
                </a>
              </div>
            </div>
            <div className='header-main__bell-popup-item'>
              <div>
                <img
                  src='https://ik.imagekit.io/ievdkoh2e/task_work/bell-2-svgrepo-com_1_w573wQl2Y.svg?updatedAt=1683312493199'
                  alt='bell icon'
                />
              </div>
              <div>
                <span>GIS Data Request</span>
                <p>Ahmad Khalil is Waiting for approval to Add New GIS Data </p>
              </div>
              <div>
                <span>23/01/2023</span>
                <a href='#'>
                  Show
                  <IoIosArrowForward />
                </a>
              </div>
            </div>

            <a href='#'>Show All</a>
          </div>
        </div>
        <div
          className='header-main__user'
          onClick={() => setUserPopup(!userPopup)}
        >
          <img
            src='https://ik.imagekit.io/ievdkoh2e/task_work/244597_pMEoKKDOu.jpg?updatedAt=1683297257297'
            alt='user img'
          />
          <div className='header-main__user-details'>
            <span>John Doe</span>
            <span>Admin</span>
          </div>
          <MdOutlineKeyboardArrowDown className={userPopup ? 'active' : ''} />

          <div
            className={`header-main__user-popup ${userPopup ? 'active' : ''}`}
          >
            <hr />
            <div>
              <CiUser />
              <span>My Account</span>
              <IoIosArrowForward />
            </div>
            <div>
              <SlSettings />
              <span>Settings</span>
              <IoIosArrowForward />
            </div>
            <div>
              <FiPower />
              <span>Logout</span>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
