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

export class SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner {
    /**
    * Please enter barcode content
    */
    'content': string;
    /**
    * Please tner text below customer barcode
    */
    'textBelowBarcode'?: string;
    /**
    * Please enter valid Symbology code
    */
    'symbologyCode': SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInnerSymbologyCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "content",
            "baseName": "content",
            "type": "string",
            "format": ""
        },
        {
            "name": "textBelowBarcode",
            "baseName": "textBelowBarcode",
            "type": "string",
            "format": ""
        },
        {
            "name": "symbologyCode",
            "baseName": "symbologyCode",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInnerSymbologyCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInnerSymbologyCodeEnum = "93" | "39" | "128" ;

