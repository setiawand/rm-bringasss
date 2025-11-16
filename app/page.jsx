import BannerCarousel from "../components/BannerCarousel";
import FavoriteGrid from "../components/FavoriteGrid";

export default function HomePage() {
  return (
    <div className="home-page">
      <BannerCarousel />
      <section className="favorites-section">
        <h2 className="section-title">Favorite</h2>
        <FavoriteGrid />
      </section>
    </div>
  );
}