export interface Bar {
  type: "bar";
  data: number[];
}

export interface Scatter {
  type: "scatter";
  data: Array<[number, number]>;
}

export interface Options<T extends Bar | Scatter> {
  type: T["type"];
  data: T["data"];
  direction?: "x" | "y"; // 柱状图的方向，默认横向
  size?: {
    width?: number;
    height?: number;
  };
}

export type GraphOptions = Options<Bar> | Options<Scatter>;

export type Graph = Array<Array<number | string>>; // 图表的输出格式
