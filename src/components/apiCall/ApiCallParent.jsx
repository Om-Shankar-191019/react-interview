// problem statement :
// Have a Parent component and in that make a api call, have a child component and in that have a input box taking an id as input and a button . when clicked respective data to be fetched and shown on UI.
import { useEffect, useState } from "react";
import Child from "./Child";

function ApiCallParent() {
  const [apiId, setApiId] = useState("");
  const [message, setMessage] = useState(null);
  useEffect(() => {
    const res = fetch(`https://jsonplaceholder.typicode.com/posts/${apiId}`)
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, [apiId]);

  return (
    <>
      <Child setApiId={setApiId} />
      <p>{message && message.title}</p>
    </>
  );
}

export default ApiCallParent;
