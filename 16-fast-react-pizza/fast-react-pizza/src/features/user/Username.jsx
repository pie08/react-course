import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <Link to="/order/orders" className="hidden text-sm font-semibold md:block">
      {username}
    </Link>
  );
}

export default Username;
