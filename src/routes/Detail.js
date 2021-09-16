import React from "react";

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
    const { location } = this.props; // 이걸 해주면 새로고침 하면 에러발생(render하고 componentDidMount실행하기 때문)
    //solution
    if (location.state) {
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
