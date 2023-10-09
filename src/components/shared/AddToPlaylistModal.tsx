const AddToPlaylistModal = () => {
  return (
    <div className="modal fade" id="exampleModalAddPlayList" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content modal__playlist">
          <div className="d-flex align-items-center mb-30 justify-content-between">
            <h4>Select Playlist</h4>
            <span className="new">New</span>
          </div>
          <div className="modal-body fs-16 d-block fw-500 text-center bodyfont pra title">
            No playlists found
          </div>
          <div className="modal-footer mt-40 d-flex gap-2 align-items-center justify-content-center">
            <button
              type="button"
              aria-label="button button"
              className="btn white"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" aria-label="button" className="btn base2">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToPlaylistModal;
