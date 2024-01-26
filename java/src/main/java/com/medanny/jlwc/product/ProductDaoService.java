package com.medanny.jlwc.product;

import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class ProductDaoService {
    private static List<Product> products = new ArrayList<>();

    static {
        products.add(new Product(1, "Product A", 17.99));
        products.add(new Product(2, "Product B", 12.99));
        products.add(new Product(3, "Product C", 9.99));
    }

    public List<Product> findAll(){
        return products;
    }

    public Product add(Product product){
        product.setId(products.size() + 1);
        products.add(product);
        return product;
    }
}
