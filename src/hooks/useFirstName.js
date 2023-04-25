import { useState } from "react";

const useFirstName = (initialFullName) => {
  const [firstName, setFirstName] = useState("");

  const getFirstName = (fullName) => {
    const words = fullName.split(" ");
    const firstName = words[0] || "";
    return firstName;
  };

  useState(() => {
    const firstName = getFirstName(initialFullName);
    setFirstName(firstName);
  }, [initialFullName]);

  return firstName;
};

export default useFirstName;
