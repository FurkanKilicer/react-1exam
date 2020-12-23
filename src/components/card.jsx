import React from "react";
import CardImg from "./CardImg";

function Card(props) {
  const [like, setLike] = React.useState(
    Number(localStorage.getItem(props.id)) || 0
  );

  const clickHandler = event => {
    event.target.name == "artis" ? setLike(like + 1) : setLike(like - 1);
  };

  localStorage.setItem(props.id, like);

  return (
    <div className="col-md-4 mt-5">
      <div className="card shadow-lg">
        <CardImg imgUrl={props.imgUrl} />
        <div className="card-body">
          <p className="card-text">{props.body}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                name="artis"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-info px-3"
              >
                Like
              </button>
              <button
                name="azalis"
                onClick={clickHandler}
                type="button"
                className="btn btn-sm btn-outline-danger px-3"
              >
                Dislike
              </button>
            </div>
            <small className="text-muted">{like} Like</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
