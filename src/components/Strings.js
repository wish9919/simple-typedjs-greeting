import React from "react";
import { Colors } from "../constants/Colors";

export const InitialStrings = ({ id }) => (
  <div id={id}>
    <div className="text-initial">
      Hey <span style={{ color: Colors.primary, fontSize: 40 }}>Dear, </span>I
      have to say something. Can you click this
    </div>
  </div>
);

export const SecondStrings = ({ id }) => (
  <div id={id}>
    <p>
      This is the greeting <span>❤️</span>
    </p>
    <p>Hello this is typed js greeting</p>
    <p>
      ⚛️ Learn React.js🔥 <span></span>
    </p>
  </div>
);
