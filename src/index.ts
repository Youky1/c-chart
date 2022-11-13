import drawBar from "./chart/bar";
import drawScatter from "./chart/scatter";
import { Options } from "../@types";
import { graph2Str } from "./utils/data";

const generate = (options: Options) => {
  switch (options.type) {
    case "bar":
      return graph2Str(drawBar(options));
    case "scatter":
      return graph2Str(drawScatter(options));
    default:
      return "Invalid chart type";
  }
};

const print = (options: Options) => {
  console.log(generate(options));
};

export default print;
