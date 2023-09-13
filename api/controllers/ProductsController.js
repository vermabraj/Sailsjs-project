/**
 * ProductsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getProducts: async function (req, res) {
    const latestProduct = await Products.find()
      .sort("createdAt DESC")
      .limit(10);
    return res.json(latestProduct);
  },

  create: async function (req, res) {
    try {
      const productData = {
        planname: req.body.planname,
        plancode: req.body.plancode,
        billinginterval: req.body.billinginterval,
        billeveryperiod: req.body.billeveryperiod,
        paymentterm: req.body.select_payment_term,
        billeveryintervalcycle: req.body.billeveryintervalcycle,
        flatfeepricingtype: req.body.flatfeepricingtype,
        perunitflatfee: req.body.perunitflatfee,

        setupfee: req.body.setupfee,
        addsetupfee: req.body.addsetupfee,
        addsetuptype: req.body.addsetuptype,
        trialplan: req.body.trialplan,
        trialperiodvalid: req.body.trialperiodvalid,

        addtrialfee: req.body.addtrialfee,
        paymentgatewaytype: req.body.paymentgatewaytype,
        planStatus: req.body.planStatus,
        plandescription: req.body.plandescription,
        planmetadata: req.body.planmetadata,
        redirecturlafterpayment: req.body.redirecturlafterpayment,
        paymentfailedsettings: req.body.paymentfailedsettings,
        planquantity: req.body.planquantity,
      };

      const newProduct = await Products.create(productData).fetch();
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.serverError(error.message);
    }
  },


  
  delete: async function (req, res) {
    try {
      if (!req.params.id) {
        return res.badRequest({ error: "Missing product id" });
      }
      await Products.destroy({ id: req.params.id });
      return res.ok({ message: "Product deleted successfully" });
    } catch (err) {
      return res.serverError(err);
    }
  },
  update: async function (req, res) {
    const productId = req.params.id;
    const updatedData = req.body;

    try {
      if (!productId) {
        return res.badRequest({ error: "Product ID is required" });
      }
      const updatedProduct = await Products.update({ id: productId })
        .set(updatedData)
        .fetch();

      if (updatedProduct.length === 0) {
        return res.notFound({ error: "Product not found" });
      }

      return res.json(updatedProduct[0]);
    } catch (err) {
      return res.serverError(err);
    }
  },
};
