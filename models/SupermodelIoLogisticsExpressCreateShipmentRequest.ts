/**
 * DHL Express APIs (MyDHL API)
 * Welcome to the official DHL Express APIs (MyDHL API) below are the published API Documentation to fulfill your shipping needs with DHL Express.       Please follow the process described [here](https://developer.dhl.com/api-reference/dhl-express-mydhl-api#get-started-section/user-guide--get-access) to request access to the DHL Express - MyDHL API services    In case you already have DHL Express - MyDHL API Service credentials please ensure to use the endpoints/environments listed  [here](https://developer.dhl.com/api-reference/dhl-express-mydhl-api#get-started-section/user-guide--environments) 
 *
 * OpenAPI spec version: 2.5.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EstimatedDeliveryDate } from './EstimatedDeliveryDate';
import { Pickup } from './Pickup';
import { SupermodelIoLogisticsExpressAccount } from './SupermodelIoLogisticsExpressAccount';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContent } from './SupermodelIoLogisticsExpressCreateShipmentRequestContent';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetails } from './SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestGetAdditionalInformationInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestGetAdditionalInformationInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery } from './SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties } from './SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties';
import { SupermodelIoLogisticsExpressCreateShipmentRequestParentShipment } from './SupermodelIoLogisticsExpressCreateShipmentRequestParentShipment';
import { SupermodelIoLogisticsExpressCreateShipmentRequestPrepaidChargesInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestPrepaidChargesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestShipmentNotificationInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestShipmentNotificationInner';
import { SupermodelIoLogisticsExpressDocumentImagesInner } from './SupermodelIoLogisticsExpressDocumentImagesInner';
import { SupermodelIoLogisticsExpressIdentifier } from './SupermodelIoLogisticsExpressIdentifier';
import { SupermodelIoLogisticsExpressReference } from './SupermodelIoLogisticsExpressReference';
import { SupermodelIoLogisticsExpressValueAddedServices } from './SupermodelIoLogisticsExpressValueAddedServices';
import { HttpFile } from '../http/http';

export class SupermodelIoLogisticsExpressCreateShipmentRequest {
    /**
    * Identifies the date and time the package is tendered. Both the date and time portions of the string are expected to be used. The date should not be a past date or a date more than 10 days in the future. The time is the local time of the shipment based on the shipper's time zone. The date component must be in the format: YYYY-MM-DD; the time component must be in the format: HH:MM:SS using a 24 hour clock. The date and time parts are separated by the letter T (e.g. 2006-06-26T17:00:00 GMT+01:00).
    */
    'plannedShippingDateAndTime': string;
    'pickup': Pickup;
    /**
    * Please enter DHL Express Global Product code
    */
    'productCode': string;
    /**
    * Please enter DHL Express Local Product code
    */
    'localProductCode'?: string;
    /**
    * Please advise if you want to get rate estimates for given shipment
    */
    'getRateEstimates'?: boolean;
    /**
    * Please enter all the DHL Express accounts and types to be used for this shipment
    */
    'accounts': Array<SupermodelIoLogisticsExpressAccount>;
    /**
    * This section communicates additional shipping services, such as Insurance (or Shipment Value Protection).
    */
    'valueAddedServices'?: Array<SupermodelIoLogisticsExpressValueAddedServices>;
    'outputImageProperties'?: SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties;
    /**
    * Here you can declare your customer references
    */
    'customerReferences'?: Array<SupermodelIoLogisticsExpressReference>;
    /**
    * Identifiers section is on the shipment level where you can optionaly provide a DHL Express waybill number. This has to be enabled by your DHL Express IT contact.
    */
    'identifiers'?: Set<SupermodelIoLogisticsExpressIdentifier>;
    'customerDetails': SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetails;
    'content': SupermodelIoLogisticsExpressCreateShipmentRequestContent;
    /**
    * This section is to support multiple base64 encoded string with the image of export documentation for Paperless Trade images. When an invalid base64 encoded string is provided, an error message will be returned
    */
    'documentImages'?: Array<SupermodelIoLogisticsExpressDocumentImagesInner>;
    'onDemandDelivery'?: SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery;
    /**
    * Determines whether to request the On Demand Delivery (ODD) link. When set to true it will provide an URL link for the specified Waybill Number, Shipper Account Number. The default value is false, no ODD link URL is provided in the response message.
    */
    'requestOndemandDeliveryURL'?: boolean;
    /**
    * This is to support sending email notification once the shipment is created. The email will contain the basic information on the shipper, recipient, waybill number, and shipment information
    */
    'shipmentNotification'?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestShipmentNotificationInner>;
    /**
    * Please provide any charges you have already paid for this shipment, like freight paid upfront. To allow using this section please contact your DHL Express representative
    */
    'prepaidCharges'?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestPrepaidChargesInner>;
    /**
    * If set to true, response will return transliterated text of shipper and receiver details.
    */
    'getTransliteratedResponse'?: boolean;
    'estimatedDeliveryDate'?: EstimatedDeliveryDate;
    /**
    * Provides additional information in the response like service area details, routing code and pickup-related information
    */
    'getAdditionalInformation'?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestGetAdditionalInformationInner>;
    'parentShipment'?: SupermodelIoLogisticsExpressCreateShipmentRequestParentShipment;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "plannedShippingDateAndTime",
            "baseName": "plannedShippingDateAndTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "pickup",
            "baseName": "pickup",
            "type": "Pickup",
            "format": ""
        },
        {
            "name": "productCode",
            "baseName": "productCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "localProductCode",
            "baseName": "localProductCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "getRateEstimates",
            "baseName": "getRateEstimates",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<SupermodelIoLogisticsExpressAccount>",
            "format": ""
        },
        {
            "name": "valueAddedServices",
            "baseName": "valueAddedServices",
            "type": "Array<SupermodelIoLogisticsExpressValueAddedServices>",
            "format": ""
        },
        {
            "name": "outputImageProperties",
            "baseName": "outputImageProperties",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties",
            "format": ""
        },
        {
            "name": "customerReferences",
            "baseName": "customerReferences",
            "type": "Array<SupermodelIoLogisticsExpressReference>",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Set<SupermodelIoLogisticsExpressIdentifier>",
            "format": ""
        },
        {
            "name": "customerDetails",
            "baseName": "customerDetails",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetails",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestContent",
            "format": ""
        },
        {
            "name": "documentImages",
            "baseName": "documentImages",
            "type": "Array<SupermodelIoLogisticsExpressDocumentImagesInner>",
            "format": ""
        },
        {
            "name": "onDemandDelivery",
            "baseName": "onDemandDelivery",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery",
            "format": ""
        },
        {
            "name": "requestOndemandDeliveryURL",
            "baseName": "requestOndemandDeliveryURL",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "shipmentNotification",
            "baseName": "shipmentNotification",
            "type": "Array<SupermodelIoLogisticsExpressCreateShipmentRequestShipmentNotificationInner>",
            "format": ""
        },
        {
            "name": "prepaidCharges",
            "baseName": "prepaidCharges",
            "type": "Array<SupermodelIoLogisticsExpressCreateShipmentRequestPrepaidChargesInner>",
            "format": ""
        },
        {
            "name": "getTransliteratedResponse",
            "baseName": "getTransliteratedResponse",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "estimatedDeliveryDate",
            "baseName": "estimatedDeliveryDate",
            "type": "EstimatedDeliveryDate",
            "format": ""
        },
        {
            "name": "getAdditionalInformation",
            "baseName": "getAdditionalInformation",
            "type": "Array<SupermodelIoLogisticsExpressCreateShipmentRequestGetAdditionalInformationInner>",
            "format": ""
        },
        {
            "name": "parentShipment",
            "baseName": "parentShipment",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestParentShipment",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

