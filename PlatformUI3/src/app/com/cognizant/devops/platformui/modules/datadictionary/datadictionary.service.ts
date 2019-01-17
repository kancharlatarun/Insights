/*******************************************************************************
 * Copyright 2017 Cognizant Technology Solutions
 * 
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License.  You may obtain a copy
 * of the License at
 * 
 *   http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations under
 * the License.
 ******************************************************************************/
import { Injectable } from '@angular/core';
import { RestCallHandlerService } from '@insights/common/rest-call-handler.service';
import { Observable } from 'rxjs';


export interface IDataDictionaryService {
    loadToolsAndCategories(): Promise<any>;
    loadToolProperties(toolName: string, categoryName: string) : Promise<any>;
    loadToolsRelationshipAndProperties(startToolName: string, startToolCategory: string, endToolName: string, endToolCatergory: string): Promise<any>;
}




@Injectable()
export class DataDictionaryService implements IDataDictionaryService {
    
    constructor(private restCallHandlerService: RestCallHandlerService) {
    }

    loadToolsAndCategories(): Promise<any> {
        var restHandler = this.restCallHandlerService;
        return restHandler.get("DATA_DICTIONARY_TOOLS_AND_CATEGORY");
    }

    loadToolProperties(toolName: string, categoryName: string): Promise<any> {
        var restHandler = this.restCallHandlerService;
        return restHandler.get("DATA_DICTIONARY_TOOL_PROPERTIES", { 'toolName': toolName, 'categoryName': categoryName });
    }

    loadToolsRelationshipAndProperties(startToolName: string, startToolCategory: string, endToolName: string, endToolCatergory: string):Promise<any> {
        var restHandler = this.restCallHandlerService;
        return restHandler.get("DATA_DICTIONARY_TOOLS_RELATIONSHIPS", { 'startToolName': startToolName, 'startToolCategory': startToolCategory, 'endToolName': endToolName, 'endToolCatergory': endToolCatergory });
    }

}

