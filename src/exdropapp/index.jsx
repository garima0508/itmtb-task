import React, { useState } from "react";

import Dropdown from "./dropdown";
import data from "../data/instruments.json";
export default function Dropapp({ exChange }) {
  const [value, setValue] = useState(null);

  return (
    <div>
      <Dropdown
        key={Math.random().toString}
        options={data}
        label="tradingsymbol"
        prompt=" "
        value={value}
        onChange={(val) => setValue(val)}
        exChange={exChange}
      />
    </div>
  );
}
