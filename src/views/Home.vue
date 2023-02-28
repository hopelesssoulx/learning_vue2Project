<template>
    <el-row>
        <el-col :span="8" style="padding-right: 10px;">
            <el-card class="box-card">
                <div class="user">
                    <img src="../assets/logo.png" alt="">
                    <div class="user_info">
                        <p class="name">Admin</p>
                        <p class="access">超级管理员</p>
                    </div>
                </div>
                <div class="login_info">
                    <p>上次登录时间: <span>2021-07-19</span></p>
                    <p>上次登录地点: <span>武汉</span></p>
                </div>
            </el-card>
            <el-card style="margin-top: 20px; height: 460px;">
                <el-table :data="tableData" style="width: 100%">
                    <!-- <el-table-column prop="name" label="课程">
                    </el-table-column>
                    <el-table-column prop="todayBuy" label="今日购买">
                    </el-table-column>
                    <el-table-column prop="monthBuy" label="月销量">
                    </el-table-column>
                    <el-table-column prop="totalBuy" label="总销量">
                    </el-table-column> -->
                    <el-table-column v-for="(key, val) in tableLabel" :key="key" :label="key" :prop="val" />
                </el-table>
            </el-card>
        </el-col>
        <el-col :span="16" style="padding-left: 10px;">
            <div class="num">
                <el-card v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
                    <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
                    <div class="detail">
                        <p class="price">￥{{ item.value }}</p>
                        <p class="desc">{{ item.name }}</p>
                    </div>
                </el-card>
            </div>
            <el-card style="height: 280px;">
                <!-- 折线图 -->
                <div ref="echarts1" style="height: 280px;"></div>
            </el-card>
            <div class="graph">
                <el-card style="height: 260px;">
                    <!-- 柱状图 -->
                    <div ref="echarts2" style="height: 260px;"></div>
                </el-card>
                <el-card style="height: 260px;">
                    <!-- 饼状图 -->
                    <div ref="echarts3" style="height: 240px;"></div>
                </el-card>
            </div>
        </el-col>
    </el-row>
</template>

