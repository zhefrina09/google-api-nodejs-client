/**
 * Copyright 2014 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* jshint maxlen: false */

'use strict';

var createAPIRequest = require('../../lib/apirequest');

/**
 * Fitness
 *
 * @classdesc Google Fit API
 * @namespace fitness
 * @version  v1
 * @variation v1
 * @this Fitness
 * @param {object=} options Options for Fitness
 */
function Fitness(options) {

  var self = this;
  this._options = options || {};

  this.users = {

    dataSources: {

      /**
       * fitness.users.dataSources.create
       *
       * @desc Creates a new data source that is unique across all data sources belonging to this user. The data stream ID field can be omitted and will be generated by the server with the correct format. The data stream ID is an ordered combination of some fields from the data source. In addition to the data source fields reflected into the data source ID, the developer project number that is authenticated when creating the data source is included. This developer project number is obfuscated when read by any other developer reading public data types.
       *
       * @alias fitness.users.dataSources.create
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.userId - Create the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      create: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources',
            method: 'POST'
          },
          params: params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * fitness.users.dataSources.delete
       *
       * @desc Delete the data source if there are no datapoints associated with it
       *
       * @alias fitness.users.dataSources.delete
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.dataSourceId - The data stream ID of the data source to delete.
       * @param  {string} params.userId - Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources/{dataSourceId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['userId', 'dataSourceId'],
          pathParams: ['dataSourceId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * fitness.users.dataSources.get
       *
       * @desc Returns a data source identified by a data stream ID.
       *
       * @alias fitness.users.dataSources.get
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.dataSourceId - The data stream ID of the data source to retrieve.
       * @param  {string} params.userId - Retrieve a data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      get: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources/{dataSourceId}',
            method: 'GET'
          },
          params: params,
          requiredParams: ['userId', 'dataSourceId'],
          pathParams: ['dataSourceId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * fitness.users.dataSources.list
       *
       * @desc Lists all data sources that are visible to the developer, using the OAuth scopes provided. The list is not exhaustive: the user may have private data sources that are only visible to other developers or calls using other scopes.
       *
       * @alias fitness.users.dataSources.list
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.dataTypeName - The names of data types to include in the list. If not specified, all data sources will be returned.
       * @param  {string} params.userId - List data sources for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources',
            method: 'GET'
          },
          params: params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * fitness.users.dataSources.patch
       *
       * @desc Updates a given data source. It is an error to modify the data source's data stream ID, data type, type, stream name or device information apart from the device version. Changing these fields would require a new unique data stream ID and separate data source.  Data sources are identified by their data stream ID. This method supports patch semantics.
       *
       * @alias fitness.users.dataSources.patch
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.dataSourceId - The data stream ID of the data source to update.
       * @param  {string} params.userId - Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      patch: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources/{dataSourceId}',
            method: 'PATCH'
          },
          params: params,
          requiredParams: ['userId', 'dataSourceId'],
          pathParams: ['dataSourceId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * fitness.users.dataSources.update
       *
       * @desc Updates a given data source. It is an error to modify the data source's data stream ID, data type, type, stream name or device information apart from the device version. Changing these fields would require a new unique data stream ID and separate data source.  Data sources are identified by their data stream ID.
       *
       * @alias fitness.users.dataSources.update
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string} params.dataSourceId - The data stream ID of the data source to update.
       * @param  {string} params.userId - Update the data source for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources/{dataSourceId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['userId', 'dataSourceId'],
          pathParams: ['dataSourceId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      datasets: {

        /**
         * fitness.users.dataSources.datasets.delete
         *
         * @desc Performs an inclusive delete of all data points whose start and end times have any overlap with the time range specified by the dataset ID. For most data types, the entire data point will be deleted. For data types where the time span represents a consistent value (such as com.google.activity.segment), and a data point straddles either end point of the dataset, only the overlapping portion of the data point will be deleted.
         *
         * @alias fitness.users.dataSources.datasets.delete
         * @memberOf! fitness(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string=} params.currentTimeMillis - The client's current time in milliseconds since epoch.
         * @param  {string} params.dataSourceId - The data stream ID of the data source that created the dataset.
         * @param  {string} params.datasetId - Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
         * @param  {string=} params.modifiedTimeMillis - When the operation was performed on the client.
         * @param  {string} params.userId - Delete a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        delete: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}',
              method: 'DELETE'
            },
            params: params,
            requiredParams: ['userId', 'dataSourceId', 'datasetId'],
            pathParams: ['dataSourceId', 'datasetId', 'userId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * fitness.users.dataSources.datasets.get
         *
         * @desc Returns a dataset containing all data points whose start and end times overlap with the specified range of the dataset minimum start time and maximum end time. Specifically, any data point whose start time is less than or equal to the dataset end time and whose end time is greater than or equal to the dataset start time.
         *
         * @alias fitness.users.dataSources.datasets.get
         * @memberOf! fitness(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string} params.dataSourceId - The data stream ID of the data source that created the dataset.
         * @param  {string} params.datasetId - Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
         * @param  {integer=} params.limit - If specified, no more than this many data points will be included in the dataset. If the there are more data points in the dataset, nextPageToken will be set in the dataset response.
         * @param  {string=} params.pageToken - The continuation token, which is used to page through large datasets. To get the next page of a dataset, set this parameter to the value of nextPageToken from the previous response. Each subsequent call will yield a partial dataset with data point end timestamps that are strictly smaller than those in the previous partial response.
         * @param  {string} params.userId - Retrieve a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        get: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}',
              method: 'GET'
            },
            params: params,
            requiredParams: ['userId', 'dataSourceId', 'datasetId'],
            pathParams: ['dataSourceId', 'datasetId', 'userId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        },

        /**
         * fitness.users.dataSources.datasets.patch
         *
         * @desc Adds data points to a dataset. The dataset need not be previously created. All points within the given dataset will be returned with subsquent calls to retrieve this dataset. Data points can belong to more than one dataset. This method does not use patch semantics.
         *
         * @alias fitness.users.dataSources.datasets.patch
         * @memberOf! fitness(v1)
         *
         * @param  {object} params - Parameters for request
         * @param  {string=} params.currentTimeMillis - The client's current time in milliseconds since epoch. Note that the minStartTimeNs and maxEndTimeNs properties in the request body are in nanoseconds instead of milliseconds.
         * @param  {string} params.dataSourceId - The data stream ID of the data source that created the dataset.
         * @param  {string} params.datasetId - Dataset identifier that is a composite of the minimum data point start time and maximum data point end time represented as nanoseconds from the epoch. The ID is formatted like: "startTime-endTime" where startTime and endTime are 64 bit integers.
         * @param  {string} params.userId - Patch a dataset for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
         * @param  {object} params.resource - Request body data
         * @param  {callback} callback - The callback that handles the response.
         * @return {object} Request object
         */
        patch: function(params, callback) {
          var parameters = {
            options: {
              url: 'https://www.googleapis.com/fitness/v1/users/{userId}/dataSources/{dataSourceId}/datasets/{datasetId}',
              method: 'PATCH'
            },
            params: params,
            requiredParams: ['userId', 'dataSourceId', 'datasetId'],
            pathParams: ['dataSourceId', 'datasetId', 'userId'],
            context: self
          };

          return createAPIRequest(parameters, callback);
        }
      }
    },

    sessions: {

      /**
       * fitness.users.sessions.delete
       *
       * @desc Deletes a session specified by the given session ID.
       *
       * @alias fitness.users.sessions.delete
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.currentTimeMillis - The client's current time in milliseconds since epoch.
       * @param  {string} params.sessionId - The ID of the session to be deleted.
       * @param  {string} params.userId - Delete a session for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      delete: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/sessions/{sessionId}',
            method: 'DELETE'
          },
          params: params,
          requiredParams: ['userId', 'sessionId'],
          pathParams: ['sessionId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * fitness.users.sessions.list
       *
       * @desc Lists sessions previously created.
       *
       * @alias fitness.users.sessions.list
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.endTime - An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
       * @param  {boolean=} params.includeDeleted - If true, deleted sessions will be returned. When set to true, sessions returned in this response will only have an ID and will not have any other fields.
       * @param  {string=} params.pageToken - The continuation token, which is used to page through large result sets. To get the next page of results, set this parameter to the value of nextPageToken from the previous response.
       * @param  {string=} params.startTime - An RFC3339 timestamp. Only sessions ending between the start and end times will be included in the response.
       * @param  {string} params.userId - List sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      list: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/sessions',
            method: 'GET'
          },
          params: params,
          requiredParams: ['userId'],
          pathParams: ['userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      },

      /**
       * fitness.users.sessions.update
       *
       * @desc Updates or insert a given session.
       *
       * @alias fitness.users.sessions.update
       * @memberOf! fitness(v1)
       *
       * @param  {object} params - Parameters for request
       * @param  {string=} params.currentTimeMillis - The client's current time in milliseconds since epoch.
       * @param  {string} params.sessionId - The ID of the session to be created.
       * @param  {string} params.userId - Create sessions for the person identified. Use me to indicate the authenticated user. Only me is supported at this time.
       * @param  {object} params.resource - Request body data
       * @param  {callback} callback - The callback that handles the response.
       * @return {object} Request object
       */
      update: function(params, callback) {
        var parameters = {
          options: {
            url: 'https://www.googleapis.com/fitness/v1/users/{userId}/sessions/{sessionId}',
            method: 'PUT'
          },
          params: params,
          requiredParams: ['userId', 'sessionId'],
          pathParams: ['sessionId', 'userId'],
          context: self
        };

        return createAPIRequest(parameters, callback);
      }
    }
  };
}

/**
 * Exports Fitness object
 * @type Fitness
 */
module.exports = Fitness;