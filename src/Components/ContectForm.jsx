import React from "react";
import "./ContectForm.css";

const ContectForm = () => {
  return (
    <>
      <form className="container mb-2 form-back">
        <div className="form-group">
          <label for="exampleFormControlInput1 text-light">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlSelect1 text-light"> Select Role</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>Student</option>
            <option>Parent</option>
            <option>Placement</option>
            <option>Staff</option>
            <option>Faculity</option>
          </select>
        </div>
        {/* <div className="form-group">
          <label for="exampleFormControlSelect2">Example multiple select</label>
          <select
            multiple
            className="form-control"
            id="exampleFormControlSelect2"
          >
            <option>Suggestion</option>
            <option>Complaint</option>
          </select>
        </div> */}
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Example textarea</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <div class="d-grid gap-2 mt-4">
          <button class="btn btn-primary" type="button">
            Button
          </button>
        </div>
      </form>
    </>
  );
};

export default ContectForm;
