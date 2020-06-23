import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";
import numeral from "numeral";
import { palette } from "../palette";

export class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: 4,
          name: "Tiền trả trước",
        },
        {
          value: 2,
          name: "Tiền vay ngân hàng",
        },
        {
          value: 4,
          name: "Tiền lãi vay",
        },
      ],
      option: null,
    };
  }

  componentWillReceiveProps(next) {
    const { traTruoc, tienVay, tongLai } = this.props;
    if (
      traTruoc !== next.traTruoc ||
      tienVay !== next.tienVay ||
      tongLai !== next.tongLai
    ) {
      this.setState(
        {
          data: [
            {
              value: Number(
                numeral(next.traTruoc / 1000000000).format("0,0.000")
              ),
              name: "Tiền trả trước",
            },
            {
              value: Number(
                numeral(next.tienVay / 1000000000).format("0,0.000")
              ),
              name: "Tiền vay ngân hàng",
            },
            {
              value: Number(
                numeral(next.tongLai / 1000000000).format("0,0.000")
              ),
              name: "Tiền lãi vay",
            },
          ],
        },
        () => this.loadChart()
      );
    }
  }

  loadChart = async () => {
    const { data } = this.state;
    const option = {
      color: palette,
      tooltip: {
        trigger: "item",
        formatter: `{b}: {c} tỷ`,
        textStyle: {
          fontSize: 13.5,
          fontFamily: "Varela Round, sans-serif",
        },
      },
      legend: {
        left: 0,
        data: data.map((i) => i.name),
        textStyle: {
          fontSize: 14,
          fontFamily: "Varela Round, sans-serif",
        },
      },
      series: [
        {
          name: "VAY NGÂN HÀNG",
          type: "pie",
          top: 20,
          radius: ["35%", "70%"],
          hoverOffset: 5,
          label: {
            show: true,
            normal: {
              formatter: "{d}%",
              position: "inside",
              fontSize: 11,
              fontFamily: "Varela Round, sans-serif",
            },
          },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
    };
    this.setState({
      option,
    });
  };
  render() {
    const { option } = this.state;
    return (
      <div style={{ height: "100%", width: "100%", minHeight: 300 }}>
        <ReactEcharts
          ref={(el) => (this.chart = el)}
          option={option || {}}
          style={{
            height: "100%",
            width: "100%",
            minHeight: 300,
          }}
        />
      </div>
    );
  }
}

export default Chart;
