type Props = {
  treeData: any;
};
export const Module = (props: Props) => {
  const { treeData } = props;
  return (
    <div
      style={{
        width: "100px",
      }}
    >
      {treeData.title}
    </div>
  );
};
