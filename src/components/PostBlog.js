import axios from "axios";
import { useEffect, useState } from "react";
const Postblog = () => {
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };
  const onCategoryChanged = (e) => {
    setCategory(e.target.value);
  };
  const onImageChanged = (e) => {
    setImage(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    debugger;
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("category_id", category);
      formData.append("content", content);
      formData.append("image", image);

      const res = await axios.post(
        "https://frontend-case-api.sbdev.nl/api/posts",
        formData,
        {
          headers: {
            token: `pj11daaQRz7zUIH56B9Z`,
          },
        }
      );
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    async function getCategory() {
      try {
        const res = await axios.get(
          "https://frontend-case-api.sbdev.nl/api/categories",
          {
            headers: {
              token: "pj11daaQRz7zUIH56B9Z",
            },
          }
        );
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getCategory();
  }, []);

  return (
    <div className="bg-white">
      <p
        className="titleForm"
        style={{
          color: "2B2B2B",
          fontFamily: "Inte",
          fontSize: "24px",
          margin: "24px",
        }}
      >
        Plats een blog bericht
      </p>
      <form onSubmit={onSubmit}>
        <label>Berichtnaam</label>
        <input
          style={{ width: "403px" }}
          type="text"
          name="title"
          value={title}
          onChange={onTitleChanged}
          placeholder="Geen titel"
          required
        />

        <label>Categorie</label>
        <select
          style={{ width: "403px" }}
          id="category"
          value={category}
          onChange={onCategoryChanged}
          defaultValue={"Geen categorie"}
          required
        >
          <option value="Geen categorie" disabled>
            Geen categorie
          </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label>Header afbeelding</label>
        <div className="uploadField">
          <svg
            className="cameraIcon"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M5 4h-3v-1h3v1zm10.93 0l.812 1.219c.743 1.115 1.987 1.781 3.328 1.781h1.93v13h-20v-13h3.93c1.341 0 2.585-.666 3.328-1.781l.812-1.219h5.86zm1.07-2h-8l-1.406 2.109c-.371.557-.995.891-1.664.891h-5.93v17h24v-17h-3.93c-.669 0-1.293-.334-1.664-.891l-1.406-2.109zm-11 8c0-.552-.447-1-1-1s-1 .448-1 1 .447 1 1 1 1-.448 1-1zm7 0c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0-2c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5z" />
          </svg>
          <input
            type="file"
            accept=".jpg, .png"
            id="image"
            name="image"
            onChange={onImageChanged}
            hidden
          />
          <label htmlFor="image" className="uploadButton">
            Kies bestand
          </label>
        </div>

        <label>Bericht</label>
        <textarea
          value={content}
          onChange={onContentChanged}
          rows="10"
          required
        />

        <button className="btn1" type="submit">
          Bericht aanmaken
        </button>
      </form>
    </div>
  );
};
export default Postblog;
