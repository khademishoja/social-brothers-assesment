const Blogcards = (props) => {
  return (
    <div className="newsitem">
      <header className="bitmap">
        <img
          className="imgPost"
          src={`https://frontend-case-api.sbdev.nl/storage/${props.img_url}`}
          alt="header"
        />

        <p className="tech">{props.category}</p>
      </header>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.content} </p>
      </div>
    </div>
  );
};
export default Blogcards;
