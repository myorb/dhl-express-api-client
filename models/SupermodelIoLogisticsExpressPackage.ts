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

import { Dimensions } from './Dimensions';
import { SupermodelIoLogisticsExpressIdentifier } from './SupermodelIoLogisticsExpressIdentifier';
import { SupermodelIoLogisticsExpressPackageLabelBarcodesInner } from './SupermodelIoLogisticsExpressPackageLabelBarcodesInner';
import { SupermodelIoLogisticsExpressPackageLabelTextInner } from './SupermodelIoLogisticsExpressPackageLabelTextInner';
import { SupermodelIoLogisticsExpressPackageReference } from './SupermodelIoLogisticsExpressPackageReference';
import { HttpFile } from '../http/http';

/**
* Package definition for /shipments
*/
export class SupermodelIoLogisticsExpressPackage {
    /**
    * Please contact your DHL Express representative if you wish to use a DHL specific package otherwise ignore this element.
    */
    'typeCode'?: SupermodelIoLogisticsExpressPackageTypeCodeEnum;
    /**
    * The weight of the package.
    */
    'weight': number;
    'dimensions': Dimensions;
    /**
    * Here you can declare your customer references for each package
    */
    'customerReferences'?: Array<SupermodelIoLogisticsExpressPackageReference>;
    /**
    * Identifiers section is on the package level where you can optionaly provide a DHL Express waybill number. This has to be enabled by your DHL Express IT contact.
    */
    'identifiers'?: Set<SupermodelIoLogisticsExpressIdentifier>;
    /**
    * Please enter description of content for each package
    */
    'description'?: string;
    /**
    * This allows you to define up to two bespoke barcodes on the DHL Express Tranport label. To use this feature please set outputImageProperties/imageOptions/templateName as ECOM26_84CI_003 for typeCode=label
    */
    'labelBarcodes'?: Array<SupermodelIoLogisticsExpressPackageLabelBarcodesInner>;
    /**
    * This allows you to enter up to two bespoke texts on the DHL Express Tranport label. To use this feature please set outputImageProperties/imageOptions/templateName as ECOM26_84CI_003 for typeCode=label
    */
    'labelText'?: Array<SupermodelIoLogisticsExpressPackageLabelTextInner>;
    /**
    * Please enter additional customer description
    */
    'labelDescription'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "typeCode",
            "baseName": "typeCode",
            "type": "SupermodelIoLogisticsExpressPackageTypeCodeEnum",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "dimensions",
            "baseName": "dimensions",
            "type": "Dimensions",
            "format": ""
        },
        {
            "name": "customerReferences",
            "baseName": "customerReferences",
            "type": "Array<SupermodelIoLogisticsExpressPackageReference>",
            "format": ""
        },
        {
            "name": "identifiers",
            "baseName": "identifiers",
            "type": "Set<SupermodelIoLogisticsExpressIdentifier>",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "labelBarcodes",
            "baseName": "labelBarcodes",
            "type": "Array<SupermodelIoLogisticsExpressPackageLabelBarcodesInner>",
            "format": ""
        },
        {
            "name": "labelText",
            "baseName": "labelText",
            "type": "Array<SupermodelIoLogisticsExpressPackageLabelTextInner>",
            "format": ""
        },
        {
            "name": "labelDescription",
            "baseName": "labelDescription",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressPackage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressPackageTypeCodeEnum = "3BX" | "2BC" | "2BP" | "CE1" | "7BX" | "6BX" | "4BX" | "2BX" | "1CE" | "WB1" | "WB3" | "XPD" | "8BX" | "5BX" | "WB6" | "TBL" | "TBS" | "WB2" ;

