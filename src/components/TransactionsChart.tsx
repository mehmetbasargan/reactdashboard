import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import CartItem from './CartItem';

const data = [
    {
        name: 'Jan',
        Expense: 4000,
        Income: 2400,
    },
    {
        name: 'Feb',
        Expense: 3000,
        Income: 1398,
    },
    {
        name: 'Mar',
        Expense: 2000,
        Income: 9800,
    },
    {
        name: 'Apr',
        Expense: 2780,
        Income: 3908,
    },
    {
        name: 'May',
        Expense: 1890,
        Income: 4800,
    },
    {
        name: 'Jun',
        Expense: 2390,
        Income: 3800,
    },
    {
        name: 'July',
        Expense: 3490,
        Income: 4300,
    },
    {
        name: 'Aug',
        Expense: 2000,
        Income: 9800,
    },
    {
        name: 'Sep',
        Expense: 2780,
        Income: 3908,
    },
    {
        name: 'Oct',
        Expense: 1890,
        Income: 4800,
    },
    {
        name: 'Nov',
        Expense: 2390,
        Income: 3800,
    },
    {
        name: 'Dec',
        Expense: 3490,
        Income: 4300,
    },
];

const TransactionsChart = () => {
    return (
        <div className="col-span-2">
            <CartItem className="overflow-hidden">
                <div className="border-b border-primaryColor/5 text-black py-3 px-3 font-bold">
                    Transactions
                </div>

                <div className="xl:h-[22rem] h-[300px] bg-white xl:p-9 p-6 border border-gray-200 ">
                    <div className="mt-3 w-full h-full text-xs">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 10,
                                    left: -10,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid
                                    strokeDasharray="3 3 0 0"
                                    vertical={false}
                                />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Income" fill="#0ea5e9" />
                                <Bar dataKey="Expense" fill="#ea580c" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CartItem>
        </div>
    );
};

export default TransactionsChart;
