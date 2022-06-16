import React from "react";
import Navbar from "../../components/navbar";
import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../components/footer/Footer";

export default function Login() {
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
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#26B893" }}>
                      Nomor Handphone
                    </Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="+62 | Masukan Nomor Handphone"
                    />
                  </Form.Group>

                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label style={{ color: "#26B893" }}>
                      Kata Sandi
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    />
                  </Form.Group>
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
                      <a style={{ color: "#26B893" }} href="/register">
                        Daftar
                      </a>
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
