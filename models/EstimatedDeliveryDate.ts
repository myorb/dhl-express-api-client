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

export class EstimatedDeliveryDate {
    /**
    * Please indicate if requesting to get EDD for this shipment. <BR>          QDDF - is the fastest ('docs') transit time as quoted to the customer at booking or shipment creation. No custom clearance is considered. <BR>          QDDC - constitutes DHL's service commitment as quoted at booking/shipment creation. QDDc builds in clearance time, and potentially other special perational non-transport component(s), when relevant.
    */
    'isRequested': boolean;
    /**
    * Please indicate the EDD type being requested
    */
    'typeCode'?: EstimatedDeliveryDateTypeCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isRequested",
            "baseName": "isRequested",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "typeCode",
            "baseName": "typeCode",
            "type": "EstimatedDeliveryDateTypeCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EstimatedDeliveryDate.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EstimatedDeliveryDateTypeCodeEnum = "QDDC" | "QDDF" ;
