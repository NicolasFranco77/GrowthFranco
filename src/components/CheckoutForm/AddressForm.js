import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Grid, TextField, Box, Typography } from "@material-ui/core";


const AddressForm = ({ setUser, setSteps }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const onSubmit = (data) => {
    setUser(data);
    setSteps(1);
  };

  const emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Nombre"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              {...register("name")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Apellido"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              {...register("lastname")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
              variant="standard"
              {...register("email", {
                pattern: emailPattern,
              })}
            />
            {errors.email && (
              <Typography color="secondary">Ingrese un email válido</Typography>
            )}
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="emailConfirmation"
              label="Confirmar Email"
              fullWidth
              autoComplete="none"
              variant="standard"
              {...register("emailConfirmation", {
                validate: {
                  emailEqual: (value) =>
                    value === getValues().email ||
                    "Debe ingresar el mismo email",
                },
              })}
            />
            {errors.emailConfirmation && (
              <Typography color="secondary">
                {errors?.emailConfirmation?.message}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              label="Telefono"
              fullWidth
              autoComplete="phone"
              variant="standard"
              {...register("phone")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Dirección"
              fullWidth
              autoComplete="shipping address-line1"
              variant="standard"
              {...register("adress")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="Localidad"
              fullWidth
              autoComplete="shipping address-level2"
              variant="standard"
              {...register("city")}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="state"
              name="state"
              label="Provincia"
              fullWidth
              variant="standard"
              {...register("state")}
            />
          </Grid>
        </Grid>

        <br />

        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              component={Link}
              variant="outlined"
              to="/cart" //back to cart
              sx={{ mt: 3, ml: 1 }}
            >
              Volver
            </Button>

            <Button
              type="submit" //trigger onSubmit
              variant="contained"
              color="primary"
              sx={{ mt: 3, ml: 1 }}
            >
              Listo
            </Button>
          </Box>
        </Grid>
      </form>
    </>
  );
};

export default AddressForm;
