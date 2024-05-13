import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadProduct = () => {
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    event.preventDefault();
    const imageFiles = Array.from(event.target.files);
    setImages(imageFiles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("discount", formData.discount);

      // Append all image URLs to the same key
      images.forEach((image) => {
        formDataToSend.append("images", image);
      });

      const response = await fetch("/api/products/create", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        console.log(response);
        setLoading(false);
        return;
      }

      const data = await response.json();
      console.log(data);
      setLoading(false);
      navigate(`/product?id=${data._id}`);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-11/12 mx-auto mt-24 mb-10">
      <h1 className="text-2xl font-semibold">Upload Product</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col justify-center items-center gap-2 mt-3"
      >
        <div className="grid w-full  sm:grid-cols-2 grid-cols-1 gap-4 flex-col md:gap-4">
          <div className="w-full mb-3 ">
            <label
              htmlFor="name"
              className="text-xl font-medium text-gray-900 "
            >
              Enter Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              id="name"
              className="p-3 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
              placeholder="Product Name"
              required
            />
          </div>
          <div className="w-full mb-3">
            <label
              htmlFor="price"
              className="text-xl font-medium text-gray-900 "
            >
              Enter Price
            </label>
            <input
              type="number"
              name="price"
              onChange={handleChange}
              id="price"
              className="p-3 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
              placeholder="Product Price"
              required
            />
          </div>

          <div className="w-full mb-3">
            <label
              htmlFor="category"
              className="text-xl font-medium text-gray-900 "
            >
              Enter Category
            </label>
            <input
              type="text"
              name="category"
              onChange={handleChange}
              id="category"
              className="p-3 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
              placeholder="Product Category"
              required
            />
          </div>
          <div className="w-full mb-3">
            <label
              htmlFor="discount"
              className="text-xl font-medium text-gray-900 "
            >
              Enter discount
            </label>
            <input
              type="number"
              name="discount"
              onChange={handleChange}
              id="discount"
              className="p-3 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
              placeholder="Product discount"
              required
            />
          </div>
        </div>
        <div className="flex w-full flex-col md:gap-4">
          <div className="relative my-6 bg-white border-b-2 border-gray-800">
            <input
              id="id-dropzone01"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageChange}
              multiple
              className="hidden"
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
                <span className="text-emerald-500">
                  {" "}
                  upload all product images
                </span>
              </span>
            </label>
          </div>
        </div>
        <div className="w-full mb-3">
          <label
            htmlFor="description"
            className="text-xl font-medium text-gray-900 "
          >
            Enter Description
          </label>
          <textarea
            name="description"
            id="description"
            onChange={handleChange}
            className="p-3 h-32 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
            placeholder="Product description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gray-950 text-white p-3  rounded-lg"
          disabled={loading}
        >
          Upload Product {loading && "Loading..."}
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
