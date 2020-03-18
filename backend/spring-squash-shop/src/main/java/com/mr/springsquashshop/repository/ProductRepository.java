package com.mr.springsquashshop.repository;

import com.mr.springsquashshop.entity.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.webmvc.RepositoryRestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:4200")
@RepositoryRestController
public interface ProductRepository extends CrudRepository<Product,Long> {
}
