import { Section, List } from "@telegram-apps/telegram-ui";
import type { FC } from "react";
import { useState, useEffect } from "react";
import moment from 'moment';

// import tonSvg from "./ton.svg";
import { Timeline } from "@telegram-apps/telegram-ui";
import { TimelineItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/Timeline/components/TimelineItem/TimelineItem";

import { db } from "../../components/firebase";
import { doc, getDoc } from "@firebase/firestore";

export const IndexPage: FC = () => {
  const [scheduleData, setScheduleData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const schedule = (await getDoc(doc(db, "data", "schedule"))).data();

      setScheduleData(
        schedule!["schedule"].map((doc: { name: any; time: { seconds: any; }; }) => ({
          name: doc.name,
          time: moment.unix(doc.time.seconds).format('dddd, hh:ss'),
        }))
      );
      console.log({ scheduleData });
    }
    fetchData();
  }, []);

  return (
    <List>
      {/* <Section
        header='Features'
        footer='You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects'
      >
        <Link to='/ton-connect'>
          <Cell
            before={<Image src={tonSvg} style={{ backgroundColor: '#007AFF' }}/>}
            subtitle='Connect your TON wallet'
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
      <Section
        header='Application Launch Data'
        footer='These pages help developer to learn more about current launch information'
      >
        <Link to='/init-data'>
          <Cell subtitle='User data, chat information, technical data'>Init Data</Cell>
        </Link>
        <Link to='/launch-params'>
          <Cell subtitle='Platform identifier, Mini Apps version, etc.'>Launch Parameters</Cell>
        </Link>
        <Link to='/theme-params'>
          <Cell subtitle='Telegram application palette information'>Theme Parameters</Cell>
        </Link>
      </Section> */}
      <Section header="Расписание" footer="Будьласка будьте внимательны">
        <Timeline>
          {scheduleData?.map(({ name, time }) => (
            <TimelineItem header={name}>{time}</TimelineItem>
          ))}
          
        </Timeline>
      </Section>
    </List>
  );
};
