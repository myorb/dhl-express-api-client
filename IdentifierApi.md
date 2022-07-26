# .IdentifierApi

All URIs are relative to *https://api-mock.dhl.com/mydhlapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expApiIdentifiers**](IdentifierApi.md#expApiIdentifiers) | **GET** /identifiers | Service to allocate identifiers upfront for DHL Express Breakbulk or Loose Break Bulk shipments


# **expApiIdentifiers**
> SupermodelIoLogisticsExpressIdentifierResponse expApiIdentifiers()

Service to allocate identifiers upfront for DHL Express Breakbulk or Loose Break Bulk shipments. Requires authorization to use this service from DHL Express. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .IdentifierApi(configuration);

let body:.IdentifierApiExpApiIdentifiersRequest = {
  // string | DHL Express customer account number
  accountNumber: "123456789",
  // 'SID' | 'PID' | 'ASID3' | 'ASID6' | 'ASID12' | 'ASID24' | 'HUID' | Type of DHL Express identifier to retrieve
  type: "SID",
  // string | Number of identifiers to be retrieved
  size: "1",
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

apiInstance.expApiIdentifiers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountNumber** | [**string**] | DHL Express customer account number | defaults to undefined
 **type** | [**&#39;SID&#39; | &#39;PID&#39; | &#39;ASID3&#39; | &#39;ASID6&#39; | &#39;ASID12&#39; | &#39;ASID24&#39; | &#39;HUID&#39;**]**Array<&#39;SID&#39; &#124; &#39;PID&#39; &#124; &#39;ASID3&#39; &#124; &#39;ASID6&#39; &#124; &#39;ASID12&#39; &#124; &#39;ASID24&#39; &#124; &#39;HUID&#39;>** | Type of DHL Express identifier to retrieve | defaults to undefined
 **size** | [**string**] | Number of identifiers to be retrieved | defaults to undefined
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressIdentifierResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Identifers provided |  -  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


