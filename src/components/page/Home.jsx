// STYLES //
import Button from '../global/Button';
import './Home.scss';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="grid container">
        <div className="home__content">
          <h1 className="main-title">Experience your next chapter.</h1>
          <p className="lead">
            It’s time to pack your bags and get ready for your next adventure.
          </p>
          <Button href="#tours" className="btn btn--text">
            Discovr Tours &rarr;
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
