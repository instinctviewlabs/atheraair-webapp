import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Paper, Stack, styled, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

ChartJS.register(
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
    Title
);

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
      margin: theme.spacing(0.5),
      border: 0,
      '&.Mui-disabled': {
        border: 0,
      },
      '&:not(:first-of-type)': {
        borderRadius: 10,
      },
      '&:first-of-type': {
        borderRadius: 10,
      },
    },
  }));

const StyledToggleButton = styled(ToggleButton)(({theme}) => ({
    display: "flex",
    flexDirection: "column", 
    outlineWidth: '1px',  
    margin: '2px',
    "&.Mui-selected, &.Mui-selected:hover": {
        color: "white",
        backgroundColor: 'black',
    }
})) 

function BookingCountChart() {

    const [option, setOption] = React.useState('week');
    const handleOptions = (event, newAlignment) => {
        setOption(newAlignment);
    };

  let data = {
    labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: "User bookings",
        data: [20, 10, 20, 30, 50, 50, 60, 80],
        backgroundColor: ["white"],
        borderColor: ["#4A3AFF"],
        borderWidth: 1,
        tension: 0.2
      },
      {
        label: "Admin bookings",
        data: [30, 20, 40, 10, 10, 70, 70, 80],
        backgroundColor: ["white"],
        borderColor: ["red"],
        borderWidth: 1,
        tension: 0.2
      },
    ],
  };

  let options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 16,
      },
    },
  };

  const plugins = [
    {
      afterDraw: function (chart) {
        if (chart.data.datasets[0].data.length < 1) {
          let ctx = chart.ctx;
          let width = chart.width;
          let height = chart.height;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.font = "15px Arial";
          ctx.fillText("No data to display", width / 2, height / 2);
          ctx.restore();
        }
      },
    },
  ];

  return (
    <>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h4">Total Booking Count</Typography>
            <Stack>
                <Paper
                    elevation={0}
                    sx={{
                    display: 'flex',
                    backgroundColor: "#F8F8FF",
                    borderRadius: 3,
                    flexWrap: 'wrap',
                    }}
                >
                    <StyledToggleButtonGroup
                    size="small"
                    value={option}
                    exclusive
                    onChange={handleOptions}
                    aria-label="text alignment"
                    >
                    <StyledToggleButton value="day" aria-label="left aligned">
                        <Typography variant="body1">Day</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="week" aria-label="centered">
                        <Typography variant="body1">Week</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="month" aria-label="right aligned">
                        <Typography variant="body1">Month</Typography>
                    </StyledToggleButton>
                    <StyledToggleButton value="year" aria-label="justified">
                        <Typography variant="body1">Year</Typography>
                    </StyledToggleButton>
                    </StyledToggleButtonGroup>
                </Paper>
            </Stack>
        </Stack>
        <Stack height={500}>
            <Line data={data} options={options} plugins={plugins}/>
        </Stack>
    </>
  );


}

export default BookingCountChart