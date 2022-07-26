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

export type SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDeliveryDeliveryOptionEnum = "servicepoint" | "neighbour" | "signatureRelease"  ;

export type SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDeliveryWhereToLeaveEnum = "concierge" | "neighbour" ;

/**
* Here you can provide data in case you wish to use DHL Express On demand delivery service
*/
export class SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery {
    /**
    * Please choose from one of the delivery options
    */
    'deliveryOption': SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDeliveryDeliveryOptionEnum;
    /**
    * If delivery option is signatureDelivery please specify location where to leave the shipment
    */
    'location'?: string;
    /**
    * Please enter additional information that might be useful for the DHL Express courier
    */
    'specialInstructions'?: string;
    /**
    * Please provide entry code to gain access to an apartment complex or gate
    */
    'gateCode'?: string;
    /**
    * In ase your deliveryOption is 'neighbour' please specify where to leave the package 
    */
    'whereToLeave'?: SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDeliveryWhereToLeaveEnum;
    /**
    * In case you wish to leave the package with neighbour please provide the neighbour's name
    */
    'neighbourName'?: string;
    /**
    * In case you wish to leave the package with neighbour please provide the neighbour's house number
    */
    'neighbourHouseNumber'?: string;
    /**
    * In case your delivery option is 'signatureRelease' please provide name of the person who is authorized to sign and receive the package
    */
    'authorizerName'?: string;
    /**
    * In case your delivery option is 'servicepoint' please provide unique DHL Express Service point location ID of where the parcel should be delieverd (please contact your local DHL Express Account Manager to obtain the list of the servicepoint IDs)
    */
    'servicePointId'?: string;
    /**
    * for future use
    */
    'requestedDeliveryDate'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "deliveryOption",
            "baseName": "deliveryOption",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDeliveryDeliveryOptionEnum",
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
            "type": "string",
            "format": ""
        },
        {
            "name": "gateCode",
            "baseName": "gateCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "whereToLeave",
            "baseName": "whereToLeave",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDeliveryWhereToLeaveEnum",
            "format": ""
        },
        {
            "name": "neighbourName",
            "baseName": "neighbourName",
            "type": "string",
            "format": ""
        },
        {
            "name": "neighbourHouseNumber",
            "baseName": "neighbourHouseNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "authorizerName",
            "baseName": "authorizerName",
            "type": "string",
            "format": ""
        },
        {
            "name": "servicePointId",
            "baseName": "servicePointId",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestedDeliveryDate",
            "baseName": "requestedDeliveryDate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery.attributeTypeMap;
    }

    public constructor() {
    }
}
