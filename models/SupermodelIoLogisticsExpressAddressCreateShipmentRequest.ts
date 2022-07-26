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

export class SupermodelIoLogisticsExpressAddressCreateShipmentRequest {
    /**
    * Please enter your postcode or leave empty if the address doesn't have a postcode
    */
    'postalCode': string;
    /**
    * Please enter the city
    */
    'cityName': string;
    /**
    * Please enter ISO country code
    */
    'countryCode': string;
    /**
    * Please enter your province or state code
    */
    'provinceCode'?: string;
    /**
    * Please enter address line 1
    */
    'addressLine1': string;
    /**
    * Please enter address line 2
    */
    'addressLine2'?: string;
    /**
    * Please enter address line 3
    */
    'addressLine3'?: string;
    /**
    * Please enter your suburb or county name
    */
    'countyName'?: string;
    /**
    * Please enter your state or province name
    */
    'provinceName'?: string;
    /**
    * Please enter your country name
    */
    'countryName'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "postalCode",
            "baseName": "postalCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "cityName",
            "baseName": "cityName",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "provinceCode",
            "baseName": "provinceCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine1",
            "baseName": "addressLine1",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine2",
            "baseName": "addressLine2",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine3",
            "baseName": "addressLine3",
            "type": "string",
            "format": ""
        },
        {
            "name": "countyName",
            "baseName": "countyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "provinceName",
            "baseName": "provinceName",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryName",
            "baseName": "countryName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressAddressCreateShipmentRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

