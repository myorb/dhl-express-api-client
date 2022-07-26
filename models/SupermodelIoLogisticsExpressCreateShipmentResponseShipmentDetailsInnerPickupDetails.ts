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

/**
* Here you can find pickup details
*/
export class SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerPickupDetails {
    /**
    * Pickup booking cutoff time
    */
    'localCutoffDateAndTime'?: string;
    /**
    * Pickup cutoff time in GMT
    */
    'gmtCutoffTime'?: string;
    /**
    * Pickup booking cutoff time in GMT offset
    */
    'cutoffTimeOffset'?: string;
    /**
    * The DHL earliest time possible for pickup
    */
    'pickupEarliest'?: string;
    /**
    * The DHL latest time possible for pickup
    */
    'pickupLatest'?: string;
    /**
    * The number of transit days
    */
    'totalTransitDays'?: string;
    /**
    * This is additional transit delays (in days) for shipment picked up from the mentioned city or postal area to arrival at the service area
    */
    'pickupAdditionalDays'?: string;
    /**
    * This is additional transit delays (in days) for shipment delivered to the mentioned city or postal area following arrival at the service area
    */
    'deliveryAdditionalDays'?: string;
    /**
    * Pickup day of the week number
    */
    'pickupDayOfWeek'?: string;
    /**
    * Destination day of the week number
    */
    'deliveryDayOfWeek'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "localCutoffDateAndTime",
            "baseName": "localCutoffDateAndTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "gmtCutoffTime",
            "baseName": "gmtCutoffTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "cutoffTimeOffset",
            "baseName": "cutoffTimeOffset",
            "type": "string",
            "format": ""
        },
        {
            "name": "pickupEarliest",
            "baseName": "pickupEarliest",
            "type": "string",
            "format": ""
        },
        {
            "name": "pickupLatest",
            "baseName": "pickupLatest",
            "type": "string",
            "format": ""
        },
        {
            "name": "totalTransitDays",
            "baseName": "totalTransitDays",
            "type": "string",
            "format": ""
        },
        {
            "name": "pickupAdditionalDays",
            "baseName": "pickupAdditionalDays",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryAdditionalDays",
            "baseName": "deliveryAdditionalDays",
            "type": "string",
            "format": ""
        },
        {
            "name": "pickupDayOfWeek",
            "baseName": "pickupDayOfWeek",
            "type": "string",
            "format": ""
        },
        {
            "name": "deliveryDayOfWeek",
            "baseName": "deliveryDayOfWeek",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerPickupDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
