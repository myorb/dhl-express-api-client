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

import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCommodityCodesInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCommodityCodesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerCustomerReferencesInner } from './SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerCustomerReferencesInner';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerQuantity } from './SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerQuantity';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeight } from './SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeight';
import { HttpFile } from '../http/http';

export class SupermodelIoLogisticsExpressExportDeclarationLineItemsInner {
    /**
    * Please provide line item number
    */
    'number': number;
    /**
    * Please provide description of the line item
    */
    'description': string;
    /**
    * Please provide monetary value of the line item
    */
    'price': number;
    'quantity': SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerQuantity;
    /**
    * Please provide Commodity codes for the shipment at item line level
    */
    'commodityCodes'?: Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCommodityCodesInner>;
    /**
    * Please provide the reason for export
    */
    'exportReasonType'?: SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerExportReasonTypeEnum;
    /**
    * Please enter two letter ISO manufacturer country code
    */
    'manufacturerCountry': string;
    'weight': SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeight;
    /**
    * Please provide if the Taxes is paid for the line item
    */
    'isTaxesPaid'?: boolean;
    /**
    * Please provide the Customer References for the line item
    */
    'customerReferences'?: Set<SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerCustomerReferencesInner>;
    /**
    * Please provide the customs documents details
    */
    'customsDocuments'?: Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "number",
            "baseName": "number",
            "type": "number",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "quantity",
            "baseName": "quantity",
            "type": "SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerQuantity",
            "format": ""
        },
        {
            "name": "commodityCodes",
            "baseName": "commodityCodes",
            "type": "Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCommodityCodesInner>",
            "format": ""
        },
        {
            "name": "exportReasonType",
            "baseName": "exportReasonType",
            "type": "SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerExportReasonTypeEnum",
            "format": ""
        },
        {
            "name": "manufacturerCountry",
            "baseName": "manufacturerCountry",
            "type": "string",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeight",
            "format": ""
        },
        {
            "name": "isTaxesPaid",
            "baseName": "isTaxesPaid",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "customerReferences",
            "baseName": "customerReferences",
            "type": "Set<SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerCustomerReferencesInner>",
            "format": ""
        },
        {
            "name": "customsDocuments",
            "baseName": "customsDocuments",
            "type": "Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressExportDeclarationLineItemsInner.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerExportReasonTypeEnum = "permanent" | "temporary" | "return" | "used_exhibition_goods_to_origin" | "intercompany_use" | "commercial_purpose_or_sale" | "personal_belongings_or_personal_use" | "sample" | "gift" | "return_to_origin" | "warranty_replacement" | "diplomatic_goods" | "defence_material" ;

