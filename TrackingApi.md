# .TrackingApi

All URIs are relative to *https://api-mock.dhl.com/mydhlapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expApiShipmentsTracking**](TrackingApi.md#expApiShipmentsTracking) | **GET** /shipments/{shipmentTrackingNumber}/tracking | Track a single DHL Express Shipment
[**expApiShipmentsTrackingMulti**](TrackingApi.md#expApiShipmentsTrackingMulti) | **GET** /tracking | Track a single or multiple DHL Express Shipments


# **expApiShipmentsTracking**
> SupermodelIoLogisticsExpressTrackingResponse expApiShipmentsTracking()

The Tracking service retrieves tracking statuses for a single DHL Express Shipment 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrackingApi(configuration);

let body:.TrackingApiExpApiShipmentsTrackingRequest = {
  // string | DHL Express shipment identification number
  shipmentTrackingNumber: "1234567890",
  // 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children' (optional)
  trackingView: "all",
  // 'shipment' | 'piece' | 'all' (optional)
  levelOfDetail: "all",
  // string | Please provide message reference  (optional)
  messageReference: "d0e7832e-5c98-11ea-bc55-0242ac13",
  // string | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 (optional)
  messageReferenceDate: "Wed, 21 Oct 2015 07:28:00 GMT",
  // string (optional)
  acceptLanguage: "eng",
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

apiInstance.expApiShipmentsTracking(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentTrackingNumber** | [**string**] | DHL Express shipment identification number | defaults to undefined
 **trackingView** | [**&#39;all-checkpoints&#39; | &#39;last-checkpoint&#39; | &#39;shipment-details-only&#39; | &#39;advance-shipment&#39; | &#39;bbx-children&#39;**]**Array<&#39;all-checkpoints&#39; &#124; &#39;last-checkpoint&#39; &#124; &#39;shipment-details-only&#39; &#124; &#39;advance-shipment&#39; &#124; &#39;bbx-children&#39;>** |  | (optional) defaults to 'all-checkpoints'
 **levelOfDetail** | [**&#39;shipment&#39; | &#39;piece&#39; | &#39;all&#39;**]**Array<&#39;shipment&#39; &#124; &#39;piece&#39; &#124; &#39;all&#39;>** |  | (optional) defaults to 'shipment'
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **acceptLanguage** | [**string**] |  | (optional) defaults to 'eng'
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressTrackingResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Shipment details found |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Content-Language -  <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**404** | No data found |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiShipmentsTrackingMulti**
> SupermodelIoLogisticsExpressTrackingResponse expApiShipmentsTrackingMulti()

The Tracking service retrieves tracking statuses for a single or multiple DHL Express Shipments 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .TrackingApi(configuration);

let body:.TrackingApiExpApiShipmentsTrackingMultiRequest = {
  // Array<string> | DHL Express shipment identification number (optional)
  shipmentTrackingNumber: [
    "1234567890",
  ],
  // Array<string> | DHL Express shipment piece tracking number (optional)
  pieceTrackingNumber: [
    "pieceTrackingNumber_example",
  ],
  // string | Shipment reference which was provided during the shipment label creation  (optional)
  shipmentReference: "CustomerReference1",
  // string | Shipment reference type which was provided during the shipment label creation  (optional)
  shipmentReferenceType: "CU",
  // string | Shipper DHL Express Account number under which the shipment label was created  (optional)
  shipperAccountNumber: "123456789",
  // string | When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the start of the period.  (optional)
  dateRangeFrom: "2020-05-01",
  // string | When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the end of the period.  (optional)
  dateRangeTo: "2020-06-01",
  // 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children' (optional)
  trackingView: "all",
  // 'shipment' | 'piece' | 'all' (optional)
  levelOfDetail: "all",
  // string | Please provide message reference  (optional)
  messageReference: "d0e7832e-5c98-11ea-bc55-0242ac13",
  // string | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 (optional)
  messageReferenceDate: "Wed, 21 Oct 2015 07:28:00 GMT",
  // string (optional)
  acceptLanguage: "eng",
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

apiInstance.expApiShipmentsTrackingMulti(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentTrackingNumber** | **Array&lt;string&gt;** | DHL Express shipment identification number | (optional) defaults to undefined
 **pieceTrackingNumber** | **Array&lt;string&gt;** | DHL Express shipment piece tracking number | (optional) defaults to undefined
 **shipmentReference** | [**string**] | Shipment reference which was provided during the shipment label creation  | (optional) defaults to undefined
 **shipmentReferenceType** | [**string**] | Shipment reference type which was provided during the shipment label creation  | (optional) defaults to undefined
 **shipperAccountNumber** | [**string**] | Shipper DHL Express Account number under which the shipment label was created  | (optional) defaults to undefined
 **dateRangeFrom** | [**string**] | When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the start of the period.  | (optional) defaults to undefined
 **dateRangeTo** | [**string**] | When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the end of the period.  | (optional) defaults to undefined
 **trackingView** | [**&#39;all-checkpoints&#39; | &#39;last-checkpoint&#39; | &#39;shipment-details-only&#39; | &#39;advance-shipment&#39; | &#39;bbx-children&#39;**]**Array<&#39;all-checkpoints&#39; &#124; &#39;last-checkpoint&#39; &#124; &#39;shipment-details-only&#39; &#124; &#39;advance-shipment&#39; &#124; &#39;bbx-children&#39;>** |  | (optional) defaults to 'all-checkpoints'
 **levelOfDetail** | [**&#39;shipment&#39; | &#39;piece&#39; | &#39;all&#39;**]**Array<&#39;shipment&#39; &#124; &#39;piece&#39; &#124; &#39;all&#39;>** |  | (optional) defaults to 'shipment'
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **acceptLanguage** | [**string**] |  | (optional) defaults to 'eng'
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressTrackingResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Shipment details found |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Content-Language -  <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**404** | No data found |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


