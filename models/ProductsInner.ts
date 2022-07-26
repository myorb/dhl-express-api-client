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

import { ProductsInnerBreakdownInner } from './ProductsInnerBreakdownInner';
import { ProductsInnerDeliveryCapabilities } from './ProductsInnerDeliveryCapabilities';
import { ProductsInnerPickupCapabilities } from './ProductsInnerPickupCapabilities';
import { Weight } from './Weight';
import { HttpFile } from '../http/http';

export class ProductsInner {
    /**
    * Name of the DHL Express product
    */
    'productName'?: string;
    /**
    * This is the global DHL Express product code for which the delivery is feasible respecting the input data from the request.
    */
    'productCode'?: string;
    /**
    * This is the local DHL Express product code for which the delivery is feasible respecting the input data from the request.
    */
    'localProductCode'?: string;
    /**
    * The country code for the local service used
    */
    'localProductCountryCode'?: string;
    /**
    * The NetworkTypeCode element indicates the product belongs to the Day Definite (DD) or Time Definite (TD) network.<BR>            Possible Values;<BR>            DD: Day Definite product<BR>            TD: Time Definite product
    */
    'networkTypeCode'?: string;
    /**
    * Indicator that the product only can be offered to customers with prior agreement.
    */
    'isCustomerAgreement'?: boolean;
    'weight'?: Weight;
    'breakdown'?: Array<ProductsInnerBreakdownInner>;
    'pickupCapabilities'?: ProductsInnerPickupCapabilities;
    'deliveryCapabilities'?: ProductsInnerDeliveryCapabilities;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "productName",
            "baseName": "productName",
            "type": "string",
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
            "name": "localProductCountryCode",
            "baseName": "localProductCountryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "networkTypeCode",
            "baseName": "networkTypeCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "isCustomerAgreement",
            "baseName": "isCustomerAgreement",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "Weight",
            "format": ""
        },
        {
            "name": "breakdown",
            "baseName": "breakdown",
            "type": "Array<ProductsInnerBreakdownInner>",
            "format": ""
        },
        {
            "name": "pickupCapabilities",
            "baseName": "pickupCapabilities",
            "type": "ProductsInnerPickupCapabilities",
            "format": ""
        },
        {
            "name": "deliveryCapabilities",
            "baseName": "deliveryCapabilities",
            "type": "ProductsInnerDeliveryCapabilities",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProductsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

