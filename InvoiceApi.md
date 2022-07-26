# .InvoiceApi

All URIs are relative to *https://api-mock.dhl.com/mydhlapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expApiShipmentsInvoiceData**](InvoiceApi.md#expApiShipmentsInvoiceData) | **POST** /invoices/upload-invoice-data | Upload Commercial invoice data


# **expApiShipmentsInvoiceData**
> SupermodelIoLogisticsExpressUploadInvoiceDataResponse expApiShipmentsInvoiceData(supermodelIoLogisticsExpressUploadInvoiceDataRequestSID)

## Upload invoice data The upload invoice data service can be used to upload Commerical Invoice data without Shipment Identification Number for your DHL Express shipment. Customer can provide Commercial Invoice data before Shipment Data via Create Shipment flow or vice versa.  Important Note: UploadInvoiceData service is not enabled by default and must be requested per customer.Use of this service is only enabled on exceptional basis and DHL Express recommends to submit shipment requests together with a commercial invoice data. To enable use of UploadInvoiceData service, please contact your DHL Express IT representative. To use UploadInvoiceData service, it is required that \"PM\" service code is provided in MyDHL API Create Shipment request. \"PM\" service code is not enabled by default for the customers, and needs to be enabled upon request.  When Shipment is created via MyDHL API Create Shipment service before uploading the Commercial Invoice (CIN) data,it is mandatory to provide the Shipment Identification Number as received in MyDHL API Create Shipment service Response. When Commercial Invoice (CIN) data is uploaded prior to creating a shipment via MyDHL API Create Shipment service, it is  mandatory to provide Invoice Reference Number with Invoice Reference Type value \"CU\" and Shipper Account Number.  These elements are mandatory to facilitate an effective data merge of the Commercial Invoice (CIN) data with Shipment Data. As an output customer will receive Notification element value '0' on successful upload of Commercial Invoice (CIN) data. DHL backend application performs the subsequent data merging process of the Shipment Data and Commercial Invoice data. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .InvoiceApi(configuration);

let body:.InvoiceApiExpApiShipmentsInvoiceDataRequest = {
  // SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID | Details about the Commercial Invoice data to be uploaded
  supermodelIoLogisticsExpressUploadInvoiceDataRequestSID: {
    shipmentTrackingNumber: "123456790",
    plannedShipDate: "2020-04-20",
    accounts: [
      {
        typeCode: "shipper",
        number: "123456789",
      },
    ],
    content: {
      exportDeclaration: [
        {
          lineItems: [
            {
              number: 1,
              description: "line item description",
              price: 150,
              quantity: {
                value: 1,
                unitOfMeasurement: "BOX",
              },
              commodityCodes: [
                {
                  typeCode: "outbound",
                  value: "HS1234567890",
                },
              ],
              exportReasonType: "permanent",
              manufacturerCountry: "CZ",
              weight: ,
              isTaxesPaid: true,
              customerReferences: [
                {
                  typeCode: "AFE",
                  value: "customerref1",
                },
              ],
              customsDocuments: [
                {
                  typeCode: "972",
                  value: "custdoc456",
                },
              ],
            },
          ],
          invoice: {
            number: "12345-ABC",
            date: "2021-03-18",
            _function: "import",
            customerReferences: [
              {
                typeCode: "CU",
                value: "custref112",
              },
            ],
          },
          remarks: [
            {
              value: "declaration remark",
            },
          ],
          additionalCharges: [
            {
              value: 10,
              typeCode: "admin",
            },
          ],
          placeOfIncoterm: "port of departure or destination details",
          recipientReference: "recipient reference",
          exporter: {
            id: "123",
            code: "EXPCZ",
          },
          exportReasonType: "permanent",
          shipmentType: "personal",
          customsDocuments: [
            {
              typeCode: "972",
              value: "custdoc445",
            },
          ],
          incoterm: "DAP",
        },
      ],
      currency: "EUR",
      unitOfMeasurement: "metric",
    },
    outputImageProperties: {
      imageOptions: [
        {
          typeCode: "invoice",
          templateName: "COMMERCIAL_INVOICE_P_10",
          isRequested: true,
        },
      ],
    },
    customerDetails: {
      sellerDetails: {
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
        typeCode: "business",
        registrationNumbers: [
          {
            typeCode: "VAT",
            number: "CZ123456789",
            issuerCountryCode: "CZ",
          },
        ],
      },
      buyerDetails: {
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
        registrationNumbers: [
          {
            typeCode: "VAT",
            number: "CZ123456789",
            issuerCountryCode: "CZ",
          },
        ],
        typeCode: "business",
      },
      importerDetails: {
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
        registrationNumbers: [
          {
            typeCode: "VAT",
            number: "CZ123456789",
            issuerCountryCode: "CZ",
          },
        ],
        typeCode: "business",
      },
      exporterDetails: {
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
        registrationNumbers: [
          {
            typeCode: "VAT",
            number: "CZ123456789",
            issuerCountryCode: "CZ",
          },
        ],
        typeCode: "business",
      },
    },
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

apiInstance.expApiShipmentsInvoiceData(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressUploadInvoiceDataRequestSID** | **SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID**| Details about the Commercial Invoice data to be uploaded |
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressUploadInvoiceDataResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | invoice data uploaded |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Content-Language -  <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**500** | Process errors |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


