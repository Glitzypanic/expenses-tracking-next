"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/providers/components/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/providers/components/chart";

const chartData = [
  { date: "2024-04-01", Income: 222, Expense: 150 },
  { date: "2024-04-02", Income: 97, Expense: 180 },
  { date: "2024-04-03", Income: 167, Expense: 120 },
  { date: "2024-04-04", Income: 242, Expense: 260 },
  { date: "2024-04-05", Income: 373, Expense: 290 },
  { date: "2024-04-06", Income: 301, Expense: 340 },
  { date: "2024-04-07", Income: 245, Expense: 180 },
  { date: "2024-04-08", Income: 409, Expense: 320 },
  { date: "2024-04-09", Income: 59, Expense: 110 },
  { date: "2024-04-10", Income: 261, Expense: 190 },
  { date: "2024-04-11", Income: 327, Expense: 350 },
  { date: "2024-04-12", Income: 292, Expense: 210 },
  { date: "2024-04-13", Income: 342, Expense: 380 },
  { date: "2024-04-14", Income: 137, Expense: 220 },
  { date: "2024-04-15", Income: 120, Expense: 170 },
  { date: "2024-04-16", Income: 138, Expense: 190 },
  { date: "2024-04-17", Income: 446, Expense: 360 },
  { date: "2024-04-18", Income: 364, Expense: 410 },
  { date: "2024-04-19", Income: 243, Expense: 180 },
  { date: "2024-04-20", Income: 89, Expense: 150 },
  { date: "2024-04-21", Income: 137, Expense: 200 },
  { date: "2024-04-22", Income: 224, Expense: 170 },
  { date: "2024-04-23", Income: 138, Expense: 230 },
  { date: "2024-04-24", Income: 387, Expense: 290 },
  { date: "2024-04-25", Income: 215, Expense: 250 },
  { date: "2024-04-26", Income: 75, Expense: 130 },
  { date: "2024-04-27", Income: 383, Expense: 420 },
  { date: "2024-04-28", Income: 122, Expense: 180 },
  { date: "2024-04-29", Income: 315, Expense: 240 },
  { date: "2024-04-30", Income: 454, Expense: 380 },
  { date: "2024-05-01", Income: 165, Expense: 220 },
  { date: "2024-05-02", Income: 293, Expense: 310 },
  { date: "2024-05-03", Income: 247, Expense: 190 },
  { date: "2024-05-04", Income: 385, Expense: 420 },
  { date: "2024-05-05", Income: 481, Expense: 390 },
  { date: "2024-05-06", Income: 498, Expense: 520 },
  { date: "2024-05-07", Income: 388, Expense: 300 },
  { date: "2024-05-08", Income: 149, Expense: 210 },
  { date: "2024-05-09", Income: 227, Expense: 180 },
  { date: "2024-05-10", Income: 293, Expense: 330 },
  { date: "2024-05-11", Income: 335, Expense: 270 },
  { date: "2024-05-12", Income: 197, Expense: 240 },
  { date: "2024-05-13", Income: 197, Expense: 160 },
  { date: "2024-05-14", Income: 448, Expense: 490 },
  { date: "2024-05-15", Income: 473, Expense: 380 },
  { date: "2024-05-16", Income: 338, Expense: 400 },
  { date: "2024-05-17", Income: 499, Expense: 420 },
  { date: "2024-05-18", Income: 315, Expense: 350 },
  { date: "2024-05-19", Income: 235, Expense: 180 },
  { date: "2024-05-20", Income: 177, Expense: 230 },
  { date: "2024-05-21", Income: 82, Expense: 140 },
  { date: "2024-05-22", Income: 81, Expense: 120 },
  { date: "2024-05-23", Income: 252, Expense: 290 },
  { date: "2024-05-24", Income: 294, Expense: 220 },
  { date: "2024-05-25", Income: 201, Expense: 250 },
  { date: "2024-05-26", Income: 213, Expense: 170 },
  { date: "2024-05-27", Income: 420, Expense: 460 },
  { date: "2024-05-28", Income: 233, Expense: 190 },
  { date: "2024-05-29", Income: 78, Expense: 130 },
  { date: "2024-05-30", Income: 340, Expense: 280 },
  { date: "2024-05-31", Income: 178, Expense: 230 },
  { date: "2024-06-01", Income: 178, Expense: 200 },
  { date: "2024-06-02", Income: 470, Expense: 410 },
  { date: "2024-06-03", Income: 103, Expense: 160 },
  { date: "2024-06-04", Income: 439, Expense: 380 },
  { date: "2024-06-05", Income: 88, Expense: 140 },
  { date: "2024-06-06", Income: 294, Expense: 250 },
  { date: "2024-06-07", Income: 323, Expense: 370 },
  { date: "2024-06-08", Income: 385, Expense: 320 },
  { date: "2024-06-09", Income: 438, Expense: 480 },
  { date: "2024-06-10", Income: 155, Expense: 200 },
  { date: "2024-06-11", Income: 92, Expense: 150 },
  { date: "2024-06-12", Income: 492, Expense: 420 },
  { date: "2024-06-13", Income: 81, Expense: 130 },
  { date: "2024-06-14", Income: 426, Expense: 380 },
  { date: "2024-06-15", Income: 307, Expense: 350 },
  { date: "2024-06-16", Income: 371, Expense: 310 },
  { date: "2024-06-17", Income: 475, Expense: 520 },
  { date: "2024-06-18", Income: 107, Expense: 170 },
  { date: "2024-06-19", Income: 341, Expense: 290 },
  { date: "2024-06-20", Income: 408, Expense: 450 },
  { date: "2024-06-21", Income: 169, Expense: 210 },
  { date: "2024-06-22", Income: 317, Expense: 270 },
  { date: "2024-06-23", Income: 480, Expense: 530 },
  { date: "2024-06-24", Income: 132, Expense: 180 },
  { date: "2024-06-25", Income: 141, Expense: 190 },
  { date: "2024-06-26", Income: 434, Expense: 380 },
  { date: "2024-06-27", Income: 448, Expense: 490 },
  { date: "2024-06-28", Income: 149, Expense: 200 },
  { date: "2024-06-29", Income: 103, Expense: 160 },
  { date: "2024-06-30", Income: 446, Expense: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },
  Expense: {
    label: "Expense",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Component() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const now = new Date();
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    now.setDate(now.getDate() - daysToSubtract);
    return date >= now;
  });

  return (
    <Card className="border-none dark">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b border-gray-700 py-5 sm:flex-row">
        <div className="grid flex-1 gap-1 text-center sm:text-left">
          <CardTitle>Income and Expenses</CardTitle>
          <CardDescription>
            Showing total income and expenses for the last 30 days
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillIncome" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Income)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Income)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillExpense" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-Expense)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-Expense)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="Expense"
              type="natural"
              fill="url(#fillExpense)"
              stroke="var(--color-Expense)"
              stackId="a"
            />
            <Area
              dataKey="Income"
              type="natural"
              fill="url(#fillIncome)"
              stroke="var(--color-Income)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
