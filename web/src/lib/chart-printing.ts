type ApexChartContext = {
  el?: Element;
};

export function prepareChartForPrinting(chartContext: ApexChartContext) {
  const svg =
    chartContext.el?.querySelector<SVGSVGElement>('svg.apexcharts-svg');
  if (!svg) return;

  const width = Number.parseFloat(svg.getAttribute('width') ?? '');
  const height = Number.parseFloat(svg.getAttribute('height') ?? '');
  if (!Number.isFinite(width) || !Number.isFinite(height)) return;

  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
}
