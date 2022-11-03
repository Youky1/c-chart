type ChartType = "bar";
type Value = number | string;
type Axis = Array<Value>;
interface Options {
  type: ChartType;
  xAxis?: Axis;
  yAxis?: Axis;
  size?: {
    width?: number;
    height?: number;
  };
}
type Graph = Array<Array<Value>>;
