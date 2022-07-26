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

import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter } from './SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter';
import { SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner } from './SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner';
import { SupermodelIoLogisticsExpressExportDeclarationInvoice } from './SupermodelIoLogisticsExpressExportDeclarationInvoice';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInner } from './SupermodelIoLogisticsExpressExportDeclarationLineItemsInner';
import { SupermodelIoLogisticsExpressExportDeclarationRemarksInner } from './SupermodelIoLogisticsExpressExportDeclarationRemarksInner';
import { HttpFile } from '../http/http';

/**
* Here you can find all details related to export declaration
*/
export class SupermodelIoLogisticsExpressExportDeclaration {
    /**
    * Please enter details for each export line item
    */
    'lineItems': Array<SupermodelIoLogisticsExpressExportDeclarationLineItemsInner>;
    'invoice': SupermodelIoLogisticsExpressExportDeclarationInvoice;
    /**
    * Please enter up to three remarks
    */
    'remarks'?: Array<SupermodelIoLogisticsExpressExportDeclarationRemarksInner>;
    /**
    * Please enter additional charge to appear on the invoice<BR>      admin, Administration Charge<BR>      delivery, Delivery Charge<BR>      documentation, Documentation Charge<BR>      expedite, Expedite Charge<BR>      freight, Freight Charge<BR>      fuel surcharge, Fuel Surcharge<BR>      logistic, Logistic Charge<BR>      other, Other Charge<BR>      packaging, Packaging Charge<BR>      pickup, Pickup Charge<BR>      handling, Handling Charge<BR>      vat, VAT Charge<BR>      insurance, Insurance Cost
    */
    'additionalCharges'?: Array<SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner>;
    /**
    * Name of port of departure, shipment or destination as required under the applicable delivery term.
    */
    'placeOfIncoterm'?: string;
    /**
    * Please enter recipient reference
    */
    'recipientReference'?: string;
    'exporter'?: SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter;
    /**
    * Please provide the reason for export
    */
    'exportReasonType'?: SupermodelIoLogisticsExpressExportDeclarationExportReasonTypeEnum;
    /**
    * Please provide the shipment was sent for Personal (Gift) or Commercial (Sale) reasons
    */
    'shipmentType'?: SupermodelIoLogisticsExpressExportDeclarationShipmentTypeEnum;
    /**
    * Please provide the Customs Documents at invoice level
    */
    'customsDocuments'?: Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsInner>;
    /**
    * The Incoterms rules are a globally-recognized set of standards, used worldwide in international and domestic contracts for the delivery of goods, illustrating responsibilities between buyer and seller for costs and risk, as well as cargo insurance.<BR>      EXW ExWorks<BR>      FCA Free Carrier<BR>      CPT Carriage Paid To<BR>      CIP Carriage and Insurance Paid To<BR>      DPU Delivered at Place Unloaded<BR>      DAP Delivered at Place<BR>      DDP Delivered Duty Paid<BR>      FAS Free Alongside Ship<BR>      FOB Free on Board<BR>      CFR Cost and Freight<BR>      CIF Cost, Insurance and Freight<BR>      DAF Delivered at Frontier<BR>      DAT Delivered at Terminal<BR>      DDU Delivered Duty Unpaid<BR>      DEQ Delivery ex Quay<BR>      DES Delivered ex Ship
    */
    'incoterm': SupermodelIoLogisticsExpressExportDeclarationIncotermEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "lineItems",
            "baseName": "lineItems",
            "type": "Array<SupermodelIoLogisticsExpressExportDeclarationLineItemsInner>",
            "format": ""
        },
        {
            "name": "invoice",
            "baseName": "invoice",
            "type": "SupermodelIoLogisticsExpressExportDeclarationInvoice",
            "format": ""
        },
        {
            "name": "remarks",
            "baseName": "remarks",
            "type": "Array<SupermodelIoLogisticsExpressExportDeclarationRemarksInner>",
            "format": ""
        },
        {
            "name": "additionalCharges",
            "baseName": "additionalCharges",
            "type": "Array<SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner>",
            "format": ""
        },
        {
            "name": "placeOfIncoterm",
            "baseName": "placeOfIncoterm",
            "type": "string",
            "format": ""
        },
        {
            "name": "recipientReference",
            "baseName": "recipientReference",
            "type": "string",
            "format": ""
        },
        {
            "name": "exporter",
            "baseName": "exporter",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter",
            "format": ""
        },
        {
            "name": "exportReasonType",
            "baseName": "exportReasonType",
            "type": "SupermodelIoLogisticsExpressExportDeclarationExportReasonTypeEnum",
            "format": ""
        },
        {
            "name": "shipmentType",
            "baseName": "shipmentType",
            "type": "SupermodelIoLogisticsExpressExportDeclarationShipmentTypeEnum",
            "format": ""
        },
        {
            "name": "customsDocuments",
            "baseName": "customsDocuments",
            "type": "Set<SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsInner>",
            "format": ""
        },
        {
            "name": "incoterm",
            "baseName": "incoterm",
            "type": "SupermodelIoLogisticsExpressExportDeclarationIncotermEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressExportDeclaration.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressExportDeclarationExportReasonTypeEnum = "permanent" | "temporary" | "return" | "used_exhibition_goods_to_origin" | "intercompany_use" | "commercial_purpose_or_sale" | "personal_belongings_or_personal_use" | "sample" | "gift" | "return_to_origin" | "warranty_replacement" | "diplomatic_goods" | "defence_material" ;
export type SupermodelIoLogisticsExpressExportDeclarationShipmentTypeEnum = "personal" | "commercial" ;
export type SupermodelIoLogisticsExpressExportDeclarationIncotermEnum = "EXW" | "FCA" | "CPT" | "CIP" | "DPU" | "DAP" | "DDP" | "FAS" | "FOB" | "CFR" | "CIF" | "DAF" | "DAT" | "DDU" | "DEQ" | "DES" ;

