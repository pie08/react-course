import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  const isPriority = order.priority === true;

  return (
    <fetcher.Form method="PATCH" className="flex gap-8">
      <input
        type="text"
        name="address"
        className="input w-full"
        placeholder="Update order address"
      />

      {!isPriority && (
        <>
          <input
            type="checkbox"
            id="priority"
            name="priority"
            className="peer hidden"
          />
          <label
            htmlFor="priority"
            className="inline-block shrink-0 rounded-full border-2 border-stone-300 px-4 py-2.5 text-sm font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300  hover:cursor-pointer hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed peer-checked:bg-stone-300 peer-checked:text-stone-800 sm:px-6 sm:py-3.5"
          >
            Make priority
          </label>
        </>
      )}

      <Button type="primary" className="shrink-0">
        Submit changes
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ request, params }) {
  // await updateOrder(params.orderId, { priority: true });
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  if (data.priority === "on") data.priority = true;
  if (data.priority === "off") data.priority = false;
  if (data.address === "") delete data.address;

  await updateOrder(params.orderId, data);

  return null;
}
