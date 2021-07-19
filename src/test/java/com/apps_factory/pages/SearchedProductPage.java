package com.apps_factory.pages;

import com.apps_factory.utilities.BrowserUtils;
import com.apps_factory.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SearchedProductPage extends BasePage {

    @FindBy(xpath = "//*[@class='a-button-text a-declarative']")
    public WebElement Sort_by_dropDown;
    @FindBy(xpath = "//div[@class='a-section a-spacing-none']")
    public List<WebElement> products;
    @FindBy(xpath = "(//*[text()='Price: Low to High'])[2]")
    public WebElement LowToHighOption;

    public void clickOption() {
        BrowserUtils.waitFor(2);
        LowToHighOption.click();
        BrowserUtils.waitFor(4);
    }

    /**
     * returns the searched product with lowest price as a Map
     *
     * @param  'product name' from dataTable in feature file
     * @return Map of String
     */
    public Map<String, String> lowestPrice(String productName) {
        Map<String, String> productWithLowestPrice = new HashMap<>();
        //1>we will get the index of the searched product(as a parent)
        // 1>and with that index we will get the name and price belongs to the product
        List<Integer> validProductsIndex = new ArrayList<>();

        for (int i=0; i<products.size();i++) {
            // 1>when we search, we will see some products with the searched name but has no price,we should exclude this kind of product(or advertisement)
            // 2> and this kind of product has no "€" since it has no price
            if      (products.get(i).getText().contains("€")
                    // 1>when we search Skittles for example after selecting the price from low to high, the first product
                    //2> that we see is the amaozn recommendation, although its price is lower,in order to buy that product,
                    //3> we should at first buy amazon prime so it shows "with prime" so we should exclude it
                    && products.get(i).getText().toLowerCase().contains("prime")==false
                    // 1>when we search in amazon maybe amazon list a product with a lowest price but not the same product that we searched
                    // 2>so it should contain our searched product
                    && products.get(i).getText().toLowerCase().contains(productName.toLowerCase())) {
                    validProductsIndex .add(i);
            }
        }
        //1>below are the xpath features that can be found in amazon website. from product path(as a parent) we will get
        //2> related product name and product price

        WebElement lowestProductName = Driver.get().findElement(By.xpath("(//div[@class='a-section a-spacing-none'])[" + (validProductsIndex.get(0)+1) + "]//h2//span"));
        WebElement lowestProductPrice = Driver.get().findElement(By.xpath("(//div[@class='a-section a-spacing-none'])[" + (validProductsIndex.get(0)+1) + "]//span[@class='a-price-whole']"));
      //  System.out.println(lowestProductName.getText());
      //  System.out.println(lowestProductPrice.getText());
        productWithLowestPrice.put("name", lowestProductName.getText());
        productWithLowestPrice.put("price", lowestProductPrice.getText());
        lowestProductPrice.click();

        return productWithLowestPrice;
    }
}




