import { useOutletContext } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoinNavigate } from "../api";
import ReactApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ChartProps {
  coinId?: string;
}

interface IHistoricalData {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Chart() {
  const isDark = useRecoilValue(isDarkAtom);
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv/chart", coinId],
    () => fetchCoinNavigate(coinId),
    {
      refetchInterval: 10000,
    },
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ReactApexChart
          type="candlestick"
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
            yaxis: {
              labels: {
                formatter: (value) => `$${value}`,
              },
            },
            xaxis: {
              type: "datetime",
              categories: data?.map((price) => price.time_close),
            },
          }}
          series={[
            {
              name: "price",
              data:
                data?.flat().map((price) => {
                  return {
                    x: price.time_close,
                    y: [price.open, price.high, price.low, price.close],
                  };
                }) ?? [],
            },
          ]}
        />
      )}
    </div>
  );
}
export default Chart;
