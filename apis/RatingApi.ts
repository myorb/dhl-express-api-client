// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { SupermodelIoLogisticsExpressErrorResponse } from '../models/SupermodelIoLogisticsExpressErrorResponse';
import { SupermodelIoLogisticsExpressLandedCostRequest } from '../models/SupermodelIoLogisticsExpressLandedCostRequest';
import { SupermodelIoLogisticsExpressRateRequest } from '../models/SupermodelIoLogisticsExpressRateRequest';
import { SupermodelIoLogisticsExpressRates } from '../models/SupermodelIoLogisticsExpressRates';

/**
 * no description
 */
export class RatingApiRequestFactory extends BaseAPIRequestFactory {

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
    public async expApiLandedCost(supermodelIoLogisticsExpressLandedCostRequest: SupermodelIoLogisticsExpressLandedCostRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'supermodelIoLogisticsExpressLandedCostRequest' is not null or undefined
        if (supermodelIoLogisticsExpressLandedCostRequest === null || supermodelIoLogisticsExpressLandedCostRequest === undefined) {
            throw new RequiredError("RatingApi", "expApiLandedCost", "supermodelIoLogisticsExpressLandedCostRequest");
        }










        // Path Params
        const localVarPath = '/landed-cost';

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
            ObjectSerializer.serialize(supermodelIoLogisticsExpressLandedCostRequest, "SupermodelIoLogisticsExpressLandedCostRequest", ""),
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
    public async expApiRates(accountNumber: string, originCountryCode: string, originCityName: string, destinationCountryCode: string, destinationCityName: string, weight: number, length: number, width: number, height: number, plannedShippingDate: string, isCustomsDeclarable: boolean, unitOfMeasurement: 'metric' | 'imperial', originPostalCode?: string, destinationPostalCode?: string, nextBusinessDay?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'accountNumber' is not null or undefined
        if (accountNumber === null || accountNumber === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "accountNumber");
        }


        // verify required parameter 'originCountryCode' is not null or undefined
        if (originCountryCode === null || originCountryCode === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "originCountryCode");
        }


