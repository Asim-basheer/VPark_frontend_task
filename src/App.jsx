import Activity from './components/Activity';
import Header from './components/Header';
import NeedHelp from './components/NeedHelp';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
      <Header />
      <div className='row-main'>
        <aside className='aside-main'>
          <Navbar />
          <NeedHelp />
        </aside>
        <section className='section-main'>
          <span className='section-main__heading'>Welcome! John Doe</span>
          <Activity />
          <div className='view'>
            <div className='view__content'>
              <span>
                Get a bird{"'"}s eye <strong>view</strong> in a snap
              </span>
              <p>
                We equip you with the tools to customise your dashboards and
                trach fleet status, <br />
                decoration, and violations at a glance
              </p>
            </div>
            <div className='view__img'>
              <img
                src='https://ik.imagekit.io/ievdkoh2e/task_work/Mask_Group_49_2x_b8v1hgKfA.png?updatedAt=1683337941546'
                alt='view img'
              />
            </div>
          </div>
          <div className='trip'></div>
        </section>
      </div>
    </>
  );
};

export default App;
