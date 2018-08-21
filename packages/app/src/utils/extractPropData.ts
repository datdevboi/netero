export const extractPropData = (propMap: any) => {
  const data = [];

  for (const prop of Object.keys(propMap)) {
    data.push({
      name: propMap[prop].name,
      description: propMap[prop].description,
      type: propMap[prop].type.name,
      default: propMap[prop].defaultValue,
      required: propMap[prop].required
    });
  }

  return data;
};
