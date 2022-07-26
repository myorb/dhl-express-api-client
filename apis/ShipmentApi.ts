// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { SupermodelIoLogisticsExpressCreateShipmentRequest } from '../models/SupermodelIoLogisticsExpressCreateShipmentRequest';
import { SupermodelIoLogisticsExpressCreateShipmentResponse } from '../models/SupermodelIoLogisticsExpressCreateShipmentResponse';
import { SupermodelIoLogisticsExpressDocumentImageResponse } from '../models/SupermodelIoLogisticsExpressDocumentImageResponse';
import { SupermodelIoLogisticsExpressEPODResponse } from '../models/SupermodelIoLogisticsExpressEPODResponse';
import { SupermodelIoLogisticsExpressErrorResponse } from '../models/SupermodelIoLogisticsExpressErrorResponse';
import { SupermodelIoLogisticsExpressImageUploadRequest } from '../models/SupermodelIoLogisticsExpressImageUploadRequest';
import { SupermodelIoLogisticsExpressUploadInvoiceDataRequest } from '../models/SupermodelIoLogisticsExpressUploadInvoiceDataRequest';

/**
 * no description
 */
export class ShipmentApiRequestFactory extends BaseAPIRequestFactory {

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
    public async expApiShipments(supermodelIoLogisticsExpressCreateShipmentRequest: SupermodelIoLogisticsExpressCreateShipmentRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'supermodelIoLogisticsExpressCreateShipmentRequest' is not null or undefined
        if (supermodelIoLogisticsExpressCreateShipmentRequest === null || supermodelIoLogisticsExpressCreateShipmentRequest === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipments", "supermodelIoLogisticsExpressCreateShipmentRequest");
        }










        // Path Params
        const localVarPath = '/shipments';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Message-Reference", ObjectSerializer.serialize(messageReference, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Message-Reference-Date", ObjectSerializer.serialize(messageReferenceDate, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Name", ObjectSerializer.serialize(pluginName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Version", ObjectSerializer.serialize(pluginVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Name", ObjectSerializer.serialize(shippingSystemPlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Version", ObjectSerializer.serialize(shippingSystemPlatformVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Name", ObjectSerializer.serialize(webstorePlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Version", ObjectSerializer.serialize(webstorePlatformVersion, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(supermodelIoLogisticsExpressCreateShipmentRequest, "SupermodelIoLogisticsExpressCreateShipmentRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async expApiShipmentsDocumentimage(shipmentTrackingNumber: string, shipperAccountNumber: string, typeCode: 'waybill' | 'commercial-invoice' | 'customs-entry', pickupYearAndMonth: string, encodingFormat?: 'pdf' | 'tiff', allInOnePDF?: boolean, compressedPackage?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentTrackingNumber' is not null or undefined
        if (shipmentTrackingNumber === null || shipmentTrackingNumber === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsDocumentimage", "shipmentTrackingNumber");
        }


        // verify required parameter 'shipperAccountNumber' is not null or undefined
        if (shipperAccountNumber === null || shipperAccountNumber === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsDocumentimage", "shipperAccountNumber");
        }


        // verify required parameter 'typeCode' is not null or undefined
        if (typeCode === null || typeCode === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsDocumentimage", "typeCode");
        }


        // verify required parameter 'pickupYearAndMonth' is not null or undefined
        if (pickupYearAndMonth === null || pickupYearAndMonth === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsDocumentimage", "pickupYearAndMonth");
        }













        // Path Params
        const localVarPath = '/shipments/{shipmentTrackingNumber}/get-image'
            .replace('{' + 'shipmentTrackingNumber' + '}', encodeURIComponent(String(shipmentTrackingNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (shipperAccountNumber !== undefined) {
            requestContext.setQueryParam("shipperAccountNumber", ObjectSerializer.serialize(shipperAccountNumber, "string", ""));
        }

        // Query Params
        if (typeCode !== undefined) {
            requestContext.setQueryParam("typeCode", ObjectSerializer.serialize(typeCode, "'waybill' | 'commercial-invoice' | 'customs-entry'", ""));
        }

        // Query Params
        if (pickupYearAndMonth !== undefined) {
            requestContext.setQueryParam("pickupYearAndMonth", ObjectSerializer.serialize(pickupYearAndMonth, "string", ""));
        }

        // Query Params
        if (encodingFormat !== undefined) {
            requestContext.setQueryParam("encodingFormat", ObjectSerializer.serialize(encodingFormat, "'pdf' | 'tiff'", ""));
        }

        // Query Params
        if (allInOnePDF !== undefined) {
            requestContext.setQueryParam("allInOnePDF", ObjectSerializer.serialize(allInOnePDF, "boolean", ""));
        }

        // Query Params
        if (compressedPackage !== undefined) {
            requestContext.setQueryParam("compressedPackage", ObjectSerializer.serialize(compressedPackage, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Message-Reference", ObjectSerializer.serialize(messageReference, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Message-Reference-Date", ObjectSerializer.serialize(messageReferenceDate, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Name", ObjectSerializer.serialize(pluginName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Version", ObjectSerializer.serialize(pluginVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Name", ObjectSerializer.serialize(shippingSystemPlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Version", ObjectSerializer.serialize(shippingSystemPlatformVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Name", ObjectSerializer.serialize(webstorePlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Version", ObjectSerializer.serialize(webstorePlatformVersion, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async expApiShipmentsEpod(shipmentTrackingNumber: string, shipperAccountNumber?: string, content?: 'epod-detail' | 'epod-summary' | 'epod-detail-esig' | 'epod-summary-esig' | 'epod-table', messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentTrackingNumber' is not null or undefined
        if (shipmentTrackingNumber === null || shipmentTrackingNumber === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsEpod", "shipmentTrackingNumber");
        }












        // Path Params
        const localVarPath = '/shipments/{shipmentTrackingNumber}/proof-of-delivery'
            .replace('{' + 'shipmentTrackingNumber' + '}', encodeURIComponent(String(shipmentTrackingNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (shipperAccountNumber !== undefined) {
            requestContext.setQueryParam("shipperAccountNumber", ObjectSerializer.serialize(shipperAccountNumber, "string", ""));
        }

        // Query Params
        if (content !== undefined) {
            requestContext.setQueryParam("content", ObjectSerializer.serialize(content, "'epod-detail' | 'epod-summary' | 'epod-detail-esig' | 'epod-summary-esig' | 'epod-table'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Message-Reference", ObjectSerializer.serialize(messageReference, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Message-Reference-Date", ObjectSerializer.serialize(messageReferenceDate, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Name", ObjectSerializer.serialize(pluginName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Version", ObjectSerializer.serialize(pluginVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Name", ObjectSerializer.serialize(shippingSystemPlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Version", ObjectSerializer.serialize(shippingSystemPlatformVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Name", ObjectSerializer.serialize(webstorePlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Version", ObjectSerializer.serialize(webstorePlatformVersion, "string", ""));


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * The upload-image service can be used to upload PLT images to a previously created shipment.  The PLT images for the shipment can be uploaded before the shipment has been physically  collected by DHL courier. However, the original shipment must contain WY as the special service otherwise,  an error will be returned when the customer wants to use the reupload function in this upload-image service.     IMPORTANT: Please note that at least 10mins must be given between the initial createShipment request and then  the upload-image request (including subsequent upload-image request).  
     * Upload Paperless Trade shipment (PLT) images of previously created shipment.
     * @param shipmentTrackingNumber DHL Express shipment identification number
     * @param supermodelIoLogisticsExpressImageUploadRequest Details about the shipment images
     */
    public async expApiShipmentsImgUpload(shipmentTrackingNumber: string, supermodelIoLogisticsExpressImageUploadRequest: SupermodelIoLogisticsExpressImageUploadRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentTrackingNumber' is not null or undefined
        if (shipmentTrackingNumber === null || shipmentTrackingNumber === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsImgUpload", "shipmentTrackingNumber");
        }


        // verify required parameter 'supermodelIoLogisticsExpressImageUploadRequest' is not null or undefined
        if (supermodelIoLogisticsExpressImageUploadRequest === null || supermodelIoLogisticsExpressImageUploadRequest === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsImgUpload", "supermodelIoLogisticsExpressImageUploadRequest");
        }


        // Path Params
        const localVarPath = '/shipments/{shipmentTrackingNumber}/upload-image'
            .replace('{' + 'shipmentTrackingNumber' + '}', encodeURIComponent(String(shipmentTrackingNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(supermodelIoLogisticsExpressImageUploadRequest, "SupermodelIoLogisticsExpressImageUploadRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async expApiShipmentsInvoiceDataAwb(shipmentTrackingNumber: string, supermodelIoLogisticsExpressUploadInvoiceDataRequest: SupermodelIoLogisticsExpressUploadInvoiceDataRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentTrackingNumber' is not null or undefined
        if (shipmentTrackingNumber === null || shipmentTrackingNumber === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsInvoiceDataAwb", "shipmentTrackingNumber");
        }


        // verify required parameter 'supermodelIoLogisticsExpressUploadInvoiceDataRequest' is not null or undefined
        if (supermodelIoLogisticsExpressUploadInvoiceDataRequest === null || supermodelIoLogisticsExpressUploadInvoiceDataRequest === undefined) {
            throw new RequiredError("ShipmentApi", "expApiShipmentsInvoiceDataAwb", "supermodelIoLogisticsExpressUploadInvoiceDataRequest");
        }










        // Path Params
        const localVarPath = '/shipments/{shipmentTrackingNumber}/upload-invoice-data'
            .replace('{' + 'shipmentTrackingNumber' + '}', encodeURIComponent(String(shipmentTrackingNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Message-Reference", ObjectSerializer.serialize(messageReference, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Message-Reference-Date", ObjectSerializer.serialize(messageReferenceDate, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Name", ObjectSerializer.serialize(pluginName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Plugin-Version", ObjectSerializer.serialize(pluginVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Name", ObjectSerializer.serialize(shippingSystemPlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Shipping-System-Platform-Version", ObjectSerializer.serialize(shippingSystemPlatformVersion, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Name", ObjectSerializer.serialize(webstorePlatformName, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Webstore-Platform-Version", ObjectSerializer.serialize(webstorePlatformVersion, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(supermodelIoLogisticsExpressUploadInvoiceDataRequest, "SupermodelIoLogisticsExpressUploadInvoiceDataRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["basicAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ShipmentApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiShipments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiShipments(response: ResponseContext): Promise<SupermodelIoLogisticsExpressCreateShipmentResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressCreateShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressCreateShipmentResponse", ""
            ) as SupermodelIoLogisticsExpressCreateShipmentResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Wrong input parameters", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Wrong input parameters", body, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Process errors", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SupermodelIoLogisticsExpressCreateShipmentResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressCreateShipmentResponse", ""
            ) as SupermodelIoLogisticsExpressCreateShipmentResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiShipmentsDocumentimage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiShipmentsDocumentimage(response: ResponseContext): Promise<SupermodelIoLogisticsExpressDocumentImageResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressDocumentImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressDocumentImageResponse", ""
            ) as SupermodelIoLogisticsExpressDocumentImageResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Wrong input parameters", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "No document image found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SupermodelIoLogisticsExpressDocumentImageResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressDocumentImageResponse", ""
            ) as SupermodelIoLogisticsExpressDocumentImageResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiShipmentsEpod
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiShipmentsEpod(response: ResponseContext): Promise<SupermodelIoLogisticsExpressEPODResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressEPODResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressEPODResponse", ""
            ) as SupermodelIoLogisticsExpressEPODResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Wrong input parameters", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "No electronic proof of delivery found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SupermodelIoLogisticsExpressEPODResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressEPODResponse", ""
            ) as SupermodelIoLogisticsExpressEPODResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiShipmentsImgUpload
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiShipmentsImgUpload(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Wrong input parameters", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "No shipment details found", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Unprocessable Entity", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiShipmentsInvoiceDataAwb
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiShipmentsInvoiceDataAwb(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Wrong input parameters", body, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Unprocessable Entity", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
