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
import { ObservableAddressApi } from './ObservableAPI';

import { AddressApiRequestFactory, AddressApiResponseProcessor} from "../apis/AddressApi";
export class PromiseAddressApi {
    private api: ObservableAddressApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AddressApiRequestFactory,
        responseProcessor?: AddressApiResponseProcessor
    ) {
        this.api = new ObservableAddressApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Validates if DHL Express has got pickup/delivery capabilities at origin/destination 
     * Validate DHL Express pickup/delivery capabilities at origin/destination
     * @param type 
     * @param countryCode A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
     * @param postalCode Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @param cityName Text specifying the city name
     * @param strictValidation If set to true service will return no records when exact valid match not found
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiAddressValidate(type: 'pickup' | 'delivery', countryCode: string, postalCode?: string, cityName?: string, strictValidation?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressAddressValidateResponse> {
        const result = this.api.expApiAddressValidate(type, countryCode, postalCode, cityName, strictValidation, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



import { ObservableIdentifierApi } from './ObservableAPI';

import { IdentifierApiRequestFactory, IdentifierApiResponseProcessor} from "../apis/IdentifierApi";
export class PromiseIdentifierApi {
    private api: ObservableIdentifierApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentifierApiRequestFactory,
        responseProcessor?: IdentifierApiResponseProcessor
    ) {
        this.api = new ObservableIdentifierApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Service to allocate identifiers upfront for DHL Express Breakbulk or Loose Break Bulk shipments. Requires authorization to use this service from DHL Express. 
     * Service to allocate identifiers upfront for DHL Express Breakbulk or Loose Break Bulk shipments
     * @param accountNumber DHL Express customer account number
     * @param type Type of DHL Express identifier to retrieve
     * @param size Number of identifiers to be retrieved
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiIdentifiers(accountNumber: string, type: 'SID' | 'PID' | 'ASID3' | 'ASID6' | 'ASID12' | 'ASID24' | 'HUID', size: string, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressIdentifierResponse> {
        const result = this.api.expApiIdentifiers(accountNumber, type, size, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



import { ObservableInvoiceApi } from './ObservableAPI';

import { InvoiceApiRequestFactory, InvoiceApiResponseProcessor} from "../apis/InvoiceApi";
export class PromiseInvoiceApi {
    private api: ObservableInvoiceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoiceApiRequestFactory,
        responseProcessor?: InvoiceApiResponseProcessor
    ) {
        this.api = new ObservableInvoiceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Upload invoice data The upload invoice data service can be used to upload Commerical Invoice data without Shipment Identification Number for your DHL Express shipment. Customer can provide Commercial Invoice data before Shipment Data via Create Shipment flow or vice versa.  Important Note: UploadInvoiceData service is not enabled by default and must be requested per customer.Use of this service is only enabled on exceptional basis and DHL Express recommends to submit shipment requests together with a commercial invoice data. To enable use of UploadInvoiceData service, please contact your DHL Express IT representative. To use UploadInvoiceData service, it is required that \"PM\" service code is provided in MyDHL API Create Shipment request. \"PM\" service code is not enabled by default for the customers, and needs to be enabled upon request.  When Shipment is created via MyDHL API Create Shipment service before uploading the Commercial Invoice (CIN) data,it is mandatory to provide the Shipment Identification Number as received in MyDHL API Create Shipment service Response. When Commercial Invoice (CIN) data is uploaded prior to creating a shipment via MyDHL API Create Shipment service, it is  mandatory to provide Invoice Reference Number with Invoice Reference Type value \"CU\" and Shipper Account Number.  These elements are mandatory to facilitate an effective data merge of the Commercial Invoice (CIN) data with Shipment Data. As an output customer will receive Notification element value '0' on successful upload of Commercial Invoice (CIN) data. DHL backend application performs the subsequent data merging process of the Shipment Data and Commercial Invoice data. 
     * Upload Commercial invoice data
     * @param supermodelIoLogisticsExpressUploadInvoiceDataRequestSID Details about the Commercial Invoice data to be uploaded
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiShipmentsInvoiceData(supermodelIoLogisticsExpressUploadInvoiceDataRequestSID: SupermodelIoLogisticsExpressUploadInvoiceDataRequestSID, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressUploadInvoiceDataResponse> {
        const result = this.api.expApiShipmentsInvoiceData(supermodelIoLogisticsExpressUploadInvoiceDataRequestSID, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



import { ObservablePickupApi } from './ObservableAPI';

import { PickupApiRequestFactory, PickupApiResponseProcessor} from "../apis/PickupApi";
export class PromisePickupApi {
    private api: ObservablePickupApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PickupApiRequestFactory,
        responseProcessor?: PickupApiResponseProcessor
    ) {
        this.api = new ObservablePickupApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The Pickup service creates a DHL Express pickup booking request 
     * Create a DHL Express pickup booking request
     * @param supermodelIoLogisticsExpressPickupRequest Details about the requested pickup
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiPickups(supermodelIoLogisticsExpressPickupRequest: SupermodelIoLogisticsExpressPickupRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressPickupResponse> {
        const result = this.api.expApiPickups(supermodelIoLogisticsExpressPickupRequest, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The Cancel Pickup service can be used to cancel a DHL Express pickup booking request 
     * Cancel a DHL Express pickup booking request
     * @param dispatchConfirmationNumber Shipment pickup confirmation number for example &#x60;PRG999126012345&#x60;
     * @param requestorName Name of the person requesting to cancel the scheduled pickup 
     * @param reason Provide why scheduled pickup is being cancelled 
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiPickupsCancel(dispatchConfirmationNumber: string, requestorName: string, reason: string, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<void> {
        const result = this.api.expApiPickupsCancel(dispatchConfirmationNumber, requestorName, reason, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The Update Pickup service can be used to update pickup information for an existing DHL Express pickup booking request 
     * Update pickup information for an existing DHL Express pickup booking request
     * @param dispatchConfirmationNumber Shipment pickup confirmation number for example &#x60;PRG999126012345&#x60;
     * @param supermodelIoLogisticsExpressUpdatePickupRequest Details about the requested pickup updates
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiPickupsUpdate(dispatchConfirmationNumber: string, supermodelIoLogisticsExpressUpdatePickupRequest: SupermodelIoLogisticsExpressUpdatePickupRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressUpdatePickupResponse> {
        const result = this.api.expApiPickupsUpdate(dispatchConfirmationNumber, supermodelIoLogisticsExpressUpdatePickupRequest, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



import { ObservableProductApi } from './ObservableAPI';

import { ProductApiRequestFactory, ProductApiResponseProcessor} from "../apis/ProductApi";
export class PromiseProductApi {
    private api: ObservableProductApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductApiRequestFactory,
        responseProcessor?: ProductApiResponseProcessor
    ) {
        this.api = new ObservableProductApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The GET Products API will return DHL's product capabilities for a certain set of input data.  Using the shipper and receiver address as well as the dimension and weight of the piece belonging to a shipment, this operation returns the available products. 
     * Retrieve available DHL Express products for a one piece Shipment
     * @param accountNumber DHL Express customer account number
     * @param originCountryCode A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
     * @param originCityName Text specifying the city name
     * @param destinationCountryCode A short text string code (see values defined in ISO 3166) specifying the shipment destination country. https://gs1.org/voc/Country, Alpha-2 Code
     * @param destinationCityName Text specifying the city name
     * @param weight Gross weight of the shipment including packaging.
     * @param length Total length of the shipment including packaging.
     * @param width Total width of the shipment including packaging.
     * @param height Total height of the shipment including packaging.
     * @param plannedShippingDate Timestamp represents the date you plan to ship your prospected shipment 
     * @param isCustomsDeclarable 
     * @param unitOfMeasurement The UnitOfMeasurement node conveys the unit of measurements used in the operation. This single value corresponds to the units of weight and measurement which are used throughout the message processing. 
     * @param originPostalCode Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @param destinationPostalCode Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @param nextBusinessDay When set to true and there are no products available for given plannedShippingDate then products available for the next possible pickup date are returned 
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiProducts(accountNumber: string, originCountryCode: string, originCityName: string, destinationCountryCode: string, destinationCityName: string, weight: number, length: number, width: number, height: number, plannedShippingDate: string, isCustomsDeclarable: boolean, unitOfMeasurement: 'metric' | 'imperial', originPostalCode?: string, destinationPostalCode?: string, nextBusinessDay?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressProducts> {
        const result = this.api.expApiProducts(accountNumber, originCountryCode, originCityName, destinationCountryCode, destinationCityName, weight, length, width, height, plannedShippingDate, isCustomsDeclarable, unitOfMeasurement, originPostalCode, destinationPostalCode, nextBusinessDay, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



import { ObservableRatingApi } from './ObservableAPI';

import { RatingApiRequestFactory, RatingApiResponseProcessor} from "../apis/RatingApi";
export class PromiseRatingApi {
    private api: ObservableRatingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RatingApiRequestFactory,
        responseProcessor?: RatingApiResponseProcessor
    ) {
        this.api = new ObservableRatingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The Landed Cost section allows further information around products being sold to be provided. In return the duty, tax and shipping charges are calculated in real time and provides transparency about any extra costs the buyer may have to pay before they reach them. 
     * Landed Cost
     * @param supermodelIoLogisticsExpressLandedCostRequest Details about the requested shipment
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiLandedCost(supermodelIoLogisticsExpressLandedCostRequest: SupermodelIoLogisticsExpressLandedCostRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressRates> {
        const result = this.api.expApiLandedCost(supermodelIoLogisticsExpressLandedCostRequest, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The Rate request will return DHL's product capabilities and prices (where applicable) based on the input data. Using the shipper and receiver address as well as the dimension and weights of the pieces belonging to a shipment, this operation returns the available products including the shipping price (where applicable) 
     * Retrieve Rates for a one piece Shipment
     * @param accountNumber DHL Express customer account number
     * @param originCountryCode A short text string code (see values defined in ISO 3166) specifying the shipment origin country. https://gs1.org/voc/Country, Alpha-2 Code
     * @param originCityName Text specifying the city name
     * @param destinationCountryCode A short text string code (see values defined in ISO 3166) specifying the shipment destination country. https://gs1.org/voc/Country, Alpha-2 Code
     * @param destinationCityName Text specifying the city name
     * @param weight Gross weight of the shipment including packaging.
     * @param length Total length of the shipment including packaging.
     * @param width Total width of the shipment including packaging.
     * @param height Total height of the shipment including packaging.
     * @param plannedShippingDate Timestamp represents the date you plan to ship your prospected shipment 
     * @param isCustomsDeclarable 
     * @param unitOfMeasurement The UnitOfMeasurement node conveys the unit of measurements used in the operation. This single value corresponds to the units of weight and measurement which are used throughout the message processing. 
     * @param originPostalCode Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @param destinationPostalCode Text specifying the postal code for an address. https://gs1.org/voc/postalCode
     * @param nextBusinessDay When set to true and there are no products available for given plannedShippingDate then products available for the next possible pickup date are returned 
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiRates(accountNumber: string, originCountryCode: string, originCityName: string, destinationCountryCode: string, destinationCityName: string, weight: number, length: number, width: number, height: number, plannedShippingDate: string, isCustomsDeclarable: boolean, unitOfMeasurement: 'metric' | 'imperial', originPostalCode?: string, destinationPostalCode?: string, nextBusinessDay?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressRates> {
        const result = this.api.expApiRates(accountNumber, originCountryCode, originCityName, destinationCountryCode, destinationCityName, weight, length, width, height, plannedShippingDate, isCustomsDeclarable, unitOfMeasurement, originPostalCode, destinationPostalCode, nextBusinessDay, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The Rate request will return DHL's product capabilities and prices (where applicable) based on the input data. Using the shipper and receiver address as well as the dimension and weights of the pieces belonging to a shipment, this operation returns the available products including the shipping price (where applicable) 
     * Retrieve Rates for Multi-piece Shipments
     * @param supermodelIoLogisticsExpressRateRequest Details about the requested shipment
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiRatesMany(supermodelIoLogisticsExpressRateRequest: SupermodelIoLogisticsExpressRateRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressRates> {
        const result = this.api.expApiRatesMany(supermodelIoLogisticsExpressRateRequest, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



import { ObservableShipmentApi } from './ObservableAPI';

import { ShipmentApiRequestFactory, ShipmentApiResponseProcessor} from "../apis/ShipmentApi";
export class PromiseShipmentApi {
    private api: ObservableShipmentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ShipmentApiRequestFactory,
        responseProcessor?: ShipmentApiResponseProcessor
    ) {
        this.api = new ObservableShipmentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * ## Create Shipment The ShipmentRequest Operation will allow you to generate an AWB number and piece IDs, generate a shipping label, transmit manifest shipment detail to DHL, and optionally book a courier for the pickup of a shipment. The key elements in the response of the Shipment Request will be a base64 encoded PDF label and the Shipment and Piece identification numbers, which you can use for tracking on the DHL web site. While the RateRequest and ShipmentRequest services can be used independently, DHL recommends the use of RateRequest to first validate the products available for the shipper/receiver. The global product codes which are output during the RateResponse can be used directly as input into the Shipment Request, as both perform similar validations in terms of service capability. 
     * Create Shipment
     * @param supermodelIoLogisticsExpressCreateShipmentRequest Details about the shipment to be created
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiShipments(supermodelIoLogisticsExpressCreateShipmentRequest: SupermodelIoLogisticsExpressCreateShipmentRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressCreateShipmentResponse> {
        const result = this.api.expApiShipments(supermodelIoLogisticsExpressCreateShipmentRequest, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The Get Image service can be used to retrieve customer's own uploaded Commercial Invoice, Waybill Document  or supporting documents that uploaded during shipment creation.  
     * Get Image
     * @param shipmentTrackingNumber DHL Express shipment identification number
     * @param shipperAccountNumber DHL Express customer shipper account number
     * @param typeCode Please provide correct document type.
     * @param pickupYearAndMonth Please provide the pickup&#39;s date in YYYY-MM format 
     * @param encodingFormat Please provide the document image encoding format in pdf or tiff format 
     * @param allInOnePDF Option to return all the document images in a single PDF file 
     * @param compressedPackage Option to return all the document images in a compressed package 
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiShipmentsDocumentimage(shipmentTrackingNumber: string, shipperAccountNumber: string, typeCode: 'waybill' | 'commercial-invoice' | 'customs-entry', pickupYearAndMonth: string, encodingFormat?: 'pdf' | 'tiff', allInOnePDF?: boolean, compressedPackage?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressDocumentImageResponse> {
        const result = this.api.expApiShipmentsDocumentimage(shipmentTrackingNumber, shipperAccountNumber, typeCode, pickupYearAndMonth, encodingFormat, allInOnePDF, compressedPackage, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The electronic proof of delivery service can be used to retrieve proof of delivery for certain delivered DHL Express shipments 
     * Electronic Proof of Delivery
     * @param shipmentTrackingNumber DHL Express shipment identification number
     * @param shipperAccountNumber DHL Express customer shipper account number
     * @param content 
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiShipmentsEpod(shipmentTrackingNumber: string, shipperAccountNumber?: string, content?: 'epod-detail' | 'epod-summary' | 'epod-detail-esig' | 'epod-summary-esig' | 'epod-table', messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressEPODResponse> {
        const result = this.api.expApiShipmentsEpod(shipmentTrackingNumber, shipperAccountNumber, content, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The upload-image service can be used to upload PLT images to a previously created shipment.  The PLT images for the shipment can be uploaded before the shipment has been physically  collected by DHL courier. However, the original shipment must contain WY as the special service otherwise,  an error will be returned when the customer wants to use the reupload function in this upload-image service.     IMPORTANT: Please note that at least 10mins must be given between the initial createShipment request and then  the upload-image request (including subsequent upload-image request).  
     * Upload Paperless Trade shipment (PLT) images of previously created shipment.
     * @param shipmentTrackingNumber DHL Express shipment identification number
     * @param supermodelIoLogisticsExpressImageUploadRequest Details about the shipment images
     */
    public expApiShipmentsImgUpload(shipmentTrackingNumber: string, supermodelIoLogisticsExpressImageUploadRequest: SupermodelIoLogisticsExpressImageUploadRequest, _options?: Configuration): Promise<void> {
        const result = this.api.expApiShipmentsImgUpload(shipmentTrackingNumber, supermodelIoLogisticsExpressImageUploadRequest, _options);
        return result.toPromise();
    }

    /**
     * ## Upload Invoice Data with Shipment ID The upload invoice data service can be used to upload Commerical Invoice data with Shipment Identification Number for your DHL Express shipment.Customer can provide Commercial Invoice data before Shipment Data via Create Shipment flow or vice versa.  Important Note: UploadInvoiceData service is not enabled by default and must be requested per customer. Use of this service is only enabled on exceptional basis and DHL Express recommends to submit shipment requests together with a commercial invoice data.To enable use of UploadInvoiceData service, please contact your DHL Express IT representative. To use UploadInvoiceData service, it is required that \"PM\" service code is provided in MyDHL API Create Shipment request. \"PM\" service code is not enabled by  default for the customers, and needs to be enabled upon request.  When Shipment is created via MyDHL API Create Shipment service before uploading the Commercial Invoice (CIN) data,it is mandatory to provide the Shipment Identification Number as received in MyDHL API Create Shipment service Response. When Commercial Invoice (CIN) data is uploaded prior to creating a shipment via MyDHL API Create Shipment service, it is mandatory to provide Invoice Reference Number with Invoice Reference Type value \"CU\" and Shipper Account Number.   These elements are mandatory to facilitate an effective data merge of the Commercial Invoice (CIN) data with Shipment Data. As an output customer will receive Notification element value '0' on successful upload of Commercial Invoice (CIN) data.  DHL backend application performs the subsequent data merging process of the Shipment Data and Commercial Invoice data. 
     * Upload Commercial Invoice data for your DHL Express shipment
     * @param shipmentTrackingNumber DHL Express shipment identification number
     * @param supermodelIoLogisticsExpressUploadInvoiceDataRequest Details about the invoice data
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiShipmentsInvoiceDataAwb(shipmentTrackingNumber: string, supermodelIoLogisticsExpressUploadInvoiceDataRequest: SupermodelIoLogisticsExpressUploadInvoiceDataRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<void> {
        const result = this.api.expApiShipmentsInvoiceDataAwb(shipmentTrackingNumber, supermodelIoLogisticsExpressUploadInvoiceDataRequest, messageReference, messageReferenceDate, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



import { ObservableTrackingApi } from './ObservableAPI';

import { TrackingApiRequestFactory, TrackingApiResponseProcessor} from "../apis/TrackingApi";
export class PromiseTrackingApi {
    private api: ObservableTrackingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TrackingApiRequestFactory,
        responseProcessor?: TrackingApiResponseProcessor
    ) {
        this.api = new ObservableTrackingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * The Tracking service retrieves tracking statuses for a single DHL Express Shipment 
     * Track a single DHL Express Shipment
     * @param shipmentTrackingNumber DHL Express shipment identification number
     * @param trackingView 
     * @param levelOfDetail 
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param acceptLanguage 
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiShipmentsTracking(shipmentTrackingNumber: string, trackingView?: 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children', levelOfDetail?: 'shipment' | 'piece' | 'all', messageReference?: string, messageReferenceDate?: string, acceptLanguage?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressTrackingResponse> {
        const result = this.api.expApiShipmentsTracking(shipmentTrackingNumber, trackingView, levelOfDetail, messageReference, messageReferenceDate, acceptLanguage, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }

    /**
     * The Tracking service retrieves tracking statuses for a single or multiple DHL Express Shipments 
     * Track a single or multiple DHL Express Shipments
     * @param shipmentTrackingNumber DHL Express shipment identification number
     * @param pieceTrackingNumber DHL Express shipment piece tracking number
     * @param shipmentReference Shipment reference which was provided during the shipment label creation 
     * @param shipmentReferenceType Shipment reference type which was provided during the shipment label creation 
     * @param shipperAccountNumber Shipper DHL Express Account number under which the shipment label was created 
     * @param dateRangeFrom When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the start of the period. 
     * @param dateRangeTo When tracking by Shipment reference you need to restrict the search by timeframe. Please provide the end of the period. 
     * @param trackingView 
     * @param levelOfDetail 
     * @param messageReference Please provide message reference 
     * @param messageReferenceDate Optional reference date in the  HTTP-date format https://tools.ietf.org/html/rfc7231#section-7.1.1.2
     * @param acceptLanguage 
     * @param pluginName Please provide name of the plugin (applicable to 3PV only) 
     * @param pluginVersion Please provide version of the plugin (applicable to 3PV only) 
     * @param shippingSystemPlatformName Please provide name of the shipping platform(applicable to 3PV only) 
     * @param shippingSystemPlatformVersion Please provide version of the shipping platform (applicable to 3PV only) 
     * @param webstorePlatformName Please provide name of the webstore platform (applicable to 3PV only) 
     * @param webstorePlatformVersion Please provide version of the webstore platform (applicable to 3PV only) 
     */
    public expApiShipmentsTrackingMulti(shipmentTrackingNumber?: Array<string>, pieceTrackingNumber?: Array<string>, shipmentReference?: string, shipmentReferenceType?: string, shipperAccountNumber?: string, dateRangeFrom?: string, dateRangeTo?: string, trackingView?: 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children', levelOfDetail?: 'shipment' | 'piece' | 'all', messageReference?: string, messageReferenceDate?: string, acceptLanguage?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<SupermodelIoLogisticsExpressTrackingResponse> {
        const result = this.api.expApiShipmentsTrackingMulti(shipmentTrackingNumber, pieceTrackingNumber, shipmentReference, shipmentReferenceType, shipperAccountNumber, dateRangeFrom, dateRangeTo, trackingView, levelOfDetail, messageReference, messageReferenceDate, acceptLanguage, pluginName, pluginVersion, shippingSystemPlatformName, shippingSystemPlatformVersion, webstorePlatformName, webstorePlatformVersion, _options);
        return result.toPromise();
    }


}



