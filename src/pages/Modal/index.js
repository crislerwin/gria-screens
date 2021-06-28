import React from "react";
import info from "../../assets/info.png";

import {
  makeStyles,
  Card,
  Box,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "30vh",
  },
  card: {
    maxWidth: 400,
    borderRadius: 10,
  },
  image: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    margin: "4vh",
  },
  h1: {
    fontSize: 18,
    fontWeight: 600,
    margin: 12,
  },
  h2: {
    fontSize: 13,
    fontWeight: 400,
  },
  buttonContainer: {
    flex: 1,
  },
  button: {
    background: "#1071E6",
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <>
      <Box className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Box className={classes.image}>
              <img src={info} alt="info" />
            </Box>
            <Box className={classes.text}>
              <Typography variant="h1" className={classes.h1}>
                Cadastro Realizado com Sucesso!
              </Typography>
              <Typography variant="p" className={classes.h2}>
                O link de confirmação foi enviado para o e-mail cr***@gmail.com
              </Typography>
            </Box>
            <Box className={classes.buttonContainer}>
              <Button
                size="normal"
                variant="contained"
                fullWidth
                color="primary"
                className={classes.button}
              >
                Fechar
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
