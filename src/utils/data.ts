import { Graph } from "../../@types";

// 初始化M*N的二维数组
export const initArr = (width: number, height: number) => {
  return Array(height)
    .fill("")
    .map(() => Array(width).fill(" "));
};

// 将结果转换为字符串
export const graph2Str = (graph: Graph) => {
  const res = graph.map((item) => item.join("")).join("\n");
  return res;
};

// 数据data缩放到整数区间scale
export const normalize = (scale: number[], data: number[]) => {
  const [start, end] = scale;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  return data.map((item) =>
    Math.round(start + (end - start) * ((item - min) / range))
  );
};
