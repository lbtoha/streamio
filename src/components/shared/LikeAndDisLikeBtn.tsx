"use client";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import React, { useState } from "react";

const LikeAndDisLikeBtn = () => {
  const [like, setLike] = useState(true);
  const [disLike, setDisLike] = useState(false);
  return (
    <React.Fragment>
      <button className="cmbtn d-flex gap-2" onClick={() => setLike(!like)}>
        <span>
          <IconThumbUp className={`fs-24 ${like ? "base" : ""}`} />
        </span>
        <span>Like</span>
      </button>
      <button
        className="cmbtn d-flex gap-2"
        onClick={() => setDisLike(!disLike)}
      >
        <span>
          <IconThumbDown className={`fs-24 ${disLike ? "base" : ""}`} />
        </span>
        <span>Dislike</span>
      </button>
    </React.Fragment>
  );
};

export default LikeAndDisLikeBtn;
