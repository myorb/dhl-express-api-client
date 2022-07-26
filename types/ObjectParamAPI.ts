import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { Dimensions } from '../models/Dimensions';
import { Dimensions1 } from '../models/Dimensions1';
import { Dimensions2 } from '../models/Dimensions2';
import { Dimensions3 } from '../models/Dimensions3';
import { EstimatedDeliveryDate } from '../models/EstimatedDeliveryDate';
import { ExchangeRatesInner } from '../models/ExchangeRatesInner';
import { MonetaryAmountInner } from '../models/MonetaryAmountInner';
import { Pickup } from '../models/Pickup';
import { PickupPickupDetails } from '../models/PickupPickupDetails';
import { PickupPickupRequestorDetails } from '../models/PickupPickupRequestorDetails';
import { PickupSpecialInstructionsInner } from '../models/PickupSpecialInstructionsInner';
import { PriceDetailInner } from '../models/PriceDetailInner';
import { ProductsInner } from '../models/ProductsInner';
import { ProductsInner1 } from '../models/ProductsInner1';
import { ProductsInner1DeliveryCapabilities } from '../models/ProductsInner1DeliveryCapabilities';
import { ProductsInner1DetailedPriceBreakdownInner } from '../models/ProductsInner1DetailedPriceBreakdownInner';
import { ProductsInner1DetailedPriceBreakdownInnerBreakdownInner } from '../models/ProductsInner1DetailedPriceBreakdownInnerBreakdownInner';
import { ProductsInner1PickupCapabilities } from '../models/ProductsInner1PickupCapabilities';
import { ProductsInner1TotalPriceBreakdownInner } from '../models/ProductsInner1TotalPriceBreakdownInner';
import { ProductsInner1TotalPriceBreakdownInnerPriceBreakdownInner } from '../models/ProductsInner1TotalPriceBreakdownInnerPriceBreakdownInner';
import { ProductsInner1TotalPriceInner } from '../models/ProductsInner1TotalPriceInner';
import { ProductsInnerBreakdownInner } from '../models/ProductsInnerBreakdownInner';
import { ProductsInnerDeliveryCapabilities } from '../models/ProductsInnerDeliveryCapabilities';
import { ProductsInnerPickupCapabilities } from '../models/ProductsInnerPickupCapabilities';
import { SupermodelIoLogisticsExpressAccount } from '../models/SupermodelIoLogisticsExpressAccount';
import { SupermodelIoLogisticsExpressAddress } from '../models/SupermodelIoLogisticsExpressAddress';
import { SupermodelIoLogisticsExpressAddressCreateShipmentRequest } from '../models/SupermodelIoLogisticsExpressAddressCreateShipmentRequest';
import { SupermodelIoLogisticsExpressAddressCreateShipmentResponse } from '../models/SupermodelIoLogisticsExpressAddressCreateShipmentResponse';
import { SupermodelIoLogisticsExpressAddressRatesRequest } from '../models/SupermodelIoLogisticsExpressAddressRatesRequest';
import { SupermodelIoLogisticsExpressAddressValidateResponse } from '../models/SupermodelIoLogisticsExpressAddressValidateResponse';
import { SupermodelIoLogisticsExpressAddressValidateResponseAddressInner } from '../models/SupermodelIoLogisticsExpressAddressValidateResponseAddressInner';
import { SupermodelIoLogisticsExpressAddressValidateResponseAddressInnerServiceArea } from '../models/SupermodelIoLogisticsExpressAddressValidateResponseAddressInnerServiceArea';
import { SupermodelIoLogisticsExpressBankDetailsInner } from '../models/SupermodelIoLogisticsExpressBankDetailsInner';
import { SupermodelIoLogisticsExpressContact } from '../models/SupermodelIoLogisticsExpressContact';
import { SupermodelIoLogisticsExpressContactBuyer } from '../models/SupermodelIoLogisticsExpressContactBuyer';
import { SupermodelIoLogisticsExpressContactCreateShipmentResponse } from '../models/SupermodelIoLogisticsExpressContactCreateShipmentResponse';
import { SupermodelIoLogisticsExpressCreateShipmentRequest } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequest';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContent } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContent';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclaration';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationAdditionalChargesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationAdditionalChargesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationCustomsDocumentsInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationDeclarationNotesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationDeclarationNotesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationExporter';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoice';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferencesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationInvoiceCustomerReferencesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLicensesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLicensesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCommodityCodesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCommodityCodesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomerReferencesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomerReferencesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerCustomsDocumentsInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerQuantity } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerQuantity';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerWeight } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationLineItemsInnerWeight';
import { SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationRemarksInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestContentExportDeclarationRemarksInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsBuyerDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsExporterDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsExporterDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsImporterDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsImporterDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsPayerDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsPayerDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsReceiverDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsReceiverDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsSellerDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsSellerDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsShipperDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestCustomerDetailsShipperDetails';
import { SupermodelIoLogisticsExpressCreateShipmentRequestGetAdditionalInformationInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestGetAdditionalInformationInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestOnDemandDelivery';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestOutputImageProperties';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerBarcodesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerLogosInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesCustomerLogosInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestOutputImagePropertiesImageOptionsInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestParentShipment } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestParentShipment';
import { SupermodelIoLogisticsExpressCreateShipmentRequestPrepaidChargesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestPrepaidChargesInner';
import { SupermodelIoLogisticsExpressCreateShipmentRequestShipmentNotificationInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequestShipmentNotificationInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponse } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponse';
import { SupermodelIoLogisticsExpressCreateShipmentResponseBarcodeInfo } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseBarcodeInfo';
import { SupermodelIoLogisticsExpressCreateShipmentResponseBarcodeInfoTrackingNumberBarcodesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseBarcodeInfoTrackingNumberBarcodesInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponseDocumentsInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseDocumentsInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponseEstimatedDeliveryDate } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseEstimatedDeliveryDate';
import { SupermodelIoLogisticsExpressCreateShipmentResponsePackagesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponsePackagesInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponsePackagesInnerDocumentsInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponsePackagesInnerDocumentsInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentChargesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentChargesInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentChargesInnerServiceBreakdownInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentChargesInnerServiceBreakdownInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInner';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerCustomerDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerCustomerDetails';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerCustomerDetailsShipperDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerCustomerDetailsShipperDetails';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerDestinationServiceArea } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerDestinationServiceArea';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerOriginServiceArea } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerOriginServiceArea';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerPickupDetails } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerPickupDetails';
import { SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerValueAddedServicesInner } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponseShipmentDetailsInnerValueAddedServicesInner';
import { SupermodelIoLogisticsExpressDocumentImageResponse } from '../models/SupermodelIoLogisticsExpressDocumentImageResponse';
import { SupermodelIoLogisticsExpressDocumentImageResponseDocumentsInner } from '../models/SupermodelIoLogisticsExpressDocumentImageResponseDocumentsInner';
import { SupermodelIoLogisticsExpressDocumentImagesInner } from '../models/SupermodelIoLogisticsExpressDocumentImagesInner';
import { SupermodelIoLogisticsExpressEPODResponse } from '../models/SupermodelIoLogisticsExpressEPODResponse';
import { SupermodelIoLogisticsExpressEPODResponseDocumentsInner } from '../models/SupermodelIoLogisticsExpressEPODResponseDocumentsInner';
import { SupermodelIoLogisticsExpressErrorResponse } from '../models/SupermodelIoLogisticsExpressErrorResponse';
import { SupermodelIoLogisticsExpressExportDeclaration } from '../models/SupermodelIoLogisticsExpressExportDeclaration';
import { SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner } from '../models/SupermodelIoLogisticsExpressExportDeclarationAdditionalChargesInner';
import { SupermodelIoLogisticsExpressExportDeclarationInvoice } from '../models/SupermodelIoLogisticsExpressExportDeclarationInvoice';
import { SupermodelIoLogisticsExpressExportDeclarationInvoiceCustomerReferencesInner } from '../models/SupermodelIoLogisticsExpressExportDeclarationInvoiceCustomerReferencesInner';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInner } from '../models/SupermodelIoLogisticsExpressExportDeclarationLineItemsInner';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerCustomerReferencesInner } from '../models/SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerCustomerReferencesInner';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerQuantity } from '../models/SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerQuantity';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeight } from '../models/SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeight';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeightAnyOf } from '../models/SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeightAnyOf';
import { SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeightAnyOf1 } from '../models/SupermodelIoLogisticsExpressExportDeclarationLineItemsInnerWeightAnyOf1';
import { SupermodelIoLogisticsExpressExportDeclarationRemarksInner } from '../models/SupermodelIoLogisticsExpressExportDeclarationRemarksInner';
import { SupermodelIoLogisticsExpressIdentifier } from '../models/SupermodelIoLogisticsExpressIdentifier';
import { SupermodelIoLogisticsExpressIdentifierResponse } from '../models/SupermodelIoLogisticsExpressIdentifierResponse';
import { SupermodelIoLogisticsExpressIdentifierResponseIdentifiersInner } from '../models/SupermodelIoLogisticsExpressIdentifierResponseIdentifiersInner';
import { SupermodelIoLogisticsExpressImageUploadRequest } from '../models/SupermodelIoLogisticsExpressImageUploadRequest';
import { SupermodelIoLogisticsExpressLandedCostRequest } from '../models/SupermodelIoLogisticsExpressLandedCostRequest';
import { SupermodelIoLogisticsExpressLandedCostRequestChargesInner } from '../models/SupermodelIoLogisticsExpressLandedCostRequestChargesInner';
import { SupermodelIoLogisticsExpressLandedCostRequestCustomerDetails } from '../models/SupermodelIoLogisticsExpressLandedCostRequestCustomerDetails';
import { SupermodelIoLogisticsExpressLandedCostRequestItemsInner } from '../models/SupermodelIoLogisticsExpressLandedCostRequestItemsInner';
import { SupermodelIoLogisticsExpressLandedCostRequestItemsInnerAdditionalQuantityDefinitionsInner } from '../models/SupermodelIoLogisticsExpressLandedCostRequestItemsInnerAdditionalQuantityDefinitionsInner';
import { SupermodelIoLogisticsExpressLandedCostRequestItemsInnerGoodsCharacteristicsInner } from '../models/SupermodelIoLogisticsExpressLandedCostRequestItemsInnerGoodsCharacteristicsInner';
import { SupermodelIoLogisticsExpressPackage } from '../models/SupermodelIoLogisticsExpressPackage';
import { SupermodelIoLogisticsExpressPackageLabelBarcodesInner } from '../models/SupermodelIoLogisticsExpressPackageLabelBarcodesInner';
import { SupermodelIoLogisticsExpressPackageLabelTextInner } from '../models/SupermodelIoLogisticsExpressPackageLabelTextInner';
import { SupermodelIoLogisticsExpressPackageRR } from '../models/SupermodelIoLogisticsExpressPackageRR';
import { SupermodelIoLogisticsExpressPackageReference } from '../models/SupermodelIoLogisticsExpressPackageReference';
import { SupermodelIoLogisticsExpressPickupRequest } from '../models/SupermodelIoLogisticsExpressPickupRequest';
import { SupermodelIoLogisticsExpressPickupRequestCustomerDetails } from '../models/SupermodelIoLogisticsExpressPickupRequestCustomerDetails';
import { SupermodelIoLogisticsExpressPickupRequestCustomerDetailsBookingRequestorDetails } from '../models/SupermodelIoLogisticsExpressPickupRequestCustomerDetailsBookingRequestorDetails';
import { SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails } from '../models/SupermodelIoLogisticsExpressPickupRequestCustomerDetailsShipperDetails';
import { SupermodelIoLogisticsExpressPickupRequestShipmentDetailsInner } from '../models/SupermodelIoLogisticsExpressPickupRequestShipmentDetailsInner';
import { SupermodelIoLogisticsExpressPickupRequestSpecialInstructionsInner } from '../models/SupermodelIoLogisticsExpressPickupRequestSpecialInstructionsInner';
import { SupermodelIoLogisticsExpressPickupResponse } from '../models/SupermodelIoLogisticsExpressPickupResponse';
import { SupermodelIoLogisticsExpressProducts } from '../models/SupermodelIoLogisticsExpressProducts';
import { SupermodelIoLogisticsExpressRateRequest } from '../models/SupermodelIoLogisticsExpressRateRequest';
import { SupermodelIoLogisticsExpressRateRequestCustomerDetails } from '../models/SupermodelIoLogisticsExpressRateRequestCustomerDetails';
import { SupermodelIoLogisticsExpressRateRequestProductsAndServicesInner } from '../models/SupermodelIoLogisticsExpressRateRequestProductsAndServicesInner';
import { SupermodelIoLogisticsExpressRates } from '../models/SupermodelIoLogisticsExpressRates';
import { SupermodelIoLogisticsExpressReference } from '../models/SupermodelIoLogisticsExpressReference';
import { SupermodelIoLogisticsExpressRegistrationNumbers } from '../models/SupermodelIoLogisticsExpressRegistrationNumbers';
import { SupermodelIoLogisticsExpressTrackingResponse } from '../models/SupermodelIoLogisticsExpressTrackingResponse';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInner';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerEventsInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerEventsInner';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerEventsInnerServiceAreaInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerEventsInnerServiceAreaInner';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInner';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInner';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInnerServiceAreaInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerPiecesInnerEventsInnerServiceAreaInner';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerReceiverDetails } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerReceiverDetails';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerReceiverDetailsPostalAddress } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerReceiverDetailsPostalAddress';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerReceiverDetailsServiceAreaInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerReceiverDetailsServiceAreaInner';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerShipperDetails } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerShipperDetails';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerShipperDetailsPostalAddress } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerShipperDetailsPostalAddress';
import { SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerShipperDetailsServiceAreaInner } from '../models/SupermodelIoLogisticsExpressTrackingResponseShipmentsInnerShipperDetailsServiceAreaInner';
import { SupermodelIoLogisticsExpressUpdatePickupRequest } from '../models/SupermodelIoLogisticsExpressUpdatePickupRequest';
import { SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetailsInner } from '../models/SupermodelIoLogisticsExpressUpdatePickupRequestShipmentDetailsInner';
import { SupermodelIoLogisticsExpressUpdatePickupResponse } from '../models/SupermodelIoLogisticsExpressUpdatePickupResponse';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequest } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequest';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestContent';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetails } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetails';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsBuyerDetails } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsBuyerDetails';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsExporterDetails';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsImporterDetails } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsImporterDetails';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsSellerDetails } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestCustomerDetailsSellerDetails';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImageProperties } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImageProperties';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImagePropertiesImageOptionsInner } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestOutputImagePropertiesImageOptionsInner';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID';
import { SupermodelIoLogisticsExpressUploadInvoiceDataResponse } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataResponse';
import { SupermodelIoLogisticsExpressValueAddedServices } from '../models/SupermodelIoLogisticsExpressValueAddedServices';
import { SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInner } from '../models/SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInner';
import { SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOf } from '../models/SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOf';
import { SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOfNot } from '../models/SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOfNot';
import { SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOfOneOf } from '../models/SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOfOneOf';
import { SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOfOneOf1 } from '../models/SupermodelIoLogisticsExpressValueAddedServicesDangerousGoodsInnerAnyOfOneOf1';
import { SupermodelIoLogisticsExpressValueAddedServicesRates } from '../models/SupermodelIoLogisticsExpressValueAddedServicesRates';
import { Weight } from '../models/Weight';
import { Weight1 } from '../models/Weight1';

