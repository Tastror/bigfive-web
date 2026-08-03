'use client';

import { ApexOptions } from 'apexcharts';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useLocale } from 'next-intl';
import { getUiMessages } from '@/lib/ui-messages';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface BarChartProps {
  max: number;
  results: any;
}

export const BarChart = ({ max, results }: BarChartProps) => {
  const { theme } = useTheme();
  const ui = getUiMessages(useLocale());
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
      show: false
    },
    chart: {
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
      categories: results.map((result: any) => result.title),
      labels: {
        style: {
          fontFamily: 'Inter, sans-serif'
        }
      }
    },
    plotOptions: {
      bar: {
        distributed: true
      }
    },
    fill: {
      colors: ['#9353d3', '#006FEE', '#f31260', '#f5a524', '#17c964', '#E2711D']
    }
  };

  const series = [
    {
      name: ui.you,
      data: results.map((result: any) => result.score)
    }
  ];

  return (
    <>
      <ApexChart
        type='bar'
        options={options}
        series={series}
        height={350}
        width='100%'
      />
    </>
  );
};
