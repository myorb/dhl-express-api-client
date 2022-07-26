# .ProductApi

All URIs are relative to *https://api-mock.dhl.com/mydhlapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expApiProducts**](ProductApi.md#expApiProducts) | **GET** /products | Retrieve available DHL Express products for a one piece Shipment


# **expApiProducts**
> SupermodelIoLogisticsExpressProducts expApiProducts()

The GET Products API will return DHL's product capabilities for a certain set of input data.  Using the shipper and receiver address as well as the dimension and weight of the piece belonging to a shipment, this operation returns the available products. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ProductApi(configuration);

let body:.ProductApiExpApiProductsRequest = {
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

apiInstance.expApiProducts(body).then((data:any) => {
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

**SupermodelIoLogisticsExpressProducts**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Products found |  -  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**500** | Process errors |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


