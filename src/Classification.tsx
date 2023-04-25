import { useEffect, useState } from "react";
import { Module } from "./Module";

type Props = {
  treeData: any;
  num: number;
  selectedKeys: Array<{
    leave: number;
    key: string;
  }>;
  setSelectedKeys: React.Dispatch<
    React.SetStateAction<
      Array<{
        leave: number;
        key: string;
      }>
    >
  >;
};

export const Classification = (props: Props) => {
  const { treeData, num } = props;
  const [lastLeaver, setLastLeaver] = useState(0); // props.selectedKeys[props.selectedKeys.length - 1].leave
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const leaves = props.selectedKeys.map((item) => item.leave);
    if (leaves.includes(treeData.leave)) {
      const index = leaves.indexOf(treeData.leave);
      if (props.selectedKeys[index].key === treeData.key) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    } else {
      setVisible(false);
    }

    if (props.selectedKeys[props.selectedKeys.length - 1].leave >= num) {
      console.log(Math.floor(num), props.selectedKeys[props.selectedKeys.length - 1].leave);
      const newNum = props.selectedKeys[props.selectedKeys.length - 1].leave - Math.floor(num);
      console.log((newNum * 110) / num);
      const left = (newNum * 110) / num;
      setLastLeaver(num > 0 ? left : 0);
    }
  }, [props.selectedKeys]);

  return (
    <div
      style={{
        position: "relative",
        width: "100px",
      }}
    >
      <div
        onMouseEnter={() => {
          const leaves = props.selectedKeys.map((item) => item.leave);
          let list = [...props.selectedKeys];
          console.log(leaves);
          if (leaves.includes(treeData.leave)) {
            const index = leaves.indexOf(treeData.leave);
            if (props.selectedKeys[index].key === treeData.key) return;
            list = list.slice(0, index);
            props.setSelectedKeys([
              ...list,
              {
                leave: treeData.leave,
                key: treeData.key,
              },
            ]);
            setLastLeaver(0);
            setVisible(true);
          } else {
            props.setSelectedKeys([
              ...props.selectedKeys,
              {
                leave: treeData.leave,
                key: treeData.key,
              },
            ]);
            setVisible(true);
            setLastLeaver(0);
          }
        }}
      >
        {treeData.title}
      </div>
      {visible && (
        <ul
          style={{
            position: "absolute",
            left: `${110 - lastLeaver}px`,
            top: "0px",
            padding: "0px",
            margin: "0px",
            border: "1px solid #000",
          }}
        >
          {treeData.children &&
            treeData.children.map((item: any) => {
              if (item.children) {
                return (
                  <Classification
                    key={item.key}
                    treeData={item}
                    num={props.num}
                    selectedKeys={props.selectedKeys}
                    setSelectedKeys={props.setSelectedKeys}
                  />
                );
              } else {
                return <Module key={item.key} treeData={item} />;
              }
            })}
        </ul>
      )}
    </div>
  );
};
