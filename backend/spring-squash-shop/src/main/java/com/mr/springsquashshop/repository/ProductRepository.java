package com.mr.springsquashshop.repository;

import com.mr.springsquashshop.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;

@RepositoryRestController
public interface ProductRepository extends CrudRepository<Product,Long> {
}
