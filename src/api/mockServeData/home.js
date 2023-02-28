// mock数据模拟
import Mock from 'mockjs'


// 图表数据
let List = []
export default {
    getStatisticalData: () => {
        // Mock.Random.float产生随机100到8000之间，保留小数，最小0位，最大0位
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    apple: Mock.Random.float(100, 8000, 0, 0),
                    google: Mock.Random.float(100, 8000, 0, 0),
                    samsung: Mock.Random.float(100, 8000, 0, 0),
                    oneplus: Mock.Random.float(100, 8000, 0, 0),
                    xiaomi: Mock.Random.float(100, 8000, 0, 0),
                    meizu: Mock.Random.float(100, 8000, 0, 0),
                })
            )
        }
        return {
            code: 20000,
            data: {
                // 饼图
                videoData: [
                    {
                        name: 'apple',
                        value: 8999
                    },
                    {
                        name: 'google',
                        value: 7999
                    },
                    {
                        name: 'samsung',
                        value: 6999
                    },
                    {
                        name: 'oneplus',
                        value: 4999
                    },
                    {
                        name: 'xiaomi',
                        value: 3999
                    },
                    {
                        name: 'meizu',
                        value: 3999
                    },
                ],
                // 柱状图
                userData: [
                    {
                        date: 'monday',
                        new: 5,
                        active: 200
                    },
                    {
                        date: 'tuesday',
                        new: 10,
                        active: 500
                    },
                    {
                        date: 'wednesday',
                        new: 12,
                        active: 550
                    },
                    {
                        date: 'thursday',
                        new: 60,
                        active: 800
                    },
                    {
                        date: 'friday',
                        new: 65,
                        active: 550
                    },
                    {
                        date: 'saturday',
                        new: 53,
                        active: 770
                    },
                    {
                        date: 'sunday',
                        new: 33,
                        active: 170
                    }
                ],
                // 折线图
                orderData: {
                    date: ['2019001', '2019002', '2019003', '2019004', '2019005', '2019006', '2019007',],
                    data: List
                },
                tableData: [
                    {
                        name: 'apple',
                        todayBuy: 500,
                        monthBuy: 3500,
                        totalBuy: 22000
                    },
                    {
                        name: 'google',
                        todayBuy: 300,
                        monthBuy: 2200,
                        totalBuy: 24000
                    },
                    {
                        name: 'samsung',
                        todayBuy: 800,
                        monthBuy: 4500,
                        totalBuy: 65000
                    },
                    {
                        name: 'oneplus',
                        todayBuy: 1200,
                        monthBuy: 6500,
                        totalBuy: 45000
                    },
                    {
                        name: 'xiaomi',
                        todayBuy: 300,
                        monthBuy: 2000,
                        totalBuy: 34000
                    },
                    {
                        name: 'meizu',
                        todayBuy: 350,
                        monthBuy: 3000,
                        totalBuy: 22000
                    },
                ]
            }
        }
    }
}