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

import { SupermodelIoLogisticsExpressPickupRequestCustomerDetailsBookingRequestorDetails } from './SupermodelIoLogisticsExpressPickupRequestCustomerDetailsBookingRequestorDetails';
import { SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails } from './SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails';
import { HttpFile } from '../http/http';

export class SupermodelIoLogisticsExpressPickupRequestCustomerDetails {
    'shipperDetails': SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails;
    'receiverDetails'?: SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails;
    'bookingRequestorDetails'?: SupermodelIoLogisticsExpressPickupRequestCustomerDetailsBookingRequestorDetails;
    'pickupDetails'?: SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "shipperDetails",
            "baseName": "shipperDetails",
            "type": "SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails",
            "format": ""
        },
        {
            "name": "receiverDetails",
            "baseName": "receiverDetails",
            "type": "SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails",
            "format": ""
        },
        {
            "name": "bookingRequestorDetails",
            "baseName": "bookingRequestorDetails",
            "type": "SupermodelIoLogisticsExpressPickupRequestCustomerDetailsBookingRequestorDetails",
            "format": ""
        },
        {
            "name": "pickupDetails",
            "baseName": "pickupDetails",
            "type": "SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressPickupRequestCustomerDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

