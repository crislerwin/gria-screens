/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  makeStyles,
  Container,
  CssBaseline,
  Button,
  CardMedia,
  TextField,
  CardContent,
  Box,
  Typography,
  Paper,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import register from "../../assets/register.png";
import logo from "../../assets/logo.png";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    background: "#fdfcff",
    minHeight: "100vh",
    flexDirection: "column",
  },

  header: {
    display: "flex",
    maxWidth: "1366px",
    alignItems: "center",
    paddingTop: "52px",
    paddindLeft: "52px",
  },
  container: {
    display: "flex",
    width: "100%",
    margin: "auto",
    maxWidth: "1136px",
    alignItems: "center",
    justifyContent: "space-between",
  },
  img: {
    width: "373px",
    maxWidth: "373px",
    minWidth: "373px",
    marginRight: "120px",
    "@media (max-width:1280px)": {
      display: "none",
    },
  },
  paper: {
    backgroundColor: "#f5f0fd",
    borderRadius: "30px",
    "@media (max-width: 959.95px)": {
      boxShadow: "0 0 0 #5850ec !important",
      marginTop: 0,
    },
  },
  cardContent: {
    display: "flex",
    maxWidth: "557px",
    minWidth: "557px",
    maxHeight: "666",
    minHeight: "666",
    padding: "60px",
    flexDirection: "column",
    "@media (max-width:800px)": {
      paddingTop: "62px",
    },
  },
  title: {
    marginTop: "58px",
  },

  h1: {
    color: "#5914DF",
    fontSize: "20px",
    fontWeight: 600,
    lineHeight: "20px",
    letterSpacing: "-0.06px",
    textTransform: "capitalize",
  },
  p: {
    fontSize: "12px",
    fontWeight: "normal",
    lineHeight: "24px",
    letterSpacing: "0.1px",
  },
  logo: {
    width: "96px",
    height: "69px",
    maxHeight: "100%",
  },

  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  formContainer: {
    "@media(min-width: 600px": {
      marginRight: 0,
      margin: "30px",
    },
  },
  boxspaced: {
    flexGrow: 1,
    display: "block",
  },
  form: {
    width: "100%",
  },
  submit: {
    padding: "10px",
    "@media(min-width: 600px": {
      marginTop: "44px",
    },
  },
  register: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px",
  },
}));
export default function UserForm() {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <Container maxWidth="lg" className={classes.header}>
          <Button variant="text" size="small" style={{ color: "#9B51E0" }}>
            <ArrowBackIcon /> <p>Retornar</p>
          </Button>
        </Container>
        <Container maxWidth="lg" className={classes.container}>
          <CardMedia className="MuiCardMedia-media MuiCardMedia-img">
            <img className={classes.img} src={register} />
          </CardMedia>
          <Paper className={classes.paper} variant="elevation">
            <CardContent className={classes.cardContent}>
              <Box className={classes.box}>
                <Box className={classes.title} styles={{ minHeight: 80 }}>
                  <Typography variant="h1" className={classes.h1}>
                    Cadastrar Candidato
                  </Typography>
                  <Typography variant="h2" className={classes.p}>
                    Cadastre-se e encontre oportunidades que deseja
                  </Typography>
                </Box>
                <div className={classes.logo}>
                  <img src={logo}></img>
                </div>
              </Box>
              <Box className={classes.formContainer}>
                <Box className={classes.boxspaced}>
                  <form noValidate className={classes.form}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="CPF"
                      label="CPF"
                      id="CPF"
                      autoFocus="false"
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="E-mail"
                      label="E-mail"
                      id="Email"
                      autoFocus="false"
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Senha"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      autoFocus="false"
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      fullWidth
                      name="password"
                      label="Confirmar Senha"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      autoFocus="false"
                    />
                  </form>
                </Box>
                <Box className={classes.submit}>
                  <Button
                    margin="normal"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    CADASTRAR
                  </Button>

                  <Button
                    type="submit"
                    fullWidth
                    variant="text"
                    color="primary"
                    className={classes.register}
                  >
                    JÁ POSSUI CADASTRO? FAÇA O LOGIN AQUI
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Paper>
        </Container>
      </div>
    </>
  );
}