<script>
import { getData } from '../api'
import * as echarts from 'echarts'
export default {
    data() {
        return {
            // src/api/mockServeData/home.js
            tableData: [
                // {
                //     name: 'apple',
                //     todayBuy: 100,
                //     monthBuy: 300,
                //     totalBuy: 800
                // },
                // {
                //     name: 'google',
                //     todayBuy: 100,
                //     monthBuy: 300,
                //     totalBuy: 800
                // },
                // {
                //     name: 'samsung',
                //     todayBuy: 100,
                //     monthBuy: 300,
                //     totalBuy: 800
                // },
                // {
                //     name: 'oneplus',
                //     todayBuy: 100,
                //     monthBuy: 300,
                //     totalBuy: 800
                // },
                // {
                //     name: 'xiaomi',
                //     todayBuy: 100,
                //     monthBuy: 300,
                //     totalBuy: 800
                // },
                // {
                //     name: 'meizu',
                //     todayBuy: 100,
                //     monthBuy: 300,
                //     totalBuy: 800
                // },
                // {
                //     name: 'lg',
                //     todayBuy: 100,
                //     monthBuy: 300,
                //     totalBuy: 800
                // },
            ],
            tableLabel: {
                name: '课程',
                todayBuy: '今日销量',
                monthBuy: '月销量',
                totalBuy: '总销量',
            },
            countData: [
                {
                    name: '今日支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '今日收藏订单',
                    value: 1234,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: '今日未支付订单',
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef"
                },
                {
                    name: '本月支付订单',
                    value: 1234,
                    icon: "success",
                    color: "#2ec7c9"
                },
                {
                    name: '本月收藏订单',
                    value: 1234,
                    icon: "star-on",
                    color: "#ffb980"
                },
                {
                    name: '本月未支付订单',
                    value: 1234,
                    icon: "s-goods",
                    color: "#5ab1ef"
                },
            ]
        }
    },
    mounted() {
        // getData().then((data) =>{
        //     console.log(data)
        // })
        getData().then(({ data }) => {
            const { tableData } = data.data
            console.log(data.data)
            this.tableData = tableData


            // 处理数据xAxis
            const { orderData, userData, videoData } = data.data

            // 基于准备好的dom，初始化echarts实例
            
            // 折线图开始
            const echarts1 = echarts.init(this.$refs.echarts1)
            // 指定图片的配置项和数据
            var echarts1Option = {}
            const xAxis = Object.keys(orderData.data[0])
            // echarts1Option.xAxis = {
            //     data: xAxis
            // }
            // echarts1Option.legend = {
            //     data: xAxis
            // }
            const xAxisData = {
                data: xAxis
            }
            echarts1Option.xAxis = xAxisData
            echarts1Option.yAxis = {}
            echarts1Option.legend = xAxisData
            // echarts1Option.series = {}
            echarts1Option.series = []
            xAxis.forEach(key => {
                echarts1Option.series.push({
                    name: key,
                    data: orderData.data.map(item => item[key]),
                    type: 'line'
                })
            })
            // 使用刚指定的配置项和数据显示图标
            echarts1.setOption(echarts1Option)
            // 折线图结束


            // 柱状图开始
            const echarts2 = echarts.init(this.$refs.echarts2)
            const echarts2Option = {
                legend: {
                    // 图例文字颜色
                    textStyle: {
                        color: "#333"
                    }
                },
                grid: {
                    left: "20%"
                },
                // 提示框
                tooltip: {
                    trigger: "axis"
                },
                xAxis: {
                    type: "category",   //类目轴
                    data: userData.map(item => item.date),
                    axisLine: {
                        lineStyle: {
                            color: "#17b3a3"
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        color: "#333"
                    }
                },
                yAxis: [
                    {
                        type: "value",
                        axisLine: {
                            lineStyle: {
                                color: "#17b3a3"
                            }
                        }
                    }
                ],
                color: ["#2ec7c9", "#b6a2de"],
                series: [
                    {
                        name: '新增用户',
                        type: 'bar',
                        data: userData.map(item => item.new)
                    },
                    {
                        name: '活跃用户',
                        type: 'bar',
                        data: userData.map(item => item.active)
                    }
                ]
            }
            echarts2.setOption(echarts2Option)
            // 柱状图结束


            // 饼状图开始
            const echarts3 = echarts.init(this.$refs.echarts3)
            const echarts3Option = {
                tooltip: {
                    trigger: "item",
                },
                color: [
                    "#0f78f4",
                    "#dd536b",
                    "#9462e5",
                    "#a6a6a6",
                    "#e1bb22",
                    "#39c362",
                    "#3ed1cf",
                ],
                series: [
                    {
                        data: videoData,
                        type: 'pie'
                    }
                ]
            }
            echarts3.setOption(echarts3Option)
            // 饼状图结束
        })
    }
}
</script>

<style lang="less" scoped>
.user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid lightgrey;
    display: flex;
    align-items: center;

    img {
        width: 150px;
        height: 150px;
        border-radius: 50%;
    }

    .user_info {
        .name {
            font-size: 32px;
            margin-bottom: 10px;
        }

        .access {
            color: grey;
        }
    }
}

.login_info {
    p {
        line-height: 32px;
        font-size: 14x;
        color: grey;

        span {
            color: darkgrey;
            margin-left: 60px;
        }
    }
}

.num {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .icon {
        width: 80px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 30px;
        color: white;
    }

    .detail {
        margin-left: 15px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .price {
            font-size: 30px;
            margin-bottom: 10px;
            line-height: 30px;
            height: 30px;
        }

        .desc {
            font-size: 14px;
            color: grey;
            text-align: center;
        }
    }

    .el-card {
        width: 32%;
        margin-bottom: 20px;
    }
}

.graph {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    .el-card {
        width: 48%;
    }
}
</style>