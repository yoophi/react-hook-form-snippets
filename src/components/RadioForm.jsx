import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const onSubmit = (...args) => {
    console.log(args);
  };
  const { register, handleSubmit, reset, formState } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <label htmlFor="" className=" ">
          US Citizen?
        </label>
        <div className="">
          <div className="radio-container">
            <input
              type="radio"
              name="radio"
              value="yes"
              {...register("usCitizen")}
            />
            <label>Yes</label>
          </div>

          <div className="radio-container">
            <input
              type="radio"
              name="radio"
              value="no"
              {...register("usCitizen")}
            />
            <label>No</label>
          </div>
        </div>
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
}
