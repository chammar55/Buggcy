import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import OrderForm from "../OrderForm/OrderForm";
import * as Yup from "yup";
import useSWR from "swr";

function ProductModel({ handleClickOutsideModal, selectedProductId }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { data, error } = useSWR(`products/${selectedProductId}`);

  console.log(data);

  // Initial form values
  const initialValues = {
    ProductTitle: "",
    price: "",
    Description: "",
    ImageUrl: "",
  };
  // Validation schema
  const validationSchema = Yup.object({
    ProductTitle: Yup.string().required("Product Title is required"),
    price: Yup.string().required("Price is required"),
    Description: Yup.string().required("Description number is required"),
    ImageUrl: Yup.string().required("ImageUrl is required"),
  });
  const handleSubmit = (values) => {
    // Handle form submission
    console.log("Form Values:", values);
    setIsModalOpen(true);

    // Example: Send values to a server or update application state
  };

  return (
    <div>
      {isModalOpen && (
        <div
          id="modal-background"
          className=" fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  z-10"
          onClick={handleClickOutsideModal}
        >
          <div className="bg-white p-2 md:p-6 rounded shadow-lg max-w-xl  mx-auto w-full h-auto ">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values }) => (
                <Form>
                  <div className="mb-5">
                    <h1 className="font-bold text-3xl">
                      Update Product {selectedProductId}
                    </h1>
                  </div>
                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="ProductTitle"
                      className="  block text-gray-700 max-sm:text-[12px] md:text-lg"
                    >
                      Product Title
                    </label>
                    <Field
                      name="ProductTitle"
                      type="text"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="ProductTitle"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="price"
                      className="block text-gray-700 max-sm:text-[12px] md:text-lg"
                    >
                      Price
                    </label>
                    <Field
                      name="price"
                      type="number"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="price"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="Description"
                      className="max-sm:text-[12px] md:text-lg block text-gray-700"
                    >
                      Description
                    </label>
                    <Field
                      name="Description"
                      type="text"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="Description"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="mb-4 flex-1">
                    <label
                      htmlFor="ImageUrl"
                      className="max-sm:text-[12px] md:text-lg block text-gray-700"
                    >
                      Image URL
                    </label>
                    <Field
                      name="ImageUrl"
                      type="text"
                      className="w-full px-3 py-2 border rounded"
                    />
                    <ErrorMessage
                      name="ImageUrl"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded max-sm:text-[14px] md:text-lg"
                  >
                    Update
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductModel;
