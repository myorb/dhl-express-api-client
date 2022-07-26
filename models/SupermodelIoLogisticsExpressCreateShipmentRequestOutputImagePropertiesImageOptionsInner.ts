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

export type SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerTypeCodeEnum = 'label' | 'waybillDoc' | 'invoice' | 'receipt' | 'qr-code'
export type SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerInvoiceTypeEnum = 'commercial' | 'proforma' | 'returns'
export type SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerEncodingFormatEnum = 'png'

export class SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner {
    /**
    * Please enter the document type you want to wish set properties for
    */
    'typeCode': SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerTypeCodeEnum;
    /**
    * Please enter DHL Express document template name. <BR>                Sample Transport label templates:<BR>                ECOM26_84_A4_001 <BR>                ECOM26_84_001 - default<BR>                ECOM_TC_A4<BR>                ECOM26_A6_002<BR>                ECOM26_84CI_001<BR>                ECOM26_84CI_002 - supported single customer barcode<BR>                ECOM26_84CI_003 - to be used if customer barcodes are used<BR>                ECOM_A4_RU_002<BR>                <BR>                Sample WaybillDoc templates<BR>                ARCH_8X4_A4_002<BR>                ARCH_8X4 - default<BR>                ARCH_6X4<BR>                ARCH_A4_RU_002<BR>                <BR>                Sample Commercial invoice templates:<BR>                COMMERCIAL_INVOICE_04 - This template can print the Shipper, Recipient, and Buyer and Importer address details and is on portrait orientation, exclusive use for preparing Loose BBX shipment.<BR>                COMMERCIAL_INVOICE_P_10 - (default) This template can print the Shipper, Recipient and upto two more additional address details in portrait orientation. Note: If customer provided more than four address roles in the request message and this template is selected, the rendered invoice will only contain four address roles based on order of priority: Shipper, Recipient, Seller, Importer, Exporter, Buyer. <BR>                COMMERCIAL_INVOICE_L_10 - This template can print the Shipper,Recipient, Buyer, and Importer and Exporter address details and is on landscape orientation..<BR>                RET_COM_INVOICE_A4_01 - This template can print the Shipper, Recipient and Importer of record address details and is on landscape orientation. This template is for exclusive use for certain shipment where the goods are actual 'returns'. The Shipper is the party that earlier has received the goods, but now wishes to return the goods to its originating party. The Recipient in this shipment scenario will receive the 'returned goods'. Therefore such request of shipment with an invoice rendering may utilize the specific invoice template for 'Returns Invoice'.<BR>                <BR>                Sample Shipment Receipt template<BR>                SHIP_RECPT_A4_RU_002 - default<BR>                Sample QR Code template template<BR>                <BR>                QR_1_00_LL_PNG_001 - default
    */
    'templateName'?: string;
    /**
    * To be used for waybillDoc, invoice, receipt and QRcode. If set to true then the document is provided otherwise not
    */
    'isRequested'?: boolean;
    /**
    * To be used for waybillDoc. If set to true then account information will not be printed on the waybillDoc
    */
    'hideAccountNumber'?: boolean;
    /**
    * You can ask up to 2 waybillDoc copies to be provided
    */
    'numberOfCopies'?: number;
    /**
    * Please advise what type of customs documentation is required
    */
    'invoiceType'?: SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerInvoiceTypeEnum;
    /**
    * Please enter ISO 3 letters language code for invoice
    */
    'languageCode'?: string;
    /**
    * Please enter ISO 2 letters language country code for invoice
    */
    'languageCountryCode'?: string;
    /**
    * Please provide the format of the QR Code output format.
    */
    'encodingFormat'?: SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerEncodingFormatEnum;
    /**
    * DHL Logo to be printed in Transport Label or Waybill Document
    */
    'renderDHLLogo'?: boolean;
    /**
    * To print respective Transport Label and Waybill document into A4 margin PDF.<BR>                Note: ECOM26_A6_002,ECOM26_84CI_001,ECOM26_84CI_002,ARCH_6X4,ARCH_8X4 template. <BR>                This option is applicable only for PDF encodingFormat selection.<BR>                false: Transport Label and Waybill document will use default margin settings (default behavior) <BR>                true: Transport Label and Waybill document will print into A4 margin PDF
    */
    'fitLabelsToA4'?: boolean;
    /**
    * Additional customer label free text that can be printed in certain label.Note: Applicable only to ECOM26_A6_002, ECOM_TC_A4 and ECOM26_84CI_001.
    */
    'labelFreeText'?: string;
    /**
    * Additional customer label text that can be printed in certain label.Note: Applicable only to ECOM26_84_A4_001, ECOM_TC_A4 and ECOM26_84CI_001
    */
    'labelCustomerDataText'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "typeCode",
            "baseName": "typeCode",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerTypeCodeEnum",
            "format": ""
        },
        {
            "name": "templateName",
            "baseName": "templateName",
            "type": "string",
            "format": ""
        },
        {
            "name": "isRequested",
            "baseName": "isRequested",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "hideAccountNumber",
            "baseName": "hideAccountNumber",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "numberOfCopies",
            "baseName": "numberOfCopies",
            "type": "number",
            "format": ""
        },
        {
            "name": "invoiceType",
            "baseName": "invoiceType",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerInvoiceTypeEnum",
            "format": ""
        },
        {
            "name": "languageCode",
            "baseName": "languageCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "languageCountryCode",
            "baseName": "languageCountryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "encodingFormat",
            "baseName": "encodingFormat",
            "type": "SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInnerEncodingFormatEnum",
            "format": ""
        },
        {
            "name": "renderDHLLogo",
            "baseName": "renderDHLLogo",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fitLabelsToA4",
            "baseName": "fitLabelsToA4",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "labelFreeText",
            "baseName": "labelFreeText",
            "type": "string",
            "format": ""
        },
        {
            "name": "labelCustomerDataText",
            "baseName": "labelCustomerDataText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

