import Activity from './components/Activity';
import Header from './components/Header';
import NeedHelp from './components/NeedHelp';
import Trip from './components/Trip';
import View from './components/View';
import Navbar from './components/navbar';

// import style
import './style/main.scss';

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
          <View />
          <Trip />
        </section>
      </div>
    </>
  );
};

export default App;
