import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <main className="home-page">
      <div className="home-hero">
        <div className="home-hero-text">
          <h1>Experience IPL Live in the Stadium!</h1>
          <p className="home-subtitle">
            Book official match tickets, choose your favorite stands, and cheer for your team live.
          </p>
          <div className="home-cta-group">
            <Link to="/matches" className="btn-primary">View Matches</Link>
            <Link to="/booking" className="btn-secondary">Book Ticket Now</Link>
          </div>
        </div>
        <div className="home-hero-image-wrapper">
          <img src={heroImage} alt="IPL Cricket Stadium" className="home-hero-img" />
        </div>
      </div>

      <section className="home-features">
        <div className="feature-card">
          <span className="feature-icon">🏏</span>
          <h3>Live IPL Action</h3>
          <p>Catch the most thrilling cricket rivalries live from premium stadium seats.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">⚡</span>
          <h3>Instant Booking</h3>
          <p>Seamlessly secure your tickets and choose your preferred stand in seconds.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🎟️</span>
          <h3>Manage History</h3>
          <p>Keep track of all your confirmed match bookings in one convenient place.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;

