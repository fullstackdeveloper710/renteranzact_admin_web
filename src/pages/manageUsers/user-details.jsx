import {
  Box,
  Button,
  Collapse,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Iconify from "../../components/iconify";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import CollapseWithTitle from "../../components/Collapse";
import { Icon } from "@iconify/react/dist/iconify.js";
const UserDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsePersonalInformation, setCollapsePersonalInformation] =
    useState(true);

  const [addressInformationCollapse, setAddressInformationCollapse] =
    useState(true);
  const [employementDetailsCollapse, setEmployementDetailsCollapse] =
    useState(true);
  const [kinDetailsCollapse, setKinDetailsCollapse] = useState(true);
  const [landlordCollapse, setLandlordCollapse] = useState(true);
  return (
    <div className="px-5">
      <div className="d-flex align-items-center gap-4">
        <Icon onClick={() => navigate(-1)} icon="zondicons:arrow-left" cursor={'pointer'} />
        <Typography variant="h4" py={3}>
          User Detail
        </Typography>
      </div>
      <Grid container spacing={4} className="mt-2">
        <Grid item md={12} xs={12}>
          <Grid container spacing={6}>
            <Grid item md={6} xs={12}>
              <Box
                display={"flex"}
                justifyContent={"center"}
                gap={6}
                alignItems={"center"}
                sx={{
                  backgroundImage: "url(/images/header-back.png)",
                  height: 250,
                  backgroundRepeat: "repeat",
                  borderRadius: 2,
                }}
              >
                <Box
                  height={167}
                  width={167}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  border={"1px solid white"}
                >
                  <img
                    src={"/images/user.png"}
                    style={{ height: "155px", width: "155px" }}
                  />
                </Box>
                <div>
                  <div className="d-flex align-items-center  gap-2">
                    <Typography color={"white"} variant="h3">
                      Chidozie
                    </Typography>

                    <img
                      src={"/images/user-verified.png"}
                      style={{ height: 18, width: 62 }}
                    />
                  </div>

                  <Typography
                    color="#C8D736"
                    fontSize={18}
                    fontWeight={"bold"}
                    variant="body1"
                  >
                    {location.state}
                  </Typography>
                </div>
              </Box>
            </Grid>
            <Grid item md={6} xs={12} className="mt-3">
              <div>
                <TextField
                  value={"chidozie@gmail.com"}
                  disabled
                  fullWidth
                  label={"Email"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Button size="medium">Change</Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <TextField
                value={"chidozie@gmail.com"}
                disabled
                className="mt-4"
                fullWidth
                label={"Password"}
                type={"password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button size="medium">Change</Button>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                value={"+234 706 767 9128"}
                disabled
                className="mt-4"
                fullWidth
                label={"Contact Number"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button size="medium">Change</Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className="mt-5">
        <CollapseWithTitle
          title={"Personal Information"}
          open={collapsePersonalInformation}
          setOpen={setCollapsePersonalInformation}
        />
        <Collapse in={collapsePersonalInformation}>
          <Grid container spacing={4} className="mt-2">
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Number of occupant"
                value={"chidozie"}
                disabled
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="grouped-select">
                  Number of occupant
                </InputLabel>
                <Select
                  disabled
                  defaultValue={2}
                  value={2}
                  id="grouped-select"
                  label="Number of occupant"
                >
                  <MenuItem value="2">
                    <em>None</em>
                  </MenuItem>

                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}> 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="grouped-select">Marital status</InputLabel>
                <Select
                  disabled
                  defaultValue={1}
                  value={1}
                  id="grouped-select"
                  label="Marital status"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  <MenuItem value={1}>Unmarried</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={6} xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="grouped-select">Age</InputLabel>
                <Select
                  disabled
                  defaultValue={1}
                  value={1}
                  id="grouped-select"
                  label="Age"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>

                  <MenuItem value={1}>28</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Collapse>
      </div>

      <div className="mt-5">
        <CollapseWithTitle
          title={"Permanent Address"}
          open={addressInformationCollapse}
          setOpen={setAddressInformationCollapse}
        />
        <Collapse in={addressInformationCollapse}>
          <Grid container spacing={4} className="mt-2">
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="House Number/Flat Number"
                value={"12/25"}
                disabled
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Street name"
                value={"Ilassan Lekki"}
                disabled
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="City" value={"Lagos"} disabled />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField fullWidth label="Zipcode" value={"105102"} disabled />
            </Grid>
          </Grid>
        </Collapse>
      </div>
      {location.state === "Renter" && (
        <>
          <div className="mt-5">
            <CollapseWithTitle
              title={"Employement details"}
              open={employementDetailsCollapse}
              setOpen={setEmployementDetailsCollapse}
            />
            <Collapse in={employementDetailsCollapse}>
              <Grid container spacing={4} className="mt-2">
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="grouped-select">
                      Employement status
                    </InputLabel>
                    <Select
                      disabled
                      defaultValue={2}
                      placeholder="Select"
                      value={2}
                      id="grouped-select"
                      label="Employement status"
                    >
                      <MenuItem value="2">
                        <em>None</em>
                      </MenuItem>

                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}> 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Employer's name"
                    placeholder="Enter employer's name"
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    label="Employer's address"
                    placeholder="Enter employer's address"
                    fullWidth
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="grouped-select">Occupation</InputLabel>
                    <Select
                      disabled
                      defaultValue={2}
                      placeholder="Select"
                      value={2}
                      id="grouped-select"
                      label="Occupation"
                    >
                      <MenuItem value="2">
                        <em>None</em>
                      </MenuItem>

                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}> 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Collapse>
          </div>

          <div className="mt-5">
            <CollapseWithTitle
              title={"Kin details"}
              open={kinDetailsCollapse}
              setOpen={setKinDetailsCollapse}
            />

            <Collapse in={kinDetailsCollapse}>
              <Grid container spacing={4} className="mt-2">
                <Grid item md={6}>
                  <TextField fullWidth label="Name" placeholder="Enter name" />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Contact Number"
                    placeholder="Enter contact number"
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    fullWidth
                    label="Email"
                    placeholder="Enter email address"
                  />
                </Grid>
                <Grid item md={6}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="grouped-select">
                      Relationship with Kin
                    </InputLabel>
                    <Select
                      disabled
                      defaultValue={2}
                      placeholder="Select"
                      value={2}
                      id="grouped-select"
                      label="Relationship with Kin"
                    >
                      <MenuItem value="2">
                        <em>None</em>
                      </MenuItem>

                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}> 2</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item md={6}>
                  <TextField
                    placeholder="Select"
                    fullWidth
                    label="Upload govt. id."
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Button    className="global-button" size="small" variant="contained">
                            upload
                          </Button>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            </Collapse>
          </div>

          <div className="mt-5">
            <CollapseWithTitle
              title={"Previous landlord information"}
              open={landlordCollapse}
              setOpen={setLandlordCollapse}
            />

            <Collapse in={landlordCollapse}>
              <Grid container spacing={4} className="mt-2">
                <Grid md={12} item>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="Enter previous landlord's name"
                  />
                </Grid>
                <Grid md={12} item>
                  <TextField
                    fullWidth
                    label="Address"
                    placeholder="Enter previous landlord's address"
                  />
                </Grid>
              </Grid>
            </Collapse>
          </div>
        </>
      )}
      <div className="mt-5">
        <Button
          size="large"
          className="global_button"
          disabled
          variant="contained"
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
