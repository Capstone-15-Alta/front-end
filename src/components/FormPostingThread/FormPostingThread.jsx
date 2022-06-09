import React from "react";

import "./FormPostingThread.scss";

const FormPostingThread = () => {
  return (
    <div className="container">
      <div className="row form-posting-thread justify-content-center">
        <div className="col-md-8">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Isi Judul Thread Disini"
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Apa Yang Ingin Anda DIskusikan ?"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPostingThread;
