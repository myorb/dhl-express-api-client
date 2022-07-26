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

import { SupermodelIoLogisticsExpressExportDeclaration } from './SupermodelIoLogisticsExpressExportDeclaration';
import { HttpFile } from '../http/http';

/**
* Here you can define all the properties related to the content of the prospected shipment
*/
export class SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent {
    /**
    * Here you can find all details related to export declaration
    */
    'exportDeclaration': Array<SupermodelIoLogisticsExpressExportDeclaration>;
    /**
    * For customs purposes please advise on currency code of the indicated amount in invoice.
    */
    'currency': string;
    /**
    * Please enter Unit of measurement - metric,imperial
    */
    'unitOfMeasurement': SupermodelIoLogisticsExpressUploadInvoiceDataRequestContentUnitOfMeasurementEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exportDeclaration",
            "baseName": "exportDeclaration",
            "type": "Array<SupermodelIoLogisticsExpressExportDeclaration>",
            "format": ""
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitOfMeasurement",
            "baseName": "unitOfMeasurement",
            "type": "SupermodelIoLogisticsExpressUploadInvoiceDataRequestContentUnitOfMeasurementEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressUploadInvoiceDataRequestContentUnitOfMeasurementEnum = "metric" | "imperial" ;
