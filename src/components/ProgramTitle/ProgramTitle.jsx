import "./ProgramTitle.css";
import React from "react";

const ProgramTitle = () => {
  return (
    <div className="program-tiles">
      <div>
        <img src="./Images/check.png" alt="" />
        <p>Affiliate partner program</p>
        <p style={{ color: "rgba(0, 0, 0, 0.63)" }}>
          Bring value to your customers with a world-class in-app messaging tool that increases user-to-user engagement
          and retention. Get incentivized for referring CometChat to any of your customers.
        </p>
      </div>
      <div>
        <img src="./Images/code-sq-logo.png" alt="" />
        <p>Technology partner program</p>
        <p style={{ color: "rgba(0, 0, 0, 0.63)" }}>
          Development teams can use our plug and play solution to build top class chat solutions for their clients using
          our SDKs and APIs. It’s simple, safe and secure!
        </p>
      </div>
      <div>
        <img src="./Images/sun-set.png" alt="" />
        <p>Start up growth program</p>
        <p style={{ color: "rgba(0, 0, 0, 0.63)" }}>
          We help incubators, accelerators, co-working space that foster an ecosystem of start-ups. This program also
          enables VCs to accelerate the growth of their portfolio companies.
        </p>
      </div>
    </div>
  );
};

export default ProgramTitle;
