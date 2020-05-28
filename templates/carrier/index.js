"use strict";

module.exports = {
  name: "<%- _appName %>",
  description: "<%- pjson.description %>",
  logo: "./logo.svg",
  websiteURL: "http://www.carier-site.com",
  manifestLocations: "single_location",
  manifestShipments: "explicit_shipments",
  connectionForm: "./forms/connect.js",
  settingsForm: "./forms/settings.js",
  connect: "./methods/connect.js",
  cancelPickups: "./methods/cancel-pickups.js",
  cancelShipments: "./methods/cancel-shipments.js",
  createManifest: "./methods/create-manifest.js",
  createShipment: "./methods/create-shipment.js",
  rateShipment: "./methods/rate-shipment.js",
  schedulePickup: "./methods/schedule-pickup.js",
  trackShipment: "./methods/track-shipment.js",
  deliveryServices: [
    "./definitions/example-delivery-service.<%- _definitionExt %>",
  ],
  pickupServices: [],
};
