import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

class Rank extends PureComponent {
  // 需要的数据  yData=[] 排行榜上的前十名的名字数组,
  // series.data 是排行榜上每个人对应的数值大小
  // this.props.Rank.users this.props.Rank.scores
  componentDidMount() {
    // 拉去接口获取ranks的数据
    this.props.dispatch({ type: 'home/e_getRanks' });
  }
  getOption = () => {
    return {
      title: {
        text: '2048英雄排行榜',
        subtext: 'go go go !',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['跟我来冲榜'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: 'category',
        data: this.props.home.ranks.username,
      },
      series: [
        {
          name: '跟我来冲榜',
          type: 'bar',
          data: this.props.home.ranks.scoreList,
          itemStyle: {
            normal: { color: '#1890ff' },
          },
        },
      ],
    };
  };
  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        notMerge
        lazyUpdate
        style={{ height: '750px', width: '100%', margin: '0 auto' }}
        className="react_for_echarts"
      />
    );
  }
}
export default Rank;
