export const extractPropKeys = (propMap: any) => {
  const props = Object.keys(propMap);

  return props.map((p: any) => {
    return {
      title: p
    };
  });
};
