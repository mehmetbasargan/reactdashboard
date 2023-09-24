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

export const TransactionsChart = () => {
    return (
        <div className="col-span-2">
            <CartItem className="overflow-hidden">
                <div className="border-b border-primaryColor/5 bg-primaryColor text-white py-3 px-3 font-bold">
                    Transactions
                </div>

                <div className="h-[22rem] bg-white p-9 rounded-sm border border-gray-200 ">
                    <div className="mt-3 w-full basis-2/3 h-full text-xs">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
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
