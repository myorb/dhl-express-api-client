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

import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration } from './SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration';
import { SupermodelIoLogisticsExpressPackage } from './SupermodelIoLogisticsExpressPackage';
import { HttpFile } from '../http/http';

/**
* Here you can define all the properties related to the content of the prospected shipment
*/
export class SupermodelIoLogisticsExpressCreateShipmentRequestContent {
    /**
    * Here you can define properties per package
    */
    'packages': Array<SupermodelIoLogisticsExpressPackage>;
    /**
    * For customs purposes please advise if your shipment is dutiable (true) or non dutiable (false)
    */
    'isCustomsDeclarable': boolean;
    /**
    * For customs purposes please advise on declared value of the shipment
    */
    'declaredValue'?: number;
    /**
    * For customs purposes please advise on declared value currency code of the shipment
    */
    'declaredValueCurrency'?: string;
    'exportDeclaration'?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration;
    /**
    * Please enter description of your shipment
    */
    'description': string;
    /**
    * This is used for the US AES4, FTR and ITN numbers to be printed on the Transport Label
    */
    'uSFilingTypeValue'?: string;
    /**
    * The Incoterms® rules are a globally-recognized set of standards, used worldwide in international and domestic contracts for the delivery of goods, illustrating responsibilities between buyer and seller for costs and risk, as well as cargo insurance.<BR>          EXW ExWorks<BR>          FCA Free Carrier<BR>          CPT Carriage Paid To<BR>          CIP Carriage and Insurance Paid To<BR>          DPU Delivered at Place Unloaded<BR>          DAP Delivered at Place<BR>          DDP Delivered Duty Paid<BR>          FAS Free Alongside Ship<BR>          FOB Free on Board<BR>          CFR Cost and Freight<BR>          CIF Cost, Insurance and Freight<BR>          DAF Delivered at Frontier<BR>          DAT Delivered at Terminal<BR>          DDU Delivered Duty Unpaid<BR>          DEQ Delivery ex Quay<BR>          DES Delivered ex Ship
    */
    'incoterm': SupermodelIoLogisticsExpressCreateShipmentRequestContentIncotermEnum;
    /**
    * Please enter Unit of measurement - metric,imperial
    */
    'unitOfMeasurement': SupermodelIoLogisticsExpressCreateShipmentRequestContentUnitOfMeasurementEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "packages",
            "baseName": "packages",
            "type": "Array<SupermodelIoLogisticsExpressPackage>",
            "format": ""
        },
        {
            "name": "isCustomsDeclarable",
            "baseName": "isCustomsDeclarable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "declaredValue",
            "baseName": "declaredValue",
            "type": "number",
            "format": ""
        },
        {
            "name": "declaredValueCurrency",
            "baseName": "declaredValueCurrency",
            "type": "string",
            "format": ""
        },
        {
            "name": "exportDeclaration",
            "baseName": "exportDeclaration",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "uSFilingTypeValue",
            "baseName": "USFilingTypeValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "incoterm",
            "baseName": "incoterm",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestContentIncotermEnum",
            "format": ""
        },
        {
            "name": "unitOfMeasurement",
            "baseName": "unitOfMeasurement",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestContentUnitOfMeasurementEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestContent.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressCreateShipmentRequestContentIncotermEnum = "EXW" | "FCA" | "CPT" | "CIP" | "DPU" | "DAP" | "DDP" | "FAS" | "FOB" | "CFR" | "CIF" | "DAF" | "DAT" | "DDU" | "DEQ" | "DES" ;
export type SupermodelIoLogisticsExpressCreateShipmentRequestContentUnitOfMeasurementEnum = "metric" | "imperial" ;

