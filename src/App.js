import { HashRouter, Route } from "react-router-dom"; // 여러 종류의 router들이 있음
/* router -> url 을 보고 js 실행
  예를 들면 url이 /로 끝나면 Home.js를 실행한다거나 
      /about 으로 끝나면 About.js를 실행한다거나 해줌
*/
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigations";

function App() {
  return (
    // BrowerRouter는 url에 /#/가 없지만 gh-pages를 설정할 때에 편리하게 하기 위해 HashRouter사용
    <HashRouter>
      {/* Navigations 만들기 Router밖에서는 
        Navigation(Link를 사용하기 때문에)이 작동하지 않음 */}
      <Navigation />
      <Route path="/" exact={true} component={Home} />{" "}
      {/* exact => 정확히(exact) "/"" 인 url만 render */}
      {/* Route내에는 렌더링할 스크린과 뭘 할지 정해주는 props가 들어감 */}
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
