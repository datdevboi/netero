export const extractPropData = (propMap: any) => {
  const data = [];

  for (const prop of Object.keys(propMap)) {
    data.push({
      name: propMap[prop].name,
      description: propMap[prop].description,
      type: propMap[prop].type.name,
      default: propMap[prop].defaultValue
        ? propMap[prop].defaultValue.value
        : null,
      required: propMap[prop].required ? "true" : "false"
    });
  }

  return data;
};
