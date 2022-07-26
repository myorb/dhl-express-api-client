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

import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferencesInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferencesInner';
import { HttpFile } from '../http/http';

/**
* Please provide invoice related information
*/
export class SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice {
    /**
    * Please enter commercial invoice number
    */
    'number': string;
    /**
    * Please enter commercial invoice date
    */
    'date': string;
    /**
    * Please enter who has signed the invoce
    */
    'signatureName'?: string;
    /**
    * Please provide title of person who has signed the invoice
    */
    'signatureTitle'?: string;
    /**
    * Please provide the signature image
    */
    'signatureImage'?: string;
    /**
    * Please provide the invoice instruction
    */
    'instructions'?: Array<string>;
    /**
    * Please provide the Customer data text details
    */
    'customerDataTextEntries'?: Array<string>;
    /**
    * Please provide the total net weight
    */
    'totalNetWeight'?: number;
    /**
    * Please provide the total gross weight
    */
    'totalGrossWeight'?: number;
    /**
    * Please provide the customer references at invoice level
    */
    'customerReferences'?: Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferencesInner>;
    /**
    * Please provide the terms of payment
    */
    'termsOfPayment'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "number",
            "baseName": "number",
            "type": "string",
            "format": ""
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "signatureName",
            "baseName": "signatureName",
            "type": "string",
            "format": ""
        },
        {
            "name": "signatureTitle",
            "baseName": "signatureTitle",
            "type": "string",
            "format": ""
        },
        {
            "name": "signatureImage",
            "baseName": "signatureImage",
            "type": "string",
            "format": ""
        },
        {
            "name": "instructions",
            "baseName": "instructions",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "customerDataTextEntries",
            "baseName": "customerDataTextEntries",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "totalNetWeight",
            "baseName": "totalNetWeight",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalGrossWeight",
            "baseName": "totalGrossWeight",
            "type": "number",
            "format": ""
        },
        {
            "name": "customerReferences",
            "baseName": "customerReferences",
            "type": "Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferencesInner>",
            "format": ""
        },
        {
            "name": "termsOfPayment",
            "baseName": "termsOfPayment",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice.attributeTypeMap;
    }

    public constructor() {
    }
}