import { ObservableAddressApi } from "./ObservableAPI";
import { AddressApiRequestFactory, AddressApiResponseProcessor} from "../apis/AddressApi";

export interface AddressApiExpApiAddressValidateRequest {
    /**
     * 
     * @type &#39;pickup&#39; | &#39;delivery&#39;
     * @memberof AddressApiexpApiAddressValidate
     */
    type: 'pickup' | 'delivery'
    /**
     * A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    countryCode: string
    /**
     * Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    postalCode?: string
    /**
     * Text specifying the city name
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    cityName?: string
    /**
     * If set to true service will return no records when exact valid match not found
     * @type boolean
     * @memberof AddressApiexpApiAddressValidate
     */
    strictValidation?: boolean
    /**
     * Please provide message reference 
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof AddressApiexpApiAddressValidate
     */
    webstorePlatformVersion?: string
}

export class ObjectAddressApi {
    private api: ObservableAddressApi

    public constructor(configuration: Configuration, requestFactory?: AddressApiRequestFactory, responseProcessor?: AddressApiResponseProcessor) {
        this.api = new ObservableAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validates if DHL Express has got pickup/delivery capabilities at origin/destination 
     * Validate DHL Express pickup/delivery capabilities at origin/destination
     * @param param the request object
     */
    public expApiAddressValidate(param: AddressApiExpApiAddressValidateRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressAddressValidateResponse> {
        return this.api.expApiAddressValidate(param.type, param.countryCode, param.postalCode, param.cityName, param.strictValidation, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}

import { ObservableIdentifierApi } from "./ObservableAPI";
import { IdentifierApiRequestFactory, IdentifierApiResponseProcessor} from "../apis/IdentifierApi";

export interface IdentifierApiExpApiIdentifiersRequest {
    /**
     * DHL Express customer account number
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    accountNumber: string
    /**
     * Type of DHL Express identifier to retrieve
     * @type &#39;SID&#39; | &#39;PID&#39; | &#39;ASID3&#39; | &#39;ASID6&#39; | &#39;ASID12&#39; | &#39;ASID24&#39; | &#39;HUID&#39;
     * @memberof IdentifierApiexpApiIdentifiers
     */
    type: 'SID' | 'PID' | 'ASID3' | 'ASID6' | 'ASID12' | 'ASID24' | 'HUID'
    /**
     * Number of identifiers to be retrieved
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    size: string
    /**
     * Please provide message reference 
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof IdentifierApiexpApiIdentifiers
     */
    webstorePlatformVersion?: string
}

export class ObjectIdentifierApi {
    private api: ObservableIdentifierApi

    public constructor(configuration: Configuration, requestFactory?: IdentifierApiRequestFactory, responseProcessor?: IdentifierApiResponseProcessor) {
        this.api = new ObservableIdentifierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Service to allocate identifiers upfront for DHL Express Breakbulk or Loose Break Bulk shipments. Requires authorization to use this service from DHL Express. 
     * Service to allocate identifiers upfront for DHL Express Breakbulk or Loose Break Bulk shipments
     * @param param the request object
     */
    public expApiIdentifiers(param: IdentifierApiExpApiIdentifiersRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressIdentifierResponse> {
        return this.api.expApiIdentifiers(param.accountNumber, param.type, param.size, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}

import { ObservableInvoiceApi } from "./ObservableAPI";
import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";

export interface InvoiceApiExpApiShipmentsInvoiceDataRequest {
    /**
     * Details about the Commercial Invoice data to be uploaded
     * @type SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    supermodelIoLogisticsExpressUploadInvoiceDataRequestSID: SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID
    /**
     * Please provide message reference 
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof InvoiceApiexpApiShipmentsInvoiceData
     */
    webstorePlatformVersion?: string
}

export class ObjectInvoiceApi {
    private api: ObservableInvoiceApi

    public constructor(configuration: Configuration, requestFactory?: InvoiceApiRequestFactory, responseProcessor?: InvoiceApiResponseProcessor) {
        this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Upload invoice data The upload invoice data service can be used to upload Commerical Invoice data without Shipment Identification Number for your DHL Express shipment. Customer can provide Commercial Invoice data before Shipment Data via Create Shipment flow or vice versa.  Important Note: UploadInvoiceData service is not enabled by default and must be requested per customer.Use of this service is only enabled on exceptional basis and DHL Express recommends to submit shipment requests together with a commercial invoice data. To enable use of UploadInvoiceData service, please contact your DHL Express IT representative. To use UploadInvoiceData service, it is required that \"PM\" service code is provided in MyDHL API Create Shipment request. \"PM\" service code is not enabled by default for the customers, and needs to be enabled upon request.  When Shipment is created via MyDHL API Create Shipment service before uploading the Commercial Invoice (CIN) data,it is mandatory to provide the Shipment Identification Number as received in MyDHL API Create Shipment service Response. When Commercial Invoice (CIN) data is uploaded prior to creating a shipment via MyDHL API Create Shipment service, it is  mandatory to provide Invoice Reference Number with Invoice Reference Type value \"CU\" and Shipper Account Number.  These elements are mandatory to facilitate an effective data merge of the Commercial Invoice (CIN) data with Shipment Data. As an output customer will receive Notification element value '0' on successful upload of Commercial Invoice (CIN) data. DHL backend application performs the subsequent data merging process of the Shipment Data and Commercial Invoice data. 
     * Upload Commercial invoice data
     * @param param the request object
     */
    public expApiShipmentsInvoiceData(param: InvoiceApiExpApiShipmentsInvoiceDataRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressUploadInvoiceDataResponse> {
        return this.api.expApiShipmentsInvoiceData(param.supermodelIoLogisticsExpressUploadInvoiceDataRequestSID, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}

import { ObservablePickupApi } from "./ObservableAPI";
import { PickupApiRequestFactory, PickupApiResponseProcessor} from "../apis/PickupApi";

export interface PickupApiExpApiPickupsRequest {
    /**
     * Details about the requested pickup
     * @type SupermodelIoLogisticsExpressPickupRequest
     * @memberof PickupApiexpApiPickups
     */
    supermodelIoLogisticsExpressPickupRequest: SupermodelIoLogisticsExpressPickupRequest
    /**
     * Please provide message reference 
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickups
     */
    webstorePlatformVersion?: string
}

export interface PickupApiExpApiPickupsCancelRequest {
    /**
     * Shipment pickup confirmation number for example &#x60;PRG999126012345&#x60;
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    dispatchConfirmationNumber: string
    /**
     * Name of the person requesting to cancel the scheduled pickup 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    requestorName: string
    /**
     * Provide why scheduled pickup is being cancelled 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    reason: string
    /**
     * Please provide message reference 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsCancel
     */
    webstorePlatformVersion?: string
}

export interface PickupApiExpApiPickupsUpdateRequest {
    /**
     * Shipment pickup confirmation number for example &#x60;PRG999126012345&#x60;
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    dispatchConfirmationNumber: string
    /**
     * Details about the requested pickup updates
     * @type SupermodelIoLogisticsExpressUpdatePickupRequest
     * @memberof PickupApiexpApiPickupsUpdate
     */
    supermodelIoLogisticsExpressUpdatePickupRequest: SupermodelIoLogisticsExpressUpdatePickupRequest
    /**
     * Please provide message reference 
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof PickupApiexpApiPickupsUpdate
     */
    webstorePlatformVersion?: string
}

export class ObjectPickupApi {
    private api: ObservablePickupApi

    public constructor(configuration: Configuration, requestFactory?: PickupApiRequestFactory, responseProcessor?: PickupApiResponseProcessor) {
        this.api = new ObservablePickupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The Pickup service creates a DHL Express pickup booking request 
     * Create a DHL Express pickup booking request
     * @param param the request object
     */
    public expApiPickups(param: PickupApiExpApiPickupsRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressPickupResponse> {
        return this.api.expApiPickups(param.supermodelIoLogisticsExpressPickupRequest, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The Cancel Pickup service can be used to cancel a DHL Express pickup booking request 
     * Cancel a DHL Express pickup booking request
     * @param param the request object
     */
    public expApiPickupsCancel(param: PickupApiExpApiPickupsCancelRequest, options?: Configuration): Promise<void> {
        return this.api.expApiPickupsCancel(param.dispatchConfirmationNumber, param.requestorName, param.reason, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The Update Pickup service can be used to update pickup information for an existing DHL Express pickup booking request 
     * Update pickup information for an existing DHL Express pickup booking request
     * @param param the request object
     */
    public expApiPickupsUpdate(param: PickupApiExpApiPickupsUpdateRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressUpdatePickupResponse> {
        return this.api.expApiPickupsUpdate(param.dispatchConfirmationNumber, param.supermodelIoLogisticsExpressUpdatePickupRequest, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}

import { ObservableProductApi } from "./ObservableAPI";
import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";

export interface ProductApiExpApiProductsRequest {
    /**
     * DHL Express customer account number
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    accountNumber: string
    /**
     * A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    originCountryCode: string
    /**
     * Text specifying the city name
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    originCityName: string
    /**
     * A short text string code (see values defined in ISO 3166) specifying the shipment destination country. https://gs1.org/voc/Country, Alpha-2 Code
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    destinationCountryCode: string
    /**
     * Text specifying the city name
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    destinationCityName: string
    /**
     * Gross weight of the shipment including packaging.
     * @type number
     * @memberof ProductApiexpApiProducts
     */
    weight: number
    /**
     * Total length of the shipment including packaging.
     * @type number
     * @memberof ProductApiexpApiProducts
     */
    length: number
    /**
     * Total width of the shipment including packaging.
     * @type number
     * @memberof ProductApiexpApiProducts
     */
    width: number
    /**
     * Total height of the shipment including packaging.
     * @type number
     * @memberof ProductApiexpApiProducts
     */
    height: number
    /**
     * Timestamp represents the date you plan to ship your prospected shipment 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    plannedShippingDate: string
    /**
     * 
     * @type boolean
     * @memberof ProductApiexpApiProducts
     */
    isCustomsDeclarable: boolean
    /**
     * The UnitOfMeasurement node conveys the unit of measurements used in the operation. This single value corresponds to the units of weight and measurement which are used throughout the message processing. 
     * @type &#39;metric&#39; | &#39;imperial&#39;
     * @memberof ProductApiexpApiProducts
     */
    unitOfMeasurement: 'metric' | 'imperial'
    /**
     * Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    originPostalCode?: string
    /**
     * Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    destinationPostalCode?: string
    /**
     * When set to true and there are no products available for given plannedShippingDate then products available for the next possible pickup date are returned 
     * @type boolean
     * @memberof ProductApiexpApiProducts
     */
    nextBusinessDay?: boolean
    /**
     * Please provide message reference 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ProductApiexpApiProducts
     */
    webstorePlatformVersion?: string
}

export class ObjectProductApi {
    private api: ObservableProductApi

    public constructor(configuration: Configuration, requestFactory?: ProductApiRequestFactory, responseProcessor?: ProductApiResponseProcessor) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The GET Products API will return DHL's product capabilities for a certain set of input data.  Using the shipper and receiver address as well as the dimension and weight of the piece belonging to a shipment, this operation returns the available products. 
     * Retrieve available DHL Express products for a one piece Shipment
     * @param param the request object
     */
    public expApiProducts(param: ProductApiExpApiProductsRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressProducts> {
        return this.api.expApiProducts(param.accountNumber, param.originCountryCode, param.originCityName, param.destinationCountryCode, param.destinationCityName, param.weight, param.length, param.width, param.height, param.plannedShippingDate, param.isCustomsDeclarable, param.unitOfMeasurement, param.originPostalCode, param.destinationPostalCode, param.nextBusinessDay, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}

import { ObservableRatingApi } from "./ObservableAPI";
import { RatingApiRequestFactory, RatingApiResponseProcessor} from "../apis/RatingApi";

export interface RatingApiExpApiLandedCostRequest {
    /**
     * Details about the requested shipment
     * @type SupermodelIoLogisticsExpressLandedCostRequest
     * @memberof RatingApiexpApiLandedCost
     */
    supermodelIoLogisticsExpressLandedCostRequest: SupermodelIoLogisticsExpressLandedCostRequest
    /**
     * Please provide message reference 
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiLandedCost
     */
    webstorePlatformVersion?: string
}

export interface RatingApiExpApiRatesRequest {
    /**
     * DHL Express customer account number
     * @type string
     * @memberof RatingApiexpApiRates
     */
    accountNumber: string
    /**
     * A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
     * @type string
     * @memberof RatingApiexpApiRates
     */
    originCountryCode: string
    /**
     * Text specifying the city name
     * @type string
     * @memberof RatingApiexpApiRates
     */
    originCityName: string
    /**
     * A short text string code (see values defined in ISO 3166) specifying the shipment destination country. https://gs1.org/voc/Country, Alpha-2 Code
     * @type string
     * @memberof RatingApiexpApiRates
     */
    destinationCountryCode: string
    /**
     * Text specifying the city name
     * @type string
     * @memberof RatingApiexpApiRates
     */
    destinationCityName: string
    /**
     * Gross weight of the shipment including packaging.
     * @type number
     * @memberof RatingApiexpApiRates
     */
    weight: number
    /**
     * Total length of the shipment including packaging.
     * @type number
     * @memberof RatingApiexpApiRates
     */
    length: number
    /**
     * Total width of the shipment including packaging.
     * @type number
     * @memberof RatingApiexpApiRates
     */
    width: number
    /**
     * Total height of the shipment including packaging.
     * @type number
     * @memberof RatingApiexpApiRates
     */
    height: number
    /**
     * Timestamp represents the date you plan to ship your prospected shipment 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    plannedShippingDate: string
    /**
     * 
     * @type boolean
     * @memberof RatingApiexpApiRates
     */
    isCustomsDeclarable: boolean
    /**
     * The UnitOfMeasurement node conveys the unit of measurements used in the operation. This single value corresponds to the units of weight and measurement which are used throughout the message processing. 
     * @type &#39;metric&#39; | &#39;imperial&#39;
     * @memberof RatingApiexpApiRates
     */
    unitOfMeasurement: 'metric' | 'imperial'
    /**
     * Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @type string
     * @memberof RatingApiexpApiRates
     */
    originPostalCode?: string
    /**
     * Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @type string
     * @memberof RatingApiexpApiRates
     */
    destinationPostalCode?: string
    /**
     * When set to true and there are no products available for given plannedShippingDate then products available for the next possible pickup date are returned 
     * @type boolean
     * @memberof RatingApiexpApiRates
     */
    nextBusinessDay?: boolean
    /**
     * Please provide message reference 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof RatingApiexpApiRates
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRates
     */
    webstorePlatformVersion?: string
}

export interface RatingApiExpApiRatesManyRequest {
    /**
     * Details about the requested shipment
     * @type SupermodelIoLogisticsExpressRateRequest
     * @memberof RatingApiexpApiRatesMany
     */
    supermodelIoLogisticsExpressRateRequest: SupermodelIoLogisticsExpressRateRequest
    /**
     * Please provide message reference 
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof RatingApiexpApiRatesMany
     */
    webstorePlatformVersion?: string
}

export class ObjectRatingApi {
    private api: ObservableRatingApi

    public constructor(configuration: Configuration, requestFactory?: RatingApiRequestFactory, responseProcessor?: RatingApiResponseProcessor) {
        this.api = new ObservableRatingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The Landed Cost section allows further information around products being sold to be provided. In return the duty, tax and shipping charges are calculated in real time and provides transparency about any extra costs the buyer may have to pay before they reach them. 
     * Landed Cost
     * @param param the request object
     */
    public expApiLandedCost(param: RatingApiExpApiLandedCostRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressRates> {
        return this.api.expApiLandedCost(param.supermodelIoLogisticsExpressLandedCostRequest, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The Rate request will return DHL's product capabilities and prices (where applicable) based on the input data. Using the shipper and receiver address as well as the dimension and weights of the pieces belonging to a shipment, this operation returns the available products including the shipping price (where applicable) 
     * Retrieve Rates for a one piece Shipment
     * @param param the request object
     */
    public expApiRates(param: RatingApiExpApiRatesRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressRates> {
        return this.api.expApiRates(param.accountNumber, param.originCountryCode, param.originCityName, param.destinationCountryCode, param.destinationCityName, param.weight, param.length, param.width, param.height, param.plannedShippingDate, param.isCustomsDeclarable, param.unitOfMeasurement, param.originPostalCode, param.destinationPostalCode, param.nextBusinessDay, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The Rate request will return DHL's product capabilities and prices (where applicable) based on the input data. Using the shipper and receiver address as well as the dimension and weights of the pieces belonging to a shipment, this operation returns the available products including the shipping price (where applicable) 
     * Retrieve Rates for Multi-piece Shipments
     * @param param the request object
     */
    public expApiRatesMany(param: RatingApiExpApiRatesManyRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressRates> {
        return this.api.expApiRatesMany(param.supermodelIoLogisticsExpressRateRequest, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}

import { ObservableShipmentApi } from "./ObservableAPI";
import { ShipmentApiRequestFactory, ShipmentApiResponseProcessor} from "../apis/ShipmentApi";

export interface ShipmentApiExpApiShipmentsRequest {
    /**
     * Details about the shipment to be created
     * @type SupermodelIoLogisticsExpressCreateShipmentRequest
     * @memberof ShipmentApiexpApiShipments
     */
    supermodelIoLogisticsExpressCreateShipmentRequest: SupermodelIoLogisticsExpressCreateShipmentRequest
    /**
     * Please provide message reference 
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipments
     */
    webstorePlatformVersion?: string
}

export interface ShipmentApiExpApiShipmentsDocumentimageRequest {
    /**
     * DHL Express shipment identification number
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    shipmentTrackingNumber: string
    /**
     * DHL Express customer shipper account number
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    shipperAccountNumber: string
    /**
     * Please provide correct document type.
     * @type &#39;waybill&#39; | &#39;commercial-invoice&#39; | &#39;customs-entry&#39;
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    typeCode: 'waybill' | 'commercial-invoice' | 'customs-entry'
    /**
     * Please provide the pickup&#39;s date in YYYY-MM format 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    pickupYearAndMonth: string
    /**
     * Please provide the document image encoding format in pdf or tiff format 
     * @type &#39;pdf&#39; | &#39;tiff&#39;
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    encodingFormat?: 'pdf' | 'tiff'
    /**
     * Option to return all the document images in a single PDF file 
     * @type boolean
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    allInOnePDF?: boolean
    /**
     * Option to return all the document images in a compressed package 
     * @type boolean
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    compressedPackage?: boolean
    /**
     * Please provide message reference 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsDocumentimage
     */
    webstorePlatformVersion?: string
}

export interface ShipmentApiExpApiShipmentsEpodRequest {
    /**
     * DHL Express shipment identification number
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    shipmentTrackingNumber: string
    /**
     * DHL Express customer shipper account number
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    shipperAccountNumber?: string
    /**
     * 
     * @type &#39;epod-detail&#39; | &#39;epod-summary&#39; | &#39;epod-detail-esig&#39; | &#39;epod-summary-esig&#39; | &#39;epod-table&#39;
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    content?: 'epod-detail' | 'epod-summary' | 'epod-detail-esig' | 'epod-summary-esig' | 'epod-table'
    /**
     * Please provide message reference 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsEpod
     */
    webstorePlatformVersion?: string
}

export interface ShipmentApiExpApiShipmentsImgUploadRequest {
    /**
     * DHL Express shipment identification number
     * @type string
     * @memberof ShipmentApiexpApiShipmentsImgUpload
     */
    shipmentTrackingNumber: string
    /**
     * Details about the shipment images
     * @type SupermodelIoLogisticsExpressImageUploadRequest
     * @memberof ShipmentApiexpApiShipmentsImgUpload
     */
    supermodelIoLogisticsExpressImageUploadRequest: SupermodelIoLogisticsExpressImageUploadRequest
}

export interface ShipmentApiExpApiShipmentsInvoiceDataAwbRequest {
    /**
     * DHL Express shipment identification number
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    shipmentTrackingNumber: string
    /**
     * Details about the invoice data
     * @type SupermodelIoLogisticsExpressUploadInvoiceDataRequest
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    supermodelIoLogisticsExpressUploadInvoiceDataRequest: SupermodelIoLogisticsExpressUploadInvoiceDataRequest
    /**
     * Please provide message reference 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    messageReferenceDate?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof ShipmentApiexpApiShipmentsInvoiceDataAwb
     */
    webstorePlatformVersion?: string
}

export class ObjectShipmentApi {
    private api: ObservableShipmentApi

    public constructor(configuration: Configuration, requestFactory?: ShipmentApiRequestFactory, responseProcessor?: ShipmentApiResponseProcessor) {
        this.api = new ObservableShipmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create Shipment The ShipmentRequest Operation will allow you to generate an AWB number and piece IDs, generate a shipping label, transmit manifest shipment detail to DHL, and optionally book a courier for the pickup of a shipment. The key elements in the response of the Shipment Request will be a base64 encoded PDF label and the Shipment and Piece identification numbers, which you can use for tracking on the DHL web site. While the RateRequest and ShipmentRequest services can be used independently, DHL recommends the use of RateRequest to first validate the products available for the shipper/receiver. The global product codes which are output during the RateResponse can be used directly as input into the Shipment Request, as both perform similar validations in terms of service capability. 
     * Create Shipment
     * @param param the request object
     */
    public expApiShipments(param: ShipmentApiExpApiShipmentsRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressCreateShipmentResponse> {
        return this.api.expApiShipments(param.supermodelIoLogisticsExpressCreateShipmentRequest, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The Get Image service can be used to retrieve customer's own uploaded Commercial Invoice, Waybill Document  or supporting documents that uploaded during shipment creation.  
     * Get Image
     * @param param the request object
     */
    public expApiShipmentsDocumentimage(param: ShipmentApiExpApiShipmentsDocumentimageRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressDocumentImageResponse> {
        return this.api.expApiShipmentsDocumentimage(param.shipmentTrackingNumber, param.shipperAccountNumber, param.typeCode, param.pickupYearAndMonth, param.encodingFormat, param.allInOnePDF, param.compressedPackage, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The electronic proof of delivery service can be used to retrieve proof of delivery for certain delivered DHL Express shipments 
     * Electronic Proof of Delivery
     * @param param the request object
     */
    public expApiShipmentsEpod(param: ShipmentApiExpApiShipmentsEpodRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressEPODResponse> {
        return this.api.expApiShipmentsEpod(param.shipmentTrackingNumber, param.shipperAccountNumber, param.content, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The upload-image service can be used to upload PLT images to a previously created shipment.  The PLT images for the shipment can be uploaded before the shipment has been physically  collected by DHL courier. However, the original shipment must contain WY as the special service otherwise,  an error will be returned when the customer wants to use the reupload function in this upload-image service.     IMPORTANT: Please note that at least 10mins must be given between the initial createShipment request and then  the upload-image request (including subsequent upload-image request).  
     * Upload Paperless Trade shipment (PLT) images of previously created shipment.
     * @param param the request object
     */
    public expApiShipmentsImgUpload(param: ShipmentApiExpApiShipmentsImgUploadRequest, options?: Configuration): Promise<void> {
        return this.api.expApiShipmentsImgUpload(param.shipmentTrackingNumber, param.supermodelIoLogisticsExpressImageUploadRequest,  options).toPromise();
    }

    /**
     * ## Upload Invoice Data with Shipment ID The upload invoice data service can be used to upload Commerical Invoice data with Shipment Identification Number for your DHL Express shipment.Customer can provide Commercial Invoice data before Shipment Data via Create Shipment flow or vice versa.  Important Note: UploadInvoiceData service is not enabled by default and must be requested per customer. Use of this service is only enabled on exceptional basis and DHL Express recommends to submit shipment requests together with a commercial invoice data.To enable use of UploadInvoiceData service, please contact your DHL Express IT representative. To use UploadInvoiceData service, it is required that \"PM\" service code is provided in MyDHL API Create Shipment request. \"PM\" service code is not enabled by  default for the customers, and needs to be enabled upon request.  When Shipment is created via MyDHL API Create Shipment service before uploading the Commercial Invoice (CIN) data,it is mandatory to provide the Shipment Identification Number as received in MyDHL API Create Shipment service Response. When Commercial Invoice (CIN) data is uploaded prior to creating a shipment via MyDHL API Create Shipment service, it is mandatory to provide Invoice Reference Number with Invoice Reference Type value \"CU\" and Shipper Account Number.   These elements are mandatory to facilitate an effective data merge of the Commercial Invoice (CIN) data with Shipment Data. As an output customer will receive Notification element value '0' on successful upload of Commercial Invoice (CIN) data.  DHL backend application performs the subsequent data merging process of the Shipment Data and Commercial Invoice data. 
     * Upload Commercial Invoice data for your DHL Express shipment
     * @param param the request object
     */
    public expApiShipmentsInvoiceDataAwb(param: ShipmentApiExpApiShipmentsInvoiceDataAwbRequest, options?: Configuration): Promise<void> {
        return this.api.expApiShipmentsInvoiceDataAwb(param.shipmentTrackingNumber, param.supermodelIoLogisticsExpressUploadInvoiceDataRequest, param.messageReference, param.messageReferenceDate, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}

import { ObservableTrackingApi } from "./ObservableAPI";
import { TrackingApiRequestFactory, TrackingApiResponseProcessor} from "../apis/TrackingApi";

export interface TrackingApiExpApiShipmentsTrackingRequest {
    /**
     * DHL Express shipment identification number
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    shipmentTrackingNumber: string
    /**
     * 
     * @type &#39;all-checkpoints&#39; | &#39;last-checkpoint&#39; | &#39;shipment-details-only&#39; | &#39;advance-shipment&#39; | &#39;bbx-children&#39;
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    trackingView?: 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children'
    /**
     * 
     * @type &#39;shipment&#39; | &#39;piece&#39; | &#39;all&#39;
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    levelOfDetail?: 'shipment' | 'piece' | 'all'
    /**
     * Please provide message reference 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    messageReferenceDate?: string
    /**
     * 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    acceptLanguage?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTracking
     */
    webstorePlatformVersion?: string
}

export interface TrackingApiExpApiShipmentsTrackingMultiRequest {
    /**
     * DHL Express shipment identification number
     * @type Array&lt;string&gt;
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    shipmentTrackingNumber?: Array<string>
    /**
     * DHL Express shipment piece tracking number
     * @type Array&lt;string&gt;
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    pieceTrackingNumber?: Array<string>
    /**
     * Shipment reference which was provided during the shipment label creation 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    shipmentReference?: string
    /**
     * Shipment reference type which was provided during the shipment label creation 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    shipmentReferenceType?: string
    /**
     * Shipper DHL Express Account number under which the shipment label was created 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    shipperAccountNumber?: string
    /**
     * When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the start of the period. 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    dateRangeFrom?: string
    /**
     * When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the end of the period. 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    dateRangeTo?: string
    /**
     * 
     * @type &#39;all-checkpoints&#39; | &#39;last-checkpoint&#39; | &#39;shipment-details-only&#39; | &#39;advance-shipment&#39; | &#39;bbx-children&#39;
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    trackingView?: 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children'
    /**
     * 
     * @type &#39;shipment&#39; | &#39;piece&#39; | &#39;all&#39;
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    levelOfDetail?: 'shipment' | 'piece' | 'all'
    /**
     * Please provide message reference 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    messageReference?: string
    /**
     * Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    messageReferenceDate?: string
    /**
     * 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    acceptLanguage?: string
    /**
     * Please provide name of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    pluginName?: string
    /**
     * Please provide version of the plugin (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    pluginVersion?: string
    /**
     * Please provide name of the shipping platform(applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    shippingSystemPlatformName?: string
    /**
     * Please provide version of the shipping platform (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    shippingSystemPlatformVersion?: string
    /**
     * Please provide name of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    webstorePlatformName?: string
    /**
     * Please provide version of the webstore platform (applicable to 3PV only) 
     * @type string
     * @memberof TrackingApiexpApiShipmentsTrackingMulti
     */
    webstorePlatformVersion?: string
}

export class ObjectTrackingApi {
    private api: ObservableTrackingApi

    public constructor(configuration: Configuration, requestFactory?: TrackingApiRequestFactory, responseProcessor?: TrackingApiResponseProcessor) {
        this.api = new ObservableTrackingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The Tracking service retrieves tracking statuses for a single DHL Express Shipment 
     * Track a single DHL Express Shipment
     * @param param the request object
     */
    public expApiShipmentsTracking(param: TrackingApiExpApiShipmentsTrackingRequest, options?: Configuration): Promise<SupermodelIoLogisticsExpressTrackingResponse> {
        return this.api.expApiShipmentsTracking(param.shipmentTrackingNumber, param.trackingView, param.levelOfDetail, param.messageReference, param.messageReferenceDate, param.acceptLanguage, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

    /**
     * The Tracking service retrieves tracking statuses for a single or multiple DHL Express Shipments 
     * Track a single or multiple DHL Express Shipments
     * @param param the request object
     */
    public expApiShipmentsTrackingMulti(param: TrackingApiExpApiShipmentsTrackingMultiRequest = {}, options?: Configuration): Promise<SupermodelIoLogisticsExpressTrackingResponse> {
        return this.api.expApiShipmentsTrackingMulti(param.shipmentTrackingNumber, param.pieceTrackingNumber, param.shipmentReference, param.shipmentReferenceType, param.shipperAccountNumber, param.dateRangeFrom, param.dateRangeTo, param.trackingView, param.levelOfDetail, param.messageReference, param.messageReferenceDate, param.acceptLanguage, param.pluginName, param.pluginVersion, param.shippingSystemPlatformName, param.shippingSystemPlatformVersion, param.webstorePlatformName, param.webstorePlatformVersion,  options).toPromise();
    }

}
