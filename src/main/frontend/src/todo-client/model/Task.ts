/**
 * TODO API
 * A sample todo api
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface Task {
    /**
     * Unique identifier
     */
    id?: string;

    /**
     * Title Of the task
     */
    title?: string;

    /**
     * Task description
     */
    description?: string;

    /**
     * Date of creating the task
     */
    createdDate?: Date;

    /**
     * Date of creating the task
     */
    lastUpdatedDate?: Date;

    /**
     * Date of creating the task
     */
    taskCompletionDate?: Date;

    /**
     * status of task completion
     */
    done?: boolean;

    /**
     * category group of particular task
     */
    category?: string;

}
