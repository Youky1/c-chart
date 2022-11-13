type ChartType = "bar" | "scatter"; // 支持的图的类型

export type BarData = number[];
export type ScatterData = Array<[number, number]>;

export interface Options {
  type: ChartType;
  data: BarData | ScatterData;
  direction?: "x" | "y"; // 柱状图的方向，默认横向
  size?: {
    width?: number;
    height?: number;
  };
}

export type Graph = Array<Array<number | string>>; // 图表的输出格式
