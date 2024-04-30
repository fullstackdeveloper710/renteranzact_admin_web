import { faker } from "@faker-js/faker";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Iconify from "../../../components/iconify";
import AppTasks from "../app-tasks";
import AppNewsUpdate from "../app-news-update";
import AppOrderTimeline from "../app-order-timeline";
import AppCurrentVisits from "../app-current-visits";
import AppWebsiteVisits from "../app-website-visits";
import AppWidgetSummary from "../app-widget-summary";
import AppTrafficBySite from "../app-traffic-by-site";
import AppCurrentSubject from "../app-current-subject";
import AppConversionRates from "../app-conversion-rates";
import {
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
// ----------------------------------------------------------------------
export default function AppView() {
  const [barchartState] = useState({
    series: [
      {
        name: "Inflation",
        data: [2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
          columnWidth: "20%",
        },
      },
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "Caution Fee",
          "Rent Fee",
          "Legal Fee",
          "Service Charge",
          "Agency Fee",
          "Transaction Fee",
        ],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      title: {
        text: "",
        floating: false,
        offsetY: 100,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });

  const [onboardingChatState] = useState({
    series: [
      {
        name: "Renter",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 87],
      },
      {
        name: "Property Manager",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 90],
      },
      {
        name: "Landlord",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 49],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "JAN-23",
          "FEB-23",
          "MAR-23",
          "APR-23",
          "MAY-23",
          "JUN-23",
          "JUL-23",
          "AUG-23",
          "SEP-23",
          "OCT-23",
        ],
      },
      yaxis: {
        title: {
          // text: "$ (thousands)",
        },

        show: false,
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  const [donutChartState] = useState({
    series: [44, 55, 13],
    options: {
      chart: {
        width: 380,
        height: 400,
        type: "pie",
      },
      labels: ["Total Renter", "Property Manager", "Landlord"],
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  const [revenueChartState] = useState({
    series: [
      {
        name: "Inflation",
        data: [
          1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000,
          12000, 13000,
        ],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "bar",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: "top", // top, center, bottom
          },
          columnWidth: "20%",
        },
      },
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      xaxis: {
        categories: [
          "1-Nov",
          "3-Nov",
          "5-Nov",
          "7-Nov",
          "9-Nov",
          "11-Nov",
          "13-Nov",
          "15-Nov",
          "17-Nov",
          "19-Nov",
          "21-Nov",
          "23-Nov",
          "25-Nov",
        ],
        position: "bottom",
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            },
          },
        },
        tooltip: {
          enabled: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: true,
        },
      },
      title: {
        text: "",
        floating: false,
        offsetY: 100,
        align: "center",
        style: {
          color: "#444",
        },
      },
    },
  });
  const [payoutChartState] = useState({
    series: [
      {
        name: "sales",
        data: [
          {
            x: "January",
            y: 15000,
          },
          {
            x: "February",
            y: 124000,
          },
          {
            x: "March",
            y: 135000,
          },
          {
            x: "April",
            y: 187000,
          },
          {
            x: "May",
            y: 142000,
          },
          {
            x: "June",
            y: 176000,
          },
          {
            x: "July",
            y: 145000,
          },
          {
            x: "August",
            y: 198000,
          },
          {
            x: "September",
            y: 135000,
          },
          {
            x: "October",
            y: 187000,
          },
          {
            x: "November",
            y: 167000,
          },
          {
            x: "December",
            y: 156000,
          },
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 400,
        toolbar : {
          show : false
        },
       
      },
      plotOptions: {
        bar: {
       
          columnWidth: "20%",
          endingShape: "rounded",
        },
      },
      xaxis: {
        type: "category",
        labels: {
          // formatter: function (val) {
          //   return "Q" + dayjs(val).quarter();
          // },
        },
        group: {
          style: {
            fontSize: "10px",
            fontWeight: 700,
          },
          
        },
      },
      title: {
        // text: "Grouped Labels on the X-axis",
      },
      tooltip: {
        x: {
          // formatter: function (val) {
          //   return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY");
          // },
        },
      },
    },
  });
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <div className="d-flex justify-content-around align-items-center flex-column py-3">
              <Typography className="text-center" variant="h5">
                Top Listed{<br />} Properties
              </Typography>
              <Typography className="mt-3" variant="h2">
                100
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <div className="d-flex justify-content-around align-items-center flex-column py-3">
              <Typography className="text-center" variant="h5">
                Properties {<br />} on Rent
              </Typography>
              <Typography className="mt-3" variant="h2">
                80
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <div className="d-flex justify-content-around align-items-center flex-column py-3">
              <Typography className="text-center" variant="h5">
                Vacant {<br />} Properties
              </Typography>
              <Typography className="mt-3" variant="h2">
                20
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <div className="d-flex justify-content-around align-items-center flex-column py-3">
              <Typography className="text-center" variant="h5">
                Registered {<br />} Renters
              </Typography>
              <Typography className="mt-3" variant="h2">
                100
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <div className="d-flex justify-content-around align-items-center flex-column py-3">
              <Typography className="text-center" variant="h5">
                Registered {<br />} Landlords
              </Typography>
              <Typography className="mt-3" variant="h2">
                80
              </Typography>
            </div>
          </Card>
        </Grid>
        <Grid xs={12} sm={6} md={4}>
          <Card>
            <div className="d-flex justify-content-around align-items-center flex-column py-3">
              <Typography className="text-center" variant="h5">
                Registered {<br />} Property Managers
              </Typography>
              <Typography className="mt-3" variant="h2">
                80
              </Typography>
            </div>
          </Card>
        </Grid>

        {/* <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Weekly Sales"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Item Orders"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <AppWidgetSummary
            title="Bug Reports"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Website Visits"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Current Visits"
            chart={{
              series: [
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Conversion Rates"
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentSubject
            title="Current Subject"
            chart={{
              categories: ['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math'],
              series: [
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="News Update"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                '1983, orders, $4220',
                '12 Invoices have been paid',
                'Order #37745 from September',
                'New order placed #XF-2356',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppTrafficBySite
            title="Traffic by Site"
            list={[
              {
                name: 'FaceBook',
                value: 323234,
                icon: <Iconify icon="eva:facebook-fill" color="#1877F2" width={32} />,
              },
              {
                name: 'Google',
                value: 341212,
                icon: <Iconify icon="eva:google-fill" color="#DF3E30" width={32} />,
              },
              {
                name: 'Linkedin',
                value: 411213,
                icon: <Iconify icon="eva:linkedin-fill" color="#006097" width={32} />,
              },
              {
                name: 'Twitter',
                value: 443232,
                icon: <Iconify icon="eva:twitter-fill" color="#1C9CEA" width={32} />,
              },
            ]}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Create FireStone Logo' },
              { id: '2', name: 'Add SCSS and JS files if required' },
              { id: '3', name: 'Stakeholder Meeting' },
              { id: '4', name: 'Scoping & Estimations' },
              { id: '5', name: 'Sprint Showcase' },
            ]}
          />
        </Grid> */}
      </Grid>
      <Grid className={"mt-4"} container spacing={4}>
        <Grid item md={2}>
          <Typography variant="h5">Financial Performance</Typography>
        </Grid>
        <Grid item md={3}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value="Monthly"
              id="demo-simple-select"
            >
              <MenuItem value={"Monthly"}>Monthly</MenuItem>
              <MenuItem value={"Weekly"}>Weekly</MenuItem>
              <MenuItem value={"Yearly"}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value="December"
              id="demo-simple-select"
            >
              <MenuItem value={"December"}>December</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={3}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker className="mb-2" label="From Date" />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
        <Grid item md={2}>
          <Button size="large" variant="contained" fullWidth>
            Filter
          </Button>
        </Grid>

        <Grid item md={12}>
          <ReactApexChart
            type="bar"
            height={400}
            options={barchartState.options}
            series={barchartState.series}
          />
        </Grid>

        <Grid item md={8}>
          <Typography variant="h4" className="text-center">
            Monthly User Onboarding
          </Typography>
          <ReactApexChart
            options={onboardingChatState.options}
            series={onboardingChatState.series}
            type="bar"
            height={400}
          />
        </Grid>
        <Grid item md={4}>
          <div
            style={{ height: "500px" }}
            className="d-flex justify-content-center align-items-center"
          >
            <ReactApexChart
              options={donutChartState.options}
              series={donutChartState.series}
              type="pie"
              width={400}
              height={400}
            />
          </div>
        </Grid>
        <Grid item md={12}>
          <Typography variant="h4">Total Revenue Generated</Typography>
          <ReactApexChart
            options={revenueChartState.options}
            series={revenueChartState.series}
            type="bar"
            height={400}
          />
        </Grid>
        <Grid item md={8}>
          <Typography variant="h4">Payout Made</Typography>

          <ReactApexChart
            options={payoutChartState.options}
            series={payoutChartState.series}
            type="bar"
            height={400}
          />
        </Grid>
        <Grid item md={4}>
          <Typography variant="h4">Payout To be Made</Typography>

          <Card
            className="d-flex justify-content-around align-items-center flex-column py-3"
            style={{ height: 400 }}
          >
            <Typography className="text-center" variant="h3">
              NGN 200000
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
