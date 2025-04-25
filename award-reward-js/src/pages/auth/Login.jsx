import { Button, Box, Grid, TextField, InputAdornment, IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styles from "../module/Dashboard/style.module.css"
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const schema = yup
    .object({
        username: yup.string().required("Username is required"),
        password: yup
            .string()
            .required("Password is required")
            .min(8, "The Passowrd must be minimum 8 character ")
    })
    .required();

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        mode: "onSubmit",
        defaultValues: {
            username: "",
            password: ""
        },
    });
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    const onSubmitFunc = async (formData) => {
        try {
            await schema.validate(formData);
            localStorage.setItem('authToken', "This is user is authorized")
            navigate("/dashboard");

        } catch (error) {
            toast.error("Login failed. Please re-check your credentials.");
        }
    };

    return (
        <Grid className={styles.center} sx={{ height: "100vh" }}>
            <form onSubmit={handleSubmit(onSubmitFunc)}>
                <Grid
                    container
                    className="box"
                    flexDirection={"column"}
                    sx={{ width: "400px" }}
                >
                    <div className={styles.center} style={{ marginBottom: "20px" }}>
                        {" "}
                        <h2>Login</h2>
                    </div>

                    <TextField
                        label="Mobile"
                        id="standard-basic"
                        size="small"
                        variant="outlined"
                        {...register("username")}
                        error={!!errors.username}
                        helperText={errors?.username ? errors?.username.message : null}
                    />

                    <TextField
                        type={showPassword ? "text" : "password"}
                        label="Password"
                        size="small"
                        id="standard-basic"
                        variant="outlined"
                        {...register("password")}
                        error={!!errors.password}
                        sx={{ marginTop: 2 }}
                        helperText={errors?.password ? errors?.password.message : null}
                        slotProps=
                        {{
                            input: {
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            },
                        }}

                    />

                    <Box>
                        <Button
                            variant="contained"
                            type="submit"
                            fullWidth
                            sx={{ marginTop: 2 }}
                        >
                            Login
                        </Button>
                    </Box>
                </Grid>
            </form>
        </Grid>
    );
};

export default Login;