import React from "react";
import Favourite from "../ReusableComponent/favourite";

export default function Application() {
  return (
    <div className="card text-center" style={{ width: "25rem" }}>
      <img
        style={{ width: "25rem" }}
        src="https://images.squarespace-cdn.com/content/5e5ef83580f21567de832a00/1583282857577-ADCABUKC9AJW2LRALDJ6/Asset+32211+copy+2.png?format=1500w&content-type=image%2Fpng"
      />

      <img
        className="card-img-top"
        src="https://images.squarespace-cdn.com/content/v1/5e5ef83580f21567de832a00/1592691415324-CHU0Q5W81T6D25GQ47YK/ke17ZwdGBToddI8pDm48kBL7y0DpH_e0bbX7enFn0u57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UYiE72c0x0Bss1DOK-Q-IFCTQ7lpxv4OiNGPJvPTLF2mZDqXZYzu2fuaodM4POSZ4w/remora+with+trash.jpg?format=1500w"
        alt="Card image cap"
      />
      <div className="card-body">
        <h5 className="card-title">Remora Robotics</h5>
        <p className="card-text">
          The drone that cleans your waterway for you. Think of a Roomba on
          water.
        </p>
      </div>

      <div className="card-body">
        <a href="https://www.remorarobotics.com" className="card-link">
          Click for More Details
        </a>
        <Favourite/>
      </div>
    </div>
  );
}
