# .RatingApi

All URIs are relative to *https://api-mock.dhl.com/mydhlapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expApiLandedCost**](RatingApi.md#expApiLandedCost) | **POST** /landed-cost | Landed Cost
[**expApiRates**](RatingApi.md#expApiRates) | **GET** /rates | Retrieve Rates for a one piece Shipment
[**expApiRatesMany**](RatingApi.md#expApiRatesMany) | **POST** /rates | Retrieve Rates for Multi-piece Shipments


# **expApiLandedCost**
> SupermodelIoLogisticsExpressRates expApiLandedCost(supermodelIoLogisticsExpressLandedCostRequest)

The Landed Cost section allows further information around products being sold to be provided. In return the duty, tax and shipping charges are calculated in real time and provides transparency about any extra costs the buyer may have to pay before they reach them. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RatingApi(configuration);

let body:.RatingApiExpApiLandedCostRequest = {
  // SupermodelIoLogisticsExpressLandedCostRequest | Details about the requested shipment
  supermodelIoLogisticsExpressLandedCostRequest: {
    customerDetails: {
      shipperDetails: {
        postalCode: "14800",
        cityName: "Prague",
        countryCode: "CZ",
        provinceCode: "CZ",
        addressLine1: "addres1",
        addressLine2: "addres2",
        addressLine3: "addres3",
        countyName: "Central Bohemia",
      },
      receiverDetails: {
        postalCode: "14800",
        cityName: "Prague",
        countryCode: "CZ",
        provinceCode: "CZ",
        addressLine1: "addres1",
        addressLine2: "addres2",
        addressLine3: "addres3",
        countyName: "Central Bohemia",
      },
    },
    accounts: [
      {
        typeCode: "shipper",
        number: "123456789",
      },
    ],
    productCode: "P",
    localProductCode: "P",
    unitOfMeasurement: "metric",
    currencyCode: "CZK",
    isCustomsDeclarable: true,
    isDTPRequested: true,
    isInsuranceRequested: false,
    getCostBreakdown: true,
    charges: [
      {
        typeCode: "insurance",
        amount: 1250,
        currencyCode: "CZK",
      },
    ],
    shipmentPurpose: "personal",
    transportationMode: "air",
    merchantSelectedCarrierName: "DHL",
    packages: [
      {
        typeCode: "3BX",
        weight: 10.5,
        dimensions: {
          length: 25,
          width: 35,
          height: 15,
        },
      },
    ],
    items: [
      {
        number: 1,
        name: "KNITWEAR COTTON",
        description: "KNITWEAR 100% COTTON REDUCTION PRICE FALL COLLECTION",
        manufacturerCountry: "CN",
        partNumber: "12345555",
        quantity: 2,
        quantityType: "prt",
        unitPrice: 120,
        unitPriceCurrencyCode: "EUR",
        customsValue: 120,
        customsValueCurrencyCode: "EUR",
        commodityCode: "6110129090",
        weight: 5,
        weightUnitOfMeasurement: "metric",
        category: "204",
        brand: "SHOE 1",
        goodsCharacteristics: [
          {
            typeCode: "IMPORTER",
            value: "Registered",
          },
        ],
        additionalQuantityDefinitions: [
          {
            typeCode: "DPR",
            amount: 2,
          },
        ],
        estimatedTariffRateType: "default_rate",
      },
    ],
    getTariffFormula: true,
    getQuotationID: true,
  },
  // string | Please provide message reference  (optional)
  messageReference: "d0e7832e-5c98-11ea-bc55-0242ac13",
  // string | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 (optional)
  messageReferenceDate: "Wed, 21 Oct 2015 07:28:00 GMT",
  // string | Please provide name of the plugin (applicable to 3PV only)  (optional)
  pluginName: " ",
  // string | Please provide version of the plugin (applicable to 3PV only)  (optional)
  pluginVersion: " ",
  // string | Please provide name of the shipping platform(applicable to 3PV only)  (optional)
  shippingSystemPlatformName: " ",
  // string | Please provide version of the shipping platform (applicable to 3PV only)  (optional)
  shippingSystemPlatformVersion: " ",
  // string | Please provide name of the webstore platform (applicable to 3PV only)  (optional)
  webstorePlatformName: " ",
  // string | Please provide version of the webstore platform (applicable to 3PV only)  (optional)
  webstorePlatformVersion: " ",
};

apiInstance.expApiLandedCost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressLandedCostRequest** | **SupermodelIoLogisticsExpressLandedCostRequest**| Details about the requested shipment |
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressRates**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Landed cost |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Quotation-Id - Quotation ID if getQuotationID is requested <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**500** | Process errors |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiRates**
> SupermodelIoLogisticsExpressRates expApiRates()

The Rate request will return DHL's product capabilities and prices (where applicable) based on the input data. Using the shipper and receiver address as well as the dimension and weights of the pieces belonging to a shipment, this operation returns the available products including the shipping price (where applicable) 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RatingApi(configuration);

let body:.RatingApiExpApiRatesRequest = {
  // string | DHL Express customer account number
  accountNumber: "123456789",
  // string | A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
  originCountryCode: "CZ",
  // string | Text specifying the city name
  originCityName: "Prague",
  // string | A short text string code (see values defined in ISO 3166) specifying the shipment destination country. https://gs1.org/voc/Country, Alpha-2 Code
  destinationCountryCode: "CZ",
  // string | Text specifying the city name
  destinationCityName: "Prague",
  // number | Gross weight of the shipment including packaging.
  weight: 5,
  // number | Total length of the shipment including packaging.
  length: 15,
  // number | Total width of the shipment including packaging.
  width: 10,
  // number | Total height of the shipment including packaging.
  height: 5,
  // string | Timestamp represents the date you plan to ship your prospected shipment 
  plannedShippingDate: "2020-02-26",
  // boolean
  isCustomsDeclarable: false,
  // 'metric' | 'imperial' | The UnitOfMeasurement node conveys the unit of measurements used in the operation. This single value corresponds to the units of weight and measurement which are used throughout the message processing. 
  unitOfMeasurement: "metric",
  // string | Text specifying the postal code for an address. https://gs1.org/voc/postalCode (optional)
  originPostalCode: "14800",
  // string | Text specifying the postal code for an address. https://gs1.org/voc/postalCode (optional)
  destinationPostalCode: "14800",
  // boolean | When set to true and there are no products available for given plannedShippingDate then products available for the next possible pickup date are returned  (optional)
  nextBusinessDay: false,
  // string | Please provide message reference  (optional)
  messageReference: "d0e7832e-5c98-11ea-bc55-0242ac13",
  // string | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 (optional)
  messageReferenceDate: "Wed, 21 Oct 2015 07:28:00 GMT",
  // string | Please provide name of the plugin (applicable to 3PV only)  (optional)
  pluginName: " ",
  // string | Please provide version of the plugin (applicable to 3PV only)  (optional)
  pluginVersion: " ",
  // string | Please provide name of the shipping platform(applicable to 3PV only)  (optional)
  shippingSystemPlatformName: " ",
  // string | Please provide version of the shipping platform (applicable to 3PV only)  (optional)
  shippingSystemPlatformVersion: " ",
  // string | Please provide name of the webstore platform (applicable to 3PV only)  (optional)
  webstorePlatformName: " ",
  // string | Please provide version of the webstore platform (applicable to 3PV only)  (optional)
  webstorePlatformVersion: " ",
};

apiInstance.expApiRates(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountNumber** | [**string**] | DHL Express customer account number | defaults to undefined
 **originCountryCode** | [**string**] | A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code | defaults to undefined
 **originCityName** | [**string**] | Text specifying the city name | defaults to undefined
 **destinationCountryCode** | [**string**] | A short text string code (see values defined in ISO 3166) specifying the shipment destination country. https://gs1.org/voc/Country, Alpha-2 Code | defaults to undefined
 **destinationCityName** | [**string**] | Text specifying the city name | defaults to undefined
 **weight** | [**number**] | Gross weight of the shipment including packaging. | defaults to undefined
 **length** | [**number**] | Total length of the shipment including packaging. | defaults to undefined
 **width** | [**number**] | Total width of the shipment including packaging. | defaults to undefined
 **height** | [**number**] | Total height of the shipment including packaging. | defaults to undefined
 **plannedShippingDate** | [**string**] | Timestamp represents the date you plan to ship your prospected shipment  | defaults to undefined
 **isCustomsDeclarable** | [**boolean**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** |  | defaults to undefined
 **unitOfMeasurement** | [**&#39;metric&#39; | &#39;imperial&#39;**]**Array<&#39;metric&#39; &#124; &#39;imperial&#39;>** | The UnitOfMeasurement node conveys the unit of measurements used in the operation. This single value corresponds to the units of weight and measurement which are used throughout the message processing.  | defaults to undefined
 **originPostalCode** | [**string**] | Text specifying the postal code for an address. https://gs1.org/voc/postalCode | (optional) defaults to undefined
 **destinationPostalCode** | [**string**] | Text specifying the postal code for an address. https://gs1.org/voc/postalCode | (optional) defaults to undefined
 **nextBusinessDay** | [**boolean**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | When set to true and there are no products available for given plannedShippingDate then products available for the next possible pickup date are returned  | (optional) defaults to undefined
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressRates**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rates found |  -  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**500** | Process errors |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiRatesMany**
> SupermodelIoLogisticsExpressRates expApiRatesMany(supermodelIoLogisticsExpressRateRequest)

The Rate request will return DHL's product capabilities and prices (where applicable) based on the input data. Using the shipper and receiver address as well as the dimension and weights of the pieces belonging to a shipment, this operation returns the available products including the shipping price (where applicable) 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .RatingApi(configuration);

let body:.RatingApiExpApiRatesManyRequest = {
  // SupermodelIoLogisticsExpressRateRequest | Details about the requested shipment
  supermodelIoLogisticsExpressRateRequest: {
    customerDetails: {
      shipperDetails: {
        postalCode: "14800",
        cityName: "Prague",
        countryCode: "CZ",
        provinceCode: "CZ",
        addressLine1: "addres1",
        addressLine2: "addres2",
        addressLine3: "addres3",
        countyName: "Central Bohemia",
      },
      receiverDetails: {
        postalCode: "14800",
        cityName: "Prague",
        countryCode: "CZ",
        provinceCode: "CZ",
        addressLine1: "addres1",
        addressLine2: "addres2",
        addressLine3: "addres3",
        countyName: "Central Bohemia",
      },
    },
    accounts: [
      {
        typeCode: "shipper",
        number: "123456789",
      },
    ],
    productCode: "P",
    localProductCode: "P",
    valueAddedServices: [
      {
        serviceCode: "II",
        localServiceCode: "II",
        value: 100,
        currency: "GBP",
        method: "cash",
      },
    ],
    productsAndServices: [
      {
        productCode: "P",
        localProductCode: "P",
        valueAddedServices: [
          {
            serviceCode: "II",
            localServiceCode: "II",
            value: 100,
            currency: "GBP",
            method: "cash",
          },
        ],
      },
    ],
    payerCountryCode: "CZ",
    plannedShippingDateAndTime: "2020-03-24T13:00:00GMT+00:00",
    unitOfMeasurement: "metric",
    isCustomsDeclarable: false,
    monetaryAmount: [
      {
        typeCode: "declaredValue",
        value: 100,
        currency: "CZK",
      },
    ],
    requestAllValueAddedServices: false,
    returnStandardProductsOnly: false,
    nextBusinessDay: false,
    productTypeCode: "all",
    packages: [
      {
        typeCode: "3BX",
        weight: 10.5,
        dimensions: {
          length: 25,
          width: 35,
          height: 15,
        },
      },
    ],
  },
  // string | Please provide message reference  (optional)
  messageReference: "d0e7832e-5c98-11ea-bc55-0242ac13",
  // string | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 (optional)
  messageReferenceDate: "Wed, 21 Oct 2015 07:28:00 GMT",
  // string | Please provide name of the plugin (applicable to 3PV only)  (optional)
  pluginName: " ",
  // string | Please provide version of the plugin (applicable to 3PV only)  (optional)
  pluginVersion: " ",
  // string | Please provide name of the shipping platform(applicable to 3PV only)  (optional)
  shippingSystemPlatformName: " ",
  // string | Please provide version of the shipping platform (applicable to 3PV only)  (optional)
  shippingSystemPlatformVersion: " ",
  // string | Please provide name of the webstore platform (applicable to 3PV only)  (optional)
  webstorePlatformName: " ",
  // string | Please provide version of the webstore platform (applicable to 3PV only)  (optional)
  webstorePlatformVersion: " ",
};

apiInstance.expApiRatesMany(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressRateRequest** | **SupermodelIoLogisticsExpressRateRequest**| Details about the requested shipment |
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressRates**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rates found |  -  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**500** | Process errors |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


