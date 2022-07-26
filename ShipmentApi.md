# .ShipmentApi

All URIs are relative to *https://api-mock.dhl.com/mydhlapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**expApiShipments**](ShipmentApi.md#expApiShipments) | **POST** /shipments | Create Shipment
[**expApiShipmentsDocumentimage**](ShipmentApi.md#expApiShipmentsDocumentimage) | **GET** /shipments/{shipmentTrackingNumber}/get-image | Get Image
[**expApiShipmentsEpod**](ShipmentApi.md#expApiShipmentsEpod) | **GET** /shipments/{shipmentTrackingNumber}/proof-of-delivery | Electronic Proof of Delivery
[**expApiShipmentsImgUpload**](ShipmentApi.md#expApiShipmentsImgUpload) | **PATCH** /shipments/{shipmentTrackingNumber}/upload-image | Upload Paperless Trade shipment (PLT) images of previously created shipment.
[**expApiShipmentsInvoiceDataAwb**](ShipmentApi.md#expApiShipmentsInvoiceDataAwb) | **PATCH** /shipments/{shipmentTrackingNumber}/upload-invoice-data | Upload Commercial Invoice data for your DHL Express shipment


# **expApiShipments**
> SupermodelIoLogisticsExpressCreateShipmentResponse expApiShipments(supermodelIoLogisticsExpressCreateShipmentRequest)

## Create Shipment The ShipmentRequest Operation will allow you to generate an AWB number and piece IDs, generate a shipping label, transmit manifest shipment detail to DHL, and optionally book a courier for the pickup of a shipment. The key elements in the response of the Shipment Request will be a base64 encoded PDF label and the Shipment and Piece identification numbers, which you can use for tracking on the DHL web site. While the RateRequest and ShipmentRequest services can be used independently, DHL recommends the use of RateRequest to first validate the products available for the shipper/receiver. The global product codes which are output during the RateResponse can be used directly as input into the Shipment Request, as both perform similar validations in terms of service capability. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShipmentApi(configuration);

let body:.ShipmentApiExpApiShipmentsRequest = {
  // SupermodelIoLogisticsExpressCreateShipmentRequest | Details about the shipment to be created
  supermodelIoLogisticsExpressCreateShipmentRequest: {
    plannedShippingDateAndTime: "2019-08-04T14:00:31GMT+01:00",
    pickup: {
      isRequested: false,
      closeTime: "18:00",
      location: "reception",
      specialInstructions: [
        {
          value: "please ring door bell",
          typeCode: "TBD",
        },
      ],
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
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
          },
        ],
        typeCode: "business",
      },
      pickupRequestorDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
          },
        ],
        typeCode: "business",
      },
    },
    productCode: "D",
    localProductCode: "D",
    getRateEstimates: false,
    accounts: [
      {
        typeCode: "shipper",
        number: "123456789",
      },
    ],
    valueAddedServices: [
      {
        serviceCode: "II",
        value: 100,
        currency: "GBP",
        method: "cash",
        dangerousGoods: [
          ,
        ],
      },
    ],
    outputImageProperties: {
      printerDPI: 300,
      customerBarcodes: [
        {
          content: "barcode content",
          textBelowBarcode: "text below barcode",
          symbologyCode: "93",
        },
      ],
      customerLogos: [
        {
          fileFormat: "PNG",
          content: "base64 encoded image",
        },
      ],
      encodingFormat: "pdf",
      imageOptions: [
        ,
      ],
      splitTransportAndWaybillDocLabels: true,
      allDocumentsInOneImage: true,
      splitDocumentsByPages: true,
      splitInvoiceAndReceipt: true,
      receiptAndLabelsInOneImage: true,
    },
    customerReferences: [
      {
        value: "Customer reference",
        typeCode: "CU",
      },
    ],
    identifiers: [
      {
        typeCode: "shipmentId",
        value: "1234567890",
        dataIdentifier: "00",
      },
    ],
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
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
          },
        ],
        typeCode: "business",
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
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
          },
        ],
        typeCode: "business",
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
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
        },
        contactInformation: {
          email: "buyer@domain.com",
          phone: "+44123456789",
          mobilePhone: "+42123456789",
          companyName: "Customer Company Name",
          fullName: "Mark Companer",
        },
        registrationNumbers: [
          {
            typeCode: "VAT",
            number: "CZ123456789",
            issuerCountryCode: "CZ",
          },
        ],
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
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
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
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
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
          },
        ],
        typeCode: "business",
      },
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
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
          },
        ],
        typeCode: "business",
      },
      payerDetails: {
        postalAddress: {
          postalCode: "14800",
          cityName: "Prague",
          countryCode: "CZ",
          provinceCode: "CZ",
          addressLine1: "V Parku 2308/10",
          addressLine2: "addres2",
          addressLine3: "addres3",
          countyName: "Central Bohemia",
          provinceName: "Central Bohemia",
          countryName: "Czech Republic",
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
        bankDetails: [
          {
            name: "Russian Bank Name",
            settlementLocalCurrency: "RUB",
            settlementForeignCurrency: "USD",
          },
        ],
        typeCode: "business",
      },
    },
    content: {
      packages: [
        {
          typeCode: "2BP",
          weight: 22.501,
          dimensions: {
            length: 15.001,
            width: 15.001,
            height: 40.001,
          },
          customerReferences: [
            {
              value: "Customer reference",
              typeCode: "CU",
            },
          ],
          identifiers: [
            {
              typeCode: "shipmentId",
              value: "1234567890",
              dataIdentifier: "00",
            },
          ],
          description: "Piece content description",
          labelBarcodes: [
            {
              position: "left",
              symbologyCode: "93",
              content: "content_example",
              textBelowBarcode: "text below left barcode",
            },
          ],
          labelText: [
            {
              position: "left",
              caption: "text caption",
              value: "text value",
            },
          ],
          labelDescription: "bespoke label description",
        },
      ],
      isCustomsDeclarable: true,
      declaredValue: 150,
      declaredValueCurrency: "CZK",
      exportDeclaration: {
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
            exportControlClassificationNumber: "US123456789",
            weight: {
              netValue: 10,
              grossValue: 10,
            },
            isTaxesPaid: true,
            additionalInformation: [
              "additionalInformation_example",
            ],
            customerReferences: [
              {
                typeCode: "AFE",
                value: "custref123",
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
          date: new Date('Wed Mar 18 00:00:00 UTC 2020').toISOString().split('T')[0];,
          signatureName: "Brewer",
          signatureTitle: "Mr.",
          signatureImage: "Base64 encoded image",
          instructions: [
            "instructions_example",
          ],
          customerDataTextEntries: [
            "customerDataTextEntries_example",
          ],
          totalNetWeight: 0,
          totalGrossWeight: 0,
          customerReferences: [
            {
              typeCode: "CU",
              value: "custref112",
            },
          ],
          termsOfPayment: "100 days",
        },
        remarks: [
          {
            value: "declaration remark",
          },
        ],
        additionalCharges: [
          {
            value: 10,
            caption: "fee",
            typeCode: "freight",
          },
        ],
        destinationPortName: "port details",
        placeOfIncoterm: "port of departure or destination details",
        payerVATNumber: "12345ED",
        recipientReference: "recipient reference",
        exporter: {
          id: "123",
          code: "EXPCZ",
        },
        packageMarks: "marks",
        declarationNotes: [
          {
            value: "up to three declaration notes",
          },
        ],
        exportReference: "export reference",
        exportReason: "export reason",
        exportReasonType: "permanent",
        licenses: [
          {
            typeCode: "export",
            value: "license",
          },
        ],
        shipmentType: "personal",
        customsDocuments: [
          {
            typeCode: "972",
            value: "custdoc445",
          },
        ],
      },
      description: "shipment description",
      uSFilingTypeValue: "12345",
      incoterm: "DAP",
      unitOfMeasurement: "metric",
    },
    documentImages: [
      {
        typeCode: "INV",
        imageFormat: "PDF",
        content: "base64 encoded image",
      },
    ],
    onDemandDelivery: ,
    requestOndemandDeliveryURL: false,
    shipmentNotification: [
      {
        typeCode: "email",
        receiverId: "receiver@email.com",
        languageCode: "eng",
        languageCountryCode: "UK",
        bespokeMessage: "message to be included in the notification",
      },
    ],
    prepaidCharges: [
      {
        typeCode: "freight",
        currency: "CZK",
        value: 200,
        method: "cash",
      },
    ],
    getTransliteratedResponse: false,
    estimatedDeliveryDate: {
      isRequested: false,
      typeCode: "QDDC",
    },
    getAdditionalInformation: [
      {
        typeCode: "pickupDetails",
        isRequested: true,
      },
    ],
    parentShipment: {
      productCode: "productCode_example",
      packagesCount: 1,
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

apiInstance.expApiShipments(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressCreateShipmentRequest** | **SupermodelIoLogisticsExpressCreateShipmentRequest**| Details about the shipment to be created |
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressCreateShipmentResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Shipment Created |  * Location - Location of the created resource e.g. &#x60;/shipments/1117120421&#x60; <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Invocation-Id - Unique identifier of the transaction <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**422** | Wrong input parameters |  * Content-Type -  <br>  |
**500** | Process errors |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiShipmentsDocumentimage**
> SupermodelIoLogisticsExpressDocumentImageResponse expApiShipmentsDocumentimage()

The Get Image service can be used to retrieve customer's own uploaded Commercial Invoice, Waybill Document  or supporting documents that uploaded during shipment creation.  

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShipmentApi(configuration);

let body:.ShipmentApiExpApiShipmentsDocumentimageRequest = {
  // string | DHL Express shipment identification number
  shipmentTrackingNumber: "1234567890",
  // string | DHL Express customer shipper account number
  shipperAccountNumber: "123456789",
  // 'waybill' | 'commercial-invoice' | 'customs-entry' | Please provide correct document type.
  typeCode: "waybill",
  // string | Please provide the pickup's date in YYYY-MM format 
  pickupYearAndMonth: "YYYY-MM",
  // 'pdf' | 'tiff' | Please provide the document image encoding format in pdf or tiff format  (optional)
  encodingFormat: "pdf",
  // boolean | Option to return all the document images in a single PDF file  (optional)
  allInOnePDF: false,
  // boolean | Option to return all the document images in a compressed package  (optional)
  compressedPackage: false,
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

apiInstance.expApiShipmentsDocumentimage(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentTrackingNumber** | [**string**] | DHL Express shipment identification number | defaults to undefined
 **shipperAccountNumber** | [**string**] | DHL Express customer shipper account number | defaults to undefined
 **typeCode** | [**&#39;waybill&#39; | &#39;commercial-invoice&#39; | &#39;customs-entry&#39;**]**Array<&#39;waybill&#39; &#124; &#39;commercial-invoice&#39; &#124; &#39;customs-entry&#39;>** | Please provide correct document type. | defaults to undefined
 **pickupYearAndMonth** | [**string**] | Please provide the pickup&#39;s date in YYYY-MM format  | defaults to undefined
 **encodingFormat** | [**&#39;pdf&#39; | &#39;tiff&#39;**]**Array<&#39;pdf&#39; &#124; &#39;tiff&#39;>** | Please provide the document image encoding format in pdf or tiff format  | (optional) defaults to undefined
 **allInOnePDF** | [**boolean**] | Option to return all the document images in a single PDF file  | (optional) defaults to undefined
 **compressedPackage** | [**boolean**] | Option to return all the document images in a compressed package  | (optional) defaults to undefined
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressDocumentImageResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Document Image found |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Content-Language -  <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**404** | No document image found |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiShipmentsEpod**
> SupermodelIoLogisticsExpressEPODResponse expApiShipmentsEpod()

The electronic proof of delivery service can be used to retrieve proof of delivery for certain delivered DHL Express shipments 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShipmentApi(configuration);

let body:.ShipmentApiExpApiShipmentsEpodRequest = {
  // string | DHL Express shipment identification number
  shipmentTrackingNumber: "1234567890",
  // string | DHL Express customer shipper account number (optional)
  shipperAccountNumber: "123456789",
  // 'epod-detail' | 'epod-summary' | 'epod-detail-esig' | 'epod-summary-esig' | 'epod-table' (optional)
  content: "epod-summary",
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

apiInstance.expApiShipmentsEpod(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipmentTrackingNumber** | [**string**] | DHL Express shipment identification number | defaults to undefined
 **shipperAccountNumber** | [**string**] | DHL Express customer shipper account number | (optional) defaults to undefined
 **content** | [**&#39;epod-detail&#39; | &#39;epod-summary&#39; | &#39;epod-detail-esig&#39; | &#39;epod-summary-esig&#39; | &#39;epod-table&#39;**]**Array<&#39;epod-detail&#39; &#124; &#39;epod-summary&#39; &#124; &#39;epod-detail-esig&#39; &#124; &#39;epod-summary-esig&#39; &#124; &#39;epod-table&#39;>** |  | (optional) defaults to 'epod-summary'
 **messageReference** | [**string**] | Please provide message reference  | (optional) defaults to undefined
 **messageReferenceDate** | [**string**] | Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2 | (optional) defaults to undefined
 **pluginName** | [**string**] | Please provide name of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **pluginVersion** | [**string**] | Please provide version of the plugin (applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformName** | [**string**] | Please provide name of the shipping platform(applicable to 3PV only)  | (optional) defaults to undefined
 **shippingSystemPlatformVersion** | [**string**] | Please provide version of the shipping platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformName** | [**string**] | Please provide name of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined
 **webstorePlatformVersion** | [**string**] | Please provide version of the webstore platform (applicable to 3PV only)  | (optional) defaults to undefined


### Return type

**SupermodelIoLogisticsExpressEPODResponse**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Electronic Proof of delivery found |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Content-Language -  <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**404** | No electronic proof of delivery found |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiShipmentsImgUpload**
> void expApiShipmentsImgUpload(supermodelIoLogisticsExpressImageUploadRequest)

The upload-image service can be used to upload PLT images to a previously created shipment.  The PLT images for the shipment can be uploaded before the shipment has been physically  collected by DHL courier. However, the original shipment must contain WY as the special service otherwise,  an error will be returned when the customer wants to use the reupload function in this upload-image service.     IMPORTANT: Please note that at least 10mins must be given between the initial createShipment request and then  the upload-image request (including subsequent upload-image request).  

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShipmentApi(configuration);

let body:.ShipmentApiExpApiShipmentsImgUploadRequest = {
  // string | DHL Express shipment identification number
  shipmentTrackingNumber: "1234567890",
  // SupermodelIoLogisticsExpressImageUploadRequest | Details about the shipment images
  supermodelIoLogisticsExpressImageUploadRequest: {
    shipmentTrackingNumber: "123456790",
    originalPlannedShippingDate: "2020-04-20",
    accounts: [
      {
        typeCode: "shipper",
        number: "123456789",
      },
    ],
    productCode: "D",
    documentImages: [
      {
        typeCode: "INV",
        imageFormat: "PDF",
        content: "base64 encoded image",
      },
    ],
  },
};

apiInstance.expApiShipmentsImgUpload(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressImageUploadRequest** | **SupermodelIoLogisticsExpressImageUploadRequest**| Details about the shipment images |
 **shipmentTrackingNumber** | [**string**] | DHL Express shipment identification number | defaults to undefined


### Return type

**void**

### Authorization

[basicAuth](README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Images uploaded |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Content-Language -  <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**404** | No shipment details found |  * Content-Type -  <br>  |
**422** | Unprocessable Entity |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **expApiShipmentsInvoiceDataAwb**
> void expApiShipmentsInvoiceDataAwb(supermodelIoLogisticsExpressUploadInvoiceDataRequest)

## Upload Invoice Data with Shipment ID The upload invoice data service can be used to upload Commerical Invoice data with Shipment Identification Number for your DHL Express shipment.Customer can provide Commercial Invoice data before Shipment Data via Create Shipment flow or vice versa.  Important Note: UploadInvoiceData service is not enabled by default and must be requested per customer. Use of this service is only enabled on exceptional basis and DHL Express recommends to submit shipment requests together with a commercial invoice data.To enable use of UploadInvoiceData service, please contact your DHL Express IT representative. To use UploadInvoiceData service, it is required that \"PM\" service code is provided in MyDHL API Create Shipment request. \"PM\" service code is not enabled by  default for the customers, and needs to be enabled upon request.  When Shipment is created via MyDHL API Create Shipment service before uploading the Commercial Invoice (CIN) data,it is mandatory to provide the Shipment Identification Number as received in MyDHL API Create Shipment service Response. When Commercial Invoice (CIN) data is uploaded prior to creating a shipment via MyDHL API Create Shipment service, it is mandatory to provide Invoice Reference Number with Invoice Reference Type value \"CU\" and Shipper Account Number.   These elements are mandatory to facilitate an effective data merge of the Commercial Invoice (CIN) data with Shipment Data. As an output customer will receive Notification element value '0' on successful upload of Commercial Invoice (CIN) data.  DHL backend application performs the subsequent data merging process of the Shipment Data and Commercial Invoice data. 

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ShipmentApi(configuration);

let body:.ShipmentApiExpApiShipmentsInvoiceDataAwbRequest = {
  // string | DHL Express shipment identification number
  shipmentTrackingNumber: "1234567890",
  // SupermodelIoLogisticsExpressUploadInvoiceDataRequest | Details about the invoice data
  supermodelIoLogisticsExpressUploadInvoiceDataRequest: {
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

apiInstance.expApiShipmentsInvoiceDataAwb(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **supermodelIoLogisticsExpressUploadInvoiceDataRequest** | **SupermodelIoLogisticsExpressUploadInvoiceDataRequest**| Details about the invoice data |
 **shipmentTrackingNumber** | [**string**] | DHL Express shipment identification number | defaults to undefined
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

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | invoice data uploaded |  * Invocation-Id - Unique identifier of the transaction <br>  * Message-Reference - Message reference provided by customer as part of reqeust or automatically generated when not provided <br>  * Content-Language -  <br>  |
**400** | Wrong input parameters |  * Content-Type -  <br>  |
**422** | Unprocessable Entity |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


