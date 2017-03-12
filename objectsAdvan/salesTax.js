var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function sumArray (arr) {
  var addArray = 0;
  for (var i in arr) {
    var arrAllPrint = arr[i];
    addArray += arr[i];
  }
  return addArray;
}

function calculateSalesTax(salesData, taxRates) {

//created main object to place answer in
  var ansObject = {};
//created bombardier and telus key with an empty object as the value
  ansObject.Bombardier = {};
  ansObject.Telus = {};

//added total sales for bombardier
  var bombardierObj = companySalesData[1];
  var bombardierSalesArr = bombardierObj.sales;
  var bombToteSales = sumArray(bombardierSalesArr); //ans is 800
  ansObject.Bombardier.totalSales = bombToteSales;

//calc total taxes for bombardier
  var abSalesTax = salesTaxRates.AB; //ans is 0.05
  var ansToteTaxBomb = abSalesTax * bombToteSales; //ans 40
  ansObject.Bombardier.totalTaxes = ansToteTaxBomb;

//add total sales for telus BC
  var telusBcObj = companySalesData[0];
  var telusSalesArrBc = telusBcObj.sales;
  var telustoteSalesBc = sumArray(telusSalesArrBc); //ans 700

//add total sales for telus SK
  var telusSkObj = companySalesData[2];
  var telusSalesArrSk = telusSkObj.sales;
  var telustoteSalesSk = sumArray(telusSalesArrSk); //ans 600

//add total sales for telus BC and SK
  var telusToteSales = telustoteSalesBc + telustoteSalesSk; //ans 1300
  ansObject.Telus.totalSales = telusToteSales;

//grabbing bc taxes from an object
  var bcSalesTax = salesTaxRates.BC; // ans 0.12

//grabbing sk taxes from an object
  var skSalesTax = salesTaxRates.SK; // ans 0.10

//multiply Telus SK sales * SK taxes
  var telusTaxSk = skSalesTax * telustoteSalesSk;

//multiply Telus BC sales * BC taxes
  var telusTaxBC = bcSalesTax * telustoteSalesBc;

//add Telus total sales taxes together
  var telusToteSalesTax = telusTaxSk + telusTaxBC; // ans 144
  ansObject.Telus.totalTaxes = telusToteSalesTax;

//printing final answer to terminal
  console.log(ansObject);

}

var results = calculateSalesTax(companySalesData, salesTaxRates);
return results;

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/