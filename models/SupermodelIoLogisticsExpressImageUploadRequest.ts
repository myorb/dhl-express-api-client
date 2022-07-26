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

import { SupermodelIoLogisticsExpressAccount } from './SupermodelIoLogisticsExpressAccount';
import { SupermodelIoLogisticsExpressDocumentImagesInner } from './SupermodelIoLogisticsExpressDocumentImagesInner';
import { HttpFile } from '../http/http';

export class SupermodelIoLogisticsExpressImageUploadRequest {
    /**
    * Please provide Shipment Identification number (AWB number)
    */
    'shipmentTrackingNumber': string;
    'originalPlannedShippingDate': string;
    /**
    * Please enter all the DHL Express accounts and types to be used for this shipment
    */
    'accounts': Array<SupermodelIoLogisticsExpressAccount>;
    /**
    * Please enter DHL Express Global Product code
    */
    'productCode': string;
    /**
    * This section is to support multiple base64 encoded string with the image of export documentation for Paperless Trade images. When an invalid base64 encoded string is provided, an error message will be returned
    */
    'documentImages': Array<SupermodelIoLogisticsExpressDocumentImagesInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "shipmentTrackingNumber",
            "baseName": "shipmentTrackingNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "originalPlannedShippingDate",
            "baseName": "originalPlannedShippingDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<SupermodelIoLogisticsExpressAccount>",
            "format": ""
        },
        {
            "name": "productCode",
            "baseName": "productCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentImages",
            "baseName": "documentImages",
            "type": "Array<SupermodelIoLogisticsExpressDocumentImagesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressImageUploadRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

