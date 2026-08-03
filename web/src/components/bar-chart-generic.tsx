'use client';

import { ApexOptions } from 'apexcharts';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { prepareChartForPrinting } from '@/lib/chart-printing';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface BarChartCompareProps {
  max: number;
  categories: string[];
  series: Scores[];
}

type Scores = {
  name: string;
  data: number[];
};

export const BarChartCompare = ({
  max,
  series,
  categories
}: BarChartCompareProps) => {
  const { theme } = useTheme();
  const apexChartTheme = theme === 'dark' ? 'dark' : 'light';
  const neutralScore = (max / 5) * 3;
  const annotationColor = apexChartTheme === 'dark' ? '#a1a1aa' : '#71717a';
  const options: ApexOptions = {
    theme: {
      mode: apexChartTheme
    },
    annotations: {
      yaxis: [
        {
          y: neutralScore,
          borderColor: annotationColor,
          borderWidth: 1,
          strokeDashArray: 5,
          opacity: 0.7
        }
      ]
    },
    legend: {
      show: true
    },
    chart: {
      events: {
        mounted: prepareChartForPrinting,
        updated: prepareChartForPrinting
      },
      toolbar: {
        show: false
      },
      fontFamily: 'Inter, sans-serif',
      background: 'transparent'
    },
    yaxis: {
      max
    },
    xaxis: {
      categories,
      labels: {
        style: {
          fontFamily: 'Inter, sans-serif'
        }
      }
    },
    plotOptions: {
      bar: {
        distributed: false
      }
    }
  };

  return (
    <div className='printable-chart'>
      <ApexChart
        type='bar'
        options={options}
        series={series}
        height={350}
        width='100%'
      />
    </div>
  );
};
