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

import { SupermodelIoLogisticsExpressAddressCreateShipmentRequest } from './SupermodelIoLogisticsExpressAddressCreateShipmentRequest';
import { SupermodelIoLogisticsExpressBankDetailsInner } from './SupermodelIoLogisticsExpressBankDetailsInner';
import { SupermodelIoLogisticsExpressContact } from './SupermodelIoLogisticsExpressContact';
import { SupermodelIoLogisticsExpressRegistrationNumbers } from './SupermodelIoLogisticsExpressRegistrationNumbers';
import { HttpFile } from '../http/http';

/**
* Please enter address and contact details related to receiver
*/
export class SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsReceiverDetails {
    'postalAddress': SupermodelIoLogisticsExpressAddressCreateShipmentRequest;
    'contactInformation': SupermodelIoLogisticsExpressContact;
    'registrationNumbers'?: Array<SupermodelIoLogisticsExpressRegistrationNumbers>;
    'bankDetails'?: Set<SupermodelIoLogisticsExpressBankDetailsInner>;
    /**
    * Please enter the business party type of the receiver
    */
    'typeCode'?: SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsReceiverDetailsTypeCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "postalAddress",
            "baseName": "postalAddress",
            "type": "SupermodelIoLogisticsExpressAddressCreateShipmentRequest",
            "format": ""
        },
        {
            "name": "contactInformation",
            "baseName": "contactInformation",
            "type": "SupermodelIoLogisticsExpressContact",
            "format": ""
        },
        {
            "name": "registrationNumbers",
            "baseName": "registrationNumbers",
            "type": "Array<SupermodelIoLogisticsExpressRegistrationNumbers>",
            "format": ""
        },
        {
            "name": "bankDetails",
            "baseName": "bankDetails",
            "type": "Set<SupermodelIoLogisticsExpressBankDetailsInner>",
            "format": ""
        },
        {
            "name": "typeCode",
            "baseName": "typeCode",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsReceiverDetailsTypeCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsReceiverDetails.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsReceiverDetailsTypeCodeEnum = "business" | "direct_consumer" | "government" | "other" | "private" | "reseller" ;

