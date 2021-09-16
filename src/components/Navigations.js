import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div>
      {/* html의 a href 쓰면 사이트가 강제로 새로고침 되기 때문에 이걸 
        사용하지 않고 Link to를 사용함 */}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navigation;
