export const findComponentData = (data: any, name: string) => {
  const retrievedData = data.filter((x: any) => x.name === name);

  return retrievedData[0].data.props;
};
