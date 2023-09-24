import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import CartItem from './CartItem';

const data = [
    { name: 'Male', value: 540 },
    { name: 'Female', value: 620 },
    { name: 'Other', value: 210 },
];

const RADIAN = Math.PI / 180;
const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const BuyerProfileChart = () => {
    return (
        <div className="xl:col-span-1 col-span-2 w-full">
            <CartItem className="overflow-hidden">
                <div className="border-b border-primaryColor/5 text-black py-3 px-3 font-bold">
                    Buyer Profile
                </div>

                <div className="h-[22rem] bg-white p-9 border border-gray-200 ">
                    <div className="mt-3 w-full h-full text-xs ">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={300}>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="45%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={105}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {data.map((_, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </CartItem>
        </div>
    );
};

export default BuyerProfileChart;
