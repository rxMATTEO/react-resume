import Masonry from 'react-masonry-css';
import './masonry.sass';

function Portfolio() {
  return (
    <div className="mx-auto">
      <p className="text-5xl font-light uppercase tracking-[5px] mb-10">Мое портфолио</p>
      <Masonry breackpointCols={5} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        <div className="h-64 bg-purple" />
        <div className="h-36 bg-purple" />
        <div className="h-96 bg-purple" />
        <div className="h-96 bg-purple" />
        <div className="h-36 bg-purple" />
        <div className="h-24 bg-purple" />
      </Masonry>
    </div>
  );
}

export default Portfolio;
