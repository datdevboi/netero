export const extractComponentNames = (data: any) => {
  return data.map((component: any) => {
    return component.name;
  });
};
