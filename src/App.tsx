import { useEffect, useState } from "react";
import { Classification } from "./Classification";
import { Module } from "./Module";

const treeData = [
  {
    title: "0-0",
    key: "0-0",
    leave: 1,
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        leave: 2,
        children: [
          {
            title: "0-0-0-0",
            key: "0-0-0-0",
            leave: 3,
            children: [
              {
                title: "0-0-0-0-0",
                key: "0-0-0-0-0",
                leave: 4,
                children: [
                  {
                    title: "0-0-0-0-0-0",
                    key: "0-0-0-0-0-0",
                    leave: 5,
                    children: [
                      {
                        title: "0-0-0-0-0-0-0",
                        key: "0-0-0-0-0-0-0",
                        leave: 6,
                        children: [
                          {
                            title: "0-0-0-0-0-0-0-0",
                            key: "0-0-0-0-0-0-0-0",
                            leave: 7,
                            children: [
                              {
                                title: "0-0-0-0-0-0-0-0-0",
                                key: "0-0-0-0-0-0-0-0-0",
                                leave: 8,
                                children: [
                                  {
                                    title: "0-0-0-0-0-0-0-0-0-0",
                                    key: "0-0-0-0-0-0-0-0-0-0",
                                    leave: 9,
                                    children: [
                                      {
                                        title: "0-0-0-0-0-0-0-0-0-0-0",
                                        key: "0-0-0-0-0-0-0-0-0-0-0",
                                        leave: 10,
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            title: "0-0-0-1",
            key: "0-0-0-1",
            leave: 3,
          },
        ],
      },

      {
        title: "0-0-1",
        key: "0-0-1",
        leave: 2,
        children: [
          {
            title: "0-0-1-0",
            key: "0-0-1-0",
            leave: 3,
          },
        ],
      },
    ],
  },

  {
    title: "0-2",
    key: "0-2",
    leave: 1,
    children: [
      {
        title: "0-2-0",
        key: "0-2-0",
        leave: 2,
      },
    ],
  },
  {
    title: "0-1",
    key: "0-1",
    leave: 1,
  },
];
const App = () => {
  const [selectedKeys, setSelectedKeys] = useState<
    Array<{
      leave: number;
      key: string;
    }>
  >([
    {
      leave: 1,
      key: "0-0",
    },
    {
      leave: 2,
      key: "0-0-0",
    },
  ]);

  const [num, setNum] = useState(0);

  useEffect(() => {
    const divBox = document.querySelector("#divBox");
    const num = (divBox?.clientWidth || 0) / 110;
    setNum(num);
  }, []);

  return (
    <div id="divBox">
      {treeData.map((item) => {
        if (item.children) {
          return (
            <Classification
              key={item.key}
              treeData={item}
              selectedKeys={selectedKeys}
              setSelectedKeys={setSelectedKeys}
              num={num}
            />
          );
        } else {
          return <Module key={item.key} treeData={item} />;
        }
      })}
    </div>
  );
};
export default App;
