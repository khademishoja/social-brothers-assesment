const Blogcards = (props) => {
  return (
    <div className="card blogCard col-md-5">
      <img
        className="card-img-top"
        src={`https://frontend-case-api.sbdev.nl/storage/${props.img_url}`}
        alt="header"
        style={{ height: "72px" }}
      />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.content}</p>
      </div>
    </div>
  );
};
export default Blogcards;
