import { useSelector } from "react-redux";
import Message from "../../ui/Message";
import AllOrderItem from "./AllOrdersItem";

function AllOrders() {
  const orders = useSelector((state) => state.user.orders);

  return (
    <div className="px-4 py-6">
      <ul className="space-y-1">
        {orders.length > 0 ? (
          orders.map((order) => <AllOrderItem order={order} key={order.id} />)
        ) : (
          <Message message="You don't have any orders currently. Start buy ordering some pizzas :)" />
        )}
      </ul>
    </div>
  );
}

export default AllOrders;
