import React, {FC} from 'react';
import {
    PieLabelRenderProps
} from 'recharts';
import {theme} from "../theme";

const RADIAN = Math.PI / 180;

const SkillsPieChartLabel: FC<PieLabelRenderProps> = ({
                                                          cx,name, cy, midAngle, innerRadius, outerRadius, percent,
                                                      }) => {


    const innerRadiusNum: number = !!innerRadius ? innerRadius as number : 0;

    const radius = innerRadiusNum + ((outerRadius as number) - (innerRadius as number)) * 0.5;
    const cxNum: number = !!cx ? cx as number : 0
    let midAngleNum: number = !!midAngle ? midAngle : 0;
    let x = cxNum + radius * Math.cos(-midAngleNum * RADIAN);
    let cyNum: number = !!cy ? cy as number : 0;
    let y = cyNum + radius * Math.sin(-midAngleNum * RADIAN);

    let percentNum = !!percent ? percent : 0;
    console.log(name)
    return (
        <text x={x} y={y} fill={theme.colors.backgroundWhite} textAnchor={x > cxNum ? 'start' : 'end'} dominantBaseline="central">
            {`${(percentNum * 100).toFixed(0)}%`}
        </text>
    );

}

export default SkillsPieChartLabel;
