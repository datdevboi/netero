export const findComponentData = (data: any, name: string) => {
  const retrievedData = data.filter((x: any) => x.name === name);

  return {
    data: retrievedData[0].data.props,
    examples: retrievedData[0].examples
  };
};
