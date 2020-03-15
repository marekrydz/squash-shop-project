package com.mr.springsquashshop.repository;

import com.mr.springsquashshop.entity.ProductCategory;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "categories", itemResourceRel = "categories")
public interface ProductCategoryRepository extends CrudRepository<ProductCategory, Long> {

}
