'use client'

// Next Imports
import dynamic from 'next/dynamic'

// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useColorScheme, useTheme } from '@mui/material/styles'

// Util Imports
import { rgbaToHex } from '@/utils/rgbaToHex'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'))

// Vars
const series = [
  {
    name: 'Earning',
    data: [44, 24, 56, 34, 47]
  },
  {
    name: 'Expense',
    data: [-27, -21, -31, -25, -31]
  }
]

const StackedBarChart = ({ serverMode }) => {
  // Hooks
  const theme = useTheme()
  const { mode } = useColorScheme()

  // Vars
  const _mode = (mode === 'system' ? serverMode : mode) || serverMode

  const options = {
    chart: {
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
      zoom: {
        enabled: false
      }
    },
    legend: { show: false },
    dataLabels: { enabled: false },
    stroke: {
      width: 5,
      colors: [theme.palette.background.paper]
    },
    colors: [
      rgbaToHex(`rgb(${theme.mainColorChannels[_mode]} / 0.9)`),
      rgbaToHex(`rgb(${theme.palette.error.mainChannel} / 1)`)
    ],
    plotOptions: {
      bar: {
        borderRadius: 7,
        columnWidth: '65%',
        borderRadiusApplication: 'around',
        borderRadiusWhenStacked: 'all'
      }
    },
    grid: {
      padding: {
        top: -35,
        left: -30,
        right: -18,
        bottom: -25
      },
      yaxis: {
        lines: { show: false }
      }
    },
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      labels: { show: false },
      axisTicks: { show: false },
      crosshairs: { opacity: 0 },
      axisBorder: { show: false }
    },
    yaxis: {
      labels: { show: false }
    },
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        options: {
          plotOptions: {
            bar: { borderRadius: 6 }
          }
        }
      },
      {
        breakpoint: 1380,
        options: {
          plotOptions: {
            bar: { columnWidth: '90%', borderRadius: 5 }
          }
        }
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: { columnWidth: '32%', borderRadius: 9 }
          }
        }
      },
      {
        breakpoint: 1080,
        options: {
          plotOptions: {
            bar: { columnWidth: '38%', borderRadius: 8 }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.md,
        options: {
          plotOptions: {
            bar: { columnWidth: '47%', borderRadius: 7 }
          }
        }
      },
      {
        breakpoint: 735,
        options: {
          plotOptions: {
            bar: { columnWidth: '65%', borderRadius: 8 }
          }
        }
      },
      {
        breakpoint: 680,
        options: {
          plotOptions: {
            bar: { columnWidth: '65%', borderRadius: 7 }
          }
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        options: {
          plotOptions: {
            bar: { columnWidth: '27%', borderRadius: 9 }
          }
        }
      },
      {
        breakpoint: 450,
        options: {
          plotOptions: {
            bar: { columnWidth: '32%', borderRadius: 8 }
          }
        }
      }
    ]
  }

  return (
    <Card>
      <CardContent>
        <div className='flex flex-wrap items-center gap-1'>
          <Typography variant='h5'>$88.5k</Typography>
          <Typography color='error'>-18%</Typography>
        </div>
        <Typography variant='subtitle1'>Total Profit</Typography>
      </CardContent>
      <CardContent>
        <AppReactApexCharts type='bar' height={84} width='100%' options={options} series={series} />
      </CardContent>
    </Card>
  )
}

export default StackedBarChart
