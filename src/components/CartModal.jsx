import "./CartModal.css";

export default function CartModal(props) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1>This is a cart!</h1>
        <button onClick={() => props.setModal(false)}>❌</button>
      </div>
    </div>
  );
}
