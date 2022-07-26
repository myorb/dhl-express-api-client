// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { SupermodelIoLogisticsExpressAddressValidateResponse } from '../models/SupermodelIoLogisticsExpressAddressValidateResponse';
import { SupermodelIoLogisticsExpressErrorResponse } from '../models/SupermodelIoLogisticsExpressErrorResponse';

/**
 * no description
 */
export class AddressApiRequestFactory extends BaseAPIRequestFactory {

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
    public async expApiAddressValidate(type: 'pickup' | 'delivery', countryCode: string, postalCode?: string, cityName?: string, strictValidation?: boolean, messageReference?: string, messageReferenceDate?: string, pluginName?: string, pluginVersion?: string, shippingSystemPlatformName?: string, shippingSystemPlatformVersion?: string, webstorePlatformName?: string, webstorePlatformVersion?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'type' is not null or undefined
        if (type === null || type === undefined) {
            throw new RequiredError("AddressApi", "expApiAddressValidate", "type");
        }


        // verify required parameter 'countryCode' is not null or undefined
        if (countryCode === null || countryCode === undefined) {
            throw new RequiredError("AddressApi", "expApiAddressValidate", "countryCode");
        }













        // Path Params
        const localVarPath = '/address-validate';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (type !== undefined) {
            requestContext.setQueryParam("type", ObjectSerializer.serialize(type, "'pickup' | 'delivery'", ""));
        }

        // Query Params
        if (countryCode !== undefined) {
            requestContext.setQueryParam("countryCode", ObjectSerializer.serialize(countryCode, "string", ""));
        }

        // Query Params
        if (postalCode !== undefined) {
            requestContext.setQueryParam("postalCode", ObjectSerializer.serialize(postalCode, "string", ""));
        }

        // Query Params
        if (cityName !== undefined) {
            requestContext.setQueryParam("cityName", ObjectSerializer.serialize(cityName, "string", ""));
        }

        // Query Params
        if (strictValidation !== undefined) {
            requestContext.setQueryParam("strictValidation", ObjectSerializer.serialize(strictValidation, "boolean", ""));
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

}

export class AddressApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to expApiAddressValidate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async expApiAddressValidate(response: ResponseContext): Promise<SupermodelIoLogisticsExpressAddressValidateResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressAddressValidateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressAddressValidateResponse", ""
            ) as SupermodelIoLogisticsExpressAddressValidateResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: SupermodelIoLogisticsExpressErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressErrorResponse", ""
            ) as SupermodelIoLogisticsExpressErrorResponse;
            throw new ApiException<SupermodelIoLogisticsExpressErrorResponse>(response.httpStatusCode, "Wrong input parameters", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SupermodelIoLogisticsExpressAddressValidateResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SupermodelIoLogisticsExpressAddressValidateResponse", ""
            ) as SupermodelIoLogisticsExpressAddressValidateResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
