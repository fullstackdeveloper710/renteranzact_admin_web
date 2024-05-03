import { useState } from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import LoadingButton from "@mui/lab/LoadingButton";
import { alpha, useTheme } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";

import { useRouter } from "../../routes/hooks";
import { bgGradient } from "../../theme/css";

import Logo from "../../components/logo";
import Iconify from "../../components/iconify";
import { loginCredintials } from "../../utils/appConstants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

export default function LoginView() {
  const theme = useTheme();
  const navigate = useNavigate();
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push("/dashboard");
  };

  /// onsubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      formData.email === loginCredintials.superAdmin.email &&
      formData.password === loginCredintials.superAdmin.password
    ) {
      navigate("/dashboard");
      localStorage.setItem("role", "superAdmin");
    } else if (
      formData.email === loginCredintials.reviewerAdmin.email &&
      formData.password === loginCredintials.reviewerAdmin.password
    ) {
      navigate("/dashboard");
      localStorage.setItem("role", "reviewerAdmin");
    } else if (
      formData.email === loginCredintials.legalAdmin.email &&
      formData.password === loginCredintials.legalAdmin.password
    ) {
      navigate("/dashboard");
      localStorage.setItem("role", "legalAdmin");
    } else if (
      formData.email === loginCredintials.financeAdmin.email &&
      formData.password === loginCredintials.financeAdmin.password
    ) {
      navigate("/dashboard");
      localStorage.setItem("role", "financeAdmin");
    }
  };

  const renderForm = (
    <>
      <form onSubmit={onSubmit}>
        <Stack spacing={3}>
          <TextField
            name="email"
            label="Email address"
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />

          <TextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        {/* <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        sx={{ my: 3 }}
      >
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}
        <div className="loginview_button mt-4">
          <LoadingButton
            style={{ background: "#13556D", color: "#C8D736" }}
            fullWidth
            size="large"
            type="submit"
            className="global-button"
            color="inherit"
            // onClick={handleClick}
          >
            Login
          </LoadingButton>
        </div>
      </form>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.2),
          imgUrl: "/assets/background/property-back.png",
        }),
        height: 1,
      }}
    >
      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <div style={{ textAlign: "center" }}>
            {" "}
            <img alignItems="center" src="./images/logo.png" alt="no logo" />
          </div>

          {/* <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link variant="subtitle2" sx={{ ml: 0.5 }}>
              Get started
            </Link>
          </Typography> */}

          {/* <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:google-fill" color="#DF3E30" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:facebook-fill" color="#1877F2" />
            </Button>

            <Button
              fullWidth
              size="large"
              color="inherit"
              variant="outlined"
              sx={{ borderColor: alpha(theme.palette.grey[500], 0.16) }}
            >
              <Iconify icon="eva:twitter-fill" color="#1C9CEA" />
            </Button>
          </Stack> */}

          <Divider sx={{ my: 3 }}>
            {/* <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography> */}
          </Divider>

          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}
