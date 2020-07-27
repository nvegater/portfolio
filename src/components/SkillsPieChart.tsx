import React, {FC} from 'react';
import {
    PieChart, Pie, Cell, PieLabelRenderProps,
} from 'recharts';
import SkillsPieChartLabel from "./SkillsPieChartLabel";
import {theme} from "../theme";

const data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200},
];

const COLORS = [theme.colors.redSalsa, theme.colors.iceberg, theme.colors.pistachio, theme.colors.cetaceanBlue];

const SkillsPieChart: FC = () => {

    return (
        <PieChart width={300} height={300}>
            <Pie
                data={data}
                cx={150}
                cy={150}
                labelLine={false}
                label={(props: PieLabelRenderProps) => <SkillsPieChartLabel {...props}/>}
                outerRadius={120}
                dataKey="value"
            >
                {
                    data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
                }
            </Pie>
        </PieChart>
    );

}

export default SkillsPieChart;
