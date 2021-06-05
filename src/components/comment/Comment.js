import moment from "moment";
import React from "react";
import "./_comment.scss";

const Comment = () => {
  return (
    <div className="comment p-2 d-flex">
      <img
        src="https://www.seoclerk.com/pics/319222-1IvI0s1421931178.png"
        alt=""
        className="rounded-circle mr-3"
      />
      <div className="comment_body">
        <p className="comment_header mb-1">
          Avinash Malviya • {moment("2020-05-05").fromNow()}
        </p>
        <p className="mb-0">Nice Video DUDE!!!</p>
      </div>
    </div>
  );
};

export default Comment;
