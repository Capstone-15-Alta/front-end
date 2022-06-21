import React, { useState } from "react";
import imgbanner from "../../assets/icon/Login.png";
import { Link, useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button/Button";

import "./Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([
    {
      label: "Nama Lengkap",
      type: "text",
      placeholder: "Masukkan nama lengkap anda",
      name: "fullname",
      value: "",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Masukan email anda",
      name: "email",
      value: "",
    },
    {
      label: "Kata Sandi",
      type: "password",
      placeholder: "Type your password",
      name: "password",
      value: "",
    },
    {
      label: "Ketik Ulang Sandi",
      type: "password",
      placeholder: "Re-type your password",
      name: "re-password",
      value: "",
    },
  ]);

  // console.log(data);

  const onChangeHandler = (e) => {
    setInputs(
      inputs.map((input) => {
        if (input.name === e.target.name) {
          input.value = e.target.value;
        }
        return input;
      })
    );
    // console.log(inputs[2].value === inputs[3].value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log({
      nama: inputs[0].value,
      nomor: inputs[1].value,
      password: inputs[2].value,
      repassword: inputs[3].value,
    });
  };

  return (
    <>
      <div className="signup-section col-md-12 ">
        <Navigationbar />
        <div
          className="container"
          style={{ minHeight: "70vh", marginTop: "6rem" }}
        >
          <div className="row">
            <div className="konten ">
              <div className="row">
                <div className="col-lg-6 col-md-12 m-auto">
                  {<KontenKiri />}
                </div>
                <div className="col-lg-6 col-md-12 m-auto">
                  <div className="kanan">
                    <h2>Selamat datang silahkan daftar</h2>
                    <p className="halo"> Halo lagi, Anda telah dirindukan!</p>

                    <div className="form-section pt-3">
                      <form onSubmit={handleSubmitForm}>
                        {inputs.map((input, inputIdx) => (
                          <div key={inputIdx} className="konten-form mb-3">
                            <Form
                              changeHandler={onChangeHandler}
                              inputs={input}
                              setInputs={setInputs}
                              submit={handleSubmitForm}
                              // validation={...}
                            />
                          </div>
                        ))}
                        {inputs[2].value === "" ? (
                          <></>
                        ) : inputs[2].value !== inputs[3].value ? (
                          <>
                            <p className="text-danger mb-2">
                              **password tidak sama
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-success mb-2">
                              **password sama{" "}
                            </p>
                          </>
                        )}
                        <Button
                          onClick={handleSubmitForm}
                          title="Daftar"
                          type="submit"
                          className={`submit-regist btn  ${
                            inputs[0].value === "" ||
                            inputs[1].value === "" ||
                            inputs[2].value === "" ||
                            inputs[3].value === ""
                              ? "disabled"
                              : inputs[2].value !== inputs[3].value
                              ? "disabled"
                              : " "
                          }`}
                        />
                      </form>
                      <p style={{ color: "#959AA1" }} className="text-center">
                        sudah punya akun?{" "}
                        <Link style={{ color: "#26B893" }} to="/login">
                          klik disini
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const KontenKiri = () => {
  return (
    <>
      <div className="kiri">
        <img src={imgbanner} />
      </div>
    </>
  );
};

export default Signup;
