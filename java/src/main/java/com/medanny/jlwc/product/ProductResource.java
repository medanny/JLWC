package com.medanny.jlwc.product;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class ProductResource {
    private ProductDaoService service;

    public ProductResource(ProductDaoService service){
        this.service = service;
    }
    @GetMapping("/product")
    public List<Product> getProducts(){
        return service.findAll();
    }
    @PostMapping("/product")
    public Product createUser(@RequestBody Product product){
        System.out.println("Adding Product: " + product);
        return service.add(product);
    }

    @GetMapping
    public String helloWorld(){
        return "Hello World!";
    }
}
