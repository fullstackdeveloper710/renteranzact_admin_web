import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Chip,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Iconify from "../../components/iconify";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ViewProperty = () => {
  return (
    <Grid container spacing={4}>
      <Grid md={3} item>
        <Box
          className="d-flex justify-content-center align-items-center flex-column mt-2"
          sx={{ backgroundColor: "grey", py: 1, height: 300 }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <div className="mt-2 text-center">
            <Typography variant="body1">Samuel Rodge</Typography>
            <Typography variant="body2">Landlord</Typography>
            <Typography variant="body2">
              Midnight Corner St.Suite 600 San
            </Typography>
            <Typography variant="body2">Fransisco,CADGE 94107</Typography>
          </div>

          <Box
            className="text-center mt-3"
            sx={{
              borderRadius: 20,
              backgroundColor: "blue",
              color: "white",
              px: 4,
            }}
          >
            <Iconify icon="material-symbols:call" /> +915685965874
          </Box>
        </Box>

        <div className="mt-4">
          <Typography variant="h4">Property Location</Typography>

          <img
            className="mt-2"
            src={"/assets/map.jpg"}
            style={{ width: "100%" }}
          />
        </div>

        <div className="mt-4">
          <Typography variant="h4">Review & Rating</Typography>
          <Card>
            <div className="d-flex  align-items-center mt-2 gap-2">
              <img
                style={{ borderRadius: 10, height: 70, width: 70 }}
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
              <div>
                <b>James Humbly</b>
                <Typography variant="body2">
                  2 June 2018 - 4 June 2019
                </Typography>
                <Rating
                  style={{ color: "#212B36" }}
                  name="read-only"
                  value={3}
                  readOnly
                />
              </div>
            </div>
            <div className="d-flex  align-items-center mt-3 gap-2">
              <img
                style={{ borderRadius: 10, height: 70, width: 70 }}
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
              <div>
                <b>James Humbly</b>
                <Typography variant="body2">
                  2 June 2018 - 4 June 2019
                </Typography>
                <Rating
                  style={{ color: "#212B36" }}
                  name="read-only"
                  value={3}
                  readOnly
                />
              </div>
            </div>
            <div className="d-flex  align-items-center mt-3 gap-2">
              <img
                style={{ borderRadius: 10, height: 70, width: 70 }}
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
              <div>
                <b>James Humbly</b>
                <Typography variant="body2">
                  2 June 2018 - 4 June 2019
                </Typography>
                <Rating
                  style={{ color: "#212B36" }}
                  name="read-only"
                  value={3}
                  readOnly
                />
              </div>
            </div>
          </Card>
        </div>
      </Grid>
      <Grid md={9} item>
        <Box>
          <Slider autoplay dots>
            <div>
              <img
                style={{ height: 350, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 350, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
          </Slider>
        </Box>
        <Box className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <Typography variant="body2">
              2 Bedrooms Independent Apartment
            </Typography>
            <Typography variant="h5">98 8b Alexander Court,London</Typography>
          </div>
          <div>
            <Typography variant="body2">Rent</Typography>
            <Typography variant="h5">NGN 5000/Month</Typography>
          </div>
        </Box>
        <div className="d-flex mt-2">
          <Iconify icon="mdi:location" />
          <Typography variant="body2">43 Corbet , London 124232</Typography>
        </div>

        <div className="mt-2 d-flex gap-3">
          <Chip label="2 Bedroom" variant="outlined" />
          <Chip label="Semi Furnished" variant="outlined" />
          <Chip label="Servicable" variant="outlined" />
        </div>

        <div className="mt-4">
          <Typography variant="h4">Description</Typography>
          <p>
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="slider-container mt-2">
          <Slider
            arrows
            infinite={true}
            speed={500}
            slidesToShow={4}
            nextArrow={<Iconify icon="oui:arrow-right" />}
            prevArrow={<Iconify icon="oui:arrow-left" />}
            autoplay
            slidesToScroll={3}
            a
          >
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
            <div>
              <img
                style={{ height: 200, width: "100%" }}
                src="https://miro.medium.com/v2/resize:fit:1400/1*5SqWT_rosWcElLsi1nfT0A.png"
              />
            </div>
          </Slider>
        </div>

        <div className="mt-3">
          <Typography variant="h4">Property Amenities</Typography>
          <Grid container>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Power Backup</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Lift</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Security</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Visitor Parking</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Rain Water harvesting</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Resevered Parking</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Water Storage</span>
              </div>
            </Grid>
            <Grid item md={4}>
              <div>
                <Checkbox defaultChecked />
                <span>Swimming pool</span>
              </div>
            </Grid>
            <Grid item md={4}></Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default ViewProperty;
