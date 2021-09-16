import React from "react";
import "./Detail.css";

/* 그냥 /movie-detail로 가면 아무것도 가져오지 않음 
-> 이걸 처리해야함 -> 그래서 class 사용*/

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props; // this.props에서 location은 가져옴
    /* 만약 state에 아무것도 없다면 -> home으로 redirect
    여기서 history(여기엔 go, goBack, goForward등 다양함 url관련 함수 존재) 사용 */

    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { state } = this.props.location; // 이걸 해주면 새로고침 하면 에러발생(render하고 componentDidMount실행하기 때문)
    //solution
    if (state) {
      return (
        <section className="detail_container">
          <img
            src={state.poster}
            className="detail__img"
            alt={state.title}
            title={state.title}
          />
          <div className="detail__box">
            <div className="detail__title">TITLE | {state.title}</div>
            <div className="detail__year">YEAR | {state.year}</div>
            <ul className="detail__genres">
              GENRE |
              {state.genres.map((genre, index) => (
                <li key={index} className="detail__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <div className="detail__rating">RATING | {state.rating}/10</div>
            <div className="detail__runtime">RUNTIME | {state.runtime}분</div>
            <div className="detail__summary">SUMMARY | {state.summary}</div>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
