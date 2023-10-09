const ReportModal = () => {
  return (
    <div
      className="modal overlayadd fade"
      id="exampleModalReport"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content modal__playlist">
          <div className="d-flex align-items-center mb-30 justify-content-center">
            <h4>Report Track.</h4>
          </div>
          <div className="modal-body fs-14 d-block fw-400 text-center bodyfont pra title">
            <input
              type="text"
              className="report__track"
              placeholder="Report here..."
            />
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
            <button
              type="submit"
              aria-label="submit button"
              className="btn base2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
