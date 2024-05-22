import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import { Card, FormControl, MenuItem, Select } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import CountCard from "../../../components/CountCard";
import { Link, useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------
export default function AppView() {
  const navigate = useNavigate();
  const [barchartState] = useState({
    series: [
      {
        name: "Inflation",
        data: [2000, 4000, 6000, 8000, 10000],
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
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 87,66, 87],
      },
      {
        name: "Property Manager",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 90,94, 90,],
      },
      {
        name: "Landlord",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 49,41, 49],
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
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
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
            return " " + val + " thousands";
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
          12000,
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
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
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
        toolbar: {
          show: false,
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
  const cardsArray = [
    {
      count: "100",
      title: "Top Listed Properties",
      onClick:  () =>
        navigate("/property-management")
    },
    {
      count: "80",
      title: "Properties on Rent",
      onClick:  () =>
        navigate("/")
    },
    {
      count: "100",
      title: "Vacant Properties",
      onClick:  () =>
        navigate("/")
    },
    {
      count: "80",
      title: "Registered Renters",
      onClick:  () =>
        navigate("/renters")
    },
    {
      count: "100",
      title: "Registered Landlords",
      onClick:  () =>
        navigate("/landlords")
    },
    {
      count: "80",
      title: "Registered  Property Managers",
      onClick:  () =>
        navigate("/property-managers")
    },
  ];
  return (
    <div className="px-5">
      <Typography className="mt-2" variant="h3">
        Dashboard
      </Typography>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        {cardsArray.map((x, i) => {
          return (
            <Grid style={{cursor:"pointer"}} xs={12} sm={6} md={4} onClick={x.onClick}>
              <CountCard key={i} title={x.title} count={x.count}  />
            </Grid>
          );
        })}
      </Grid>

      <Grid 
      className={"mt-4"}
      container
      spacing={4}
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}>
      <Grid item md={3}>
          <Typography variant="h5">Financial Performance</Typography>
        </Grid>
        <Grid item md={2}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value="Weekly"
              id="demo-simple-select"
            >
              <MenuItem value={"Weekly"}>Last 7 days</MenuItem>
              <MenuItem value={"Monthly"}>Last 30 days</MenuItem> 
              <MenuItem value={"Yearly"}>Last 90 days</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid
        className={"mt-4"}
        container
        spacing={4}
        direction={"row"}
        alignItems={"center"}
        justify={"space-evenly"}
      >
        <Grid item xs={12} sm={6} md={12}>
          <Card  sx={{p : 2}}>
            <ReactApexChart
              type="bar"
              height={400}
              options={barchartState.options}
              series={barchartState.series}
            />
          </Card>
        </Grid>

        <Grid item md={8} xs={12} sm={6}>
          <Card  sx={{p : 2}}>
            <div className="d-flex justify-content-between">
            <Typography variant="h6" >
              Monthly User Onboarding
            </Typography>
            <div>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value="Weekly"
              id="demo-simple-select"
            >
              <MenuItem value={"Weekly"}>Weekly</MenuItem>
              <MenuItem value={"Monthly"}>Monthly</MenuItem> 
              <MenuItem value={"Yearly"}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </div>
            </div>
            
            <ReactApexChart
              options={onboardingChatState.options}
              series={onboardingChatState.series}
              type="bar"
              height={400}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card  sx={{p : 2}}>
            <div
              style={{ height: "450px" }}
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
          </Card>
        </Grid>
        <Grid item md={12} xs={12} sm={6}>
          <Card  sx={{p : 2}}>
            <div className="d-flex justify-content-between">
            <Typography variant="h6">Total Revenue Generated</Typography>
            <div>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              value="Weekly"
              id="demo-simple-select"
            >
              <MenuItem value={"Weekly"}>Weekly</MenuItem>
              <MenuItem value={"Monthly"}>Monthly</MenuItem> 
              <MenuItem value={"Yearly"}>Yearly</MenuItem>
            </Select>
          </FormControl>
        </div>
        </div>
            <ReactApexChart
              options={revenueChartState.options}
              series={revenueChartState.series}
              type="bar"
              height={400}
            />
          </Card>
        </Grid>
        {/* <Grid item md={8} xs={12} sm={6}>
          <Card sx={{p : 2}}>
            <Typography variant="h6">Payout Made</Typography>

            <ReactApexChart
              options={payoutChartState.options}
              series={payoutChartState.series}
              type="bar"
              height={400}
            />
          </Card>
        </Grid>
        <Grid item md={4} xs={12} sm={6}>

          <Typography variant="h6">Payout To be Made</Typography>
          <Card
            className="d-flex justify-content-around align-items-center flex-column py-3"
            style={{ height: 400 }}
          >
            <Typography className="text-center" variant="h3">
              NGN 200000
            </Typography>
          </Card>
        </Grid> */}
      </Grid>
    </div>
  );
}
