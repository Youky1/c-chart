export type ChartType = "bar"; // 支持的图的类型

export interface Options {
  type: ChartType;
  data: number[];
  direction?: "x" | "y"; // 柱状图的方向，默认横向
  size?: {
    width?: number;
    height?: number;
  };
}

export type Graph = Array<Array<number | string>>; // 图表的输出格式
