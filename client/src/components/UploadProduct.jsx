import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UploadProduct = () => {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState();
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
    const imgFile = event.target.files[0];
    setImage(imgFile); // Set the image state
    setFormData((prevData) => ({
      ...prevData,
      image: imgFile, // Set the image property to the file object
    }));
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
      formDataToSend.append("image", image); // Use the image state directly

      const response = await fetch("/api/products/create", {
        method: "POST",
        body: formDataToSend, // Send form data with image file
      });

      if (!response.ok) {
        console.log(response);
        setLoading(false);
      }

      const data = await response.json();
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
        <div className="flex w-full md:flex-row flex-col md:gap-4">
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
          <div className="w-full mb-3 ">
            <label
              htmlFor="image"
              className="text-xl font-medium text-gray-900 "
            >
              Enter Product Image
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageChange}
              id="image"
              className="p-1 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full file:bg-gray-900 file:shadow-lg file:cursor-pointer file:text-white file:border-none file:p-2 file:rounded-md"
              placeholder="Product Image"
              required
            />
          </div>
        </div>
        <div className="flex w-full md:flex-row flex-col md:gap-4">
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
