"use client";

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

const chartConfig = {
  total: {
    label: "Total",
    color: "var(--chart-1)",
  },
  successfull: {
    label: "Successfull",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const chartData = [
  { month: "January", total: 186, successfull: 80 },
  { month: "February", total: 305, successfull: 200 },
  { month: "March", total: 237, successfull: 120 },
  { month: "April", total: 173, successfull: 100 },
  { month: "May", total: 209, successfull: 130 },
  { month: "June", total: 214, successfull: 140 },
];

const AppBarChart = () => {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Total revenue</h1>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickMargin={10} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="total" fill="var(--color-total)" radius={4} />
          <Bar
            dataKey="successfull"
            fill="var(--color-successfull)"
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default AppBarChart;
