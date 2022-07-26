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

import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerLogosInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerLogosInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner } from './SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner';
import { HttpFile } from '../http/http';

/**
* Here you can modify label, waybillDoc, invoice and receipt properties
*/
export class SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties {
    /**
    * Printer DPI Resolution for X-axis and Y-axis (in DPI) for transport label and waybill document output
    */
    'printerDPI'?: SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesPrinterDPIEnum;
    /**
    * Customer barcodes to be printed on supported transport label templates
    */
    'customerBarcodes'?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner>;
    /**
    * Customer Logo Image to be printed on transport label
    */
    'customerLogos'?: Array<SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerLogosInner>;
    /**
    * Please provide the format of the output documents. Note that invoice and receipt will always come back as PDF
    */
    'encodingFormat'?: SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesEncodingFormatEnum;
    /**
    * Here the image options are defined for label, waybillDoc, invoice, receipt and QRcode
    */
    'imageOptions'?: Set<SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner>;
    /**
    * When set to true it will generate a single PDF or thermal output file for the Transport Label, a single PDF or thermal output file for the Waybill document and a single PDF file consisting of Commercial Invoice and Shipment Receipt. The default value is false, a single PDF or thermal output image file consists of Transport Label and single PDF or thermal output image file for Waybill Document will be returned in create shipment response.
    */
    'splitTransportAndWaybillDocLabels'?: boolean;
    /**
    * When set to true it will generate a single PDF or thermal output image file consists of Transport Label, Waybill Document, Shipment Receipt and Commercial Invoice.<BR>          The default value is false, where a single PDF or thermal output image file consists of Transport Label + Waybill Document and single PDF or thermal output image file for Shipment Receipt and Customs Invoice will be returned.
    */
    'allDocumentsInOneImage'?: boolean;
    /**
    * When set to true it will generate a single PDF or thermal output image file for each page for the Transport Label and single PDF or thermal output image file for Waybill Document will be returned in the create shipment response. The default value is false, a single PDF or thermal output image file for each page for Transport Label and single PDF or thermal output image file for Waybill Document will be returned in create shipment response.
    */
    'splitDocumentsByPages'?: boolean;
    /**
    * When set to true it will generate a single PDF or thermal output image file consisting of Transport Label + Waybill Document, a single file consist of Commercial Invoice and a single file consist of Shipment Receipt. The default value is false, a single PDF or thermal output image file consists of Transport Label + Waybill Document and single PDF or thermal output image file for Shipment Receipt and Customs Invoice will be returned in create shipment response.
    */
    'splitInvoiceAndReceipt'?: boolean;
    /**
    * When set to true it will generate a single PDF file consisting of Transport Label, Waybill Document and Shipment Receipt. The default value is false, a single PDF or thermal output image file consists of Transport Label + Waybill Document and single PDF file for Shipment Receipt will be returned in create shipment response.  Applicable only when #/outputImageProperties/imageOptions/0/typeCode is 'receipt' and #/outputImageProperties/encodingFormat is PDF.
    */
    'receiptAndLabelsInOneImage'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "printerDPI",
            "baseName": "printerDPI",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesPrinterDPIEnum",
            "format": ""
        },
        {
            "name": "customerBarcodes",
            "baseName": "customerBarcodes",
            "type": "Array<SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner>",
            "format": ""
        },
        {
            "name": "customerLogos",
            "baseName": "customerLogos",
            "type": "Array<SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerLogosInner>",
            "format": ""
        },
        {
            "name": "encodingFormat",
            "baseName": "encodingFormat",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesEncodingFormatEnum",
            "format": ""
        },
        {
            "name": "imageOptions",
            "baseName": "imageOptions",
            "type": "Set<SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner>",
            "format": ""
        },
        {
            "name": "splitTransportAndWaybillDocLabels",
            "baseName": "splitTransportAndWaybillDocLabels",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "allDocumentsInOneImage",
            "baseName": "allDocumentsInOneImage",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "splitDocumentsByPages",
            "baseName": "splitDocumentsByPages",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "splitInvoiceAndReceipt",
            "baseName": "splitInvoiceAndReceipt",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "receiptAndLabelsInOneImage",
            "baseName": "receiptAndLabelsInOneImage",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties.attributeTypeMap;
    }

    public constructor() {
    }
}


export type SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesPrinterDPIEnum = "200" | "300" ;
export type SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesEncodingFormatEnum = "pdf" | "zpl" | "lp2" | "epl" ;
