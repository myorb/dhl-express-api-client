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

export class ProductsInner1TotalPriceInner {
    /**
    * Possible Values :<BR>                  'BILLC', billing currency<BR>                  'PULCL', country public rates currency<BR>                  'BASEC', base currency
    */
    'currencyType'?: string;
    /**
    * This the currency of the rated shipment for the prices listed.
    */
    'priceCurrency'?: string;
    /**
    * This is the total prize of the rated shipment for the product listed.
    */
    'price': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currencyType",
            "baseName": "currencyType",
            "type": "string",
            "format": ""
        },
        {
            "name": "priceCurrency",
            "baseName": "priceCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductsInner1TotalPriceInner.attributeTypeMap;
    }

    public constructor() {
    }
}

