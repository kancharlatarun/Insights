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
package com.cognizant.devops.platformservice.content.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;

@ComponentScan(basePackages = {"com.cognizant.devops.platformservice"})
@Configuration
// @EnableWebMvc
public class ContentConfig  {
	
	 @Bean
     public ReloadableResourceBundleMessageSource messageSource () {
		 ReloadableResourceBundleMessageSource messageSource =
                             new ReloadableResourceBundleMessageSource();
         messageSource.setBasenames("classpath:/messages/build/msg","classpath:/messages/deploy/msg","classpath:/messages/codequality/msg","classpath:/messages/development/msg","i18n");
         messageSource.setDefaultEncoding("UTF-8");
         messageSource.setCacheSeconds(120);
         return messageSource;
     }

}

