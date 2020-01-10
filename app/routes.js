const express = require('express');
const router = express.Router();



// Contains any function
function containsAny(source, target) {
  var result = source.filter(function(item) { return target.indexOf(item) > -1 });
  return (result.length > 0);
}



// What nationality are you?
router.post('/get-ready-for-brexit/what-nationality-are-you', function(req, res) {
  res.redirect('where-do-you-live');
});



// Where do you live?
router.post('/get-ready-for-brexit/where-do-you-live',function(req, res) {
  res.redirect('do-you-work-or-study');
});



// Do you work or study?
router.post('/get-ready-for-brexit/do-you-work-or-study', function(req, res) {
  res.redirect('do-you-travel-to-the-eu-for-business');
});



// Do you travel to the EU for business?
router.post('/get-ready-for-brexit/do-you-travel-to-the-eu-for-business', function(req, res) {
  res.redirect('where-do-you-plan-to-travel');
});


// Where do you plan to travel for other purposes, like tourism?
router.post('/get-ready-for-brexit/where-do-you-plan-to-travel', function(req, res) {

  var whereDoYouPlanToTravel = req.session.data['where-do-you-plan-to-travel'];

  if (whereDoYouPlanToTravel != undefined) {

    //Check if it matches the criteria
    var contains = containsAny(whereDoYouPlanToTravel, [
      "To the UK",
      "To Ireland",
      "To another EU country"
    ]);

    if (contains === true) {
      res.redirect('do-you-plan-to-do-either-of-the-following-when-travelling');
    } else {
      res.redirect('do-you-own-or-help-to-run-a-business-or-organisation');
    }

  } else {

    res.redirect('do-you-own-or-help-to-run-a-business-or-organisation');

  }

});


// Do you plan to do either of the following when travelling?
router.post('/get-ready-for-brexit/do-you-plan-to-do-either-of-the-following-when-travelling', function(req, res) {
  res.redirect('do-you-own-or-help-to-run-a-business-or-organisation');
});


// Do you own or help to run a business or organisation?
router.post('/get-ready-for-brexit/do-you-own-or-help-to-run-a-business-or-organisation', function(req, res) {

  var doYouOwnOrHelpToRunABusiness = req.session.data['do-you-own-or-help-to-run-a-business-or-organisation'];

  if (doYouOwnOrHelpToRunABusiness == 'Yes') {
    res.redirect('do-you-employ-anyone-from-another-european-country'); // Go to business flow
  } else {
    res.redirect('results/uk-national'); // UK national results
  }

});


// Do you employ anyone from another European country?
router.post('/get-ready-for-brexit/do-you-employ-anyone-from-another-european-country', function(req, res) {
  res.redirect('do-you-exchange-personal-data-with-another-organisation-in-europe');
});


// Do you exchange personal data with another organisation in Europe?
router.post('/get-ready-for-brexit/do-you-exchange-personal-data-with-another-organisation-in-europe', function(req, res) {
  res.redirect('do-you-get-eu-or-uk-government-funding');
});


// Do you get EU or UK government funding?
router.post('/get-ready-for-brexit/do-you-get-eu-or-uk-government-funding', function(req, res) {
  res.redirect('do-you-sell-your-products-or-services-to-the-public-sector');
});


// Do you sell your products or services to the public sector?
router.post('/get-ready-for-brexit/do-you-sell-your-products-or-services-to-the-public-sector', function(req, res) {
  res.redirect('do-you-use-or-rely-on-intellectual-property-protection');
});


// Do you use or rely on intellectual property (IP) protection?
router.post('/get-ready-for-brexit/do-you-use-or-rely-on-intellectual-property-protection', function(req, res) {
  res.redirect('does-your-business-or-organisation-do-any-of-the-following-activities');
});


// Does your business or organisation do any of the following activities?
router.post('/get-ready-for-brexit/does-your-business-or-organisation-do-any-of-the-following-activities', function(req, res) {
  res.redirect('what-does-your-business-or-organisation-do');
});


// What does your business or organisation do?
router.post('/get-ready-for-brexit/what-does-your-business-or-organisation-do', function(req, res) {
  res.redirect('results/uk-national-and-business'); // UK national and business results
});



// Pre deal
router.get('/brexit/pre-deal/v2', function(req, res) {
  res.render('brexit/pre-deal/index-v2');
});

router.get('/brexit/pre-deal/v3', function(req, res) {
  res.render('brexit/pre-deal/index-v3');
});

router.get('/brexit/pre-deal/v4', function(req, res) {
  res.render('brexit/pre-deal/index-v4');
});

router.get('/brexit/pre-deal/v5', function(req, res) {
  res.render('brexit/pre-deal/index-v5');
});

router.get('/brexit/pre-deal/v6', function(req, res) {
  res.render('brexit/pre-deal/index-v6');
});

router.get('/brexit/pre-deal/v7', function(req, res) {
  res.render('brexit/pre-deal/index-v7');
});

router.get('/brexit/pre-deal/v8', function(req, res) {
  res.render('brexit/pre-deal/index-v8');
});


// Deal
router.get('/brexit/deal/v2', function(req, res) {
  res.render('brexit/deal/index-v2');
});

router.get('/brexit/deal/v3', function(req, res) {
  res.render('brexit/deal/index-v3');
});


module.exports = router;
