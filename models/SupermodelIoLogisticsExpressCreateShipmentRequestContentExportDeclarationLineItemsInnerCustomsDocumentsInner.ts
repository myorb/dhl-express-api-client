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

import { HttpFile } from '../http/http';

export class SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner {
    /**
    * Please provide the line item customs document type code
    */
    'typeCode': SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInnerTypeCodeEnum;
    /**
    * Please provide the line item customs document ID
    */
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "typeCode",
            "baseName": "typeCode",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInnerTypeCodeEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInnerTypeCodeEnum = "972" | "AHC" | "ALC" | "ATA" | "ATR" | "BEX" | "CHA" | "CHD" | "CHP" | "CIT" | "CIV" | "CI2" | "COO" | "CPA" | "CRL" | "CSD" | "DEX" | "DGD" | "DLI" | "DOV" | "ELP" | "EU1" | "EU2" | "EUS" | "EXL" | "FMA" | "HLC" | "HWB" | "INV" | "IPA" | "JLC" | "LIC" | "LNP" | "NID" | "PAS" | "PFI" | "PHY" | "PLI" | "POA" | "PPY" | "ROD" | "T2M" | "TAD" | "TCS" | "VET" | "VEX" ;

