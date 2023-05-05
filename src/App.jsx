import Header from './components/Header';
import Navbar from './components/navbar';

const App = () => {
  return (
    <>
      <Header />
      <div className='row'>
        <aside className='aside-main'>
          <Navbar />
        </aside>
        <section className='section-main'>section</section>
      </div>
    </>
  );
};

export default App;
