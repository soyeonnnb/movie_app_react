import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      {/* html의 a href 쓰면 사이트가 강제로 새로고침 되기 때문에 이걸 
        사용하지 않고 Link to를 사용함 */}
      <Link to="/" className="navigation__link">
        Home
      </Link>
      <Link to="/about" className="navigation__link">
        About
      </Link>
    </div>
  );
}
export default Navigation;
