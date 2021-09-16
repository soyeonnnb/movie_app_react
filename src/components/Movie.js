import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year,
            title,
            summary,
            poster,
            genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="moive__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map(
              (
                genre,
                index //map은 또다른 argument를 줌(하나는 현재 item, 하나는 item number -> 원하는 걸로 하기)
              ) => (
                <li key={index} className="genres_genre">
                  {genre}
                </li>
              )
            )}
          </ul>
          <p className="movie_summary">{summary.slice(0, 140)}...</p>{" "}
          {/* slice를 사용해서 긴 문장 자르기 .slice(시작점, 끝점) */}
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired, // array는 이렇게 생성
};

export default Movie;
