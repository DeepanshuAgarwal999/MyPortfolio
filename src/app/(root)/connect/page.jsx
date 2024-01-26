"use client";

import { useState } from "react";

export default function ConnectPage() {
  const [values, setValue] = useState({
    name: "",
    email: "",
    message: "",
    file: undefined,
  });
  const handleChange = (e) => {
    if (e.target.files) {
      setValue({
        ...values,
        file: e.target.files[0],
      });
    } else {
      setValue({
        ...values,
        [e.target.name]: e.target.value,
      });
    }
  };
  return (
    <form method="POST" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-12 pt-36 px-10">
        <div className="border-b border-white/10 pb-12">
          <h2 className="font-semibold leading-7 py-4 text-blue-400 text-3xl">
            Connect With Me
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-400">
            Thanks For showing Interest !
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-lg font-medium leading-6 text-white"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 ">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={values.name}
                    autoComplete="username"
                    className="flex-1 border-0 bg-transparent p-3 text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Your name"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className=" col-span-full">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium leading-6 text-white"
                >
                  Email address
                </label>
                <div className="mt-2 flex">
                  <input
                    id="email"
                    value={values.email}
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 p-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block font-medium leading-6 text-white text-lg"
              >
                Message
              </label>
              <div className="mt-2">
                <textarea
                  id="message"
                  value={values.message}
                  name="message"
                  rows={3}
                  onChange={(e) => handleChange(e)}
                  className="block resize-none w-full rounded-md border-0 bg-white/5 p-3 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Describe in brief if possible.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-lg font-medium leading-6 text-white"
              >
                Image
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file"
                        type="file"
                        className="sr-only"
                        onChange={(e) => handleChange(e)}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-400">
                    PDF, PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6 border-b border-white/10 pb-12 px-8">
        <button
          type="button"
          className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          Save
        </button>
      </div>
    </form>
  );
}
