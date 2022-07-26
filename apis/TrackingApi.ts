// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { SupermodelIoLogisticsExpressErrorResponse } from '../models/SupermodelIoLogisticsExpressErrorResponse';
import { SupermodelIoLogisticsExpressTrackingResponse } from '../models/SupermodelIoLogisticsExpressTrackingResponse';

/**
 * no description
 */
export class TrackingApiRequestFactory extends BaseAPIRequestFactory {

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
    public async expApiShipmentsTracking(shipmentTrackingNumber: string, trackingView?: 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children', levelOfDetail?: 'shipment' | 'piece' | 'all', messageReference?: string, messageReferenceDate?: string, acceptLanguage?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'shipmentTrackingNumber' is not null or undefined
        if (shipmentTrackingNumber === null || shipmentTrackingNumber === undefined) {
            throw new RequiredError("TrackingApi", "expApiShipmentsTracking", "shipmentTrackingNumber");
        }













        // Path Params
        const localVarPath = '/shipments/{shipmentTrackingNumber}/tracking'
            .replace('{' + 'shipmentTrackingNumber' + '}', encodeURIComponent(String(shipmentTrackingNumber)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (trackingView !== undefined) {
            requestContext.setQueryParam("trackingView", ObjectSerializer.serialize(trackingView, "'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children'", ""));
        }

        // Query Params
        if (levelOfDetail !== undefined) {
            requestContext.setQueryParam("levelOfDetail", ObjectSerializer.serialize(levelOfDetail, "'shipment' | 'piece' | 'all'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Message-Reference", ObjectSerializer.serialize(messageReference, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Message-Reference-Date", ObjectSerializer.serialize(messageReferenceDate, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));

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
    public async expApiShipmentsTrackingMulti(shipmentTrackingNumber?: Array<string>, pieceTrackingNumber?: Array<string>, shipmentReference?: string, shipmentReferenceType?: string, shipperAccountNumber?: string, dateRangeFrom?: string, dateRangeTo?: string, trackingView?: 'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children', levelOfDetail?: 'shipment' | 'piece' | 'all', messageReference?: string, messageReferenceDate?: string, acceptLanguage?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



















        // Path Params
        const localVarPath = '/tracking';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (shipmentTrackingNumber !== undefined) {
            requestContext.setQueryParam("shipmentTrackingNumber", ObjectSerializer.serialize(shipmentTrackingNumber, "Array<string>", ""));
        }

        // Query Params
        if (pieceTrackingNumber !== undefined) {
            requestContext.setQueryParam("pieceTrackingNumber", ObjectSerializer.serialize(pieceTrackingNumber, "Array<string>", ""));
        }

        // Query Params
        if (shipmentReference !== undefined) {
            requestContext.setQueryParam("shipmentReference", ObjectSerializer.serialize(shipmentReference, "string", ""));
        }

        // Query Params
        if (shipmentReferenceType !== undefined) {
            requestContext.setQueryParam("shipmentReferenceType", ObjectSerializer.serialize(shipmentReferenceType, "string", ""));
        }

        // Query Params
        if (shipperAccountNumber !== undefined) {
            requestContext.setQueryParam("shipperAccountNumber", ObjectSerializer.serialize(shipperAccountNumber, "string", ""));
        }

        // Query Params
        if (dateRangeFrom !== undefined) {
            requestContext.setQueryParam("dateRangeFrom", ObjectSerializer.serialize(dateRangeFrom, "string", ""));
        }

        // Query Params
        if (dateRangeTo !== undefined) {
            requestContext.setQueryParam("dateRangeTo", ObjectSerializer.serialize(dateRangeTo, "string", ""));
        }

        // Query Params
        if (trackingView !== undefined) {
            requestContext.setQueryParam("trackingView", ObjectSerializer.serialize(trackingView, "'all-checkpoints' | 'last-checkpoint' | 'shipment-details-only' | 'advance-shipment' | 'bbx-children'", ""));
        }

        // Query Params
        if (levelOfDetail !== undefined) {
            requestContext.setQueryParam("levelOfDetail", ObjectSerializer.serialize(levelOfDetail, "'shipment' | 'piece' | 'all'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Message-Reference", ObjectSerializer.serialize(messageReference, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Message-Reference-Date", ObjectSerializer.serialize(messageReferenceDate, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Accept-Language", ObjectSerializer.serialize(acceptLanguage, "string", ""));

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

}

export class TrackingApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiShipmentsTracking
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiShipmentsTracking(response: ResponseContext): Promise<SupermodelIoLogisticsExpressTrackingResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressTrackingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressTrackingResponse", ""
            ) as SupermodelIoLogisticsExpressTrackingResponse;
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
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "No data found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SupermodelIoLogisticsExpressTrackingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressTrackingResponse", ""
            ) as SupermodelIoLogisticsExpressTrackingResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiShipmentsTrackingMulti
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiShipmentsTrackingMulti(response: ResponseContext): Promise<SupermodelIoLogisticsExpressTrackingResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressTrackingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressTrackingResponse", ""
            ) as SupermodelIoLogisticsExpressTrackingResponse;
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
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "No data found", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SupermodelIoLogisticsExpressTrackingResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressTrackingResponse", ""
            ) as SupermodelIoLogisticsExpressTrackingResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
