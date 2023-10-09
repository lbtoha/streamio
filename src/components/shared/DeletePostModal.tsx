const DeletePostModal = () => {
  return (
    <div
      className="modal overlayadd fade"
      id="exampleModalDelete"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content modal__playlist">
          <div className="d-flex align-items-center mb-30 justify-content-center">
            <h4>Delete Your Post</h4>
          </div>
          <div className="modal-body fs-14 d-block fw-400 text-center bodyfont pra title">
            Are your sure you wnat to delete this post?
          </div>
          <div className="modal-footer mt-40 d-flex gap-2 align-items-center justify-content-center">
            <button
              type="button"
              aria-label="button"
              className="btn white"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" aria-label="button" className="btn base2">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePostModal;
