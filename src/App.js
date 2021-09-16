import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // 기다렸다가 작업이 끝난 뒤에 해야 하기 때문에 async 사용
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      // 기다려야 하는 곳에 await 넣기
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  // rendering이 성공적으로 실행되면 이 함수가 실행됨.
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      // HTML 코드 작성
      // 이건 어쨌든 jsx이기 때문에(not HTML) class 대신 className사용해야함.
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              // map 함수 : 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 반환
              // Movie에 인자 넘겨주기
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
