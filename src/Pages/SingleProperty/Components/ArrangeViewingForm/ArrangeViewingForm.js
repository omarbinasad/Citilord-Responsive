import React, { useState } from "react";
import "./ArrangeViewingForm.css";
import { useForm } from "react-hook-form";

const ArrangeViewingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    alert("Your viewing time has been set");
  };

  const [renderForm, setRenderForm] = useState(0);

  const nextHandler = (e) => {
    e.preventDefault();
    setRenderForm(1);
  };

  const backHandler = (e) => {
    e.preventDefault();
    setRenderForm(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {renderForm === 0 ? (
          <div className="date-field-viewing">
            <label>Date</label>
            <input
              {...register("date")}
              type="date"
              className="date-field-viewing-field"
            />
            <div className="all-button-viewing-form-container-next">
              <button onClick={nextHandler} className="all-button-viewing-form">
                Next
              </button>
            </div>
          </div>
        ) : renderForm === 1 ? (
          <>
            <label>Perosnal Information</label>
            <div className="perdsonal-info-field-viewing">
              <label>Firstname</label>
              <input
                {...register("firstname")}
                type="text"
                className="date-field-viewing-field"
              />
              <label>Lastname</label>
              <input
                {...register("lastname")}
                type="text"
                className="date-field-viewing-field"
              />
              <label>Email</label>
              <input
                {...register("email")}
                type="text"
                className="date-field-viewing-field"
              />
              <label>Contact Number</label>
              <input
                {...register("contact")}
                type="number"
                className="date-field-viewing-field"
              />
            </div>
            <div className="all-button-viewing-form-container">
              <button onClick={backHandler} className="all-button-viewing-form">
                Back
              </button>
              <button onClick={onSubmit} className="all-button-viewing-form">
                Submit
              </button>
            </div>
          </>
        ) : null}

        {/* {'backgroundColor': status === 'approved' ? 'blue' : status === 'pending' ? 'black' : 'red'} */}
      </form>
    </div>
  );
};

export default ArrangeViewingForm;
