import React from "react";
import Modal from "../ReusableComponent/modal";

export default function RepairForm({ datas }) {
  return (
    <div>
      <h2 class="text-white">Which Device do you want to Repair?</h2>
      <div className="form-group">
        <label htmlFor="label"></label>
        <select className="form-control" id="label">
          <option value="device">Nvidia Jetson Nano</option>
          <option value="device">Nvidia Jetson Xavier NX</option>
          <option value="device">Raspberry Pi 4</option>
          <option value="device">Banana PI F2P</option>
          <option value="device">ASUS Tinker Board S</option>
          <option value="device">ASUS Tinker Edge T</option>
        </select>
      </div>
      <h1 class="text-white">- - -</h1>

      <h2 class="text-white">What's the problem of this device?</h2>
      <div className="form-group">
        <label htmlFor="label"></label>
        <select className="form-control" id="label">
          <option value="Problem">Charger Missing</option>
          <option value="Problem">Cooling Fan Malfunction</option>
          <option value="Problem">Device Broken</option>
          <option value="Problem">Other</option>
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      
      >
        Submit
      </button>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Directions</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Please mail your device to 325 W Adams Blvd, we will take it from there!
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
