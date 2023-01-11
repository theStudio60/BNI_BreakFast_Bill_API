import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TestComponent() {
  return (
    <div>
      <section className="row-section">
        <div className="container">
          <div className="row">
            <h2 className="text-center">
              <span>List of users</span>Created with{" "}
              <i className="fa fa-heart"></i> by yemiwebby
            </h2>
          </div>

          <div className={"row"}>Hello from React !!!</div>
        </div>
      </section>
    </div>
  );
}
