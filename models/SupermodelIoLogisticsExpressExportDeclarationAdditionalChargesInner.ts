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

export class SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner {
    /**
    * Please provide the charge value
    */
    'value': number;
    /**
    * Please enter charge type
    */
    'typeCode': SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInnerTypeCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "number",
            "format": ""
        },
        {
            "name": "typeCode",
            "baseName": "typeCode",
            "type": "SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInnerTypeCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInnerTypeCodeEnum = "admin" | "delivery" | "documentation" | "expedite" | "export" | "freight" | "fuel_surcharge" | "logistic" | "other" | "packaging" | "pickup" | "handling" | "vat" | "insurance" | "reverse_charge" ;

