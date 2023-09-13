module.exports = {
  attributes: {
    planname: {
      type: "string",
      required: true,
    },
    plancode: {
      type: "string",
      required: true,
    },
    billinginterval: {
      type: "string",
    },
    billeveryperiod: {
      type: "string",
    },
    billeveryintervalcycle: {
      type: "number",
    },
    pricingmodel: {
      type: "string",
    },
    perunitflatfee: {
      type: "number",
    },
    pricedetails: {
      type: "string",
    },
    hassetupfee: {
      type: "string",
    },
    setupfee: {
      type: "number",
    },
    addsetuptype: {
      type: "string",
    },
    trialplan: {
      type: "boolean",
    },
    trialperiodvalid: {
      type: "number",
    },

    addtrialfee: {
      type: "number",
    },
    paymentgatewaytype: {
      type: "string",
    },
    selectedpaymentgateways: {
      type: "string",
    },
    subscriptionstatusafterTerm: {
      type: "string",
    },
    paymentterm: {
      type: "string",
    },
    plandescription: {
      type: "string",
    },
    planmetadata: {
      type: "json",
    },
    planStatus: {
      type: "string",
    },
    redirecturlafterpayment: {
      type: "string",
    },
    paymentfailedsettings: {
      type: "string",
    },
    planquantity: {
      type: "string",
    },
    flatfeepricingtype: {
      type: "string",
    },
  },
};
