import React from "react";

import Button from "@material-ui/core/Button";

export default function Research() {
  return (
    <div>
      <Button
        color="primary"
        type="button"
        variant="contained"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Click for more info
      </Button>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Error
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              This page is currently in development, please check back later!{" "}
            </div>
            <div class="modal-footer">
              <Button
                color="default"
                type="button"
                variant="contained"
                data-dismiss="modal"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
