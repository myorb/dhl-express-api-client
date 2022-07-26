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

import { SupermodelIoLogisticsExpressAccount } from './SupermodelIoLogisticsExpressAccount';
import { SupermodelIoLogisticsExpressPickupRequestCustomerDetails } from './SupermodelIoLogisticsExpressPickupRequestCustomerDetails';
import { SupermodelIoLogisticsExpressPickupRequestShipmentDetailsInner } from './SupermodelIoLogisticsExpressPickupRequestShipmentDetailsInner';
import { SupermodelIoLogisticsExpressPickupRequestSpecialInstructionsInner } from './SupermodelIoLogisticsExpressPickupRequestSpecialInstructionsInner';
import { HttpFile } from '../http/http';

/**
* RequestPickup schema definition
*/
export class SupermodelIoLogisticsExpressPickupRequest {
    /**
    * Identifies the date and time the package is ready for pickup Both the date and time portions of the string are expected to be used. The date should not be a past date or a date more than 10 days in the future. The time is the local time of the shipment based on the shipper's time zone. The date component must be in the format: YYYY-MM-DD; the time component must be in the format: HH:MM:SS using a 24 hour clock. The date and time parts are separated by the letter T (e.g. 2006-06-26T17:00:00 GMT+01:00).<BR>                           
    */
    'plannedPickupDateAndTime': string;
    /**
    * The latest time the location premises is available to dispatch the DHL Express shipment. (HH:MM) 
    */
    'closeTime'?: string;
    /**
    * Provides information on where the package should be picked up by DHL courier. <BR>                           
    */
    'location'?: string;
    /**
    * Provides information on where the package should be picked up by DHL courier. <BR>                           
    */
    'locationType'?: SupermodelIoLogisticsExpressPickupRequestLocationTypeEnum;
    'accounts': Set<SupermodelIoLogisticsExpressAccount>;
    /**
    * Details special pickup instructions you may wish to send to the DHL Courier.
    */
    'specialInstructions'?: Set<SupermodelIoLogisticsExpressPickupRequestSpecialInstructionsInner>;
    /**
    * Please provide additional pickup remark
    */
    'remark'?: string;
    'customerDetails': SupermodelIoLogisticsExpressPickupRequestCustomerDetails;
    /**
    * Please provide details related to shipment you want to do the pickup for
    */
    'shipmentDetails': Array<SupermodelIoLogisticsExpressPickupRequestShipmentDetailsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "plannedPickupDateAndTime",
            "baseName": "plannedPickupDateAndTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "closeTime",
            "baseName": "closeTime",
            "type": "string",
            "format": ""
        },
        {
            "name": "location",
            "baseName": "location",
            "type": "string",
            "format": ""
        },
        {
            "name": "locationType",
            "baseName": "locationType",
            "type": "SupermodelIoLogisticsExpressPickupRequestLocationTypeEnum",
            "format": ""
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Set<SupermodelIoLogisticsExpressAccount>",
            "format": ""
        },
        {
            "name": "specialInstructions",
            "baseName": "specialInstructions",
            "type": "Set<SupermodelIoLogisticsExpressPickupRequestSpecialInstructionsInner>",
            "format": ""
        },
        {
            "name": "remark",
            "baseName": "remark",
            "type": "string",
            "format": ""
        },
        {
            "name": "customerDetails",
            "baseName": "customerDetails",
            "type": "SupermodelIoLogisticsExpressPickupRequestCustomerDetails",
            "format": ""
        },
        {
            "name": "shipmentDetails",
            "baseName": "shipmentDetails",
            "type": "Array<SupermodelIoLogisticsExpressPickupRequestShipmentDetailsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressPickupRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressPickupRequestLocationTypeEnum = "business" | "residence" ;
