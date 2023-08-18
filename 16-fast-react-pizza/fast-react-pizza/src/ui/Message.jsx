import LinkButton from "./LinkButton";

function Message({ message }) {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">{message}</p>
    </div>
  );
}

export default Message;
