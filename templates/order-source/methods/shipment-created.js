"use strict";

/**
 * Called when shipment is created
 */
async function shipmentCreated(transaction, shipment) {
  throw new Error("NotImplementedError");
  // STEP 1: Validation
  // STEP 2: Create the data that the carrier's API expects
  // STEP 3: Call the carrier's API
  // Step 4: Create the output data that ShipEngine expects
}

module.exports = shipmentCreated;