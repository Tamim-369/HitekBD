import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const EditImages = ({ getOneProduct }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({});
  const productId = queryParams.get("id");
  const handleChange = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImages([...images, reader.result]);
    };
  };
  useEffect(() => {
    (async () => {
      setProduct(await getOneProduct(productId));
      setImages(product.images);
    })();
  }, [productId]);
  return (
    <div className="min-h-screen  z-10 bg-white p-3 mb-10 flex justify-center items-center flex-col">
      <div className="flex flex-col-reverse justify-center items-center gap-2 w-full mx-auto h-80">
        <div className="flex  w-10/12  justify-center items-center gap-4">
          {images &&
            images.map((image, index) => (
              <div className="image">
                <img
                  src={image}
                  className="w-full rounded-md"
                  alt=""
                  srcset=""
                />
              </div>
            ))}
        </div>
        <div className="image-update-form h-full w-10/12">
          <form>
            <div className="relative my-6 bg-white">
              <input
                id="id-dropzone01"
                name="file-upload"
                type="file"
                className="hidden"
                onChange={handleChange}
              />
              <label
                htmlFor="id-dropzone01"
                className="relative flex flex-col items-center gap-4 px-3 py-6 text-sm font-medium text-center transition-colors border border-dashed rounded cursor-pointer border-slate-300"
              >
                <span className="inline-flex items-center self-center justify-center h-12 px-3 rounded-full bg-slate-100/70 text-slate-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="File input icon"
                    role="graphics-symbol"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                    />
                  </svg>
                </span>
                <span className="text-slate-500">
                  Drag &amp; drop or
                  <span className="text-red-500"> upload a file</span>
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditImages;
