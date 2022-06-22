import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import axios from "axios";
import { submitLogin } from "../../store/Login";
import fgdApi from "../../api/fgdApi";

export default function Login() {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.login);

  console.log(token);

  const navigate = useNavigate();

  const [inputs, setInputs] = useState([
    {
      label: "Username",
      type: "text",
      placeholder: "Masukkan username",
      name: "username",
      value: "",
    },
    {
      label: "Kata Sandi",
      type: "password",
      placeholder: "Type your password",
      name: "password",
      value: "",
    },
  ]);

  const onChangeHandler = (e) => {
    setInputs(
      inputs.map((input) => {
        if (input.name === e.target.name) {
          input.value = e.target.value;
        }
        return input;
      })
    );
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    // const res = await axios.post("http://34.87.175.218/api/v1/auth/login", {
    //   username: inputs[0].value,
    //   password: inputs[1].value,
    // });

    const getLogin = async () => {
      let res = null;

      const params = {
        username: inputs[0].value,
        password: inputs[1].value,
      };
      res = await fgdApi.login(params);
      console.log(res.data);
    };
    getLogin();
  };

  return (
    <>
      <Navbar />
      <Container>
        <Grid container minHeight="70vh" alignItems="center" marginTop="6rem">
          <Grid item xs={12} md={6}>
            <img src="/assets/icon/Login.png" alt="loginImage" />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box pl="1vw">
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "#26B893",
                  fontSize: "28px",
                  width: "327px",
                  fontWeight: "600",
                }}
              >
                Halo! Selamat datang kembali!
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: "#ABABAB",
                  width: "327px",
                  fontWeight: "400",
                }}
              >
                Halo lagi, Anda telah dirindukan!
              </Typography>
              <Box pt="1vw">
                <Form onSubmit={handleSubmitForm}>
                  {inputs.map((input, inputIdx) => (
                    <Form.Group
                      key={inputIdx}
                      className="mb-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Label style={{ color: "#26B893" }}>
                        {input.label}
                      </Form.Label>
                      <Form.Control
                        onChange={onChangeHandler}
                        value={input.value}
                        name={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        autoComplete="on"
                      />
                    </Form.Group>
                  ))}

                  <a
                    href="/lupa-password"
                    style={{ textDecoration: "none", color: "#26B893" }}
                  >
                    Lupa password ?
                  </a>
                  <div className="d-grid gap-2 mt-3">
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#26B893" }}
                    >
                      Masuk
                    </Button>
                  </div>
                  <center>
                    <p style={{ color: "#959AA1" }}>
                      Belum punya akun ?{" "}
                      <Link style={{ color: "#26B893" }} to="/register">
                        Daftar
                      </Link>
                    </p>
                  </center>
                </Form>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
