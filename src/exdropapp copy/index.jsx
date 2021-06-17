import React, { useState } from "react";

import Dropdown from "./dropdown";
import data from "../data/instruments.json";
export default function Dropapp({ insChange, exVal }) {
  const [value, setValue] = useState(null);

  return (
    <div>
      <Dropdown
        key={Math.random().toString}
        options={data}
        label="tradingsymbol"
        prompt="Please fill exchange first"
        value={value}
        onChange={(val) => setValue(val)}
        insChange={insChange}
        exVal={exVal}
      />
    </div>
  );
}