        // verify required parameter 'originCityName' is not null or undefined
        if (originCityName === null || originCityName === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "originCityName");
        }


        // verify required parameter 'destinationCountryCode' is not null or undefined
        if (destinationCountryCode === null || destinationCountryCode === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "destinationCountryCode");
        }


        // verify required parameter 'destinationCityName' is not null or undefined
        if (destinationCityName === null || destinationCityName === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "destinationCityName");
        }


        // verify required parameter 'weight' is not null or undefined
        if (weight === null || weight === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "weight");
        }


        // verify required parameter 'length' is not null or undefined
        if (length === null || length === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "length");
        }


        // verify required parameter 'width' is not null or undefined
        if (width === null || width === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "width");
        }


        // verify required parameter 'height' is not null or undefined
        if (height === null || height === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "height");
        }


        // verify required parameter 'plannedShippingDate' is not null or undefined
        if (plannedShippingDate === null || plannedShippingDate === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "plannedShippingDate");
        }


        // verify required parameter 'isCustomsDeclarable' is not null or undefined
        if (isCustomsDeclarable === null || isCustomsDeclarable === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "isCustomsDeclarable");
        }


        // verify required parameter 'unitOfMeasurement' is not null or undefined
        if (unitOfMeasurement === null || unitOfMeasurement === undefined) {
            throw new RequiredError("RatingApi", "expApiRates", "unitOfMeasurement");
        }













        // Path Params
        const localVarPath = '/rates';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accountNumber !== undefined) {
            requestContext.setQueryParam("accountNumber", ObjectSerializer.serialize(accountNumber, "string", ""));
        }

        // Query Params
        if (originCountryCode !== undefined) {
            requestContext.setQueryParam("originCountryCode", ObjectSerializer.serialize(originCountryCode, "string", ""));
        }

        // Query Params
        if (originPostalCode !== undefined) {
            requestContext.setQueryParam("originPostalCode", ObjectSerializer.serialize(originPostalCode, "string", ""));
        }

        // Query Params
        if (originCityName !== undefined) {
            requestContext.setQueryParam("originCityName", ObjectSerializer.serialize(originCityName, "string", ""));
        }

        // Query Params
        if (destinationCountryCode !== undefined) {
            requestContext.setQueryParam("destinationCountryCode", ObjectSerializer.serialize(destinationCountryCode, "string", ""));
        }

        // Query Params
        if (destinationPostalCode !== undefined) {
            requestContext.setQueryParam("destinationPostalCode", ObjectSerializer.serialize(destinationPostalCode, "string", ""));
        }

        // Query Params
        if (destinationCityName !== undefined) {
            requestContext.setQueryParam("destinationCityName", ObjectSerializer.serialize(destinationCityName, "string", ""));
        }

        // Query Params
        if (weight !== undefined) {
            requestContext.setQueryParam("weight", ObjectSerializer.serialize(weight, "number", ""));
        }

        // Query Params
        if (length !== undefined) {
            requestContext.setQueryParam("length", ObjectSerializer.serialize(length, "number", ""));
        }

        // Query Params
        if (width !== undefined) {
            requestContext.setQueryParam("width", ObjectSerializer.serialize(width, "number", ""));
        }

        // Query Params
        if (height !== undefined) {
            requestContext.setQueryParam("height", ObjectSerializer.serialize(height, "number", ""));
        }

        // Query Params
        if (plannedShippingDate !== undefined) {
            requestContext.setQueryParam("plannedShippingDate", ObjectSerializer.serialize(plannedShippingDate, "string", ""));
        }

        // Query Params
        if (isCustomsDeclarable !== undefined) {
            requestContext.setQueryParam("isCustomsDeclarable", ObjectSerializer.serialize(isCustomsDeclarable, "boolean", ""));
        }

        // Query Params
        if (unitOfMeasurement !== undefined) {
            requestContext.setQueryParam("unitOfMeasurement", ObjectSerializer.serialize(unitOfMeasurement, "'metric' | 'imperial'", ""));
        }

        // Query Params
        if (nextBusinessDay !== undefined) {
            requestContext.setQueryParam("nextBusinessDay", ObjectSerializer.serialize(nextBusinessDay, "boolean", ""));
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
    public async expApiRatesMany(supermodelIoLogisticsExpressRateRequest: SupermodelIoLogisticsExpressRateRequest, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'supermodelIoLogisticsExpressRateRequest' is not null or undefined
        if (supermodelIoLogisticsExpressRateRequest === null || supermodelIoLogisticsExpressRateRequest === undefined) {
            throw new RequiredError("RatingApi", "expApiRatesMany", "supermodelIoLogisticsExpressRateRequest");
        }










        // Path Params
        const localVarPath = '/rates';

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
            ObjectSerializer.serialize(supermodelIoLogisticsExpressRateRequest, "SupermodelIoLogisticsExpressRateRequest", ""),
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

export class RatingApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiLandedCost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiLandedCost(response: ResponseContext): Promise<SupermodelIoLogisticsExpressRates > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressRates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressRates", ""
            ) as SupermodelIoLogisticsExpressRates;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
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
            const body: SupermodelIoLogisticsExpressRates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressRates", ""
            ) as SupermodelIoLogisticsExpressRates;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiRates
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiRates(response: ResponseContext): Promise<SupermodelIoLogisticsExpressRates > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressRates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressRates", ""
            ) as SupermodelIoLogisticsExpressRates;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
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
            const body: SupermodelIoLogisticsExpressRates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressRates", ""
            ) as SupermodelIoLogisticsExpressRates;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiRatesMany
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiRatesMany(response: ResponseContext): Promise<SupermodelIoLogisticsExpressRates > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressRates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressRates", ""
            ) as SupermodelIoLogisticsExpressRates;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
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
            const body: SupermodelIoLogisticsExpressRates = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressRates", ""
            ) as SupermodelIoLogisticsExpressRates;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
