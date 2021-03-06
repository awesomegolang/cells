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

'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

/**
* The RestDiscoveryResponse model module.
* @module model/RestDiscoveryResponse
* @version 1.0
*/

var RestDiscoveryResponse = (function () {
    /**
    * Constructs a new <code>RestDiscoveryResponse</code>.
    * @alias module:model/RestDiscoveryResponse
    * @class
    */

    function RestDiscoveryResponse() {
        _classCallCheck(this, RestDiscoveryResponse);

        this.PackageType = undefined;
        this.PackageLabel = undefined;
        this.Version = undefined;
        this.BuildStamp = undefined;
        this.BuildRevision = undefined;
        this.Endpoints = undefined;
    }

    /**
    * Constructs a <code>RestDiscoveryResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RestDiscoveryResponse} obj Optional instance to populate.
    * @return {module:model/RestDiscoveryResponse} The populated <code>RestDiscoveryResponse</code> instance.
    */

    RestDiscoveryResponse.constructFromObject = function constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RestDiscoveryResponse();

            if (data.hasOwnProperty('PackageType')) {
                obj['PackageType'] = _ApiClient2['default'].convertToType(data['PackageType'], 'String');
            }
            if (data.hasOwnProperty('PackageLabel')) {
                obj['PackageLabel'] = _ApiClient2['default'].convertToType(data['PackageLabel'], 'String');
            }
            if (data.hasOwnProperty('Version')) {
                obj['Version'] = _ApiClient2['default'].convertToType(data['Version'], 'String');
            }
            if (data.hasOwnProperty('BuildStamp')) {
                obj['BuildStamp'] = _ApiClient2['default'].convertToType(data['BuildStamp'], 'Number');
            }
            if (data.hasOwnProperty('BuildRevision')) {
                obj['BuildRevision'] = _ApiClient2['default'].convertToType(data['BuildRevision'], 'String');
            }
            if (data.hasOwnProperty('Endpoints')) {
                obj['Endpoints'] = _ApiClient2['default'].convertToType(data['Endpoints'], { 'String': 'String' });
            }
        }
        return obj;
    };

    /**
    * @member {String} PackageType
    */
    return RestDiscoveryResponse;
})();

exports['default'] = RestDiscoveryResponse;
module.exports = exports['default'];

/**
* @member {String} PackageLabel
*/

/**
* @member {String} Version
*/

/**
* @member {Number} BuildStamp
*/

/**
* @member {String} BuildRevision
*/

/**
* @member {Object.<String, String>} Endpoints
*/
