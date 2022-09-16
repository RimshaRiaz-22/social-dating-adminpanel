import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles'
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { TableOutlined } from '@ant-design/icons'
import axios from 'axios';
import url from '../url'
import '../tableStyle.css'
import {CRow,CCol ,CDropdown ,CDropdownItem,CDropdownMenu,CWidgetStatsA,CDropdownToggle} from '@coreui/react'
// import { CIcon } from '@coreui/icons-react';
import {CChartBar,CChartLine} from '@coreui/react-chartjs'
// import { cilArrowTop, cilOptions } from '@coreui/icons';
const useStyles = makeStyles({
    number: {
        fontSize: '20px',
        lineHeight: '32px',
        display: 'flex'

    },
    remarks: {
        lineHeight: '25px',
        marginTop: '10px',
        fontSize: '13px',
        color: '#9a9cab',
        fontFamily: 'Roboto Slab',
    },
    btn: {
        border: ' none',
        width: '70px',
        fontSize: ' 32px',
        cursor: 'pointer',
        borderRadius: '20px',
    },
    btn1: {
        backgroundColor: '#fc9494',
        border: ' none',
        color: 'black',
        padding: '12px 16px',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px'
    },
    btn2: {
        backgroundColor: '#ada6f2',
        border: ' none',
        color: 'white',
        padding: '12px 16px',
        fontSize: ' 16px',
        cursor: 'pointer',
        borderRadius: '5px'
    },
    btn4: {
        backgroundColor: '#5044c9',
        border: ' none',
        color: 'white',
        padding: ' 11px 24px',
        fontSize: '39px',
        cursor: 'pointer',
        borderRadius: '17px'
    },
    iconStyle: {
        marginTop: '3px',
        marginRight: '4px'
    }, HeadingWelcome: {
        fontSize: '26px',

    }, remarksHeader: {
        fontSize: '16px',
        marginTop: '-15px'
        // padding: '10px',
        // display: 'flex'
    }, remarksImg: {
        padding: "20px",
        alignContent: 'center'
    }, remarksHeader2: {
        padding: "10px",
        alignContent: "center",
        fontSize: '20px',
        fontWeight: '500'
    },
    remarksHeader3: {
        padding: '5px',
        alignContent: "center",
        fontSize: '14px'
    },
    AnalyticHead: {
        fontSize: '20px',
        color: '#ff0047',
        fontWeight: 700
    }, AHead: {
        fontSize: '16px',
        fontWeight: 700
    }
})
function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'white'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'black' : 'black'),

                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];
function GridDashboard() {
    const classes = useStyles();
    //get-all-topics
    // const [data, setData] = useState([]);
    const getAllData = () => {
        axios.get(`${url}user/get-all-user`)
            .then((response) => {
                const allData = response.data;
                console.log(allData.length);
                // setData(allData.length);
            })
            .catch(error => console.error(`Error:${error}`));

    }
    

    useEffect(() => {
        getAllData();
       

    }, []);

    return (
        <div>
          <CRow>
  <CCol sm={6}>
    <CWidgetStatsA
      className="mb-4"
      color="primary"
      value={
        <>
          $9.000{' '}
          <span className="fs-6 fw-normal">
            (40.9% )
          </span>
        </>
      }
      title="Total Users"
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            {/* <CIcon icon={cilOptions} className="text-high-emphasis-inverse" /> */}
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
      chart={
        <CChartLine
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'transparent',
                borderColor: 'rgba(255,255,255,.55)',
                pointBackgroundColor: '#321fdb',
                data: [65, 59, 84, 84, 51, 55, 40],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4,
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4,
              },
            },
          }}
        />
      }
    />
  </CCol>

  <CCol sm={6}>
    <CWidgetStatsA
      className="mb-4"
      color="danger"
      value={
        <>
          $9.000{' '}
          <span className="fs-6 fw-normal">
            (40.9% )
          </span>
        </>
      }
      title="Total Subscribers"
      action={
        <CDropdown alignment="end">
          <CDropdownToggle color="transparent" caret={false} className="p-0">
            {/* <CIcon icon={cilOptions} className="text-high-emphasis-inverse" /> */}
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here...</CDropdownItem>
            <CDropdownItem disabled>Disabled action</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
      }
      chart={
        <CChartBar
          className="mt-3 mx-3"
          style={{ height: '70px' }}
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
              'August',
              'September',
              'October',
              'November',
              'December',
              'January',
              'February',
              'March',
              'April',
            ],
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,255,255,.2)',
                borderColor: 'rgba(255,255,255,.55)',
                data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
                barPercentage: 0.6,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
          }}
        />
      }
    />
  </CCol>
</CRow>

        </div>
    )
}

export default GridDashboard