const Blogcards = (props) => {
  const date = new Date(props.createdAt);

  return (
    <div className="card blogCard col-md-5 overflow-hidden shadow bg-white gy-5">
      <header className="blogpostHeader  ">
        <img
          className="card-img-top"
          src={`https://frontend-case-api.sbdev.nl/storage/${props.img_url}`}
          alt="header"
        />
        <p>
          {date.getDay()}-{date.getMonth()}-{date.getFullYear()}
        </p>
        <p>{props.category}</p>
      </header>

      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-text">{props.content}</p>
      </div>
    </div>
  );
};
export default Blogcards;
