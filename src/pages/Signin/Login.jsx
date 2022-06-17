import React,{useEffect,useState} from "react";
import Navbar from "../../components/Navbar";
import Container from "react-bootstrap/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from "../../components/footer/Footer";

export default function Login() {
  const intialValues ={
    username: "",
    password:""
  }

  const [formValues,setFormValues] =useState(intialValues)
  const [formError,setFormError] =useState({})
  const [isSubmit , setIsSubmit] =useState(false)

  const handleformValues =(e)=>{
    const name = e.target.name
    setFormValues({...formValues , [name] :e.target.value})
    
  }

  const handleSubmit =(e) =>{
    e.preventDefault()
    setFormError(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() =>{
    console.log(formError)
    if(Object.keys(formError).length === 0 && isSubmit ){
      console.log(formValues)
    }
  },[formError])

  

  const validate =(value)=>{
    const error = {}
    const regex =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!value.username){
      error.username = "Username is required"
    }else if(!regex.test(value.username)){
      error.username = "not valid email"
    }
    if(!value.password){
      error.password = "Password is required"
    }else if(value.password < 4){
      error.password = "Password must be more than 4 character"
    }else if(value.password > 10){
      error.password = "Password cannot exceed more than 10 character"
    }

    return error

  }
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
              <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#26B893" }}>
                      Email
                    </Form.Label>
                    <Form.Control
                      type="input"
                      placeholder=" UserName"
                      name="username"
                      value={formValues.username}
                      onChange={handleformValues}
                    />
                  </Form.Group>
                  <div>{formError.username}</div>
                  <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label style={{ color: "#26B893" }}>
                      Kata Sandi
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      name="password"
                      value={formValues.password}
                      onChange={handleformValues}
                    />
                  </Form.Group>
                  <div>{formError.password}</div>
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
