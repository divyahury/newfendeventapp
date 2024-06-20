import { Button, Tabs } from "flowbite-react";
import { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { Table } from "flowbite-react";

const RecordDetails = ({ recordHead, recorddata }) => {
  const tabsRef = useRef(null);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <Tabs aria-label="Default tabs" ref={tabsRef} onActiveTabChange={(tab) => setActiveTab(tab)}>
        <Tabs.Item active title='Records' className="active:text-secondaryText" icon={HiUserCircle}>
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head >
                {recordHead.map((head, index) => (
                  <Table.HeadCell key={index}>{head}</Table.HeadCell>
                ))}
                {/* <Table.HeadCell>Event Date</Table.HeadCell>
                <Table.HeadCell>Event Category</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell> */}
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {recorddata.map((row, rowIndex) => (
                  <Table.Row key={rowIndex} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    {row.map((cell, cellIndex) => (
                      <Table.Cell key={cellIndex}>{cell}</Table.Cell>
                    ))}
                       <Table.Cell>
                         <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                           Edit
                         </a>
                       </Table.Cell>
                       {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                       {recorddata.name}
                      </Table.Cell>
                      <Table.Cell>{recorddata.category}</Table.Cell>
                      <Table.Cell>{recorddata.status}</Table.Cell>  */}

                    
                  </Table.Row>

                ))}
              </Table.Body>
            </Table>
          </div>
        </Tabs.Item>
      </Tabs>
    </div>
  );
};

// Table.propTypes = {
//   recordHead: propsTypes.arrayOf(propsTypes.string).isRequired,
//   recorddata: propsTypes.arrayOf(propsTypes.arrayOf(propsTypes.string)).isRequired,
// }

export default RecordDetails;
