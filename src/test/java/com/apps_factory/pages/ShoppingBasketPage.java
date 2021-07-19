package com.apps_factory.pages;

import com.apps_factory.utilities.BrowserUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ShoppingBasketPage extends BasePage {

    @FindBy(css = "#hlb-view-cart-announce")
    public WebElement BasketButton;
    @FindBy(xpath = " //h1")
    public WebElement subtitle;

    @FindBy(xpath = "//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap sc-product-price a-text-bold']")
    public List<WebElement> productPrices;

    @FindBy(xpath = "//span[@class='a-size-medium a-color-base sc-price sc-white-space-nowrap']")
    public List<WebElement> totalProductPrices;
    @FindBy(name = "proceedToRetailCheckout")
    public WebElement checkoutButton;

    /**
     * check if expected total price equals to actual total price
     *
     * @return boolean
     */
    public boolean checkTotalPrice() {
        List<String> pricesStirng = BrowserUtils.getElementsText(productPrices);
        double totalPrice = 0;
        for (String price : pricesStirng) {
            //when we calculate,we do not need "€" sign,hence we start from first index to exclude €
            double priceInDouble = Double.parseDouble(price.substring(1));
            totalPrice += priceInDouble;
        }
        String expectedPrice = totalProductPrices.get(0).getText();
        double expectedTotalPrice = Double.parseDouble(expectedPrice.substring(1));
        if (totalPrice == expectedTotalPrice) {
            return true;
        } else {
            return false;
        }
    }
}