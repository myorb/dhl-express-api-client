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

import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInnerServiceAreaInner } from './SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInnerServiceAreaInner';
import { HttpFile } from '../http/http';

export class SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInner {
    'date'?: string;
    'time'?: string;
    'typeCode'?: string;
    'description'?: string;
    'serviceArea'?: Array<SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInnerServiceAreaInner>;
    'signedBy'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "string",
            "format": ""
        },
        {
            "name": "typeCode",
            "baseName": "typeCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "serviceArea",
            "baseName": "serviceArea",
            "type": "Array<SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInnerServiceAreaInner>",
            "format": ""
        },
        {
            "name": "signedBy",
            "baseName": "signedBy",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInner.attributeTypeMap;
    }

    public constructor() {
    }
}
