const useJsonToArray = () => {
  const jsonToArray = (jsonObject) => {
    const dataArray = Object.keys(jsonObject).map((key) => {
      return { key, value: jsonObject[key] };
    });
    return dataArray;
  };

  return jsonToArray;
};

export default useJsonToArray;
