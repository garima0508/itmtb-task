import React, { useState, useRef, useEffect } from "react";

import "./styles.css";
export default function Dropdown({
  options,
  label,
  prompt,
  value,
  onChange,
  insChange,
  exVal,
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);
  // console.log(!exVal);
  // if (!exVal) {
  //   console.log(exVal);
  //blurr.style.backgroundColor = "blue";
  useEffect(() => {
    let blurr = document.getElementById("#blur");
    // console.log(blurr);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);
  function close(e) {
    //console.dir([e.target, ref.current]);
    setOpen(e && e.target === ref.current);
  }
  function filter(options) {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  }

  function displayValue() {
    if (query.length > 0) return query;
    if (value) {
      return value[label];
    }
    return "";
  }
  return (
    <>
      <div id="blur">
        <div className="dropdown">
          <div className="control" onClick={() => setOpen((prev) => !prev)}>
            <div className="selected-value">
              <input
                type="text"
                ref={ref}
                placeholder={value ? value[label] : prompt}
                value={displayValue()}
                onChange={(e) => {
                  setQuery(e.target.value);
                  onChange(null);
                  //console.log(e.target.value);
                }}
                onClick={() => setOpen((prev) => !prev)}
              />
            </div>
            <div className={`arrow ${open ? "open" : null}`}></div>
          </div>
          <div className={`options ${open ? "open" : null}`}>
            {filter(options).map((option) => (
              <div
                //   key={option[id]}
                className={`option ${value === option ? "selected" : null}`}
                onClick={() => {
                  setQuery("");
                  onChange(option);
                  setOpen(false);
                  insChange(option.tradingsymbol);
                  //console.log(option.tradingsymbol);
                }}
              >
                {option[label]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
