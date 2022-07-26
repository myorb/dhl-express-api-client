# .PickupApi

All URIs are relative to *https://api-mock.dhl.com/mydhlapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expApiPickups**](PickupApi.md#expApiPickups) | **POST** /pickups | Create a DHL Express pickup booking request
[**expApiPickupsCancel**](PickupApi.md#expApiPickupsCancel) | **DELETE** /pickups/{dispatchConfirmationNumber} | Cancel a DHL Express pickup booking request
[**expApiPickupsUpdate**](PickupApi.md#expApiPickupsUpdate) | **PATCH** /pickups/{dispatchConfirmationNumber} | Update pickup information for an existing DHL Express pickup booking request


# **expApiPickups**
> SupermodelIoLogisticsExpressPickupResponse expApiPickups(supermodelIoLogisticsExpressPickupRequest)

The Pickup service creates a DHL Express pickup booking request 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PickupApi(configuration);

let body:.PickupApiExpApiPickupsRequest = {
  // SupermodelIoLogisticsExpressPickupRequest | Details about the requested pickup
  supermodelIoLogisticsExpressPickupRequest: {
    plannedPickupDateAndTime: "2019-08-04T14:00:31GMT+01:00",
    closeTime: "18:00",
    location: "reception",
    locationType: "residence",
    accounts: [
      {
        typeCode: "shipper",
        number: "123456789",
      },
    ],
    specialInstructions: [
      {
        value: "please ring door bell",
        typeCode: "TBD",
      },
    ],
    remark: "remark_example",
    customerDetails: {
      shipperDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
      receiverDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
      bookingRequestorDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
      pickupDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
    },
    shipmentDetails: [
      {
        productCode: "productCode_example",
        localProductCode: "localProductCode_example",
        accounts: [
          {
            typeCode: "shipper",
            number: "123456789",
          },
        ],
        valueAddedServices: [
          {
            serviceCode: "II",
            localServiceCode: "II",
            value: 100,
            currency: "GBP",
            method: "cash",
          },
        ],
        isCustomsDeclarable: true,
        declaredValue: 150,
        declaredValueCurrency: "CZK",
        unitOfMeasurement: "metric",
        shipmentTrackingNumber: "123456790",
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

apiInstance.expApiPickups(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressPickupRequest** | **SupermodelIoLogisticsExpressPickupRequest**| Details about the requested pickup |
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressPickupResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Pickup created |  -  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiPickupsCancel**
> void expApiPickupsCancel()

The Cancel Pickup service can be used to cancel a DHL Express pickup booking request 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PickupApi(configuration);

let body:.PickupApiExpApiPickupsCancelRequest = {
  // string | Shipment pickup confirmation number for example `PRG999126012345`
  dispatchConfirmationNumber: "PRG999126012345",
  // string | Name of the person requesting to cancel the scheduled pickup 
  requestorName: "Fred Brent",
  // string | Provide why scheduled pickup is being cancelled 
  reason: "Unplanned leave",
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

apiInstance.expApiPickupsCancel(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dispatchConfirmationNumber** | [**string**] | Shipment pickup confirmation number for example &#x60;PRG999126012345&#x60; | defaults to undefined
 **requestorName** | [**string**] | Name of the person requesting to cancel the scheduled pickup  | defaults to undefined
 **reason** | [**string**] | Provide why scheduled pickup is being cancelled  | defaults to undefined
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pickup cancelled |  -  |
**400** | Pickup already cancelled or completed / Wrong input parameters |  * Content-Type -  <br>  |
**404** | Pickup not found |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiPickupsUpdate**
> SupermodelIoLogisticsExpressUpdatePickupResponse expApiPickupsUpdate(supermodelIoLogisticsExpressUpdatePickupRequest)

The Update Pickup service can be used to update pickup information for an existing DHL Express pickup booking request 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .PickupApi(configuration);

let body:.PickupApiExpApiPickupsUpdateRequest = {
  // string | Shipment pickup confirmation number for example `PRG999126012345`
  dispatchConfirmationNumber: "PRG999126012345",
  // SupermodelIoLogisticsExpressUpdatePickupRequest | Details about the requested pickup updates
  supermodelIoLogisticsExpressUpdatePickupRequest: {
    dispatchConfirmationNumber: "CBJ201220123456",
    originalShipperAccountNumber: "123456789",
    plannedPickupDateAndTime: "2019-08-04T14:00:31GMT+01:00",
    closeTime: "18:00",
    location: "reception",
    locationType: "residence",
    accounts: [
      {
        typeCode: "shipper",
        number: "123456789",
      },
    ],
    specialInstructions: [
      {
        value: "please ring door bell",
        typeCode: "TBD",
      },
    ],
    remark: "remark_example",
    customerDetails: {
      shipperDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
      receiverDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
      bookingRequestorDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
      pickupDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
        },
        contactInformation: {
          email: "that@before.de",
          phone: "+1123456789",
          mobilePhone: "+60112345678",
          companyName: "Company Name",
          fullName: "John Brew",
        },
      },
    },
    shipmentDetails: [
      {
        productCode: "D",
        localProductCode: "D",
        accounts: [
          {
            typeCode: "shipper",
            number: "123456789",
          },
        ],
        valueAddedServices: [
          {
            serviceCode: "II",
            localServiceCode: "II",
            value: 100,
            currency: "GBP",
            method: "cash",
          },
        ],
        isCustomsDeclarable: true,
        declaredValue: 150,
        declaredValueCurrency: "CZK",
        unitOfMeasurement: "metric",
        shipmentTrackingNumber: "123456790",
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

apiInstance.expApiPickupsUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressUpdatePickupRequest** | **SupermodelIoLogisticsExpressUpdatePickupRequest**| Details about the requested pickup updates |
 **dispatchConfirmationNumber** | [**string**] | Shipment pickup confirmation number for example &#x60;PRG999126012345&#x60; | defaults to undefined
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressUpdatePickupResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pickup updated |  -  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**404** | Pickup not found |  * Content-Type -  <br>  |
**422** | Unprocessable Entity |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


