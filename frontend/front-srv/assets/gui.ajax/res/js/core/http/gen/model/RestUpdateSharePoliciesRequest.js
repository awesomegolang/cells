/**
 * Pydio Cells Rest API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import ServiceResourcePolicy from './ServiceResourcePolicy';





/**
* The RestUpdateSharePoliciesRequest model module.
* @module model/RestUpdateSharePoliciesRequest
* @version 1.0
*/
export default class RestUpdateSharePoliciesRequest {
    /**
    * Constructs a new <code>RestUpdateSharePoliciesRequest</code>.
    * @alias module:model/RestUpdateSharePoliciesRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>RestUpdateSharePoliciesRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestUpdateSharePoliciesRequest} obj Optional instance to populate.
    * @return {module:model/RestUpdateSharePoliciesRequest} The populated <code>RestUpdateSharePoliciesRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestUpdateSharePoliciesRequest();

            
            
            

            if (data.hasOwnProperty('Uuid')) {
                obj['Uuid'] = ApiClient.convertToType(data['Uuid'], 'String');
            }
            if (data.hasOwnProperty('Policies')) {
                obj['Policies'] = ApiClient.convertToType(data['Policies'], [ServiceResourcePolicy]);
            }
        }
        return obj;
    }

    /**
    * @member {String} Uuid
    */
    Uuid = undefined;
    /**
    * @member {Array.<module:model/ServiceResourcePolicy>} Policies
    */
    Policies = undefined;








}


