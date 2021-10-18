import React from "react";
import { useData } from "../context/DataProvider";

export default function Loader() {
  const {
    state: { loading },
  } = useData();
  return (
    <div className="loader">
      {/* {console.log(loading)} */}
      {loading && (
        <>
          <div className="loader__start"></div>
          <div className="loader__end"></div>
        </>
      )}
    </div>
  );
}
