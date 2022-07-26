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
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent } from './SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetails } from './SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetails';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImageProperties } from './SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImageProperties';
import { HttpFile } from '../http/http';

/**
* MyDHL API REST UploadInvoiceData request JSON Schema
*/
export class SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID {
    /**
    * Please provide Shipment Identification number (AWB number)
    */
    'shipmentTrackingNumber'?: string;
    /**
    * The planned shipment date for the provided shipmentTrackingNumber.  The date must be in the format: YYYY-MM-DD
    */
    'plannedShipDate'?: string;
    /**
    * Please enter all the DHL Express accounts and types to be used for this shipment.   Note: accounts/0/number with typeCode 'shipper' is mandatory if using POST method and no shipmentTrackingNumber is provided in request.
    */
    'accounts'?: Array<SupermodelIoLogisticsExpressAccount>;
    'content': SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent;
    'outputImageProperties'?: SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImageProperties;
    'customerDetails'?: SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetails;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "shipmentTrackingNumber",
            "baseName": "shipmentTrackingNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "plannedShipDate",
            "baseName": "plannedShipDate",
            "type": "string",
            "format": ""
        },
        {
            "name": "accounts",
            "baseName": "accounts",
            "type": "Array<SupermodelIoLogisticsExpressAccount>",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent",
            "format": ""
        },
        {
            "name": "outputImageProperties",
            "baseName": "outputImageProperties",
            "type": "SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImageProperties",
            "format": ""
        },
        {
            "name": "customerDetails",
            "baseName": "customerDetails",
            "type": "SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetails",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID.attributeTypeMap;
    }

    public constructor() {
    }
}

