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

import { PickupPickupDetails } from './PickupPickupDetails';
import { PickupPickupRequestorDetails } from './PickupPickupRequestorDetails';
import { PickupSpecialInstructionsInner } from './PickupSpecialInstructionsInner';
import { HttpFile } from '../http/http';

export class Pickup {
    /**
    * Please advise if a pickup is needed for this shipment
    */
    'isRequested': boolean;
    /**
    * The latest time the location premises is available to dispatch the DHL Express shipment. (HH:MM) 
    */
    'closeTime'?: string;
    /**
    * Provides information on where the package should be picked up by DHL courier.
    */
    'location'?: string;
    /**
    * Details special pickup instructions you may wish to send to the DHL Courier.
    */
    'specialInstructions'?: Array<PickupSpecialInstructionsInner>;
    'pickupDetails'?: PickupPickupDetails;
    'pickupRequestorDetails'?: PickupPickupRequestorDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isRequested",
            "baseName": "isRequested",
            "type": "boolean",
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
            "name": "specialInstructions",
            "baseName": "specialInstructions",
            "type": "Array<PickupSpecialInstructionsInner>",
            "format": ""
        },
        {
            "name": "pickupDetails",
            "baseName": "pickupDetails",
            "type": "PickupPickupDetails",
            "format": ""
        },
        {
            "name": "pickupRequestorDetails",
            "baseName": "pickupRequestorDetails",
            "type": "PickupPickupRequestorDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Pickup.attributeTypeMap;
    }

    public constructor() {
    }
}

