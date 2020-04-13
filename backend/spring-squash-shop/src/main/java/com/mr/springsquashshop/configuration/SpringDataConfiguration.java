package com.mr.springsquashshop.configuration;

import com.mr.springsquashshop.entity.Product;
import com.mr.springsquashshop.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.core.mapping.ExposureConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class SpringDataConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration restConfig) {
        ExposureConfiguration config = restConfig.getExposureConfiguration();

        config.forDomainType(Product.class).withItemExposure((metadata, httpMethods) ->
                httpMethods.disable(HttpMethod.PATCH, HttpMethod.PUT, HttpMethod.DELETE));

        config.forDomainType(ProductCategory.class).withItemExposure((metadata, httpMethods) ->
                httpMethods.disable(HttpMethod.PATCH, HttpMethod.PUT, HttpMethod.DELETE));
    }

}
