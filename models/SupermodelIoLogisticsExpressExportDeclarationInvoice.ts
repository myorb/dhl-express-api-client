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

import { SupermodelIoLogisticsExpressExportDeclarationInvoiceCustomerReferencesInner } from './SupermodelIoLogisticsExpressExportDeclarationInvoiceCustomerReferencesInner';
import { HttpFile } from '../http/http';

/**
* Please provide invoice related information
*/
export class SupermodelIoLogisticsExpressExportDeclarationInvoice {
    /**
    * Please enter commercial invoice number
    */
    'number': string;
    /**
    * Please enter commercial invoice date
    */
    'date': string;
    /**
    * Please provide the purpose was the document details captured and are planned to be used. Note: export and import is only applicable for approve Sale In Transit customers
    */
    '_function': SupermodelIoLogisticsExpressExportDeclarationInvoiceFunctionEnum;
    /**
    * Please provide the customer references at invoice level.   Note: customerReference/0/value with typeCode 'CU' is mandatory if using POST method and no shipmentTrackingNumber is provided in request.
    */
    'customerReferences'?: Set<SupermodelIoLogisticsExpressExportDeclarationInvoiceCustomerReferencesInner>;

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
            "format": ""
        },
        {
            "name": "_function",
            "baseName": "function",
            "type": "SupermodelIoLogisticsExpressExportDeclarationInvoiceFunctionEnum",
            "format": ""
        },
        {
            "name": "customerReferences",
            "baseName": "customerReferences",
            "type": "Set<SupermodelIoLogisticsExpressExportDeclarationInvoiceCustomerReferencesInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressExportDeclarationInvoice.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressExportDeclarationInvoiceFunctionEnum = "import" | "export" | "both" ;

