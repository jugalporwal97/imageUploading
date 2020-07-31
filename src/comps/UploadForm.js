import React, {useState} from "react";
import ProgressBar from "../comps/ProgressBar";
const UploadForm = () => {
  const [file, setFile] = useState(null);
  const types = ["image/png", "image/jpeg", "image/jpg", "image/gif"];
  const [error, setError] = useState("");
  const handleChange = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please Select an image file (png, gif, jpeg)");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};
export default UploadForm;
