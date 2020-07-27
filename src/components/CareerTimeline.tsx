import React, {FC} from 'react';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import Activity from '../icons/activity.svg';
import Anchor from '../icons/anchor.svg';


const CareerTimeline: FC = () => {
    return (
        <Timeline style={{paddingLeft:'10px'}} lineStyle={{marginLeft:'10px'}}>
            <TimelineEvent title="Bundesdruckerei Gmbh"
                           createdAt="Today - 2019/10"
                           icon={<img src={Anchor} alt={"Job Anchor icon"}/>}
            >
                Maybe some chart

            </TimelineEvent>
            <TimelineEvent
                title="Capgemini GmbH"
                createdAt="2019/09 - 2018/01"
                icon={<img src={Activity} alt={"Job Anchor icon"}/>}
            >
                Maybe some other chart
            </TimelineEvent>
        </Timeline>
    );
};

export default CareerTimeline;