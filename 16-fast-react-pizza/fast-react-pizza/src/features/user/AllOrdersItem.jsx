import { useEffect, useState } from "react";
import { getOrder } from "../../services/apiRestaurant";
import { formatCurrency, formatDate } from "../../utils/helpers";
import { Link } from "react-router-dom";
import Loader from "../../ui/Loader";

function AllOrderItem({ order }) {
  const totalPrice = order.priorityPrice + order.orderPrice;

  return (
    <li>
      <Link
        to={`/order/${order.id}`}
        className="flex items-center justify-between gap-2 bg-stone-200 px-4 py-3"
      >
        Order #{order.id}{" "}
        <span className="text-sm text-stone-500">
          {/* ({formatDate(order.estimatedDelivery)}) */}
        </span>
        <div className="flex gap-2">
          <span className="rounded-full bg-green-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-50">
            {order.status} order
          </span>
          <p>{formatCurrency(totalPrice, "USD")}</p>
        </div>
      </Link>
    </li>
  );
}

export default AllOrderItem;
