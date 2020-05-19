import { CarrierDefinition } from "@shipengine/integration-platform-sdk";

const carrier: CarrierDefinition = {
  id: "<%- _uuidv4 %>",
  name: "<%- pjson.name %>",
  description: "<%- pjson.description %>",
  websiteURL: "https://example-carrier.com",
  logo: "./logo.svg",
  cancelPickups: import("./methods/cancel-pickups"),
  cancelShipments: import("./methods/cancel-shipments"),
  createManifest: import("./methods/create-manifest"),
  createShipment: import("./methods/create-shipment"),
  rateShipment: import("./methods/rate-shipment"),
  schedulePickup: import("./methods/schedule-pickup"),
  trackShipment: import("./methods/track-shipment"),
  deliveryServices: [import("./definitions/example-delivery-service")],
  pickupServices: [],
};

export default carrier;