import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const EditProduct = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const id = query.get("id");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState();

  useEffect(() => {
    // Fetch product data based on the ID when the component mounts
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/single/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const productData = await response.json();
        setFormData(productData);
      } catch (error) {
        console.error("Error fetching product data:", error);
        // Handle error (e.g., display error message, redirect to error page)
      }
    };
    fetchProduct();
  }, [id]);

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
      if (formData.image) formDataToSend.append("image", formData.image);

      const response = await fetch(`/api/products/update/${id}`, {
        method: "PUT",
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
              value={formData.name}
              id="name"
              className="p-3 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
              placeholder="Product Name"
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
              //   value={formData.image}
              id="image"
              className="p-1 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full file:bg-gray-900 file:shadow-lg file:cursor-pointer file:text-white file:border-none file:p-2 file:rounded-md"
              placeholder="Product Image"
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
              value={formData.price}
              id="price"
              className="p-3 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
              placeholder="Product Price"
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
              value={formData.category}
              id="category"
              className="p-3 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
              placeholder="Product Category"
            />
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
            value={formData.description}
            className="p-3 h-32 mt-2 placeholder:font-medium bg-gray-50 border-b-2 focus:outline-none border-gray-900 w-full"
            placeholder="Product description"
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

export default EditProduct;
